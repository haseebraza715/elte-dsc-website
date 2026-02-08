import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/welcome.json'

export default function Welcome() {
  const navigate = useNavigate()
  const location = useLocation()

  // Cache header height
  const getHeaderHeight = () => {
    if (typeof window === 'undefined') return 80
    if (window.innerWidth >= 1024) return 96
    if (window.innerWidth >= 640) return 80
    return 56
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
      className="relative min-h-[88vh] sm:min-h-[96vh] overflow-hidden pt-28 sm:pt-32 reveal"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1F1C18]/18 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[#0D0C0A]/14 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(122,107,92,0.08)_0%,transparent_45%,rgba(90,79,68,0.08)_100%)]" />
        {/* Abstract side stack */}
        <div className="hidden lg:block absolute right-12 top-28 w-64 space-y-4 opacity-70">
          <div className="glass-card p-5 rotate-[-2deg] shadow-[0_20px_40px_rgba(43,30,30,0.18)]">
            <div className="h-2 w-10 rounded-full bg-[#1F1C18]/40" />
            <div className="mt-4 h-2 w-40 rounded-full bg-[#231F1A]/15" />
            <div className="mt-2 h-2 w-28 rounded-full bg-[#231F1A]/15" />
          </div>
          <div className="glass-card p-5 rotate-[1.5deg] shadow-[0_20px_40px_rgba(43,30,30,0.18)]">
            <div className="h-2 w-16 rounded-full bg-[#1F1C18]/40" />
            <div className="mt-4 h-2 w-36 rounded-full bg-[#231F1A]/15" />
            <div className="mt-2 h-2 w-24 rounded-full bg-[#231F1A]/15" />
          </div>
          <div className="glass-card p-5 rotate-[-1deg] shadow-[0_20px_40px_rgba(43,30,30,0.18)]">
            <div className="h-2 w-12 rounded-full bg-[#1F1C18]/40" />
            <div className="mt-4 h-2 w-44 rounded-full bg-[#231F1A]/15" />
            <div className="mt-2 h-2 w-20 rounded-full bg-[#231F1A]/15" />
          </div>
        </div>
      </div>

      <div className="relative section-container z-10">
        <div className="mx-auto max-w-5xl text-center space-y-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#1F1C18]/25 bg-[#1F1C18]/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.35em] text-[#1F1C18]">
            <span className="h-2 w-2 rounded-full bg-[#1F1C18] shadow-[0_0_12px_rgba(43,38,33,0.45)]" />
            ELTE Data Science Club
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black leading-[1.02] sm:leading-[1.01] tracking-[-0.02em] sm:tracking-[-0.03em] text-[#231F1A]">
            Build <span className="text-gradient">models</span>, ship <span className="text-gradient">insight</span>,
            lead with <span className="text-gradient">curiosity</span>.
          </h1>

          <p className="mx-auto max-w-xl sm:max-w-2xl text-base sm:text-lg text-[#231F1A]/75 font-semibold leading-relaxed">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleCtaClick(content.primaryCta.href)}
              className="btn-premium w-full sm:w-auto px-8 sm:px-12 py-4 text-base sm:text-lg uppercase tracking-widest font-black group bg-[#1F1C18] hover:bg-[#0D0C0A] text-[#F3EDE2] border border-[#231F1A]/20"
            >
              <span className="flex items-center gap-3">
                {content.primaryCta.label}
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => handleCtaClick(content.secondaryCta.href)}
              className="w-full sm:w-auto px-6 sm:px-10 py-4 text-base sm:text-lg font-black text-[#231F1A]/80 border border-transparent hover:text-[#231F1A] transition-all duration-500 uppercase tracking-widest underline underline-offset-8 decoration-[#1F1C18]/60 hover:decoration-[#1F1C18]"
            >
              {content.secondaryCta.label}
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 lg:mt-20 grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            { title: 'Research Sprints', text: 'Two-week builds with demos and peer critique.' },
            { title: 'Applied Workshops', text: 'Hands-on labs from data prep to deployment.' },
            { title: 'Mentor Pairing', text: 'Match with seniors for guidance and review.' }
          ].map((card, index) => (
            <div
              key={card.title}
              className={`glass-card p-6 sm:p-7 text-left reveal delay-${index + 1} transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(43,30,30,0.2)] ${index === 1 ? 'md:translate-y-4' : ''}`}
            >
              <div className="text-xs font-black uppercase tracking-[0.35em] text-[#231F1A]/50">
                {card.title}
              </div>
              <p className="mt-3 text-sm sm:text-base font-semibold text-[#231F1A]/75 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
