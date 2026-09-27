import { useEffect, Suspense, lazy } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { scrollToId } from '../lib/scroll.js'

const Welcome = lazy(() => import('../components/Welcome.jsx'))
const About = lazy(() => import('../components/About.jsx'))
const HomeProjects = lazy(() => import('../components/HomeProjects.jsx'))
const SessionPhotos = lazy(() => import('../components/SessionPhotos.jsx'))
const Contact = lazy(() => import('../components/Contact.jsx'))
const TeamStrip = lazy(() => import('../components/TeamStrip.jsx'))
const Ticker = lazy(() => import('../components/Ticker.jsx'))

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fromState = location.state?.targetId
    const fromHash = window.location.hash.length > 1 ? window.location.hash.slice(1) : ''
    const targetId = fromState || fromHash
    if (!targetId) return undefined

    let cancelled = false
    const scrollWhenReady = (retries = 0) => {
      if (cancelled || retries > 40) return
      if (scrollToId(targetId)) return
      window.setTimeout(() => scrollWhenReady(retries + 1), 50)
    }
    const timer = window.setTimeout(scrollWhenReady, 60)

    if (fromState) {
      navigate(`${location.pathname}${window.location.search}#${fromState}`, {
        replace: true,
        state: null,
      })
    }

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [location.pathname, location.search, location.hash, location.state, navigate])

  return (
    <div>
      <SEO
        title="Home"
        description="Explore data science with other ELTE students through projects, guest talks, and peer learning. Beginners welcome."
        path="/"
      />
      <Suspense fallback={<div className="page" />}>
        <Welcome />
        <Ticker />
        <About />
        <HomeProjects />
        <SessionPhotos />
        <TeamStrip />
        <Contact />
      </Suspense>
    </div>
  )
}
