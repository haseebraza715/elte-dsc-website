export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden reveal">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-8 h-px bg-[#1F1C18]"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#231F1A] mb-6">
            Ready to <span className="text-gradient">Collaborate?</span> Join us today.
          </h2>
          <p className="text-lg text-[#231F1A]/70 font-medium max-w-2xl">
            Whether you're looking for research collaborations, workshops, or to join our community, we're here to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Main Join Card */}
          <div className="lg:col-span-12 glass-card p-8 sm:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#231F1A]">Join the Community</h3>
                <p className="text-[#231F1A]/70 font-medium max-w-md">
                  Get access to exclusive workshops, research projects, and student events.
                </p>
              </div>
              <a
                href="https://forms.cloud.microsoft.com/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium px-10 py-4 text-lg w-full md:w-auto"
              >
                Apply to Join
              </a>
            </div>
          </div>

          {/* Details Grid */}
          <div className="lg:col-span-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#1F1C18]/10 border border-[#1F1C18]/20 flex items-center justify-center text-[#1F1C18] group-hover:bg-[#1F1C18] group-hover:text-[#F3EDE2] transition-all duration-300 cursor-default">
                <svg viewBox="0 0 24 24" className="w-6 h-6 pointer-events-none" fill="currentColor" aria-hidden="true">
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm0 2.6V17h16V9.6l-8 5-8-5Z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#231F1A]/60 uppercase tracking-widest mb-1">Email</div>
                <a href="mailto:ot7dee@inf.elte.hu" className="text-[#231F1A] font-semibold hover:text-[#1F1C18] transition-colors break-all">
                  ot7dee@inf.elte.hu
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#1F1C18]/10 border border-[#1F1C18]/20 flex items-center justify-center text-[#1F1C18] group-hover:bg-[#1F1C18] group-hover:text-[#F3EDE2] transition-all duration-300 cursor-default">
                <svg viewBox="0 0 24 24" className="w-6 h-6 pointer-events-none" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#231F1A]/60 uppercase tracking-widest mb-1">Location</div>
                <div className="text-[#231F1A] font-semibold sm:whitespace-nowrap">ELTE South Building (Room 0-817)</div>
              </div>
            </div>

            <div className="glass-card p-6 flex flex-col items-center text-center space-y-4 group">
              <div className="w-12 h-12 rounded-full bg-[#1F1C18]/10 border border-[#1F1C18]/20 flex items-center justify-center text-[#1F1C18] group-hover:bg-[#1F1C18] group-hover:text-[#F3EDE2] transition-all duration-300 cursor-default">
                <svg viewBox="0 0 24 24" className="w-6 h-6 pointer-events-none" fill="currentColor" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#231F1A]/60 uppercase tracking-widest mb-1">Meeting Time</div>
                <div className="text-[#231F1A] font-semibold">4:00 - 5:30 PM | Room 0.817</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
