import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import projectsData from '../content/projects.json'
import ProjectCard from './ProjectCard.jsx'

export default function HomeProjects() {
  const projects = projectsData.projects || []

  return (
    <section className="band" aria-labelledby="student-projects">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">What we build</p>
            <h2 className="section-title" id="student-projects">Student projects</h2>
          </div>
          <p className="lede">Every project starts as a question. Teams pick one, then work on it all semester in the open.</p>
        </div>
        <div className="project-bento">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} showDescription={false} />
          ))}
        </div>
        <Link className="arrow-link" to="/project">
          Read the project descriptions <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
