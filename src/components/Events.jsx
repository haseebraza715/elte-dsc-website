import events from '../content/events.json'

export default function Events() {
  return (
    <section id="events" className="border-b border-border py-12 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-textmain mb-6">Events</h2>
        <ul className="grid gap-5 p-0 list-none sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <li key={e.title} className="border border-border bg-sky-50 rounded-xl overflow-hidden shadow-sm transition hover:shadow-md hover:translate-y-[1px]">
              <div className="border-b border-border px-4 py-2 bg-white/70 text-textmuted">{e.date}</div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-textmain mb-1">{e.title}</h3>
                <p className="text-slate-600 mb-4">{e.desc}</p>
                <button className="border border-sky-500 text-sky-900 bg-white px-3 py-2 text-sm rounded-md hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition" onClick={() => alert('Thanks! Your RSVP has been noted.')}>RSVP</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


