import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Welcome from '../components/Welcome.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'

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
      <Welcome />
      <About />
      <Contact />
    </main>
  )
}

