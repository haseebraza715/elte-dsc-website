import members from '../content/members.json'

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function RoleBadge({ role }) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-sky-100 text-sky-800 border border-sky-200">
      {role}
    </span>
  )
}

function MemberCard({ person }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden></div>
      <div className="relative text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
          {getInitials(person.name)}
        </div>
        <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-sky-700 transition-colors">
          {person.name}
        </h3>
        <div className="mb-6">
          <RoleBadge role={person.role} />
        </div>
        {person.meta && (
          <p className="text-slate-600 text-base mb-8 leading-relaxed">{person.meta}</p>
        )}
        {person.link && (
          <a
            className="inline-flex items-center justify-center text-sky-700 hover:text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl transition-all duration-300 px-6 py-3 border-2 border-sky-200 hover:border-sky-500 hover:bg-sky-500 group-hover:shadow-md"
            href={person.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            {person.linkLabel || 'LinkedIn'}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Team</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated people who make our community thrive.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {members.map((person) => (
            <MemberCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

