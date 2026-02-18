export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-bg-base">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-label mb-4 reveal">
            <span className="w-8 h-px bg-accent"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-text-primary mb-6 reveal delay-1">
            Ready to <span className="text-gradient">Collaborate?</span> Join us today.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl reveal delay-2">
            Whether you're looking for research collaborations, workshops, or to join our community, we're here to help.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="relative mb-8 rounded-2xl p-px bg-gradient-to-r from-accent/40 via-accent/10 to-accent/40 reveal-scale delay-3">
          <div className="absolute inset-0 rounded-2xl bg-accent/5 blur-xl pointer-events-none"></div>
          <div className="relative glass-card rounded-2xl p-8 sm:p-12 border-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">Join the Community</h3>
                <p className="text-text-secondary max-w-md">
                  Get access to exclusive workshops, research projects, and student events.
                </p>
              </div>
              <a
                href="https://forms.cloud.microsoft.com/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-8 py-4 text-base w-full md:w-auto"
              >
                Apply to Join
              </a>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Card */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 group hover:border-border-glass transition-all duration-300 reveal delay-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-5 h-5 pointer-events-none" fill="currentColor" aria-hidden="true">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm0 2.6V17h16V9.6l-8 5-8-5Z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Email</div>
              <a href="mailto:ot7dee@inf.elte.hu" className="text-text-primary font-semibold text-sm hover:text-accent-hover transition-colors break-all">
                ot7dee@inf.elte.hu
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 group hover:border-border-glass transition-all duration-300 reveal delay-5">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-5 h-5 pointer-events-none" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Location</div>
              <div className="text-text-primary font-semibold text-sm">ELTE South Building Room 0-817</div>
            </div>
          </div>

          {/* Meeting Time Card */}
          <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 group hover:border-border-glass transition-all duration-300 reveal delay-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-5 h-5 pointer-events-none" fill="currentColor" aria-hidden="true">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Meeting Time</div>
              <div className="text-text-primary font-semibold text-sm">4:00-5:30 PM Room 0.817</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
