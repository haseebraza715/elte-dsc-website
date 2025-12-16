import { memo, useState, useEffect, useRef } from 'react'
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

const MemberCard = memo(function MemberCard({ person, index }) {
  const [imageError, setImageError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  // Intersection Observer for lazy loading and animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Get image source from person.image path (from members.json)
  const imageSrc = person.image ? imageMap[person.image] || null : null

  // Custom object position for Haseeb to crop out hand (show upper body/face only)
  const getObjectPosition = () => {
    if (person.name === 'Haseeb Raza') {
      return 'center 15%' // Crop to show upper body/face only, cutting out the hand completely
    }
    return 'center top'
  }

  return (
    <div
      ref={cardRef}
      className="group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
      }}
    >
      <div className="bg-[#1E293B] rounded-[2rem] p-6 h-full flex flex-col border border-slate-700/50 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative backdrop-blur-sm">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-violet-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none rounded-[2rem]" />

        {/* Decorative Circle Background */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors duration-500"></div>

        <div className="flex flex-col items-center text-center relative z-10">
          {/* Avatar */}
          <div className="relative mb-6 w-full max-w-[200px] mx-auto">
            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gradient-to-br from-violet-600 to-cyan-600 shadow-xl group-hover:shadow-violet-500/30 group-hover:scale-105 transition-all duration-500 border-[3px] border-slate-800 group-hover:border-violet-400/50 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                {imageSrc && !imageError ? (
                  <>
                    {/* Fallback initials */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold z-0 opacity-0">
                      {getInitials(person.name)}
                    </div>
                    <img
                      src={imageSrc}
                      alt={person.name}
                      className="w-full h-full object-cover absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-110"
                      style={{
                        objectPosition: getObjectPosition(),
                      }}
                      onError={() => {
                        setImageError(true)
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 text-white text-3xl font-bold">
                    {getInitials(person.name)}
                  </div>
                )}
              </div>
            </div>
            {/* Status Indicator (Optional decorative element) */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-slate-900 rounded-full shadow-sm z-20 group-hover:scale-110 transition-transform duration-300"></div>
          </div>

          {/* Name */}
          <h3 className="text-2xl font-display font-extrabold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
            {person.name}
          </h3>

          {/* Role Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-800/80 text-cyan-400 border border-slate-700/50 shadow-sm backdrop-blur-md group-hover:border-cyan-500/30 transition-colors duration-300">
              {person.role}
            </span>
          </div>

          {/* Meta Info */}
          {person.meta && (
            <div className="mb-5 flex items-center justify-center text-slate-400 bg-slate-800/30 px-4 py-2 rounded-lg border border-transparent group-hover:border-slate-700/50 transition-all duration-300">
              <svg className="w-4 h-4 mr-2 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium">{person.meta}</span>
            </div>
          )}

          {/* Description */}
          {person.description ? (
            <div className="mb-6 text-center w-full px-2">
              <p className="text-sm text-slate-400 leading-relaxed font-medium line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                {person.description}
              </p>
            </div>
          ) : null}

          {/* Social Links */}
          <div className="mt-auto w-full flex justify-center items-center gap-3 pt-5 border-t border-slate-700/50 group-hover:border-violet-500/20 transition-colors duration-300">
            {/* LinkedIn Link */}
            {person.link && (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}

            {/* Email Link */}
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="group/email flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                aria-label={`Email ${person.name}`}
                title={`Email: ${person.email}`}
              >
                <svg className="w-5 h-5 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Members() {
  return (
    <section id="members" className="relative bg-[#0B1120] overflow-hidden min-h-screen">
      {/* Decorative Background Elements - Midnight Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-cyan-600/20 via-sky-600/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120] opacity-80" style={{ transform: 'translateZ(0)' }} />
      </div>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-slate-800 border-2 border-slate-700 shadow-md">
              Our Community
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto px-2">
            Dedicated individuals driving innovation and excellence in data science
          </p>
        </div>
      </div>

      {/* Members Grid Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 md:pb-28">
        <div className="grid gap-6 sm:gap-8 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
