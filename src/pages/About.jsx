import { Link } from 'react-router-dom'

import Artwork from '../components/Artwork'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import ContactSection from '../components/sections/ContactSection'
import EducationSection from '../components/sections/EducationSection'
import ToolsSection from '../components/sections/ToolsSection'

import { bio, specializations, strengths, timeline } from '../data/about'
import { skillGroups } from '../data/skills'
import { site } from '../data/site'
import { asset } from '../utils/paths'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description={`${site.name} — ${site.headline}. Professional background, career timeline, education, certifications and specializations.`}
        path="about"
      />

      {/* ───────────────────────── INTRO ───────────────────────── */}
      <section className="section" aria-labelledby="about-hero">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4.5rem)', alignItems: 'center' }}>
            <div>
              <p className="eyebrow">About</p>
              <h1 id="about-hero" style={{ marginTop: '0.9rem' }}>
                I make marketing that can <span className="mark">prove</span> itself.
              </h1>
              <div style={{ marginTop: '1.75rem', display: 'grid', gap: '1.1rem' }}>
                {bio.map((para, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <p className="lead">{para}</p>
                  </Reveal>
                ))}
              </div>

              <div className="hero__actions">
                <a className="btn btn--primary" href={asset(site.resume)} download>
                  Download résumé
                  <Icon name="download" size={17} />
                </a>
                <Link className="btn btn--ghost" to="/projects">
                  See the work
                  <Icon name="arrow" size={17} className="btn__arrow" />
                </Link>
              </div>
            </div>

            <Reveal delay={120}>
              <div className="portrait-wrap">
                <span className="portrait__frame" aria-hidden="true" />
                <div className="portrait">
                  {site.photo ? (
                    <img src={asset(site.photo)} alt={site.photoAlt} width="840" height="1050" />
                  ) : (
                    <Artwork
                      gradient={['#00B37E', '#FF7A1A']}
                      label="Your photo here"
                      alt="Placeholder for a professional profile photo"
                      note="Add photo"
                    />
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────── TIMELINE ──────────────────────── */}
      <section className="section section--tint" id="journey" aria-labelledby="journey-title">
        <div className="container">
          <SectionHeading
            eyebrow="Career journey"
            title="How I got here"
            description="Five roles, four industries, one throughline — making content and spend accountable to a number."
            id="journey-title"
          />

          <ol className="timeline">
            {timeline.map((t, i) => (
              <Reveal as="li" key={`${t.org}-${t.period}`} className="timeline__item" delay={i * 60}>
                <div className="timeline__period">
                  {t.current && <span className="timeline__now" aria-hidden="true" />}
                  <span>
                    {t.period}
                    {t.current && <span className="sr-only"> (current role)</span>}
                  </span>
                </div>
                <div>
                  <h3>{t.role}</h3>
                  <p className="timeline__org">
                    {t.org}
                    {t.location && <span className="muted"> · {t.location}</span>}
                  </p>
                  <ul className="timeline__points">
                    {t.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ──────────────────── SPECIALIZATIONS ──────────────────── */}
      <section className="section" id="specializations" aria-labelledby="spec-title">
        <div className="container">
          <SectionHeading
            eyebrow="Specializations"
            title="What I go deep on"
            description="The disciplines I am hired for, and the sub-skills inside each."
            id="spec-title"
            accent="green"
          />

          <Reveal>
            <ul className="chip-row" style={{ marginBottom: '2.5rem' }}>
              {specializations.map((s) => (
                <li key={s}>
                  <span className="chip chip--accent accent-pink">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid grid-2">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 70} className={`accent-${g.accent}`}>
                <article className="card card--hover" style={{ height: '100%' }}>
                  <h3 className="tool-group__title">{g.title}</h3>
                  <ul className="chip-row">
                    {g.items.map((item) => (
                      <li key={item}>
                        <span className="chip chip--accent">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────── STRENGTHS ───────────────────────── */}
      <section className="section section--tint" aria-labelledby="strengths-title">
        <div className="container">
          <SectionHeading
            eyebrow="Professional strengths"
            title="How I work"
            id="strengths-title"
            accent="orange"
          />
          <div className="grid grid-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <article className="card card--hover" style={{ height: '100%' }}>
                  <h3 style={{ fontSize: '1.1rem' }}>{s.title}</h3>
                  <p className="muted" style={{ marginTop: '0.5rem' }}>
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EducationSection />
      <ToolsSection tint />
      <ContactSection />
    </>
  )
}
