import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ images, index, onClose, onMove }) {
  const closeRef = useRef(null)
  const image = images[index]

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previousFocus?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onMove(1)
      if (event.key === 'ArrowLeft') onMove(-1)
      if (event.key === 'Tab') {
        const focusable = Array.from(document.querySelectorAll('.lightbox button'))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onMove])

  if (!image) return null

  // Portal to <body> so the viewer sits above the fixed header, not inside <main>'s layer.
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose} aria-label="Close photo">
        <X className="w-5 h-5" />
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => { event.stopPropagation(); onMove(-1) }}
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
        <img src={image.src} alt={image.caption} width={image.width} height={image.height} />
        <figcaption>
          {image.caption}
          <span className="mono">{index + 1} / {images.length}</span>
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(event) => { event.stopPropagation(); onMove(1) }}
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>,
    document.body,
  )
}
