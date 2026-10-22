import React, { useState } from 'react';
import { ArrowRight, BarChart3, Filter, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioProject, PortfolioCategory } from '../types';
import { PortfolioModal } from '../components/PortfolioModal';
import { useRouter } from '../utils/router';

export const PortfolioPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: PORTFOLIO_PROJECTS.length },
    { id: 'posts', label: 'Social Media Posts', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'posts').length },
    { id: 'reels', label: 'Reels & Video', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'reels').length },
    { id: 'branding', label: 'Branding', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'branding').length },
    { id: 'campaigns', label: 'Campaigns', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'campaigns').length }
  ];

  const filtered = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFB938]">
          Curated Showcase
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Visual Identity & Performance Systems
        </h1>
        <p className="text-base sm:text-lg text-[#AAB6C7] leading-relaxed">
          Explore our demonstration projects across short-form reels, high-retention post carousels, comprehensive social rebrands, and multi-week campaign activations.
        </p>

        {/* Ethical Transparency Notice */}
        <div className="p-3.5 rounded-xl bg-[#101A29] border border-[#1B293D] flex items-center gap-3 text-xs text-[#AAB6C7]">
          <span className="w-2 h-2 rounded-full bg-[#FFB938] shrink-0" />
          <span>
            <strong>Transparency Notice:</strong> All case studies shown are realistic demonstration projects created by our creative strategists to illustrate our production capabilities, aesthetic direction, and metrics framework.
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0D1420] rounded-xl border border-[#1B293D] w-fit">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as PortfolioCategory)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#101A29] text-[#28B8FF] border border-[#28B8FF]/40 shadow-sm'
                : 'text-[#AAB6C7] hover:text-white'
            }`}
          >
            <span>{cat.label}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-[#070B12] text-[10px] font-mono opacity-80">
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 space-y-3">
          <p className="text-sm text-[#AAB6C7]">No projects match this filter selection.</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="text-xs text-[#28B8FF] font-semibold hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelectedProject(proj);
              }}
              className="group rounded-2xl bg-[#0D1420] border border-[#1B293D] overflow-hidden flex flex-col justify-between hover:border-[#28B8FF]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl cursor-pointer"
            >
              {/* Card Visual Artwork */}
              <div className="relative p-6 bg-gradient-to-br from-[#101A29] via-[#070B12] to-[#162337] border-b border-[#1B293D] h-52 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-0.5 rounded text-[11px] font-semibold"
                    style={{ backgroundColor: `${proj.accentColor}20`, color: proj.accentColor }}
                  >
                    {proj.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {proj.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#28B8FF] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#AAB6C7] mt-1">{proj.client}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#AAB6C7] leading-relaxed line-clamp-3">
                  {proj.summary}
                </p>

                {/* Metrics */}
                <div className="p-3 rounded-xl bg-[#070B12] border border-[#1B293D] grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[10px] text-[#AAB6C7] block">{proj.metrics[0]?.label}</span>
                    <span className="font-mono font-bold text-white text-xs">{proj.metrics[0]?.value}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#AAB6C7] block">{proj.metrics[1]?.label}</span>
                    <span className="font-mono font-bold text-[#35E59A] text-xs">{proj.metrics[1]?.value}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#28B8FF]">
                  <span>View Strategy & Execution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected Project Dialog */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
