import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/welcome.json'

export default function Welcome() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleCtaClick = (href) => {
    if (href.startsWith('#')) {
      // Handle hash links (like #contact)
      if (location.pathname !== '/') {
        navigate(`/${href}`)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else if (href.startsWith('/')) {
      // Handle route navigation (like /event)
      navigate(href)
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}>
        {/* Large gradient orbs - reduced and optimized */}
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[750px] md:h-[750px] bg-gradient-to-br from-sky-300/25 via-blue-300/20 to-indigo-300/15 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[750px] md:h-[750px] bg-gradient-to-bl from-blue-300/25 via-sky-300/20 to-cyan-300/15 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
        
        {/* Bottom accent (static) */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-t from-sky-300/20 via-blue-300/18 to-indigo-300/12 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translate3d(0, 0, 0)' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/25 via-transparent to-transparent" style={{ transform: 'translate3d(0, 0, 0)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-32 sm:pt-20 md:pt-24 md:pb-40 lg:pt-16 lg:pb-48">
        {/* Text Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge/Label */}
          <div className="inline-block mb-6 lg:mb-4">
            <span className="text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider">
              Data Science Community
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-6 lg:mb-5 leading-tight tracking-tight">
            {content.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl text-slate-600 leading-relaxed mb-10 lg:mb-8 max-w-3xl mx-auto font-light">
            {content.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleCtaClick(content.primaryCta.href)}
              className="group relative px-8 py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl font-semibold text-base transition-colors duration-200 hover:from-sky-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:shadow-sky-500/40 active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.primaryCta.label}
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </button>
            <button
              onClick={() => handleCtaClick(content.secondaryCta.href)}
              className="group relative px-8 py-3.5 bg-white/90 backdrop-blur-sm text-sky-600 border border-sky-600/40 rounded-xl font-semibold text-base transition-colors duration-200 hover:bg-white hover:border-sky-600/80 hover:shadow-md hover:shadow-sky-500/10 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.secondaryCta.label}
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
