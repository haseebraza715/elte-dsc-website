import { useEffect } from 'react'
import Resources from '../components/Resources.jsx'

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <Resources />
}

