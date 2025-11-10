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
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs - top corners */}
        <div className="absolute -top-36 -left-36 w-[750px] h-[750px] bg-gradient-to-br from-sky-300/35 to-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -top-36 -right-36 w-[750px] h-[750px] bg-gradient-to-bl from-blue-300/35 to-sky-300/30 rounded-full mix-blend-multiply filter blur-3xl" />
        
        {/* Medium gradient orbs - middle section */}
        <div className="absolute top-1/3 left-1/5 w-[600px] h-[600px] bg-gradient-to-r from-sky-200/40 to-blue-200/35 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/3 right-1/5 w-[600px] h-[600px] bg-gradient-to-l from-blue-200/40 to-sky-200/35 rounded-full mix-blend-multiply filter blur-3xl" />
        
        {/* Bottom accent */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-sky-200/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/35 via-transparent to-transparent" />
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
            <div key={event.title} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:border-sky-200 transition-all duration-300">
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


