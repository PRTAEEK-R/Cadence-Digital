import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { Link } from '../utils/router';

interface ContactFormProps {
  initialService?: string;
  initialPlan?: string;
  onSuccessCallback?: (inquiryId: string) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService,
  initialPlan,
  onSuccessCallback
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business_name: '',
    website_url: '',
    service: initialService || 'content-creation',
    budget: initialPlan ? `Plan: ${initialPlan}` : '',
    project_description: '',
    consent: false,
    hp: '' // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    if (initialPlan) {
      setFormData(prev => ({
        ...prev,
        budget: `Plan: ${initialPlan.toUpperCase()}`,
        project_description: prev.project_description || `Interested in getting started with the ${initialPlan.toUpperCase()} pricing plan.`
      }));
    }
  }, [initialService, initialPlan]);

  const validateClient = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Full name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.business_name.trim() || formData.business_name.trim().length < 2) {
      errs.business_name = 'Business or brand name is required';
    }

    if (formData.website_url.trim()) {
      try {
        const urlToTest = formData.website_url.startsWith('http')
          ? formData.website_url
          : `https://${formData.website_url}`;
        new URL(urlToTest);
      } catch {
        errs.website_url = 'Please enter a valid website URL or social link';
      }
    }

    if (!formData.project_description.trim() || formData.project_description.trim().length < 10) {
      errs.project_description = 'Please describe your project goals in at least 10 characters';
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to the privacy policy to submit an inquiry';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear inline error on change
    if (errors[name]) {
      setErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side validation
    if (!validateClient()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setErrors(result.errors);
        }
        setServerError(result.message || 'Unable to submit your inquiry. Please verify your information.');
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmittedInquiryId(result.inquiryId);
      if (onSuccessCallback) {
        onSuccessCallback(result.inquiryId);
      }
    } catch (err: any) {
      console.error('Contact form submission network error:', err);
      setServerError('A network connectivity issue occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedInquiryId(null);
    setFormData({
      name: '',
      email: '',
      business_name: '',
      website_url: '',
      service: 'content-creation',
      budget: '',
      project_description: '',
      consent: false,
      hp: ''
    });
    setErrors({});
    setServerError(null);
  };

  if (submittedInquiryId) {
    return (
      <div className="rounded-2xl bg-[#101A29] border border-[#35E59A]/30 p-8 sm:p-10 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-[#35E59A]/10 border border-[#35E59A]/30 text-[#35E59A] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(53,229,154,0.2)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold font-display text-white">
            Inquiry Successfully Transmitted
          </h3>
          <p className="text-sm text-[#AAB6C7] max-w-lg mx-auto">
            Thank you for considering Cadence Digital. Our strategy team will analyze your brand profile and follow up within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#070B12] border border-[#1B293D] max-w-md mx-auto text-left space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-[#AAB6C7]">Reference ID:</span>
            <span className="font-mono text-[#28B8FF] font-semibold">{submittedInquiryId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#AAB6C7]">Contact Email:</span>
            <span className="text-white font-medium">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#AAB6C7]">Target Service:</span>
            <span className="text-[#35E59A] capitalize">{formData.service.replace('-', ' ')}</span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#1B293D] bg-[#070B12] text-xs font-semibold text-white hover:border-[#28B8FF] transition-colors cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-[#101A29] border border-[#1B293D] p-6 sm:p-8 lg:p-10 space-y-6 shadow-2xl relative"
    >
      {/* Honeypot field for anti-spam (hidden from screen) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this field</label>
        <input
          type="text"
          id="hp_field"
          name="hp"
          value={formData.hp}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-start gap-3">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-semibold text-[#F5F7FB]">
            Full Name <span className="text-[#28B8FF]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#070B12] border text-sm text-white placeholder-[#AAB6C7]/40 focus:outline-none transition-colors ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-[#1B293D] focus:border-[#28B8FF]'
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-[#F5F7FB]">
            Email Address <span className="text-[#28B8FF]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@yourbrand.com"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#070B12] border text-sm text-white placeholder-[#AAB6C7]/40 focus:outline-none transition-colors ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#1B293D] focus:border-[#28B8FF]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Business or Brand Name */}
        <div className="space-y-1.5">
          <label htmlFor="business_name" className="block text-xs font-semibold text-[#F5F7FB]">
            Business or Brand Name <span className="text-[#28B8FF]">*</span>
          </label>
          <input
            type="text"
            id="business_name"
            name="business_name"
            required
            value={formData.business_name}
            onChange={handleChange}
            placeholder="e.g. Solas Botanicals"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#070B12] border text-sm text-white placeholder-[#AAB6C7]/40 focus:outline-none transition-colors ${
              errors.business_name ? 'border-red-500 focus:border-red-500' : 'border-[#1B293D] focus:border-[#28B8FF]'
            }`}
          />
          {errors.business_name && <p className="text-[11px] text-red-400">{errors.business_name}</p>}
        </div>

        {/* Website or Social URL */}
        <div className="space-y-1.5">
          <label htmlFor="website_url" className="block text-xs font-semibold text-[#F5F7FB]">
            Website or Social Profile URL <span className="text-[#AAB6C7]/60 font-normal">(Optional)</span>
          </label>
          <input
            type="url"
            id="website_url"
            name="website_url"
            value={formData.website_url}
            onChange={handleChange}
            placeholder="https://instagram.com/yourhandle"
            className={`w-full px-4 py-2.5 rounded-lg bg-[#070B12] border text-sm text-white placeholder-[#AAB6C7]/40 focus:outline-none transition-colors ${
              errors.website_url ? 'border-red-500 focus:border-red-500' : 'border-[#1B293D] focus:border-[#28B8FF]'
            }`}
          />
          {errors.website_url && <p className="text-[11px] text-red-400">{errors.website_url}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Service of Interest */}
        <div className="space-y-1.5">
          <label htmlFor="service" className="block text-xs font-semibold text-[#F5F7FB]">
            Service of Interest <span className="text-[#28B8FF]">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-[#070B12] border border-[#1B293D] text-sm text-white focus:outline-none focus:border-[#28B8FF] transition-colors"
          >
            {SERVICES.map((srv) => (
              <option key={srv.id} value={srv.id}>
                {srv.title}
              </option>
            ))}
            <option value="general">General Agency Inquiry / Full-Service</option>
          </select>
          {errors.service && <p className="text-[11px] text-red-400">{errors.service}</p>}
        </div>

        {/* Budget Range */}
        <div className="space-y-1.5">
          <label htmlFor="budget" className="block text-xs font-semibold text-[#F5F7FB]">
            Monthly Investment Range <span className="text-[#AAB6C7]/60 font-normal">(Optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg bg-[#070B12] border border-[#1B293D] text-sm text-white focus:outline-none focus:border-[#28B8FF] transition-colors"
          >
            <option value="">Select an investment tier...</option>
            <option value="Starter Tier">Starter Tier (Essential Production)</option>
            <option value="Growth Tier">Growth Tier (Complete Management)</option>
            <option value="Premium Tier">Premium Tier (Aggressive Scale)</option>
            <option value="$2,500 - $5,000 / month">$2,500 - $5,000 / month</option>
            <option value="$5,000 - $10,000 / month">$5,000 - $10,000 / month</option>
            <option value="$10,000+ / month">$10,000+ / month</option>
            <option value="Custom Project Scope">Custom Project Scope</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-1.5">
        <label htmlFor="project_description" className="block text-xs font-semibold text-[#F5F7FB]">
          Project Description & Goals <span className="text-[#28B8FF]">*</span>
        </label>
        <textarea
          id="project_description"
          name="project_description"
          rows={4}
          required
          value={formData.project_description}
          onChange={handleChange}
          placeholder="Tell us about your target audience, current bottlenecks, and what measurable outcomes you are looking to achieve..."
          className={`w-full px-4 py-2.5 rounded-lg bg-[#070B12] border text-sm text-white placeholder-[#AAB6C7]/40 focus:outline-none transition-colors ${
            errors.project_description ? 'border-red-500 focus:border-red-500' : 'border-[#1B293D] focus:border-[#28B8FF]'
          }`}
        />
        {errors.project_description && <p className="text-[11px] text-red-400">{errors.project_description}</p>}
      </div>

      {/* Consent Checkbox */}
      <div className="space-y-1">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-[#1B293D] bg-[#070B12] text-[#28B8FF] focus:ring-[#28B8FF] focus:ring-offset-0 cursor-pointer"
          />
          <span className="text-xs text-[#AAB6C7] leading-relaxed">
            I consent to Cadence Digital processing my contact details in accordance with the{' '}
            <Link to="/privacy" className="text-[#28B8FF] hover:underline">
              Privacy Policy
            </Link>
            . We respect your confidentiality and never share client data.
          </span>
        </label>
        {errors.consent && <p className="text-[11px] text-red-400 pl-7">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#28B8FF] via-[#0094F0] to-[#28B8FF] bg-[length:200%_auto] hover:bg-right shadow-[0_0_25px_rgba(40,184,255,0.35)] hover:shadow-[0_0_35px_rgba(40,184,255,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] text-[#AAB6C7]/70 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-[#35E59A]" />
        <span>256-bit encrypted payload & instant server receipt confirmation</span>
      </div>
    </form>
  );
};
