import { Link } from 'react-router-dom'
import IconBox from '../components/IconBox.jsx'
import { quickLinks, socials } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container py-5">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <p className="text-primary text-uppercase small fw-bold mb-3">
                <i className="bi bi-code-slash me-2"></i>Portfolio
              </p>
              <h1 className="display-2 fw-bold font-display mb-4">
                Hi, I'm <span className="highlight">Amaan</span>.
              </h1>
              <p className="lead text-body-secondary mb-4">
                A MINT student in Saarbrücken who builds clean, responsive websites
                and enjoys turning ideas into things people can click.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/projects" className="btn btn-primary btn-lg px-4">See my work</Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg px-4">Get in touch</Link>
              </div>
              <div className="d-flex gap-3 fs-4">
                <a href={socials.github} className="text-body-secondary social-link" aria-label="GitHub"><i className="bi bi-github"></i></a>
                <a href={socials.linkedin} className="text-body-secondary social-link" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <Link to="/contact" className="text-body-secondary social-link" aria-label="Email"><i className="bi bi-envelope"></i></Link>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="card profile-card border rounded-4">
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="avatar-box bg-primary-subtle text-primary rounded-4 d-flex align-items-center justify-content-center fs-2 fw-bold font-display">A</div>
                    <div>
                      <h2 className="h5 mb-0 font-display">Amaan</h2>
                      <small className="text-body-secondary">Student &amp; web developer</small>
                    </div>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex gap-3 mb-3">
                      <i className="bi bi-mortarboard text-primary"></i>
                      <span>VSI MINT Probestudium, Saarland University</span>
                    </li>
                    <li className="d-flex gap-3 mb-3">
                      <i className="bi bi-geo-alt text-primary"></i>
                      <span>Saarbrücken, Germany</span>
                    </li>
                    <li className="d-flex gap-3">
                      <i className="bi bi-braces text-primary"></i>
                      <span>HTML, CSS, Bootstrap, JavaScript, React</span>
                    </li>
                  </ul>
                  <span className="badge rounded-pill text-bg-success fw-medium px-3 py-2">
                    <i className="bi bi-circle-fill me-1 status-dot"></i> Open to projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary">
        <div className="container py-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <p className="text-primary text-uppercase small fw-bold mb-2">Explore</p>
              <h2 className="display-5 fw-bold font-display mb-3">Take a look around</h2>
              <p className="text-body-secondary mb-0">Everything about me lives on its own page.</p>
            </div>
          </div>
          <div className="row g-4">
            {quickLinks.map(item => (
              <div className="col-12 col-sm-6 col-lg-3" key={item.to}>
                <Link to={item.to} className="card quick-card h-100 bg-body border rounded-4 p-4 text-decoration-none text-body">
                  <IconBox icon={item.icon} className="mb-3" />
                  <h3 className="h5 font-display">{item.title}</h3>
                  <p className="small text-body-secondary mb-3">{item.text}</p>
                  <span className="text-primary small fw-semibold mt-auto">Read more <i className="bi bi-arrow-right ms-1"></i></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
