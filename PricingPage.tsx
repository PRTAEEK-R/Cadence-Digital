import React from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { useRouter } from '../utils/router';

export const PricingPage: React.FC = () => {
  const { navigate } = useRouter();

  const faqs = [
    {
      q: 'How does Cadence Digital structure client pricing?',
      a: 'We work on a predictable monthly retainer model tailored to your target platform count, publishing frequency, and asset production volume. This gives you budget certainty with no surprise billing.'
    },
    {
      q: 'Can we customize or combine service elements?',
      a: 'Yes. While our Starter, Growth, and Premium tiers represent our most popular workflows, we frequently tailor custom scopes for brands with unique campaign schedules or high-volume short-form video requirements.'
    },
    {
      q: 'What is the onboarding timeline?',
      a: 'Following your strategy kickoff call, our team completes your comprehensive social media footprint audit and delivers your first 30-day content calendar within 10 to 14 business days.'
    },
    {
      q: 'How do approvals work before posts go live?',
      a: 'We provide a private collaborative calendar link where your stakeholders can review, request revisions, and approve all video, graphics, and captions 7 days prior to their scheduled publication.'
    }
  ];

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35E59A]">
          Transparent Retainers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Flexible Retainers Built for Scalable Impact
        </h1>
        <p className="text-base text-[#AAB6C7] leading-relaxed">
          Select the partnership tier that matches your current growth stage. Every plan includes strategic creative direction, dedicated calendar management, and monthly performance analysis.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
              plan.isPopular
                ? 'bg-[#101A29] border-2 border-[#35E59A] shadow-[0_0_35px_rgba(53,229,154,0.15)] lg:-translate-y-2 p-8'
                : 'bg-[#0D1420] border border-[#1B293D] p-7'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#35E59A] text-[#070B12] text-xs font-extrabold uppercase tracking-wider shadow-lg">
                {plan.badge}
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#AAB6C7] uppercase tracking-wider">
                  {plan.serviceFocus}
                </span>
                <h2 className="text-2xl font-bold font-display text-white">{plan.name}</h2>
              </div>

              <div className="p-4 rounded-xl bg-[#070B12] border border-[#1B293D] space-y-1">
                <span className="text-xs text-[#AAB6C7]">Investment Structure:</span>
                <p className="text-2xl font-bold text-white font-display">{plan.priceNote}</p>
                <p className="text-[11px] text-[#AAB6C7]">Configured to your content volume & platforms</p>
              </div>

              <p className="text-xs text-[#AAB6C7] leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  What's Included:
                </p>
                <ul className="space-y-2.5 text-xs">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-[#F5F7FB]">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: plan.accentColor }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <button
                onClick={() => navigate(`/contact?plan=${plan.id}`)}
                className={`w-full py-3.5 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-[#35E59A] text-[#070B12] hover:bg-[#4affb0] shadow-[0_0_20px_rgba(53,229,154,0.3)]'
                    : 'bg-[#101A29] text-white hover:bg-[#152438] border border-[#1B293D] hover:border-[#28B8FF]'
                }`}
              >
                <span>Choose Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] text-center text-[#AAB6C7]">
                Best for: {plan.idealFor}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Comparison Matrix */}
      <div className="rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
          Direct Scope Comparison
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#1B293D] text-[#AAB6C7]">
                <th className="py-3 px-4 font-semibold">Core Capability</th>
                <th className="py-3 px-4 font-semibold text-center">Starter</th>
                <th className="py-3 px-4 font-semibold text-center text-[#35E59A]">Growth (Recommended)</th>
                <th className="py-3 px-4 font-semibold text-center">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1B293D]/60 text-[#F5F7FB]">
              <tr>
                <td className="py-3.5 px-4 font-medium">Content Creation & Graphics</td>
                <td className="py-3.5 px-4 text-center">12 Posts / mo</td>
                <td className="py-3.5 px-4 text-center font-bold text-[#35E59A]">24+ Mixed Media</td>
                <td className="py-3.5 px-4 text-center">Comprehensive Bespoke</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium">Short-Form Reels Production</td>
                <td className="py-3.5 px-4 text-center text-[#AAB6C7]/50">—</td>
                <td className="py-3.5 px-4 text-center font-bold text-[#35E59A]">Included (Weekly)</td>
                <td className="py-3.5 px-4 text-center">High Volume Multi-Angle</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium">Posting & Automated Scheduling</td>
                <td className="py-3.5 px-4 text-center text-[#AAB6C7]/50">Recommendations</td>
                <td className="py-3.5 px-4 text-center font-bold text-[#35E59A]">Full Hands-Off</td>
                <td className="py-3.5 px-4 text-center">Full Hands-Off Multi-Platform</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium">Daily Community Management</td>
                <td className="py-3.5 px-4 text-center text-[#AAB6C7]/50">—</td>
                <td className="py-3.5 px-4 text-center font-bold text-[#35E59A]">5 Days / Week</td>
                <td className="py-3.5 px-4 text-center">7 Days / Week Priority</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium">Strategic Roadmap & Benchmarking</td>
                <td className="py-3.5 px-4 text-center">Summary</td>
                <td className="py-3.5 px-4 text-center font-bold text-[#35E59A]">Monthly Briefing</td>
                <td className="py-3.5 px-4 text-center">Quarterly Deep Dives</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-medium">Dedicated Communication</td>
                <td className="py-3.5 px-4 text-center">Email & Portal</td>
                <td className="py-3.5 px-4 text-center font-bold text-[#35E59A]">Portal + Bi-weekly Sync</td>
                <td className="py-3.5 px-4 text-center">Private Agency Slack Channel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold font-display text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#0D1420] border border-[#1B293D] space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#28B8FF] shrink-0" />
                <span>{item.q}</span>
              </h3>
              <p className="text-xs text-[#AAB6C7] leading-relaxed pl-6">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
