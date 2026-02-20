import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import Events from '../components/Events.jsx'

export default function EventsPage() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    })
  }, [])

  return (
    <>
      <SEO
        title="Events"
        description="Explore the 9-week Spring 2026 program. From kickoff to demo day, every week counts."
        path="/event"
      />
      <Events />
    </>
  )
}
