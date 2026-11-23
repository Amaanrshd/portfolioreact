import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/content.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body bg-opacity-75 nav-blur border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold" to="/" onClick={close}>
          <span className="brand-mark bg-primary rounded-3 d-inline-flex align-items-center justify-content-center">A</span>
          Amaan
        </Link>
        <button
          className={`navbar-toggler ${open ? '' : 'collapsed'}`}
          type="button"
          aria-controls="navMenu"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`} id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {navLinks.map(link => (
              <li className="nav-item" key={link.to}>
                <NavLink className="nav-link px-3" to={link.to} end={link.to === '/'} onClick={close}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link className="btn btn-light rounded-pill px-4" to="/contact" onClick={close}>Say hello</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
