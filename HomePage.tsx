import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Layers, BarChart3, Users, Zap, ShieldAlert, ArrowUpRight } from 'lucide-react';
import { SERVICES, PRICING_PLANS, PROCESS_STEPS, PORTFOLIO_PROJECTS, DEMO_TESTIMONIALS } from '../data/agencyData';
import { ServiceRow } from '../components/ServiceRow';
import { HeroVisual } from '../components/HeroVisual';
import { ContactForm } from '../components/ContactForm';
import { PortfolioModal } from '../components/PortfolioModal';
import { PortfolioProject } from '../types';
import { Link, useRouter } from '../utils/router';

export const HomePage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'posts' | 'reels' | 'branding' | 'campaigns'>('all');

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS.slice(0, 4)
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory).slice(0, 4);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-16 pb-6 overflow-hidden">
        {/* Subtle background glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-15 blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #28B8FF 0%, #B76AFF 60%, transparent 80%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101A29] border border-[#1B293D] text-[#28B8FF] text-xs font-semibold tracking-wider uppercase font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Creative Thinking. Measurable Growth.</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.08] text-balance">
                Your Brand Deserves to Be{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28B8FF] via-[#B76AFF] to-[#FF5799]">
                  Impossible to Ignore.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#AAB6C7] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We turn creative content, smart strategy, and consistent social media management into a stronger digital presence for your business.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#28B8FF] to-[#0094F0] hover:from-[#3cc1ff] hover:to-[#1aa1fc] rounded-xl shadow-[0_0_30px_rgba(40,184,255,0.4)] hover:shadow-[0_0_40px_rgba(40,184,255,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Let's Grow Together</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('services-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else navigate('/services');
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#F5F7FB] bg-[#101A29] hover:bg-[#152438] border border-[#1B293D] hover:border-[#28B8FF]/40 rounded-xl transition-all cursor-pointer"
                >
                  <span>Explore Our Services</span>
                </button>
              </div>

              {/* Agency Principles Row */}
              <div className="pt-6 border-t border-[#1B293D]/70 grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-xs font-semibold text-white">Full-Service</p>
                  <p className="text-[11px] text-[#AAB6C7]">Creation to publishing</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Data-Informed</p>
                  <p className="text-[11px] text-[#AAB6C7]">Zero vanity reporting</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Hands-Off</p>
                  <p className="text-[11px] text-[#AAB6C7]">Turnkey execution</p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Console Graphic */}
            <div className="lg:col-span-6 w-full">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION — SIGNATURE DESIGN (HIGHEST PRIORITY) */}
      <section id="services-section" className="relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#28B8FF]">
                Core Agency Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Five Specialized Pillars. One Unified Growth Engine.
              </h2>
              <p className="text-sm sm:text-base text-[#AAB6C7] leading-relaxed">
                Every service is engineered to work together seamlessly—from attention-grabbing reels to algorithmic calendar management and loyal community building.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#28B8FF] hover:text-white transition-colors"
            >
              <span>View All Capabilities & Deliverables</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Signature 5 Horizontal Rows Container */}
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
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#101A29] to-[#0D1420] border border-[#1B293D] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Subtle glow accent */}
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #B76AFF 0%, transparent 70%)' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B76AFF]">
                  The Cadence Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                  “Good Content Gets Attention. Great Strategy Builds Brands.”
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#AAB6C7] leading-relaxed">
                  <p>
                    In an era of endless algorithmic shifts and noisy feeds, sporadic posting is a waste of time and budget. Modern growth requires rhythm: an intentional cadence of thumb-stopping creative, disciplined distribution, and meaningful audience conversations.
                  </p>
                  <p>
                    Cadence Digital combines the creative speed of a production studio with the analytical rigor of a growth consultancy. We eliminate internal bottlenecks so your brand stays top-of-mind without demanding 40 hours a week from your internal staff.
                  </p>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#35E59A] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white">Consistent Publishing</h3>
                      <p className="text-xs text-[#AAB6C7]">Zero missed days or last-minute scramble.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#28B8FF] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white">Tailored Brand Voice</h3>
                      <p className="text-xs text-[#AAB6C7]">Copy and tone written specifically for your audience.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#28B8FF] transition-colors"
                  >
                    <span>Read Our Agency Story & Approach</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Key Pillars Pillar Card */}
              <div className="lg:col-span-5 bg-[#070B12] rounded-xl border border-[#1B293D] p-6 space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#AAB6C7]">
                  Why Businesses Partner with Us
                </h3>
                <div className="space-y-3">
                  {[
                    { title: 'Turnkey Production', desc: 'We handle concept, scripting, filming, and post-production.' },
                    { title: 'Zero Vanity Reporting', desc: 'Focus on saves, watch time, shares, and qualified inbound leads.' },
                    { title: 'Rapid Community Engagement', desc: 'Daily comment and message triage within peak hours.' },
                    { title: 'Agile Strategic Pivots', desc: 'Continuous testing of creative hooks to capture new trends.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#101A29]/60 border border-[#1B293D]/60 space-y-1">
                      <p className="text-xs font-bold text-[#F5F7FB]">{item.title}</p>
                      <p className="text-[11px] text-[#AAB6C7]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS SECTION */}
      <section id="process" className="relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35E59A]">
              Predictable Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Four Steps from Concept to Consistent Growth
            </h2>
            <p className="text-sm sm:text-base text-[#AAB6C7]">
              Our streamlined framework ensures complete transparency, collaborative approvals, and measurable trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="group relative rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 space-y-4 hover:border-[#28B8FF]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm border"
                    style={{
                      backgroundColor: `${step.accentColor}15`,
                      borderColor: `${step.accentColor}40`,
                      color: step.accentColor
                    }}
                  >
                    {step.step}
                  </span>
                  <span className="text-xs font-mono text-[#AAB6C7]">Phase {idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold font-display text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#28B8FF]">
                    {step.headline}
                  </p>
                </div>

                <p className="text-xs text-[#AAB6C7] leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 border-t border-[#1B293D] space-y-1.5">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[11px] text-[#F5F7FB]">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.accentColor }} />
                      <span className="truncate">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SHOWCASE */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFB938]">
                Demonstration Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Creative Work Engineered for Engagement
              </h2>
              <p className="text-sm text-[#AAB6C7]">
                Sample design and campaign frameworks demonstrating our visual craft and strategic execution.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-[#101A29] rounded-xl border border-[#1B293D] overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'All Work' },
                { id: 'posts', label: 'Posts' },
                { id: 'reels', label: 'Reels' },
                { id: 'branding', label: 'Branding' },
                { id: 'campaigns', label: 'Campaigns' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#070B12] text-[#28B8FF] border border-[#28B8FF]/40 shadow-sm'
                      : 'text-[#AAB6C7] hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setSelectedProject(proj);
                }}
                className="group rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 space-y-4 hover:border-[#28B8FF]/50 transition-all cursor-pointer hover:-translate-y-1 shadow-lg"
              >
                {/* Visual Header Mock */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#101A29] to-[#070B12] border border-[#1B293D] p-5 h-44 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-0.5 rounded text-[11px] font-semibold"
                      style={{ backgroundColor: `${proj.accentColor}20`, color: proj.accentColor }}
                    >
                      {proj.categoryLabel}
                    </span>
                    <span className="text-[10px] text-[#AAB6C7] font-mono bg-[#070B12]/80 px-2 py-0.5 rounded border border-[#1B293D]">
                      Demonstration
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#28B8FF] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#AAB6C7] mt-1">{proj.client}</p>
                  </div>
                </div>

                <p className="text-xs text-[#AAB6C7] line-clamp-2 leading-relaxed">
                  {proj.summary}
                </p>

                {/* Metrics strip */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#1B293D]">
                  {proj.metrics.slice(0, 2).map((m, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-[10px] text-[#AAB6C7]/70 block">{m.label}</span>
                      <span className="font-mono font-bold text-white">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[#28B8FF] pt-2">
                  <span>Inspect Case Study & Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#1B293D] bg-[#101A29] text-xs font-semibold text-white hover:border-[#28B8FF] transition-colors"
            >
              <span>Explore Complete Portfolio Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. PRICING SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF5799]">
              Configurable Retainers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Transparent Partnerships. Tailored Scope.
            </h2>
            <p className="text-sm sm:text-base text-[#AAB6C7]">
              Every plan includes strategic onboarding, dedicated content planning, and transparent reporting. Select a tier to discuss exact specifications.
            </p>
          </div>

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
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#35E59A] text-[#070B12] text-xs font-extrabold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#AAB6C7] uppercase tracking-wider">
                      {plan.serviceFocus}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white">{plan.name}</h3>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#070B12] border border-[#1B293D] space-y-0.5">
                    <span className="text-xs text-[#AAB6C7]">Investment:</span>
                    <p className="text-xl font-bold text-white font-display">{plan.priceNote}</p>
                    <p className="text-[11px] text-[#AAB6C7]">Scoped to your platform count & volume</p>
                  </div>

                  <p className="text-xs text-[#AAB6C7] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Included in Scope:
                    </p>
                    <ul className="space-y-2 text-xs">
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

                <div className="pt-8">
                  <button
                    onClick={() => navigate(`/contact?plan=${plan.id}`)}
                    className={`w-full py-3 px-5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#35E59A] text-[#070B12] hover:bg-[#4affb0] shadow-[0_0_20px_rgba(53,229,154,0.3)]'
                        : 'bg-[#101A29] text-white hover:bg-[#152438] border border-[#1B293D] hover:border-[#28B8FF]'
                    }`}
                  >
                    <span>Choose Plan & Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-[#AAB6C7]/70 mt-2">
                    Ideal for: {plan.idealFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (ETHICAL DEMONSTRATION DISCLOSURE) */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#28B8FF]">
              Client Partnerships
            </span>
            <h2 className="text-3xl font-bold font-display text-white tracking-tight">
              Collaborative Growth in Practice
            </h2>
            <p className="text-xs text-[#FFB938] bg-[#FFB938]/10 border border-[#FFB938]/30 px-3 py-1 rounded-full inline-block">
              Development Preview: Partner quotes shown for layout demonstration purposes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEMO_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl bg-[#0D1420] border border-[#1B293D] p-6 space-y-4 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-[#F5F7FB] leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="pt-4 border-t border-[#1B293D] flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-white">{t.author}</h3>
                    <p className="text-[11px] text-[#AAB6C7]">{t.role}, {t.company}</p>
                  </div>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: t.accentColor }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact-section" className="relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#28B8FF]">
                Start Your Cadence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                Ready to Make Your Social Presence Impossible to Ignore?
              </h2>
              <p className="text-sm text-[#AAB6C7] leading-relaxed">
                Fill out the inquiry form with your target goals, brand profile, and timeline. Our strategy director reviews every submission personally within 24 business hours.
              </p>

              <div className="space-y-3 pt-4">
                <div className="p-3.5 rounded-xl bg-[#0D1420] border border-[#1B293D] space-y-1">
                  <h3 className="text-xs font-bold text-white">What Happens Next?</h3>
                  <p className="text-xs text-[#AAB6C7]">
                    1. We audit your existing social footprint.<br />
                    2. We prepare an initial creative direction deck.<br />
                    3. We coordinate a 20-minute discovery consultation.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0D1420] border border-[#1B293D] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#35E59A]/10 text-[#35E59A] flex items-center justify-center font-bold text-xs">
                    24h
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-white">Guaranteed Response Window</p>
                    <p className="text-[#AAB6C7]">No automated runaround. Direct senior strategist review.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Portfolio Project Modal */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
