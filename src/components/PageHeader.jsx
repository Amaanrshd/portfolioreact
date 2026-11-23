import { Link } from 'react-router-dom'

export default function PageHeader({ label, title, crumb }) {
  return (
    <header className="py-5 bg-body-tertiary border-bottom">
      <div className="container py-4 text-center">
        <p className="text-primary text-uppercase small fw-bold mb-2">{label}</p>
        <h1 className="display-4 fw-bold font-display mb-3">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{crumb}</li>
          </ol>
        </nav>
      </div>
    </header>
  )
}
