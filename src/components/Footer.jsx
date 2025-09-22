import site from '../content/site.json'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Club Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{site.name}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A beginner-friendly community at ELTE where students learn data science, AI, and machine learning through hands-on projects and collaborative exploration.
            </p>
            <div className="flex space-x-4">
              <a 
                href={site.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={site.social.email} 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={site.social.email} 
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  {site.contactEmail}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-slate-300 text-sm">ELTE University</span>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Join Us</h4>
            <p className="text-slate-300 text-sm">
              Ready to start your data science journey? Join our community today!
            </p>
            <a 
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm">
              Built with ❤️ for the ELTE Data Science Community
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


