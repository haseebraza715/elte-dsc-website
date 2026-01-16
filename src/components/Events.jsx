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
    <section id="events" className="relative py-20 md:py-24 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border-4 border-white bg-black px-6 py-3 text-sm font-bold text-white uppercase tracking-wider mb-8">
            EVENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase border-4 border-white p-6 bg-black inline-block">
            EVENTS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto font-bold border-l-4 border-white pl-6 py-4">
            JOIN US FOR WEEKLY SESSIONS AND COLLABORATIVE LEARNING EXPERIENCES.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div key={event.title} className="relative bg-black border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 group">
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="border-2 border-white bg-white text-black px-4 py-2 inline-block mb-4 font-bold uppercase text-sm">
                      {event.date}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-black mb-4 leading-tight uppercase">{event.title}</h3>
                  </div>
                  <div className="border-2 border-white bg-black text-white group-hover:bg-white group-hover:text-black px-5 py-2 font-bold ml-4 flex-shrink-0 uppercase">
                    WEEK {index + 1}
                  </div>
                </div>
                <p className="text-white group-hover:text-black leading-relaxed text-base font-bold uppercase">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-10 py-5 bg-white border-4 border-white text-black font-bold text-lg uppercase tracking-wider transition-all hover:bg-black hover:text-white focus:outline-none"
          >
            JOIN OUR EVENTS
          </button>
        </div>
      </div>
    </section>
  )
}

