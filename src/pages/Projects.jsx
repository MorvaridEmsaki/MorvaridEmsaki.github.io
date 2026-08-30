import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import ContactSection from '../components/sections/ContactSection'

import { categories, projects } from '../data/projects'

const ALL = 'All'

export default function Projects() {
  /* The active filter lives in the URL (?category=SEO) so a filtered view is
     shareable and survives the back button. */
  const [params, setParams] = useSearchParams()
  const activeRaw = params.get('category') || ALL
  const active = [ALL, ...categories].includes(activeRaw) ? activeRaw : ALL

  const visible = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  const setCategory = (cat) => {
    if (cat === ALL) setParams({}, { replace: true })
    else setParams({ category: cat }, { replace: true })
  }

  /* Only show filters for categories that actually have projects */
  const usedCategories = categories.filter((c) => projects.some((p) => p.category === c))

  return (
    <>
      <Seo
        title="Projects"
        description="Digital marketing case studies across social media, paid advertising, analytics, content strategy, SEO and campaign strategy."
        path="projects"
      />

      <section className="section" aria-labelledby="projects-title">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
            <h1 id="projects-title" style={{ marginTop: '0.9rem' }}>
              Projects &amp; case studies
            </h1>
            <p className="lead" style={{ marginTop: '1.25rem', maxWidth: '60ch' }}>
              Every project below is written up the same way: the problem, the strategy, what I
              actually did, and what happened to the numbers. Filter by discipline to jump to the
              kind of work you care about.
            </p>
          </Reveal>

          <div
            className="filter-bar"
            role="group"
            aria-label="Filter projects by category"
            style={{ marginTop: '2.5rem' }}
          >
            <button
              type="button"
              className="filter"
              aria-pressed={active === ALL}
              onClick={() => setCategory(ALL)}
            >
              All <span className="muted">({projects.length})</span>
            </button>

            {usedCategories.map((c) => {
              const count = projects.filter((p) => p.category === c).length
              return (
                <button
                  key={c}
                  type="button"
                  className="filter"
                  aria-pressed={active === c}
                  onClick={() => setCategory(c)}
                >
                  {c} <span className="muted">({count})</span>
                </button>
              )
            })}
          </div>

          <p className="sr-only" role="status" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            {active !== ALL ? ` in ${active}` : ''}.
          </p>

          {visible.length === 0 ? (
            <div className="empty-state">
              <p>No projects in this category yet — check back soon.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {visible.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 6) * 70}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
