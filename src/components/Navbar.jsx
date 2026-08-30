import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { navLinks, site } from '../data/site'
import Icon from './Icon'

/**
 * Navbar — sticky, responsive, keyboard accessible.
 * Links come from `navLinks` in src/data/site.js.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const panelRef = useRef(null)

  /* Add a border + shadow once the page has scrolled a little */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the mobile menu on navigation */
  useEffect(() => setOpen(false), [location.pathname, location.hash])

  /* Close on Escape */
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  /* Same-page anchors (e.g. "/#contact") need to route first, then scroll */
  const handleAnchor = (e, to) => {
    const [path, hash] = to.split('#')
    if (!hash) return
    e.preventDefault()
    const target = path || '/'
    if (location.pathname === target) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `${import.meta.env.BASE_URL}#${hash}`)
    } else {
      navigate(`${target}#${hash}`)
    }
    setOpen(false)
  }

  const renderLink = (link, className) => {
    if (link.to.includes('#')) {
      return (
        <a
          key={link.to}
          href={link.to}
          className={className}
          onClick={(e) => handleAnchor(e, link.to)}
        >
          {link.label}
        </a>
      )
    }
    return (
      <NavLink
        key={link.to}
        to={link.to}
        end={link.to === '/'}
        className={({ isActive }) => `${className} ${isActive ? 'is-active' : ''}`}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <header className={`nav ${stuck ? 'is-stuck' : ''}`}>
      <div className="container">
        <div className="nav__inner">
          <Link to="/" className="logo" aria-label={`${site.name} — home`}>
            <span className="logo__mark" aria-hidden="true">
              {site.initials}
            </span>
            <span>{site.name}</span>
          </Link>

          <nav className="nav__links" aria-label="Main">
            {navLinks.map((l) => renderLink(l, 'nav__link'))}
            <a className="btn btn--primary btn--sm nav__cta" href={`mailto:${site.email}`}>
              Let’s talk
              <Icon name="arrow" size={16} className="btn__arrow" />
            </a>
          </nav>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" />
          </button>
        </div>

        <nav
          id="mobile-menu"
          ref={panelRef}
          className={`nav__mobile ${open ? 'is-open' : ''}`}
          aria-label="Mobile"
          hidden={!open}
        >
          {navLinks.map((l) => renderLink(l, ''))}
          <a className="btn btn--primary" href={`mailto:${site.email}`} style={{ marginTop: '1rem' }}>
            Let’s talk
            <Icon name="arrow" size={16} className="btn__arrow" />
          </a>
        </nav>
      </div>
    </header>
  )
}
