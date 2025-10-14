import { useState } from 'react'
import site from '../content/site.json'

export default function Header() {
  const [open, setOpen] = useState(false)
  const items = site.nav
  
  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl p-1"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-300">
                {site.name}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {items.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-slate-700 hover:text-sky-600 px-4 py-2 text-sm font-medium rounded-lg hover:bg-sky-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm hover:shadow-md"
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
        <div className="md:hidden border-t border-slate-200/50 bg-white/98 backdrop-blur-lg shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {items.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-sky-600 hover:bg-sky-700 text-white px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 mt-4 shadow-sm"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}


