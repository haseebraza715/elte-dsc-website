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
      className="relative overflow-hidden pt-24 sm:pt-28 pb-20 sm:pb-28"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[20%] h-[600px] w-[600px] rounded-full bg-accent/[0.07] blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[10%] h-[500px] w-[500px] rounded-full bg-accent-hover/[0.05] blur-[140px] animate-pulse-glow" />
        <div className="absolute top-[40%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px] animate-pulse-glow" />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0 z-[1]" />

      <div className="relative section-container z-10">
        <div className="mx-auto max-w-5xl text-center space-y-8 sm:space-y-10">
          {/* Top badge */}
          <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/[0.06] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
            ELTE Data Science Club
          </div>

          {/* Heading */}
          <h1 className="hero-heading text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-[-0.03em] text-text-primary">
            Build <span className="text-gradient">models</span>, ship{' '}
            <span className="text-gradient">insight</span>,
            <br className="hidden sm:block" />
            lead with <span className="text-gradient">curiosity</span>.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mx-auto max-w-2xl text-lg sm:text-xl text-text-secondary leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {content.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleCtaClick(content.primaryCta.href)}
              className="btn-premium btn-premium-pulse w-full sm:w-auto group"
            >
              <span className="flex items-center gap-3">
                {content.primaryCta.label}
                <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => handleCtaClick(content.secondaryCta.href)}
              className="btn-secondary w-full sm:w-auto"
            >
              {content.secondaryCta.label}
            </button>
          </div>
        </div>

        {/* Feature cards — below the fold, revealed on scroll */}
        <div className="mt-24 sm:mt-32 mx-auto max-w-5xl grid gap-5 sm:gap-6 md:grid-cols-3">
          {[
            { num: '01', title: 'Research Sprints', text: 'Two-week builds with demos and peer critique.' },
            { num: '02', title: 'Applied Workshops', text: 'Hands-on labs from data prep to deployment.' },
            { num: '03', title: 'Mentor Pairing', text: 'Match with seniors for guidance and review.' }
          ].map((card, index) => (
            <div
              key={card.title}
              className={`glass-card p-6 sm:p-8 text-left hover:-translate-y-1.5 hover:border-accent/15 reveal delay-${(index + 1) * 2}`}
            >
              <span className="inline-block text-xs font-semibold text-accent tracking-widest mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {card.num}
              </span>
              <div className="text-sm font-semibold uppercase tracking-wide text-text-primary mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {card.title}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
