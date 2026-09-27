import { useCallback, useState } from 'react'
import { ChevronDown, Expand } from 'lucide-react'
import eventsData from '../content/events.json'
import { gallery } from '../lib/gallery.js'
import { eventKind, kindLabels } from '../lib/programme.js'
import FilterChips from './FilterChips.jsx'
import Lightbox from './Lightbox.jsx'
import PageHero from './PageHero.jsx'

function DetailList({ heading, items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="event-detail">
      <h3>{heading}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function EventCard({ event, open, onToggle }) {
  const kind = eventKind(event)
  const panelId = `${event.id}-details`
  return (
    <li className={`event-card kind-${kind}${open ? ' is-open' : ''}`}>
      <button type="button" className="event-summary" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        <span className="event-when">
          <span className="event-date">{event.date}</span>
          <span className="event-week mono">Week {event.week}</span>
        </span>
        <span className="event-main">
          <span className="event-title">{event.title}</span>
          <span className="event-meta">
            <span className={`chip chip-static kind-chip kind-${kind}`}>{kindLabels[kind]}</span>
            {event.theme && <span className="event-theme">{event.theme}</span>}
          </span>
        </span>
        <ChevronDown className="event-chevron w-5 h-5" aria-hidden="true" />
      </button>
      <div id={panelId} className="event-body" hidden={!open}>
        <p className="event-facts">
          {event.format}
          {event.mandatory ? ' · Required' : ''}
          {event.requirement ? ` · ${event.requirement}` : ''}
          {event.status ? ` · ${event.status.charAt(0).toUpperCase()}${event.status.slice(1)}` : ''}
        </p>
        <div className="event-details">
          {event.agenda ? (
            <>
              <DetailList heading="Agenda" items={event.agenda} />
              <DetailList heading="What happens" items={event.whatHappens} />
            </>
          ) : (
            <DetailList heading="Agenda" items={event.whatHappens} />
          )}
          <DetailList heading="Deliverables" items={event.deliverables} />
          <DetailList heading="Action items" items={event.actionItems} />
        </div>
        {event.goal && <p className="event-goal"><strong>Goal</strong> {event.goal}</p>}
      </div>
    </li>
  )
}

export default function Events() {
  const events = Array.isArray(eventsData.events) ? eventsData.events : []
  const [filter, setFilter] = useState('all')
  const [openIds, setOpenIds] = useState(() => new Set(events[0] ? [events[0].id] : []))
  const [photo, setPhoto] = useState(null)

  const kinds = Array.from(new Set(events.map(eventKind)))
  const options = [
    { value: 'all', label: 'All weeks', count: events.length },
    ...kinds.map((kind) => ({
      value: kind,
      label: kindLabels[kind],
      count: events.filter((e) => eventKind(e) === kind).length,
    })),
  ]
  const shown = filter === 'all' ? events : events.filter((e) => eventKind(e) === filter)
  const allOpen = shown.every((e) => openIds.has(e.id))

  const toggle = (id) => setOpenIds((prev) => {
    const next = new Set(prev)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    return next
  })
  const toggleAll = () => setOpenIds(allOpen ? new Set() : new Set(shown.map((e) => e.id)))

  const move = useCallback((delta) => {
    setPhoto((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length))
  }, [])
  const close = useCallback(() => setPhoto(null), [])

  return (
    <section id="events" className="page">
      <div className="wrap">
        <PageHero
          eyebrow={eventsData.program}
          title={`${eventsData.season} programme`}
          lede="From kickoff to Demo Day, week by week. Open a week to see its agenda and goal."
          tone={1}
        />

        <div className="toolbar">
          <FilterChips label="Filter weeks" options={options} value={filter} onChange={setFilter} />
          <button type="button" className="btn btn-small btn-ghost" onClick={toggleAll}>
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <ol className="event-list">
          {shown.map((event) => (
            <EventCard key={event.id} event={event} open={openIds.has(event.id)} onToggle={() => toggle(event.id)} />
          ))}
        </ol>

        <div className="gallery-note">
          <h2 className="section-title">Session photographs</h2>
          <p className="lede">Photographs from club sessions.</p>
          <ul className="gallery">
            {gallery.map((image, index) => (
              <li key={image.src} data-reveal>
                <button
                  type="button"
                  className="gallery-frame"
                  onClick={() => setPhoto(index)}
                  aria-label={`Open ${image.caption.toLowerCase()}, photograph ${index + 1}`}
                >
                  <img
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt=""
                    style={{ objectPosition: image.position }}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="strip-zoom" aria-hidden="true"><Expand className="w-4 h-4" /></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {photo !== null && <Lightbox images={gallery} index={photo} onClose={close} onMove={move} />}
    </section>
  )
}
