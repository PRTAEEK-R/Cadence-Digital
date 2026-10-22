import React from 'react';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { useRouter } from '../utils/router';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#28B8FF]/10 border border-[#28B8FF]/30 text-[#28B8FF] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(40,184,255,0.2)]">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#FF5799] uppercase tracking-wider">
            Error 404
          </span>
          <h1 className="text-3xl font-bold font-display text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-[#AAB6C7] leading-relaxed">
            The page or resource you are attempting to access does not exist or has moved within the Cadence Digital directory.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#28B8FF] to-[#0094F0] text-xs font-bold text-white shadow-[0_0_20px_rgba(40,184,255,0.3)] hover:shadow-[0_0_25px_rgba(40,184,255,0.5)] cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </button>
        </div>
      </div>
    </div>
  );
};
