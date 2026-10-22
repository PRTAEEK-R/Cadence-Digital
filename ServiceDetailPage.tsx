import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Clock, Target, BarChart2 } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { useRouter } from '../utils/router';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const { navigate } = useRouter();

  const serviceIndex = SERVICES.findIndex(s => s.id === slug);
  const service = SERVICES[serviceIndex] || SERVICES[0];

  const prevService = serviceIndex > 0 ? SERVICES[serviceIndex - 1] : SERVICES[SERVICES.length - 1];
  const nextService = serviceIndex < SERVICES.length - 1 ? SERVICES[serviceIndex + 1] : SERVICES[0];

  return (
    <div className="py-12 space-y-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-[#AAB6C7]">
        <button
          onClick={() => navigate('/services')}
          className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Services</span>
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-white font-medium">{service.title}</span>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span
            className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm border shadow-lg"
            style={{
              backgroundColor: service.accentBg,
              borderColor: service.borderColor,
              color: service.accentColor
            }}
          >
            {service.number}
          </span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: service.accentColor }}>
            Cadence Discipline
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
          {service.title}
        </h1>

        <p className="text-lg text-[#F5F7FB] font-medium max-w-2xl">
          {service.tagline}
        </p>

        <p className="text-base text-[#AAB6C7] max-w-3xl leading-relaxed">
          {service.description}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={() => navigate(`/contact?service=${service.id}`)}
            className="px-6 py-3 rounded-xl font-bold text-xs text-white shadow-xl flex items-center gap-2 transition-all cursor-pointer"
            style={{
              backgroundColor: service.accentColor,
              color: '#070B12',
              boxShadow: `0 0 25px ${service.glowColor}`
            }}
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate('/pricing')}
            className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-[#101A29] hover:bg-[#152438] border border-[#1B293D] transition-colors"
          >
            View Bundled Retainers
          </button>
        </div>
      </div>

      {/* Operational Highlights Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#0D1420] border border-[#1B293D] space-y-1">
          <div className="flex items-center gap-2 text-xs text-[#AAB6C7]">
            <Clock className="w-3.5 h-3.5 text-[#28B8FF]" />
            <span>Turnaround Cadence</span>
          </div>
          <p className="text-xs font-bold text-white">{service.turnaround}</p>
        </div>

        <div className="p-4 rounded-xl bg-[#0D1420] border border-[#1B293D] space-y-1">
          <div className="flex items-center gap-2 text-xs text-[#AAB6C7]">
            <BarChart2 className="w-3.5 h-3.5 text-[#35E59A]" />
            <span>Primary Metric Focus</span>
          </div>
          <p className="text-xs font-bold text-white">{service.keyMetric}</p>
        </div>

        <div className="p-4 rounded-xl bg-[#0D1420] border border-[#1B293D] space-y-1">
          <div className="flex items-center gap-2 text-xs text-[#AAB6C7]">
            <Target className="w-3.5 h-3.5 text-[#FF5799]" />
            <span>Optimal For</span>
          </div>
          <p className="text-xs font-bold text-white line-clamp-1">{service.idealFor}</p>
        </div>
      </div>

      {/* Strategic Capabilities Breakdown */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-display text-white">
          Architectural Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {service.capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#0D1420] border border-[#1B293D] space-y-2 hover:border-[#28B8FF]/40 transition-colors"
            >
              <h3 className="text-sm font-bold text-white">{cap.title}</h3>
              <p className="text-xs text-[#AAB6C7] leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Deliverables Checklist */}
      <div className="p-8 rounded-2xl bg-[#101A29] border border-[#1B293D] space-y-5">
        <h2 className="text-xl font-bold font-display text-white">
          Standard Deliverables in Every Retainer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-[#F5F7FB]">
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: service.accentColor }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Next/Prev Navigation */}
      <div className="pt-8 border-t border-[#1B293D] flex items-center justify-between">
        <button
          onClick={() => navigate(`/services/${prevService.id}`)}
          className="flex items-center gap-2 text-xs font-medium text-[#AAB6C7] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{prevService.title}</span>
        </button>

        <button
          onClick={() => navigate(`/services/${nextService.id}`)}
          className="flex items-center gap-2 text-xs font-medium text-[#AAB6C7] hover:text-white transition-colors cursor-pointer"
        >
          <span>{nextService.title}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
