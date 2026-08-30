/**
 * Build a URL for a file that lives in /public.
 *
 * Vite rewrites `import.meta.env.BASE_URL` at build time to whatever `base`
 * is set to in vite.config.js, so this keeps images, the résumé and the
 * favicon working both locally and inside a GitHub Pages subdirectory.
 *
 *   asset('images/profile.jpg')  →  '/portfolio/images/profile.jpg'
 *
 * Always pass paths WITHOUT a leading slash.
 */
export function asset(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export default asset
