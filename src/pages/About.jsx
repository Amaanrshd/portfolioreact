import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import IconBox from '../components/IconBox.jsx'
import { stats, strengths, education, learning } from '../data/content.js'

export default function About() {
  return (
    <>
      <PageHeader label="About me" title="Who I am" crumb="About" />

      <section className="py-5">
        <div className="container py-4">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold font-display mb-4">
                Curious about how things work, and how they <span className="highlight">look</span>.
              </h2>
              <p className="text-body-secondary mb-3">
                I'm a student in the VSI MINT Probestudium at Saarland University, working toward
                the Bachelor Plus MINT program. I live in Saarbrücken and spend a lot of my time
                learning how to build for the web.
              </p>
              <p className="text-body-secondary mb-4">
                I like clean layouts, responsive design, and projects where I can see the result
                right away in the browser. I started with HTML, CSS and Bootstrap, and now I'm
                building things in React. I try to make each project better than the last.
              </p>
              <ul className="list-unstyled mb-4">
                {strengths.map((item, i) => (
                  <li key={item} className={`d-flex align-items-center gap-3 ${i < strengths.length - 1 ? 'mb-2' : ''}`}>
                    <i className="bi bi-check-circle-fill text-primary"></i> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary px-4">Let's talk <i className="bi bi-arrow-right ms-2"></i></Link>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="row row-cols-2 g-3">
                {stats.map(stat => (
                  <div className="col" key={stat.label}>
                    <div className="card stat-card h-100 border rounded-4 p-4">
                      <IconBox icon={stat.icon} className="mb-3" />
                      <div className="display-6 fw-bold font-display">{stat.value}</div>
                      <div className="small text-body-secondary">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-body-tertiary">
        <div className="container py-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <p className="text-primary text-uppercase small fw-bold mb-2">Education</p>
              <h2 className="display-5 fw-bold font-display mb-3">Where I'm learning</h2>
              <p className="text-body-secondary mb-0">My studies and the skills I'm building alongside them.</p>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-7">
              {education.map((item, i) => (
                <div
                  key={item.title}
                  className={`position-relative ps-4 border-start border-2 border-primary ${item.current ? '' : 'border-opacity-50'} ${i < education.length - 1 ? 'pb-5' : ''}`}
                >
                  <span className={`timeline-dot position-absolute top-0 start-0 translate-middle rounded-circle ${item.current ? 'bg-primary' : 'bg-body border border-2 border-primary'}`}></span>
                  <span className={`badge rounded-pill fw-medium mb-2 ${item.current ? 'bg-primary-subtle text-primary' : 'bg-body border text-body-secondary'}`}>{item.period}</span>
                  <h3 className="h5 font-display mb-1">{item.title}</h3>
                  <p className="text-body-secondary small mb-2">{item.place}</p>
                  <p className="text-body-secondary mb-0">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="col-lg-5">
              <div className="card bg-body border rounded-4 p-4 p-md-5 h-100">
                <h3 className="h5 font-display mb-4"><i className="bi bi-journal-code text-primary me-2"></i>Currently learning</h3>
                <ul className="list-group list-group-flush">
                  {learning.map(item => (
                    <li key={item.text} className="list-group-item bg-transparent text-body d-flex align-items-center gap-3 px-0">
                      <i className={`bi bi-${item.icon} text-primary fs-5`}></i> {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
