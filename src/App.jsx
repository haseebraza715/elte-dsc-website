import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'

// Lazy load all pages including Home for better code splitting
const Home = lazy(() => import('./pages/Home.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Members = lazy(() => import('./pages/Members.jsx'))
const Challenges = lazy(() => import('./pages/Challenges.jsx'))

// Component to handle hash navigation on route changes
function HashHandler() {
  const location = useLocation()

  useEffect(() => {
    // When navigating to home page, preserve hash if present
    if (location.pathname === '/') {
      // Hash navigation is handled by Home component
      // This component just ensures we're on the right route
      return
    }

    // Clear any hash if navigating away from home and there's a hash, clear it
    if (location.pathname !== '/' && window.location.hash) {
      window.history.replaceState(null, '', location.pathname)
    }

    // --- Premium Scroll Reveal Observer ---
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
      <div className="bg-[#F3EDE2] text-[#231F1A] min-h-screen flex flex-col relative w-full overflow-x-hidden">
        {/* Global Premium Background Layers */}
        <div className="bg-noise" />
        <div className="nebula-glow" />

        {/* Animated Glow Spotlights */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1F1C18]/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0D0C0A]/10 rounded-full blur-[120px] animate-pulse-glow" />

        <Header />
        <main className="flex-1 relative z-10 pt-0 w-full">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center space-y-4">
                <div className="relative w-16 h-16 mx-auto">
                  <div className="absolute inset-0 border-4 border-[#1F1C18]/20 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-t-[#1F1C18] rounded-full animate-spin"></div>
                </div>
                <p className="text-[#231F1A]/60 font-display font-bold tracking-widest uppercase text-xs">Initializing Experience</p>
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
