import { ServiceItem, PricingPlan, ProcessStep, PortfolioProject, Testimonial } from '../types';

export const AGENCY_NAME = 'Cadence Digital';
export const AGENCY_TAGLINE = 'Creative Thinking. Measurable Growth.';
export const AGENCY_SUBTITLE = 'A modern creative agency helping businesses build their social media presence through content creation, strategic publishing, community management, analytics, and customized marketing strategies.';

export const SERVICES: ServiceItem[] = [
  {
    id: 'content-creation',
    number: '01',
    title: 'Content Creation & Curation',
    tagline: 'Electric creative that commands attention in crowded feeds',
    description: 'Eye-catching posts, reels, stories, and branded content that speaks in your brand’s voice.',
    accentColor: '#28B8FF',
    accentBg: 'rgba(40, 184, 255, 0.12)',
    borderColor: 'rgba(40, 184, 255, 0.35)',
    glowColor: 'rgba(40, 184, 255, 0.25)',
    iconName: 'Lightbulb',
    deliverables: [
      'Social media posts and carousels',
      'Short-form videos and reels',
      'Stories and branded templates',
      'Captions and hashtag research',
      'Brand-consistent creative direction'
    ],
    capabilities: [
      {
        title: 'High-Retention Short Form Video',
        description: 'Hook-driven editing, pacing, and visual storytelling tailored to TikTok, Instagram Reels, and YouTube Shorts algorithms.'
      },
      {
        title: 'Editorial Carousels & Design Systems',
        description: 'Multi-slide educational and product frameworks engineered to drive bookmarks, saves, and link clicks.'
      },
      {
        title: 'Story Templates & Real-Time Content',
        description: 'Dynamic interactive sticker stories, behind-the-scenes captures, and daily branded engagement touchpoints.'
      }
    ],
    idealFor: 'Brands with an existing product or service needing high-volume visual polish and consistent editorial output.',
    turnaround: 'Weekly production batches with 48-hour revision turnarounds',
    keyMetric: 'Saves, Shares & Audience Retention'
  },
  {
    id: 'posting-scheduling',
    number: '02',
    title: 'Posting & Scheduling',
    tagline: 'Precision timing that reaches your audience at peak attention',
    description: 'Consistent, strategic posting at the right time for maximum reach and engagement.',
    accentColor: '#B76AFF',
    accentBg: 'rgba(183, 106, 255, 0.12)',
    borderColor: 'rgba(183, 106, 255, 0.35)',
    glowColor: 'rgba(183, 106, 255, 0.25)',
    iconName: 'Calendar',
    deliverables: [
      'Monthly content calendars',
      'Post and campaign scheduling',
      'Platform-specific publishing plans',
      'Publishing frequency recommendations',
      'Campaign coordination'
    ],
    capabilities: [
      {
        title: 'Algorithmic Window Optimization',
        description: 'Deploying content during audience activity peaks mapped across your specific geographic distribution.'
      },
      {
        title: 'Cross-Platform Formatting',
        description: 'Optimizing aspect ratios, caption lengths, and thumbnail crops per platform (Instagram, LinkedIn, X, TikTok).'
      },
      {
        title: 'Transparent Content Approval Workflow',
        description: 'Collaborative calendar preview links so internal stakeholders can approve assets 7 days prior to live publication.'
      }
    ],
    idealFor: 'Growing teams that want hands-off reliability, zero missed deadlines, and disciplined brand consistency.',
    turnaround: '30-day proactive editorial calendars scheduled 1 week in advance',
    keyMetric: 'Publishing Consistency & Optimal View Velocity'
  },
  {
    id: 'community-management',
    number: '03',
    title: 'Community Management',
    tagline: 'Turning passive scrollers into dedicated brand advocates',
    description: 'Building real connections, responding to your audience, and growing your community.',
    accentColor: '#35E59A',
    accentBg: 'rgba(53, 229, 154, 0.12)',
    borderColor: 'rgba(53, 229, 154, 0.35)',
    glowColor: 'rgba(53, 229, 154, 0.25)',
    iconName: 'Users',
    deliverables: [
      'Comment management',
      'Direct message management',
      'Audience engagement',
      'Community building',
      'Brand reputation monitoring'
    ],
    capabilities: [
      {
        title: 'Rapid Response Inbound Triage',
        description: 'Timely, brand-aligned replies to customer questions, praise, and product inquiries within comment feeds and direct messages.'
      },
      {
        title: 'Proactive Outbound Socializing',
        description: 'Engaging thoughtfully on industry peers, creators, and relevant community discussions to naturally attract targeted followers.'
      },
      {
        title: 'Brand Reputation & Sentiment Alerts',
        description: 'Immediate escalation procedures for sensitive feedback or customer service opportunities.'
      }
    ],
    idealFor: 'Brands that want a warm, conversational, human presence that builds loyalty without hiring full-time internal moderators.',
    turnaround: 'Daily monitoring windows (7 days a week coverage available)',
    keyMetric: 'Response Rate & Net Sentiment Score'
  },
  {
    id: 'analytics-reporting',
    number: '04',
    title: 'Analytics & Reporting',
    tagline: 'Transparent data dashboards that translate vanity metrics into ROI',
    description: 'Track performance, analyze results, and optimize for better growth.',
    accentColor: '#FFB938',
    accentBg: 'rgba(255, 185, 56, 0.12)',
    borderColor: 'rgba(255, 185, 56, 0.35)',
    glowColor: 'rgba(255, 185, 56, 0.25)',
    iconName: 'TrendingUp',
    deliverables: [
      'Engagement and reach analysis',
      'Audience growth tracking',
      'Campaign performance reporting',
      'Monthly reports',
      'Data-informed recommendations'
    ],
    capabilities: [
      {
        title: 'Executive Summary Briefings',
        description: 'No fluff or confusing jargon. Clear visual dashboards highlighting what succeeded, what underperformed, and why.'
      },
      {
        title: 'Creative Content Dissection',
        description: 'Granular breakdown of hook performance, average watch times, click-through rates, and top converting post styles.'
      },
      {
        title: 'Continuous Optimization Playbook',
        description: 'Actionable testing recommendations baked directly into the upcoming month’s creative brief.'
      }
    ],
    idealFor: 'Founders and marketing leads who need clear reporting to justify creative spend and steer strategic investments.',
    turnaround: 'Monthly comprehensive report delivered on the 1st week of each billing cycle',
    keyMetric: 'Reach Growth, Follower Velocity & Inbound Conversions'
  },
  {
    id: 'social-strategy',
    number: '05',
    title: 'Social Media Strategy',
    tagline: 'A bespoke roadmap built for your brand voice and commercial goals',
    description: 'Customized plans to match your goals, brand voice, and target audience.',
    accentColor: '#FF5799',
    accentBg: 'rgba(255, 87, 153, 0.12)',
    borderColor: 'rgba(255, 87, 153, 0.35)',
    glowColor: 'rgba(255, 87, 153, 0.25)',
    iconName: 'Megaphone',
    deliverables: [
      'Audience research',
      'Competitor analysis',
      'Platform selection',
      'Campaign planning',
      'Strategic performance reviews'
    ],
    capabilities: [
      {
        title: 'Audience Persona & Positioning Maps',
        description: 'Deep dive into your customer demographic, pain points, content consumption habits, and preferred channels.'
      },
      {
        title: 'Competitor Whitespace Identification',
        description: 'Uncovering overlooked content angles and messaging opportunities your competitors are failing to address.'
      },
      {
        title: 'Comprehensive Brand Voice Guidelines',
        description: 'Codified vocabulary, visual styling references, tonal dos and don’ts, and response guidelines for true consistency.'
      }
    ],
    idealFor: 'Businesses pivoting, launching new product lines, or transitioning from sporadic posting to systematic brand building.',
    turnaround: 'Comprehensive initial strategy deck delivered in 14 business days with quarterly refresh sprints',
    keyMetric: 'Share of Voice & Organic Acquisition Efficiency'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Foundation',
    isPopular: false,
    priceNote: "Let's Discuss Your Needs",
    period: 'monthly retainer',
    description: 'Essential content production and foundational calendar strategy for emerging businesses looking to establish a credible social presence.',
    features: [
      'Content creation (12 high-impact monthly posts & carousels)',
      'Basic monthly content calendar',
      'Publishing recommendations & time-window guide',
      'Monthly performance summary & reach highlights',
      'Brand creative alignment session'
    ],
    idealFor: 'Early-stage brands and boutique businesses starting their social channels.',
    serviceFocus: 'Content Creation & Foundational Strategy',
    accentColor: '#28B8FF'
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    isPopular: true,
    priceNote: "Let's Discuss Your Needs",
    period: 'monthly retainer',
    description: 'Complete hands-off execution combining expanded short-form video production, daily publishing, and dedicated community management.',
    features: [
      'Everything included in Starter',
      'Expanded content production (Reels, carousels, stories & graphic assets)',
      'Full posting and scheduling across 2-3 primary platforms',
      'Active community management (comment & DM monitoring)',
      'Monthly in-depth reporting with strategic recommendations',
      'Bi-weekly creative review check-ins'
    ],
    idealFor: 'Growing companies wanting consistent brand presence without internal marketing overhead.',
    serviceFocus: 'End-to-End Content & Community Management',
    accentColor: '#35E59A'
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'Enterprise Growth',
    isPopular: false,
    priceNote: "Let's Discuss Your Needs",
    period: 'monthly retainer',
    description: 'Our most comprehensive tier: multi-platform aggressive growth strategy, tailored brand campaigns, advanced analytics, and priority slack channel access.',
    features: [
      'Everything included in Growth',
      'Advanced bespoke social media strategy & quarterly roadmap',
      'Expanded campaign planning (launches, product drops, activations)',
      'Detailed analytics & competitor benchmarking dashboard',
      'Multi-platform coverage (Instagram, TikTok, LinkedIn, YouTube)',
      'Priority communication via dedicated agency Slack channel',
      'Dedicated Creative Director & Senior Account Lead'
    ],
    idealFor: 'Established brands, scaling D2C labels, and market leaders pursuing dominant market share.',
    serviceFocus: 'Full Agency Integration & Aggressive Scale',
    accentColor: '#FF5799'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    headline: 'Deep Dive into Your Brand DNA',
    description: 'We immerse ourselves in your business goals, target audience, brand voice, and current social footprint to identify strengths and immediate growth opportunities.',
    details: [
      'Comprehensive social footprint audit',
      'Target customer demographic mapping',
      'Current performance & competitor review',
      'Clear KPI and growth objective alignment'
    ],
    icon: 'Search',
    accentColor: '#28B8FF'
  },
  {
    step: '02',
    title: 'Strategize',
    headline: 'Customized Marketing Direction',
    description: 'We develop a tailored content plan, visual aesthetic framework, and publishing cadence calculated to capture attention and achieve your specific metrics.',
    details: [
      'Bespoke content pillars and story angles',
      'Visual aesthetic and template architecture',
      'Platform prioritization and posting schedule',
      'Tone of voice and community response guide'
    ],
    icon: 'Compass',
    accentColor: '#B76AFF'
  },
  {
    step: '03',
    title: 'Create & Publish',
    headline: 'Production & Seamless Execution',
    description: 'Our creative team designs high-retention posts, reels, and stories, coordinates reviews, and manages scheduled publishing with zero friction on your end.',
    details: [
      'Batch creation of video, carousels, and copy',
      'Collaborative monthly approval calendar',
      'Time-optimized algorithmic publishing',
      'Real-time community moderation and engagement'
    ],
    icon: 'Sparkles',
    accentColor: '#35E59A'
  },
  {
    step: '04',
    title: 'Analyze & Improve',
    headline: 'Data-Informed Refinement',
    description: 'We review performance analytics, audience behavior, and conversion signals to double down on what works and continually elevate your digital presence.',
    details: [
      'Monthly transparent analytics briefing',
      'Creative hook and watch-time dissection',
      'Iterative content tests and optimizations',
      'Quarterly strategic roadmap pivots'
    ],
    icon: 'TrendingUp',
    accentColor: '#FFB938'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'solas-botanical-beverage',
    title: 'Solas Botanical Tonic: Brand Launch & Reels Surge',
    client: 'Solas Botanicals (Demonstration Case Study)',
    category: 'campaigns',
    categoryLabel: 'Campaigns',
    summary: 'A 60-day social launch campaign blending high-contrast studio macro visuals with punchy short-form cocktail recipes.',
    challenge: 'Enter a crowded functional beverage category and establish an unmistakable visual signature without traditional billboard advertising.',
    strategy: 'Engineered a 3-part content engine: sensory ASMR product macro reels, creator taste-test pairings, and sleek typography carousels highlighting herbal origins.',
    deliverables: [
      '18 short-form vertical video reels',
      '12 carousel breakdowns',
      'Custom Instagram story design kit',
      'Community engagement playbook'
    ],
    metrics: [
      { label: 'Demonstration Reach', value: '412K Organic Views' },
      { label: 'Audience Engagement', value: '8.4% Average CTR' },
      { label: 'Saves & Shares', value: '14,200 Bookmarks' }
    ],
    palette: ['#070B12', '#28B8FF', '#35E59A'],
    isDemo: true,
    accentColor: '#28B8FF'
  },
  {
    id: 'kanso-apparel-grid',
    title: 'Kanso Minimalist Apparel: Editorial Grid Architecture',
    client: 'Kanso Studio (Demonstration Case Study)',
    category: 'posts',
    categoryLabel: 'Social Media Posts',
    summary: 'Restructuring the Instagram grid of an ethical streetwear label into a coherent editorial magazine with high visual discipline.',
    challenge: 'Inconsistent imagery and low interaction rates made the feed feel scattered and disconnected from their premium clothing prices.',
    strategy: 'Implemented a strict 9-tile rhythm pairing monochrome fabric textures, dynamic architectural portraits, and crisp typographic lookbooks.',
    deliverables: [
      'Monthly 30-day curated grid blueprints',
      'High-contrast carousel lookbooks',
      'Tailored caption frameworks and styling tips'
    ],
    metrics: [
      { label: 'Profile Visits', value: '+185% Increase' },
      { label: 'Average Saves / Post', value: '620 Saves' },
      { label: 'Publishing Cadence', value: '100% on-time' }
    ],
    palette: ['#101A29', '#B76AFF', '#F5F7FB'],
    isDemo: true,
    accentColor: '#B76AFF'
  },
  {
    id: 'velo-fintech-explainer',
    title: 'Velo Finance: Micro-Reels & Motion Explainer Series',
    client: 'Velo Protocol (Demonstration Case Study)',
    category: 'reels',
    categoryLabel: 'Reels & Video',
    summary: 'Translating complex automated treasury tools into fast-paced 30-second kinetic motion reels designed for founders and creators.',
    challenge: 'Fintech concepts frequently suffer from boring static graphics and low algorithmic distribution on TikTok and Reels.',
    strategy: 'Designed high-tempo screen recordings with custom neon motion graphics, bold on-screen kinetic captions, and punchy hook questions in the first 1.5 seconds.',
    deliverables: [
      '16 motion graphics explainer videos',
      'Dynamic caption templates',
      'Sound design & audio licensing curation'
    ],
    metrics: [
      { label: 'Average Watch Time', value: '88% Completion' },
      { label: 'Demo Reel Plays', value: '280K Plays' },
      { label: 'Inbound Inquiries', value: '42 Qualified Leads' }
    ],
    palette: ['#0D1420', '#35E59A', '#28B8FF'],
    isDemo: true,
    accentColor: '#35E59A'
  },
  {
    id: 'lumina-skin-rebrand',
    title: 'Lumina Derma: Clinical Rebrand & Social Identity Kit',
    client: 'Lumina Derma (Demonstration Case Study)',
    category: 'branding',
    categoryLabel: 'Branding',
    summary: 'Holistic social media rebrand unifying story templates, highlights, feed palettes, and community response guidelines.',
    challenge: 'A clinical skincare brand needed to bridge medical credibility with warm, approachable modern aesthetic values.',
    strategy: 'Created an authoritative yet soothing visual language utilizing clean scientific typography, soft sage accents, and structured dermatologist Q&A graphics.',
    deliverables: [
      'Comprehensive Social Style Guide',
      '24 Figma modular feed templates',
      'Custom icon set for Story Highlights',
      'Community management response matrix'
    ],
    metrics: [
      { label: 'Brand Recognition', value: 'Unified Aesthetic' },
      { label: 'DM Response Rate', value: '< 15min average' },
      { label: 'Follower Velocity', value: '+2.8x Growth' }
    ],
    palette: ['#070B12', '#FFB938', '#35E59A'],
    isDemo: true,
    accentColor: '#FFB938'
  },
  {
    id: 'kinetic-audio-drop',
    title: 'Kinetic Audio: Headphone Drop Integrated Campaign',
    client: 'Kinetic Audio Lab (Demonstration Case Study)',
    category: 'campaigns',
    categoryLabel: 'Campaigns',
    summary: 'A 4-week countdown and reveal sequence for a wireless studio headset, generating viral sound-bite UGC and pre-orders.',
    challenge: 'Create buzz and organic anticipation on a limited media budget prior to public ecommerce release.',
    strategy: 'Teaser sound waves, blindfolded producer listening tests, and an interactive Instagram story voting bracket culminating in a synchronized drop.',
    deliverables: [
      'Teaser video sequence & soundboard clips',
      'Interactive countdown stories & countdown stickers',
      'Launch day multi-angle carousel & customer DM funnel'
    ],
    metrics: [
      { label: 'Pre-Order Signups', value: '3,450 Early Birds' },
      { label: 'Story Completion', value: '94% Retention' },
      { label: 'User Generated Tags', value: '480+ Submissions' }
    ],
    palette: ['#101A29', '#FF5799', '#28B8FF'],
    isDemo: true,
    accentColor: '#FF5799'
  },
  {
    id: 'strata-coffee-roasters',
    title: 'Strata Specialty Coffee: Daily Rituals Video Series',
    client: 'Strata Roastery (Demonstration Case Study)',
    category: 'reels',
    categoryLabel: 'Reels & Video',
    summary: 'Atmospheric morning brew reels highlighting roasting origins, pour-over technique, and cafe culture.',
    challenge: 'Elevate bag subscription sales through authentic coffee storytelling rather than aggressive direct sales messaging.',
    strategy: 'Developed a calming "First Pour" weekly series shot with natural morning light and tactile cafe sounds, accompanied by concise brew recipe captions.',
    deliverables: [
      '14 tactile brewing reels',
      'Weekly recipe highlight stories',
      'Curated Spotify playlist tie-in for community engagement'
    ],
    metrics: [
      { label: 'Repeat Views', value: '3.1x Industry Benchmark' },
      { label: 'Bio Link Clicks', value: '1,890 Clicks' },
      { label: 'Engagement Rate', value: '9.2%' }
    ],
    palette: ['#070B12', '#FFB938', '#B76AFF'],
    isDemo: true,
    accentColor: '#FFB938'
  }
];

export const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Cadence Digital took our sporadic, stressful posting habits and turned them into a reliable, high-performing content machine. Their aesthetic is razor sharp and our audience finally perceives us as an established category leader.',
    author: 'Elena Vance',
    role: 'Founder & Creative Director',
    company: 'Solas Botanicals',
    industry: 'Consumer Goods',
    isDemoNote: 'Demonstration partner profile representing typical client collaboration',
    accentColor: '#28B8FF'
  },
  {
    id: 'test-2',
    quote: 'The team understands short-form video pacing better than any agency we’ve partnered with. Instead of vanity metrics, they focus on retention, saves, and actual customer inquiries that turn into revenue.',
    author: 'Marcus Chen',
    role: 'Head of Growth',
    company: 'Velo Protocol',
    industry: 'Financial Technology',
    isDemoNote: 'Demonstration partner profile representing typical client collaboration',
    accentColor: '#35E59A'
  },
  {
    id: 'test-3',
    quote: 'Having the 30-day calendar locked in advance with clear metrics each month has liberated our internal marketing team. We have complete peace of mind knowing our channels are active and monitored every day.',
    author: 'Sienna Lindqvist',
    role: 'Marketing Lead',
    company: 'Kanso Apparel',
    industry: 'Lifestyle & Retail',
    isDemoNote: 'Demonstration partner profile representing typical client collaboration',
    accentColor: '#B76AFF'
  }
];
