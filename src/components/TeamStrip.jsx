import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import members from '../content/members.json'
import { facePosition, initials, memberImage } from '../lib/members.js'

export default function TeamStrip() {
  return (
    <section className="band" aria-labelledby="team-heading">
      <div className="wrap">
        <div className="team-strip" data-reveal>
          <div>
            <p className="eyebrow">Who runs it</p>
            <h2 className="section-title" id="team-heading">Students, like you</h2>
            <p className="lede">Co-founders, leads and a mentor who keep the sessions going.</p>
            <Link className="btn btn-ghost" to="/members">
              Meet the team <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="avatar-cloud">
            {members.map((person, i) => {
              const src = memberImage(person)
              return (
                <li key={person.name} className={`avatar tone-${i % 5}`} style={{ '--i': i }}>
                  {src ? (
                    <img src={src} alt="" loading="lazy" decoding="async" style={{ objectPosition: facePosition(person.name) }} />
                  ) : (
                    <span>{initials(person.name)}</span>
                  )}
                  <span className="avatar-tip">
                    <strong>{person.name}</strong>
                    {person.role}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
