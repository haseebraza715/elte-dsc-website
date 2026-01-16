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
      className="relative overflow-hidden bg-black"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[85vh] flex items-center justify-center py-12 sm:py-16 md:py-20">
          <div className="w-full max-w-5xl flex flex-col items-center space-y-10">

            {/* Badge */}
            <div className="inline-flex items-center border-2 border-white bg-black px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              ELTE DATA SCIENCE COMMUNITY
            </div>

            {/* Title */}
            <div className="w-full text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight tracking-tight uppercase border-4 border-white p-6 sm:p-8 bg-black">
                {content.title}
              </h1>
              <p className="text-lg sm:text-xl text-white leading-relaxed font-bold max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
              <button
                onClick={() => handleCtaClick(content.primaryCta.href)}
                className="w-full sm:w-auto bg-white border-4 border-white text-black px-8 py-4 text-base font-bold uppercase tracking-wider transition-all hover:bg-black hover:text-white"
              >
                {content.primaryCta.label}
              </button>

              <button
                onClick={() => handleCtaClick(content.secondaryCta.href)}
                className="w-full sm:w-auto bg-black border-4 border-white text-white px-8 py-4 text-base font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-black"
              >
                {content.secondaryCta.label}
              </button>
            </div>

            {/* Stats Grid */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-black border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all group">
                <div className="font-bold text-xs text-white group-hover:text-black mb-2 uppercase tracking-wider">COMMUNITY</div>
                <div className="text-4xl font-bold text-white group-hover:text-black mb-1">40+</div>
                <div className="text-xs text-white group-hover:text-black font-bold uppercase">ACTIVE MEMBERS</div>
              </div>

              <div className="bg-black border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all group">
                <div className="font-bold text-xs text-white group-hover:text-black mb-2 uppercase tracking-wider">PROJECTS</div>
                <div className="text-4xl font-bold text-white group-hover:text-black mb-1">4+</div>
                <div className="text-xs text-white group-hover:text-black font-bold uppercase">THIS SEMESTER</div>
              </div>

              <div className="bg-black border-2 border-white p-6 text-center hover:bg-white hover:text-black transition-all group">
                <div className="font-bold text-xs text-white group-hover:text-black mb-2 uppercase tracking-wider">SESSIONS</div>
                <div className="text-4xl font-bold text-white group-hover:text-black mb-1">WEEKLY</div>
                <div className="text-xs text-white group-hover:text-black font-bold uppercase">TALKS + WORKSHOPS</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
