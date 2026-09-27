import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import PageTransition from './components/PageTransition.jsx'
import BackToTop from './components/BackToTop.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'

const Home = lazy(() => import('./pages/Home.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Members = lazy(() => import('./pages/Members.jsx'))
const Challenges = lazy(() => import('./pages/Challenges.jsx'))

function HashHandler() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/' && window.location.hash) {
      window.history.replaceState(null, '', location.pathname)
    }
  }, [location.pathname])

  return null
}

import ScrollToTop from './components/ScrollToTop.jsx'
import { useReveal } from './lib/useReveal.js'

function RevealWatcher() {
  useReveal()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HashHandler />
      <RevealWatcher />
      <SEO />
      <ThemeProvider>
      <div className="app-shell">
        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1 relative z-10 pt-0 w-full">
          <Suspense fallback={<div className="page" role="status">Loading</div>}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/event" element={<Events />} />
                <Route path="/events" element={<Events />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/members" element={<Members />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
