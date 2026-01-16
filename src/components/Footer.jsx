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
    <footer className="bg-black border-t border-white/20 w-full overflow-x-hidden mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-6">
          {/* Club Info */}
          <div className="space-y-3 min-w-0">
            <div className="flex items-center space-x-3">
              <h3 className="text-xl md:text-2xl font-bold text-white border-2 border-white px-3 py-1.5">DATA SCIENCE CLUB</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base break-words">
              Empowering students at ELTE with hands-on data science projects and collaborative learning.
            </p>
            <div className="flex space-x-4 flex-wrap">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 font-bold text-sm"
                aria-label="LinkedIn"
              >
                LINKEDIN
              </a>
              <a
                href={site.social.email}
                className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 font-bold text-sm"
                aria-label="Email"
              >
                EMAIL
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
                    className="text-gray-400 hover:text-white transition-colors duration-200 inline-block break-words"
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
                <div className="min-w-0 flex-1">
                  <div className="text-gray-400 text-sm mb-1 font-bold">EMAIL</div>
                  <a
                    href={site.social.email}
                    className="text-white hover:text-gray-300 transition-colors duration-200 text-sm break-all"
                  >
                    {site.contactEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="min-w-0 flex-1">
                  <div className="text-gray-400 text-sm mb-1 font-bold">LOCATION</div>
                  <div className="text-gray-300 text-sm break-words">Eötvös Loránd University</div>
                  <div className="text-gray-400 text-sm break-words">Room 0.825, South Building</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-5 border-t border-white/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div className="text-gray-500 text-sm break-words">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="text-gray-500 text-sm break-words">
              Made with <span className="text-white">♥</span> for the ELTE Data Science Community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer


