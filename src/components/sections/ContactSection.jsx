import { useState } from 'react'
import { site } from '../../data/site'
import Icon from '../Icon'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

/**
 * ContactSection — works on GitHub Pages with no backend.
 *
 * By default the form opens the visitor's email client with everything
 * pre-filled (a mailto: submission). If you paste a hosted form endpoint into
 * `FORM_ENDPOINT` in src/data/site.js — Formspree, Getform, Basin, etc. — the
 * same form posts to that service asynchronously instead. Nothing else changes.
 */
export default function ContactSection({ id = 'contact' }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const useEndpoint = Boolean(site.FORM_ENDPOINT)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (!useEndpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${data.name || 'a visitor'}`)
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || '—'}\n\n${data.message}`
      )
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setStatus('sent')
      return
    }

    try {
      setStatus('sending')
      const res = await fetch(site.FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section" id={id} aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Tell me what you’re working on"
          description="Freelance projects, contract work, full-time roles or just a question about something in a case study — all welcome."
          id="contact-title"
        />

        <div className="contact">
          <Reveal>
            <div>
              <p className="lead">
                I reply to everything within two business days. If you already have a brief or a
                deck, send it over — it makes the first conversation much more useful.
              </p>

              <div className="contact-links">
                <a className="contact-link" href={`mailto:${site.email}`}>
                  <span className="contact-link__icon">
                    <Icon name="mail" size={18} />
                  </span>
                  {site.email}
                </a>

                {site.phone && (
                  <a className="contact-link" href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>
                    <span className="contact-link__icon">
                      <Icon name="phone" size={18} />
                    </span>
                    {site.phone}
                  </a>
                )}

                <p className="contact-link" style={{ cursor: 'default' }}>
                  <span className="contact-link__icon">
                    <Icon name="pin" size={18} />
                  </span>
                  {site.location}
                </p>
              </div>

              <ul className="chip-row" style={{ marginTop: '1.5rem' }}>
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a className="chip" href={s.url} target="_blank" rel="noreferrer noopener">
                      <Icon name={s.icon} size={15} />
                      {s.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="card" onSubmit={handleSubmit} noValidate={false}>
              {!useEndpoint && (
                <p className="form-note">
                  ✏️ This form opens your email app with the message pre-filled — no backend
                  required. To collect submissions automatically instead, add a form endpoint in{' '}
                  <code>src/data/site.js</code>.
                </p>
              )}

              <div className="field">
                <label htmlFor="cf-name">Your name</label>
                <input id="cf-name" name="name" type="text" required autoComplete="name" />
              </div>

              <div className="field">
                <label htmlFor="cf-email">Email address</label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" />
              </div>

              <div className="field">
                <label htmlFor="cf-company">
                  Company <span className="muted">(optional)</span>
                </label>
                <input id="cf-company" name="company" type="text" autoComplete="organization" />
              </div>

              <div className="field">
                <label htmlFor="cf-message">What can I help with?</label>
                <textarea id="cf-message" name="message" required />
                <span className="field__hint" id="cf-hint">
                  A sentence or two on the project, timeline and budget range is plenty.
                </span>
              </div>

              <button className="btn btn--primary btn--block" type="submit">
                {status === 'sending' ? 'Sending…' : useEndpoint ? 'Send message' : 'Open in my email app'}
                <Icon name="arrow" size={16} className="btn__arrow" />
              </button>

              <p role="status" aria-live="polite" className="field__hint" style={{ marginTop: '0.75rem' }}>
                {status === 'sent' && (useEndpoint ? 'Thanks — message received.' : 'Your email app should be opening now.')}
                {status === 'error' && 'Something went wrong. Please email me directly instead.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
