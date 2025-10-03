import members from '../content/members.json'

export default function Members() {
  return (
    <section id="members" className="border-b border-border py-12 md:py-16 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textmain mb-4">Our Team</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated members and mentors who make our community thrive
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {members.map((m, index) => (
              <div 
                key={m.name} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 p-6 md:p-8 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Card Content */}
                <div className="relative text-center">
                  {/* Avatar placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="font-bold text-textmain text-lg md:text-xl mb-2 group-hover:text-sky-600 transition-colors">
                    {m.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide bg-sky-100 text-sky-800">
                      {m.role}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 text-sm md:text-base mb-6">
                    {m.meta}
                  </p>
                  
                  {/* LinkedIn Link */}
                  <a 
                    className="inline-flex items-center justify-center text-sky-700 hover:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg transition-all duration-300 px-4 py-2 border border-sky-200 hover:border-sky-500 hover:bg-sky-500 group-hover:shadow-md" 
                    href={m.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    {m.linkLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}


