import { useNavigate, useLocation } from 'react-router-dom'
import eventsData from '../content/events.json'

export default function Events() {
  const navigate = useNavigate()
  const location = useLocation()

  const events = Array.isArray(eventsData?.events)
    ? [...eventsData.events]
    : []

  const sortedEvents = events.sort((a, b) => {
    return (a.week || 0) - (b.week || 0)
  })

  const galleryImages = [
    { src: '/events/IMG_1717.jpeg', alt: 'DSC session highlight 1', span: 'md:col-span-4 md:row-span-2' },
    { src: '/events/IMG_7130.jpg', alt: 'DSC session highlight 2', span: 'md:col-span-2 md:row-span-1' },
    { src: '/events/IMG_7144.jpg', alt: 'DSC session highlight 3', span: 'md:col-span-2 md:row-span-1' },
    { src: '/events/IMG_7157.jpg', alt: 'DSC session highlight 4', span: 'md:col-span-2 md:row-span-2' },
    { src: '/events/IMG_7183.jpg', alt: 'DSC session highlight 5', span: 'md:col-span-2 md:row-span-2' },
    { src: '/events/IMG_7216.jpg', alt: 'DSC session highlight 6', span: 'md:col-span-2 md:row-span-1' },
    { src: '/events/IMG_7239.jpg', alt: 'DSC session highlight 7', span: 'md:col-span-2 md:row-span-1' },
    { src: '/events/Image.jpeg', alt: 'DSC session highlight 8', span: 'md:col-span-2 md:row-span-1' },
    { src: '/events/dsc_project.jpeg', alt: 'DSC project showcase', span: 'md:col-span-2 md:row-span-1' }
  ]

  // Helper to render list sections
  const renderList = (items) => {
    if (!items || items.length === 0) return null
    return (
      <ul className="space-y-2 mt-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-xs sm:text-sm text-white/50 leading-relaxed group/item">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]/60 mt-1.5 mr-2.5 flex-shrink-0 group-hover/item:bg-[#6366F1] transition-colors"></span>
            {item}
          </li>
        ))}
      </ul>
    )
  }

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact')
    } else {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="events" className="relative py-20 overflow-hidden bg-bg-base reveal">
      <div className="section-container relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#6366F1] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 bg-[#6366F1]/10 px-3 py-1 rounded-full border border-[#6366F1]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
            <span>Spring 2026 Program</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FAFAFA] mb-6">
            9-Week <span className="text-gradient">Masterplan</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] font-medium max-w-xl leading-relaxed">
            A structured journey from team formation to final product delivery. Every week counts.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event, index) => (
            <div
              key={event.id}
              className={`glass-card p-8 flex flex-col h-full group hover:border-white/10 transition-all duration-500 reveal delay-${(index % 3) + 1}`}
            >
              {/* Event Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6366F1] mb-1">
                    Week {event.week}
                  </span>
                  <span className="text-lg font-display font-bold text-white">
                    {event.date}
                  </span>
                </div>
                {event.mandatory && (
                  <span className="px-2 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider">
                    Required
                  </span>
                )}
              </div>

              {/* Title & Theme */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#818CF8] transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm italic text-white/40">
                  "{event.theme}"
                </p>
              </div>

              {/* Details Sections */}
              <div className="space-y-6 flex-1">
                {event.whatHappens && (
                  <div>
                    <h4 className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest border-b border-white/[0.06] pb-2 mb-1">
                      Agenda
                    </h4>
                    {renderList(event.whatHappens)}
                  </div>
                )}

                {event.deliverables && (
                  <div>
                    <h4 className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest border-b border-[#6366F1]/20 pb-2 mb-1">
                      Deliverables
                    </h4>
                    {renderList(event.deliverables)}
                  </div>
                )}

                {event.actionItems && !event.deliverables && (
                  <div>
                    <h4 className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-widest border-b border-white/[0.06] pb-2 mb-1">
                      Action Items
                    </h4>
                    {renderList(event.actionItems)}
                  </div>
                )}
              </div>

              {/* Footer / Format */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-wider">
                  {event.format}
                </span>
                {event.status === 'confirmed' ? (
                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.4)]"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.4)]"></span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Previous Sessions Gallery */}
        <div className="mt-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 text-[#6366F1] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 bg-[#6366F1]/10 px-3 py-1 rounded-full border border-[#6366F1]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
              <span>Previous Sessions</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">
              A glimpse of our workshops
            </h3>
            <p className="text-[#A1A1AA] font-medium max-w-2xl">
              Real sessions, real collaboration, and hands-on learning across the DSC community.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-6 md:auto-rows-[180px] lg:auto-rows-[220px]">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#131316] ${image.span || ''}`}
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] md:aspect-auto md:h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={handleContactClick}
            className="btn-premium px-10 py-4 animate-shimmer"
          >
            Join the Next Event
          </button>
        </div>
      </div>
    </section>
  )
}
