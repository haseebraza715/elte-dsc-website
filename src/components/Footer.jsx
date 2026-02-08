import { memo } from 'react'
import site from '../content/site.json'

const Footer = memo(function Footer() {
  return (
    <footer className="relative bg-[#E3D7C9] border-t border-[#231F1A]/12 w-full mt-auto py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="space-y-6 max-w-sm">
            <div className="text-2xl font-display font-bold text-gradient">
              DATA SCIENCE CLUB
            </div>
            <p className="text-[#231F1A]/70 text-sm font-medium leading-relaxed">
              Empowering the ELTE community through data science, artificial intelligence, and advanced analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-24">
            <div className="space-y-4">
              <h5 className="text-[#231F1A] font-bold text-xs uppercase tracking-[0.2em]">Connect</h5>
              <div className="flex flex-col space-y-3">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#231F1A]/70 hover:text-[#1F1C18] font-semibold text-sm transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href={site.social.email}
                  className="text-[#231F1A]/70 hover:text-[#1F1C18] font-semibold text-sm transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[#231F1A] font-bold text-xs uppercase tracking-[0.2em]">Resources</h5>
              <div className="flex flex-col space-y-3">
                <a href="#projects" className="text-[#231F1A]/70 hover:text-[#1F1C18] font-semibold text-sm transition-all duration-300">Projects</a>
                <a href="#events" className="text-[#231F1A]/70 hover:text-[#1F1C18] font-semibold text-sm transition-all duration-300">Events</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-[#231F1A]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-[#231F1A]/60 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="text-[#231F1A]/60 text-xs font-medium">
            Made with ❤️ for the ELTE Community.
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
