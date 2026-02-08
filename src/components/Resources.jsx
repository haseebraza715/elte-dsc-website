import resourcesData from '../content/resources.json'

export default function Resources() {
  const { levels } = resourcesData

  return (
    <section id="resources" className="relative py-24 overflow-hidden reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-8 h-px bg-[#1F1C18]"></span>
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#231F1A] mb-8">
            Learning <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-[#231F1A]/70 font-medium max-w-2xl leading-relaxed">
            Structured learning paths from beginner to expert level. Curated by the community for the community.
          </p>
        </div>

        <div className="space-y-32 relative z-10">
          {Object.entries(levels).map(([key, level]) => (
            <div key={key} className="relative">
              {/* Level Header */}
              <div className="mb-12">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#231F1A] flex items-center gap-4">
                  <span className="text-[#1F1C18]">#</span> {level.level}
                  <div className="h-px flex-1 bg-gradient-to-r from-[#1F1C18]/20 to-transparent"></div>
                </h3>
                <p className="text-[#231F1A]/70 text-lg font-medium mt-2">{level.description}</p>
              </div>

              {/* Level Sections */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {level.sections.map((section, index) => (
                  <div
                    key={section.heading}
                    className={`glass-card p-8 group hover:border-[#1F1C18]/30 transition-all duration-500 reveal delay-${(index % 3) + 1}`}
                  >
                    <h4 className="text-xl font-display font-bold text-[#231F1A] group-hover:text-[#1F1C18] transition-colors duration-300 mb-6 uppercase">
                      {section.heading}
                    </h4>
                    <ul className="space-y-4">
                      {section.items.map(([label, href]) => (
                        <li key={label}>
                          <a
                            className="flex items-start text-[#231F1A]/70 hover:text-[#231F1A] transition-all duration-300 group/link"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1F1C18]/40 mt-1.5 mr-3 flex-shrink-0 group-hover/link:bg-[#1F1C18]"></span>
                            <span className="text-sm font-semibold tracking-wide">{label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


