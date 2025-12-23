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
      challenges: '/challenges',
      resources: '/resources',
      members: '/members',
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
      <header className="fixed w-full start-0 top-0 z-50 bg-[#09090b]/95 xl:bg-[#09090b]/80 backdrop-blur-md border-b border-zinc-800/50 shadow-sm shadow-black/20 overflow-hidden">
        {/* Decorative Background Elements - Optimized for mobile performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translate3d(0, 0, 0)' }}>
          {/* Reduced/removed gradient orbs on mobile for better performance */}
          <div className="hidden xl:block absolute -top-36 -left-36 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-violet-500/8 via-fuchsia-500/4 to-rose-500/3 rounded-full mix-blend-screen filter blur-xl md:blur-2xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
          <div className="hidden xl:block absolute -top-36 -right-36 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-bl from-emerald-500/8 via-teal-500/4 to-violet-500/3 rounded-full mix-blend-screen filter blur-xl md:blur-2xl" style={{ transform: 'translate3d(0, 0, 0)' }} />

          {/* Subtle gradient overlay - lighter on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/5 md:from-zinc-50/10 via-transparent to-transparent" style={{ transform: 'translate3d(0, 0, 0)' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                onClick={handleLogoClick}
                className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl p-1 -ml-1 transition-all duration-300"
              >
                <div className="relative w-11 h-11 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-violet-500/20 group-hover:shadow-xl group-hover:shadow-violet-500/30">
                  <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <span className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 transition-all duration-200">
                  {site.name}
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
              {items.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="relative text-zinc-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-800/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 group"
                >
                  <span className="relative z-10">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                  <span className="pointer-events-none absolute inset-x-1 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-transform duration-200 ease-out group-hover:scale-x-100"></span>
                </button>
              ))}
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 relative px-6 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl text-sm font-semibold transition-colors duration-200 hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#09090b] shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 active:scale-[0.98] overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Join Now
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200 active:scale-95"
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
        className={`xl:hidden fixed inset-0 z-[60] bg-[#09090b]/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        {/* Close Button Inside Overlay */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center p-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors duration-200 active:scale-95"
            aria-label="Close menu"
          >
            <svg className="block h-8 w-8 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Decorative background for menu */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 p-4 overflow-y-auto">
          {items.map((id, index) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`relative text-3xl sm:text-4xl font-display font-bold text-zinc-300 hover:text-white transition-all duration-300 transform hover:scale-105 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: open ? `${100 + index * 50}ms` : '0ms' }}
            >
              <span className="relative z-10">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              {/* Active/Hover Indicator */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
            </button>
          ))}

          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`mt-4 relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl text-lg font-bold shadow-xl shadow-violet-500/20 active:scale-95 transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: open ? `${100 + items.length * 50}ms` : '0ms' }}
          >
            <span className="flex items-center gap-2">
              Join Us Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  )
})


export default Header
