import resourcesData from '../content/resources.json'

export default function Resources() {
  const { levels } = resourcesData
  
  return (
    <section id="resources" className="border-b border-border py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textmain mb-4">Learning Resources</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Structured learning paths from beginner to expert level. Choose your level and start your data science journey.
          </p>
        </div>
        
        <div className="space-y-8 lg:space-y-12">
          {Object.entries(levels).map(([key, level]) => (
            <div key={key} className="relative">
              {/* Level Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center mr-4 shadow-lg`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-textmain">{level.level}</h3>
                  <p className="text-slate-600 mt-1">{level.description}</p>
                </div>
              </div>
              
              {/* Level Sections */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {level.sections.map((section, index) => (
                  <div 
                    key={section.heading}
                    className={`${level.bgColor} ${level.borderColor} border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                  >
                    <h4 className={`text-lg font-semibold ${level.textColor} mb-4 flex items-center`}>
                      <span className={`w-2 h-2 bg-gradient-to-r ${level.color} rounded-full mr-2`}></span>
                      {section.heading}
                    </h4>
                    <ul className="space-y-3">
                      {section.items.map(([label, href]) => (
                        <li key={label}>
                          <a 
                            className={`${level.textColor} hover:underline text-sm md:text-base block transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded px-1 -mx-1`}
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
                <div className="flex justify-center mt-8">
                  <div className="flex items-center text-slate-400">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm font-medium">Next Level</span>
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


