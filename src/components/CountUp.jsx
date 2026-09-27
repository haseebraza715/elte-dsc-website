import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, duration = 1100 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return undefined
    }
    let raf = 0
    const from = value > 1000 ? value - 5 : 0
    setShown(from)
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setShown(Math.round(from + (value - from) * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} aria-label={String(value)}>
      <span aria-hidden="true">{shown}</span>
    </span>
  )
}
