import { useState } from 'react'
import members from '../content/members.json'

const imageModules = import.meta.glob('../images/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
})

const imageMap = Object.entries(imageModules).reduce((acc, [path, image]) => {
  const fileName = path.split('/').pop()
  if (!fileName) return acc

  const lowerFileName = fileName.toLowerCase()
  acc[`/src/images/${fileName}`] = image
  acc[`/src/images/${lowerFileName}`] = image
  acc[fileName] = image
  acc[lowerFileName] = image
  return acc
}, {})

function resolveImageSrc(imagePath) {
  if (!imagePath) return null

  const normalized = imagePath.trim()
  const fileName = normalized.split('/').pop()?.toLowerCase()

  if (imageMap[normalized]) return imageMap[normalized]
  if (imageMap[normalized.toLowerCase()]) return imageMap[normalized.toLowerCase()]
  if (fileName && imageMap[fileName]) return imageMap[fileName]

  // Allow direct URLs/public paths to render if provided in content JSON.
  return normalized
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
  const imageSrc = resolveImageSrc(person.image)

  const getObjectPosition = () => {
    if (person.name === 'Kumar Ayush') return '50% 22%'
    if (person.name === 'Haseeb Raza') return '50% 20%'
    return 'center center'
  }

  // Calculate delay based on index for staggered effect
  const delayClass = `delay-${(index % 4) + 1}`

  return (
    <div className={`glass-card overflow-hidden group reveal ${delayClass}`}>
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F3EDE2]">
        {imageSrc && !imageError ? (
          <img
            src={imageSrc}
            alt={person.name}
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            style={{ objectPosition: getObjectPosition() }}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#F3EDE2] text-[#231F1A]/40 text-4xl font-display font-bold">
            {getInitials(person.name)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1C18]/35 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        {person.role && (
          <div className="absolute left-5 bottom-5 rounded-full bg-[#F3EDE2]/80 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#231F1A]">
            {person.role}
          </div>
        )}
      </div>

      <div className="p-6 space-y-5">
        <div>
          <h4 className="text-lg font-display font-bold text-[#231F1A] group-hover:text-[#1F1C18] transition-colors duration-300">
            {person.name}
          </h4>
          <p className="text-sm font-semibold text-[#231F1A]/60 mt-2">
            {person.role || 'DSC Member'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {person.link && (
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#231F1A]/15 bg-[#F3EDE2]/80 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#231F1A]/70 hover:border-[#1F1C18]/40 hover:text-[#1F1C18] transition-all duration-300"
              aria-label={`LinkedIn profile of ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 8.98h2.96V21H3.5V8.98ZM9.56 8.98h2.84v1.64h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V21h-2.96v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9.56V8.98Z" />
              </svg>
              LinkedIn
            </a>
          )}
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#231F1A]/15 bg-[#F3EDE2]/80 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#231F1A]/70 hover:border-[#1F1C18]/40 hover:text-[#1F1C18] transition-all duration-300"
              aria-label={`Email ${person.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm0 2.6V17h16V9.6l-8 5-8-5Z" />
              </svg>
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Members() {
  return (
    <section id="members" className="relative py-20 reveal">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-[#1F1C18] font-bold tracking-[0.2em] text-xs uppercase mb-4">
            <span className="w-8 h-px bg-[#1F1C18]"></span>
            <span>The Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#231F1A] mb-6">
            Meet the <span className="text-gradient">Innovators</span> behind DSC.
          </h2>
          <p className="text-lg text-[#231F1A]/70 font-medium">
            Dedicated individuals driving innovation and excellence in data science at ELTE.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((person, index) => (
            <MemberCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
