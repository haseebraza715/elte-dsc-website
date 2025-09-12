import { useState } from 'react'
import site from '../content/site.json'

export default function Header() {
  const [open, setOpen] = useState(false)
  const items = site.nav
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-content px-4 h-16 flex items-center justify-between text-textmain">
        <a href="#home" className="font-bold tracking-tight focus:outline-none focus:ring-2 focus:ring-sky-500 rounded">{site.name}</a>
        <button aria-label="Toggle menu" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-border text-textmain hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500">
          <span className="sr-only">Menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25A.75.75 0 014.5 11h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25A.75.75 0 014.5 16h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-6 m-0 p-0 list-none">
            {items.map((id) => (
              <li key={id}><a className="hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href={`#${id}`}>{id.charAt(0).toUpperCase()+id.slice(1)}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white" id="primary-nav">
          <ul className="m-0 p-2 list-none grid">
            {items.map((id) => (
              <li key={id} className="">
                <a onClick={() => setOpen(false)} className="block px-4 py-3 text-textmain hover:bg-sky-50 focus:bg-sky-50 focus:outline-none" href={`#${id}`}>{id.charAt(0).toUpperCase()+id.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}


