import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import Members from '../components/Members.jsx'

export default function MembersPage() {
  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [])
  
  return (
    <>
      <SEO 
        title="Our Team" 
        description="Meet the dedicated members of the Data Science Club at ELTE. Connect with mentors, active members, and passionate data science enthusiasts."
        path="/members"
      />
      <Members />
    </>
  )
}

