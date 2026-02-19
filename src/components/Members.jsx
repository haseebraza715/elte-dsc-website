import { useState } from 'react'
import members from '../content/members.json'
// Import all member images
import ayushImage from '../images/members/ayush.jpeg'
import haseebImage from '../images/members/haseeb.png'
import itiImage from '../images/members/iti.jpg'
import aminaImage from '../images/members/amina.jpeg'
import nazrinImage from '../images/members/nazrin.jpeg'
import abaidullahImage from '../images/members/abaidullah.jpeg'
import emanImage from '../images/members/eman.jpeg'

// Map image paths from JSON to imported images
const imageMap = {
  '/src/images/members/ayush.jpeg': ayushImage,
  '/src/images/members/haseeb.png': haseebImage,
  '/src/images/members/iti.jpg': itiImage,
  '/src/images/members/amina.jpeg': aminaImage,
  '/src/images/members/nazrin.jpeg': nazrinImage,
  '/src/images/members/abaidullah.jpeg': abaidullahImage,
  '/src/images/members/eman.jpeg': emanImage,
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

  const getImageStyle = () => {
    if (person.name === 'Kumar Ayush') return { objectPosition: 'center 40%', transform: 'scale(1.08)' }
    if (person.name === 'Haseeb Raza') return { objectPosition: 'center 20%', transform: 'scale(1.24)' }
    if (person.name === 'Podder Itilekha') return { objectPosition: 'center 24%', transform: 'scale(1.08)' }
    if (person.name === 'Eman Aftab') return { objectPosition: 'center 30%', transform: 'scale(1.04)' }
    if (person.name === 'Abaidullah Asif') return { objectPosition: 'center 24%', transform: 'scale(1.08)' }
    if (person.name === 'Amina Tynybekova') return { objectPosition: 'center 40%', transform: 'scale(1.04)' }
    if (person.name === 'Nazrin Majidova') return { objectPosition: 'center 42%', transform: 'scale(1.04)' }
    return { objectPosition: 'center center', transform: 'scale(1.05)' }
  }

  // Calculate delay based on index for staggered effect
  const delayClass = `delay-${(index % 4) + 1}`

  return (
    <div className={`overflow-hidden rounded-2xl border border-[#2f4f7f] bg-[#081a34] shadow-[0_8px_30px_rgba(3,12,28,0.35)] group reveal ${delayClass}`}>
      {/* Image Area */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-bg-surface">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover brightness-[1.02] contrast-105 saturate-110 group-hover:scale-[1.27] transition-all duration-700"
            style={getImageStyle()}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-bg-surface text-text-muted text-4xl font-display font-bold">
            {getInitials(person.name)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
      </div>

      {/* Info Area */}
      <div
        className="p-3 space-y-2 border-t border-[#31558a]"
        style={{ background: 'linear-gradient(135deg, #06162f 0%, #0a2a57 100%)' }}
      >
        <div>
          <h4 className="text-[16px] leading-tight font-display font-bold" style={{ color: '#F3F8FF' }}>
            {person.name}
          </h4>
          <p className="text-sm mt-0.5" style={{ color: '#C6D8F5' }}>
            {person.role || 'DSC Member'}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 pt-0.5">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#5A84BE] hover:text-white hover:bg-[#2563EB]/25 hover:border-[#8CB8F8] transition-all duration-300"
              style={{ color: '#D6E5FA' }}
              aria-label={`LinkedIn profile of ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 8.98h2.96V21H3.5V8.98ZM9.56 8.98h2.84v1.64h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V21h-2.96v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9.56V8.98Z" />
              </svg>
            </a>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#5A84BE] hover:text-white hover:bg-[#2563EB]/25 hover:border-[#8CB8F8] transition-all duration-300"
              style={{ color: '#D6E5FA' }}
              aria-label={`Email ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
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
        <div className="grid items-start gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
