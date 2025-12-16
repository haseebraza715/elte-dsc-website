import { memo, useState, useEffect, useRef } from 'react'
import projectsData from '../content/projects.json'

const ProjectCard = memo(function ProjectCard({ project, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  // Intersection Observer for lazy loading and animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
      }}
    >
      <article className="bg-[#1E293B] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 h-full flex flex-col border border-slate-700/50 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-violet-500/10 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none rounded-2xl md:rounded-3xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header Section */}
          <div className="mb-5 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-4">
              <div className="mb-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm">
                  Project {project.id}
                </span>
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-display font-extrabold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
            </div>
            <div className="ml-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/20 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Proposed By - Enhanced */}
          <div className="mb-5 p-4 rounded-xl bg-slate-800/50 group-hover:bg-slate-800 border border-slate-700/60 group-hover:border-slate-600 transition-all duration-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">Proposed By</p>
                <p className="text-sm font-bold text-slate-200">{project.proposedBy}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 mb-5 leading-relaxed text-base flex-grow">
            {project.description}
          </p>

          {/* Two Column Layout for Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {/* Use Case */}
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 group-hover:bg-slate-800/50 group-hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center mb-2">
                <svg className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Use Case</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{project.useCase}</p>
            </div>

            {/* Expected Outputs */}
            <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 group-hover:bg-slate-800/50 group-hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center mb-2">
                <svg className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Outputs</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">{project.expectedOutputs}</p>
            </div>
          </div>

          {/* Skills Gained */}
          <div className="mb-5">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs font-bold text-white uppercase tracking-wide">Skills Gained</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {project.skillsGained.map((skill, idx) => (
                <div key={idx} className="flex items-start p-2.5 rounded-lg bg-slate-800/50 group-hover:bg-slate-800 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300">
                  <svg className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-slate-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mt-auto pt-5 border-t-2 border-slate-700 group-hover:border-violet-500/30 transition-colors duration-300">
            <div className="flex items-center mb-3">
              <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="text-xs font-bold text-white uppercase tracking-wide">Tools & Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-violet-300 border border-slate-700 shadow-sm group-hover:shadow-md group-hover:border-violet-500/50 transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
})

export default function Projects() {
  const projects = projectsData.projects || []

  return (
    <section id="projects" className="relative overflow-hidden min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-cyan-500/10 rounded-full mix-blend-screen filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-cyan-500/10 via-sky-500/5 to-blue-500/10 rounded-full mix-blend-screen filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120]" style={{ transform: 'translateZ(0)' }} />
      </div>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-slate-800 border-2 border-slate-700 shadow-md">
              <svg className="w-4 h-4 mr-2 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Research & Development
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-3xl mx-auto px-2">
            Explore hands-on data science projects designed to enhance your skills and deepen your understanding of real-world applications
          </p>
        </div>
      </div>

      {/* Projects Grid Section - 2x2 Grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 md:pb-28">
        <div className="grid gap-8 sm:gap-8 md:gap-10 grid-cols-1 lg:grid-cols-2 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
