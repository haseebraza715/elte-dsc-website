import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import Members from '../components/Members.jsx'

export default function MembersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
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

