export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your data science journey? Join our community of passionate learners and industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Join Club Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Join Our Club</h3>
                <p className="text-slate-600">Become a member today</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ready to dive into data science? Join our community and start your journey with hands-on projects, workshops, and networking opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Weekly workshops and sessions</span>
              </div>
              <div className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hands-on projects and challenges</span>
              </div>
              <div className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Networking with industry professionals</span>
              </div>
              <div className="flex items-center text-slate-600">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mentorship and career guidance</span>
              </div>
            </div>
            
            <a 
              href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 hover:shadow-lg hover:shadow-sky-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Join Now
            </a>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Contact Us</h3>
                <p className="text-slate-600">We'd love to hear from you</p>
              </div>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Have questions or want to learn more about our activities? We'd love to hear from you and help you get started with your data science journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Email Us</div>
                  <a 
                    href="mailto:ot7dee@inf.elte.hu"
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    ot7dee@inf.elte.hu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Location</div>
                  <div className="text-slate-600">Eötvös Loránd University</div>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Meeting Time</div>
                  <div className="text-slate-600">Fridays, 4:00 PM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


