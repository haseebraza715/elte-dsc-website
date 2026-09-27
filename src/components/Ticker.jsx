import projectsData from '../content/projects.json'

export default function Ticker() {
  const tags = Array.from(new Set((projectsData.projects || []).flatMap((p) => p.tags || [])))
  const row = tags.map((tag, i) => (
    <li key={tag}>
      <span className={`dot dot-${i % 5}`} aria-hidden="true" />
      {tag}
    </li>
  ))
  return (
    <div className="ticker" aria-label="Topics our projects cover">
      <ul className="ticker-track">
        {row}
      </ul>
      <ul className="ticker-track" aria-hidden="true">
        {row}
      </ul>
    </div>
  )
}
