import React from 'react';
import { Mail, Clock, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { useRouter } from '../utils/router';

export const ContactPage: React.FC = () => {
  const { queryParams } = useRouter();
  const prefillService = queryParams.get('service') || undefined;
  const prefillPlan = queryParams.get('plan') || undefined;

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#28B8FF]">
          Client Inquiries
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Let’s Discuss Your Brand’s Growth Cadence
        </h1>
        <p className="text-base text-[#AAB6C7] leading-relaxed">
          Tell us about your brand goals, publishing bottlenecks, and target milestones. Our strategy team reviews every inquiry personally.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Informational Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 space-y-4">
            <h2 className="text-base font-bold font-display text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#28B8FF]" />
              The Partnership Process
            </h2>
            <div className="space-y-3 text-xs text-[#AAB6C7]">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#101A29] border border-[#1B293D] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong className="text-white">Inquiry Review:</strong> We analyze your brand's digital presence and competitive category.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#101A29] border border-[#1B293D] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong className="text-white">Discovery Call:</strong> A focused 20-minute consultation with our creative strategy director.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#101A29] border border-[#1B293D] text-white flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong className="text-white">Tailored Proposal:</strong> Clear monthly scope, asset cadence, and KPI roadmap.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 space-y-3 text-xs">
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">
              Direct Contact & Studio
            </h3>
            <div className="space-y-2 text-[#AAB6C7]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#28B8FF]" />
                <a href="mailto:inquiries@cadencedigital.agency" className="text-white hover:text-[#28B8FF]">
                  inquiries@cadencedigital.agency
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#35E59A]" />
                <span>Mon – Fri, 9:00 AM – 6:00 PM EST</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#101A29] border border-[#1B293D] p-5 flex items-start gap-3 text-xs text-[#AAB6C7]">
            <ShieldCheck className="w-5 h-5 text-[#35E59A] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-white">Confidentiality Assured</p>
              <p className="text-[11px] mt-0.5">
                All submitted briefs and proprietary product specifications are treated under mutual non-disclosure standards.
              </p>
            </div>
          </div>
        </div>

        {/* Right: The Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm
            initialService={prefillService}
            initialPlan={prefillPlan}
          />
        </div>
      </div>
    </div>
  );
};
