import resourcesData from '../content/resources.json'

export default function Resources() {
  const { levels } = resourcesData

  return (
    <section id="resources" className="relative pt-32 pb-24 sm:pb-32 overflow-hidden bg-bg-base reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center space-x-2 text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-text-primary mb-8">
            Learning <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-xl text-text-secondary font-medium max-w-2xl leading-relaxed">
            Structured learning paths from beginner to expert level. Curated by the community for the community.
          </p>
        </div>

        <div className="space-y-32 relative z-10">
          {Object.entries(levels).map(([key, level]) => (
            <div key={key} className="relative">
              {/* Level Header */}
              <div className="mb-12">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary flex items-center gap-4">
                  <span className="text-accent">#</span> {level.level}
                  <div className="h-px flex-1 bg-border-glass"></div>
                </h3>
                <p className="text-text-secondary text-lg font-medium mt-2">{level.description}</p>
              </div>

              {/* Level Sections */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {level.sections.map((section, index) => (
                  <div
                    key={section.heading}
                    className={`glass-card p-8 group hover:border-border-glass transition-all duration-500 reveal delay-${(index % 3) + 1}`}
                  >
                    <h4 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-hover transition-colors duration-300 mb-6 uppercase">
                      {section.heading}
                    </h4>
                    <ul className="space-y-4">
                      {section.items.map(([label, href]) => (
                        <li key={label}>
                          <a
                            className="flex items-start text-text-secondary hover:text-accent transition-all duration-300 group/link"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 mr-3 flex-shrink-0 group-hover/link:bg-accent"></span>
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
