import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/about.json'

export default function About() {
  const focus = content.focus
  const navigate = useNavigate()
  const location = useLocation()

  // Cache header height
  const getHeaderHeight = () => {
    if (typeof window === 'undefined') return 80
    return window.innerWidth >= 640 ? 80 : 64
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
    <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border-4 border-white bg-black px-6 py-3 text-sm font-bold text-white uppercase tracking-wider">
              ABOUT
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-none tracking-tight uppercase border-4 border-white p-6 bg-black">
              {content.heading}
            </h2>
            <div className="space-y-6 border-l-4 border-white pl-6">
              {content.paragraphs.map((p, index) => (
                <p key={index} className="text-white leading-relaxed text-lg sm:text-xl font-bold">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={handleContactClick}
                className="group relative inline-flex items-center justify-center gap-3 bg-white border-4 border-white text-black px-10 py-5 font-bold uppercase tracking-wider transition-all hover:bg-black hover:text-white focus:outline-none"
              >
                CONTACT US
              </button>
              <a
                className="group relative inline-flex items-center justify-center gap-3 bg-black border-4 border-white text-white px-10 py-5 font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-black focus:outline-none"
                href="https://www.linkedin.com/company/dscelte"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </div>
          </div>

          {/* Right Content - Focus Areas */}
          <div className="relative bg-black border-4 border-white p-8 lg:p-10">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative border-4 border-white bg-white text-black px-4 py-2">
                  <h3 className="text-2xl lg:text-3xl font-bold uppercase">FOCUS AREAS</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {focus.map((item, index) => (
                  <li
                    key={index}
                    className="group relative flex items-start gap-4 p-4 bg-black border-2 border-white hover:bg-white hover:text-black transition-all duration-300 cursor-default"
                  >
                    <div className="relative border-2 border-white bg-white text-black w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <span className="text-white text-sm md:text-base font-bold leading-relaxed pt-1 group-hover:text-black transition-colors duration-300 uppercase">{item}</span>
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


