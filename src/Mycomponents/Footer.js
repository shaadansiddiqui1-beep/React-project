import React from 'react'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-6">
            <h5 className="mb-2">My Todos App</h5>
            <p className="mb-0 text-muted">Built to help you track tasks quickly with a clean and modern interface.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <small className="d-block text-muted">© 2026 My Todos. All rights reserved.</small>
            <div className="footer-links mt-2">
              <a className="text-muted me-3" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="text-muted me-3" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="text-muted" href="mailto:contact@example.com">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

