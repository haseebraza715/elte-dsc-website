import members from '../content/members.json'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function MemberCard({ person }) {
  return (
    <div className="group">
      <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
              {getInitials(person.name)}
            </div>
          </div>
          
          {/* Name */}
          <h3 className="text-lg font-bold text-slate-900 mb-3">
            {person.name}
          </h3>
          
          {/* Role Badge */}
          <div className="mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-sky-100 text-sky-700 border border-sky-200">
              {person.role}
            </span>
          </div>
          
          {/* Meta Info */}
          {person.meta && (
            <div className="flex items-center justify-center mb-6 text-slate-600">
              <svg className="w-4 h-4 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium">{person.meta}</span>
            </div>
          )}
          
          {/* LinkedIn Link */}
          {person.link && (
            <div className="mt-auto w-full">
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-medium text-sky-600 bg-white border-2 border-sky-200 hover:bg-sky-50 hover:border-sky-300 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        {/* Large gradient orbs - top corners (only 2, one animated) */}
        <div className="absolute -top-36 -left-36 w-[750px] h-[750px] bg-gradient-to-br from-sky-300/30 via-blue-300/25 to-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[750px] h-[750px] bg-gradient-to-bl from-blue-300/30 via-sky-300/25 to-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Bottom accent (static) */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-sky-200/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/30 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      </div>
      
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">
              Our Community
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            Dedicated individuals driving innovation and excellence in data science
          </p>
        </div>
      </div>

      {/* Members Grid Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10">
          {members.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

