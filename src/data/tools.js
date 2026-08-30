/* ============================================================================
 * tools.js — THE MARKETING & ANALYTICS STACK YOU WORK IN
 * ----------------------------------------------------------------------------
 * ✏️  Add / remove tools freely. Each tool renders as a chip with its initials
 *     in a coloured badge — no logo files needed, and no trademark issues.
 *     `level` is optional: 'Expert' | 'Advanced' | 'Working'
 * ========================================================================== */

export const toolCategories = [
  {
    category: 'Analytics & Measurement', // ✏️
    accent: 'green',
    tools: [
      { name: 'Google Analytics 4', level: 'Advanced' },
      { name: 'Looker Studio', level: 'Advanced' },
      { name: 'Google Tag Manager', level: 'Working' },
      { name: 'Meta Events Manager', level: 'Advanced' },
      { name: 'Google Search Console', level: 'Advanced' },
      { name: 'Python / pandas', level: 'Working' },
    ],
  },
  {
    category: 'Paid Media',
    accent: 'orange',
    tools: [
      { name: 'Meta Ads Manager', level: 'Advanced' },
      { name: 'TikTok Ads Manager', level: 'Working' },
      { name: 'Google Ads', level: 'Advanced' },
      { name: 'LinkedIn Campaign Manager', level: 'Working' },
    ],
  },
  {
    category: 'Social & Publishing',
    accent: 'pink',
    tools: [
      { name: 'Later', level: 'Expert' },
      { name: 'Buffer', level: 'Advanced' },
      { name: 'Meta Business Suite', level: 'Expert' },
      { name: 'Telegram Analytics', level: 'Advanced' },
      { name: 'Sprout Social', level: 'Working' },
    ],
  },
  {
    category: 'Creative & Design',
    accent: 'pink',
    tools: [
      { name: 'Canva', level: 'Expert' },
      { name: 'Figma', level: 'Working' },
      { name: 'CapCut', level: 'Advanced' },
      { name: 'Adobe Premiere Pro', level: 'Working' },
      { name: 'Lightroom', level: 'Working' },
    ],
  },
  {
    category: 'SEO & Content',
    accent: 'green',
    tools: [
      { name: 'Semrush', level: 'Working' },
      { name: 'Ahrefs', level: 'Working' },
      { name: 'Ubersuggest', level: 'Advanced' },
      { name: 'WordPress', level: 'Advanced' },
    ],
  },
  {
    category: 'Ops & Collaboration',
    accent: 'orange',
    tools: [
      { name: 'Notion', level: 'Expert' },
      { name: 'Asana', level: 'Advanced' },
      { name: 'Slack', level: 'Expert' },
      { name: 'Google Workspace', level: 'Expert' },
      { name: 'Mailchimp', level: 'Advanced' },
    ],
  },
]

export default toolCategories
