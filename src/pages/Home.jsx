import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Artwork from '../components/Artwork'
import Icon from '../components/Icon'
import Marquee from '../components/Marquee'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Seo from '../components/Seo'
import ContactSection from '../components/sections/ContactSection'
import EducationSection from '../components/sections/EducationSection'
import Services from '../components/sections/Services'
import ToolsSection from '../components/sections/ToolsSection'

import { shortBio, specializations, strengths } from '../data/about'
import { getFeaturedProjects } from '../data/projects'
import { site } from '../data/site'
import { asset } from '../utils/paths'

/* Cycles the gradient word in the headline. Pauses under reduced motion. */
function useRotator(words, interval = 2600) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (!words?.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words, interval])
  return i
}

export default function Home() {
  const featured = getFeaturedProjects()
  const active = useRotator(site.rotatingWords)

  return (
    <>
      <Seo
        title={site.headline}
        description={site.intro.slice(0, 155)}
        path=""
      />

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__blobs" aria-hidden="true">
          <span className="hero__blob hero__blob--1" />
          <span className="hero__blob hero__blob--2" />
          <span className="hero__blob hero__blob--3" />
        </div>

        <div className="container">
          <div className="hero__inner">
            <div>
              <p className="hero__badge">
                <span className="hero__dot" aria-hidden="true" />
                {site.availability} · {site.location}
              </p>

              <h1 id="hero-title">
                {site.name} builds
                <br />
                <span className="hero__rotator">
                  {site.rotatingWords.map((w, i) => (
                    <span key={w} className={i === active ? 'is-current' : ''} aria-hidden={i !== active}>
                      {w}
                    </span>
                  ))}
                </span>
                <br />
                that pays off.
              </h1>

              <p className="lead" style={{ maxWidth: '54ch' }}>
                {site.intro}
              </p>

              <div className="hero__actions">
                <Link className="btn btn--primary" to="/projects">
                  View my projects
                  <Icon name="arrow" size={17} className="btn__arrow" />
                </Link>
                <a className="btn btn--ghost" href={asset(site.resume)} download>
                  Download résumé
                  <Icon name="download" size={17} />
                </a>
                <a className="btn btn--ghost" href="#contact">
                  Contact me
                </a>
              </div>

              <p className="hero__meta">
                <span>{site.headline}</span>
              </p>
            </div>

            {/* Profile photo — swap in your own via `photo` in src/data/site.js */}
            <Reveal delay={140}>
              <div className="portrait-wrap">
                <span className="portrait__frame" aria-hidden="true" />
                <div className="portrait">
                  {site.photo ? (
                    <img src={asset(site.photo)} alt={site.photoAlt} width="840" height="1050" />
                  ) : (
                    <Artwork
                      gradient={['#FF3D81', '#FF7A1A']}
                      label="Your photo here"
                      alt="Placeholder for a professional profile photo"
                      note="Add photo"
                    />
                  )}
                </div>
                <span className="portrait-sticker">
                  <Icon name="spark" size={15} />
                  Social · Paid · Analytics
                </span>
              </div>
            </Reveal>
          </div>

          <ul className="stats">
            {site.stats.map((s) => (
              <li key={s.label}>
                <span className="stat__value">{s.value}</span>
                <span className="stat__label" style={{ display: 'block' }}>
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Marquee items={specializations} />

      {/* ─────────────────────────── ABOUT ────────────────────────── */}
      <section className="section" id="about" aria-labelledby="about-title">
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'clamp(2rem, 1rem + 4vw, 4rem)' }}>
            <Reveal>
              <p className="eyebrow">About me</p>
              <h2 id="about-title" style={{ marginTop: '0.75rem' }}>
                Half strategist,
                <br />
                half <span className="mark">analyst</span>.
              </h2>
              <p className="lead" style={{ marginTop: '1.5rem' }}>
                {shortBio}
              </p>
              <Link className="btn btn--ghost" to="/about" style={{ marginTop: '1.5rem' }}>
                Read the full story
                <Icon name="arrow" size={17} className="btn__arrow" />
              </Link>
            </Reveal>

            <div className="grid" style={{ gap: '1rem' }}>
              {strengths.map((s, i) => (
                <Reveal key={s.title} delay={i * 70}>
                  <article className="card card--hover" style={{ padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.08rem' }}>{s.title}</h3>
                    <p className="muted" style={{ marginTop: '0.4rem', fontSize: '0.95rem' }}>
                      {s.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── FEATURED PROJECTS ────────────────────── */}
      <section className="section section--tint" id="work" aria-labelledby="work-title">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Campaigns with receipts"
            description="A few projects that show how I think. Each one has a full case study — problem, strategy, process and the numbers."
            id="work-title"
            action={
              <Link className="btn btn--ghost" to="/projects">
                All projects
                <Icon name="arrow" size={17} className="btn__arrow" />
              </Link>
            }
          />

          <div className="projects-grid">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <ToolsSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}
