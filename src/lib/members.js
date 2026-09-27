import ayushImage from '../images/members/ayush.jpeg'
import haseebImage from '../images/members/haseeb.png'
import itiImage from '../images/members/iti.jpg'
import aminaImage from '../images/members/amina.jpeg'
import nazrinImage from '../images/members/nazrin.jpeg'
import abaidullahImage from '../images/members/abaidullah.jpeg'
import emanImage from '../images/members/eman.jpeg'
import mateImage from '../images/members/mate.jpeg'
import aqdasImage from '../images/members/aqdas.jpeg'

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

const facePositions = {
  'Kumar Ayush': 'center 15%',
  'Haseeb Raza': 'center 10%',
  'Podder Itilekha': 'center 20%',
  'Balogh Máté': 'center 2%',
  'Aqdas Mujahid': 'center 8%',
}

export function memberImage(person) {
  return person.image ? imageMap[person.image] || null : null
}

export function facePosition(name) {
  return facePositions[name] || 'center 15%'
}

export function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}
