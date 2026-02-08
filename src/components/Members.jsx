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
      <div className="w-full aspect-[4/5] overflow-hidden bg-[#F3EDE2]">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            style={{ objectPosition: getObjectPosition() }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F3EDE2] text-[#231F1A]/40 text-4xl font-display font-bold">
            {getInitials(person.name)}
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-lg font-display font-bold text-[#231F1A] group-hover:text-[#1F1C18] transition-colors duration-300">
            {person.name}
          </h4>
          {person.role && (
            <p className="text-xs font-semibold text-[#231F1A]/60 uppercase tracking-widest mt-1">
              {person.role}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#231F1A]/10 text-[#231F1A]/60 hover:bg-[#1F1C18] hover:text-[#231F1A] transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 8.98h2.96V21H3.5V8.98ZM9.56 8.98h2.84v1.64h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V21h-2.96v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9.56V8.98Z" />
              </svg>
            </a>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#231F1A]/10 text-[#231F1A]/60 hover:bg-[#F3EDE2] hover:text-[#231F1A] transition-all duration-300"
              aria-label={`Email ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
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
    <section id="members" className="relative py-20 reveal">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-8 h-px bg-[#1F1C18]"></span>
            <span>The Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#231F1A] mb-6">
            Meet the <span className="text-gradient">Innovators</span> behind DSC.
          </h2>
          <p className="text-lg text-[#231F1A]/70 font-medium">
            Dedicated individuals driving innovation and excellence in data science at ELTE.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
