import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/welcome.json'

export default function Welcome() {
  const navigate = useNavigate()
  const location = useLocation()

  // Cache header height
  const getHeaderHeight = () => {
    if (typeof window === 'undefined') return 80
    return window.innerWidth >= 640 ? 80 : 64
  }

  const handleCtaClick = (href) => {
    if (href.startsWith('#')) {
      // Handle hash links (like #contact)
      const hashId = href.substring(1) // Remove #
      if (location.pathname !== '/') {
        navigate(`/${href}`)
        // Wait for navigation, then scroll
        setTimeout(() => {
          const element = document.getElementById(hashId)
          if (element) {
            const headerHeight = getHeaderHeight()
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = Math.max(0, elementTop - headerHeight)
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 200)
      } else {
        // Already on home page, update hash and scroll
        window.history.replaceState(null, '', `/${href}`)
        requestAnimationFrame(() => {
          const element = document.getElementById(hashId)
          if (element) {
            const headerHeight = getHeaderHeight()
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = Math.max(0, elementTop - headerHeight)
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        })
      }
    } else if (href.startsWith('/')) {
      // Handle route navigation (like /events)
      navigate(href)
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black min-h-screen flex items-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="min-h-[85vh] flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 md:pb-20">
          <div className="w-full max-w-5xl flex flex-col items-center space-y-8 sm:space-y-10">

            {/* Badge with animation */}
            <div className="inline-flex items-center border-2 border-white bg-black px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-500 cursor-default transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="inline-block w-2 h-2 bg-white mr-3 animate-pulse"></span>
              ELTE UNIVERSITY
              <span className="inline-block w-2 h-2 bg-white ml-3 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </div>

            {/* Title Section with improved typography */}
            <div className="w-full text-center space-y-5 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight tracking-tight uppercase">
                <span className="block border-4 border-white p-6 sm:p-8 bg-black hover:bg-white hover:text-black transition-all duration-500 inline-block transform hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]">
                  {content.title}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto px-4">
                {content.subtitle}
              </p>
            </div>

            {/* CTA Buttons with enhanced design */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center px-4">
              <button
                onClick={() => handleCtaClick(content.primaryCta.href)}
                className="group relative w-full sm:w-auto bg-white border-4 border-white text-black px-8 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{content.primaryCta.label}</span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">{content.primaryCta.label}</span>
              </button>

              <button
                onClick={() => handleCtaClick(content.secondaryCta.href)}
                className="group relative w-full sm:w-auto bg-black border-4 border-white text-white px-8 py-4 text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{content.secondaryCta.label}</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">{content.secondaryCta.label}</span>
              </button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 px-4">
              <div className="group relative bg-black border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all duration-500 cursor-default transform hover:scale-105 hover:-translate-y-2 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="font-bold text-xs text-white group-hover:text-black mb-2 uppercase tracking-wider">COMMUNITY</div>
                  <div className="text-4xl font-bold text-white group-hover:text-black mb-1">40+</div>
                  <div className="text-xs text-white group-hover:text-black font-bold uppercase">ACTIVE MEMBERS</div>
                </div>
              </div>

              <div className="group relative bg-black border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all duration-500 cursor-default transform hover:scale-105 hover:-translate-y-2 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="font-bold text-xs text-white group-hover:text-black mb-2 uppercase tracking-wider">PROJECTS</div>
                  <div className="text-4xl font-bold text-white group-hover:text-black mb-1">4+</div>
                  <div className="text-xs text-white group-hover:text-black font-bold uppercase">THIS SEMESTER</div>
                </div>
              </div>

              <div className="group relative bg-black border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all duration-500 cursor-default transform hover:scale-105 hover:-translate-y-2 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="font-bold text-xs text-white group-hover:text-black mb-2 uppercase tracking-wider">SESSIONS</div>
                  <div className="text-4xl font-bold text-white group-hover:text-black mb-1">WEEKLY</div>
                  <div className="text-xs text-white group-hover:text-black font-bold uppercase">TALKS + WORKSHOPS</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
