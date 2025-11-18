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
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
      }}
    >
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-7 h-full flex flex-col border border-slate-200/70 shadow-md hover:shadow-2xl hover:shadow-sky-500/15 transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 via-blue-50/0 to-indigo-50/0 group-hover:from-sky-50/60 group-hover:via-blue-50/40 group-hover:to-indigo-50/30 transition-all duration-300 pointer-events-none rounded-2xl md:rounded-3xl" />
        
        <div className="flex flex-col items-center text-center relative z-10">
          {/* Avatar */}
          <div className="relative mb-5 sm:mb-6 w-full">
            <div className="relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg md:shadow-xl group-hover:shadow-2xl group-hover:scale-[1.02] transition-all duration-300 border-4 border-white group-hover:border-sky-200">
              {imageSrc && !imageError ? (
                <>
                  {/* Fallback initials shown behind image - hidden when image loads */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold z-0 opacity-0">
                    {getInitials(person.name)}
                  </div>
                  <img
                    src={imageSrc}
                    alt={person.name}
                    className="w-full h-full object-cover absolute inset-0 z-10"
                    style={{ 
                      objectPosition: getObjectPosition(),
                      opacity: 1,
                      visibility: 'visible',
                      width: '100%',
                      height: '100%',
                      minWidth: '100%',
                      minHeight: '100%'
                    }}
                    onError={() => {
                      setImageError(true)
                    }}
                    loading="lazy"
                    decoding="async"
                    fetchpriority={index < 2 ? "high" : "low"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                  {getInitials(person.name)}
                </div>
              )}
            </div>
          </div>
          
          {/* Name */}
          <h3 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors duration-300">
            {person.name}
          </h3>
          
          {/* Role Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-sky-100 via-blue-100 to-indigo-100 text-sky-700 border-2 border-sky-200/70 shadow-md">
              {person.role}
            </span>
          </div>
          
          {/* Meta Info */}
          {person.meta && (
            <div className="mb-4 flex items-center justify-center text-slate-600">
              <svg className="w-4 h-4 mr-2 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium">{person.meta}</span>
            </div>
          )}
          
          {/* Description */}
          {person.description ? (
            <div className="mb-5 text-center w-full">
              <div className="flex items-start justify-center px-3 sm:px-4">
                <svg className="w-4 h-4 mr-2 text-sky-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
                  {person.description}
                </p>
              </div>
            </div>
          ) : null}
          
          {/* Social Links */}
          <div className="mt-auto w-full flex justify-center items-center gap-4 pt-4 border-t border-slate-200 group-hover:border-sky-200 transition-colors duration-300">
            {/* LinkedIn Link */}
            {person.link && (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center justify-center p-2.5 rounded-lg text-sky-600 hover:text-sky-700 hover:bg-sky-50 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover/link:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            
            {/* Email Link */}
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="group/email inline-flex items-center justify-center p-2.5 rounded-lg text-sky-600 hover:text-sky-700 hover:bg-sky-50 transition-all duration-200"
                aria-label={`Email ${person.name}`}
                title={`Email: ${person.email}`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover/email:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
    <section id="members" className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-sky-300/20 via-blue-300/15 to-indigo-300/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-blue-300/20 via-sky-300/15 to-cyan-300/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/20 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      </div>
      
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-sky-700 uppercase tracking-wider bg-gradient-to-r from-sky-100 via-blue-100 to-indigo-100 border-2 border-sky-200/70 shadow-md">
              Our Community
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 sm:mb-8 leading-tight tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto px-2">
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
