import { useState } from 'react'
import { Linkedin, Mail } from 'lucide-react'
import members from '../content/members.json'

// Import all member images
import ayushImage from '../images/members/ayush.jpeg'
import haseebImage from '../images/members/haseeb.png'
import itiImage from '../images/members/iti.jpg'
import aminaImage from '../images/members/amina.jpeg'
import nazrinImage from '../images/members/nazrin.jpeg'
import abaidullahImage from '../images/members/abaidullah.jpeg'
import emanImage from '../images/members/eman.jpeg'
import mateImage from '../images/members/mate.jpeg'
import aqdasImage from '../images/members/aqdas.jpeg'

// Map image paths from JSON to imported images
const imageMap = {
  '/src/images/members/ayush.jpeg': ayushImage,
  '/src/images/members/haseeb.png': haseebImage,
  '/src/images/members/iti.jpg': itiImage,
  '/src/images/members/amina.jpeg': aminaImage,
  '/src/images/members/nazrin.jpeg': nazrinImage,
  '/src/images/members/abaidullah.jpeg': abaidullahImage,
  '/src/images/members/eman.jpeg': emanImage,
  '/src/images/members/mate.jpeg': mateImage,
  '/src/images/members/aqdas.jpeg': aqdasImage,
}

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function MemberCard({ person, index }) {
  const [imageError, setImageError] = useState(false)
  const imageSrc = person.image ? imageMap[person.image] || null : null

  const getImageStyle = () => {
    const baseStyle = {
      transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    }

    // Safer headshot framing (0% is top of image, 100% is bottom)
    // Most standard headshots have the face 1/3 down
    if (person.name === 'Kumar Ayush') return { ...baseStyle, objectPosition: 'center 15%' }
    if (person.name === 'Haseeb Raza') return { ...baseStyle, objectPosition: 'center 10%' }
    if (person.name === 'Podder Itilekha') return { ...baseStyle, objectPosition: 'center 20%' }
    if (person.name === 'Eman Aftab') return { ...baseStyle, objectPosition: 'center 15%' }
    if (person.name === 'Abaidullah Asif') return { ...baseStyle, objectPosition: 'center 15%' }
    if (person.name === 'Amina Tynybekova') return { ...baseStyle, objectPosition: 'center 15%' }
    if (person.name === 'Nazrin Majidova') return { ...baseStyle, objectPosition: 'center 15%' }
    if (person.name === 'Balogh Máté') return { ...baseStyle, objectPosition: 'center 2%', transform: 'scale(1.1)' }
    if (person.name === 'Aqdas Mujahid') return { ...baseStyle, objectPosition: 'center 5%', transform: 'scale(1.4)' }

    return { ...baseStyle, objectPosition: 'center 15%' }
  }

  const delayDelay = (index % 4) * 100

  return (
    <div
      className="group flex flex-col items-center bg-transparent reveal"
      style={{ transitionDelay: `${delayDelay}ms` }}
    >
      {/* Photo Frame */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-2xl border border-[--color-border-glass] bg-[--color-bg-surface] shadow-sm group-hover:shadow-2xl transition-all duration-700">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover saturate-[0.8] contrast-[1.05] grayscale group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-110 transition-all duration-1000"
            style={getImageStyle()}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[--color-bg-surface] text-[--color-text-muted] text-4xl font-display font-bold">
            {getInitials(person.name)}
          </div>
        )}
      </div>

      {/* Info Content */}
      <div className="mt-6 text-center w-full px-2">
        <h4 className="text-xl sm:text-2xl font-display font-black text-[--color-text-primary] tracking-tight mb-1">
          {person.name}
        </h4>
        <div className="mb-6">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-black text-[--color-accent] filter brightness-125">
            {person.role}
          </span>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[--color-bg-surface] border border-[--color-border-glass] text-[--color-text-primary] hover:text-[#0077B5] hover:border-[#0077B5] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="p-3 rounded-xl bg-[--color-bg-surface] border border-[--color-border-glass] text-[--color-text-primary] hover:text-[--color-accent] hover:border-[--color-accent] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="relative py-24 sm:py-32 bg-[--color-bg-base]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 px-4 sm:px-0">
          <div className="section-label mb-4 reveal">The Brains</div>
          <h2 className="text-4xl sm:text-6xl font-display font-black text-[--color-text-primary] mb-6 reveal delay-1 leading-tight tracking-tighter">
            Meet the <span className="text-gradient">Core Team</span>.
          </h2>
          <p className="text-lg sm:text-xl text-[--color-text-secondary] reveal delay-2 font-medium">
            A diverse group of students and mentors passionate about the future of Data Science.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-x-10 gap-y-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-0">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
