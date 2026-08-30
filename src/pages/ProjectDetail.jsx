import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Artwork from '../components/Artwork'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import NotFound from './NotFound'

import { getAdjacentProject, getProjectBySlug } from '../data/projects'

/* Small helper so a section only renders when there is content for it. */
const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v))

function Section({ id, title, children, accent }) {
  return (
    <Reveal as="section" id={id} className={`cs-section ${accent ? `accent-${accent}` : ''}`}>
      <h2>{title}</h2>
      {children}
    </Reveal>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const next = getAdjacentProject(slug)
  const [activeId, setActiveId] = useState('')

  /* Build the table of contents from whichever sections have content */
  const toc = useMemo(() => {
    if (!project) return []
    return [
      has(project.overview) && { id: 'overview', label: 'Overview' },
      has(project.objectives) && { id: 'objectives', label: 'Objectives' },
      has(project.challenge) && { id: 'challenge', label: 'The challenge' },
      has(project.audience?.primary) && { id: 'audience', label: 'Audience' },
      has(project.research) && { id: 'research', label: 'Research & insights' },
      has(project.strategy?.headline) && { id: 'strategy', label: 'Strategy' },
      has(project.process) && { id: 'process', label: 'Implementation' },
      (has(project.channels) || has(project.tools)) && { id: 'channels', label: 'Channels & tools' },
      has(project.assets) && { id: 'assets', label: 'Creative assets' },
      has(project.kpis) && { id: 'kpis', label: 'KPIs' },
      has(project.results) && { id: 'results', label: 'Results' },
      has(project.learnings) && { id: 'learnings', label: 'Key learnings' },
      has(project.recommendations) && { id: 'recommendations', label: 'Recommendations' },
    ].filter(Boolean)
  }, [project])

  /* Highlight the section currently in view inside the sticky TOC */
  useEffect(() => {
    if (!toc.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )
    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [toc])

  if (!project) return <NotFound />

  const meta = [
    ['Client / brand', project.client],
    ['Industry', project.industry],
    ['Timeline', project.timeline],
    ['My role', project.role],
    ['Team', project.team],
    ['Category', project.category],
  ].filter(([, v]) => has(v))

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        path={`projects/${project.slug}`}
      />

      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="cs-hero">
        <div className="container">
          <Link className="link-under" to="/projects">
            ← All projects
          </Link>

          <div style={{ maxWidth: '30ch', marginTop: '1.5rem' }}>
            <span className="chip chip--accent accent-pink">{project.category}</span>
          </div>

          <h1 style={{ marginTop: '1rem', maxWidth: '18ch' }}>{project.title}</h1>
          <p className="lead" style={{ marginTop: '1.1rem', maxWidth: '62ch' }}>
            {project.tagline}
          </p>

          <div className="cs-hero__media">
            <Artwork
              image={project.cover?.image}
              alt={project.cover?.alt || `${project.title} hero image`}
              gradient={project.cover?.gradient}
              label={project.cover?.label}
            />
          </div>
        </div>
      </section>

      {/* ────────────────────── META BAR ───────────────────── */}
      <div className="container">
        <dl className="cs-meta">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="cs-meta__k">{k}</dt>
              <dd className="cs-meta__v">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ──────────────────── BODY + TOC ───────────────────── */}
      <div className="container section">
        <div className="cs-body">
          <nav className="cs-toc" aria-label="Case study sections">
            <p className="cs-toc__title">On this page</p>
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className={activeId === t.id ? 'is-active' : ''}
                aria-current={activeId === t.id ? 'true' : undefined}
              >
                {t.label}
              </a>
            ))}
          </nav>

          <div>
            {has(project.overview) && (
              <Section id="overview" title="Project overview">
                <p>{project.overview}</p>
              </Section>
            )}

            {has(project.objectives) && (
              <Section id="objectives" title="Objectives" accent="green">
                <ul className="tick-list">
                  {project.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </Section>
            )}

            {has(project.challenge) && (
              <Section id="challenge" title="The problem">
                <p>{project.challenge}</p>
              </Section>
            )}

            {has(project.audience?.primary) && (
              <Section id="audience" title="Target audience" accent="orange">
                <h3>Primary</h3>
                <p>{project.audience.primary}</p>
                {has(project.audience.secondary) && (
                  <>
                    <h3 style={{ marginTop: '1.5rem' }}>Secondary</h3>
                    <p>{project.audience.secondary}</p>
                  </>
                )}
                {has(project.audience.insights) && (
                  <>
                    <h3 style={{ marginTop: '1.75rem' }}>What the research told us</h3>
                    <ul className="tick-list" style={{ marginTop: '0.75rem' }}>
                      {project.audience.insights.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </>
                )}
              </Section>
            )}

            {has(project.research) && (
              <Section id="research" title="Research & insights" accent="green">
                <ol className="num-list">
                  {project.research.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
              </Section>
            )}

            {has(project.strategy?.headline) && (
              <Section id="strategy" title="Strategy & approach">
                <h3 style={{ fontSize: 'var(--fs-h3)', marginBottom: '0.75rem' }}>
                  {project.strategy.headline}
                </h3>
                {has(project.strategy.body) && <p>{project.strategy.body}</p>}
                {has(project.strategy.pillars) && (
                  <div className="pillar-grid">
                    {project.strategy.pillars.map((p, i) => (
                      <article
                        key={p.title}
                        className={`card ${['accent-pink', 'accent-orange', 'accent-green'][i % 3]}`}
                        style={{ padding: '1.4rem' }}
                      >
                        <span className="chip chip--accent" style={{ marginBottom: '0.6rem' }}>
                          Pillar {i + 1}
                        </span>
                        <h3 style={{ fontSize: '1.05rem' }}>{p.title}</h3>
                        <p className="muted" style={{ marginTop: '0.4rem', fontSize: '0.94rem' }}>
                          {p.body}
                        </p>
                      </article>
                    ))}
                  </div>
                )}
              </Section>
            )}

            {has(project.process) && (
              <Section id="process" title="Implementation" accent="orange">
                {project.process.map((p) => (
                  <div className="phase" key={p.phase + p.title}>
                    <div className="phase__label">{p.phase}</div>
                    <div>
                      <h3>{p.title}</h3>
                      <p style={{ marginTop: '0.4rem' }}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </Section>
            )}

            {(has(project.channels) || has(project.tools)) && (
              <Section id="channels" title="Channels & tools" accent="green">
                {has(project.channels) && (
                  <>
                    <h3>Channels</h3>
                    <ul className="chip-row" style={{ margin: '0.75rem 0 1.75rem' }}>
                      {project.channels.map((c) => (
                        <li key={c}>
                          <span className="chip chip--accent accent-orange">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {has(project.tools) && (
                  <>
                    <h3>Tools</h3>
                    <ul className="chip-row" style={{ marginTop: '0.75rem' }}>
                      {project.tools.map((t) => (
                        <li key={t}>
                          <span className="chip">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Section>
            )}

            {has(project.assets) && (
              <Section id="assets" title="Creative assets">
                <p style={{ marginBottom: '1.5rem' }}>
                  Screenshots, frameworks and campaign creative from the project.
                </p>
                <div className="asset-grid">
                  {project.assets.map((a) => (
                    <figure className="asset" key={a.title}>
                      <div className="asset__media">
                        <Artwork
                          image={a.image}
                          alt={a.alt || a.title}
                          gradient={a.gradient}
                          label={a.title}
                          note="Add image"
                        />
                      </div>
                      <figcaption className="asset__cap">
                        <strong>{a.title}</strong>
                        <span>{a.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </Section>
            )}

            {has(project.kpis) && (
              <Section id="kpis" title="Key performance indicators" accent="green">
                <p style={{ marginBottom: '1.5rem' }}>
                  Agreed before launch, so success was defined up front rather than reverse-engineered.
                </p>
                <div className="kpi-grid">
                  {project.kpis.map((k) => (
                    <div className="kpi" key={k.label}>
                      <p className="kpi__label">{k.label}</p>
                      <p className="kpi__target">{k.target}</p>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {has(project.results) && (
              <Section id="results" title="Results & outcomes">
                <div className="result-grid">
                  {project.results.map((r) => (
                    <div className="result" key={r.label}>
                      <p className="result__value">{r.value}</p>
                      <p className="result__label">{r.label}</p>
                      {r.detail && <p className="result__detail">{r.detail}</p>}
                    </div>
                  ))}
                </div>

                {has(project.resultsNarrative) && (
                  <p style={{ marginTop: '1.75rem' }}>{project.resultsNarrative}</p>
                )}

                {project.testimonial && (
                  <blockquote className="quote">
                    <Icon name="quote" size={26} style={{ color: 'var(--pink)' }} />
                    <p>“{project.testimonial.quote}”</p>
                    <footer>
                      {project.testimonial.author}
                      {project.testimonial.role ? `, ${project.testimonial.role}` : ''}
                    </footer>
                  </blockquote>
                )}
              </Section>
            )}

            {has(project.learnings) && (
              <Section id="learnings" title="Key learnings" accent="orange">
                <ol className="num-list">
                  {project.learnings.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ol>
              </Section>
            )}

            {has(project.recommendations) && (
              <Section id="recommendations" title="Final recommendations" accent="green">
                <ul className="tick-list">
                  {project.recommendations.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Section>
            )}

            {/* ───────────────── NEXT / BACK CTA ───────────────── */}
            <div className="cs-nav">
              <div>
                <p className="eyebrow">Next case study</p>
                <p style={{ fontWeight: 700, marginTop: '0.5rem', fontSize: '1.15rem' }}>
                  {next ? next.title : 'Back to all projects'}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link className="btn btn--ghost" to="/projects">
                  All projects
                </Link>
                {next && (
                  <Link className="btn btn--primary" to={`/projects/${next.slug}`}>
                    Next project
                    <Icon name="arrow" size={17} className="btn__arrow" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
