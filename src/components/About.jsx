import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import about from '../content/about.json'
import eventsData from '../content/events.json'
import projectsData from '../content/projects.json'
import members from '../content/members.json'
import { eventDetails, eventKind, kindLabels, nextEventIndex } from '../lib/programme.js'
import CountUp from './CountUp.jsx'

export default function About() {
  const events = Array.isArray(eventsData.events) ? eventsData.events : []
  const nextIndex = nextEventIndex(events, eventsData.season)
  const [selected, setSelected] = useState(() => Math.max(0, nextIndex))
  const tabRefs = useRef([])
  const event = events[selected]
  const kinds = Array.from(new Set(events.map(eventKind)))

  const stats = [
    { value: events.length, label: `weeks in the ${eventsData.season} programme` },
    { value: (projectsData.projects || []).length, label: 'student projects on GitHub' },
    { value: members.length, label: 'people on the core team' },
    { value: 2025, label: 'the year the club started' },
  ]

  const railRef = useRef(null)

  // Keep the selected week in view when the rail scrolls sideways on small screens.
  useEffect(() => {
    const rail = railRef.current
    const tab = tabRefs.current[selected]
    if (!rail || !tab || rail.scrollWidth <= rail.clientWidth) return
    rail.scrollTo({
      left: tab.offsetLeft - rail.clientWidth / 2 + tab.offsetWidth / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }, [selected])

  const onKeyDown = (e) => {
    // Move from the focused tab; fall back to the selected one.
    const focused = tabRefs.current.indexOf(document.activeElement)
    const from = focused >= 0 ? focused : selected
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (from + 1) % events.length
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (from - 1 + events.length) % events.length
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = events.length - 1
    if (next === null) return
    e.preventDefault()
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="about" className="band">
      <div className="wrap">
        <div className="about-grid">
          <div data-reveal>
            <p className="eyebrow">About the club</p>
            <h2 className="section-title">{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="lede">{paragraph}</p>
            ))}
          </div>
          <dl className="stats" data-reveal>
            {stats.map((stat, i) => (
              <div key={stat.label} className={`stat stat-${i}`}>
                <dt>{stat.label}</dt>
                <dd><CountUp value={stat.value} /></dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="programme" className="programme">
          <div className="programme-top">
            <div>
              <p className="eyebrow">{eventsData.season} programme</p>
              <h3 className="programme-heading">Nine weeks, one project</h3>
            </div>
            <ul className="legend" aria-label="Legend">
              {kinds.map((kind) => (
                <li key={kind}><span className={`swatch kind-${kind}`} aria-hidden="true" />{kindLabels[kind]}</li>
              ))}
            </ul>
          </div>

          <div ref={railRef} className="rail" role="tablist" aria-label="Programme weeks" onKeyDown={onKeyDown}>
            <div className="rail-line" aria-hidden="true">
              <span style={{ width: `${(selected / Math.max(1, events.length - 1)) * 100}%` }} />
            </div>
            {events.map((item, i) => (
              <button
                key={item.id}
                ref={(el) => { tabRefs.current[i] = el }}
                type="button"
                role="tab"
                id={`week-tab-${item.id}`}
                aria-selected={i === selected}
                aria-controls="week-panel"
                tabIndex={i === selected ? 0 : -1}
                className={`rail-stop kind-${eventKind(item)}${i < selected ? ' is-past' : ''}`}
                onClick={() => setSelected(i)}
              >
                <span className="rail-dot" aria-hidden="true">{item.week}</span>
                {i === nextIndex && <span className="rail-next mono" aria-hidden="true">next</span>}
                <span className="rail-date mono">{item.date}</span>
                <span className="sr-only">{item.title}</span>
              </button>
            ))}
          </div>

          {event && (
            <div
              key={event.id}
              id="week-panel"
              role="tabpanel"
              aria-labelledby={`week-tab-${event.id}`}
              className={`week-card kind-${eventKind(event)}`}
            >
              <div className="week-card-head">
                <span className="week-badge mono">Week {event.week} · {event.date}</span>
                {selected === nextIndex && <span className="chip chip-static chip-next">Next up</span>}
                <span className="chip chip-static">{event.format}</span>
                {event.mandatory && <span className="chip chip-static">Required</span>}
              </div>
              <h4 className="week-title">{event.title}</h4>
              {event.theme && <p className="week-theme">{event.theme}</p>}
              <ul className="week-list">
                {eventDetails(event).map((line) => (
                  <li key={line}><Check className="w-4 h-4" aria-hidden="true" />{line}</li>
                ))}
              </ul>
              {event.goal && <p className="week-goal"><strong>Goal</strong> {event.goal}</p>}
              <div className="week-nav">
                <button
                  type="button"
                  className="btn btn-small btn-ghost"
                  onClick={() => setSelected((s) => Math.max(0, s - 1))}
                  disabled={selected === 0}
                >
                  Previous week
                </button>
                <button
                  type="button"
                  className="btn btn-small btn-ghost"
                  onClick={() => setSelected((s) => Math.min(events.length - 1, s + 1))}
                  disabled={selected === events.length - 1}
                >
                  Next week
                </button>
              </div>
            </div>
          )}

          <Link className="arrow-link" to="/event">
            Full agendas and photographs <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
