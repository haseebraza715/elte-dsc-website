import events from '../content/events.json'

export default function Events() {
  return (
    <section id="events" className="border-b border-border py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-textmain mb-8 text-center">Events</h2>
        <ul className="grid gap-6 p-0 list-none sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <li key={e.title} className="border border-border bg-sky-50 rounded-xl overflow-hidden shadow-sm transition hover:shadow-md hover:translate-y-[1px]">
              <div className="border-b border-border px-4 py-3 bg-white/70 text-textmuted text-sm font-medium">{e.date}</div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-textmain mb-2 leading-tight">{e.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{e.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


