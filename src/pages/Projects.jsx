import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/content.js'

function ProjectCard({ project }) {
  const internal = project.demo.startsWith('/')

  return (
    <div className="card project-card h-100 bg-body-tertiary border rounded-4 overflow-hidden">
      <div className={`project-thumb ${project.thumb} d-flex align-items-center justify-content-center`}>
        <i className={`bi bi-${project.icon}`}></i>
      </div>
      <div className="card-body d-flex flex-column p-4">
        <h2 className="h5 font-display">{project.title}</h2>
        <p className="text-body-secondary small">{project.text}</p>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="badge rounded-pill text-bg-secondary fw-normal">{tag}</span>
          ))}
        </div>
        <ul className="list-unstyled small text-body-secondary mb-4">
          {project.points.map((point, i) => (
            <li key={point} className={`d-flex gap-2 ${i < project.points.length - 1 ? 'mb-1' : ''}`}>
              <i className="bi bi-check2 text-primary"></i> {point}
            </li>
          ))}
        </ul>
        <div className="d-flex gap-2 mt-auto">
          {internal
            ? <Link to={project.demo} className="btn btn-primary btn-sm px-3">Live demo</Link>
            : <a href={project.demo} className="btn btn-primary btn-sm px-3">Live demo</a>}
          <a href={project.code} className="btn btn-outline-light btn-sm px-3"><i className="bi bi-github me-1"></i>Code</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <PageHeader label="Projects" title="Things I've built" crumb="Projects" />

      <section className="py-5">
        <div className="container py-4">
          <div className="row g-4">
            {projects.map(project => (
              <div className="col-12 col-md-6 col-lg-4" key={project.title}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
