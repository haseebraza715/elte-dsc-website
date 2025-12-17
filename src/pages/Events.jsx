import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import events from '../content/events.json'

// List of image files from dsc-post folder (only JPG/JPEG for browser compatibility)
const eventImages = [
  'dsc-post/Image.jpeg',
  'dsc-post/IMG_1717.jpeg',
  'dsc-post/IMG_7130.jpg',
  'dsc-post/IMG_7144.jpg',
  'dsc-post/IMG_7157.jpg',
  'dsc-post/IMG_7183.jpg',
  'dsc-post/IMG_7216.jpg',
  'dsc-post/IMG_7239.jpg',
]

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const navigate = useNavigate()

  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        document.body.style.overflow = 'unset'
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = eventImages.indexOf(selectedImage)
        const newIndex = currentIndex > 0 ? currentIndex - 1 : eventImages.length - 1
        setSelectedImage(eventImages[newIndex])
      } else if (e.key === 'ArrowRight') {
        const currentIndex = eventImages.indexOf(selectedImage)
        const newIndex = currentIndex < eventImages.length - 1 ? currentIndex + 1 : 0
        setSelectedImage(eventImages[newIndex])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    const currentIndex = eventImages.indexOf(selectedImage)
    let newIndex
    if (direction === 1) {
      newIndex = currentIndex < eventImages.length - 1 ? currentIndex + 1 : 0
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : eventImages.length - 1
    }
    setSelectedImage(eventImages[newIndex])
  }

  const handleImageLoad = (imagePath) => {
    setLoadedImages(prev => new Set([...prev, imagePath]))
  }

  // Cache header height
  const getHeaderHeight = () => {
    if (typeof window === 'undefined') return 80
    return window.innerWidth >= 640 ? 80 : 64
  }

  const handleContactClick = () => {
    navigate('/#contact')
    requestAnimationFrame(() => {
      const element = document.getElementById('contact')
      if (element) {
        const headerHeight = getHeaderHeight()
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = Math.max(0, elementTop - headerHeight)
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    })
  }

  return (
    <>
      <SEO
        title="Events"
        description="Join us for weekly sessions and collaborative learning experiences. Explore our past events, workshops, and community gatherings at the Data Science Club."
        path="/event"
      />

      <main className="relative min-h-screen bg-[#0B1120] overflow-hidden">
        {/* Enhanced Decorative Background Elements - Midnight Aurora */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translate3d(0, 0, 0)' }}>
          <div className="absolute -top-48 -left-48 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-indigo-600/10 rounded-full mix-blend-screen filter blur-2xl md:blur-3xl opacity-50" style={{ transform: 'translate3d(0, 0, 0)' }} />
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-cyan-600/20 via-sky-600/15 to-blue-600/10 rounded-full mix-blend-screen filter blur-2xl md:blur-3xl opacity-50" style={{ transform: 'translate3d(0, 0, 0)' }} />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120] opacity-80" style={{ transform: 'translate3d(0, 0, 0)' }} />
        </div>

        <div className="relative z-10">
          {/* Hero Events Section with Enhanced Design */}
          <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <div className="inline-block mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-slate-800/80 text-cyan-400 rounded-full text-sm font-semibold border border-slate-700 backdrop-blur-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Weekly Sessions
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white leading-tight">
                  Events
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                  Join us for weekly sessions and collaborative learning experiences.
                </p>
                <div className="mt-8 flex items-center justify-center gap-6 text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                    <span className="text-sm font-medium">Active Community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.5)]"></div>
                    <span className="text-sm font-medium">Weekly Sessions</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Events Grid */}
              <div className="grid gap-8 md:grid-cols-2 mb-12 md:mb-16">
                {events.map((event, index) => (
                  <div
                    key={event.title}
                    className="relative bg-[#1E293B]/60 border border-slate-700/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-500/30 transition-all duration-300 overflow-hidden group backdrop-blur-md"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                    }}
                  >
                    {/* Enhanced gradient background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl" style={{ transform: 'translate3d(0, 0, 0)' }}>
                      <div className="absolute -top-20 -left-20 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-transparent rounded-full mix-blend-screen filter blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translate3d(0, 0, 0)' }} />
                      <div className="absolute -top-20 -right-20 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-gradient-to-bl from-cyan-600/10 via-sky-600/5 to-transparent rounded-full mix-blend-screen filter blur-2xl md:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: 'translate3d(0, 0, 0)' }} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="inline-flex items-center px-3 py-1 bg-slate-800 text-cyan-400 rounded-lg text-sm font-semibold mb-4 border border-slate-700">
                            {event.date}
                          </div>
                          <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                            {event.title}
                          </h3>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                            <div className="relative text-sm text-white bg-slate-800 border border-slate-700 px-5 py-2.5 rounded-full font-bold shadow-lg group-hover:border-violet-500/50 transition-colors duration-200">
                              Week {index + 1}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-400 leading-relaxed text-base">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Button */}
              <div className="text-center mb-12 md:mb-16">
                <button
                  onClick={handleContactClick}
                  className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-500 hover:via-purple-500 hover:to-cyan-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/25 active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Join Our Events
                    <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                </button>
              </div>
            </div>
          </section>

          {/* Enhanced Gallery Section */}
          <section className="relative pt-12 md:pt-16 pb-16 md:pb-24 border-t border-slate-700/50 bg-[#0B1120]">
            {/* Section background gradient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transform: 'translate3d(0, 0, 0)' }}>
              <div className="absolute top-0 left-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translate3d(0, 0, 0)' }} />
              <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-cyan-600/10 via-sky-600/5 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translate3d(0, 0, 0)' }} />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-slate-800/80 text-violet-400 rounded-full text-sm font-semibold border border-slate-700">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Photo Gallery
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white text-transparent">
                  Event Gallery
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Relive the moments from our past events, workshops, and community gatherings
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-slate-500">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-semibold text-slate-400">{eventImages.length} Photos</span>
                </div>
              </div>

              {/* Enhanced Image Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {eventImages.map((imagePath, index) => {
                  const isLoaded = loadedImages.has(imagePath)
                  return (
                    <div
                      key={imagePath}
                      className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-[#1E293B] border border-slate-700/50 cursor-pointer transition-all duration-300 hover:shadow-xl md:hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/40"
                      onClick={() => handleImageClick(imagePath)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isLoaded ? 'fadeInScale 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
                        opacity: isLoaded ? 1 : 0
                      }}
                    >
                      {/* Enhanced shimmer loading effect */}
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 animate-shimmer" />
                      )}

                      {/* Enhanced gradient overlay on hover - disabled on mobile */}
                      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                      {/* Image with smooth loading and optimization */}
                      <img
                        src={`/${imagePath}`}
                        alt={`Event photo ${index + 1}`}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded
                          ? 'opacity-100'
                          : 'opacity-0'
                          }`}
                        onLoad={() => handleImageLoad(imagePath)}
                        loading="lazy"
                        decoding="async"
                        fetchpriority={index < 4 ? "high" : "low"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        width="800"
                        height="800"
                      />

                      {/* Enhanced hover overlay content - disabled on mobile */}
                      <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                        <div className="bg-white/95 backdrop-blur-md rounded-full p-5 shadow-2xl border-2 border-white/50">
                          <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>

                      {/* Enhanced image number badge - disabled on mobile */}
                      <div className="hidden md:block absolute top-4 right-4 bg-gradient-to-r from-black/70 to-black/60 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 shadow-lg border border-white/20">
                        #{index + 1}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Enhanced Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fadeIn"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-sky-400 transition-all duration-200 z-10 bg-black/70 rounded-full p-3.5 hover:bg-black/90 hover:scale-110 active:scale-95 border border-white/10 shadow-xl"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container */}
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={`/${selectedImage}`}
                alt="Event photo"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-scaleIn border border-white/10"
                key={selectedImage}
                loading="eager"
                fetchpriority="high"
              />
            </div>

            {/* Enhanced Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(-1)
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-sky-400 transition-all duration-200 z-10 bg-black/70 rounded-full p-4 hover:bg-black/90 hover:scale-110 active:scale-95 border border-white/10 shadow-xl"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(1)
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-sky-400 transition-all duration-200 z-10 bg-black/70 rounded-full p-4 hover:bg-black/90 hover:scale-110 active:scale-95 border border-white/10 shadow-xl"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Enhanced Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm font-semibold px-6 py-3 rounded-full z-10 border border-white/10 shadow-xl">
              {eventImages.indexOf(selectedImage) + 1} / {eventImages.length}
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-6 right-6 text-white/70 text-xs z-10 hidden md:block bg-black/50 px-4 py-2 rounded-lg border border-white/10">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-black/50 rounded text-xs">←</kbd>
                  <kbd className="px-2 py-1 bg-black/50 rounded text-xs">→</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-1 bg-black/50 rounded text-xs">ESC</kbd>
                  <span>Close</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced CSS animations */}
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.96) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.85);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-scaleIn {
            animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .animate-shimmer {
            animation: shimmer 1.5s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  )
}
