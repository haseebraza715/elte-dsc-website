import site from '../content/site.json'

export default function Footer() {
  return (
    <footer className="bg-sky-50 border-t border-border text-textmuted text-sm">
      <div className="mx-auto max-w-content px-4 py-6 grid gap-3 sm:flex sm:items-center sm:justify-between">
        <div className="space-x-4">
          <span>Contact:</span>
          <a className="text-sky-800 hover:underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          <a className="inline-flex items-center gap-1 text-sky-800 hover:underline" href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.973.784-1.764 1.75-1.764s1.75.791 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-3.368-4-3.112-4 0v5.604h-3v-10h3v1.555c1.396-2.586 7-2.777 7 2.476v5.969z"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="text-slate-700">© {new Date().getFullYear()} Data Science Club</div>
      </div>
    </footer>
  )
}


