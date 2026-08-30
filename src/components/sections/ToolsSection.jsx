import toolCategories from '../../data/tools'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

/** Initials badge, e.g. "Google Analytics 4" → "GA" */
function initials(name) {
  const words = name.replace(/[^\w\s/]/g, '').split(/[\s/]+/).filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

/** Tools & platforms. Content comes from src/data/tools.js. */
export default function ToolsSection({ id = 'tools', tint = true }) {
  return (
    <section
      className={`section ${tint ? 'section--tint' : ''}`}
      id={id}
      aria-labelledby="tools-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="My stack"
          title="Tools I actually use"
          description="Not a logo wall — these are the platforms I work in weekly, grouped by what I use them for."
          id="tools-title"
          accent="green"
        />

        <div className="grid grid-2">
          {toolCategories.map((group, i) => (
            <Reveal key={group.category} delay={i * 60} className={`accent-${group.accent}`}>
              <div className="tool-group">
                <h3 className="tool-group__title">{group.category}</h3>
                <ul className="chip-row">
                  {group.tools.map((t) => (
                    <li key={t.name}>
                      <span className="tool">
                        <span className="tool__mark" aria-hidden="true">
                          {initials(t.name)}
                        </span>
                        {t.name}
                        {t.level && <span className="tool__level">{t.level}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
