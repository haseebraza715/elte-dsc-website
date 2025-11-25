export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements - Optimized (reduced for performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'auto', transform: 'translateZ(0)' }}>
        {/* Reduced to 2 gradient orbs for better performance */}
        <div className="absolute -top-36 -left-36 w-[500px] h-[500px] md:w-[650px] md:h-[650px] bg-gradient-to-br from-sky-300/20 via-blue-300/15 to-indigo-300/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />
        <div className="absolute -top-36 -right-36 w-[500px] h-[500px] md:w-[650px] md:h-[650px] bg-gradient-to-bl from-blue-300/20 via-sky-300/15 to-cyan-300/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl" style={{ transform: 'translateZ(0)' }} />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/20 via-transparent to-transparent" style={{ transform: 'translateZ(0)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-gradient-to-r from-sky-50/80 to-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your data science journey? Join our community of passionate learners and industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Join Club Section */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 border border-slate-200/60">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-transparent to-blue-50/50 rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-sky-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Join Our Club</h3>
                  <p className="text-slate-600 text-sm md:text-base">Become a member today</p>
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                Ready to dive into data science? Join our community and start your journey with hands-on projects, workshops, and networking opportunities.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-slate-700 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Weekly workshops and sessions</span>
                </div>
                <div className="flex items-center text-slate-700 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Hands-on projects and challenges</span>
                </div>
                <div className="flex items-center text-slate-700 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">Networking with industry professionals</span>
                </div>
                <div className="flex items-center text-slate-700 group">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 shadow-md shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
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
                className="group relative w-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center overflow-hidden"
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
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 lg:p-10 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 border border-slate-200/60">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 rounded-2xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Contact Us</h3>
                  <p className="text-slate-600 text-sm md:text-base">We'd love to hear from you</p>
                </div>
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed text-base md:text-lg">
                Have questions or want to learn more about our activities? We'd love to hear from you and help you get started with your data science journey.
              </p>

              <div className="space-y-4">
                <div className="group flex items-start p-5 bg-gradient-to-r from-sky-50/80 to-blue-50/50 hover:from-sky-100/80 hover:to-blue-100/60 rounded-xl border border-sky-100/60 hover:border-sky-200 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-sky-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-slate-900 mb-1 text-sm md:text-base">Email Us</div>
                    <a
                      href="mailto:ot7dee@inf.elte.hu"
                      className="text-sky-600 hover:text-sky-700 font-medium text-sm md:text-base transition-colors duration-200"
                    >
                      ot7dee@inf.elte.hu
                    </a>
                  </div>
                </div>

                <div className="group flex items-start p-5 bg-gradient-to-r from-blue-50/80 to-indigo-50/50 hover:from-blue-100/80 hover:to-indigo-100/60 rounded-xl border border-blue-100/60 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-slate-900 mb-1 text-sm md:text-base">Location</div>
                    <div className="text-slate-600 text-sm md:text-base">Eötvös Loránd University</div>
                    <div className="text-slate-600 text-sm md:text-base">Room 0.825, South Building</div>
                  </div>
                </div>

                <div className="group flex items-start p-5 bg-gradient-to-r from-indigo-50/80 to-purple-50/50 hover:from-indigo-100/80 hover:to-purple-100/60 rounded-xl border border-indigo-100/60 hover:border-indigo-200 transition-all duration-300 hover:shadow-md hover:-translate-x-1">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-md shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-slate-900 mb-1 text-sm md:text-base">Meeting Time</div>
                    <div className="text-slate-600 text-sm md:text-base">Fridays, 4:00 PM - 5:00 PM</div>
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


