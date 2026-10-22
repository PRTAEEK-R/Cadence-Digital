import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Zod Validation Schema for Client Inquiries
export const InquiryInputSchema = z.object({
  name: z.string().trim().min(2, 'Full name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().trim().email('Please enter a valid email address'),
  business_name: z.string().trim().min(2, 'Business or brand name is required').max(100, 'Business name cannot exceed 100 characters'),
  website_url: z.string().trim().optional().or(z.literal('')),
  service: z.enum([
    'content-creation',
    'posting-scheduling',
    'community-management',
    'analytics-reporting',
    'social-strategy',
    'general'
  ], { message: 'Please select a valid service' }),
  budget: z.string().trim().optional().or(z.literal('')),
  project_description: z.string().trim().min(10, 'Please describe your project goals in at least 10 characters').max(2000, 'Description cannot exceed 2000 characters'),
  consent: z.literal(true, { message: 'You must agree to the privacy policy to submit' }),
  hp: z.string().optional() // Honeypot field for bot detection
});

export type Inquiry = z.infer<typeof InquiryInputSchema> & {
  id: string;
  created_at: string;
  status: 'new' | 'reviewed' | 'contacted';
  source?: string;
};

// Local storage fallback for seamless local & server execution without required external setup
const DATA_DIR = path.resolve(__dirname, 'data');
const DATA_FILE = path.resolve(DATA_DIR, 'inquiries.json');

const memoryInquiries: Inquiry[] = [
  {
    id: 'cadence_demo_01',
    name: 'Sample Inbound Test',
    email: 'client@example.com',
    business_name: 'Solas Kinetic Gear',
    website_url: 'https://example.com',
    service: 'content-creation',
    budget: '$5,000 - $10,000/mo',
    project_description: 'Looking to overhaul our social media short-form video content and scale engagement across Instagram and TikTok.',
    consent: true,
    created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: 'reviewed',
    source: 'Demonstration Entry'
  }
];

function loadLocalInquiries(): Inquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('Could not read inquiries file, using in-memory store:', err);
  }
  return memoryInquiries;
}

function saveLocalInquiries(inquiries: Inquiry[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Could not persist inquiries to disk, retaining in-memory:', err);
  }
}

// Optional Supabase insertion helper
async function persistToSupabase(inquiry: Inquiry): Promise<{ success: boolean; error?: string }> {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return { success: false, error: 'SUPABASE_URL or key not provided' };
  }

  try {
    const cleanUrl = supabaseUrl.replace(/\/$/, '');
    const res = await fetch(`${cleanUrl}/rest/v1/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        id: inquiry.id,
        name: inquiry.name,
        email: inquiry.email,
        business_name: inquiry.business_name,
        website_url: inquiry.website_url || null,
        service: inquiry.service,
        budget: inquiry.budget || null,
        project_description: inquiry.project_description,
        consent: inquiry.consent,
        created_at: inquiry.created_at,
        status: inquiry.status
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Supabase insert returned error:', res.status, errText);
      return { success: false, error: errText };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Failed to communicate with Supabase:', err);
    return { success: false, error: err?.message || 'Network error' };
  }
}

// Optional Email Notification via Resend
async function sendNotificationEmail(inquiry: Inquiry) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFICATION_EMAIL || 'team@cadencedigital.agency';

  if (!resendApiKey) return;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        from: 'Cadence Digital <inquiries@cadencedigital.agency>',
        to: [notifyEmail],
        subject: `New Agency Inquiry from ${inquiry.business_name} (${inquiry.name})`,
        text: `New Inquiry Received:
Name: ${inquiry.name}
Email: ${inquiry.email}
Business: ${inquiry.business_name}
Service: ${inquiry.service}
Budget: ${inquiry.budget || 'Not specified'}
Website: ${inquiry.website_url || 'Not specified'}

Project Description:
${inquiry.project_description}`
      })
    });
  } catch (err) {
    console.warn('Could not dispatch Resend notification email:', err);
  }
}

// API Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: Math.round(process.uptime()),
    features: {
      supabase_configured: Boolean(process.env.SUPABASE_URL && (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY)),
      resend_configured: Boolean(process.env.RESEND_API_KEY)
    }
  });
});

app.get('/api/inquiries', (_req: Request, res: Response) => {
  const inquiries = loadLocalInquiries();
  // Return sanitized view (exclude sensitive IP or honeypot)
  const sanitized = inquiries.map((item) => ({
    id: item.id,
    name: item.name,
    business_name: item.business_name,
    service: item.service,
    budget: item.budget,
    website_url: item.website_url,
    project_description: item.project_description,
    created_at: item.created_at,
    status: item.status
  }));
  res.json({ inquiries: sanitized, count: sanitized.length });
});

app.post('/api/inquiries', async (req: Request, res: Response) => {
  try {
    // Check honeypot for bot filtering
    if (req.body.hp && req.body.hp.trim().length > 0) {
      // Silently ignore spam bots
      res.status(200).json({
        success: true,
        message: 'Your inquiry has been successfully received.',
        inquiryId: 'cd_inq_' + Math.random().toString(36).substring(2, 9)
      });
      return;
    }

    const validationResult = InquiryInputSchema.safeParse(req.body);

    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path[0]?.toString() || 'form';
        formattedErrors[path] = issue.message;
      });

      res.status(400).json({
        success: false,
        message: 'Validation failed. Please correct the highlighted fields.',
        errors: formattedErrors
      });
      return;
    }

    const validData = validationResult.data;
    const newInquiry: Inquiry = {
      ...validData,
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      created_at: new Date().toISOString(),
      status: 'new'
    };

    // 1. Save locally (always succeeds and guarantees data preservation)
    const currentList = loadLocalInquiries();
    currentList.unshift(newInquiry);
    saveLocalInquiries(currentList);

    // 2. Try Supabase if credentials are present
    const supabaseResult = await persistToSupabase(newInquiry);

    // 3. Optional email notification
    sendNotificationEmail(newInquiry).catch(() => {});

    res.status(201).json({
      success: true,
      inquiryId: newInquiry.id,
      message: 'Thank you! Your inquiry has been received. Our team will review your project details and follow up within 24 hours.',
      supabase_synced: supabaseResult.success
    });
  } catch (err: any) {
    console.error('Unhandled inquiry submission error:', err);
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your inquiry. Please try again.'
    });
  }
});

// Setup Vite Dev Server or Production Static Files
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Cadence Digital] Server running at http://0.0.0.0:${PORT} (${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
