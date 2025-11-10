import content from '../content/welcome.json'

export default function Welcome() {
  const handleCtaClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/60 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs - top corners */}
        <div className="absolute -top-36 -left-36 w-[750px] h-[750px] bg-gradient-to-br from-sky-300/35 to-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -top-36 -right-36 w-[750px] h-[750px] bg-gradient-to-bl from-blue-300/35 to-sky-300/30 rounded-full mix-blend-multiply filter blur-3xl" />
        
        {/* Medium gradient orbs - middle section */}
        <div className="absolute top-1/3 left-1/5 w-[600px] h-[600px] bg-gradient-to-r from-sky-200/40 to-blue-200/35 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/3 right-1/5 w-[600px] h-[600px] bg-gradient-to-l from-blue-200/40 to-sky-200/35 rounded-full mix-blend-multiply filter blur-3xl" />
        
        {/* Bottom accent */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-t from-sky-200/30 to-transparent rounded-full mix-blend-multiply filter blur-3xl" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/35 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Badge/Label */}
          <div className="inline-block mb-8">
            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">
              Data Science Community
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
            {content.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            {content.subtitle}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleCtaClick(content.primaryCta.href)}
              className="group relative px-8 py-4 bg-sky-600 text-white rounded-lg font-semibold text-base transition-all duration-200 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="relative z-10">{content.primaryCta.label}</span>
            </button>
            <button
              onClick={() => handleCtaClick(content.secondaryCta.href)}
              className="group px-8 py-4 bg-white text-sky-600 border-2 border-sky-600 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              {content.secondaryCta.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


