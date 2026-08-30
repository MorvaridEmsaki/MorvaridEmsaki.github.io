import { services } from '../../data/skills'
import Icon from '../Icon'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

/** Skills / services grid. Content comes from src/data/skills.js. */
export default function Services({ id = 'skills' }) {
  return (
    <section className="section" id={id} aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="What I do"
          title="Six things I get hired for"
          description="Strategy, creative and measurement are one job, not three. Here is how that splits up in practice."
          id="skills-title"
        />

        <div className="grid grid-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className={`card card--hover service-card accent-${s.accent}`}>
                <span className="service-card__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
