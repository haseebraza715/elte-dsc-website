import { useEffect, Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

// Lazy load components for better initial load performance
const Welcome = lazy(() => import('../components/Welcome.jsx'))
const About = lazy(() => import('../components/About.jsx'))
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

