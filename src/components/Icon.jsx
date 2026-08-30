/**
 * Icon.jsx — one small inline-SVG icon set.
 * Inline SVG keeps the site dependency-free and lets icons inherit text colour.
 * Add a new icon by adding a key to `paths` and using <Icon name="yourkey" />.
 */

const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  download: <path d="M12 3v12M7 11l5 5 5-5M4 21h16" />,
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l2 5-2.5 1.5a12 12 0 005.5 5.5L16 12.5l5 2v3a2 2 0 01-2.2 2A17 17 0 014.5 5.2 2 2 0 016.5 3z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  spark: <path d="M12 2l2.2 6.2L20.5 10l-6.3 1.8L12 18l-2.2-6.2L3.5 10l6.3-1.8L12 2z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  pen: <path d="M4 20l4-1 10-10-3-3L5 16l-1 4zM14.5 5.5l3 3" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </>
  ),
  flag: <path d="M5 21V4m0 0h11l-2 4 2 4H5" />,
  quote: <path d="M9 7H5v6h4v-2c0 2-1 3-3 3v2c3 0 5-2 5-5V7zm10 0h-4v6h4v-2c0 2-1 3-3 3v2c3 0 5-2 5-5V7z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v7M7.5 7v.01M11.5 17v-4a2.5 2.5 0 015 0v4" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.01" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6.3 2.8 5.3 3.1 5.3 3.1a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 003.9 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  behance: <path d="M2 6h6a3 3 0 010 6H2V6zm0 6h6.5a3 3 0 010 6H2v-6zM14 13h8a4 4 0 00-8 0 4 4 0 008 1M15 7h6" />,
  x: <path d="M4 4l16 16M20 4L4 20" />,
  external: <path d="M14 4h6v6M20 4l-8 8M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />,
}

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '', ...rest }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {content}
    </svg>
  )
}
