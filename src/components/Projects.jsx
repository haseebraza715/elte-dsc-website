import projectsData from '../content/projects.json'

export default function Projects() {
  const projects = projectsData.projects || []

  return (
    <section id="projects" className="relative py-24 overflow-hidden reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-8 h-px bg-[#1F1C18]"></span>
            <span>Innovation Hub</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#231F1A] mb-8">
            Our <span className="text-gradient">Projects</span> & Research
          </h1>
          <p className="text-xl text-[#231F1A]/70 font-medium max-w-2xl leading-relaxed">
            Hands-on data science initiatives designed to solve real-world problems and push the boundaries of technology.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 h-full flex flex-col group hover:border-[#1F1C18]/30 transition-all duration-500 shadow-premium">
              <div className="mb-4">
                <h3 className="text-2xl font-display font-bold text-[#231F1A] group-hover:text-[#1F1C18] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#231F1A]/60 text-sm mt-2">By {project.proposedBy}</p>
              </div>
              <p className="text-[#231F1A]/70 mb-6 leading-relaxed font-medium">
                {project.description}
              </p>
              {project.skillsGained && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skillsGained.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-xs bg-[#F3EDE2] text-[#231F1A]/60 px-2 py-1 rounded border border-[#231F1A]/10">{skill}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
