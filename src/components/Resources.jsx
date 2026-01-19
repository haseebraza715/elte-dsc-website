import resourcesData from '../content/resources.json'

export default function Resources() {
  const { levels } = resourcesData

  return (
    <section id="resources" className="relative bg-[#09090b] overflow-hidden">
      {/* Decorative Background Elements - Midnight Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-white/10 via-white/8 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-white/10 via-white/8 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b] opacity-80" style={{ transform: 'translateZ(0)' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4 md:mb-6">Learning Resources</h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            Structured learning paths from beginner to expert level. Choose your level and start your data science journey.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
          {Object.entries(levels).map(([key, level]) => (
            <div key={key} className="relative">
              {/* Level Header */}
              <div className="text-center mb-6 sm:mb-8 md:mb-12">
                <div className="inline-flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6 border-4 border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-1 sm:mb-2">{level.level}</h3>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">{level.description}</p>
                  </div>
                </div>
              </div>

              {/* Level Sections */}
              <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {level.sections.map((section, index) => (
                  <div
                    key={section.heading}
                    className="group relative bg-black border-2 border-white p-5 sm:p-6 md:p-8 transition-all duration-300 hover:bg-white hover:text-black overflow-hidden"
                  >
                    <h4 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-black mb-4 sm:mb-5 md:mb-6 relative z-10">
                      {section.heading}
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 relative z-10">
                      {section.items.map(([label, href]) => (
                        <li key={label}>
                          <a
                            className="group/link flex items-start text-gray-400 group-hover:text-black transition-colors duration-200"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="w-2 h-2 border border-gray-400 group-hover/link:border-black group-hover/link:bg-black mr-2 sm:mr-3 transition-all duration-200 flex-shrink-0 mt-1.5"></span>
                            <span className="text-xs sm:text-sm font-medium break-words">{label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Progress indicator */}
              {key !== 'advanced' && (
                <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
                  <div className="flex items-center text-white">
                    <div className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-white">
                      <span className="text-sm sm:text-base font-bold">NEXT LEVEL ↓</span>
                    </div>
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


