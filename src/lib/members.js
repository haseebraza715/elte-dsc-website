import ayushImage from '../images/members/ayush.jpeg'
import haseebImage from '../images/members/haseeb.png'
import itiImage from '../images/members/iti.jpg'
import aminaImage from '../images/members/amina.jpeg'
import aibikeImage from '../images/members/aibike.jpeg'
import alizaImage from '../images/members/aliza.jpeg'
import nursultanImage from '../images/members/nursultan.jpeg'
import nazrinImage from '../images/members/nazrin.jpeg'

const imageMap = {
  '/src/images/members/ayush.jpeg': ayushImage,
  '/src/images/members/haseeb.png': haseebImage,
  '/src/images/members/iti.jpg': itiImage,
  '/src/images/members/amina.jpeg': aminaImage,
  '/src/images/members/aibike.jpeg': aibikeImage,
  '/src/images/members/aliza.jpeg': alizaImage,
  '/src/images/members/nursultan.jpeg': nursultanImage,
  '/src/images/members/nazrin.jpeg': nazrinImage,
}

const facePositions = {
  'Kumar Ayush': 'center 15%',
  'Haseeb Raza': 'center 10%',
  'Podder Itilekha': 'center 20%',
  Aibike: 'center 30%',
  Aliza: '45% 35%',
  Nursultan: 'center 25%',
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
