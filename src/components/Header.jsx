import { useState, memo, useCallback, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import site from '../content/site.json'
import { useTheme } from '../context/ThemeContext.jsx'

// Cache header height to avoid repeated calculations
const getHeaderHeight = () => {
  if (typeof window === 'undefined') return 80
  if (window.innerWidth >= 1024) return 96
  if (window.innerWidth >= 640) return 80
  return 56
}

const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const items = site.nav
  const headerHeightRef = useRef(getHeaderHeight())
  const { theme, toggleTheme } = useTheme()

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
      <header className="fixed w-full start-0 top-0 z-50 glass-nav transition-all duration-300">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo */}
            <div className="min-w-0">
              <a
                href="/"
                onClick={handleLogoClick}
                className="flex min-w-0 items-center group focus:outline-none"
              >
                <span className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-text-primary tracking-tight transition-all duration-300 group-hover:text-gradient">
                  DSC
                </span>
                <span className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-accent transition-all duration-300">
                  .
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {items.map((id) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className="relative text-text-secondary hover:text-text-primary px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 focus:outline-none group"
                >
                  <span className="relative z-10">{id}</span>
                  <span className="absolute bottom-1.5 left-4 right-4 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
              <div className="ml-3 h-5 w-px bg-border-glass mr-1"></div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-surface/50 transition-all duration-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <div className="ml-1 h-5 w-px bg-border-glass mr-3"></div>
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium py-2 px-5 text-xs font-semibold tracking-wide"
              >
                Apply
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface/50 border border-border-glass text-text-secondary hover:text-text-primary transition-all duration-300 z-[60]"
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                  <span className={`block h-px bg-current transition-all duration-500 ${open ? 'w-5 rotate-45 translate-y-[3.5px]' : 'w-5'}`}></span>
                  <span className={`block h-px bg-current transition-all duration-500 ${open ? 'w-5 opacity-0' : 'w-4'}`}></span>
                  <span className={`block h-px bg-current transition-all duration-500 ${open ? 'w-5 -rotate-45 -translate-y-[3.5px]' : 'w-5'}`}></span>
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
        {/* Dark overlay background */}
        <div className="absolute inset-0 bg-bg-base/98 backdrop-blur-2xl" onClick={() => setOpen(false)} />

        <div className="relative flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 p-6 sm:p-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface/50 border border-border-glass text-text-muted hover:text-text-primary transition-all duration-300"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>

          {/* Nav items */}
          {items.map((id, index) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`group ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${100 + index * 60}ms` : '0ms' }}
            >
              <span className="text-2xl sm:text-3xl font-display font-semibold text-text-secondary hover:text-text-primary transition-all duration-300 capitalize">
                {id}
              </span>
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${100 + items.length * 60}ms` : '0ms' }}
          >
            {theme === 'dark' ? (
              <svg className="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
            <span className="text-lg font-display font-semibold text-text-secondary">
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>

          {/* Apply button */}
          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`btn-premium py-3 px-10 text-sm tracking-wide ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${100 + (items.length + 1) * 60}ms` : '0ms' }}
          >
            Apply
          </a>
        </div>
      </div>
    </>
  )
})

export default Header
