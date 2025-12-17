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
    <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Square Photo */}
      <div className="w-full aspect-square overflow-hidden bg-slate-900 relative">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: getObjectPosition() }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 text-white text-4xl font-bold">
            {getInitials(person.name)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-3">
          {person.name}
        </h3>

        {/* Role */}
        <div className="mb-3 flex justify-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase bg-violet-600/20 text-violet-400 border border-violet-600/30">
            {person.role}
          </span>
        </div>

        {/* Meta Info */}
        {person.meta && (
          <div className="mb-3 text-slate-300 text-sm font-medium">
            {person.meta}
          </div>
        )}

        {/* Description */}
        {person.description && (
          <div className="mb-5">
            <p className="text-sm text-slate-400 leading-relaxed">
              {person.description}
            </p>
          </div>
        )}

        {/* Social Links */}
        <div className="flex justify-center items-center gap-3 pt-4 border-t border-slate-700/50">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}

          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-200 hover:scale-110"
              aria-label={`Email ${person.name}`}
            >
              <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
    <section id="members" className="relative bg-[#0B1120] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Dedicated individuals driving innovation and excellence in data science
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
