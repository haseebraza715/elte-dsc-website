import { Github, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index, headingLevel = 'h3', showDescription = true }) {
  const Heading = headingLevel
  const onMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <article className={`project-card tone-${index % 5}`} onPointerMove={onMove} data-reveal>
      <div className="project-card-top">
        <span className="project-num mono">{String(index + 1).padStart(2, '0')}</span>
        <p className="project-name">{project.title}</p>
      </div>
      <Heading className="project-question">{project.question || project.title}</Heading>
      {showDescription && project.description && (
        <p className="project-description">{project.description}</p>
      )}
      {project.tags?.length > 0 && (
        <ul className="tag-list" aria-label="Topics">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      )}
      {project.github && (
        <a
          className="project-link"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          View on GitHub
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      )}
    </article>
  )
}
