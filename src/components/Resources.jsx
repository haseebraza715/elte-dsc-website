import cols from '../content/resources.json'

export default function Resources() {
  return (
    <section id="resources" className="border-b border-border py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-content px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-textmain mb-8 text-center">Resources</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cols.map((col) => (
            <div key={col.heading} className="border border-border bg-sky-50 rounded-xl p-5 md:p-6 shadow-sm transition hover:shadow-md hover:translate-y-[1px]">
              <h3 className="text-lg font-semibold text-textmain mb-4">{col.heading}</h3>
              <ul className="list-disc pl-5 m-0 text-textmain space-y-2">
                {col.items.map(([label, href]) => (
                  <li key={label} className="text-sm md:text-base">
                    <a className="text-sky-800 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 rounded transition" href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


