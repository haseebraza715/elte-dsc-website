import { useState, memo, useCallback, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import site from '../content/site.json'

// Cache header height to avoid repeated calculations
const getHeaderHeight = () => {
  if (typeof window === 'undefined') return 80
  return window.innerWidth >= 640 ? 80 : 64
}

const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const items = site.nav
  const headerHeightRef = useRef(getHeaderHeight())

  // Update header height on resize (throttled)
  useEffect(() => {
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        headerHeightRef.current = getHeaderHeight()
      }, 150)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Optimized scroll function using rAF and avoiding layout thrashing
  const scrollToElement = useCallback((elementId, retries = 0) => {
    // Max retries to prevent infinite loops
    if (retries > 20) {
      console.warn(`Element ${elementId} not found after ${retries} retries`)
      return
    }

    requestAnimationFrame(() => {
      const element = document.getElementById(elementId)
      if (!element) {
        // Retry if element not found (waiting for lazy load)
        setTimeout(() => scrollToElement(elementId, retries + 1), 50)
        return
      }

      // Use scroll-margin-top CSS instead of manual calculation when possible
      // Fallback to manual scroll for better control
      const headerHeight = headerHeightRef.current
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = Math.max(0, elementTop - headerHeight)

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    })
  }, [])

  // Handle logo click specifically
  const handleLogoClick = useCallback((e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      // Already on home, just scroll to top and clear any hash
      window.history.replaceState(null, '', '/')
      requestAnimationFrame(() => {
        // Hard reset to absolute top
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      })
    } else {
      // Navigate home; ScrollToTop handles resetting scroll
      navigate('/')
    }
  }, [location.pathname, navigate])

  const handleNavClick = useCallback((id) => {
    // Close menu immediately for better UX
    setOpen(false)

    const pageRoutes = {
      resources: '/resources',
      events: '/event',
      projects: '/project',
    }

    // Handle route-based navigation first
    if (id === 'home') {
      if (location.pathname !== '/') {
        navigate('/')
      } else {
        window.history.replaceState(null, '', '/')
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        })
      }
      return
    }

    // If this is a full page route, just navigate and let ScrollToTop handle scroll reset
    if (pageRoutes[id]) {
      // Clear any hash so ScrollToTop isn't blocked by hash logic
      if (window.location.hash) {
        window.history.replaceState(null, '', location.pathname + location.search)
        window.location.hash = ''
      }
      navigate(pageRoutes[id])
      // Fallback scroll reset in case hash was blocking default behavior
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      return
    }

    // Section navigation (about, contact, etc.)
    if (location.pathname !== '/') {
      // Navigate home with target section in state; Home will scroll there
      navigate('/', { state: { targetId: id } })
      return
    }

    // Already on home page - update hash for sharing and scroll smoothly
    const newHash = `#${id}`
    requestAnimationFrame(() => {
      if (window.location.hash !== newHash) {
        window.location.hash = newHash
      }
      scrollToElement(id)
    })
  }, [navigate, location.pathname, scrollToElement])

  return (
    <>
      <header className="fixed w-full start-0 top-0 z-50 glass-nav transition-all duration-300 border-[#231F1A]/5 shadow-glow">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                onClick={handleLogoClick}
                className="flex items-center space-x-3 group focus:outline-none"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient tracking-tighter transition-all duration-500 group-hover:tracking-normal group-hover:scale-105">
                  DSC ELTE
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {items.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="relative text-[#231F1A]/70 hover:text-[#231F1A] px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none group overflow-hidden"
                >
                  <span className="relative z-10">{id}</span>
                  <span className="absolute inset-0 bg-[#231F1A]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg"></span>
                </button>
              ))}
              <div className="ml-4 h-8 w-px bg-[#231F1A]/10 mr-4"></div>
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium py-2.5 px-8 text-sm uppercase tracking-widest shadow-glow"
              >
                Apply
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-2xl bg-[#231F1A]/5 border border-[#231F1A]/10 text-[#231F1A]/70 hover:text-[#231F1A] transition-all duration-300 z-[60]"
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1.5">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-500 rounded-full ${open ? 'rotate-45 translate-y-2 w-6' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-500 rounded-full ${open ? 'opacity-0' : 'w-6'}`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-500 rounded-full ${open ? '-rotate-45 -translate-y-2 w-6' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-all duration-700 ease-in-out ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Elite Glass Overlay */}
        <div className="absolute inset-0 bg-[#F3EDE2]/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />

        {/* Animated Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg bg-[#1F1C18]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

        <div className="relative flex flex-col items-center justify-center h-full space-y-12 p-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-2xl bg-[#231F1A]/5 border border-[#231F1A]/10 text-[#231F1A]/70 hover:text-[#231F1A] transition-all duration-300"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          {items.map((id, index) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`group flex flex-col items-center ${open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${150 + index * 80}ms` : '0ms' }}
            >
              <span className="text-[10px] font-bold text-[#1F1C18] uppercase tracking-[0.4em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Discover</span>
              <span className={`text-4xl sm:text-5xl font-display font-bold text-[#231F1A]/70 hover:text-[#231F1A] hover:scale-110 transition-all duration-300 uppercase italic`}>
                {id}
              </span>
            </button>
          ))}

          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`btn-premium py-5 px-12 text-xl shadow-glow ${open ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${150 + items.length * 80}ms` : '0ms' }}
          >
            Apply to Join
          </a>
        </div>
      </div>
    </>
  )
})

export default Header
