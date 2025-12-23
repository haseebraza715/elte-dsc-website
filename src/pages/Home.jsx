import { useEffect, Suspense, lazy, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

// Lazy load components for better initial load performance
const Welcome = lazy(() => import('../components/Welcome.jsx'))
const About = lazy(() => import('../components/About.jsx'))
const Contact = lazy(() => import('../components/Contact.jsx'))

// Cache header height to avoid repeated calculations
const getHeaderHeight = () => {
  if (typeof window === 'undefined') return 80
  return window.innerWidth >= 640 ? 80 : 64
}

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const headerHeightRef = useRef(getHeaderHeight())

  useEffect(() => {
    // Update header height on resize (throttled)
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        headerHeightRef.current = getHeaderHeight()
      }, 150)
    }
    window.addEventListener('resize', handleResize, { passive: true })

    // Optimized scroll function with element check
    const scrollToElement = (elementId, retries = 0) => {
      // Max retries to prevent infinite loops (approx 2 seconds)
      if (retries > 40) return

      const element = document.getElementById(elementId)

      if (element) {
        requestAnimationFrame(() => {
          const headerHeight = headerHeightRef.current
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = Math.max(0, elementTop - headerHeight)
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        })
      } else {
        // Retry if element not found (waiting for lazy load)
        setTimeout(() => scrollToElement(elementId, retries + 1), 50)
      }
    }

    // Handle hash navigation - always check window.location.hash for direct URL access
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash && hash.length > 1) {
        const hashId = hash.substring(1) // Remove #
        // Delay to allow components to render (especially lazy loaded ones)
        setTimeout(() => scrollToElement(hashId), 200)
      } else {
        // No hash - scroll to top (home section)
        setTimeout(() => {
          const homeElement = document.getElementById('home')
          if (homeElement) {
            requestAnimationFrame(() => {
              const headerHeight = headerHeightRef.current
              const elementTop = homeElement.getBoundingClientRect().top + window.pageYOffset
              const offsetPosition = Math.max(0, elementTop - headerHeight)
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            })
          } else {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }

    // Handle hash changes (browser back/forward, direct URL access)
    const handleHashChange = () => {
      handleHashNavigation()
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    // If we navigated here with a targetId in state, scroll to that section
    const targetId = location.state?.targetId
    if (targetId) {
      setTimeout(() => {
        scrollToElement(targetId)
      }, 200)
      // Clear the state so subsequent navigations don't reuse it
      navigate(location.pathname + window.location.search + window.location.hash, { replace: true, state: null })
    }

    // Always check window.location.hash (works for direct URL access and navigation)
    // Use a small delay to ensure components are rendered
    const navigationTimeout = setTimeout(() => {
      handleHashNavigation()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(navigationTimeout)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [location.pathname, location.state, navigate])

  return (
    <main id="main">
      <SEO
        title="Home"
        description="Join the Data Science Club at Eötvös Loránd University. Learn data science, AI, and machine learning through hands-on projects, weekly events, and collaborative learning."
        path="/"
      />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Welcome />
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <About />
          <Suspense fallback={<div className="min-h-[40vh]" />}>
            <Contact />
          </Suspense>
        </Suspense>
      </Suspense>
    </main>
  )
}

