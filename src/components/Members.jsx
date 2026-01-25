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

function MemberCard({ person }) {
  const [imageError, setImageError] = useState(false)
  const imageSrc = person.image ? imageMap[person.image] || null : null

  // Get object position for each person to show their face properly
  const getObjectPosition = () => {
    if (person.name === 'Kumar Ayush') {
      return 'center top' // Show face at top center for Ayush
    }
    if (person.name === 'Haseeb Raza') {
      return 'center top' // Headshot - show face at top center for Haseeb
    }
    return 'center center' // Default center for others
  }

  return (
    <div className="group bg-black border border-white/40 overflow-hidden transition-all duration-300 hover:border-white/80">
      <div className="w-full aspect-square overflow-hidden bg-black border-b border-white/20">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            style={{ objectPosition: getObjectPosition() }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black text-white text-3xl font-bold">
            {getInitials(person.name)}
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4">
        <div className="text-sm sm:text-base font-bold text-white">
          {person.name}
        </div>
        {person.role && (
          <div className="text-[11px] sm:text-xs text-white/70 mt-1">
            {person.role}
          </div>
        )}
        <div className="mt-3 flex items-center gap-2">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:border-white hover:bg-white hover:text-black transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 8.98h2.96V21H3.5V8.98ZM9.56 8.98h2.84v1.64h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V21h-2.96v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9.56V8.98Z" />
              </svg>
            </a>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="w-8 h-8 flex items-center justify-center border border-white/50 text-white hover:border-white hover:bg-white hover:text-black transition-all"
              aria-label={`Email ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm0 2.6V17h16V9.6l-8 5-8-5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="relative bg-black pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3">
            Meet Our Team
          </h1>
          <p className="text-sm sm:text-lg text-zinc-400 max-w-2xl mx-auto px-4">
            Dedicated individuals driving innovation and excellence in data science
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
