import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import content from '../content/welcome.json'
import heroImage1 from '../images/hero1.jpg'
import heroImage2 from '../images/hero2.jpg'
import heroImage3 from '../images/hero3.jpg'
import heroImage4 from '../images/hero4.jpg'
import heroImage5 from '../images/hero5.jpg'

const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5]

export default function Welcome() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentImage, setCurrentImage] = useState(0)

  const goToNext = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const goToPrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => {
    // Smoother, slower interval for a calming effect
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const handleCtaClick = (href) => {
    if (href.startsWith('#')) {
      // Handle hash links (like #contact)
      if (location.pathname !== '/') {
        navigate(`/${href}`)
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else if (href.startsWith('/')) {
      // Handle route navigation (like /events)
      navigate(href)
    }
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-[60px] bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-cyan-500/10 blur-3xl opacity-50" />
        <div className="absolute -top-56 -left-40 w-[520px] h-[520px] bg-gradient-to-br from-violet-600/20 via-purple-600/15 to-indigo-600/10 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute -bottom-52 -right-32 w-[560px] h-[560px] bg-gradient-to-bl from-cyan-600/20 via-sky-600/15 to-blue-600/10 rounded-full blur-3xl animate-[pulse_11s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120]" />
      </div>

      <div className="relative mx-auto max-w-[1350px] px-4 sm:px-8 xl:px-20">
        <div className="min-h-[70vh] flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20 py-10 sm:py-16 md:py-20">
          <div className="w-full xl:w-[55%] text-center xl:text-left space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-slate-800/50 backdrop-blur-sm px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-400 shadow-sm shadow-cyan-500/10">
                Data Science Community · ELTE
              </div>
              <p className="text-sm text-slate-400 font-medium">
                Learn, build, and showcase projects with a supportive community.
              </p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight tracking-tight">
                {content.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                {content.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-start justify-center w-full">
              <button
                onClick={() => handleCtaClick(content.primaryCta.href)}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:-translate-y-1 hover:shadow-violet-500/40 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
              >
                {content.primaryCta.label}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <button
                onClick={() => handleCtaClick(content.secondaryCta.href)}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-slate-700 px-8 py-4 text-base font-semibold text-emerald-300 bg-slate-800/50 backdrop-blur-sm transition hover:text-white hover:border-emerald-500/50 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
              >
                {content.secondaryCta.label}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
              <div className="rounded-3xl bg-[#1E293B]/80 border border-slate-700/50 p-5 shadow-lg shadow-black/20 border-l-4 border-l-violet-500 text-left flex flex-col gap-1.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-violet-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wide">Community</p>
                </div>
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="text-sm text-slate-400">Active members</p>
              </div>
              <div className="rounded-3xl bg-[#1E293B]/80 border border-slate-700/50 p-5 shadow-lg shadow-black/20 border-l-4 border-l-cyan-500 text-left flex flex-col gap-1.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wide">Projects</p>
                </div>
                <p className="text-3xl font-bold text-white">4+</p>
                <p className="text-sm text-slate-400">Projects this semester</p>
              </div>
              <div className="rounded-3xl bg-[#1E293B]/80 border border-slate-700/50 p-5 shadow-lg shadow-black/20 border-l-4 border-l-emerald-500 text-left flex flex-col gap-1.5 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-emerald-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wide">Sessions</p>
                </div>
                <p className="text-3xl font-bold text-white">Weekly</p>
                <p className="text-sm text-slate-400">Talks & workshops</p>
              </div>
            </div>

            <div className="pt-6 text-center lg:text-left">
              <p className="text-sm text-slate-400 italic">
                “Best student community for data at ELTE — you learn something new every meetup.”
                <span className="font-semibold text-violet-400"> — Club organizers</span>
              </p>
            </div>
          </div>

          <div className="flex-[1.1] w-full max-w-3xl mx-auto flex flex-col gap-4 sm:gap-5">
            <div className="self-center xl:self-end rounded-2xl bg-[#1E293B]/90 border border-slate-700/50 shadow-lg shadow-black/20 px-5 sm:px-6 py-4 text-left space-y-2 w-full sm:w-[75%] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
                Next meetup
              </p>
              <p className="text-sm font-semibold text-white">
                Friday · 4:00 – 5:00 PM · ELTE Campus
              </p>
              <p className="text-xs text-slate-400">Hands-on session</p>
            </div>
            <div className="relative rounded-[36px] overflow-hidden bg-slate-800/80 backdrop-blur-md border border-slate-700/50 shadow-2xl shadow-black/30 aspect-[4/3] sm:aspect-[5/3] min-h-[260px] sm:min-h-[360px] w-full">
              <div className="absolute inset-4 rounded-[30px] border border-white/30 pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden rounded-[36px] bg-slate-800">
                <div
                  className="flex h-full transition-transform duration-[1500ms] ease-smooth will-change-transform"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  {images.map((img) => (
                    <div key={img} className="min-w-full h-full">
                      <img
                        src={img}
                        alt="Data Science Club members"
                        className="w-full h-full object-cover object-center"
                        loading={images.indexOf(img) === 0 ? "eager" : "lazy"}
                        fetchpriority={images.indexOf(img) === 0 ? "high" : "auto"}
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={goToPrev}
                className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 text-white p-2 shadow-md shadow-black/20 border border-slate-700 hover:bg-slate-800"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/80 text-white p-2 shadow-md shadow-black/20 border border-slate-700 hover:bg-slate-800"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-2.5 rounded-full border border-white/60 transition-all duration-500 ease-smooth ${idx === currentImage ? 'w-8 bg-white/90' : 'w-2.5 bg-white/20 hover:bg-white/40'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
