import React from 'react';
import { ArrowUpRight, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SERVICES, AGENCY_NAME, AGENCY_TAGLINE } from '../data/agencyData';
import { Link, useRouter } from '../utils/router';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'X / Twitter', href: 'https://x.com' },
    { label: 'YouTube', href: 'https://youtube.com' }
  ];

  return (
    <footer className="border-t border-[#1B293D] bg-[#070B12] text-[#AAB6C7] pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #28B8FF 0%, #B76AFF 50%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1B293D]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#28B8FF] via-[#B76AFF] to-[#FF5799] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(40,184,255,0.3)]">
                <div className="w-full h-full bg-[#070B12] rounded-[6px] flex items-center justify-center">
                  <span className="font-bold text-sm tracking-tight text-white font-display">C</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                {AGENCY_NAME}<span className="text-[#28B8FF]">.</span>
              </span>
            </Link>

            <p className="text-xs font-semibold uppercase tracking-wider text-[#28B8FF]">
              {AGENCY_TAGLINE}
            </p>

            <p className="text-sm text-[#AAB6C7] max-w-sm leading-relaxed">
              We turn creative content, smart strategy, and consistent social media management into a stronger digital presence for your business.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2 text-[#F5F7FB]">
                <Mail className="w-3.5 h-3.5 text-[#28B8FF]" />
                <a href="mailto:inquiries@cadencedigital.agency" className="hover:text-[#28B8FF] transition-colors">
                  inquiries@cadencedigital.agency
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#AAB6C7]">
                <Clock className="w-3.5 h-3.5 text-[#35E59A]" />
                <span>Client Studio Hours: Mon – Fri, 9:00 AM – 6:00 PM EST</span>
              </div>
            </div>
          </div>

          {/* All 5 Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: service.accentColor }}
                    />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services Overview</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About the Agency</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">Client Portfolio</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Pricing & Retainers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Start a Project</Link>
              </li>
            </ul>
          </div>

          {/* Social Channels & Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Connect & Legal
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex flex-wrap gap-2 pt-0.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101A29] border border-[#1B293D] text-[#AAB6C7] hover:text-white hover:border-[#28B8FF]/40 transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
                  </a>
                ))}
              </div>

              <div className="pt-3 space-y-1.5 text-xs">
                <p>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AAB6C7]/60">
          <p>© {currentYear} Cadence Digital Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#35E59A]" />
              Authentic Marketing & Strategy
            </span>
            <span aria-hidden="true">·</span>
            <span>Zero Slop Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
