import { useState } from 'react'
import { ArrowUpRight, Clock, Copy, Check, Instagram, Linkedin, MapPin } from 'lucide-react'
import site from '../content/site.json'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.contactEmail)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = site.social.email
    }
  }

  return (
    <section id="contact" className="join">
      <div className="wrap">
        <div className="join-card" data-reveal>
          <div className="join-copy">
            <p className="eyebrow">Contact</p>
            <h2 className="join-title">Join the club</h2>
            <p className="lede">
              Bring a question and work on it with other ELTE students. Beginners are welcome.
            </p>
            <a className="btn btn-primary btn-large" href={site.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply to join
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <dl className="join-facts">
            <div className="fact">
              <dt>Email</dt>
              <dd>
                <a href={site.social.email}>{site.contactEmail}</a>
                <button type="button" className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
                  {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                  <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </dd>
            </div>
            <div className="fact">
              <dt><MapPin className="w-4 h-4" aria-hidden="true" /> Room</dt>
              <dd>{site.room}</dd>
            </div>
            <div className="fact">
              <dt><Clock className="w-4 h-4" aria-hidden="true" /> Meeting time</dt>
              <dd>{site.meetingTime}</dd>
            </div>
            <div className="fact-pair">
              <div className="fact">
                <dt><Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn</dt>
                <dd>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                    dscelte
                  </a>
                </dd>
              </div>
              <div className="fact">
                <dt><Instagram className="w-4 h-4" aria-hidden="true" /> Instagram</dt>
                <dd>
                  <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                    @dscelte
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
