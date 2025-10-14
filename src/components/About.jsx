import content from '../content/about.json'

export default function About() {
  const focus = content.focus

  return (
    <section id="about" className="py-20 md:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
              About
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {content.heading}
            </h2>
            <div className="space-y-4">
              {content.paragraphs.map((p) => (
                <p key={p} className="text-slate-600 leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-200" 
                href="#contact"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact us
              </a>
              <a 
                className="inline-flex items-center gap-2 border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-200" 
                href="https://www.linkedin.com/company/dscelte" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Content - Focus Areas */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Focus Areas</h3>
            <ul className="space-y-4">
              {focus.map((item) => (
                <li key={item} className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl">
                  <div className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


