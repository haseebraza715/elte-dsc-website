import cols from '../content/resources.json'

export default function Resources() {
  return (
    <section id="resources" className="border-b border-border py-12 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-textmain mb-6">Resources</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cols.map((col) => (
            <div key={col.heading} className="border border-border bg-sky-50 rounded-xl p-5 shadow-sm transition hover:shadow-md hover:translate-y-[1px]">
              <h3 className="text-base font-semibold text-textmain mb-3">{col.heading}</h3>
              <ul className="list-disc pl-5 m-0 text-textmain space-y-1">
                {col.items.map(([label, href]) => (
                  <li key={label}><a className="text-sky-800 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href={href} target="_blank" rel="noopener noreferrer">{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


