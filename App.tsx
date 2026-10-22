import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './utils/router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryReviewDrawer } from './components/InquiryReviewDrawer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SERVICES } from './data/agencyData';

const AppContent: React.FC = () => {
  const { path, serviceSlug } = useRouter();
  const [inquiriesDrawerOpen, setInquiriesDrawerOpen] = useState(false);
  const [inquiriesCount, setInquiriesCount] = useState(1);

  // Synchronize count with backend
  useEffect(() => {
    fetch('/api/inquiries')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data && typeof data.count === 'number') {
          setInquiriesCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  // Dynamic Document Title SEO updates
  useEffect(() => {
    let title = 'Cadence Digital — Creative Thinking. Measurable Growth.';
    if (path === '/services') {
      title = 'Our Services & Capabilities | Cadence Digital';
    } else if (path.startsWith('/services/') && serviceSlug) {
      const s = SERVICES.find(item => item.id === serviceSlug);
      title = s ? `${s.title} | Cadence Digital` : 'Service Details | Cadence Digital';
    } else if (path === '/portfolio') {
      title = 'Portfolio & Case Studies | Cadence Digital';
    } else if (path === '/about') {
      title = 'About the Agency | Cadence Digital';
    } else if (path === '/pricing') {
      title = 'Retainers & Pricing | Cadence Digital';
    } else if (path === '/contact') {
      title = 'Start a Project | Cadence Digital';
    } else if (path === '/privacy') {
      title = 'Privacy Policy | Cadence Digital';
    } else if (path === '/terms') {
      title = 'Terms of Service | Cadence Digital';
    }
    document.title = title;
  }, [path, serviceSlug]);

  const renderCurrentPage = () => {
    if (path === '/' || path === '') {
      return <HomePage />;
    }
    if (path === '/services') {
      return <ServicesPage />;
    }
    if (path.startsWith('/services/') && serviceSlug) {
      return <ServiceDetailPage slug={serviceSlug} />;
    }
    if (path === '/portfolio') {
      return <PortfolioPage />;
    }
    if (path === '/about') {
      return <AboutPage />;
    }
    if (path === '/pricing') {
      return <PricingPage />;
    }
    if (path === '/contact') {
      return <ContactPage />;
    }
    if (path === '/privacy') {
      return <LegalPage type="privacy" />;
    }
    if (path === '/terms') {
      return <LegalPage type="terms" />;
    }
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F5F7FB] selection:bg-[#28B8FF]/20 selection:text-[#28B8FF]">
      {/* Navigation Top Bar */}
      <Navbar
        onOpenInquiriesDrawer={() => setInquiriesDrawerOpen(true)}
        inquiriesCount={inquiriesCount}
      />

      {/* Main Page Content */}
      <main className="flex-1 pt-24 pb-16">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Review Drawer for Inbound Submissions */}
      <InquiryReviewDrawer
        isOpen={inquiriesDrawerOpen}
        onClose={() => setInquiriesDrawerOpen(false)}
        onRefreshCount={(c) => setInquiriesCount(c)}
      />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
