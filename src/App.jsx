import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
    if (location.pathname === '/') return

    if (location.pathname !== '/' && window.location.hash) {
      window.history.replaceState(null, '', location.pathname)
    }

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => revealObserver.observe(el))

    return () => {
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
      <div className="bg-bg-base text-text-primary min-h-screen flex flex-col relative w-full overflow-x-hidden">
        <div className="bg-noise" />
        <div className="nebula-glow" />

        <Header />
        <main className="flex-1 relative z-10 pt-0 w-full">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center space-y-4">
                <div className="relative w-10 h-10 mx-auto">
                  <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
                  <div className="absolute inset-0 border-2 border-t-accent rounded-full animate-spin"></div>
                </div>
                <p className="text-text-muted text-sm font-medium">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/event" element={<Events />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/members" element={<Members />} />
              <Route path="/challenges" element={<Challenges />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
