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

    // If navigating away from home and there's a hash, clear it
    // (hash sections only exist on home page)
    if (location.pathname !== '/' && window.location.hash) {
      window.history.replaceState(null, '', location.pathname)
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
      <div className="bg-black text-white min-h-screen flex flex-col relative w-full overflow-x-hidden">
        <div className="bg-noise"></div>

        <Header />
        <main className="flex-1 relative z-10 pt-0 w-full">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                <p className="text-gray-400">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/event" element={<Events />} />
              <Route path="/project" element={<Projects />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
