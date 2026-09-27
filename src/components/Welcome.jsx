import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import content from '../content/welcome.json'
import site from '../content/site.json'
import projectsData from '../content/projects.json'
import { scrollToId } from '../lib/scroll.js'
import DataField from './DataField.jsx'

// Wraps the final word of a line (ignoring its punctuation) so it can carry a highlight.
function Emphasis({ text, variant }) {
  const match = text.match(/^(.*\s)(\S+?)([.!?]?)$/)
  if (!match) return text
  const [, lead, word, punct] = match
  return (
    <>
      {lead}
      <span className="nowrap">
        <span className={`hl hl-${variant}`}>
          {word}
          {variant === 'scribble' && (
            <svg className="scribble" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M3 14 C 40 4, 90 4, 120 10 S 180 18, 197 6" />
            </svg>
          )}
        </span>
        {punct}
      </span>
    </>
  )
}

function Tilt({ children, className }) {
  const ref = useRef(null)
  const onMove = (event) => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(x * 8).toFixed(2)}deg`)
  }
  const onLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg')
    ref.current?.style.setProperty('--ry', '0deg')
  }
  return (
    <div ref={ref} className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  )
}

export default function Welcome() {
  const projectCount = (projectsData.projects || []).length
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            ELTE Data Science Club · since 2025
          </p>
          <h1 className="hero-title">
            <Emphasis text={content.titleLead} variant="marker" />
            <br />
            <Emphasis text={content.titleRest} variant="scribble" />
          </h1>
          <p className="hero-lede">{content.subtitle}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={site.applyUrl} target="_blank" rel="noopener noreferrer">
              {content.primaryCta.label}
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              className="btn btn-ghost"
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
          <Tilt className="notebook tilt">
            <div className="notebook-bar" aria-hidden="true">
              <span /><span /><span />
              <em className="mono">clusters.ipynb</em>
              <b className="notebook-hint">Move your cursor through the points</b>
            </div>
            <DataField />
          </Tilt>
          <figure className="polaroid">
            <img
              src="/events/display/hero-1200.jpg"
              srcSet="/events/display/hero-800.jpg 800w, /events/display/hero-1200.jpg 1200w, /events/display/hero-1600.jpg 1600w"
              sizes="(min-width: 960px) 30vw, 90vw"
              width="1600"
              height="1200"
              alt={content.heroCaption}
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>{content.heroCaption}</figcaption>
            <span className="sticker sticker-lime" aria-hidden="true">Beginners welcome</span>
            <span className="sticker sticker-violet" aria-hidden="true">{projectCount} team projects</span>
          </figure>
        </div>
      </div>
    </section>
  )
}
