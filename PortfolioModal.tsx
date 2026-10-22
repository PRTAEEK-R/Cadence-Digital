import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, BarChart2, Layers } from 'lucide-react';
import { PortfolioProject } from '../types';
import { useRouter } from '../utils/router';

interface PortfolioModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  const { navigate } = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleInquire = () => {
    onClose();
    navigate(`/contact?service=${project.category === 'reels' ? 'content-creation' : project.category === 'posts' ? 'posting-scheduling' : 'social-strategy'}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#0D1420] border border-[#1B293D] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1B293D]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor }}
              >
                {project.categoryLabel}
              </span>
              {project.isDemo && (
                <span className="text-[11px] text-[#FFB938] bg-[#FFB938]/10 border border-[#FFB938]/30 px-2 py-0.5 rounded">
                  Demonstration Case Study
                </span>
              )}
            </div>
            <h2 id="portfolio-modal-title" className="text-xl sm:text-2xl font-bold font-display text-white">
              {project.title}
            </h2>
            <p className="text-xs text-[#AAB6C7] mt-1">{project.client}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#AAB6C7] hover:text-white hover:bg-[#101A29] border border-transparent hover:border-[#1B293D] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Executive Summary */}
        <p className="text-sm text-[#F5F7FB] leading-relaxed">
          {project.summary}
        </p>

        {/* Problem vs Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#101A29] border border-[#1B293D] space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-[#FF5799]">
              The Challenge
            </h3>
            <p className="text-xs text-[#AAB6C7] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101A29] border border-[#1B293D] space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-[#35E59A]">
              The Strategic Cadence
            </h3>
            <p className="text-xs text-[#AAB6C7] leading-relaxed">
              {project.strategy}
            </p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#28B8FF]" />
            Demonstration Performance Outcomes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#070B12] border border-[#1B293D] space-y-1">
                <span className="text-[11px] text-[#AAB6C7]">{metric.label}</span>
                <p className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#B76AFF]" />
            Deliverables Produced
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {project.deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#F5F7FB]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#35E59A] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Palette */}
        <div className="flex items-center gap-3 pt-2">
          <span className="text-xs text-[#AAB6C7]">Visual Tone Palette:</span>
          <div className="flex items-center gap-1.5">
            {project.palette.map((color, idx) => (
              <span
                key={idx}
                className="w-5 h-5 rounded-full border border-white/20"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="pt-4 border-t border-[#1B293D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#AAB6C7]">
            Want a customized strategy engineered for your specific category?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#1B293D] text-xs font-medium text-[#AAB6C7] hover:text-white"
            >
              Close
            </button>
            <button
              onClick={handleInquire}
              className="w-full sm:w-auto px-5 py-2 rounded-lg bg-gradient-to-r from-[#28B8FF] to-[#0094F0] text-xs font-semibold text-white shadow-[0_0_15px_rgba(40,184,255,0.3)] hover:shadow-[0_0_20px_rgba(40,184,255,0.5)] flex items-center justify-center gap-1.5"
            >
              <span>Build My Campaign</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
