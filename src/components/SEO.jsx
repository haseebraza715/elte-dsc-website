import { useEffect, memo, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const siteData = {
  name: 'Data Science Club - ELTE',
  description: 'Join the Data Science Club at Eötvös Loránd University. Learn data science, AI, and machine learning through hands-on projects, weekly events, and collaborative learning.',
  url: 'https://datasciencelte.netlify.app',
  image: '/og-image.png',
  twitter: '@dscelte',
}

const SEO = memo(function SEO({ title, description, path = '', type = 'website', image, keywords }) {
  const location = useLocation()
  const prevValues = useRef({ title: '', description: '', path: '' })
  
  const fullUrl = `${siteData.url}${path || location.pathname}`
  const pageTitle = title ? `${title} | ${siteData.name}` : siteData.name
  const pageDescription = description || siteData.description
  const pageImage = image || `${siteData.url}${siteData.image}`
  const pageKeywords = keywords || 'data science, machine learning, AI, ELTE, Budapest, student club, data science community, python, pandas, data analysis'

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

    // Update meta tags efficiently
    const updateMeta = (selector, attr, value) => {
      let element = document.querySelector(selector)
      if (!element) {
        // Create element if it doesn't exist
        element = document.createElement(selector.includes('meta') ? 'meta' : 'link')
        if (selector.includes('meta[name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1]
          const property = selector.match(/property="([^"]+)"/)?.[1]
          if (name) element.setAttribute('name', name)
          if (property) element.setAttribute('property', property)
        } else if (selector.includes('link[rel=')) {
          const rel = selector.match(/rel="([^"]+)"/)?.[1]
          if (rel) element.setAttribute('rel', rel)
        }
        document.head.appendChild(element)
      }
      if (element && element.getAttribute(attr) !== value) {
        element.setAttribute(attr, value)
      }
    }

    // Update all meta tags
    updateMeta('meta[name="description"]', 'content', pageDescription)
    updateMeta('meta[name="keywords"]', 'content', pageKeywords)
    updateMeta('link[rel="canonical"]', 'href', fullUrl)
    updateMeta('meta[property="og:title"]', 'content', pageTitle)
    updateMeta('meta[property="og:description"]', 'content', pageDescription)
    updateMeta('meta[property="og:url"]', 'content', fullUrl)
    updateMeta('meta[property="og:type"]', 'content', type)
    updateMeta('meta[property="og:image"]', 'content', pageImage)
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    updateMeta('meta[name="twitter:title"]', 'content', pageTitle)
    updateMeta('meta[name="twitter:description"]', 'content', pageDescription)
    updateMeta('meta[name="twitter:image"]', 'content', pageImage)

    // Add breadcrumb structured data
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteData.url
        }
      ]
    }

    // Add page-specific breadcrumb
    if (title && title !== 'Home') {
      breadcrumbData.itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: fullUrl
      })
    }

    // Remove old breadcrumb script if exists
    const oldBreadcrumb = document.querySelector('script[data-breadcrumb]')
    if (oldBreadcrumb) {
      oldBreadcrumb.remove()
    }

    // Add new breadcrumb script
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.setAttribute('data-breadcrumb', 'true')
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData)
    document.head.appendChild(breadcrumbScript)
  }, [pageTitle, pageDescription, fullUrl, path, location.pathname, pageImage, pageKeywords, type, title])

  return null
})

export default SEO

