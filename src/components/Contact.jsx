export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 border-4 border-white bg-black px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-6 sm:mb-8">
            CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-none tracking-tight uppercase border-4 border-white p-4 sm:p-6 bg-black inline-block">
            GET IN TOUCH
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed font-bold border-l-4 border-white pl-4 sm:pl-6 py-3 sm:py-4">
            READY TO START YOUR DATA SCIENCE JOURNEY? JOIN OUR COMMUNITY OF PASSIONATE LEARNERS AND INDUSTRY PROFESSIONALS.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Join Club Section */}
          <div className="relative bg-black border-4 border-white p-6 sm:p-8 lg:p-10">
            <div className="relative z-10">
              <div className="mb-6 sm:mb-8">
                <div className="border-4 border-white bg-white text-black px-4 sm:px-6 py-2 sm:py-3 inline-block mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">JOIN OUR CLUB</h3>
                </div>
                <p className="text-white font-bold uppercase text-xs sm:text-sm tracking-wider">BECOME A MEMBER TODAY</p>
              </div>

              <p className="text-white mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg font-bold border-l-4 border-white pl-3 sm:pl-4">
                READY TO DIVE INTO DATA SCIENCE? JOIN OUR COMMUNITY AND START YOUR JOURNEY WITH HANDS-ON PROJECTS, WORKSHOPS, AND NETWORKING OPPORTUNITIES.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center text-white border-2 border-white p-2.5 sm:p-3 hover:bg-white hover:text-black transition-all">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white text-black flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold border-2 border-white text-xs sm:text-base">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-bold uppercase">WEEKLY WORKSHOPS AND SESSIONS</span>
                </div>
                <div className="flex items-center text-white border-2 border-white p-2.5 sm:p-3 hover:bg-white hover:text-black transition-all">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white text-black flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold border-2 border-white text-xs sm:text-base">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-bold uppercase">HANDS-ON PROJECTS AND CHALLENGES</span>
                </div>
                <div className="flex items-center text-white border-2 border-white p-2.5 sm:p-3 hover:bg-white hover:text-black transition-all">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white text-black flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold border-2 border-white text-xs sm:text-base">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-bold uppercase">NETWORKING WITH INDUSTRY PROFESSIONALS</span>
                </div>
                <div className="flex items-center text-white border-2 border-white p-2.5 sm:p-3 hover:bg-white hover:text-black transition-all">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white text-black flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 font-bold border-2 border-white text-xs sm:text-base">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-bold uppercase">MENTORSHIP AND CAREER GUIDANCE</span>
                </div>
              </div>

              <a
                href="https://forms.cloud.microsoft.com/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full bg-white border-4 border-white text-black px-6 sm:px-8 py-4 sm:py-5 font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider transition-all hover:bg-black hover:text-white focus:outline-none flex items-center justify-center min-h-[48px]"
              >
                JOIN NOW
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-black border-4 border-white p-6 sm:p-8 lg:p-10">
            <div className="relative z-10">
              <div className="mb-6 sm:mb-8">
                <div className="border-4 border-white bg-white text-black px-4 sm:px-6 py-2 sm:py-3 inline-block mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase">CONTACT US</h3>
                </div>
                <p className="text-white font-bold uppercase text-xs sm:text-sm tracking-wider">WE'D LOVE TO HEAR FROM YOU</p>
              </div>

              <p className="text-white mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg font-bold border-l-4 border-white pl-3 sm:pl-4">
                HAVE QUESTIONS OR WANT TO LEARN MORE ABOUT OUR ACTIVITIES? WE'D LOVE TO HEAR FROM YOU AND HELP YOU GET STARTED WITH YOUR DATA SCIENCE JOURNEY.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start p-4 sm:p-5 bg-black border-2 border-white hover:bg-white group transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black border-2 border-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 font-bold text-lg sm:text-xl">
                    @
                  </div>
                  <div className="pt-1 sm:pt-2 min-w-0 flex-1">
                    <div className="font-bold text-white group-hover:text-black text-xs sm:text-sm md:text-base mb-1 sm:mb-2 uppercase tracking-wide">EMAIL US</div>
                    <a
                      href="mailto:ot7dee@inf.elte.hu"
                      className="text-white group-hover:text-black font-bold text-sm sm:text-base md:text-lg transition-colors duration-200 break-all"
                    >
                      OT7DEE@INF.ELTE.HU
                    </a>
                  </div>
                </div>

                <div className="flex items-start p-4 sm:p-5 bg-black border-2 border-white hover:bg-white group transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black border-2 border-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 font-bold text-lg sm:text-xl">
                    ▲
                  </div>
                  <div className="pt-1 sm:pt-2 min-w-0 flex-1">
                    <div className="font-bold text-white group-hover:text-black text-xs sm:text-sm md:text-base mb-1 sm:mb-2 uppercase tracking-wide">LOCATION</div>
                    <div className="text-white group-hover:text-black text-sm sm:text-base md:text-lg font-bold">EÖTVÖS LORÁND UNIVERSITY</div>
                    <div className="text-white group-hover:text-black text-sm sm:text-base md:text-lg font-bold">ROOM 0.825, SOUTH BUILDING</div>
                  </div>
                </div>

                <div className="flex items-start p-4 sm:p-5 bg-black border-2 border-white hover:bg-white group transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black border-2 border-white flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 font-bold text-lg sm:text-xl">
                    ●
                  </div>
                  <div className="pt-1 sm:pt-2 min-w-0 flex-1">
                    <div className="font-bold text-white group-hover:text-black text-xs sm:text-sm md:text-base mb-1 sm:mb-2 uppercase tracking-wide">MEETING TIME</div>
                    <div className="text-white group-hover:text-black text-sm sm:text-base md:text-lg font-bold">FRIDAYS, 4:00 PM - 5:00 PM</div>
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

