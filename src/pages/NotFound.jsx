import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="hero d-flex align-items-center text-center">
      <div className="container py-5">
        <p className="text-primary text-uppercase small fw-bold mb-2">404</p>
        <h1 className="display-4 fw-bold font-display mb-3">Page not found</h1>
        <p className="text-body-secondary mb-4">That page doesn't exist.</p>
        <Link to="/" className="btn btn-primary px-4">Back home</Link>
      </div>
    </section>
  )
}
