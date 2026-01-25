import { memo } from 'react'
import site from '../content/site.json'

const Footer = memo(function Footer() {
  return (
    <footer className="bg-black border-t border-white/20 w-full overflow-x-hidden mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="space-y-2">
            <div className="inline-block border-2 border-white px-3 py-1.5 text-white font-bold text-sm sm:text-base">
              DATA SCIENCE CLUB
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              ELTE community for data science, AI, and analytics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 font-bold text-xs"
              aria-label="LinkedIn"
            >
              LINKEDIN
            </a>
            <a
              href={site.social.email}
              className="px-3 py-1.5 border border-white text-white hover:bg-white hover:text-black transition-all duration-200 font-bold text-xs"
              aria-label="Email"
            >
              EMAIL
            </a>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-white/20 text-gray-500 text-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Made with <span className="text-white">♥</span> for the ELTE Data Science Community.</div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
