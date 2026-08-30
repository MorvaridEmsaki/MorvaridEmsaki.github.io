import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <h2>
              Let’s make something
              <br />
              worth measuring.
            </h2>
            <p>
              Open to freelance projects, contract work and full-time roles. The fastest way to
              reach me is email.
            </p>
            <a
              className="btn btn--primary"
              href={`mailto:${site.email}`}
              style={{ marginTop: '1.5rem' }}
            >
              {site.email}
              <Icon name="arrow" size={16} className="btn__arrow" />
            </a>
          </div>

          <div>
            <p className="footer__col-title">Navigate</p>
            <div className="footer__links">
              {navLinks.map((l) =>
                l.to.includes('#') ? (
                  <a key={l.to} href={l.to}>
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.to} to={l.to}>
                    {l.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <p className="footer__col-title">Elsewhere</p>
            <div className="footer__links">
              {site.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer noopener">
                  {s.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <span>{site.footerNote}</span>
        </div>
      </div>
    </footer>
  )
}
