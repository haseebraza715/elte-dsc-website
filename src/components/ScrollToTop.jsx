import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    // Ensure browser never restores previous scroll
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
    }, [])

    useEffect(() => {
        // If there is a hash, only skip if the target element exists on this page.
        if (hash) {
            const targetId = hash.slice(1)
            const targetEl = document.getElementById(targetId)
            if (targetEl) return
        }

        const scrollToTop = () => {
            // Most reliable combo to force top
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            document.documentElement.scrollTop = 0
            document.body.scrollTop = 0
        }

        // Run immediately, then a few more times to beat lazy layout
        scrollToTop()
        requestAnimationFrame(scrollToTop)

        // Backups in case of layout shifts or async content
        const timeoutId = setTimeout(scrollToTop, 0)
        const timeoutId2 = setTimeout(scrollToTop, 80)
        const timeoutId3 = setTimeout(scrollToTop, 180)
        const timeoutId4 = setTimeout(scrollToTop, 320)

        return () => {
            clearTimeout(timeoutId)
            clearTimeout(timeoutId2)
            clearTimeout(timeoutId3)
            clearTimeout(timeoutId4)
        }
    }, [pathname, hash])

    return null
}
