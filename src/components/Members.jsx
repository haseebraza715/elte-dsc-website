import members from '../content/members.json'

export default function Members() {
  return (
    <section id="members" className="border-b border-border py-16 bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textmain mb-4">Our Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who make our organization thrive
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {members.map((m, index) => (
            <div 
              key={m.name} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-100"
            >
              {/* Profile Image with Gradient Background */}
              <div className="relative h-56 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 shadow-xl">
                  <span className="text-3xl font-bold text-white">
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-bold text-textmain text-xl mb-2 group-hover:text-sky-600 transition-colors">
                  {m.name}
                </h3>
                <p className="text-sky-600 font-semibold text-sm mb-2 uppercase tracking-wide">
                  {m.role}
                </p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {m.meta}
                </p>
                
                {/* Contact Link */}
                <a 
                  className="inline-flex items-center text-sky-700 hover:text-sky-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg transition-colors mb-4" 
                  href={m.link} 
                  target={m.link.startsWith('http')? '_blank': undefined} 
                  rel={m.link.startsWith('http')? 'noopener noreferrer': undefined}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {m.linkLabel}
                </a>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4 pt-2 border-t border-slate-100">
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-sky-600 transition-all duration-200 hover:scale-110 p-1"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-sky-600 transition-all duration-200 hover:scale-110 p-1"
                    title="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-slate-400 hover:text-sky-600 transition-all duration-200 hover:scale-110 p-1"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


