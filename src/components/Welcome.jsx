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
        <div className="hero-grid absolute inset-0 opacity-15"></div>
        <div className="data-flow absolute inset-0 opacity-15"></div>

        <svg
          className="absolute left-6 top-10 w-[240px] h-[240px] sm:left-8 sm:top-8 sm:w-[280px] sm:h-[280px] lg:left-12 lg:top-10 lg:w-[320px] lg:h-[320px] opacity-45 sphere-float"
          viewBox="0 0 360 360"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="sphereGlow" cx="35%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="180" cy="180" r="140" fill="url(#sphereGlow)" />
          <circle cx="180" cy="180" r="140" fill="none" stroke="rgba(255,255,255,0.25)" />
          <g className="sphere-rotate" stroke="rgba(255,255,255,0.18)" fill="none">
            <ellipse cx="180" cy="180" rx="120" ry="40" />
            <ellipse cx="180" cy="180" rx="120" ry="70" />
            <ellipse cx="180" cy="180" rx="120" ry="100" />
            <ellipse cx="180" cy="180" rx="60" ry="120" transform="rotate(90 180 180)" />
            <ellipse cx="180" cy="180" rx="80" ry="120" transform="rotate(90 180 180)" />
          </g>
          <g fill="rgba(255,255,255,0.5)">
            <circle cx="110" cy="120" r="2.5" />
            <circle cx="230" cy="90" r="2.5" />
            <circle cx="250" cy="200" r="2.5" />
            <circle cx="140" cy="230" r="2.5" />
          </g>
        </svg>

        <svg
          className="absolute right-12 top-12 w-[420px] h-[240px] opacity-28 mesh-sway"
          viewBox="0 0 420 240"
          aria-hidden="true"
        >
          <g stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none">
            <path d="M20 170 L140 60 L260 110 L380 30" />
            <path d="M30 120 L160 30 L300 80 L400 20" />
            <path d="M50 210 L180 120 L280 180 L390 90" />
            <path d="M80 50 L210 150 L320 60" />
          </g>
          <g fill="rgba(255,255,255,0.55)">
            <circle cx="140" cy="60" r="2.5" />
            <circle cx="260" cy="110" r="2.5" />
            <circle cx="380" cy="30" r="2.5" />
            <circle cx="160" cy="30" r="2" />
            <circle cx="300" cy="80" r="2" />
            <circle cx="180" cy="120" r="2" />
            <circle cx="280" cy="180" r="2" />
            <circle cx="320" cy="60" r="2" />
          </g>
        </svg>

        <svg
          className="absolute bottom-10 right-10 w-[420px] h-[240px] opacity-32 node-drift"
          viewBox="0 0 420 240"
          aria-hidden="true"
        >
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
            <line x1="30" y1="180" x2="150" y2="70" />
            <line x1="150" y1="70" x2="280" y2="120" />
            <line x1="280" y1="120" x2="390" y2="40" />
            <line x1="110" y1="30" x2="220" y2="110" />
            <line x1="220" y1="110" x2="360" y2="200" />
          </g>
          <g fill="rgba(255,255,255,0.55)">
            <circle cx="30" cy="180" r="2.5" />
            <circle cx="150" cy="70" r="2.5" />
            <circle cx="280" cy="120" r="2.5" />
            <circle cx="390" cy="40" r="2.5" />
            <circle cx="110" cy="30" r="2.5" />
            <circle cx="220" cy="110" r="2.5" />
            <circle cx="360" cy="200" r="2.5" />
          </g>
        </svg>

        <svg
          className="absolute left-[62%] top-[6%] w-[180px] h-[180px] sm:left-[58%] sm:top-[6%] sm:w-[210px] sm:h-[210px] lg:left-[55%] lg:top-[8%] lg:w-[240px] lg:h-[240px] opacity-35 sphere-float-slow"
          viewBox="0 0 360 360"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="sphereGlowSmall" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.28)" />
              <stop offset="55%" stopColor="rgba(255,255,255,0.07)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="180" cy="180" r="120" fill="url(#sphereGlowSmall)" />
          <circle cx="180" cy="180" r="120" fill="none" stroke="rgba(255,255,255,0.22)" />
          <g className="sphere-rotate" stroke="rgba(255,255,255,0.16)" fill="none">
            <ellipse cx="180" cy="180" rx="100" ry="40" />
            <ellipse cx="180" cy="180" rx="100" ry="70" />
            <ellipse cx="180" cy="180" rx="60" ry="110" transform="rotate(90 180 180)" />
          </g>
        </svg>

        <svg
          className="absolute right-6 bottom-[18%] w-[200px] h-[200px] sm:right-10 sm:bottom-[18%] sm:w-[220px] sm:h-[220px] lg:right-12 lg:bottom-[20%] lg:w-[260px] lg:h-[260px] opacity-30 sphere-float"
          viewBox="0 0 360 360"
          aria-hidden="true"
        >
          <circle cx="180" cy="180" r="100" fill="none" stroke="rgba(255,255,255,0.18)" />
          <g className="sphere-rotate" stroke="rgba(255,255,255,0.14)" fill="none">
            <ellipse cx="180" cy="180" rx="90" ry="30" />
            <ellipse cx="180" cy="180" rx="90" ry="60" />
            <ellipse cx="180" cy="180" rx="50" ry="90" transform="rotate(90 180 180)" />
          </g>
        </svg>

        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="min-h-[85vh] flex items-center justify-center pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-14 md:pb-18">
          <div className="w-full max-w-5xl flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-10">

            {/* Badge with animation */}
            <div className="inline-flex items-center border-2 border-white bg-black px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-300 cursor-default transform hover:scale-105">
              ELTE UNIVERSITY
            </div>

            {/* Title Section with improved typography */}
            <div className="w-full text-center space-y-5 sm:space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight tracking-tight uppercase">
                <span className="block border-4 border-white p-4 sm:p-6 md:p-8 bg-black hover:bg-white hover:text-black transition-all duration-500 inline-block transform hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hero-title">
                  {content.title}
                </span>
              </h1>
              <p className="text-sm sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-3xl mx-auto px-2 sm:px-4">
                {content.subtitle}
              </p>
            </div>

            {/* CTA Buttons with enhanced design */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-2xl justify-center px-2 sm:px-4">
              <button
                onClick={() => handleCtaClick(content.primaryCta.href)}
                className="group relative w-full sm:w-auto bg-white border-4 border-white text-black px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{content.primaryCta.label}</span>
                <span className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">{content.primaryCta.label}</span>
              </button>

              <button
                onClick={() => handleCtaClick(content.secondaryCta.href)}
                className="group relative w-full sm:w-auto bg-black border-4 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">{content.secondaryCta.label}</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">{content.secondaryCta.label}</span>
              </button>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 pt-4 px-2 sm:px-4">
              <div className="group relative bg-black/70 border border-white/50 p-3 sm:p-5 text-left hover:bg-white hover:text-black transition-all duration-400 cursor-default transform hover:-translate-y-1 shadow-[0_0_14px_rgba(255,255,255,0.08)] hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] overflow-hidden stats-card">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-8 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-1.5 sm:space-y-2">
                  <div className="text-[9px] sm:text-xs text-white/70 group-hover:text-black uppercase tracking-[0.18em]">Projects Completed</div>
                  <div className="text-xl sm:text-3xl font-bold text-white group-hover:text-black">4+</div>
                  <div className="text-[9px] sm:text-xs text-white/60 group-hover:text-black uppercase tracking-widest">Research + Applied</div>
                </div>
              </div>

              <div className="group relative bg-black/70 border border-white/50 p-3 sm:p-5 text-left hover:bg-white hover:text-black transition-all duration-400 cursor-default transform hover:-translate-y-1 shadow-[0_0_14px_rgba(255,255,255,0.08)] hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] overflow-hidden stats-card">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-8 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-1.5 sm:space-y-2">
                  <div className="text-[9px] sm:text-xs text-white/70 group-hover:text-black uppercase tracking-[0.18em]">Workshops Held</div>
                  <div className="text-xl sm:text-3xl font-bold text-white group-hover:text-black">10+</div>
                  <div className="text-[9px] sm:text-xs text-white/60 group-hover:text-black uppercase tracking-widest">Python + AI</div>
                </div>
              </div>

              <div className="group relative bg-black/70 border border-white/50 p-3 sm:p-5 text-left hover:bg-white hover:text-black transition-all duration-400 cursor-default transform hover:-translate-y-1 shadow-[0_0_14px_rgba(255,255,255,0.08)] hover:shadow-[0_0_28px_rgba(255,255,255,0.2)] overflow-hidden stats-card">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-8 transition-opacity duration-500"></div>
                <div className="relative z-10 space-y-1.5 sm:space-y-2">
                  <div className="text-[9px] sm:text-xs text-white/70 group-hover:text-black uppercase tracking-[0.18em]">Active Members</div>
                  <div className="text-xl sm:text-3xl font-bold text-white group-hover:text-black">60+</div>
                  <div className="text-[9px] sm:text-xs text-white/60 group-hover:text-black uppercase tracking-widest">Student Researchers</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
