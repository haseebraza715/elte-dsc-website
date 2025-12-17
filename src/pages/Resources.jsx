import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import Resources from '../components/Resources.jsx'

export default function ResourcesPage() {
  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [])
  
  return (
    <>
      <SEO 
        title="Learning Resources" 
        description="Structured learning paths from beginner to expert level. Choose your level and start your data science journey with curated resources."
        path="/resources"
      />
      <Resources />
    </>
  )
}

