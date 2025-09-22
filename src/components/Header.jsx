import { useState } from 'react'
import site from '../content/site.json'

export default function Header() {
  const [open, setOpen] = useState(false)
  const items = site.nav
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                {site.name}
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-slate-700 hover:text-sky-600 px-3 py-2 text-sm font-medium rounded-md hover:bg-sky-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              Join Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
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
        <div className="md:hidden border-t border-slate-200 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 mt-4"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}


