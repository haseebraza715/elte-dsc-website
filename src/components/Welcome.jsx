import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import content from '../content/welcome.json'

export default function Welcome() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTrack, setActiveTrack] = useState(0)

  const tracks = [
    {
      id: 'community',
      label: 'Community',
      title: 'Community Learning',
      description: 'We grow together through peer learning, accountability, and shared progress.',
      points: ['Peer-to-peer support', 'Small group collaboration', 'Inclusive for beginners']
    },
    {
      id: 'projects',
      label: 'Projects',
      title: 'Project-Driven Practice',
      description: 'Members learn by building real data science projects from idea to demo.',
      points: ['Hands-on execution', 'Portfolio outcomes', 'Team-based delivery']
    },
    {
      id: 'speakers',
      label: 'Speakers',
      title: 'Speaker Sessions',
      description: 'Guest speakers share practical insights from industry and research.',
      points: ['Career stories', 'Applied insights', 'Live Q&A sessions']
    }
  ]

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
      className="relative overflow-hidden pt-24 sm:pt-28 pb-14 sm:pb-18"
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
        <div className="mx-auto max-w-5xl text-center space-y-7 sm:space-y-9">
          {/* Top badge */}
          <div className="hero-badge inline-flex items-center rounded-full border border-accent/25 bg-accent/[0.08] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ELTE Data Science Club
          </div>

          {/* Heading */}
          <h1 className="hero-heading mx-auto max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-[-0.025em] text-text-primary [text-wrap:balance]">
            Building ELTE&apos;s <span className="text-gradient">Data Science Community</span> Together.
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle mx-auto max-w-3xl text-lg sm:text-xl text-text-secondary leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {content.subtitle}
          </p>

          <div className="hero-cta mx-auto grid max-w-4xl gap-3 sm:grid-cols-3">
            {tracks.map((track, index) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrack(index)}
                className={`rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                  activeTrack === index
                    ? 'border-accent/60 bg-accent/15 shadow-[0_0_24px_rgba(37,99,235,0.25)]'
                    : 'border-border-glass bg-bg-surface/60 hover:border-accent/35 hover:bg-accent/[0.08]'
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{track.label}</p>
                <p className="mt-1 text-sm font-semibold text-text-primary">{track.title}</p>
              </button>
            ))}
          </div>

          <div className="mx-auto max-w-4xl glass-card p-6 sm:p-7 text-left">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary">
              {tracks[activeTrack].title}
            </h3>
            <p className="mt-2 text-text-secondary">{tracks[activeTrack].description}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {tracks[activeTrack].points.map((point) => (
                <div key={point} className="rounded-lg border border-border-glass bg-bg-glass px-3 py-2 text-sm text-text-secondary">
                  {point}
                </div>
              ))}
            </div>
          </div>

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

      </div>
    </section>
  )
}
