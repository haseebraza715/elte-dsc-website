import { useMemo, useState } from 'react'
import { ArrowUpRight, Search, X } from 'lucide-react'
import resourcesData from '../content/resources.json'
import PageHero from './PageHero.jsx'

function host(href) {
  try {
    return new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

export default function Resources() {
  const levels = Object.entries(resourcesData.levels)
  const [active, setActive] = useState(levels[0]?.[0])
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const searchResults = useMemo(() => {
    if (!q) return null
    return levels.flatMap(([, level]) =>
      level.sections.flatMap((section) =>
        section.items
          .filter(([label, href]) => `${label} ${section.heading} ${host(href)}`.toLowerCase().includes(q))
          .map(([label, href]) => ({ label, href, level: level.level, section: section.heading })),
      ),
    )
  }, [q, levels])

  const current = resourcesData.levels[active]

  const onTabKey = (event) => {
    const keys = levels.map(([key]) => key)
    const i = keys.indexOf(active)
    let next = null
    if (event.key === 'ArrowRight') next = keys[(i + 1) % keys.length]
    if (event.key === 'ArrowLeft') next = keys[(i - 1 + keys.length) % keys.length]
    if (next) {
      event.preventDefault()
      setActive(next)
      document.getElementById(`level-tab-${next}`)?.focus()
    }
  }

  return (
    <section id="resources" className="page">
      <div className="wrap">
        <PageHero
          eyebrow="Learn"
          title="Learning resources"
          lede="Paths from beginner to expert, grouped by topic. Every link leaves this site."
          tone={2}
        />

        <div className="resource-tools">
          <label className="search">
            <Search className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">Search resources</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search, e.g. pandas, PyTorch, SQL"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                <X className="w-4 h-4" />
              </button>
            )}
          </label>

          {!searchResults && (
            <div className="level-tabs" role="tablist" aria-label="Level" onKeyDown={onTabKey}>
              {levels.map(([key, level], i) => (
                <button
                  key={key}
                  id={`level-tab-${key}`}
                  type="button"
                  role="tab"
                  aria-selected={active === key}
                  aria-controls="level-panel"
                  tabIndex={active === key ? 0 : -1}
                  className={`level-tab tone-${[3, 1, 0][i] ?? i}`}
                  onClick={() => setActive(key)}
                >
                  <span className="level-step mono">0{i + 1}</span>
                  {level.level}
                </button>
              ))}
            </div>
          )}
        </div>

        {searchResults ? (
          <div className="search-results" aria-live="polite">
            <p className="result-count">
              {searchResults.length} {searchResults.length === 1 ? 'resource' : 'resources'} for “{query.trim()}”
            </p>
            <ul className="link-list">
              {searchResults.map((item) => (
                <li key={`${item.level}-${item.label}`}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <span>
                      {item.label}
                      <small>{item.level} · {item.section} · {host(item.href)}</small>
                    </span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : current && (
          <div id="level-panel" role="tabpanel" aria-labelledby={`level-tab-${active}`} className="level-panel">
            <p className="level-description">{current.description}</p>
            <div className="resource-sections">
              {current.sections.map((section) => (
                <div key={section.heading} className="resource-group">
                  <h2>{section.heading}</h2>
                  <ul className="link-list">
                    {section.items.map(([label, href]) => (
                      <li key={label}>
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <span>
                            {label}
                            <small>{host(href)}</small>
                          </span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
