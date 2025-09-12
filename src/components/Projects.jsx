import projects from '../content/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border py-12 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-textmain mb-6">Projects</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="border border-border bg-sky-50 p-4 rounded-xl shadow-sm transition hover:shadow-md hover:translate-y-[1px]">
              <h3 className="text-lg font-semibold text-textmain mb-1">{p.title}</h3>
              <p className="text-slate-700 mb-2">{p.desc}</p>
              <p className="text-sm text-slate-600 mb-3">Team: {p.team}</p>
              <a href="#" className="inline-block text-sky-800 hover:underline underline-offset-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 rounded">View details</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


