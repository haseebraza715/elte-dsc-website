import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Suspense, lazy } from 'react'

const Welcome = lazy(() => import('./components/Welcome.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Events = lazy(() => import('./components/Events.jsx'))
const Resources = lazy(() => import('./components/Resources.jsx'))
const Members = lazy(() => import('./components/Members.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main id="main">
        <Suspense fallback={<div className="mx-auto max-w-content px-4 py-8 text-slate-700">Loading…</div>}>
          <Welcome />
          <About />
          <Events />
          <Resources />
          <Members />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
