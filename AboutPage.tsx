import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Target, Compass, Award, Users } from 'lucide-react';
import { useRouter } from '../utils/router';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="py-12 space-y-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B76AFF]">
          About Cadence Digital
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
          “Good Content Gets Attention. Great Strategy Builds Brands.”
        </h1>
        <p className="text-base sm:text-lg text-[#AAB6C7] leading-relaxed max-w-3xl">
          We are a modern creative agency dedicated to transforming social media from a stressful chore into a measurable growth engine.
        </p>
      </div>

      {/* 4 Pillars Grid: Story, Mission, Approach, Value */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Story */}
        <div className="p-8 rounded-2xl bg-[#0D1420] border border-[#1B293D] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#28B8FF]/10 text-[#28B8FF] flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">Our Story</h2>
          <p className="text-xs sm:text-sm text-[#AAB6C7] leading-relaxed">
            Cadence Digital was founded on a simple observation: most businesses struggle on social media not because they lack quality products, but because their execution is sporadic, disjointed, and divorced from strategy. We built an agile agency model that bridges top-tier visual production with daily operational discipline.
          </p>
        </div>

        {/* Our Mission */}
        <div className="p-8 rounded-2xl bg-[#0D1420] border border-[#1B293D] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#35E59A]/10 text-[#35E59A] flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">Our Mission</h2>
          <p className="text-xs sm:text-sm text-[#AAB6C7] leading-relaxed">
            To give modern brands an unmistakable presence in crowded digital feeds through magnetic creative, timely publishing, active community relationships, and data-informed continuous refinement.
          </p>
        </div>

        {/* Our Approach */}
        <div className="p-8 rounded-2xl bg-[#0D1420] border border-[#1B293D] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#FFB938]/10 text-[#FFB938] flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">Our Approach</h2>
          <p className="text-xs sm:text-sm text-[#AAB6C7] leading-relaxed">
            We don't post just to fill an arbitrary schedule. Every piece of content is anchored to one of four key objectives: authority building, engagement resonance, conversion momentum, or brand affinity. We measure success in genuine community connection and commercial pipeline.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="p-8 rounded-2xl bg-[#0D1420] border border-[#1B293D] space-y-3 relative overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-[#FF5799]/10 text-[#FF5799] flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold font-display text-white">Why Businesses Choose Us</h2>
          <p className="text-xs sm:text-sm text-[#AAB6C7] leading-relaxed">
            We operate as an extension of your leadership team. You get the combined firepower of a creative director, motion designer, copywriter, community manager, and growth analyst for a fraction of the cost of building an in-house team.
          </p>
        </div>
      </div>

      {/* Ethical Agency Principles */}
      <div className="p-8 rounded-2xl bg-[#101A29] border border-[#1B293D] space-y-6">
        <h2 className="text-2xl font-bold font-display text-white">
          Our Operational Standards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {[
            {
              title: 'Authentic Engagement Only',
              desc: 'We never buy followers, fake comments, or deploy spam bots. Real human connections drive durable brand value.'
            },
            {
              title: 'Transparent Reporting',
              desc: 'No cherry-picked vanity metrics. We give you honest performance assessments and clear next steps.'
            },
            {
              title: 'Client Data Privacy',
              desc: 'All brand assets, strategy documents, and confidential roadmap items are protected under strict NDA guidelines.'
            },
            {
              title: 'Predictable Communication',
              desc: 'Dedicated Slack channels, scheduled weekly syncs, and 24-hour turnaround on operational questions.'
            }
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#070B12] border border-[#1B293D] space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#35E59A]" />
                <h3 className="font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-[#AAB6C7] pl-6 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Banner */}
      <div className="text-center py-6 space-y-4">
        <h2 className="text-2xl font-bold font-display text-white">
          Ready to Build Your Brand’s Cadence?
        </h2>
        <button
          onClick={() => navigate('/contact')}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#28B8FF] to-[#0094F0] text-xs font-bold text-white shadow-[0_0_25px_rgba(40,184,255,0.4)] hover:shadow-[0_0_35px_rgba(40,184,255,0.6)] cursor-pointer"
        >
          <span>Connect with Our Strategy Lead</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
