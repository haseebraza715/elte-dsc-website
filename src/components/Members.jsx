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
        transition: `opacity 0.4s ease-out ${index * 0.08}s, transform 0.4s ease-out ${index * 0.08}s`
      }}
    >
      <div className="bg-white rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-6 h-full flex flex-col border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-200 hover:-translate-y-1 md:hover:-translate-y-2 overflow-hidden">
        {/* Gradient overlay on hover - disabled on mobile for performance */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-sky-50/0 via-blue-50/0 to-indigo-50/0 group-hover:from-sky-50/50 group-hover:via-blue-50/30 group-hover:to-indigo-50/20 transition-all duration-300 pointer-events-none rounded-2xl" />
        
        <div className="flex flex-col items-center text-center relative z-10">
          {/* Avatar */}
          <div className="relative mb-3 sm:mb-5 w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden bg-gradient-to-br from-sky-500 to-blue-600 shadow-md md:shadow-lg group-hover:shadow-xl group-hover:scale-[1.01] md:group-hover:scale-[1.02] transition-all duration-200">
              {imageSrc && !imageError ? (
                <>
                  {/* Fallback initials shown behind image - hidden when image loads */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold z-0 opacity-0">
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
                <div className="w-full h-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                  {getInitials(person.name)}
                </div>
              )}
            </div>
          </div>
          
          {/* Name */}
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-sky-600 transition-colors duration-200">
            {person.name}
          </h3>
          
          {/* Role Badge */}
          <div className="mb-2 sm:mb-3 md:mb-4">
            <span className="inline-flex items-center px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wide bg-gradient-to-r from-sky-100 to-blue-100 text-sky-700 border border-sky-200/60 shadow-sm">
              {person.role}
            </span>
          </div>
          
          {/* Meta Info */}
          {person.meta && (
            <div className="flex items-center justify-center mb-2.5 sm:mb-4 md:mb-5 text-slate-600">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium">{person.meta}</span>
            </div>
          )}
          
          {/* LinkedIn Link */}
          {person.link && (
            <div className="mt-auto w-full">
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link w-full inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 active:from-sky-800 active:to-blue-800 border-2 border-transparent hover:border-sky-500/30 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-sky-500/30 active:scale-95"
              >
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 mr-1 sm:mr-1.5 md:mr-2 transition-transform duration-200 group-hover/link:scale-110 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="whitespace-nowrap">LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default function Members() {
  return (
    <section id="members" className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized (reduced for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        {/* Reduced to 2 gradient orbs for better performance */}
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-sky-300/20 via-blue-300/15 to-indigo-300/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-blue-300/20 via-sky-300/15 to-cyan-300/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/20 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      </div>
      
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-block mb-4 sm:mb-5">
            <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-sky-600 uppercase tracking-wider bg-sky-50 border border-sky-200/60">
              Our Community
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto px-2">
            Dedicated individuals driving innovation and excellence in data science
          </p>
        </div>
      </div>

      {/* Members Grid Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 md:pb-24">
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

