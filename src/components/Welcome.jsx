import content from '../content/welcome.json'

export default function Welcome() {
  return (
    <section id="home" className="bg-sky-50 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          {content.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          {content.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={content.primaryCta.href} 
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {content.primaryCta.label}
          </a>
          <a 
            href={content.secondaryCta.href} 
            className="border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {content.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}


