import { useEffect, memo, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const siteData = {
  name: 'Data Science Club - ELTE',
  description: 'Join the Data Science Club at Eötvös Loránd University. Learn data science, AI, and machine learning through hands-on projects, weekly events, and collaborative learning.',
  url: 'https://datasciencelte.netlify.app',
  image: '/og-image.png',
  twitter: '@dscelte',
}

const SEO = memo(function SEO({ title, description, path = '', type = 'website' }) {
  const location = useLocation()
  const prevValues = useRef({ title: '', description: '', path: '' })
  
  const fullUrl = `${siteData.url}${path || location.pathname}`
  const pageTitle = title ? `${title} | ${siteData.name}` : siteData.name
  const pageDescription = description || siteData.description

  useEffect(() => {
    // Only update if values actually changed
    if (
      prevValues.current.title === pageTitle &&
      prevValues.current.description === pageDescription &&
      prevValues.current.path === (path || location.pathname)
    ) {
      return
    }

    prevValues.current = { title: pageTitle, description: pageDescription, path: path || location.pathname }

    // Update document title
    if (document.title !== pageTitle) {
      document.title = pageTitle
    }

    // Update meta description
    const updateMeta = (selector, attr, value) => {
      let element = document.querySelector(selector)
      if (element && element.getAttribute(attr) !== value) {
        element.setAttribute(attr, value)
      }
    }

    updateMeta('meta[name="description"]', 'content', pageDescription)
    updateMeta('link[rel="canonical"]', 'href', fullUrl)
    updateMeta('meta[property="og:title"]', 'content', pageTitle)
    updateMeta('meta[property="og:description"]', 'content', pageDescription)
    updateMeta('meta[property="og:url"]', 'content', fullUrl)
    updateMeta('meta[name="twitter:title"]', 'content', pageTitle)
    updateMeta('meta[name="twitter:description"]', 'content', pageDescription)
  }, [pageTitle, pageDescription, fullUrl, path, location.pathname])

  return null
})

export default SEO

