import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import IconBox from '../components/IconBox.jsx'
import { socials } from '../data/content.js'

const emptyForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSent(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <>
      <PageHeader label="Contact" title="Let's work together" crumb="Contact" />

      <section className="py-5">
        <div className="container py-4">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <IconBox icon="envelope" className="flex-shrink-0" />
                <div>
                  <div className="small text-body-secondary">Email</div>
                  <a href={`mailto:${socials.email}`} className="fw-medium text-body text-decoration-none">{socials.email}</a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-4">
                <IconBox icon="geo-alt" className="flex-shrink-0" />
                <div>
                  <div className="small text-body-secondary">Location</div>
                  <div className="fw-medium">Saarbrücken, Germany</div>
                </div>
              </div>
              <p className="small text-body-secondary text-uppercase fw-bold mt-5 mb-3">Find me online</p>
              <div className="d-flex gap-2">
                <a href={socials.github} className="btn btn-outline-secondary social-btn" aria-label="GitHub"><i className="bi bi-github"></i></a>
                <a href={socials.linkedin} className="btn btn-outline-secondary social-btn" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

            <div className="col-lg-7">
              <form className="card bg-body-tertiary border rounded-4 p-4 p-md-5" onSubmit={handleSubmit}>
                {sent && (
                  <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                    <i className="bi bi-check-circle-fill"></i> Thanks! Your message has been sent.
                  </div>
                )}
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="What's it about?" value={form.subject} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="5" placeholder="Write your message" value={form.message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">Send message <i className="bi bi-send ms-2"></i></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
