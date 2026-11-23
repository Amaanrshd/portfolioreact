export default function IconBox({ icon, className = '' }) {
  return (
    <div className={`icon-box bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center fs-4 ${className}`}>
      <i className={`bi bi-${icon}`}></i>
    </div>
  )
}
