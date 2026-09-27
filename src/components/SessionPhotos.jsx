import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Expand } from 'lucide-react'
import { gallery } from '../lib/gallery.js'
import Lightbox from './Lightbox.jsx'

export default function SessionPhotos() {
  const [open, setOpen] = useState(null)
  const move = useCallback((delta) => {
    setOpen((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length))
  }, [])
  const close = useCallback(() => setOpen(null), [])

  const strip = (hidden) => gallery.map((image, index) => (
    <li key={`${image.src}-${hidden ? 'b' : 'a'}`}>
      <button
        type="button"
        className="strip-photo"
        onClick={() => setOpen(index)}
        tabIndex={hidden ? -1 : 0}
        aria-label={hidden ? undefined : `Open photo ${index + 1}: ${image.caption}`}
      >
        <img
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          style={{ objectPosition: image.position }}
          loading="lazy"
          decoding="async"
        />
        <span className="strip-zoom" aria-hidden="true"><Expand className="w-4 h-4" /></span>
      </button>
    </li>
  ))

  return (
    <section className="band sessions" aria-labelledby="sessions-heading">
      <div className="wrap section-head" data-reveal>
        <div>
          <p className="eyebrow">Inside a session</p>
          <h2 className="section-title" id="sessions-heading">Sessions</h2>
        </div>
        <p className="lede">Talks, team work and demo days. Open any photo to see it large.</p>
      </div>
      <div className="strip">
        <ul className="strip-track">{strip(false)}</ul>
        <ul className="strip-track" aria-hidden="true">{strip(true)}</ul>
      </div>
      <div className="wrap">
        <Link className="arrow-link" to="/event">
          All session photographs <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
      {open !== null && <Lightbox images={gallery} index={open} onClose={close} onMove={move} />}
    </section>
  )
}
