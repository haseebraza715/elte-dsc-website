import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import WeeklyChallenges from '../components/WeeklyChallenges.jsx'

export default function Challenges() {
  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [])
  
  return (
    <>
      <SEO 
        title="Weekly Coding Challenges" 
        description="Sharpen your Python and pandas skills with our curated coding challenges from StrataScratch. From beginner-friendly problems to advanced analytics."
        path="/challenges"
      />
      <WeeklyChallenges />
    </>
  )
}

