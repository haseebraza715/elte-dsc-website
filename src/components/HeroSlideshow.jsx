import { useEffect, useState } from 'react'
import { gallery } from '../lib/gallery.js'

const SLIDE_MS = 6000

// Landscape session photos for the hero. The first uses the responsive hero crops.
const SLIDES = [
  {
    src: '/events/display/hero-1200.jpg',
    srcSet: '/events/display/hero-800.jpg 800w, /events/display/hero-1200.jpg 1200w, /events/display/hero-1600.jpg 1600w',
  },
  ...[6, 7, 8].map((i) => ({ src: gallery[i].src })),
]

// Slow crossfade between real session photos, each drifting gently while shown.
export default function HeroSlideshow({ alt, children }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (paused) return undefined
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % SLIDES.length), SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [active, paused])

  return (
    <figure
      className="hero-photo"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="slides">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            className={`slide${i === active ? ' is-active' : ''}${i % 2 ? ' drift-b' : ' drift-a'}`}
            src={slide.src}
            srcSet={slide.srcSet}
            sizes={slide.srcSet ? '(min-width: 960px) 46vw, 92vw' : undefined}
            width="1600"
            height="1200"
            alt={i === active ? alt : ''}
            aria-hidden={i === active ? undefined : 'true'}
            fetchpriority={i === 0 ? 'high' : undefined}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
      <div className="slide-dots" role="group" aria-label="Choose photo">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`slide-dot${i === active ? ' is-active' : ''}`}
            aria-label={`Photo ${i + 1} of ${SLIDES.length}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
            style={{ '--slide-ms': `${SLIDE_MS}ms`, '--state': paused ? 'paused' : 'running' }}
          />
        ))}
      </div>
      {children}
    </figure>
  )
}
