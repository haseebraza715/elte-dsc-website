import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from './PageHero.jsx'

export default function WeeklyChallenges() {
  return (
    <section id="challenges" className="page">
      <div className="wrap">
        <PageHero eyebrow="Coming soon" title="Weekly challenges" tone={4} />
        <div className="empty-card">
          <p className="empty-note">
            The agenda for the upcoming semester is being curated. Check back soon for the challenge schedule.
          </p>
          <div className="empty-actions">
            <Link className="btn btn-primary" to="/resources">Browse resources <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
            <Link className="btn btn-ghost" to="/project">See student projects</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
