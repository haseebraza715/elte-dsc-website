import content from '../content/about.json'

export default function About() {
  const focus = content.focus

  return (
    <section id="about" className="relative border-b border-border py-12 md:py-20 bg-gradient-to-b from-white via-sky-50/50 to-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl"></div>
      <div className="relative mx-auto max-w-content px-4 grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-800">About</div>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-textmain leading-tight">{content.heading}</h2>
          <div className="mt-4 space-y-4">
            {content.paragraphs.map((p) => (
              <p key={p} className="text-slate-700 leading-relaxed text-base md:text-lg">{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sky-800">
            <a className="inline-flex items-center gap-2 rounded-md border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-50 shadow-sm transition" href="#contact">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75zm2.659-.75a.75.75 0 00-.659.375l8.25 5.25 8.25-5.25a.75.75 0 00-.659-.375H4.159z"/></svg>
              Contact us
            </a>
            <a className="inline-flex items-center gap-2 rounded-md border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-50 shadow-sm transition" href="https://www.linkedin.com/company/dscelte" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.764 1.75-1.764s1.75.791 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.112-4 0v5.604h-3v-10h3v1.555c1.396-2.586 7-2.777 7 2.476v5.969z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-white/70 backdrop-blur-sm text-textmain border border-sky-200 p-6 md:p-8 shadow-xl">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-textmain">Focus Areas</h3>
          <ul className="divide-y divide-sky-100">
            {focus.map((item) => (
              <li key={item} className="py-3 flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 text-white w-5 h-5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3"><path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.01 7.01a1 1 0 01-1.42 0L3.296 8.743a1 1 0 111.42-1.42l3.13 3.129 6.3-6.301a1 1 0 011.558.139z" clipRule="evenodd"/></svg>
                </span>
                <span className="text-slate-800 text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


