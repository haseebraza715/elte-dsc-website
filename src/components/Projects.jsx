import { memo, useState, useEffect, useRef } from 'react'
import projectsData from '../content/projects.json'

const ProjectCard = memo(function ProjectCard({ project, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

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
      <article className="bg-black border-4 border-white p-4 sm:p-5 md:p-6 h-full flex flex-col hover:bg-white hover:text-black transition-all duration-300">
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="mb-3 sm:mb-4 flex items-start justify-between">
            <div className="flex-1 min-w-0 pr-3 sm:pr-4">
              <div className="mb-2 sm:mb-3">
                <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-wider bg-white text-black border-2 border-white">
                  PROJECT {index + 1}
                </span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white group-hover:text-black mb-2 sm:mb-3 leading-tight">
                {project.title}
              </h3>
            </div>
            <div className="ml-2 sm:ml-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-white bg-white text-black group-hover:bg-black group-hover:text-white group-hover:border-white flex items-center justify-center flex-shrink-0 font-bold text-xl sm:text-2xl transition-all">
              ▲
            </div>
          </div>

          {/* Proposed By */}
          <div className="mb-3 sm:mb-4 p-3 border-2 border-white bg-black group-hover:bg-white transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <div className="border-2 border-white bg-white text-black px-2 sm:px-3 py-1 sm:mr-3">
                <p className="text-sm sm:text-base font-bold uppercase tracking-wide">PROPOSED BY</p>
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-200 group-hover:text-black">{project.proposedBy}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-200 group-hover:text-black mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base flex-grow font-medium border-l-4 border-white pl-3 sm:pl-4">
            {project.description}
          </p>

          {/* Two Column Layout for Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {/* Use Case */}
            <div className="p-3 border-2 border-white bg-black group-hover:bg-white transition-all">
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-bold text-white group-hover:text-black uppercase tracking-wide border-2 border-white px-3 py-1.5 bg-white text-black">USE CASE</span>
              </div>
              <p className="text-sm text-gray-200 group-hover:text-black leading-relaxed font-medium">{project.useCase}</p>
            </div>

            {/* Expected Outputs */}
            <div className="p-3 border-2 border-white bg-black group-hover:bg-white transition-all">
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-bold uppercase tracking-wide border-2 border-white px-3 py-1.5 bg-white text-black">OUTPUTS</span>
              </div>
              <p className="text-sm text-gray-200 group-hover:text-black leading-relaxed font-medium">{project.expectedOutputs}</p>
            </div>
          </div>

          {/* Skills Gained */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center mb-2">
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-black uppercase tracking-wide border-2 border-white px-3 py-1.5 bg-white text-black">SKILLS GAINED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.skillsGained.map((skill, idx) => (
                <div key={idx} className="flex items-start p-3 border-2 border-white bg-black group-hover:bg-white transition-all">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-black mr-2 sm:mr-3 flex-shrink-0 mt-0.5 font-bold text-base sm:text-lg">✓</span>
                  <span className="text-sm text-gray-200 group-hover:text-black font-medium break-words">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mt-auto pt-4 border-t-4 border-white">
            <div className="flex items-center mb-2">
              <span className="text-sm sm:text-base font-bold text-white group-hover:text-black uppercase tracking-wide border-2 border-white px-3 py-1.5 bg-white text-black">TOOLS & TECHNOLOGIES</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="inline-flex items-center px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold bg-white text-black border-2 border-white group-hover:bg-black group-hover:text-white uppercase">
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
    <section id="projects" className="relative overflow-hidden min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-4 sm:mb-6 md:mb-8">
            <span className="inline-flex items-center px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-black border-4 border-white">
              RESEARCH & DEVELOPMENT
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight border-4 border-white p-4 sm:p-5 md:p-6 bg-black inline-block">
            Our Projects
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-medium max-w-3xl mx-auto px-4 border-l-4 border-white pl-4 sm:pl-5 md:pl-6">
            Explore hands-on data science projects designed to enhance your skills and deepen your understanding of real-world applications.
          </p>
        </div>
      </div>

      {/* Projects Grid Section - 2x2 Grid */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 relative z-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
