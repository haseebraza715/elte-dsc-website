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
    document.body.classList.add('lightbox-open')
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
    document.body.classList.remove('lightbox-open')
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove('lightbox-open')
      document.body.style.overflow = 'unset'
    }
  }, [])

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

      <main className="relative min-h-screen bg-black overflow-hidden">

        <div className="relative z-10">
          {/* Hero Events Section with Enhanced Design */}
          <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="inline-block mb-4 sm:mb-6 md:mb-8">
                  <span className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black text-white border-4 border-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                    WEEKLY SESSIONS
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-white leading-tight uppercase border-4 border-white p-4 sm:p-5 md:p-6 bg-black inline-block">
                  EVENTS
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-bold mb-6 sm:mb-8">
                  Agenda for next semester will be announced shortly
                </p>
                <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto font-bold">
                  Check out the images from last semester below
                </p>
              </div>
            </div>
          </section>

          {/* Enhanced Gallery Section */}
          <section className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-t-4 border-white bg-black">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <div className="inline-block mb-4 sm:mb-6 md:mb-8">
                  <span className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black text-white border-4 border-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                    PHOTO GALLERY
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white uppercase border-4 border-white p-4 sm:p-5 md:p-6 bg-black inline-block">
                  EVENT GALLERY
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed font-bold border-l-4 border-white pl-4 sm:pl-5 md:pl-6 px-4">
                  RELIVE THE MOMENTS FROM OUR PAST EVENTS, WORKSHOPS, AND COMMUNITY GATHERINGS
                </p>
                <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-2 text-white">
                  <span className="text-xs sm:text-sm font-bold uppercase border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2">📷 {eventImages.length} PHOTOS</span>
                </div>
              </div>

              {/* Enhanced Image Gallery Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {eventImages.map((imagePath, index) => {
                  const isLoaded = loadedImages.has(imagePath)
                  return (
                    <div
                      key={imagePath}
                      className="group relative aspect-square overflow-hidden bg-black border-4 border-white cursor-pointer transition-all duration-300 hover:border-white"
                      onClick={() => handleImageClick(imagePath)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isLoaded ? 'fadeInScale 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none',
                        opacity: isLoaded ? 1 : 0
                      }}
                    >
                      {/* Enhanced shimmer loading effect */}
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-black animate-shimmer" />
                      )}

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

                      {/* Enhanced hover overlay content */}
                      <div className="hidden sm:flex absolute inset-0 items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                        <div className="bg-white border-2 sm:border-4 border-white p-3 sm:p-4 md:p-5 text-black font-bold text-lg sm:text-xl md:text-2xl">
                          +
                        </div>
                      </div>

                      {/* Enhanced image number badge */}
                      <div className="hidden sm:block absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-white text-black text-xs font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 uppercase">
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-2 sm:p-4 animate-fadeIn border-2 sm:border-4 border-white"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 text-black bg-white border-2 sm:border-4 border-white p-2 sm:p-3 md:p-4 hover:bg-black hover:text-white transition-all duration-200 z-10 font-bold text-xl sm:text-2xl min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Close lightbox"
            >
              ×
            </button>

            {/* Image container */}
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center border-2 sm:border-4 border-white" onClick={(e) => e.stopPropagation()}>
              <img
                src={`/${selectedImage}`}
                alt="Event photo"
                className="max-w-full max-h-full object-contain animate-scaleIn border-2 sm:border-4 border-white"
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
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-black bg-white border-2 sm:border-4 border-white p-2 sm:p-3 md:p-4 lg:p-5 hover:bg-black hover:text-white transition-all duration-200 z-10 font-bold text-lg sm:text-xl md:text-2xl min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage(1)
              }}
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-black bg-white border-2 sm:border-4 border-white p-2 sm:p-3 md:p-4 lg:p-5 hover:bg-black hover:text-white transition-all duration-200 z-10 font-bold text-lg sm:text-xl md:text-2xl min-w-[40px] min-h-[40px] flex items-center justify-center"
              aria-label="Next image"
            >
              →
            </button>

            {/* Enhanced Image counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white text-black text-xs sm:text-sm font-bold px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 z-10 border-2 sm:border-4 border-white uppercase">
              {eventImages.indexOf(selectedImage) + 1} / {eventImages.length}
            </div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-black text-xs z-10 hidden lg:block bg-white px-3 sm:px-4 py-1.5 sm:py-2 border-2 sm:border-4 border-white">
              <div className="flex items-center gap-2 sm:gap-4 font-bold uppercase">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black text-white border-2 border-white text-xs">←</kbd>
                  <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black text-white border-2 border-white text-xs">→</kbd>
                  <span className="hidden xl:inline">NAVIGATE</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-black text-white border-2 border-white text-xs">ESC</kbd>
                  <span className="hidden xl:inline">CLOSE</span>
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
