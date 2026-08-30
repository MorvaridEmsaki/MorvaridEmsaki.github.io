import Reveal from './Reveal'

/**
 * SectionHeading — eyebrow + title + optional description, with an optional
 * action slot on the right (used for "View all projects" style links).
 */
export default function SectionHeading({ eyebrow, title, description, action, id, accent }) {
  return (
    <Reveal className={`section-head ${accent ? `accent-${accent}` : ''}`}>
      <div className="section-head__text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && <div>{action}</div>}
    </Reveal>
  )
}
