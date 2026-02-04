export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-black overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 border-2 border-white bg-black px-4 sm:px-5 py-2 text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">
            CONTACT
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-none tracking-tight uppercase border-2 border-white p-4 sm:p-6 bg-black inline-block">
            GET IN TOUCH
          </h2>
          <p className="text-sm sm:text-lg text-white max-w-2xl mx-auto leading-relaxed font-bold border-l-2 border-white pl-4 sm:pl-6 py-2 sm:py-3">
            Join the club or reach out for collaborations, workshops, and research projects.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="inline-block bg-black border-2 border-white p-5 sm:p-6">
            <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="inline-block border-2 border-white bg-white text-black px-4 py-2 mb-2">
                  <h3 className="text-lg sm:text-2xl font-bold uppercase">JOIN OR CONTACT</h3>
                </div>
                <p className="text-white font-bold uppercase text-[10px] sm:text-xs tracking-wider">
                  Workshops, research projects, and community events
                </p>
              </div>
              <a
                href="https://forms.cloud.microsoft.com/pages/responsepage.aspx?id=SLszAZD3YEWmTaxGpHL7vNola4DBnfhEngNH8PvdmOBUNzBUU1BaVDZYQzcwWkpHNVpWMkpVTzhGSy4u&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto bg-white border-2 border-white text-black px-6 sm:px-8 py-3 font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:bg-black hover:text-white focus:outline-none flex items-center justify-center min-h-[44px]"
              >
                JOIN NOW
              </a>
            </div>

            <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
              <div className="flex items-start p-3 bg-black border border-white hover:bg-white group transition-all w-fit">
                <div className="w-9 h-9 bg-white text-black border border-white flex items-center justify-center mr-3 flex-shrink-0 font-bold text-lg">
                  @
                </div>
                <div className="pt-1 min-w-0 flex-1">
                  <div className="font-bold text-white group-hover:text-black text-[10px] sm:text-xs mb-1 uppercase tracking-wide">EMAIL</div>
                  <a
                    href="mailto:ot7dee@inf.elte.hu"
                    className="text-white group-hover:text-black font-bold text-sm sm:text-base transition-colors duration-200 break-all"
                  >
                    OT7DEE@INF.ELTE.HU
                  </a>
                </div>
              </div>

              <div className="flex items-start p-3 bg-black border border-white hover:bg-white group transition-all w-fit">
                <div className="w-9 h-9 bg-white text-black border border-white flex items-center justify-center mr-3 flex-shrink-0 font-bold text-lg">
                  ▲
                </div>
                <div className="pt-1 min-w-0 flex-1">
                  <div className="font-bold text-white group-hover:text-black text-[10px] sm:text-xs mb-1 uppercase tracking-wide">LOCATION</div>
                  <div className="text-white group-hover:text-black text-sm sm:text-base font-bold">ELTE</div>
                </div>
              </div>

              <div className="flex items-start p-3 bg-black border border-white hover:bg-white group transition-all w-fit">
                <div className="w-9 h-9 bg-white text-black border border-white flex items-center justify-center mr-3 flex-shrink-0 font-bold text-lg">
                  ●
                </div>
                <div className="pt-1 min-w-0 flex-1">
                  <div className="font-bold text-white group-hover:text-black text-[10px] sm:text-xs mb-1 uppercase tracking-wide">MEETING TIME</div>
                  <div className="text-white group-hover:text-black text-sm sm:text-base font-bold">4 - 5:30 pm, 0.817 South Building</div>
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
