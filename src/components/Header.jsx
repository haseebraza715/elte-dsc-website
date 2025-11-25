import { useState, memo, useCallback } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import site from '../content/site.json'

const Header = memo(function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const items = site.nav

  const handleNavClick = useCallback((id) => {
    // Close menu immediately for better UX
    setOpen(false)

    // Use requestAnimationFrame for smoother navigation
    requestAnimationFrame(() => {
      // Handle route-based navigation first
      if (id === 'home') {
        navigate('/')
      } else if (id === 'challenges') {
        navigate('/challenges')
      } else if (id === 'resources') {
        navigate('/resources')
      } else if (id === 'members') {
        navigate('/members')
      } else if (id === 'events') {
        navigate('/event')
      } else if (id === 'projects') {
        navigate('/project')
      } else {
        // For other sections (about, contact), navigate to home with hash
        if (location.pathname !== '/') {
          navigate(`/#${id}`)
        } else {
          navigate(`/#${id}`, { replace: true })
          requestAnimationFrame(() => {
            const element = document.getElementById(id)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          })
        }
      }
    })
  }, [navigate, location.pathname])

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-slate-50/95 via-white/95 to-sky-50/60 backdrop-blur-sm border-b border-slate-200/50 shadow-sm shadow-slate-900/5 overflow-hidden">
      {/* Decorative Background Elements - Optimized (reduced for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translate3d(0, 0, 0)' }}>
        {/* Reduced gradient orbs for better performance */}
        <div className="absolute -top-36 -left-36 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-sky-300/12 via-blue-300/10 to-indigo-300/6 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="absolute -top-36 -right-36 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-blue-300/12 via-sky-300/10 to-cyan-300/6 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/12 via-transparent to-transparent" style={{ transform: 'translate3d(0, 0, 0)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-1 -ml-1 transition-all duration-300"
            >
              <div className="relative w-11 h-11 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-sky-500/30 group-hover:shadow-xl group-hover:shadow-sky-500/40">
                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-sky-600 group-hover:to-blue-600 transition-all duration-200">
                {site.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {items.map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="relative text-slate-600 hover:text-sky-600 px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-sky-50/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 group"
              >
                <span className="relative z-10">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full group-hover:w-3/4 transition-width duration-200"></span>
              </button>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 relative px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl text-sm font-semibold transition-colors duration-200 hover:from-sky-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 active:scale-[0.98] overflow-hidden group"
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
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50/80 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors duration-200 active:scale-95"
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

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-gradient-to-br from-slate-50/98 via-white/98 to-sky-50/60 backdrop-blur-sm border-t border-slate-200/60 shadow-xl relative px-4 pt-4 pb-4 space-y-1.5 flex flex-col overflow-hidden">
          {/* Mobile gradient orbs - Removed for better mobile performance */}
          {items.map((id, index) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`relative z-10 block w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/90 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 active:bg-sky-100 ${open ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: open ? `${index * 30}ms` : '0ms' }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <a
            href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`relative z-10 inline-flex items-center w-fit text-left bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 mt-2 shadow-sm shadow-sky-500/30 active:bg-sky-700 ${open ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: open ? `${items.length * 30}ms` : '0ms' }}
          >
            <span className="relative z-10 flex items-center gap-1">
              Join Us
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </header>
  )
})

export default Header


