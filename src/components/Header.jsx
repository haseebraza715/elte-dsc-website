import { useState, memo, useCallback, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react'
import site from '../content/site.json'
import { useTheme } from '../context/ThemeContext.jsx'

// Cache header height to avoid repeated calculations
const getHeaderHeight = () => {
  if (typeof window === 'undefined') return 80
  if (window.innerWidth >= 1024) return 96
  if (window.innerWidth >= 640) return 80
  return 56
}

// Map nav ids to their route paths for sub-pages
const pageRouteMap = {
  events: '/event',
  resources: '/resources',
  projects: '/project',
  members: '/members',
}

// Reverse map: route path -> nav id
const routeToNavId = Object.fromEntries(
  Object.entries(pageRouteMap).map(([id, path]) => [path, id])
)

const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname, search } = location
  const items = site.nav
  const headerHeightRef = useRef(getHeaderHeight())
  const { theme, toggleTheme } = useTheme()

  // Track active section on home page via scroll position
  useEffect(() => {
    if (pathname !== '/') {
      const navId = routeToNavId[pathname]
      setActiveId(navId || '')
      return
    }

    const sectionIds = ['home', 'about', 'members', 'contact']
    let ticking = false

    const updateActive = () => {
      const viewportMid = window.scrollY + window.innerHeight * 0.35

      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= viewportMid) {
          current = id
        }
      }
      setActiveId(current)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateActive)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Run once on mount after lazy sections load
    const timer = setTimeout(updateActive, 300)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [pathname])

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
    if (pathname === '/') {
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
  }, [pathname, navigate])

  const handleNavClick = useCallback((id) => {
    // Close menu immediately for better UX
    setOpen(false)

      // Handle route-based navigation first
      if (id === 'home') {
      if (pathname !== '/') {
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
    if (pageRouteMap[id]) {
      // Clear any hash so ScrollToTop isn't blocked by hash logic
      if (window.location.hash) {
        window.history.replaceState(null, '', pathname + search)
        window.location.hash = ''
      }
      navigate(pageRouteMap[id])
      // Fallback scroll reset in case hash was blocking default behavior
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0)
      return
    }

    // Section navigation (about, contact, etc.)
    if (pathname !== '/') {
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
  }, [navigate, pathname, search, scrollToElement])

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
                <div className="max-w-[60vw] sm:max-w-none truncate text-xl sm:text-2xl lg:text-3xl font-display font-black text-gradient tracking-tighter transition-all duration-500 group-hover:tracking-normal group-hover:scale-105">
                  DSC
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {items.map((id) => {
                const isActive = activeId === id
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`relative px-4 py-2 text-sm font-medium capitalize tracking-wide transition-all duration-300 focus:outline-none group ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
                      }`}
                  >
                    <span className="relative z-10">{id}</span>
                    <span className={`absolute bottom-1.5 left-4 right-4 h-px bg-accent transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                  </button>
                )
              })}
              <div className="ml-3 h-5 w-px bg-border-glass mr-1"></div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-surface/50 transition-all duration-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <div className="ml-1 h-5 w-px bg-border-glass mr-3"></div>
              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium py-2 px-6 text-xs font-bold tracking-wider uppercase flex items-center gap-2 group/btn"
              >
                Apply
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-surface/50 transition-all duration-300"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-bg-surface/50 border border-border-glass text-text-secondary hover:text-text-primary transition-all duration-300 z-[60]"
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
          {/* Nav items */}
          {items.map((id, index) => {
            const isActive = activeId === id
            return (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`group ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${100 + index * 60}ms` : '0ms' }}
              >
                <span className={`text-2xl sm:text-3xl font-display font-black transition-all duration-300 capitalize ${isActive ? 'text-accent scale-110' : 'text-text-secondary hover:text-text-primary hover:scale-105'
                  } inline-block`}>
                  {id}
                </span>
              </button>
            )
          })}

          {/* Apply button */}
          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`btn-premium py-4 px-12 text-sm font-bold tracking-widest uppercase flex items-center gap-3 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: open ? `${100 + (items.length + 1) * 60}ms` : '0ms' }}
          >
            Apply Now
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  )
})

export default Header
