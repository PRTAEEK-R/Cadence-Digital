export type ServiceId = 
  | 'content-creation'
  | 'posting-scheduling'
  | 'community-management'
  | 'analytics-reporting'
  | 'social-strategy';

export interface ServiceItem {
  id: ServiceId;
  number: string;
  title: string;
  tagline: string;
  description: string;
  accentColor: string;
  accentBg: string;
  borderColor: string;
  glowColor: string;
  iconName: 'Lightbulb' | 'Calendar' | 'Users' | 'TrendingUp' | 'Megaphone';
  deliverables: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  idealFor: string;
  turnaround: string;
  keyMetric: string;
}

export type PortfolioCategory = 'all' | 'posts' | 'reels' | 'branding' | 'campaigns';

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'posts' | 'reels' | 'branding' | 'campaigns';
  categoryLabel: string;
  summary: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  palette: string[];
  isDemo: boolean;
  accentColor: string;
}

export interface PricingPlan {
  id: 'starter' | 'growth' | 'premium';
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceNote: string;
  period: string;
  description: string;
  features: string[];
  idealFor: string;
  serviceFocus: string;
  accentColor: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  headline: string;
  description: string;
  details: string[];
  icon: string;
  accentColor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  isDemoNote: string;
  accentColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  business_name: string;
  website_url?: string;
  service: string;
  budget?: string;
  project_description: string;
  consent: boolean;
  hp?: string;
}
