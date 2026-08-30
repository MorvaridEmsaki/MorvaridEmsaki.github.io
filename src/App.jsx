import { Suspense, lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollManager from './components/ScrollManager'
import ScrollProgress, { BackToTop } from './components/ScrollProgress'

/* Route-level code splitting — the case-study page only downloads when needed. */
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

function Loading() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <p className="muted" role="status">
        Loading…
      </p>
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <ScrollProgress />
      <ScrollManager />
      <Navbar />

      {/* key on pathname gives every route change a short fade-up transition */}
      <main id="main" className="page-enter" key={location.pathname}>
        <Suspense fallback={<Loading />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
