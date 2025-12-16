export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32 bg-[#0B1120] overflow-hidden">
      {/* Decorative Background Elements - Midnight Aurora */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        <div className="absolute -top-36 -left-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[600px] h-[600px] md:w-[700px] md:h-[700px] bg-gradient-to-bl from-cyan-600/20 via-sky-600/15 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30" style={{ transform: 'translateZ(0)' }} />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120] opacity-80" style={{ transform: 'translateZ(0)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-cyan-400 shadow-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your data science journey? Join our community of passionate learners and industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Join Club Section */}
          <div className="relative bg-[#1E293B] backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 border border-slate-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-cyan-600/5 rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-violet-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Join Our Club</h3>
                  <p className="text-slate-400 text-sm md:text-base">Become a member today</p>
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg">
                Ready to dive into data science? Join our community and start your journey with hands-on projects, workshops, and networking opportunities.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-300 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Weekly workshops and sessions</span>
                </div>
                <div className="flex items-center text-slate-300 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Hands-on projects and challenges</span>
                </div>
                <div className="flex items-center text-slate-300 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Networking with industry professionals</span>
                </div>
                <div className="flex items-center text-slate-300 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Mentorship and career guidance</span>
                </div>
              </div>

              <a
                href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center overflow-hidden"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                <span className="relative z-10">Join Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-[#1E293B] backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 border border-slate-700/50">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-violet-600/5 rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-violet-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-cyan-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Contact Us</h3>
                  <p className="text-slate-400 text-sm md:text-base">We'd love to hear from you</p>
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg">
                Have questions or want to learn more about our activities? We'd love to hear from you and help you get started with your data science journey.
              </p>

              <div className="space-y-4">
                <div className="group flex items-start p-5 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-white mb-1 text-sm md:text-base">Email Us</div>
                    <a
                      href="mailto:ot7dee@inf.elte.hu"
                      className="text-cyan-400 hover:text-cyan-300 font-medium text-sm md:text-base transition-colors duration-200"
                    >
                      ot7dee@inf.elte.hu
                    </a>
                  </div>
                </div>

                <div className="group flex items-start p-5 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-white mb-1 text-sm md:text-base">Location</div>
                    <div className="text-slate-400 text-sm md:text-base">Eötvös Loránd University</div>
                    <div className="text-slate-400 text-sm md:text-base">Room 0.825, South Building</div>
                  </div>
                </div>

                <div className="group flex items-start p-5 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 rounded-xl border border-slate-700/50 hover:border-violet-500/30 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-violet-500/20 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-white mb-1 text-sm md:text-base">Meeting Time</div>
                    <div className="text-slate-400 text-sm md:text-base">Fridays, 4:00 PM - 5:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


