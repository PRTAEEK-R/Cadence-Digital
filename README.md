# Cadence Digital — Creative Agency Web Application

**Cadence Digital** is a production-ready, full-stack digital marketing and social media management agency platform. Built with a dark luxury aesthetic (#070B12), featuring interactive feed previews, five colorful signature service rows, dynamic case study previews, transparent pricing retainers, and a secure backend lead capture system with Zod validation and Supabase integration.

---

## 🌟 Key Features

1. **Signature Services Section (High Priority Visual Design)**
   - Five stacked horizontal rows inspired by the agency creative system.
   - Distinctive color accents:
     - **01 Content Creation & Curation**: Electric Blue (`#28B8FF`)
     - **02 Posting & Scheduling**: Purple (`#B76AFF`)
     - **03 Community Management**: Green (`#35E59A`)
     - **04 Analytics & Reporting**: Amber (`#FFB938`)
     - **05 Social Media Strategy**: Pink (`#FF5799`)
   - Rounded square icon containers, thin vertical accent bars, smooth hover elevation, soft glows, and interactive navigation to deep-linked service detail routes.

2. **Interactive Hero Visual**
   - High-fidelity simulated social media management console.
   - Interactive multi-view switcher:
     - **Feed Reel Preview**: 9:16 aspect ratio player simulation with real hook retention tracking, like/bookmark toggles, and audio indicators.
     - **Publishing Calendar Matrix**: 7-day scheduled distribution cadence.
     - **Growth Analytics**: Organic reach velocity, save ratios, and inbound conversion tracking.

3. **Complete Routing Architecture**
   - `/` — Full-length flagship homepage.
   - `/services` — Services directory with deep-dive deliverables.
   - `/services/:slug` — Individual detail pages for all five core disciplines.
   - `/portfolio` — Filterable case study showcase with modal breakdowns.
   - `/about` — Agency story, mission, approach, and operational standards.
   - `/pricing` — Retainer packages (Starter, Growth, Premium) with feature comparison.
   - `/contact` — Comprehensive inquiry form with auto-prefilling based on selected plan or service.
   - `/privacy` & `/terms` — Clean, editable legal policies.

4. **Inquiry Lead Generation System & Persistence**
   - Client-side & server-side validation using **Zod**.
   - Anti-spam honeypot mechanism (`hp`).
   - Duplicate submission protection and clear error feedback.
   - Dual-persistence engine:
     - **Supabase PostgreSQL** REST integration when configured via environment variables.
     - **Server Persistent Storage** fallback guaranteeing that form submissions always succeed out of the box.
   - Built-in Inquiries Review Drawer in the navigation bar to test and inspect submitted leads live.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm

### 2. Installation
```bash
npm install
```

### 3. Development Server
Start the Express server with Vite middleware:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Production Build
```bash
npm run build
npm start
```

---

## 🗄️ Supabase Setup & Migration

To configure Supabase for persistent cloud storage:

1. Create a new project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** tab in your Supabase dashboard.
3. Paste and run the contents of `schema.sql`:
   ```sql
   CREATE TABLE IF NOT EXISTS public.inquiries (
     id TEXT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(255) NOT NULL,
     business_name VARCHAR(150) NOT NULL,
     website_url TEXT,
     service VARCHAR(50) NOT NULL,
     budget VARCHAR(50),
     project_description TEXT NOT NULL,
     consent BOOLEAN DEFAULT TRUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
     status VARCHAR(30) DEFAULT 'new' NOT NULL
   );

   CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);
   CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);

   ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Allow service_role full access" ON public.inquiries
     FOR ALL TO service_role USING (true) WITH CHECK (true);

   CREATE POLICY "Allow public insert" ON public.inquiries
     FOR INSERT TO anon WITH CHECK (true);
   ```
4. Copy your project URL and service role key into your environment variables:
   ```env
   SUPABASE_URL="https://your-project.supabase.co"
   SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
   ```

*(Note: If Supabase credentials are not provided, the application will automatically persist inquiries to `./data/inquiries.json`, ensuring 100% operational functionality).*

---

## ✉️ Optional Email Notifications (Resend)

To receive real-time email alerts when a prospect submits an inquiry:
1. Obtain an API key from [resend.com](https://resend.com).
2. Set `RESEND_API_KEY="re_..."` and `NOTIFICATION_EMAIL="your-team@cadencedigital.agency"` in your environment variables.

---

## 🧪 Testing Instructions

1. **Verify Home & Signature Rows**:
   - Scroll to "Five Specialized Pillars". Hover over each of the 5 rows to verify upward translation, accent glow, and arrow movement.
   - Click "Learn More" or "Book Service" to verify deep-link routing to `/services/:slug` and `/contact?service=:slug`.
2. **Verify Hero Console**:
   - Click between "Feed Reel", "Calendar", and "Analytics" tabs.
   - Click the Heart and Bookmark buttons on the mock video player.
3. **Verify Lead Capture**:
   - Navigate to `/contact`.
   - Submit invalid details (e.g., empty fields, short description) to test inline error feedback.
   - Submit a valid inquiry. Verify the confirmation screen with the generated Inquiry Reference ID.
   - Open the "Inquiries" drawer in the top navigation bar to view your submitted lead in real-time.
4. **Verify Mobile Navigation**:
   - Resize viewport to mobile width (&lt; 768px). Open the drawer menu and select a link to ensure smooth navigation and automatic drawer closing.

---

## 🌐 Custom Domain Configuration

To connect a custom domain (e.g., `cadencedigital.agency`):
1. In your hosting platform (Vercel, Cloud Run, or Netlify), navigate to **Domains**.
2. Add your custom domain.
3. Add the provided `CNAME` or `A` records to your DNS provider (Cloudflare, Namecheap, Google Domains).
4. SSL certificates are provisioned automatically.
