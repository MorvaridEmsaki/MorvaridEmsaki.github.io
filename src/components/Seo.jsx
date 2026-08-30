import { useEffect } from 'react'
import { site } from '../data/site'

/**
 * Seo — sets the document title and meta tags per page without pulling in a
 * helmet library. Drop <Seo title="…" description="…" /> at the top of a page.
 */
function setMeta(selector, attr, value) {
  if (!value) return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, val] = selector.match(/\[(\w+)="([^"]+)"\]/) || []
    if (key && val) el.setAttribute(key, val)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

export default function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.headline}`

  useEffect(() => {
    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)

    const url = `${window.location.origin}${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
    setMeta('meta[property="og:url"]', 'content', url)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }, [fullTitle, description, path])

  return null
}
