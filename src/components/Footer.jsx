import { memo } from 'react'
import { Link } from 'react-router-dom'
import site from '../content/site.json'
import Logo from './Logo.jsx'

const Footer = memo(function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-row">
          <div className="footer-brand">
            <Logo />
            <span>Data Science Club<br /><small>ELTE · Budapest</small></span>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/project">Projects</Link>
            <Link to="/event">Events</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/members">Members</Link>
          </nav>
        </div>
        <a className="footer-word" href={site.applyUrl} target="_blank" rel="noopener noreferrer">
          Come build with{' '}
          <span className="nowrap">
            us<span className="footer-word-arrow" aria-hidden="true">→</span>
          </span>
        </a>
        <div className="footer-meta">
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={site.social.email}>Email</a>
          <span className="footer-copy">© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  )
})

export default Footer
