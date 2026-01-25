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
    <div className="bg-black border-2 border-white overflow-hidden transition-all duration-300 hover:bg-white hover:text-black group">
      {/* Square Photo */}
      <div className="w-full aspect-square overflow-hidden bg-black relative border-b-2 border-white">
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
          <div className="w-full h-full flex items-center justify-center bg-black text-white group-hover:text-black text-4xl font-bold">
            {getInitials(person.name)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 text-center">
        {/* Name */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-black mb-1.5 sm:mb-2">
          {person.name}
        </h3>

        {/* Role */}
        <div className="mb-2 sm:mb-3 flex justify-center">
          <span className="inline-flex items-center px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold uppercase bg-white text-black group-hover:bg-black group-hover:text-white border-2 border-white group-hover:border-black transition-all duration-300">
            {person.role}
          </span>
        </div>

        {/* Meta Info */}
        {person.meta && (
          <div className="mb-2 text-gray-300 group-hover:text-black text-[11px] sm:text-xs font-medium px-2">
            {person.meta}
          </div>
        )}

        {/* Description */}
        {person.description && (
          <div className="mb-3 sm:mb-4">
            <p className="text-[11px] sm:text-xs text-gray-400 group-hover:text-black leading-relaxed px-2">
              {person.description}
            </p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-3 sm:pt-4 border-t-2 border-white group-hover:border-black">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3 py-2 border border-white text-white group-hover:border-black group-hover:text-black group-hover:bg-transparent bg-transparent hover:bg-black hover:text-white group-hover:hover:bg-white group-hover:hover:text-black transition-all duration-200 font-bold text-[11px] min-h-[36px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              LINKEDIN
            </a>
          )}

          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="w-full sm:w-auto px-3 py-2 border border-white text-white group-hover:border-black group-hover:text-black group-hover:bg-transparent bg-transparent hover:bg-black hover:text-white group-hover:hover:bg-white group-hover:hover:text-black transition-all duration-200 font-bold text-[11px] min-h-[36px] flex items-center justify-center"
              aria-label={`Email ${person.name}`}
            >
              EMAIL
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="relative bg-[#09090b] pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-14 md:pb-18">
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
        <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
