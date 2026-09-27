import { useState, memo, useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import site from '../content/site.json'
import Logo from './Logo.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { scrollToId, syncAnchorOffset } from '../lib/scroll.js'

const pageRouteMap = {
  events: '/event',
  resources: '/resources',
  projects: '/project',
  members: '/members',
}

const routeToNavId = {
  '/event': 'events',
  '/events': 'events',
  '/resources': 'resources',
  '/project': 'projects',
  '/projects': 'projects',
  '/members': 'members',
}

const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname, search } = location
  const items = site.nav
  const { theme, toggleTheme } = useTheme()
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const firstItemRef = useRef(null)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    if (open && !wasOpenRef.current) {
      firstItemRef.current?.focus()
    } else if (!open && wasOpenRef.current) {
      toggleRef.current?.focus()
    }
    wasOpenRef.current = open
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab') return
      const focusable = [
        toggleRef.current,
        ...Array.from(menuRef.current?.querySelectorAll('button, a[href]') ?? []),
      ].filter((el) => el && !el.disabled)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useLayoutEffect(() => {
    const apply = () => syncAnchorOffset()
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveId(routeToNavId[pathname] || '')
      return
    }

    const sectionIds = ['home', 'about', 'contact']
    let ticking = false

    const updateActive = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const viewport = window.innerHeight
      const canScroll = scrollHeight > viewport + 1
      const atBottom = canScroll && window.scrollY + viewport >= scrollHeight - 4

      if (atBottom) {
        setActiveId('contact')
        ticking = false
        return
      }

      const viewportMid = window.scrollY + viewport * 0.35
      let current = 'home'
      const ids = canScroll ? sectionIds : ['home', 'about']
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= viewportMid) current = id
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
    const timer = setTimeout(updateActive, 300)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
    }
  }, [pathname])

  const handleLogoClick = useCallback((event) => {
    event.preventDefault()
    setOpen(false)
    if (pathname === '/') {
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } else {
      navigate('/')
    }
  }, [pathname, navigate])

  const handleNavClick = useCallback((id) => {
    setOpen(false)

    if (id === 'home') {
      if (pathname !== '/') {
        navigate('/')
      } else {
        window.history.replaceState(null, '', '/')
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
      return
    }

    if (pageRouteMap[id]) {
      if (window.location.hash) {
        window.history.replaceState(null, '', pathname + search)
      }
      navigate(pageRouteMap[id])
      return
    }

    if (pathname !== '/') {
      navigate('/', { state: { targetId: id } })
      return
    }

    const newHash = `#${id}`
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', `/${newHash}`)
    }
    scrollToId(id)
  }, [navigate, pathname, search])

  const themeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`

  return (
    <>
      <header id="site-header" className="mast">
        <div className="wrap mast-inner">
          <a href="/" onClick={handleLogoClick} className="brand">
            <Logo />
            <span className="brand-name">
              Data Science Club <span className="brand-school">ELTE</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {items.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id)}
                aria-current={activeId === id ? 'page' : undefined}
                className="nav-link"
              >
                {id}
              </button>
            ))}
            <div className="desktop-tools">
              <button type="button" onClick={toggleTheme} className="theme-btn" aria-label={themeLabel}>
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <a href={site.applyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-small">
                Apply
              </a>
            </div>
          </nav>

          <div className="mobile-tools">
            <button type="button" onClick={toggleTheme} className="theme-btn" aria-label={themeLabel}>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(!open)}
              className="menu-btn"
              aria-expanded={open}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          ref={menuRef}
          className="mobile-menu"
        >
          <div className="mobile-menu-panel">
            <nav aria-label="Mobile navigation" className="mobile-nav">
              {items.map((id, index) => (
                <button
                  key={id}
                  ref={index === 0 ? firstItemRef : undefined}
                  type="button"
                  onClick={() => handleNavClick(id)}
                  aria-current={activeId === id ? 'page' : undefined}
                  className="nav-link"
                >
                  {id}
                </button>
              ))}
            </nav>
            <a
              href={site.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary btn-large"
            >
              Apply to join
            </a>
          </div>
        </div>
      )}
    </>
  )
})

export default Header
