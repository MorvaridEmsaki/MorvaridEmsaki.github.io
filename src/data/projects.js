/* ============================================================================
 * projects.js — ALL PROJECT + CASE-STUDY CONTENT LIVES HERE
 * ----------------------------------------------------------------------------
 * ⚠️  EVERY PROJECT BELOW IS FICTIONAL SAMPLE CONTENT. Replace it with yours.
 *
 * HOW TO ADD A PROJECT
 *   1. Copy the PROJECT_TEMPLATE object at the bottom of this file.
 *   2. Paste it into the `projects` array.
 *   3. Give it a unique `slug` (lowercase, hyphens) — it becomes the URL:
 *      /projects/<slug>
 *   4. Fill in the fields. Any field you delete simply disappears from the
 *      case-study page; nothing breaks and no layout code needs touching.
 *
 * IMAGES
 *   Put files in  public/images/  and reference them WITHOUT a leading slash:
 *      cover: { image: 'images/bloom-cover.jpg', alt: 'Describe the image' }
 *   Leave `image: null` to use the generated gradient artwork instead.
 *   Always write real alt text — it is read aloud by screen readers.
 *
 * CATEGORIES
 *   Use one of the values in `categories` below so the filters keep working.
 * ========================================================================== */

export const categories = [
  'Social Media',
  'Paid Advertising',
  'Analytics',
  'Content Strategy',
  'SEO',
  'Campaign Strategy',
]

export const projects = [
  /* ==========================================================================
   * ⭐ FULLY WORKED SAMPLE CASE STUDY
   * Use this one as the model for how much detail a strong case study needs.
   * ======================================================================== */
  {
    slug: 'bloom-botanics-glow-up',
    title: 'The Glow-Up: relaunching Bloom Botanics on social',
    tagline: 'A 12-week integrated content + paid social relaunch for a DTC skincare brand.',
    category: 'Campaign Strategy',
    featured: true,
    year: '2025',

    cover: {
      image: null, // ✏️ e.g. 'images/bloom-cover.jpg'
      alt: 'Bloom Botanics campaign key visual — placeholder', // ✏️
      gradient: ['#FF3D81', '#FF7A1A'],
      label: 'Bloom Botanics',
    },

    /* --- Card + hero meta -------------------------------------------------- */
    summary:
      'Rebuilt a stalled DTC skincare brand’s social presence around three content pillars and a tightly-tested paid social engine — tripling revenue from social in one quarter.',
    client: 'Bloom Botanics (fictional sample client)',
    industry: 'DTC beauty & skincare',
    timeline: 'Jan – Mar 2025 · 12 weeks',
    role: 'Campaign lead — strategy, creative direction, paid media, reporting',
    team: 'Solo strategist working with one videographer and the founder',

    tools: ['Meta Ads Manager', 'TikTok Ads Manager', 'GA4', 'Looker Studio', 'Later', 'CapCut'],
    channels: ['Instagram', 'TikTok', 'Meta Ads', 'Email', 'Shopify'],

    /* --- Narrative sections ------------------------------------------------ */
    overview:
      'Bloom Botanics sold a well-reviewed six-product skincare line but had flatlined on social: 18 months of posting, 9K followers, and social attributed for barely 4% of revenue. They had budget for a quarter and needed proof that social could be a real acquisition channel rather than a brand-awareness hobby. I ran the relaunch end to end — audience research, content system, paid media and measurement.',

    objectives: [
      'Grow revenue attributed to social from 4% to at least 12% of total DTC revenue in 12 weeks.',
      'Bring blended cost per acquisition on paid social under $34 (their contribution-margin ceiling).',
      'Build a content system the two-person team could run without me after the engagement ended.',
      'Instrument GA4 properly so channel performance is visible without manual spreadsheet work.',
    ],

    challenge:
      'The account looked busy but was structurally broken. Content was product-shot carousels posted five times a week with no hook, no face and no reason to save or share. Paid spend was going almost entirely to a single broad-audience prospecting campaign using the same static images, so creative fatigue hit within nine days every cycle. And nothing was measurable: no UTM discipline, a mis-fired GA4 purchase event double-counting Shopify orders, and a founder reading Instagram’s in-app "accounts reached" as if it were a business metric. Before I could improve performance I had to be able to see it.',

    audience: {
      primary:
        'Women 24–38, urban Canada and US, skincare-curious but ingredient-sceptical. They read reviews, screenshot routines, and distrust "clinical" claims from small brands.',
      secondary:
        'Existing customers (roughly 3,100) who had bought once and never returned — high-intent, under-marketed.',
      insights: [
        'Comment mining across 400+ competitor posts showed the top recurring question was not "does it work" but "will it work with the rest of my routine" — a sequencing anxiety no one was answering.',
        'Their five highest-saved organic posts in 18 months were all unpolished founder-to-camera clips, not the studio product shots the budget went to.',
        'Post-purchase survey responses (n=212) named "recommended by someone real" as the top trigger — 3× ahead of any ad-led reason.',
      ],
    },

    research: [
      'Audited 18 months of organic performance and rebuilt the numbers by format rather than by date — saves and shares per format, not likes.',
      'Ran a competitive teardown of six comparable DTC skincare brands, logging hook style, posting cadence, creator use and offer structure.',
      'Mined 400+ competitor comment threads to surface the questions the category was leaving unanswered.',
      'Interviewed nine repeat customers for 20 minutes each about how they actually decide what to put on their face.',
      'Rebuilt GA4 with a corrected purchase event, channel groupings and a UTM naming convention before any new spend went live.',
    ],

    strategy: {
      headline: 'Stop selling products. Start answering the routine question.',
      body: 'The strategic bet was that Bloom Botanics could own the *sequencing* conversation — how their products fit alongside what people already used — and that founder-led, low-gloss video would outperform studio assets at a fraction of the production cost. Paid media would not try to invent demand; it would put budget behind the organic content that had already earned attention.',
      pillars: [
        {
          title: 'Routine Rx',
          body: 'Founder-to-camera clips answering one real sequencing question per video, pulled straight from comments and DMs. The volume driver — three a week.',
        },
        {
          title: 'Proof, not promises',
          body: 'Customer results, ingredient explainers and side-by-sides. Built for saves and for use as paid social proof creative.',
        },
        {
          title: 'The Bloom Edit',
          body: 'One weekly editorial piece — a personality post, a behind-the-scenes, or a point of view on a category trend. Kept the brand human rather than transactional.',
        },
      ],
    },

    process: [
      {
        phase: 'Weeks 1–2',
        title: 'Audit, instrument, decide',
        body: 'Fixed GA4 and the double-firing purchase event, set the UTM convention, built the Looker Studio dashboard, and finished the audience research. Killed the always-on broad prospecting campaign that was burning 60% of spend at a $71 CPA.',
      },
      {
        phase: 'Weeks 3–4',
        title: 'Build the content engine',
        body: 'Wrote the pillar framework, scripted the first 24 videos from mined questions, and ran a two-day shoot that banked six weeks of content. Set up the Later calendar and a one-page SOP so the team could keep publishing without me.',
      },
      {
        phase: 'Weeks 5–8',
        title: 'Test everything, scale nothing yet',
        body: 'Launched structured creative testing: 4 hooks × 3 formats at a deliberately small daily budget, one variable at a time. Retargeting split into 7-day site visitors, cart abandoners and lapsed purchasers with distinct messages rather than one blanket ad.',
      },
      {
        phase: 'Weeks 9–12',
        title: 'Scale the winners, hand over the keys',
        body: 'Shifted 70% of budget behind the three winning hook-format combinations, layered a lookalike from purchasers, and launched a lapsed-customer email + retargeting pairing. Closed with a documented playbook, the dashboard, and two training sessions.',
      },
    ],

    assets: [
      {
        title: 'Content pillar framework',
        caption: 'The three-pillar system with cadence, format and success metric for each.',
        alt: 'Placeholder for the content pillar framework diagram', // ✏️
        image: null, // ✏️ 'images/bloom-pillars.jpg'
        gradient: ['#FF3D81', '#FF9CC4'],
      },
      {
        title: 'Creative testing matrix',
        caption: '4 hooks × 3 formats, with the two combinations that beat control by >40%.',
        alt: 'Placeholder for the creative testing matrix',
        image: null,
        gradient: ['#FF7A1A', '#FFC48A'],
      },
      {
        title: 'Looker Studio dashboard',
        caption: 'Channel, campaign and creative-level view the founder still uses weekly.',
        alt: 'Placeholder for the Looker Studio performance dashboard',
        image: null,
        gradient: ['#00B37E', '#7FE3C0'],
      },
      {
        title: 'Routine Rx video series',
        caption: 'Sample frames from the founder-led sequencing series.',
        alt: 'Placeholder for video series stills',
        image: null,
        gradient: ['#FF3D81', '#00B37E'],
      },
    ],

    kpis: [
      { label: 'Share of DTC revenue from social', target: 'Target: 12%' },
      { label: 'Blended paid social CPA', target: 'Target: under $34' },
      { label: 'Return on ad spend', target: 'Target: 2.5×' },
      { label: 'Saves per 1,000 reach', target: 'Target: +50%' },
      { label: 'Repeat purchase rate', target: 'Target: +3 pts' },
    ],

    results: [
      { value: '14.8%', label: 'of DTC revenue from social', detail: 'Up from 4.1% at kickoff — target was 12%.' },
      { value: '$28.40', label: 'blended paid social CPA', detail: 'Down from $71 on the retired broad campaign.' },
      { value: '3.4×', label: 'return on ad spend', detail: 'Against a 2.5× target, on 38% more spend.' },
      { value: '+212%', label: 'saves per 1,000 reach', detail: 'Founder-led video outperformed studio assets on every engagement metric.' },
      { value: '+5.2 pts', label: 'repeat purchase rate', detail: 'Driven mostly by the lapsed-customer email + retargeting pairing.' },
      { value: '9 → 21', label: 'days of creative lifespan', detail: 'Testing cadence more than doubled how long a winning ad stayed efficient.' },
    ],

    resultsNarrative:
      'The headline number is the revenue share, but the more useful outcome was structural. By week 12 the team was publishing nine pieces a week on their own, the dashboard answered the founder’s questions without a meeting, and every ad in the account had earned its place through a test rather than a hunch. Spend went up 38% over the quarter and efficiency improved anyway, which is the combination that justifies a bigger budget next quarter.',

    learnings: [
      'Fixing measurement first felt slow and was the highest-leverage two weeks of the project — the $71 CPA everyone was worried about was partly a tracking artefact.',
      'Production value was negatively correlated with performance here. The most expensive assets we made were the worst performers, consistently.',
      'One variable per test is painful when a client wants results in week three, but the alternative is a quarter of data you cannot learn from.',
      'The lapsed-customer segment was the cheapest revenue in the account and had never been marketed to. Always audit the list before buying new audiences.',
    ],

    recommendations: [
      'Move to a 60/25/15 budget split — prospecting / retargeting / creator partnerships — and give the creator line a real test in Q2.',
      'Build a proper post-purchase email flow; the retargeting is currently doing work email should be doing more cheaply.',
      'Introduce a monthly creative refresh sprint so the testing cadence outlives the engagement.',
      'Add a lightweight brand-lift survey — with social now at 15% of revenue, last-click will start to understate it.',
    ],

    testimonial: {
      quote:
        'We had been posting into a void for a year and a half. Within a month we could finally see which things worked and why — and the videos we were embarrassed to post turned out to be the ones that sold.',
      author: 'Fictional Founder', // ✏️ replace with a real quote or delete this block
      role: 'Founder, Bloom Botanics',
    },
  },

  /* ==========================================================================
   * Additional sample projects — lighter detail, same structure.
   * Replace or delete. Fill out the deeper fields as you write each case study.
   * ======================================================================== */
  {
    slug: 'northline-travel-paid-search',
    title: 'Northline Travel: rebuilding paid search around margin',
    tagline: 'Restructuring a travel agency’s Google Ads account to bid on profit, not bookings.',
    category: 'Paid Advertising',
    featured: true,
    year: '2025',
    cover: {
      image: null,
      alt: 'Northline Travel paid search campaign visual — placeholder',
      gradient: ['#FF7A1A', '#00B37E'],
      label: 'Northline',
    },
    summary:
      'A Google Ads rebuild that cut wasted spend on low-margin routes and lifted qualified enquiries 64% on a flat budget.',
    client: 'Northline Travel (fictional sample client)',
    industry: 'Travel & tourism',
    timeline: 'Apr – Jun 2025 · 10 weeks',
    role: 'Paid search strategist',
    team: 'Worked with one in-house marketing coordinator',
    tools: ['Google Ads', 'GA4', 'Google Tag Manager', 'Looker Studio'],
    channels: ['Google Search', 'Performance Max', 'Landing pages'],
    overview:
      '✏️ Write the two- to four-sentence overview here: what the business sold, what state the account was in, and what you were brought in to do.',
    objectives: [
      '✏️ Objective one — make it specific and measurable.',
      '✏️ Objective two.',
      '✏️ Objective three.',
    ],
    challenge:
      '✏️ Describe the real problem. What was broken, and why did the obvious fix not work?',
    audience: {
      primary: '✏️ Who you were trying to reach and what they care about.',
      secondary: '✏️ Any secondary segment.',
      insights: ['✏️ An insight from research that changed the plan.'],
    },
    research: ['✏️ What you looked at before deciding anything.'],
    strategy: {
      headline: '✏️ The strategic idea in one line.',
      body: '✏️ Why that idea, in a short paragraph.',
      pillars: [
        { title: '✏️ Pillar one', body: '✏️ What it covers.' },
        { title: '✏️ Pillar two', body: '✏️ What it covers.' },
      ],
    },
    process: [
      { phase: 'Phase 1', title: '✏️ What happened first', body: '✏️ Detail.' },
      { phase: 'Phase 2', title: '✏️ Then this', body: '✏️ Detail.' },
    ],
    assets: [
      {
        title: '✏️ Asset name',
        caption: '✏️ What the reader is looking at.',
        alt: '✏️ Alt text',
        image: null,
        gradient: ['#FF7A1A', '#FFC48A'],
      },
    ],
    kpis: [
      { label: 'Qualified enquiries', target: 'Target: +40%' },
      { label: 'Cost per qualified enquiry', target: 'Target: under $52' },
    ],
    results: [
      { value: '+64%', label: 'qualified enquiries', detail: 'On an unchanged monthly budget.' },
      { value: '−31%', label: 'cost per qualified enquiry', detail: 'After removing low-margin route terms.' },
      { value: '4.1×', label: 'return on ad spend', detail: 'Measured on booked margin, not booking value.' },
    ],
    resultsNarrative: '✏️ A paragraph putting the numbers in context.',
    learnings: ['✏️ What you would tell someone starting the same project.'],
    recommendations: ['✏️ What should happen next.'],
    testimonial: null,
  },

  {
    slug: 'ga4-merch-store-analysis',
    title: 'GA4 deep-dive: where the Merch Store loses its buyers',
    tagline: 'A funnel and channel analysis of the Google Merchandise Store demo dataset.',
    category: 'Analytics',
    featured: true,
    year: '2026',
    cover: {
      image: null,
      alt: 'GA4 analysis dashboard visual — placeholder',
      gradient: ['#00B37E', '#0EA5E9'],
      label: 'GA4 Study',
    },
    summary:
      'A self-directed analytics case study using the public GA4 demo account to find and quantify the biggest drop-off in an ecommerce funnel.',
    client: 'Self-directed portfolio project',
    industry: 'Ecommerce / analytics',
    timeline: '2026 · 3 weeks',
    role: 'Analyst — exploration, modelling, reporting',
    team: 'Solo',
    tools: ['GA4', 'BigQuery', 'Looker Studio', 'Python / pandas'],
    channels: ['Organic Search', 'Paid Search', 'Direct', 'Referral'],
    overview: '✏️ Write the overview.',
    objectives: ['✏️ Objective one.', '✏️ Objective two.'],
    challenge: '✏️ Describe the analytical question and why it was non-obvious.',
    audience: { primary: '✏️ Who the findings were for.', secondary: '', insights: [] },
    research: ['✏️ Your method.'],
    strategy: { headline: '✏️ Your analytical approach in one line.', body: '✏️ Detail.', pillars: [] },
    process: [{ phase: 'Step 1', title: '✏️ Title', body: '✏️ Detail.' }],
    assets: [
      {
        title: '✏️ Funnel visualisation',
        caption: '✏️ Caption.',
        alt: '✏️ Alt text',
        image: null,
        gradient: ['#00B37E', '#7FE3C0'],
      },
    ],
    kpis: [{ label: 'Checkout completion rate', target: 'Benchmark against category' }],
    results: [
      { value: '38%', label: 'drop-off at shipping step', detail: 'The single largest leak in the funnel.' },
      { value: '2.4×', label: 'higher conversion from returning users', detail: 'Undervalued by last-click reporting.' },
    ],
    resultsNarrative: '✏️ What the analysis concluded.',
    learnings: ['✏️ What you learned.'],
    recommendations: ['✏️ What you would recommend.'],
    testimonial: null,
  },

  {
    slug: 'atlas-consultancy-telegram-funnel',
    title: 'Turning a Telegram channel into a consultation funnel',
    tagline: 'Content restructuring and conversion tracking for an immigration consultancy.',
    category: 'Content Strategy',
    featured: false,
    year: '2024',
    cover: {
      image: null,
      alt: 'Telegram funnel project visual — placeholder',
      gradient: ['#FF3D81', '#8B5CF6'],
      label: 'Atlas',
    },
    summary:
      'Rebuilt a 40K-member Telegram channel around a funnel model and instrumented the path from post to booked consultation.',
    client: 'Atlas Consultancy (fictional sample client)',
    industry: 'Professional services',
    timeline: '2024 · 6 months',
    role: 'Content & channel strategist',
    team: 'Worked with two consultants and a designer',
    tools: ['Telegram Analytics', 'GA4', 'Notion', 'Canva'],
    channels: ['Telegram', 'Instagram', 'Website'],
    overview: '✏️ Write the overview.',
    objectives: ['✏️ Objective one.'],
    challenge: '✏️ Describe the challenge.',
    audience: { primary: '✏️ Audience.', secondary: '', insights: [] },
    research: ['✏️ Research step.'],
    strategy: { headline: '✏️ Strategy line.', body: '✏️ Detail.', pillars: [] },
    process: [{ phase: 'Phase 1', title: '✏️ Title', body: '✏️ Detail.' }],
    assets: [],
    kpis: [{ label: 'Post-to-consultation conversion', target: 'Establish a baseline' }],
    results: [
      { value: '+48%', label: 'consultation bookings', detail: 'Over the six-month period.' },
      { value: '2.1%', label: 'post-to-enquiry rate', detail: 'Previously untracked.' },
    ],
    resultsNarrative: '✏️ Context for the numbers.',
    learnings: ['✏️ Learning.'],
    recommendations: ['✏️ Recommendation.'],
    testimonial: null,
  },

  {
    slug: 'hyfve-ugc-engine',
    title: 'Building a UGC engine for a fast-fashion catalogue',
    tagline: 'Creator seeding and always-on social for a US apparel brand.',
    category: 'Social Media',
    featured: false,
    year: '2023',
    cover: {
      image: null,
      alt: 'UGC campaign visual — placeholder',
      gradient: ['#FF7A1A', '#FF3D81'],
      label: 'Apparel',
    },
    summary:
      'A repeatable creator-seeding and UGC collection system that kept a 400-SKU catalogue in fresh social content every week.',
    client: 'Fashion brand (fictional sample client)',
    industry: 'Apparel & retail',
    timeline: '2023 · 9 months',
    role: 'Social media specialist',
    team: 'Part of a three-person marketing team',
    tools: ['Meta Business Suite', 'Later', 'Canva', 'CapCut'],
    channels: ['Instagram', 'TikTok', 'Pinterest'],
    overview: '✏️ Write the overview.',
    objectives: ['✏️ Objective one.'],
    challenge: '✏️ Describe the challenge.',
    audience: { primary: '✏️ Audience.', secondary: '', insights: [] },
    research: ['✏️ Research step.'],
    strategy: { headline: '✏️ Strategy line.', body: '✏️ Detail.', pillars: [] },
    process: [{ phase: 'Phase 1', title: '✏️ Title', body: '✏️ Detail.' }],
    assets: [],
    kpis: [{ label: 'Weekly UGC assets collected', target: 'Target: 25/week' }],
    results: [
      { value: '+310%', label: 'monthly UGC assets', detail: 'From ad-hoc reposting to a managed pipeline.' },
      { value: '+87%', label: 'engagement rate', detail: 'Creator content vs. studio content.' },
    ],
    resultsNarrative: '✏️ Context.',
    learnings: ['✏️ Learning.'],
    recommendations: ['✏️ Recommendation.'],
    testimonial: null,
  },

  {
    slug: 'verdant-seo-content-hub',
    title: 'A content hub that ranks: Verdant’s organic rebuild',
    tagline: 'Topic clustering and on-page SEO for a sustainability B2B brand.',
    category: 'SEO',
    featured: false,
    year: '2024',
    cover: {
      image: null,
      alt: 'SEO content hub visual — placeholder',
      gradient: ['#00B37E', '#A3E635'],
      label: 'Verdant',
    },
    summary:
      'Replaced a scattered blog with eight topic clusters mapped to real search demand, lifting non-branded organic sessions 2.3×.',
    client: 'Verdant (fictional sample client)',
    industry: 'B2B sustainability',
    timeline: '2024 · 5 months',
    role: 'SEO & content strategist',
    team: 'Worked with two freelance writers',
    tools: ['Semrush', 'Google Search Console', 'GA4', 'WordPress'],
    channels: ['Organic search', 'LinkedIn', 'Newsletter'],
    overview: '✏️ Write the overview.',
    objectives: ['✏️ Objective one.'],
    challenge: '✏️ Describe the challenge.',
    audience: { primary: '✏️ Audience.', secondary: '', insights: [] },
    research: ['✏️ Research step.'],
    strategy: { headline: '✏️ Strategy line.', body: '✏️ Detail.', pillars: [] },
    process: [{ phase: 'Phase 1', title: '✏️ Title', body: '✏️ Detail.' }],
    assets: [],
    kpis: [{ label: 'Non-branded organic sessions', target: 'Target: 2×' }],
    results: [
      { value: '2.3×', label: 'non-branded organic sessions', detail: 'Over five months.' },
      { value: '31', label: 'first-page keywords', detail: 'Up from 6 at the start.' },
    ],
    resultsNarrative: '✏️ Context.',
    learnings: ['✏️ Learning.'],
    recommendations: ['✏️ Recommendation.'],
    testimonial: null,
  },
]

/* ============================================================================
 * 📋 PROJECT_TEMPLATE — copy this whole object into the `projects` array above
 *    and fill it in to add a new project. Delete any field you do not need.
 * ========================================================================== */
export const PROJECT_TEMPLATE = {
  slug: 'my-new-project', // URL-safe, unique → /projects/my-new-project
  title: 'Project title',
  tagline: 'One line describing the project.',
  category: 'Social Media', // must match a value in `categories`
  featured: false, // true → also shows on the home page
  year: '2026',
  cover: {
    image: null, // 'images/your-file.jpg' (file lives in public/images/)
    alt: 'Describe the cover image for screen readers',
    gradient: ['#FF3D81', '#FF7A1A'], // fallback artwork colours
    label: 'Client', // short label drawn on the fallback artwork
  },
  summary: 'Two-line summary shown on the project card.',
  client: 'Client or brand name',
  industry: 'Industry',
  timeline: 'Month – Month Year · duration',
  role: 'Your role and responsibilities',
  team: 'Who you worked with',
  tools: ['Tool one', 'Tool two'],
  channels: ['Channel one', 'Channel two'],
  overview: 'Two to four sentences of project overview.',
  objectives: ['Objective one', 'Objective two'],
  challenge: 'The problem you were solving.',
  audience: {
    primary: 'Primary audience description.',
    secondary: 'Secondary audience description.',
    insights: ['An insight from research.'],
  },
  research: ['What research you did.'],
  strategy: {
    headline: 'The strategic idea in one line.',
    body: 'Why that idea.',
    pillars: [{ title: 'Pillar', body: 'What it covers.' }],
  },
  process: [{ phase: 'Phase 1', title: 'Step title', body: 'What you did.' }],
  assets: [
    {
      title: 'Asset name',
      caption: 'What it shows.',
      alt: 'Alt text',
      image: null,
      gradient: ['#FF3D81', '#FF9CC4'],
    },
  ],
  kpis: [{ label: 'Metric name', target: 'Target: value' }],
  results: [{ value: '+00%', label: 'metric', detail: 'Context for the number.' }],
  resultsNarrative: 'A paragraph putting the results in context.',
  learnings: ['What you learned.'],
  recommendations: ['What should happen next.'],
  testimonial: null, // or { quote: '', author: '', role: '' }
}

/* --- Helpers used by the pages (no need to edit) -------------------------- */
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)

export const getFeaturedProjects = () => projects.filter((p) => p.featured)

export const getAdjacentProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug)
  if (i === -1) return null
  return projects[(i + 1) % projects.length]
}

export default projects
