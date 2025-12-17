import { memo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import site from '../content/site.json'

const Footer = memo(function Footer() {
  const handleFooterLink = useCallback((item) => {
    if (item === 'home') {
      return '/'
    } else if (item === 'challenges') {
      return '/challenges'
    } else if (item === 'resources') {
      return '/resources'
    } else if (item === 'members') {
      return '/members'
    } else if (item === 'events') {
      return '/event'
    }
    return `/#${item}`
  }, [])

  return (
    <footer className="bg-[#0B1120] border-t border-slate-700/50 w-full overflow-x-hidden mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-6">
          {/* Club Info */}
          <div className="space-y-3 min-w-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20 flex-shrink-0">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white truncate">{site.name}</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base break-words">
              Empowering students at ELTE with hands-on data science projects and collaborative learning.
            </p>
            <div className="flex space-x-4 flex-wrap">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={site.social.email}
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 min-w-0">
            <h4 className="text-base md:text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-1.5">
              {site.nav.map((item) => (
                <li key={item}>
                  <Link
                    to={handleFooterLink(item)}
                    className="text-slate-400 hover:text-violet-400 transition-colors duration-200 inline-block break-words"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 min-w-0">
            <h4 className="text-base md:text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2.5 md:space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <div className="text-slate-400 text-sm mb-1">Email</div>
                  <a
                    href={site.social.email}
                    className="text-violet-400 hover:text-violet-300 transition-colors duration-200 text-sm break-all"
                  >
                    {site.contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <div className="text-slate-400 text-sm mb-1">Location</div>
                  <div className="text-slate-300 text-sm break-words">Eötvös Loránd University</div>
                  <div className="text-slate-400 text-sm break-words">Room 0.825, South Building</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-5 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div className="text-slate-500 text-sm break-words">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="text-slate-500 text-sm break-words">
              Made with <span className="text-red-500">❤️</span> for the ELTE Data Science Community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer


