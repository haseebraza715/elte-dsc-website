import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home.jsx'))
const Challenges = lazy(() => import('./pages/Challenges.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Members = lazy(() => import('./pages/Members.jsx'))

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/60">
        <Header />
        <Suspense fallback={<div className="mx-auto max-w-content px-4 py-8 text-slate-700">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
