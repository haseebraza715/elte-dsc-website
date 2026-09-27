import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Fades [data-reveal] elements in as they enter the viewport. Content stays visible
// without JavaScript or with reduced motion, because the hidden state only applies
// once the root carries the `reveal-ready` class.
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      root.classList.remove('reveal-ready')
      return undefined
    }
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    const observeAll = () => {
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) el.classList.add('is-visible')
        else observer.observe(el)
      })
    }

    observeAll()
    // Lazy route chunks mount after this effect; pick them up too.
    const mutation = new MutationObserver(observeAll)
    mutation.observe(document.getElementById('main') || document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [pathname])
}
