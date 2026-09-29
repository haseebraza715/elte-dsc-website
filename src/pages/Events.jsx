import { useEffect } from 'react'
import SEO from '../components/SEO.jsx'
import Events from '../components/Events.jsx'
import eventsData from '../content/events.json'

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
        description={`Explore the ${eventsData.events.length}-week ${eventsData.season} programme, from kickoff to Demo Day.`}
        path="/event"
      />
      <Events />
    </>
  )
}
