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

  const renderList = (items, fallback = 'TBA') => {
    if (!Array.isArray(items) || items.length === 0) {
      return (
        <p className="mt-1 text-white group-hover:text-black text-xs font-semibold uppercase">
          {fallback}
        </p>
      )
    }
    return (
      <ul className="mt-1 space-y-1 text-xs font-semibold uppercase list-disc list-inside">
        {items.map((item, idx) => (
          <li key={`${item}-${idx}`} className="text-white group-hover:text-black">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  const renderSection = (label, items, fallback) => (
    <div className="mt-2">
      <p className="text-white group-hover:text-black text-xs font-bold uppercase">
        {label}:
      </p>
      {renderList(items, fallback)}
    </div>
  )

  const renderBadge = (label, className) => (
    <span className={`inline-flex items-center border border-white px-2 py-0.5 text-xs font-bold uppercase ${className}`}>
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
    <section id="events" className="relative pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-16 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 border-2 border-white bg-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white uppercase tracking-wider mb-3 sm:mb-4">
            EVENTS
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 uppercase border-2 border-white p-2 sm:p-3 bg-black inline-block">
            {eventsData?.program ?? 'Events'}
          </h2>
          {eventsData?.season && (
            <p className="text-xs sm:text-sm text-white max-w-3xl mx-auto font-bold uppercase tracking-wide px-2">
              {eventsData.season}
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event, index) => {
            const weekNumber = event?.week ?? index + 1
            const isMandatory = event?.mandatory === true
            const format = event?.format
            const status = event?.status
            const isTba = format === 'TBA' || status === 'tba'
            const isGuestSpeaker = format === 'Guest Speaker'
            return (
              <div key={event?.id ?? event?.title ?? `week-${weekNumber}`} className="relative bg-black border-2 border-white p-3 sm:p-4 hover:bg-white hover:text-black transition-all duration-300 group">
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
                      <div className="border border-white bg-white text-black px-1.5 sm:px-2 py-0.5 sm:py-1 inline-block font-bold uppercase text-xs">
                        Week {weekNumber}
                      </div>
                      {isMandatory && renderBadge('Mandatory', 'bg-white text-black')}
                      {isTba && renderBadge('TBA', 'bg-white text-black')}
                      {isGuestSpeaker && renderBadge('Guest', 'bg-white text-black')}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-black mb-1 leading-tight uppercase break-words">{event?.title ?? 'Event'}</h3>
                    {format && format !== 'TBA' && (
                      <p className="text-xs text-white group-hover:text-black font-semibold uppercase">
                        {format}
                      </p>
                    )}
                  </div>
                </div>
                {event?.whatHappens && event.whatHappens.length > 0 && renderSection('What', event.whatHappens)}
                {event?.deliverables && event.deliverables.length > 0 && renderSection('Deliverables', event.deliverables)}
                {event?.requirement && (
                  <p className="mt-2 text-white group-hover:text-black text-xs font-bold uppercase">
                    {event.requirement}
                  </p>
                )}
                {event?.actionItems && event.actionItems.length > 0 && renderSection('Actions', event.actionItems)}
                {event?.agenda && event.agenda.length > 0 && renderSection('Agenda', event.agenda)}
                {event?.goal && (
                  <div className="mt-2">
                    <p className="text-white group-hover:text-black text-xs font-bold uppercase">
                      Goal:
                    </p>
                    <p className="mt-1 text-white group-hover:text-black text-xs font-semibold uppercase">
                      {event.goal}
                    </p>
                  </div>
                )}
              </div>
            </div>
            )
          })}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <button
            onClick={handleContactClick}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-black hover:text-white focus:outline-none"
          >
            JOIN OUR EVENTS
          </button>
        </div>
      </div>
    </section>
  )
}
