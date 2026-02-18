import { useState } from 'react'
import members from '../content/members.json'
// Import all member images
import ayushImage from '../images/ayush.jpeg'
import haseebImage from '../images/haseeb.png'
import itiImage from '../images/iti.jpg'

// Map image paths from JSON to imported images
const imageMap = {
  '/src/images/ayush.jpeg': ayushImage,
  '/src/images/haseeb.png': haseebImage,
  '/src/images/iti.jpg': itiImage,
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function MemberCard({ person, index }) {
  const [imageError, setImageError] = useState(false)
  const imageSrc = person.image ? imageMap[person.image] || null : null

  const getObjectPosition = () => {
    if (person.name === 'Kumar Ayush') return 'center top'
    if (person.name === 'Haseeb Raza') return 'center top'
    return 'center center'
  }

  // Calculate delay based on index for staggered effect
  const delayClass = `delay-${(index % 4) + 1}`

  return (
    <div className={`glass-card overflow-hidden group reveal ${delayClass}`}>
      {/* Image Area */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-surface">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            style={{ objectPosition: getObjectPosition() }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-bg-surface text-text-muted text-4xl font-display font-bold">
            {getInitials(person.name)}
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Role badge */}
        {person.role && (
          <div className="absolute left-4 bottom-4 rounded-full bg-accent/20 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
            {person.role}
          </div>
        )}
      </div>

      {/* Info Area */}
      <div className="p-5 space-y-4">
        <div>
          <h4 className="text-base font-display font-bold text-text-primary">
            {person.name}
          </h4>
          <p className="text-sm text-text-secondary mt-1">
            {person.role || 'DSC Member'}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-glass px-3 py-1.5 text-[11px] font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label={`LinkedIn profile of ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 8.98h2.96V21H3.5V8.98ZM9.56 8.98h2.84v1.64h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V21h-2.96v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9.56V8.98Z" />
              </svg>
              LinkedIn
            </a>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-glass px-3 py-1.5 text-[11px] font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label={`Email ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm0 2.6V17h16V9.6l-8 5-8-5Z" />
              </svg>
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="relative pt-32 pb-24 sm:pb-32 bg-bg-base">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-label mb-4 reveal">The Team</div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-6 reveal delay-1">
            Meet the <span className="text-gradient">Innovators</span> behind DSC.
          </h2>
          <p className="text-lg text-text-secondary reveal delay-2">
            Dedicated individuals driving innovation and excellence in data science at ELTE.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
