import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Lazy load all pages including Home for better code splitting
const Home = lazy(() => import('./pages/Home.jsx'))
const Challenges = lazy(() => import('./pages/Challenges.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Members = lazy(() => import('./pages/Members.jsx'))
const Events = lazy(() => import('./pages/Events.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <div className="bg-[#0B1120] text-slate-50 min-h-screen flex flex-col relative overflow-hidden">
        {/* Optional: Add a subtle background glow effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

        <Header />
        <div className="flex-1 relative z-10">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mb-4"></div>
                <p className="text-slate-400">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/members" element={<Members />} />
              <Route path="/event" element={<Events />} />
              <Route path="/project" element={<Projects />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
