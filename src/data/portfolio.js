// Tout ce qui n'est pas du texte traduit se change ici.
export const profile = {
  email: 'noufousyemi@gmail.com',
  phone: '00229 0140438352',
  cv: 'public/CV_Farou_Noufous.pdf', // déposez votre CV dans public/cv.pdf
  links: { github: 'https://github.com/farounoufous/', linkedin: 'https://www.linkedin.com/in/farou-noufous-07a6a8367/' }
}

// level : 'advanced' (83 %) ou 'intermediate' (67 %)
export const skills = [
  { name: 'React JS', level: 'advanced' },
  { name: 'React Native', level: 'advanced' },
  { name: 'Node.js', level: 'intermediate' },
  { name: 'Python', level: 'intermediate' },
  { name: 'MySQL', level: 'intermediate' },
  { name: 'Laravel', level: 'intermediate' },
  { name: 'Angular', level: 'intermediate' },
  { name: 'Vue.js', level: 'advanced' }
]

// images : déposez vos captures dans public/projects/ puis listez-les
// ex. { src: '/projects/boutique-1.png', device: 'desktop' } (device : 'desktop' ou 'mobile')
// Sans image, des visuels de remplacement s'affichent. Textes : src/locales/*.json
export const projects = [
  { id: 'wifidrop', tags: ['Vue.js', 'Node.js'], colors: ['#e3e7ff', '#f7e1ea'], images: [ { src: '/projects/wifidrop.png', device: 'desktop' } ], links: [{ label: 'Démo', url: 'https://wifidrop-ysln.onrender.com/' }] },
  { id: 'subline', tags: ['Vue', 'Node.js', 'Socket.IO'], colors: ['#f1e8ff', '#e3e7ff'], images: [{ src: '/projects/subline.png', device: 'desktop' }], links: [{ label: 'Démo', url: 'https://subline-65gp-63upjgdy4-yemi13074.vercel.app/' }] },
  { id: 'modulive', tags: ['React Native', 'NodeJs', 'Socket.IO', 'MongoDB'], colors: ['#dfe6ff', '#efe5fa'], images: [{ src: '/projects/modulive.png', device: 'desktop' }], links: [{ label: 'Démo', url: 'https://modulive.vercel.app/' }] },
  { id: 'codeduel', tags: ['ReactJs', 'NodeJS', 'Python', 'MongoDB'], colors: ['#f7e1ea', '#e8ecff'], images: [{ src: '/projects/codeduel.png', device: 'desktop' }], links: [{ label: 'Démo', url: 'https://codebyduel.netlify.app/' }] },
  { id: 'clearway', tags: ['ReactJs', 'NodeJS', 'Python', 'MongoDB'], colors: ['#f7e1ea', '#e8ecff'], images: [{ src: '/projects/clearway.png', device: 'mobile' }], links: [{ label: 'Démo', url: 'https://clearway-phi.vercel.app/' }] },
]

export const slidesOf = (p) =>
  p.images.length ? p.images : [{ device: 'desktop' }, { device: 'mobile' }, { device: 'desktop' }]
