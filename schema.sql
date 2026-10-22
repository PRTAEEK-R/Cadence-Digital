-- Cadence Digital: Inquiries Table Schema for Supabase / PostgreSQL
-- Run this migration in your Supabase SQL Editor to initialize persistence.

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

-- Index for timestamp querying
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries(status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow server service_role key full read/write access
CREATE POLICY "Allow service_role full access" ON public.inquiries
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Allow public anonymous inserts from the agency inquiry form
CREATE POLICY "Allow public insert" ON public.inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Restrict public read access (inquiries contain private contact info)
CREATE POLICY "Deny public select" ON public.inquiries
  FOR SELECT
  TO anon
  USING (false);
