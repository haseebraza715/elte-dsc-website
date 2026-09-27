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
