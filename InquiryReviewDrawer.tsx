import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Inbox, Calendar, Mail, Building, Globe, CheckCircle2, ShieldCheck, Database } from 'lucide-react';

interface InquiryItem {
  id: string;
  name: string;
  email?: string;
  business_name: string;
  service: string;
  budget?: string;
  website_url?: string;
  project_description: string;
  created_at: string;
  status: string;
}

interface InquiryReviewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshCount?: (count: number) => void;
}

export const InquiryReviewDrawer: React.FC<InquiryReviewDrawerProps> = ({ isOpen, onClose, onRefreshCount }) => {
  const [inquiries, setInquiries] = useState<InquiryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [healthStatus, setHealthStatus] = useState<any>(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const [inqRes, healthRes] = await Promise.all([
        fetch('/api/inquiries'),
        fetch('/api/health')
      ]);

      if (inqRes.ok) {
        const data = await inqRes.json();
        setInquiries(data.inquiries || []);
        if (onRefreshCount) {
          onRefreshCount(data.inquiries?.length || 0);
        }
      }

      if (healthRes.ok) {
        const health = await healthRes.json();
        setHealthStatus(health);
      }
    } catch (err) {
      console.error('Failed to load inquiries for review:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-[#0D1420] border-l border-[#1B293D] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#1B293D] bg-[#101A29] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#28B8FF]/10 border border-[#28B8FF]/30 flex items-center justify-center text-[#28B8FF]">
                <Inbox className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold font-display text-white">
                  Client Inquiries & CRM
                </h2>
                <p className="text-xs text-[#AAB6C7]">
                  Live backend API inquiries store ({inquiries.length} total)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchInquiries}
                disabled={loading}
                className="p-2 rounded-lg text-[#AAB6C7] hover:text-white hover:bg-[#070B12] transition-colors"
                title="Refresh inquiries"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-[#AAB6C7] hover:text-white hover:bg-[#070B12] transition-colors"
                aria-label="Close inquiries drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Integration Status Pill */}
          <div className="px-6 py-3 bg-[#070B12] border-b border-[#1B293D] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-[#35E59A]" />
              <span className="text-[#AAB6C7]">Storage Mode:</span>
              <span className="text-white font-mono">
                {healthStatus?.features?.supabase_configured ? 'Supabase + Server Fallback' : 'Server Persistent Storage'}
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#35E59A]/10 text-[#35E59A] border border-[#35E59A]/30">
              API Live
            </span>
          </div>

          {/* Inquiries List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {inquiries.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <Inbox className="w-10 h-10 text-[#AAB6C7]/40 mx-auto" />
                <p className="text-sm text-[#AAB6C7]">No inquiries recorded yet.</p>
                <p className="text-xs text-[#AAB6C7]/60">
                  Submit a project via the Contact form to test real-time ingestion.
                </p>
              </div>
            ) : (
              inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-4 rounded-xl bg-[#101A29] border border-[#1B293D] space-y-3 hover:border-[#28B8FF]/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        {inq.business_name}
                        <span className="text-xs font-normal text-[#AAB6C7]">({inq.name})</span>
                      </h4>
                      <p className="text-[11px] text-[#AAB6C7] flex items-center gap-1.5 mt-0.5">
                        <Calendar className="w-3 h-3 text-[#AAB6C7]/60" />
                        {new Date(inq.created_at).toLocaleString()}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#28B8FF]/10 text-[#28B8FF] border border-[#28B8FF]/20 uppercase">
                      {inq.service.replace('-', ' ')}
                    </span>
                  </div>

                  <p className="text-xs text-[#F5F7FB] line-clamp-3 bg-[#070B12] p-2.5 rounded-lg border border-[#1B293D]/60">
                    "{inq.project_description}"
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#AAB6C7] pt-1 border-t border-[#1B293D]/60">
                    <div className="flex items-center gap-3">
                      {inq.budget && <span>Budget: <strong className="text-white">{inq.budget}</strong></span>}
                      {inq.website_url && (
                        <a
                          href={inq.website_url.startsWith('http') ? inq.website_url : `https://${inq.website_url}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#28B8FF] hover:underline flex items-center gap-1"
                        >
                          <Globe className="w-3 h-3" />
                          <span>Link</span>
                        </a>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-[#AAB6C7]/60">
                      ID: {inq.id.substring(0, 14)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 border-t border-[#1B293D] bg-[#101A29] text-xs text-[#AAB6C7] flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#35E59A]" />
              Data sanitized & secured
            </span>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-[#070B12] border border-[#1B293D] text-white hover:border-[#28B8FF] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
