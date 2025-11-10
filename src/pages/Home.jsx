import { Suspense, lazy, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Welcome = lazy(() => import('../components/Welcome.jsx'))
const About = lazy(() => import('../components/About.jsx'))
const Events = lazy(() => import('../components/Events.jsx'))
const Contact = lazy(() => import('../components/Contact.jsx'))

export default function Home() {
  const location = useLocation()
  
  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0)
    }
  }, [location])
  
  return (
    <main id="main">
      <Suspense fallback={<div className="mx-auto max-w-content px-4 py-8 text-slate-700">Loading…</div>}>
        <Welcome />
        <About />
        <Events />
        <Contact />
      </Suspense>
    </main>
  )
}

