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
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized (reduced for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translate3d(0, 0, 0)' }}>
        {/* Reduced to 2 gradient orbs for better performance */}
        <div className="absolute -top-36 -left-36 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-sky-300/15 via-blue-300/12 to-indigo-300/8 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="absolute -top-36 -right-36 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-bl from-blue-300/15 via-sky-300/12 to-cyan-300/8 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/15 via-transparent to-transparent" style={{ transform: 'translate3d(0, 0, 0)' }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 md:grid-cols-3 mb-8 md:mb-10">
          {/* Club Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{site.name}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Empowering students at ELTE with hands-on data science projects and collaborative learning.
            </p>
            <div className="flex space-x-4">
              <a 
                href={site.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={site.social.email} 
                className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-slate-900">Quick Links</h4>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item}>
                  <Link 
                    to={handleFooterLink(item)}
                    className="text-slate-600 hover:text-sky-600 transition-colors duration-200 inline-block"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-slate-900">Contact</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-slate-600 text-sm mb-1">Email</div>
                  <a 
                    href={site.social.email} 
                    className="text-sky-600 hover:text-sky-700 transition-colors duration-200 text-sm"
                  >
                    {site.contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-slate-600 text-sm mb-1">Location</div>
                  <div className="text-slate-700 text-sm">Eötvös Loránd University</div>
                  <div className="text-slate-600 text-sm">Room 0.825, South Building</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-slate-200/60">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
            <div className="text-slate-600 text-sm">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="text-slate-600 text-sm">
              Made with <span className="text-sky-600">❤️</span> for the ELTE Data Science Community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer


