import { useNavigate, useLocation } from 'react-router-dom'
import eventsData from '../content/events.json'

export default function Events() {
  const navigate = useNavigate()
  const location = useLocation()
  const events = Array.isArray(eventsData?.events)
    ? [...eventsData.events]
    : Array.isArray(eventsData)
      ? [...eventsData]
      : []
  const sortedEvents = events.sort((a, b) => {
    const weekA = Number(a?.week ?? 0)
    const weekB = Number(b?.week ?? 0)
    return weekA - weekB
  })

  const renderList = (items, fallback = 'Details coming soon.') => {
    if (!Array.isArray(items) || items.length === 0) {
      return (
        <p className="mt-2 text-white group-hover:text-black text-sm font-semibold uppercase">
          {fallback}
        </p>
      )
    }
    return (
      <ul className="mt-3 space-y-2 text-sm sm:text-base font-semibold uppercase list-disc list-inside">
        {items.map((item, idx) => (
          <li key={`${item}-${idx}`} className="text-white group-hover:text-black">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  const renderSection = (label, items, fallback) => (
    <div className="mt-4">
      <p className="text-white group-hover:text-black leading-relaxed text-base font-bold uppercase">
        {label}
      </p>
      {renderList(items, fallback)}
    </div>
  )

  const renderBadge = (label, className) => (
    <span className={`inline-flex items-center border-2 border-white px-3 py-1 text-xs font-bold uppercase ${className}`}>
      {label}
    </span>
  )

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
            {eventsData?.program ?? 'Events'}
          </h2>
          {eventsData?.season && (
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto font-bold uppercase tracking-widest">
              {eventsData.season}
            </p>
          )}
          <p className="text-xl text-white max-w-3xl mx-auto font-bold border-l-4 border-white pl-6 py-4">
            JOIN US FOR WEEKLY SESSIONS AND COLLABORATIVE LEARNING EXPERIENCES.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {sortedEvents.map((event, index) => {
            const weekNumber = event?.week ?? index + 1
            const isMandatory = event?.mandatory === true
            const format = event?.format
            const status = event?.status
            const isTba = format === 'TBA' || status === 'tba'
            const isGuestSpeaker = format === 'Guest Speaker'
            return (
              <div key={event?.id ?? event?.title ?? `week-${weekNumber}`} className="relative bg-black border-4 border-white p-8 hover:bg-white hover:text-black transition-all duration-300 group">
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="border-2 border-white bg-white text-black px-4 py-2 inline-block font-bold uppercase text-sm">
                        Week {weekNumber}
                      </div>
                      {isMandatory && renderBadge('Mandatory', 'bg-white text-black')}
                      {isTba && renderBadge('TBA (will be updated)', 'bg-white text-black')}
                      {isGuestSpeaker && renderBadge('Guest Speaker', 'bg-white text-black')}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-black mb-2 leading-tight uppercase">{event?.title ?? 'Event'}</h3>
                    {event?.theme && (
                      <p className="text-sm text-white group-hover:text-black font-bold uppercase tracking-wide">
                        Theme: {event.theme}
                      </p>
                    )}
                  </div>
                  {format && (
                    <div className="border-2 border-white bg-black text-white group-hover:bg-white group-hover:text-black px-5 py-2 font-bold ml-4 flex-shrink-0 uppercase">
                      {format}
                    </div>
                  )}
                </div>
                {renderSection('What happens', event?.whatHappens)}
                {renderSection('Deliverables', event?.deliverables)}
                {event?.requirement && (
                  <p className="mt-3 text-white group-hover:text-black text-sm font-bold uppercase">
                    Requirement: {event.requirement}
                  </p>
                )}
                {renderSection('Action items', event?.actionItems)}
                {event?.agenda && renderSection('Agenda', event?.agenda)}
                <div className="mt-4">
                  <p className="text-white group-hover:text-black leading-relaxed text-base font-bold uppercase">
                    Goal
                  </p>
                  <p className="mt-2 text-white group-hover:text-black text-sm font-semibold uppercase">
                    {event?.goal ?? 'Details coming soon.'}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
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
