import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/about.json'

export default function About() {
  const focus = content.focus
  const navigate = useNavigate()
  const location = useLocation()

  // Cache header height
  const getHeaderHeight = () => {
    if (typeof window === 'undefined') return 80
    if (window.innerWidth >= 1024) return 96
    if (window.innerWidth >= 640) return 80
    return 56
  }

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact')
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById('contact')
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
      window.history.replaceState(null, '', '/#contact')
      requestAnimationFrame(() => {
        const element = document.getElementById('contact')
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
  }

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 right-0 h-64 w-64 rounded-full bg-accent/[0.08] blur-3xl" />
        <div className="absolute bottom-0 left-10 h-52 w-52 rounded-full bg-accent-hover/[0.06] blur-3xl" />
      </div>
      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="mb-6 reveal text-xs font-semibold uppercase tracking-[0.18em] text-accent">About Us</div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-text-primary mb-10 reveal delay-1">
          Building ELTE&apos;s <span className="text-gradient">Data Science Community</span> Together.
        </h2>

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Left Content */}
          <div className="space-y-7 reveal delay-2">
            <div className="space-y-5">
              {content.paragraphs.map((p, index) => (
                <p key={index} className="text-lg text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="glass-card p-5 sm:p-6">
              <p className="text-sm uppercase tracking-[0.14em] text-accent font-semibold mb-2">Our Method</p>
              <p className="text-text-secondary leading-relaxed">
                Community learning + project execution + speaker insights. We keep it practical, collaborative, and beginner-friendly.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleContactClick}
                className="btn-premium"
              >
                Get in Touch
              </button>
              <a
                className="btn-secondary"
                href="https://www.linkedin.com/company/dscelte"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Content - Focus Areas */}
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden reveal delay-3">
            <h3 className="text-xl font-display font-bold text-text-primary mb-6">
              Focus Areas
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {focus.map((item, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg border border-border-glass bg-bg-glass hover:border-accent/35 transition-all duration-300"
                >
                  <span className="text-text-secondary text-sm font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
