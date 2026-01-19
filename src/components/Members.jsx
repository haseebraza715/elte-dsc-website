import { useState } from 'react'
import members from '../content/members.json'
// Import all member images
import ayushImage from '../images/ayush.jpeg'
import haseebImage from '../images/haseeb.jpg'
import itiImage from '../images/iti.jpg'

// Map image paths from JSON to imported images
const imageMap = {
  '/src/images/ayush.jpeg': ayushImage,
  '/src/images/haseeb.jpg': haseebImage,
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
      return 'center 15%' // Show face for Haseeb
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
      <div className="p-4 sm:p-5 md:p-6 text-center">
        {/* Name */}
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-black mb-2 sm:mb-3">
          {person.name}
        </h3>

        {/* Role */}
        <div className="mb-2 sm:mb-3 flex justify-center">
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase bg-white text-black group-hover:bg-black group-hover:text-white border-2 border-white group-hover:border-black transition-all duration-300">
            {person.role}
          </span>
        </div>

        {/* Meta Info */}
        {person.meta && (
          <div className="mb-2 sm:mb-3 text-gray-300 group-hover:text-black text-xs sm:text-sm font-medium px-2">
            {person.meta}
          </div>
        )}

        {/* Description */}
        {person.description && (
          <div className="mb-4 sm:mb-5">
            <p className="text-xs sm:text-sm text-gray-400 group-hover:text-black leading-relaxed px-2">
              {person.description}
            </p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t-2 border-white group-hover:border-black">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 border border-white text-white group-hover:border-black group-hover:text-black group-hover:bg-transparent bg-transparent hover:bg-black hover:text-white group-hover:hover:bg-white group-hover:hover:text-black transition-all duration-200 font-bold text-xs min-h-[40px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              LINKEDIN
            </a>
          )}

          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="w-full sm:w-auto px-4 py-2 border border-white text-white group-hover:border-black group-hover:text-black group-hover:bg-transparent bg-transparent hover:bg-black hover:text-white group-hover:hover:bg-white group-hover:hover:text-black transition-all duration-200 font-bold text-xs min-h-[40px] flex items-center justify-center"
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
    <section id="members" className="relative bg-[#09090b] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Meet Our Team
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto px-4">
            Dedicated individuals driving innovation and excellence in data science
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
