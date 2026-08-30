import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="That page does not exist." path="404" />

      <div className="container notfound">
        <div>
          <p className="notfound__code" aria-hidden="true">
            404
          </p>
          <h1 style={{ marginTop: '1rem' }}>This page went off-brief.</h1>
          <p className="lead" style={{ marginTop: '1rem', maxWidth: '46ch', marginInline: 'auto' }}>
            The link is broken or the page moved. The work is all still here — start from the
            projects page.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '2rem',
            }}
          >
            <Link className="btn btn--primary" to="/projects">
              Browse projects
              <Icon name="arrow" size={17} className="btn__arrow" />
            </Link>
            <Link className="btn btn--ghost" to="/">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
