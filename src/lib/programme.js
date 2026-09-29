export function isMarkedEvent(event) {
  return /milestone|demo day/i.test(event?.title || '')
}

export function markerLabel(event) {
  if (/demo day/i.test(event?.title || '')) return 'Demo Day'
  if (/milestone/i.test(event?.title || '')) return 'Milestone'
  return ''
}

// One colour family per kind of week, shared by the homepage rail and the Events page.
export function eventKind(event) {
  if (/demo day/i.test(event?.title || '')) return 'demo'
  if (/milestone/i.test(event?.title || '')) return 'milestone'
  if (/guest/i.test(event?.format || '')) return 'guest'
  if (/work/i.test(event?.format || '')) return 'work'
  return 'session'
}

export const kindLabels = {
  session: 'Session',
  guest: 'Guest speaker',
  milestone: 'Milestone',
  work: 'Work session',
  demo: 'Demo Day',
}

export function eventDetails(event) {
  return event.agenda || event.whatHappens || []
}

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

// Dates are stored as "Oct 02"; the year comes from the season label ("Autumn 2026").
export function eventDate(event, season) {
  const year = Number((season || '').match(/\d{4}/)?.[0])
  const [mon, day] = (event?.date || '').split(/\s+/)
  const month = MONTHS.indexOf((mon || '').slice(0, 3).toLowerCase())
  if (!year || month < 0 || !Number(day)) return null
  return new Date(year, month, Number(day))
}

// Index of the first session today or later, or -1 once the programme is over.
export function nextEventIndex(events, season, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return events.findIndex((event) => {
    const date = eventDate(event, season)
    return date && date >= today
  })
}
