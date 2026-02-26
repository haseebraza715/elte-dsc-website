import projectsData from '../content/projects.json'

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  )
}

function ProjectCard({ project, index }) {
  const cardContent = (
    <div className="glass-card p-8 h-full flex flex-col group hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-display font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        {project.github && (
          <span className="shrink-0 text-text-muted group-hover:text-accent transition-colors duration-300 mt-0.5">
            <GitHubIcon />
          </span>
        )}
      </div>
      <p className="text-text-secondary mb-6 leading-relaxed flex-1">
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-md border border-accent/20">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  if (project.github) {
    return (
      <a
        key={index}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
        aria-label={`View ${project.title} on GitHub`}
      >
        {cardContent}
      </a>
    )
  }

  return <div key={index}>{cardContent}</div>
}

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
            Our <span className="text-gradient">Projects</span> &amp; Research
          </h1>
          <p className="text-xl text-text-secondary font-medium max-w-2xl leading-relaxed">
            Hands-on data science initiatives designed to solve real-world problems and push the boundaries of technology.
          </p>
        </div>

        <div className="w-full">
          {projects.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center border-dashed border-2 border-accent/20 bg-accent/[0.02]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-text-primary mb-3">Announcement</h3>
              <p className="text-lg text-text-secondary max-w-xl mx-auto">
                {projectsData.message || "Projects for this semester will be announced soon. Stay tuned!"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
