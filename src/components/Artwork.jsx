import { asset } from '../utils/paths'

/**
 * Artwork — renders a real image when one is provided, and an original
 * gradient composition when it is not.
 *
 * This is how the site stays image-free until you add your own photos: there
 * are no stock images to license, nothing to attribute, and nothing to remove.
 *
 * Props:
 *   image     'images/foo.jpg' (relative to /public) or null
 *   alt       required whenever `image` is set
 *   gradient  ['#hex', '#hex'] used for the generated fallback
 *   label     short text drawn on the fallback
 *   note      small corner tag, defaults to "Placeholder"
 */
export default function Artwork({
  image,
  alt = '',
  gradient = ['#FF3D81', '#FF7A1A'],
  label = '',
  note = 'Placeholder',
  className = '',
}) {
  if (image) {
    return <img src={asset(image)} alt={alt} loading="lazy" decoding="async" className={className} />
  }

  return (
    <div
      className={`artwork ${className}`}
      style={{ '--a1': gradient[0], '--a2': gradient[1] || gradient[0] }}
      role="img"
      aria-label={alt || `${label} placeholder artwork`}
    >
      {label && <span className="artwork__label">{label}</span>}
      {note && <span className="artwork__note">{note}</span>}
    </div>
  )
}
