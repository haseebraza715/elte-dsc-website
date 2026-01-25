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
      <header className="fixed w-full start-0 top-0 z-50 bg-black/95 xl:bg-black/85 backdrop-blur-lg border-b border-white/30 shadow-lg shadow-black/40 overflow-hidden">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                onClick={handleLogoClick}
                className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-white rounded-xl p-1 -ml-1 transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl font-display font-bold text-white border-2 border-white px-4 py-2 group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  DSC ELTE
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-3">
              {items.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="relative text-gray-300 hover:text-white px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white group"
                >
                  <span className="relative z-10">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                  <span className="pointer-events-none absolute inset-x-2 bottom-1 h-0.5 origin-left scale-x-0 bg-white rounded-full transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </button>
              ))}
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 relative px-7 py-3 bg-white text-black border-2 border-white text-sm font-bold transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                JOIN NOW
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200 active:scale-95"
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg className="block h-6 w-6 transition-transform duration-200 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Moves outside header to prevent clipping */}
      <div
        className={`xl:hidden fixed inset-0 z-[70] bg-black/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        onClick={() => setOpen(false)}
        role="presentation"
      >
        {/* Close Button Inside Overlay */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <button
            onClick={() => setOpen(false)}
            type="button"
            className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200 active:scale-95 pointer-events-auto"
            aria-label="Close menu"
          >
            <svg className="block h-8 w-8 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 p-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {items.map((id, index) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`relative text-3xl sm:text-4xl font-display font-bold text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: open ? `${100 + index * 50}ms` : '0ms' }}
            >
              <span className="relative z-10">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              {/* Active/Hover Indicator */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-white rounded-full group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
            </button>
          ))}

          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`mt-4 relative px-8 py-4 bg-white text-black border-4 border-white text-lg font-bold active:scale-95 transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: open ? `${100 + items.length * 50}ms` : '0ms' }}
          >
            JOIN NOW
          </a>
        </div>
      </div>
    </>
  )
})


export default Header
