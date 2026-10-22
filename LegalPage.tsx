import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { useRouter } from '../utils/router';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { navigate } = useRouter();
  const isPrivacy = type === 'privacy';

  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 text-xs text-[#AAB6C7]">
        <button
          onClick={() => navigate('/')}
          className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-white font-medium">{isPrivacy ? 'Privacy Policy' : 'Terms of Service'}</span>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#28B8FF]">
          Legal Template
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        <p className="text-xs text-[#FFB938] bg-[#FFB938]/10 border border-[#FFB938]/30 px-3 py-1.5 rounded-lg inline-block">
          Template Notice: This document is provided as an editable standard digital agency framework and does not constitute formal legal advice.
        </p>
      </div>

      <div className="rounded-2xl bg-[#0D1420] border border-[#1B293D] p-8 sm:p-10 space-y-8 text-xs sm:text-sm text-[#AAB6C7] leading-relaxed">
        {isPrivacy ? (
          <>
            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">1. Information We Collect</h2>
              <p>
                When you submit an inquiry through the Cadence Digital website, we collect your name, email address, company or brand name, optional website URL, and details regarding your social media goals and budget range. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">2. How We Use Collected Data</h2>
              <p>
                Your submitted contact information is used strictly to evaluate your business inquiry, prepare a customized marketing strategy proposal, coordinate discovery consultations, and deliver our contracted digital marketing services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">3. Data Storage & Security</h2>
              <p>
                Inquiry data submitted through our forms is processed securely with encrypted transmission. Backend persistence is secured via industry-standard Row Level Security protocols. Only authorized agency team members have access to review incoming proposals.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">4. Cookies & Analytics</h2>
              <p>
                We do not deploy intrusive third-party cross-site trackers or ad-retargeting cookies. Standard essential cookies may be utilized for server session validation and interface responsiveness.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">5. Contact Information</h2>
              <p>
                If you have questions about your data or wish to request removal of your inquiry record, contact us at{' '}
                <a href="mailto:inquiries@cadencedigital.agency" className="text-[#28B8FF] hover:underline">
                  inquiries@cadencedigital.agency
                </a>
                .
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">1. Acceptance of Terms</h2>
              <p>
                By accessing or submitting information to Cadence Digital, you agree to these standard Terms of Service. If you do not agree with any portion of these terms, please refrain from using our digital services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">2. Agency Service Scope</h2>
              <p>
                Cadence Digital provides social media content creation, posting, community management, analytics, and strategy consulting. Specific deliverables, publishing calendars, and performance milestones are governed by individual client Statement of Work (SOW) agreements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">3. Intellectual Property</h2>
              <p>
                All custom graphics, video edits, copy, and creative assets produced for clients become the exclusive property of the client upon final invoice settlement, subject to standard agency portfolio demonstration display rights unless explicitly prohibited in writing.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">4. Demonstration Content Notice</h2>
              <p>
                Certain case studies, client logos, and metrics featured on this development preview site are designated as demonstration examples to showcase agency capabilities and layout frameworks.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white font-display">5. Limitation of Liability</h2>
              <p>
                While Cadence Digital employs strategic best practices to maximize audience reach and engagement, third-party social media platform algorithm changes, account suspensions by platform providers, or unexpected outages are outside agency direct control.
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};
