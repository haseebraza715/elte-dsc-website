import { useEffect } from 'react'
import Members from '../components/Members.jsx'

export default function MembersPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return <Members />
}

