import content from '../content/welcome.json'

export default function Welcome() {
  return (
    <section id="home" className="border-b border-border bg-sky-50 py-12">
      <div className="mx-auto max-w-content px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-textmain mb-3">{content.title}</h1>
        <p className="max-w-2xl text-slate-700">{content.subtitle}</p>
        <div className="mt-5 flex gap-3 flex-wrap">
          <a href={content.primaryCta.href} className="inline-block border border-sky-600 bg-sky-700 text-white px-4 py-2 text-sm rounded-md shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition">{content.primaryCta.label}</a>
          <a href={content.secondaryCta.href} className="inline-block border border-sky-300 text-sky-900 bg-white px-4 py-2 text-sm rounded-md hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition">{content.secondaryCta.label}</a>
        </div>
      </div>
    </section>
  )
}


