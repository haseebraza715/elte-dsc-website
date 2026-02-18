import projectsData from '../content/projects.json'

export default function Projects() {
  const projects = projectsData.projects || []

  return (
    <section id="projects" className="relative pt-32 pb-24 sm:pb-32 overflow-hidden bg-bg-base reveal">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center space-x-2 text-accent font-bold tracking-[0.2em] text-[10px] uppercase mb-4 bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span>Innovation Hub</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-text-primary mb-8">
            Our <span className="text-gradient">Projects</span> & Research
          </h1>
          <p className="text-xl text-text-secondary font-medium max-w-2xl leading-relaxed">
            Hands-on data science initiatives designed to solve real-world problems and push the boundaries of technology.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="glass-card p-8 h-full flex flex-col group hover:border-border-glass transition-all duration-500">
              <div className="mb-4">
                <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent-hover transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm mt-2">By {project.proposedBy}</p>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>
              {project.skillsGained && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skillsGained.slice(0, 3).map((skill, i) => (
                    <span key={i} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-md border border-accent/20">{skill}</span>
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
