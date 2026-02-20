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

    const revealSelector = '.reveal, .reveal-left, .reveal-scale'
    const activate = (el) => el.classList.add('active')

    if (typeof window.IntersectionObserver === 'undefined') {
      document.querySelectorAll(revealSelector).forEach(activate)
      return
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }

    const observed = new WeakSet()
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activate(entry.target)
          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const observeRevealElements = () => {
      const revealElements = document.querySelectorAll(revealSelector)
      revealElements.forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          revealObserver.observe(el)
        }
      })
    }

    // Observe current DOM and any lazy-loaded elements that mount later.
    observeRevealElements()
    const timer = setTimeout(observeRevealElements, 200)
    const domObserver = new MutationObserver(() => {
      observeRevealElements()
    })
    domObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(timer)
      domObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [location.pathname])

  return null
}

import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HashHandler />
      <SEO />
      <ThemeProvider>
      <div className="bg-bg-base text-text-primary min-h-screen flex flex-col relative w-full overflow-x-hidden">
        <div className="bg-noise" />
        <div className="nebula-glow" />

        <ScrollProgress />
        <Header />
        <main id="main" className="flex-1 relative z-10 pt-0 w-full">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center space-y-4">
                <div className="relative w-10 h-10 mx-auto">
                  <div className="absolute inset-0 border-2 border-border-glass rounded-full"></div>
                  <div className="absolute inset-0 border-2 border-t-accent rounded-full animate-spin"></div>
                </div>
                <p className="text-text-muted text-sm font-medium">Loading...</p>
              </div>
            </div>
          }>
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
