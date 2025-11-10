import './index.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Home from './pages/Home.jsx'

const Challenges = lazy(() => import('./pages/Challenges.jsx'))
const Resources = lazy(() => import('./pages/Resources.jsx'))
const Members = lazy(() => import('./pages/Members.jsx'))

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/60 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600 mb-4"></div>
                <p className="text-slate-600">Loading...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/members" element={<Members />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
