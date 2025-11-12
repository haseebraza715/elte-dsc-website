import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/about.json'

export default function About() {
  const focus = content.focus
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/#contact')
    } else {
      navigate('/#contact', { replace: true })
      setTimeout(() => {
        const element = document.getElementById('contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }

  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        {/* Large gradient orbs - top corners (only 2, one animated) */}
        <div className="absolute -top-36 -left-36 w-[750px] h-[750px] bg-gradient-to-br from-sky-300/30 via-blue-300/25 to-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[750px] h-[750px] bg-gradient-to-bl from-blue-300/30 via-sky-300/25 to-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Bottom accent (static) */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-t from-sky-300/20 via-blue-300/25 to-indigo-300/15 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/30 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-gradient-to-r from-sky-50/80 to-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              {content.heading}
            </h2>
            <div className="space-y-5">
              {content.paragraphs.map((p, index) => (
                <p key={index} className="text-slate-600 leading-relaxed text-lg sm:text-xl">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={handleContactClick}
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 overflow-hidden" 
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="relative z-10">Contact us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <a 
                className="group relative inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm border border-sky-600/60 text-sky-600 hover:bg-sky-50 hover:border-sky-600 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2" 
                href="https://www.linkedin.com/company/dscelte" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Content - Focus Areas */}
          <div className="relative bg-gradient-to-br from-slate-50/80 via-white/90 to-sky-50/50 backdrop-blur-xl rounded-2xl border border-slate-200/60 p-8 lg:p-10 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 overflow-hidden">
            {/* Low gradient background matching website style - Optimized */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl" style={{ transform: 'translateZ(0)' }}>
              {/* Large gradient orbs - top corners (only 2, one animated) */}
              <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-gradient-to-br from-sky-300/15 via-blue-300/12 to-indigo-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ willChange: 'opacity', transform: 'translateZ(0)' }} />
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-gradient-to-bl from-blue-300/15 via-sky-300/12 to-cyan-300/10 rounded-full mix-blend-multiply filter blur-3xl" style={{ transform: 'translateZ(0)' }} />
              
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-sky-50/15 via-transparent to-transparent rounded-2xl" style={{ transform: 'translateZ(0)' }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative w-12 h-12 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/40 group-hover:shadow-xl group-hover:shadow-sky-500/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Focus Areas</h3>
                  <p className="text-xs text-slate-500 mt-0.5">What we do</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {focus.map((item, index) => (
                  <li 
                    key={index} 
                    className="group relative flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-xl border border-slate-200/60 hover:border-sky-300/80 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-x-1 hover:scale-[1.02] cursor-default"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {/* Gradient accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-blue-500 to-indigo-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative w-8 h-8 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-sky-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <svg className="w-4 h-4 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-lg"></div>
                    </div>
                    <span className="text-slate-700 text-sm md:text-base font-medium leading-relaxed pt-1 group-hover:text-slate-900 transition-colors duration-300">{item}</span>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


