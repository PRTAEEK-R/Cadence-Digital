import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceRow } from '../components/ServiceRow';
import { Link, useRouter } from '../utils/router';

export const ServicesPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="py-12 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#28B8FF]">
          Full-Spectrum Social Media Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Services Engineered for Cohesive Digital Presence
        </h1>
        <p className="text-base sm:text-lg text-[#AAB6C7] leading-relaxed">
          From high-retention video production to algorithmic calendar scheduling, community conversations, and analytical optimization. Select any capability to explore its full architecture.
        </p>
      </div>

      {/* Signature 5 Rows Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold font-display text-white">
          Our Five Signature Service Lines
        </h2>

        <div className="rounded-2xl bg-[#0D1420]/80 border border-[#1B293D] shadow-2xl backdrop-blur-sm overflow-hidden p-2 sm:p-4">
          {SERVICES.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              isLast={index === SERVICES.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Detailed Deep Dive Cards */}
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35E59A]">
            In-Depth Deliverables
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            What You Receive with Every Engagement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 space-y-4 flex flex-col justify-between hover:border-[#28B8FF]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs"
                    style={{ backgroundColor: `${srv.accentColor}20`, color: srv.accentColor }}
                  >
                    {srv.number}
                  </span>
                  <span className="text-[11px] text-[#AAB6C7] font-mono">{srv.turnaround}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-white">{srv.title}</h3>
                <p className="text-xs text-[#AAB6C7] leading-relaxed">{srv.description}</p>

                <div className="pt-2 border-t border-[#1B293D] space-y-2">
                  <p className="text-[11px] font-bold text-white uppercase tracking-wider">
                    Core Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {srv.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#F5F7FB]">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: srv.accentColor }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1B293D] flex items-center justify-between">
                <button
                  onClick={() => navigate(`/services/${srv.id}`)}
                  className="text-xs font-semibold hover:underline flex items-center gap-1"
                  style={{ color: srv.accentColor }}
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => navigate(`/contact?service=${srv.id}`)}
                  className="px-3 py-1.5 rounded-lg bg-[#101A29] border border-[#1B293D] text-[11px] font-medium text-white hover:border-[#28B8FF] transition-colors"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-[#101A29] via-[#0D1420] to-[#152438] border border-[#1B293D] p-8 sm:p-12 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Not Sure Which Combination Fits Your Growth Phase?
        </h2>
        <p className="text-sm text-[#AAB6C7] max-w-xl mx-auto">
          We frequently bundle content production, daily scheduling, and community management into a seamless turnkey retainer.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#28B8FF] to-[#0094F0] text-xs font-bold text-white shadow-[0_0_20px_rgba(40,184,255,0.3)] hover:shadow-[0_0_25px_rgba(40,184,255,0.5)] transition-all cursor-pointer"
        >
          <span>Schedule a Strategy Discovery Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
