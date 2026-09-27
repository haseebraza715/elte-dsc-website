import { useState } from 'react'
import projectsData from '../content/projects.json'
import FilterChips from './FilterChips.jsx'
import PageHero from './PageHero.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const projects = projectsData.projects || []
  const [tag, setTag] = useState('all')
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags || [])))
  const counts = Object.fromEntries(tags.map((t) => [t, projects.filter((p) => p.tags?.includes(t)).length]))
  const options = [
    { value: 'all', label: 'All', count: projects.length },
    ...tags.filter((t) => counts[t] > 1).map((t) => ({ value: t, label: t, count: counts[t] })),
  ]
  const shown = tag === 'all' ? projects : projects.filter((p) => p.tags?.includes(tag))

  return (
    <section id="projects" className="page">
      <div className="wrap">
        <PageHero
          eyebrow="What we build"
          title="Student projects"
          lede="Investigations by club members. Each question is a way into the work. The project name and repository are the record."
          tone={0}
        />
        {projects.length > 0 ? (
          <>
            {options.length > 2 && (
              <div className="toolbar">
                <FilterChips label="Filter projects by topic" options={options} value={tag} onChange={setTag} />
              </div>
            )}
            <div className="project-grid">
              {shown.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={projects.indexOf(project)}
                  headingLevel="h2"
                />
              ))}
            </div>
          </>
        ) : (
          <p className="empty-note">{projectsData.message}</p>
        )}
      </div>
    </section>
  )
}
