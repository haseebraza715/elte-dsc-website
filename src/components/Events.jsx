import events from '../content/events.json'

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
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
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:shadow-lg hover:shadow-sky-200"
          >
            Join Our Events
          </a>
        </div>
      </div>
    </section>
  )
}


