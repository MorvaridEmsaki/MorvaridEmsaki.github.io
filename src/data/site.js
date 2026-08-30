/* ============================================================================
 * site.js — YOUR IDENTITY, CONTACT DETAILS AND SOCIAL LINKS
 * ----------------------------------------------------------------------------
 * ✏️  This is the first file to edit. Everything here appears in the hero,
 *     the footer, the contact section and the SEO tags.
 *     Look for the ✏️ markers — those are the lines meant for you.
 * ========================================================================== */

export const site = {
  /* --- Identity ---------------------------------------------------------- */
  name: 'Morvarid', // ✏️ your full name
  initials: 'M', // ✏️ used in the logo mark
  headline: 'Digital Marketing & Social Media Strategist', // ✏️ your professional headline
  // ✏️ Short rotating words used in the animated hero line
  rotatingWords: ['social strategy', 'paid media', 'content systems', 'growth analytics'],

  // ✏️ 2–3 sentence professional introduction (hero)
  intro:
    'I build social and performance marketing programs that people actually stop for — strategy, content systems and paid media, all wired to analytics that prove what worked. Six-plus years across fashion, travel, tech and non-profit brands, now based in Ottawa.',

  location: 'Ottawa, Canada', // ✏️
  availability: 'Open to new opportunities', // ✏️ or 'Currently at <Company>'

  /* --- Profile photo ------------------------------------------------------
   * Drop your photo at  public/images/profile.jpg  and set:
   *   photo: 'images/profile.jpg'
   * Leave it as null to show the generated gradient portrait placeholder.
   * ---------------------------------------------------------------------- */
  photo: 'images/profile.jpg', // ✏️ e.g. 'images/profile.jpg'
  photoAlt: 'Morvarid, digital marketing and social media strategist', // ✏️ alt text

  /* --- Résumé -------------------------------------------------------------
   * Replace public/resume/resume.pdf with your real PDF (keep the filename).
   * ---------------------------------------------------------------------- */
  resume: 'resume/resume.pdf',

  /* --- Contact ------------------------------------------------------------
   * The contact form is a mailto: form by default — no backend needed and it
   * works on GitHub Pages. To use a hosted form service instead, see
   * FORM_ENDPOINT below and the README section "Switching to a real form".
   * ---------------------------------------------------------------------- */
  email: 'hello@example.com', // ✏️ your real email address
  phone: '', // ✏️ optional, e.g. '+1 (613) 555-0134' — leave '' to hide

  // ✏️ Optional: paste a Formspree / Getform / Basin endpoint here to switch
  //    the contact form from mailto: to a real async form submission.
  //    Example: 'https://formspree.io/f/xxxxxxx'   Leave '' to use mailto:.
  FORM_ENDPOINT: '',

  /* --- Social links -------------------------------------------------------
   * Delete any you do not use — the UI adapts automatically.
   * ---------------------------------------------------------------------- */
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR-HANDLE', icon: 'linkedin' }, // ✏️
    { label: 'Instagram', url: 'https://instagram.com/YOUR-HANDLE', icon: 'instagram' }, // ✏️
    { label: 'GitHub', url: 'https://github.com/YOUR-HANDLE', icon: 'github' }, // ✏️
    { label: 'Behance', url: 'https://behance.net/YOUR-HANDLE', icon: 'behance' }, // ✏️
  ],

  /* --- Headline stats (hero strip) ---------------------------------------- */
  stats: [
    { value: '6+', label: 'Years in digital marketing' }, // ✏️
    { value: '30+', label: 'Campaigns shipped' }, // ✏️
    { value: '4', label: 'Industries served' }, // ✏️
    { value: '12M+', label: 'Organic impressions driven' }, // ✏️
  ],

  /* --- Footer ------------------------------------------------------------- */
  footerNote: 'Built with React + Vite. Hosted on GitHub Pages.', // ✏️
}

/* Navigation — add or remove entries and the menu updates everywhere. */
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/#contact' },
]

export default site
