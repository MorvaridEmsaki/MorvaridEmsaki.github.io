/**
 * Marquee — the scrolling specialization ticker.
 * The item list is duplicated so the loop is seamless; the duplicate is hidden
 * from assistive tech so screen readers don't hear everything twice.
 * Pauses on hover, and stops entirely under prefers-reduced-motion (see CSS).
 */
export default function Marquee({ items = [] }) {
  const row = (ariaHidden) => (
    <div className="marquee__item" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span key={`${item}-${i}`}>
          {item}
          <span className="marquee__sep" aria-hidden="true">
            {' '}
            ✦{' '}
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee">
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
