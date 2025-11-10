import { useEffect } from 'react'
import WeeklyChallenges from '../components/WeeklyChallenges.jsx'

export default function Challenges() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <WeeklyChallenges />
}

