import resourcesData from '../content/resources.json'

export default function Resources() {
  const { levels } = resourcesData

  return (
    <section id="resources" className="relative bg-[#09090b] overflow-hidden">
      {/* Decorative Background Elements - Midnight Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-emerald-600/20 via-emerald-600/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b] opacity-80" style={{ transform: 'translateZ(0)' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12 sm:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 sm:mb-6">Learning Resources</h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto px-2">
            Structured learning paths from beginner to expert level. Choose your level and start your data science journey.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 relative z-10">
          {Object.entries(levels).map(([key, level]) => (
            <div key={key} className="relative">
              {/* Level Header */}
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:scale-110`}>
                    {key === 'beginner' ? (
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ) : key === 'intermediate' ? (
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">{level.level}</h3>
                    <p className="text-zinc-400 text-base sm:text-lg">{level.description}</p>
                  </div>
                </div>
              </div>

              {/* Level Sections */}
              <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {level.sections.map((section, index) => (
                  <div
                    key={section.heading}
                    className="group relative bg-[#1E293B]/60 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 sm:p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/30 overflow-hidden"
                  >
                    {/* Gradient Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <h4 className="text-xl font-display font-bold text-white mb-6 flex items-center relative z-10">
                      <span className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mr-4 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                        {/* Dynamic Icons based on section heading content or generic ones if preferred, but here we use the level generic icon logic or specific shape */}
                        {index === 0 ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        ) : index === 1 ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        )}
                      </span>
                      {section.heading}
                    </h4>
                    <ul className="space-y-3 relative z-10">
                      {section.items.map(([label, href]) => (
                        <li key={label}>
                          <a
                            className="group/link flex items-center text-zinc-400 hover:text-white transition-colors duration-200"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover/link:bg-emerald-400 mr-3 transition-colors duration-200"></span>
                            <span className="text-sm font-medium border-b border-transparent group-hover/link:border-emerald-400/50 pb-0.5 transition-all">{label}</span>
                            <svg className="w-3.5 h-3.5 ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              {key !== 'advanced' && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center text-zinc-500">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base font-medium">Next Level</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


