import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Inbox } from 'lucide-react';
import { Link, useRouter } from '../utils/router';

interface NavbarProps {
  onOpenInquiriesDrawer?: () => void;
  inquiriesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiriesDrawer, inquiriesCount = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { path, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Process', href: '/#process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B12]/90 backdrop-blur-md border-b border-[#1B293D] shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#070B12]/60 backdrop-blur-sm border-b border-[#1B293D]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Zone */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="Cadence Digital Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#28B8FF] via-[#B76AFF] to-[#FF5799] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(40,184,255,0.3)] group-hover:shadow-[0_0_20px_rgba(40,184,255,0.5)] transition-all">
              <div className="w-full h-full bg-[#070B12] rounded-[6px] flex items-center justify-center">
                <span className="font-bold text-sm tracking-tight text-white font-display">C</span>
              </div>
            </div>
            <span className="text-lg font-bold tracking-tight text-[#F5F7FB] font-display group-hover:text-white transition-colors">
              Cadence<span className="text-[#28B8FF]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#AAB6C7]"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? path === '/'
                  : link.href.startsWith('/#')
                  ? false
                  : path === link.href || path.startsWith(link.href + '/');

              return (
                <button
                  key={link.label}
                  onClick={() => handleNavLinkClick(link.href)}
                  className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-[#F5F7FB] font-semibold'
                      : 'text-[#AAB6C7] hover:text-[#F5F7FB]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#28B8FF] rounded-full shadow-[0_0_8px_#28B8FF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Optional Inquiries Admin Review Button */}
            {onOpenInquiriesDrawer && (
              <button
                type="button"
                onClick={onOpenInquiriesDrawer}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#1B293D] bg-[#101A29]/70 text-[#AAB6C7] hover:text-[#F5F7FB] hover:border-[#28B8FF]/40 text-xs font-medium transition-colors cursor-pointer"
                title="View database inquiries and submissions"
              >
                <Inbox className="w-3.5 h-3.5 text-[#28B8FF]" />
                <span>Inquiries</span>
                {inquiriesCount > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#28B8FF]/20 text-[#28B8FF] text-[10px] font-mono">
                    {inquiriesCount}
                  </span>
                )}
              </button>
            )}

            {/* Primary CTA */}
            <button
              onClick={() => navigate('/contact')}
              className="relative inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#28B8FF] to-[#0094F0] hover:from-[#3cc1ff] hover:to-[#1aa1fc] rounded-lg shadow-[0_0_20px_rgba(40,184,255,0.35)] hover:shadow-[0_0_25px_rgba(40,184,255,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#AAB6C7] hover:text-white hover:bg-[#101A29] border border-transparent hover:border-[#1B293D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#28B8FF] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#070B12]/98 backdrop-blur-xl border-b border-[#1B293D] shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = path === link.href;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavLinkClick(link.href)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#101A29] text-[#28B8FF] font-semibold border-l-2 border-[#28B8FF]'
                        : 'text-[#AAB6C7] hover:text-white hover:bg-[#0D1420]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#28B8FF]" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-[#1B293D] flex flex-col gap-3">
              {onOpenInquiriesDrawer && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiriesDrawer();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#1B293D] bg-[#101A29] text-[#AAB6C7] text-xs font-medium"
                >
                  <Inbox className="w-4 h-4 text-[#28B8FF]" />
                  <span>View Received Inquiries ({inquiriesCount})</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-[#28B8FF] to-[#0094F0] text-white font-semibold text-sm shadow-[0_0_20px_rgba(40,184,255,0.3)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
