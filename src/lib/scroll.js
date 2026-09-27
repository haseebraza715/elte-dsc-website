export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const ANCHOR_GAP = 16

export function headerOffset() {
  const header = document.getElementById('site-header')
  if (!header) return 72
  return Math.ceil(header.getBoundingClientRect().height)
}

export function anchorOffset() {
  return headerOffset() + ANCHOR_GAP
}

export function syncAnchorOffset() {
  const offset = anchorOffset()
  document.documentElement.style.setProperty('--anchor-offset', `${offset}px`)
  return offset
}

export function scrollToId(id) {
  const element = document.getElementById(id)
  if (!element) return false
  const offset = syncAnchorOffset()
  const top = element.getBoundingClientRect().top + window.pageYOffset - offset
  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
  return true
}
