/* ============================================================================
 * about.js — BIO, CAREER TIMELINE, EDUCATION, CERTIFICATIONS, STRENGTHS
 * ----------------------------------------------------------------------------
 * ✏️  Everything on the About page and the About/Education sections of the
 *     home page comes from this file. Add or remove array items freely —
 *     the layouts adapt to any number of entries.
 * ========================================================================== */

/* --- Long-form biography. Each string becomes its own paragraph. ---------- */
export const bio = [
  // ✏️ Replace with your own story — keep it in your voice.
  'I started in social media because I liked the puzzle of it: you get about one second to earn someone’s attention, and everything — the hook, the crop, the caption, the posting hour — is a variable you can test. Six years later I still work that way, just with bigger budgets and better dashboards.',
  'Most of my work sits where content meets performance. I build the strategy, shape the creative direction, run the paid support behind it, and then go back into GA4 and platform analytics to figure out which parts actually moved the number we cared about. I have done this for a US fashion label, a travel agency, an immigration consultancy and a women-in-tech non-profit — very different audiences, same underlying discipline.',
  'Right now I am completing a Master of Digital Marketing at Steinbeis University and deliberately deepening the analytics side: GA4, attribution, and enough Python to stop waiting on someone else to pull the data. The goal is simple — be the marketer who can both make the thing and prove the thing.',
]

/* --- Short "About Me" blurb used on the home page ------------------------- */
export const shortBio =
  'Social-first strategist with a performance brain. I turn brand ideas into content systems, paid campaigns and analytics that show their work.' // ✏️

/* --- Career timeline ------------------------------------------------------
 * Newest first. `current: true` adds the pulsing "now" marker.
 * ------------------------------------------------------------------------ */
export const timeline = [
  {
    period: '2024 — Present', // ✏️
    role: 'Digital Marketing & Social Media Strategist', // ✏️
    org: 'Freelance / Independent', // ✏️
    location: 'Ottawa, Canada', // ✏️
    current: true,
    points: [
      'Lead social and paid strategy for small brands across retail, travel and professional services.', // ✏️
      'Build GA4 + Looker Studio reporting so clients can see channel performance without asking for a deck.',
      'Produce short-form video and campaign creative end to end — concept, script, edit, publish.',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Social Media & Content Lead',
    org: 'IEP Canada',
    location: 'Ottawa, Canada',
    points: [
      'Owned the Telegram and Instagram channels driving consultation enquiries.', // ✏️
      'Rebuilt the content calendar around a funnel model, tracking message-to-consultation conversion.',
      'Ran the analysis that became my master’s thesis on channel-to-lead conversion.',
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Social Media Marketing Specialist',
    org: 'HYFVE (US fashion brand)',
    location: 'Remote',
    points: [
      'Managed the always-on organic calendar for a fast-fashion catalogue.', // ✏️
      'Coordinated creator seeding and UGC collection for seasonal drops.',
      'Reported weekly on engagement, reach and product-page click-through.',
    ],
  },
  {
    period: '2021 — 2022',
    role: 'Marketing & Community Volunteer',
    org: 'Women of MENA in Technology',
    location: 'Remote',
    points: [
      'Grew community awareness through event promotion and speaker campaigns.', // ✏️
      'Built templated content kits so volunteers could publish consistently.',
    ],
  },
  {
    period: '2019 — 2021',
    role: 'Digital Marketing Coordinator',
    org: 'Ania Gasht Travel Agency',
    location: 'Remote',
    points: [
      'First marketing hire — set up the social presence, brand voice and paid basics.', // ✏️
      'Ran seasonal promotional campaigns tied to booking periods.',
    ],
  },
]

/* --- Education ----------------------------------------------------------- */
export const education = [
  {
    credential: 'Master of Digital Marketing', // ✏️
    institution: 'Steinbeis University', // ✏️
    period: 'In progress', // ✏️
    detail:
      'Thesis: channel-to-lead conversion in messaging-app marketing, using a consultancy’s Telegram channel as the case.', // ✏️
  },
  {
    credential: 'Bachelor’s Degree — [YOUR FIELD]', // ✏️ replace
    institution: '[YOUR UNIVERSITY]', // ✏️ replace
    period: '[YEARS]', // ✏️
    detail: 'Add a one-line note about focus, honours or a relevant capstone project.', // ✏️
  },
]

/* --- Certifications -------------------------------------------------------
 * `status` accepts: 'Certified' | 'In progress' | 'Planned'
 * ------------------------------------------------------------------------ */
export const certifications = [
  {
    name: 'Google Analytics 4 Certification', // ✏️
    issuer: 'Google Skillshop',
    year: '2025',
    status: 'Certified',
    url: '#', // ✏️ paste the credential link
  },
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    year: '2025',
    status: 'Certified',
    url: '#',
  },
  {
    name: 'Meta Blueprint — Media Buying',
    issuer: 'Meta',
    year: '2025',
    status: 'In progress',
    url: '#',
  },
  {
    name: 'Python for Data Analysis',
    issuer: '[PROVIDER]', // ✏️
    year: '2026',
    status: 'In progress',
    url: '#',
  },
]

/* --- Professional strengths (soft/working style) -------------------------- */
export const strengths = [
  {
    title: 'Strategy that survives contact with reality', // ✏️
    body: 'I plan for the resources a team actually has, not the ones a case study assumes.',
  },
  {
    title: 'Bilingual storytelling',
    body: 'I write and produce in English and Farsi, which keeps nuance intact for diaspora audiences.',
  },
  {
    title: 'Measurement literacy',
    body: 'I set the KPI before the campaign, instrument it properly, and report the honest number.',
  },
  {
    title: 'Fast creative turnaround',
    body: 'Concept to published short-form video in a day when the moment calls for it.',
  },
]

/* --- Marketing specializations (what you're hired for) -------------------- */
export const specializations = [
  'Social media strategy', // ✏️
  'Short-form video & content production',
  'Paid social (Meta, TikTok)',
  'Paid search (Google Ads)',
  'Marketing analytics & GA4',
  'Campaign planning & launch',
  'Community & creator partnerships',
  'Email & lifecycle basics',
]

export default { bio, shortBio, timeline, education, certifications, strengths, specializations }
