import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import ProjectsComponent from '../components/Projects.jsx'

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <SEO 
        title="Our Projects" 
        description="Explore hands-on data science projects designed to enhance your skills and deepen your understanding of real-world applications. From clustering and visualization to cryptocurrency analysis and climate forecasting."
        path="/project"
      />
      <ProjectsComponent />
    </>
  )
}

