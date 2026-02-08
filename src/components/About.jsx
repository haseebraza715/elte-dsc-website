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
    <section id="about" className="relative overflow-hidden pt-24 reveal">
      <div className="section-container relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase">
              <span className="w-8 h-px bg-[#1F1C18]"></span>
              <span>About Us</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
                Empowering the <span className="text-gradient">Next Generation</span> of Data Scientists.
              </h2>
              <div className="space-y-6">
                {content.paragraphs.map((p, index) => (
                  <p key={index} className="text-lg text-[#231F1A]/70 font-medium leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={handleContactClick}
                className="btn-premium px-8 py-3"
              >
                Get in Touch
              </button>
              <a
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#231F1A]/20 text-[#231F1A]/70 font-semibold hover:bg-[#231F1A]/10 hover:text-[#231F1A] transition-all duration-300"
                href="https://www.linkedin.com/company/dscelte"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Content - Focus Areas */}
          <div className="glass-card p-8 lg:p-12 relative overflow-hidden group">
            {/* Subtle card glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1F1C18]/10 rounded-full blur-3xl group-hover:bg-[#1F1C18]/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-[#231F1A] mb-8 flex items-center">
                <span className="w-2 h-2 bg-[#1F1C18] rounded-full mr-3"></span>
                Focus Areas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {focus.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#231F1A]/5 border border-[#231F1A]/5 hover:border-[#1F1C18]/30 hover:bg-[#231F1A]/10 transition-all duration-300 group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#1F1C18]/10 border border-[#1F1C18]/30 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#1F1C18] group-hover/item:border-[#1F1C18] transition-all duration-300">
                      <svg className="w-3 h-3 text-[#1F1C18] group-hover/item:text-[#231F1A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#231F1A]/80 font-semibold text-sm group-hover/item:text-[#231F1A] transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

