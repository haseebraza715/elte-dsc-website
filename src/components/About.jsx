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
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-bg-base reveal">
      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="section-label mb-6">About Us</div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-text-primary mb-10">
          Empowering the <span className="text-gradient">Next Generation</span> of Data Scientists.
        </h2>

        <div className="grid gap-16 lg:grid-cols-2 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {content.paragraphs.map((p, index) => (
                <p key={index} className="text-lg text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}
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
          <div className="glass-card p-8 relative overflow-hidden">
            <h3 className="text-xl font-display font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Focus Areas
            </h3>
            <ul className="space-y-2">
              {focus.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-bg-surface/30 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-text-secondary text-sm font-medium">
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
