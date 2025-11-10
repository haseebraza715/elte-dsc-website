import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import site from '../content/site.json'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const items = site.nav
  
  const handleNavClick = (id) => {
    if (id === 'home') {
      navigate('/')
    } else if (id === 'challenges') {
      navigate('/challenges')
    } else if (id === 'resources') {
      navigate('/resources')
    } else if (id === 'members') {
      navigate('/members')
    } else {
      // For other sections, navigate to home with hash
      if (location.pathname !== '/') {
        navigate(`/#${id}`)
      } else {
        navigate(`/#${id}`, { replace: true })
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 50)
      }
    }
    setOpen(false)
  }
  
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 backdrop-blur-md shadow-sm overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-sky-200/20 to-blue-200/15 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-bl from-blue-200/20 to-sky-200/15 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/20 via-transparent to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-1 -ml-1"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
                {site.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {items.map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="text-slate-700 hover:text-sky-600 px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-sky-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
            >
              Join Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-300"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/60 shadow-lg relative">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {items.map((id) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-sky-600 hover:bg-sky-700 text-white px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 mt-4 shadow-sm"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}


