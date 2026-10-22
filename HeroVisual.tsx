import React, { useState } from 'react';
import { Calendar, Play, Heart, Bookmark, Share2, BarChart3, Clock, CheckCircle2, Sparkles, Layers, Sliders } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'creative' | 'calendar' | 'metrics'>('creative');
  const [isPlaying, setIsPlaying] = useState(false);
  const [likeCount, setLikeCount] = useState(3842);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background glow layers */}
      <div
        className="absolute -top-12 -right-12 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #28B8FF 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B76AFF 0%, transparent 70%)' }}
      />

      {/* Main Console Container */}
      <div className="relative rounded-2xl bg-[#0D1420]/90 border border-[#1B293D] shadow-2xl backdrop-blur-xl overflow-hidden">
        {/* Top Console Bar */}
        <div className="px-5 py-3.5 border-b border-[#1B293D] bg-[#101A29]/70 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5799]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB938]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#35E59A]/80" />
            <span className="text-xs font-mono text-[#AAB6C7] ml-2 tracking-wide">
              cadence.studio // workflow_preview
            </span>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center gap-1 bg-[#070B12] p-1 rounded-lg border border-[#1B293D]">
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'creative'
                  ? 'bg-[#101A29] text-[#28B8FF] shadow-sm'
                  : 'text-[#AAB6C7] hover:text-white'
              }`}
            >
              Feed Reel
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'calendar'
                  ? 'bg-[#101A29] text-[#B76AFF] shadow-sm'
                  : 'text-[#AAB6C7] hover:text-white'
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === 'metrics'
                  ? 'bg-[#101A29] text-[#35E59A] shadow-sm'
                  : 'text-[#AAB6C7] hover:text-white'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Tab 1: Feed Reel Preview */}
        {activeTab === 'creative' && (
          <div className="p-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
              {/* Left: Reel Card Simulation */}
              <div className="sm:col-span-7 relative rounded-xl overflow-hidden bg-gradient-to-br from-[#101A29] via-[#070B12] to-[#152438] border border-[#1B293D] p-4 flex flex-col justify-between min-h-[300px]">
                {/* Visual art simulated video frame */}
                <div className="absolute inset-0 bg-[radial-gradient(#28b8ff15_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                
                {/* Simulated Graphic Asset in Reel */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#28B8FF] to-[#B76AFF] flex items-center justify-center text-white text-[10px] font-bold">
                        CD
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">@cadence.digital</p>
                        <p className="text-[10px] text-[#AAB6C7]">Original Audio · Trending</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#28B8FF]/10 text-[#28B8FF] border border-[#28B8FF]/20">
                      9:16 4K
                    </span>
                  </div>

                  {/* High Impact Visual Center */}
                  <div className="py-6 px-3 text-center my-auto">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#070B12]/80 border border-[#28B8FF]/30 shadow-[0_0_20px_rgba(40,184,255,0.2)] mb-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#28B8FF] to-[#0094F0] flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform"
                      >
                        <Play className={`w-5 h-5 ml-0.5 ${isPlaying ? 'animate-pulse text-white' : ''}`} />
                      </button>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[#28B8FF] font-semibold mb-1">
                      Frame 01 · 1.5s Hook
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white font-display leading-snug">
                      “How Top Brands Win Organic Attention in 2026”
                    </p>
                  </div>
                </div>

                {/* Reel Footer Engagement Buttons */}
                <div className="relative z-10 pt-3 border-t border-[#1B293D]/60 flex items-center justify-between text-xs text-[#AAB6C7]">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isLiked ? 'text-[#FF5799]' : 'hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#FF5799]' : ''}`} />
                      <span className="font-mono tabular-nums">{likeCount.toLocaleString()}</span>
                    </button>
                    <button
                      onClick={() => setIsSaved(!isSaved)}
                      className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isSaved ? 'text-[#28B8FF]' : 'hover:text-white'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#28B8FF]' : ''}`} />
                      <span className="font-mono">892</span>
                    </button>
                    <div className="flex items-center gap-1.5 hover:text-white cursor-pointer">
                      <Share2 className="w-4 h-4" />
                      <span className="font-mono">3.4k</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#35E59A] font-medium">98.2% Retention</span>
                </div>
              </div>

              {/* Right: Optimization Checklist */}
              <div className="sm:col-span-5 flex flex-col justify-between space-y-3 bg-[#101A29]/50 p-4 rounded-xl border border-[#1B293D]">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[#28B8FF]" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Optimization Suite
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2 text-[#F5F7FB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35E59A] shrink-0 mt-0.5" />
                      <span>First 2-second hook engineered for retention</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#F5F7FB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35E59A] shrink-0 mt-0.5" />
                      <span>Custom kinetic typography captions</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#F5F7FB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35E59A] shrink-0 mt-0.5" />
                      <span>Categorized hashtag & SEO indexing</span>
                    </div>
                    <div className="flex items-start gap-2 text-[#F5F7FB]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#35E59A] shrink-0 mt-0.5" />
                      <span>Multi-platform aspect formatting</span>
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#070B12] border border-[#1B293D] text-[11px] space-y-1">
                  <div className="flex justify-between text-[#AAB6C7]">
                    <span>Publishing Status:</span>
                    <span className="text-[#35E59A] font-semibold">Scheduled Ready</span>
                  </div>
                  <div className="flex justify-between text-[#AAB6C7]">
                    <span>Target Time Window:</span>
                    <span className="text-white font-mono">18:15 EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Calendar Matrix */}
        {activeTab === 'calendar' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#B76AFF]" />
                Upcoming 7-Day Publishing Cadence
              </span>
              <span className="text-xs text-[#35E59A] font-mono">100% Scheduled</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { day: 'Mon', time: '11:30 AM', title: 'Product Macro Reel', tag: 'Reel', color: '#28B8FF' },
                { day: 'Wed', time: '02:15 PM', title: 'Educational Carousel', tag: 'Carousel', color: '#B76AFF' },
                { day: 'Fri', time: '06:45 PM', title: 'Community Q&A Story', tag: 'Story', color: '#35E59A' },
                { day: 'Sun', time: '10:00 AM', title: 'Founder Manifesto', tag: 'Post', color: '#FFB938' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#101A29] border border-[#1B293D] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white font-mono">{item.day}</span>
                    <span
                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold"
                      style={{ backgroundColor: `${item.color}20`, color: item.color }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#F5F7FB] line-clamp-1">{item.title}</p>
                  <div className="flex items-center gap-1 text-[10px] text-[#AAB6C7]">
                    <Clock className="w-3 h-3 text-[#AAB6C7]" />
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-[#101A29]/40 border border-[#1B293D] flex items-center justify-between text-xs text-[#AAB6C7]">
              <span>Stakeholder Approval: <strong className="text-white">All 4 pieces approved</strong></span>
              <span className="text-[#B76AFF] font-medium">Automatic multi-network dispatch</span>
            </div>
          </div>
        )}

        {/* Tab 3: Analytics / Growth Engine */}
        {activeTab === 'metrics' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#35E59A]" />
                Performance Dashboard View
              </span>
              <span className="text-xs text-[#AAB6C7]">Updated in Real-Time</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#101A29] border border-[#1B293D]">
                <p className="text-[11px] text-[#AAB6C7]">Organic Reach</p>
                <p className="text-lg font-bold text-white font-mono tabular-nums mt-1">+142.6%</p>
                <span className="text-[10px] text-[#35E59A] font-semibold">↑ Month-over-month</span>
              </div>
              <div className="p-3 rounded-xl bg-[#101A29] border border-[#1B293D]">
                <p className="text-[11px] text-[#AAB6C7]">Save Rate</p>
                <p className="text-lg font-bold text-white font-mono tabular-nums mt-1">6.8%</p>
                <span className="text-[10px] text-[#28B8FF] font-semibold">2.4x category median</span>
              </div>
              <div className="p-3 rounded-xl bg-[#101A29] border border-[#1B293D]">
                <p className="text-[11px] text-[#AAB6C7]">Inbound Leads</p>
                <p className="text-lg font-bold text-white font-mono tabular-nums mt-1">28</p>
                <span className="text-[10px] text-[#B76AFF] font-semibold">High-intent inquiries</span>
              </div>
            </div>

            {/* Visual engagement trajectory bar */}
            <div className="p-3.5 rounded-xl bg-[#101A29] border border-[#1B293D] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-[#AAB6C7]">Audience Resonance Index</span>
                <span className="text-[#35E59A] font-mono font-bold">Top 5% Tier</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#070B12] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#28B8FF] via-[#35E59A] to-[#FFB938]"
                  style={{ width: '84%' }}
                />
              </div>
              <p className="text-[11px] text-[#AAB6C7]">
                Visual storytelling algorithm metrics continuously calibrated across every post.
              </p>
            </div>
          </div>
        )}

        {/* Console Footnote */}
        <div className="px-5 py-2.5 bg-[#070B12]/80 border-t border-[#1B293D] flex items-center justify-between text-[11px] text-[#AAB6C7]">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#35E59A]" />
            Cadence Production Engine Active
          </span>
          <span className="font-mono text-[#AAB6C7]/70">Zero Vanity Slop</span>
        </div>
      </div>
    </div>
  );
};
