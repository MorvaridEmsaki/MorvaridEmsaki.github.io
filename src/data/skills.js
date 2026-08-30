/* ============================================================================
 * skills.js — SERVICES / SKILL AREAS AND PROFICIENCY GROUPS
 * ----------------------------------------------------------------------------
 * ✏️  `services` renders the big cards on the home page.
 *     `skillGroups` renders the tag clusters on the About page.
 *     `accent` accepts: 'pink' | 'green' | 'orange'
 * ========================================================================== */

export const services = [
  {
    accent: 'pink',
    icon: 'spark',
    title: 'Social Media Strategy', // ✏️
    body: 'Channel strategy, content pillars, posting systems and community management that keep a brand consistently worth following.', // ✏️
    bullets: ['Channel & pillar strategy', 'Editorial calendars', 'Community management'], // ✏️
  },
  {
    accent: 'orange',
    icon: 'target',
    title: 'Paid Advertising',
    body: 'Meta, TikTok and Google Ads campaigns built around a clear objective, tested properly and scaled on evidence rather than vibes.',
    bullets: ['Meta & TikTok Ads', 'Google Search & PMax', 'Creative testing frameworks'],
  },
  {
    accent: 'green',
    icon: 'chart',
    title: 'Marketing Analytics',
    body: 'GA4 setup, event tracking, dashboards and the honest post-campaign read that tells you what to do next quarter.',
    bullets: ['GA4 & event tracking', 'Looker Studio dashboards', 'Attribution & reporting'],
  },
  {
    accent: 'pink',
    icon: 'pen',
    title: 'Content & Creative',
    body: 'Short-form video, campaign copy and asset direction — produced fast, on brand, and built for the platform it lives on.',
    bullets: ['Short-form video', 'Copywriting', 'Creative direction'],
  },
  {
    accent: 'orange',
    icon: 'search',
    title: 'SEO & Organic Growth',
    body: 'Keyword and topic research, on-page fundamentals and content structures that keep earning traffic after launch.',
    bullets: ['Keyword research', 'On-page optimisation', 'Content SEO'],
  },
  {
    accent: 'green',
    icon: 'flag',
    title: 'Campaign Strategy',
    body: 'End-to-end campaign planning — audience, message, channel mix, budget, timeline and the measurement plan attached to it.',
    bullets: ['Audience & positioning', 'Channel mix & budget', 'Launch management'],
  },
]

/* --- Skill tag groups (About page) --------------------------------------- */
export const skillGroups = [
  {
    title: 'Strategy', // ✏️
    accent: 'pink',
    items: [
      'Social media strategy',
      'Campaign planning',
      'Brand positioning',
      'Funnel design',
      'Content pillars',
      'Competitive analysis',
    ],
  },
  {
    title: 'Performance',
    accent: 'orange',
    items: [
      'Meta Ads',
      'TikTok Ads',
      'Google Ads',
      'A/B testing',
      'Budget pacing',
      'Landing page CRO',
    ],
  },
  {
    title: 'Analytics',
    accent: 'green',
    items: [
      'GA4',
      'Looker Studio',
      'UTM governance',
      'Event tracking',
      'Cohort reporting',
      'Python (pandas)',
    ],
  },
  {
    title: 'Creative',
    accent: 'pink',
    items: [
      'Short-form video',
      'Copywriting',
      'Canva & Figma',
      'CapCut / Premiere',
      'UGC direction',
      'Bilingual content (EN/FA)',
    ],
  },
]

export default { services, skillGroups }
