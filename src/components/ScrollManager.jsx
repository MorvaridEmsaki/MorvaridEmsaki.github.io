import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollManager — restores expected browser behaviour for a single-page app:
 *   • navigating to a new route scrolls to the top
 *   • navigating to a "/#contact" style URL scrolls to that element
 * Honours the reduced-motion preference.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reduce ? 'auto' : 'smooth'

    if (hash) {
      // Wait a frame so the target section exists in the DOM
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior, block: 'start' })
        else window.scrollTo({ top: 0 })
      })
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
