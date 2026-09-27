import { useEffect, useRef, useState } from 'react'

const COLORS = ['#FF5B3A', '#6C4DFF', '#38B6FF', '#9BD600', '#FFB020']

function makeCentres(count, width, height) {
  return Array.from({ length: count }, (_, i) => ({
    x: width * (0.14 + 0.72 * ((i + 0.5) / count)) + (Math.random() - 0.5) * width * 0.08,
    y: height * (0.25 + Math.random() * 0.5),
  }))
}

// A small live scatter plot. Points belong to clusters, drift toward their centroid,
// and scatter away from the pointer. "Shuffle" re-seeds the clusters.
export default function DataField() {
  const canvasRef = useRef(null)
  const stateRef = useRef(null)
  const [mode, setMode] = useState('cluster')
  const modeRef = useRef(mode)
  modeRef.current = mode

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let frame = 0
    let visible = true
    const pointer = { x: -9999, y: -9999 }

    const seed = () => {
      const k = COLORS.length
      const centres = makeCentres(k, width, height)
      const count = Math.round(Math.min(140, Math.max(60, (width * height) / 5200)))
      const points = Array.from({ length: count }, (_, i) => {
        const c = i % k
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          c,
          ox: (Math.random() - 0.5) * Math.min(width, 520) * 0.2,
          oy: (Math.random() - 0.5) * height * 0.28,
          r: 2.5 + Math.random() * 3,
        }
      })
      stateRef.current = { centres, points }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
      if (reduced) settle()
    }

    const settle = () => {
      const { centres, points } = stateRef.current
      for (const p of points) {
        p.x = centres[p.c].x + p.ox
        p.y = centres[p.c].y + p.oy
      }
      draw()
    }

    const draw = () => {
      const { centres, points } = stateRef.current
      ctx.clearRect(0, 0, width, height)
      const clustered = modeRef.current === 'cluster'
      if (clustered) {
        ctx.lineWidth = 1
        for (const p of points) {
          const centre = centres[p.c]
          ctx.strokeStyle = `${COLORS[p.c]}26`
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(centre.x, centre.y)
          ctx.stroke()
        }
      }
      for (const p of points) {
        ctx.fillStyle = COLORS[p.c]
        ctx.globalAlpha = 0.85
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      if (clustered) {
        for (let i = 0; i < centres.length; i += 1) {
          const { x, y } = centres[i]
          ctx.strokeStyle = COLORS[i]
          ctx.lineWidth = 2.5
          ctx.beginPath()
          ctx.moveTo(x - 7, y - 7)
          ctx.lineTo(x + 7, y + 7)
          ctx.moveTo(x + 7, y - 7)
          ctx.lineTo(x - 7, y + 7)
          ctx.stroke()
        }
      }
    }

    const step = () => {
      frame = requestAnimationFrame(step)
      if (!visible) return
      const { centres, points } = stateRef.current
      const clustered = modeRef.current === 'cluster'
      const t = performance.now() / 1000
      for (const p of points) {
        let tx
        let ty
        if (clustered) {
          tx = centres[p.c].x + p.ox + Math.sin(t + p.oy) * 4
          ty = centres[p.c].y + p.oy + Math.cos(t + p.ox) * 4
        } else {
          tx = p.x + Math.sin(t * 0.7 + p.oy) * 0.6
          ty = p.y + Math.cos(t * 0.6 + p.ox) * 0.6
        }
        p.vx += (tx - p.x) * (clustered ? 0.012 : 0.02)
        p.vy += (ty - p.y) * (clustered ? 0.012 : 0.02)
        const dx = p.x - pointer.x
        const dy = p.y - pointer.y
        const d2 = dx * dx + dy * dy
        if (d2 < 110 * 110) {
          const d = Math.sqrt(d2) || 1
          const force = (110 - d) / 110
          p.vx += (dx / d) * force * 2.2
          p.vy += (dy / d) * force * 2.2
        }
        p.vx *= 0.86
        p.vy *= 0.86
        p.x += p.vx
        p.y += p.vy
      }
      draw()
    }

    const onMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    io.observe(canvas)
    const host = canvas.parentElement
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    if (!reduced) frame = requestAnimationFrame(step)

    stateRef.current.reseed = () => {
      seed()
      if (reduced) settle()
    }
    stateRef.current.redraw = () => {
      if (reduced) {
        if (modeRef.current === 'cluster') settle()
        else draw()
      }
    }

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  useEffect(() => {
    stateRef.current?.redraw?.()
  }, [mode])

  return (
    <div className="datafield">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="datafield-controls">
        <span className="mono">k = {COLORS.length}</span>
        <button
          type="button"
          className="chip"
          aria-pressed={mode === 'cluster'}
          onClick={() => setMode((m) => (m === 'cluster' ? 'scatter' : 'cluster'))}
        >
          {mode === 'cluster' ? 'Scatter points' : 'Cluster points'}
        </button>
        <button type="button" className="chip" onClick={() => stateRef.current?.reseed?.()}>
          Shuffle
        </button>
      </div>
    </div>
  )
}
