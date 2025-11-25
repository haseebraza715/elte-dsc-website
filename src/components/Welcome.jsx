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
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4500)
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
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/60"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-[60px] bg-gradient-to-r from-sky-200/30 via-blue-200/15 to-sky-200/30 blur-3xl opacity-70" />
        <div className="absolute -top-56 -left-40 w-[520px] h-[520px] bg-gradient-to-br from-sky-300/25 via-blue-300/20 to-indigo-300/10 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute -bottom-52 -right-32 w-[560px] h-[560px] bg-gradient-to-bl from-blue-300/20 via-sky-300/15 to-cyan-300/10 rounded-full blur-3xl animate-[pulse_11s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-sky-50/60" />
      </div>

      <div className="relative mx-auto max-w-[1350px] px-4 sm:px-8 xl:px-20">
        <div className="min-h-[70vh] flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20 py-10 sm:py-16 md:py-20">
          <div className="w-full xl:w-[55%] text-center xl:text-left space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full border border-sky-100/80 bg-white/85 px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-sky-600 shadow-sm shadow-sky-500/10">
                Data Science Community · ELTE
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Learn, build, and showcase projects with a supportive community.
              </p>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {content.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                {content.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-start justify-center w-full">
              <button
                onClick={() => handleCtaClick(content.primaryCta.href)}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-1 hover:shadow-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-sky-600/50 px-8 py-4 text-base font-semibold text-sky-700 bg-white/85 backdrop-blur-sm transition hover:text-sky-800 hover:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
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

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
              <div className="rounded-3xl bg-white/85 border border-sky-100/70 p-5 shadow-sm shadow-sky-500/10 border-l-4 border-l-sky-200 text-left flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sky-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wide">Community</p>
                </div>
                <p className="text-3xl font-bold text-slate-900">40+</p>
                <p className="text-sm text-slate-600">Active members</p>
              </div>
              <div className="rounded-3xl bg-white/85 border border-sky-100/70 p-5 shadow-sm shadow-sky-500/10 border-l-4 border-l-sky-200 text-left flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sky-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wide">Projects</p>
                </div>
                <p className="text-3xl font-bold text-slate-900">4+</p>
                <p className="text-sm text-slate-600">Projects this semester</p>
              </div>
              <div className="rounded-3xl bg-white/85 border border-sky-100/70 p-5 shadow-sm shadow-sky-500/10 border-l-4 border-l-sky-200 text-left flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sky-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-12 8h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wide">Sessions</p>
                </div>
                <p className="text-3xl font-bold text-slate-900">Weekly</p>
                <p className="text-sm text-slate-600">Talks & workshops</p>
              </div>
            </div>

            <div className="pt-6 text-center lg:text-left">
              <p className="text-sm text-slate-500 italic">
                “Best student community for data at ELTE — you learn something new every meetup.”
                <span className="font-semibold text-slate-600"> — Club organizers</span>
              </p>
            </div>
          </div>

          <div className="flex-[1.1] w-full max-w-3xl mx-auto flex flex-col gap-4 sm:gap-5">
            <div className="self-center xl:self-end rounded-2xl bg-white/90 border border-sky-100/70 shadow-lg shadow-sky-500/20 px-5 sm:px-6 py-4 text-left space-y-2 w-full sm:w-[75%]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600">
                Next meetup
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Friday · 4:00 – 5:00 PM · ELTE Campus
              </p>
              <p className="text-xs text-slate-500">Hands-on session</p>
            </div>
            <div className="relative rounded-[36px] overflow-hidden bg-white/80 backdrop-blur-md border border-sky-100/70 shadow-2xl shadow-sky-500/10 aspect-[4/3] sm:aspect-[5/3] min-h-[260px] sm:min-h-[360px] w-full">
              <div className="absolute inset-4 rounded-[30px] border border-white/30 pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden rounded-[36px]">
                <div
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  {images.map((img) => (
                    <div key={img} className="min-w-full h-full">
                      <img
                        src={img}
                        alt="Data Science Club members"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={goToPrev}
                className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/85 text-sky-700 p-2 shadow-md shadow-sky-500/20 border border-sky-100/80 hover:bg-white"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/85 text-sky-700 p-2 shadow-md shadow-sky-500/20 border border-sky-100/80 hover:bg-white"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2.5 w-2.5 rounded-full border border-white/60 ${
                      idx === currentImage ? 'bg-white/90' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
