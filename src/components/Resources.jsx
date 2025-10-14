import resourcesData from '../content/resources.json'

export default function Resources() {
  const { levels } = resourcesData
  
  return (
    <section id="resources" className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Learning Resources</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Structured learning paths from beginner to expert level. Choose your level and start your data science journey.
          </p>
        </div>
        
        <div className="space-y-16">
          {Object.entries(levels).map(([key, level]) => (
            <div key={key} className="relative">
              {/* Level Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center shadow-lg`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{level.level}</h3>
                    <p className="text-slate-600 text-lg">{level.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Level Sections */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {level.sections.map((section, index) => (
                  <div 
                    key={section.heading}
                    className={`${level.bgColor} ${level.borderColor} border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
                  >
                    <h4 className={`text-xl font-bold ${level.textColor} mb-6 flex items-center`}>
                      <span className={`w-3 h-3 bg-gradient-to-r ${level.color} rounded-full mr-3`}></span>
                      {section.heading}
                    </h4>
                    <ul className="space-y-4">
                      {section.items.map(([label, href]) => (
                        <li key={label}>
                          <a 
                            className={`${level.textColor} hover:underline text-base block transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded px-2 -mx-2 py-1`}
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {label}
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
                  <div className="flex items-center text-slate-400">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-center">
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


