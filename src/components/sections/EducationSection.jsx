import { certifications, education } from '../../data/about'
import Icon from '../Icon'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

const badgeClass = {
  Certified: 'badge--done',
  'In progress': 'badge--wip',
  Planned: 'badge--plan',
}

/** Education + certifications. Content comes from src/data/about.js. */
export default function EducationSection({ id = 'education', tint = false }) {
  return (
    <section
      className={`section ${tint ? 'section--tint' : ''}`}
      id={id}
      aria-labelledby="education-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Education & credentials"
          title="Where the theory comes from"
          description="Formal study on one side, platform certifications on the other. Both get used."
          id="education-title"
          accent="orange"
        />

        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="grid" style={{ gap: '1rem' }}>
            {education.map((e, i) => (
              <Reveal key={e.credential} delay={i * 80}>
                <article className="card card--hover edu-card">
                  <span className="chip chip--accent accent-green" style={{ width: 'fit-content' }}>
                    {e.period}
                  </span>
                  <h3 className="edu-card__cred">{e.credential}</h3>
                  <p className="edu-card__inst">{e.institution}</p>
                  <p className="muted" style={{ fontSize: '0.95rem' }}>
                    {e.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <h3 className="tool-group__title">Certifications</h3>
            <ul className="cert-list">
              {certifications.map((c) => (
                <li key={c.name} className="cert">
                  <span className="cert__name">
                    {c.name}
                    <br />
                    <span className="cert__issuer">
                      {c.issuer} · {c.year}
                    </span>
                  </span>
                  <span className={`badge ${badgeClass[c.status] || 'badge--plan'}`}>
                    {c.status}
                  </span>
                  {c.url && c.url !== '#' && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View the ${c.name} credential (opens in a new tab)`}
                    >
                      <Icon name="external" size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
