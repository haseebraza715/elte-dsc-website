import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, ArrowUpRight, Clock, MapPin } from 'lucide-react'
import content from '../content/welcome.json'
import site from '../content/site.json'
import eventsData from '../content/events.json'
import { scrollToId } from '../lib/scroll.js'
import { nextEventIndex } from '../lib/programme.js'
import HeroSlideshow from './HeroSlideshow.jsx'

function NextSession() {
  const events = eventsData.events || []
  const event = events[nextEventIndex(events, eventsData.season)]
  if (!event) return null
  return (
    <Link className="hero-fact hero-fact-next" to="/event">
      <span className="pulse-dot" aria-hidden="true" />
      <span>
        Next session <strong>{event.date}</strong> · {event.title}
      </span>
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  )
}

// Each word rises out of its own mask, one after another; the last word gets a
// hand-drawn underline once it lands.
function AnimatedWords({ text }) {
  const words = text.split(' ')
  return words.map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span className="w-mask" aria-hidden="true">
        <span className="w" style={{ '--d': i + 1 }}>
          {word}
          {i === words.length - 1 && (
            <svg className="scribble hero-scribble" viewBox="0 0 200 20" preserveAspectRatio="none">
              <path d="M3 14 C 40 4, 90 4, 120 10 S 180 18, 197 6" />
            </svg>
          )}
        </span>
      </span>
      {i < words.length - 1 ? ' ' : null}
    </Fragment>
  ))
}

export default function Welcome() {
  const room = site.room.replace(/^ELTE South Building /, '')

  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={{ '--d': 0 }}>{content.eyebrow}</p>
          <h1 className="hero-title" aria-label={content.title}>
            <AnimatedWords text={content.title} />
          </h1>
          <p className="hero-lede hero-in" style={{ '--d': 6 }}>{content.subtitle}</p>

          <ul className="hero-facts hero-in-list" style={{ '--d': 7 }}>
            <li className="hero-fact">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {site.meetingDay}, {site.meetingTime}
            </li>
            <li className="hero-fact" title={site.room}>
              <MapPin className="w-4 h-4" aria-hidden="true" />
              South Building, {room}
            </li>
            <li><NextSession /></li>
          </ul>

          <div className="hero-actions hero-in" style={{ '--d': 10 }}>
            <a className="btn btn-primary btn-large" href={site.applyUrl} target="_blank" rel="noopener noreferrer">
              {content.primaryCta.label}
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              className="btn btn-ghost btn-large"
              href={content.secondaryCta.href}
              onClick={(event) => {
                event.preventDefault()
                const hash = content.secondaryCta.href
                if (window.location.hash !== hash) {
                  window.history.pushState(null, '', hash)
                }
                scrollToId(hash.slice(1))
              }}
            >
              {content.secondaryCta.label}
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <HeroSlideshow alt={content.heroCaption}>
            <figcaption>
              <span className="hero-tagline">{content.tagline}</span>
            </figcaption>
          </HeroSlideshow>
        </div>
      </div>
    </section>
  )
}
