import content from '../content/welcome.json'

export default function Welcome() {
  return (
    <section id="home" className="border-b border-border bg-sky-50 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {content.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={content.primaryCta.href} 
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {content.primaryCta.label}
          </a>
          <a 
            href={content.secondaryCta.href} 
            className="border border-sky-600 text-sky-700 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            {content.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}


