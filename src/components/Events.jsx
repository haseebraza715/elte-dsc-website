import { useNavigate, useLocation } from 'react-router-dom'
import events from '../content/events.json'

export default function Events() {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact')
    } else {
      navigate('/#contact', { replace: true })
      setTimeout(() => {
        const element = document.getElementById('contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }
  
  return (
    <section id="events" className="relative py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        {/* Large gradient orbs - top corners (only 2, one animated) */}
        <div className="absolute -top-36 -left-36 w-[750px] h-[750px] bg-gradient-to-br from-sky-300/30 via-blue-300/25 to-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[750px] h-[750px] bg-gradient-to-bl from-blue-300/30 via-sky-300/25 to-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Bottom accent (static) */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-t from-sky-300/20 via-blue-300/25 to-indigo-300/15 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/30 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Events
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us for weekly sessions and collaborative learning experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div key={event.title} className="relative bg-gradient-to-br from-slate-50/80 via-white/90 to-sky-50/50 border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-sky-200 transition-all duration-300 overflow-hidden">
              {/* Low gradient background matching website style - Optimized */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl" style={{ transform: 'translateZ(0)' }}>
                {/* Large gradient orbs - top corners (only 2, one animated) */}
                <div className="absolute -top-16 -left-16 w-[250px] h-[250px] bg-gradient-to-br from-sky-300/15 via-blue-300/12 to-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
                <div className="absolute -top-16 -right-16 w-[250px] h-[250px] bg-gradient-to-bl from-blue-300/15 via-sky-300/12 to-cyan-300/10 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-50/15 via-transparent to-transparent rounded-xl" style={{ transform: 'translateZ(0)' }} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="text-base font-semibold text-sky-600 mb-3">{event.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{event.title}</h3>
                  </div>
                  <div className="text-sm text-slate-600 bg-sky-50 px-4 py-2 rounded-full border border-sky-100 ml-4 flex-shrink-0">
                    Week {index + 1}
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-base">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:shadow-lg hover:shadow-sky-200"
          >
            Join Our Events
          </button>
        </div>
      </div>
    </section>
  )
}


