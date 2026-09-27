import { useState } from 'react'
import { Linkedin, Mail } from 'lucide-react'
import members from '../content/members.json'
import { facePosition, initials, memberImage } from '../lib/members.js'
import PageHero from './PageHero.jsx'

function MemberCard({ person, index }) {
  const [imageError, setImageError] = useState(false)
  const imageSrc = memberImage(person)

  return (
    <article className={`member-card tone-${index % 5}`} data-reveal>
      <div className="member-photo">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt=""
            style={{ objectPosition: facePosition(person.name) }}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="member-fallback">{initials(person.name)}</div>
        )}
        <span className="member-role">{person.role}</span>
      </div>
      <div className="member-body">
        <h2 className="member-name">{person.name}</h2>
        {(person.link || person.email) && (
          <div className="member-links">
            {person.link && (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                aria-label={`${person.name} on LinkedIn`}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {person.email && (
              <a href={`mailto:${person.email}`} className="icon-link" aria-label={`Email ${person.name}`}>
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Members() {
  return (
    <section id="members" className="page">
      <div className="wrap">
        <PageHero
          eyebrow="The people"
          title="Meet the core team"
          lede="Students and mentors at the Data Science Club."
          tone={3}
        />
        <div className="member-grid">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
