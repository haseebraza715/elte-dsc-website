import projectsData from '../content/projects.json'

export default function Projects() {
  const projects = projectsData.projects || []

  return (
    <section id="projects" className="relative py-24 overflow-hidden reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#6366F1] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 bg-[#6366F1]/10 px-3 py-1 rounded-full border border-[#6366F1]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
            <span>Innovation Hub</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#FAFAFA] mb-8">
            Our <span className="text-gradient">Projects</span> & Research
          </h1>
          <p className="text-xl text-[#A1A1AA] font-medium max-w-2xl leading-relaxed">
            Hands-on data science initiatives designed to solve real-world problems and push the boundaries of technology.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 h-full flex flex-col group hover:border-white/10 transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-[#818CF8] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mt-2">By {project.proposedBy}</p>
              </div>
              <p className="text-white/50 mb-6 leading-relaxed">
                {project.description}
              </p>
              {project.skillsGained && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skillsGained.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-xs bg-[#6366F1]/10 text-[#6366F1] px-2.5 py-1 rounded-md border border-[#6366F1]/20">{skill}</span>
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
