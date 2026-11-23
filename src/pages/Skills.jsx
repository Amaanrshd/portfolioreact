import PageHeader from '../components/PageHeader.jsx'
import { coreSkills, skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <>
      <PageHeader label="Skills" title="What I work with" crumb="Skills" />

      <section className="py-5">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card skill-card h-100 bg-body-tertiary border rounded-4 p-4 p-md-5">
                <h2 className="h5 font-display mb-4"><i className="bi bi-bar-chart-line text-primary me-2"></i>Core skills</h2>
                {coreSkills.map((skill, i) => (
                  <div key={skill.name} className={i < coreSkills.length - 1 ? 'mb-4' : ''}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-medium">{skill.name}</span>
                      <span className="text-body-secondary small">{skill.level}%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label={skill.name} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar rounded-pill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card skill-card h-100 bg-body-tertiary border rounded-4 p-4 p-md-5">
                <h2 className="h5 font-display mb-4"><i className="bi bi-tools text-primary me-2"></i>Tools &amp; strengths</h2>
                {skillGroups.map((group, i) => (
                  <div key={group.title}>
                    <p className="text-uppercase small text-body-secondary fw-bold mb-2">{group.title}</p>
                    <div className={`d-flex flex-wrap gap-2 ${i < skillGroups.length - 1 ? 'mb-4' : ''}`}>
                      {group.items.map(item => (
                        <span key={item.name} className="badge rounded-pill bg-body border text-body fw-normal px-3 py-2">
                          <i className={`bi bi-${item.icon} text-primary me-1`}></i>{item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
