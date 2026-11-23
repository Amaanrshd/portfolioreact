import { Link } from 'react-router-dom'
import { socials } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-top py-4">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <Link className="fw-bold text-body text-decoration-none d-flex align-items-center gap-2" to="/">
            <span className="brand-mark bg-primary rounded-3 d-inline-flex align-items-center justify-content-center">A</span>
            Amaan
          </Link>
          <p className="text-body-secondary small mb-0">&copy; {new Date().getFullYear()} Amaan. Built with React.</p>
          <div className="d-flex gap-3 fs-5">
            <a href={socials.github} className="text-body-secondary social-link" aria-label="GitHub"><i className="bi bi-github"></i></a>
            <a href={socials.linkedin} className="text-body-secondary social-link" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <button
              type="button"
              className="btn btn-link p-0 fs-5 text-body-secondary social-link"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="bi bi-arrow-up-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
