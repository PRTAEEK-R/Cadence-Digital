import React, { useState } from 'react';
import { Lightbulb, Calendar, Users, TrendingUp, Megaphone, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { useRouter } from '../utils/router';

interface ServiceRowProps {
  service: ServiceItem;
  isLast?: boolean;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ service, isLast = false }) => {
  const { navigate } = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    const iconProps = { className: 'w-6 h-6 transition-transform duration-300' };
    switch (service.iconName) {
      case 'Lightbulb':
        return <Lightbulb {...iconProps} style={{ color: service.accentColor }} />;
      case 'Calendar':
        return <Calendar {...iconProps} style={{ color: service.accentColor }} />;
      case 'Users':
        return <Users {...iconProps} style={{ color: service.accentColor }} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} style={{ color: service.accentColor }} />;
      case 'Megaphone':
        return <Megaphone {...iconProps} style={{ color: service.accentColor }} />;
      default:
        return <Lightbulb {...iconProps} style={{ color: service.accentColor }} />;
    }
  };

  const handleRowClick = () => {
    navigate(`/services/${service.id}`);
  };

  const handleInquireClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/contact?service=${service.id}`);
  };

  return (
    <div
      onClick={handleRowClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleRowClick();
        }
      }}
      className={`group relative w-full cursor-pointer transition-all duration-300 ease-out py-6 lg:py-8 px-4 sm:px-6 lg:px-8 rounded-xl ${
        !isLast ? 'border-b border-[#1B293D]/70' : ''
      }`}
      style={{
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0px)',
        backgroundColor: isHovered ? 'rgba(16, 26, 41, 0.65)' : 'transparent',
        boxShadow: isHovered ? `0 10px 30px -10px ${service.glowColor}` : 'none'
      }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8">
        {/* Left Section: Icon + Vertical Accent Line + Title & Description */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
          {/* Rounded Square Icon Container */}
          <div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 relative group-hover:scale-105"
            style={{
              backgroundColor: service.accentBg,
              borderColor: isHovered ? service.accentColor : service.borderColor,
              boxShadow: isHovered ? `0 0 20px ${service.glowColor}` : 'none'
            }}
          >
            {getIcon()}
          </div>

          {/* Thin Vertical Accent Line */}
          <div
            className="hidden sm:block w-0.5 self-stretch rounded-full transition-all duration-300 shrink-0"
            style={{
              backgroundColor: isHovered ? service.accentColor : 'rgba(27, 41, 61, 0.8)',
              boxShadow: isHovered ? `0 0 10px ${service.accentColor}` : 'none'
            }}
            aria-hidden="true"
          />

          {/* Title & Description */}
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-semibold tracking-wider text-[#AAB6C7]/60">
                {service.number}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-[#F5F7FB] tracking-tight group-hover:text-white transition-colors">
                {service.title}
              </h3>
            </div>
            <p className="text-sm text-[#AAB6C7] line-clamp-2 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Right Section: Deliverable hints & Interactive "Learn More" Arrow */}
        <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pl-18 sm:pl-0">
          {/* Quick Deliverable Tags on Desktop */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-[#AAB6C7]">
            <span className="truncate max-w-[200px]">{service.deliverables[0]}</span>
            <span aria-hidden="true" className="text-[#1B293D]">·</span>
            <span className="truncate max-w-[180px]">{service.deliverables[1]}</span>
          </div>

          {/* Action cluster */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleInquireClick}
              className="text-xs font-medium text-[#AAB6C7] hover:text-white px-3 py-1.5 rounded-lg border border-transparent hover:border-[#1B293D] transition-colors"
            >
              Book Service
            </button>

            <div
              className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 px-3 py-2 rounded-lg"
              style={{
                color: isHovered ? service.accentColor : '#F5F7FB',
                backgroundColor: isHovered ? service.accentBg : 'rgba(16, 26, 41, 0.4)'
              }}
            >
              <span className="hidden sm:inline">Learn More</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300"
                style={{
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0px)',
                  color: service.accentColor
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
