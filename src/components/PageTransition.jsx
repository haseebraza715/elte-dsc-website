import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitioning, setTransitioning] = useState(false)
  const prevPathRef = useRef(location.pathname)

  useEffect(() => {
    // Skip transition on initial mount
    if (prevPathRef.current === location.pathname) return

    prevPathRef.current = location.pathname
    setTransitioning(true)

    // After fade-out completes, swap content
    const fadeOutTimer = setTimeout(() => {
      setDisplayChildren(children)
      // Allow a frame for new content to mount, then fade in
      requestAnimationFrame(() => {
        setTransitioning(false)
      })
    }, 200)

    return () => clearTimeout(fadeOutTimer)
  }, [location.pathname, children])

  // Update children when they change on the same route (e.g. lazy load resolves)
  useEffect(() => {
    if (!transitioning) {
      setDisplayChildren(children)
    }
  }, [children, transitioning])

  return (
    <div
      className={`page-transition ${transitioning ? 'page-exit' : 'page-enter'}`}
    >
      {displayChildren}
    </div>
  )
}
