import { memo } from 'react'
import site from '../content/site.json'

const Footer = memo(function Footer() {
  return (
    <footer className="relative bg-bg-surface border-t border-border-glass w-full mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="text-xl font-display font-bold text-text-primary tracking-tight">
              DSC ELTE
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Empowering the ELTE community through data science, artificial intelligence, and advanced analytics.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-16 sm:gap-24">
            <div className="space-y-4">
              <h5 className="text-text-secondary font-semibold text-xs uppercase tracking-[0.15em]">Connect</h5>
              <div className="flex flex-col space-y-3">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href={site.social.email}
                  className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-text-secondary font-semibold text-xs uppercase tracking-[0.15em]">Quick Links</h5>
              <div className="flex flex-col space-y-3">
                <a href="#projects" className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300">
                  Projects
                </a>
                <a href="#events" className="text-text-muted hover:text-text-primary text-sm transition-colors duration-300">
                  Events
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 mt-12 border-t border-border-glass flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="text-text-muted text-xs">
            Built for the ELTE community
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
