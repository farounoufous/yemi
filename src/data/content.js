/**
 * Source unique du contenu du portfolio.
 * Les composants ne contiennent aucun texte en dur : tout se modifie ici.
 */

import clearwayImg from '../assets/projects/clearway.webp'
import sousTitreurImg from '../assets/projects/sous-titreur.webp'
import moduliveImg from '../assets/projects/modulive.webp'
import codeduelImg from '../assets/projects/codeduel.webp'

// ⚠️ À renseigner avant la mise en ligne
export const profile = {
  name: 'FAROU Noufous',
  title: 'Développeuse Fullstack',
  email: 'votre.email@exemple.com',
  linkedin: 'https://www.linkedin.com/in/votre-profil',
  github: 'https://github.com/votre-pseudo',
}

export const hero = {
  headline: ['Hi,', 'Je suis', 'FAROU Noufous'], // « Hi, Je suis FAROU Noufous »
}

// Texte intégré tel quel, sans aucune modification
export const bio =
  "Ici vous rencontrerez une developpeuse qui aime profondément ce qu'elle fait. Pour moi, notre secteur est un terrain de jeu qui bouge sans cesse : c'est pourquoi je cherche toujours à apprendre et à me dépasser. Au-delà des lignes  les lignes de code, vous découvrirez une personne entière,calme , guidée par une curiosité insatiable et une envie profonde de bien faire. Au quotidien, j'aborde la tech avec beaucoup de rigueur et d'autonomie, mais ce que j'aime par-dessus tout, c'est ce sentiment de liberté quand je crée une application robuste à partir d'une simple idée. Cette étincelle, c'est la même qui m'anime lorsque je me lance dans l'aventure de l'entrepreneuriat ou que je cherche à me dépasser en perfectionnant mon anglais. Et pour nourrir toute cette énergie, je m'évade régulièrement dans l'univers vibrant de la musique principalement de la K-pop, une culture dont la créativité m'inspire bien plus souvent qu'on ne le croit."

// Défilement horizontal des technologies (issues des 4 projets)
export const marquee = [
  'Vue.js',
  'Laravel',
  'FastAPI',
  'Pinia',
  'Tailwind CSS',
  'Leaflet.js',
  'Mapbox',
  'OpenAI Whisper',
  'JavaScript ES6+',
  'HTML5',
]

// Pastilles sous la biographie
export const skills = ['Fullstack', 'Vue.js', 'Laravel', 'FastAPI', 'Tailwind CSS']

export const timeline = [
  {
    period: 'Niveau actuel · L3',
    title: '3ème année de Licence en Génie Logiciel',
    focus:
      "Conception d'architectures logicielles complexes, design patterns, optimisation de bases de données, sécurité des applications et intégration de services Cloud/IA.",
    current: true,
  },
  {
    period: 'Années antérieures · L1 & L2',
    title: 'Deux premières années de tronc commun et spécialisation en Génie Logiciel',
    focus:
      "Algorithmique avancée, structures de données, développement web fullstack, programmation orientée objet (POO) et bases des systèmes d'exploitation.",
  },
  {
    period: 'Point de départ',
    title: 'Baccalauréat (Série Scientifique) — mention Très Bien, 17/20',
    focus: 'Solide background en mathématiques, logique et sciences physiques.',
  },
]

export const projects = [
  {
    index: '01',
    shot: {
      src: clearwayImg,
      alt: "Écran d'accueil de ClearWay Bénin : compteurs de voies bloquées et de signalements actifs, boutons « Vérifier mon trajet » et « Signaler une voie bloquée ».",
      device: 'phone',
      label: 'Application mobile',
      width: 422,
      height: 702,
    },
    name: 'ClearWay Bénin',
    role: 'Développeuse Fullstack',
    stack: ['Laravel (RESTful API)', 'Vue.js', 'Leaflet.js / Mapbox'],
    problem:
      'Centraliser et géolocaliser efficacement les signalements citoyens sur l’état des routes au Bénin sans saturer le serveur lors des pics de charge.',
    solution:
      'Mise en place d’une architecture découplée. API Laravel optimisée avec système de cache pour les requêtes de coordonnées géographiques répétitives. Côté Frontend, implémentation d’un chargement asynchrone des tuiles de cartes et regroupement (clustering) des marqueurs de signalement pour garantir une fluidité à 60 FPS sur mobile.',
    impact: 'Temps de traitement des données cartographiques inférieur à 120 ms.',
  },
  {
    index: '02',
    shot: {
      src: sousTitreurImg,
      alt: 'Interface du Sous-titreur : aperçu vidéo à gauche, liste des sous-titres horodatés à droite avec les actions Scinder, Fusionner et Supprimer.',
      device: 'browser',
      chrome: false, // la capture contient déjà sa propre barre de titre
      label: 'Sous-titreur Local',
      width: 1348,
      height: 706,
    },
    name: 'Sous-titreur',
    role: 'Développeuse Fullstack & Intégratrice IA',
    stack: ['Vue.js', 'FastAPI', 'OpenAI Whisper API'],
    problem:
      'Traiter des fichiers vidéo lourds pour la transcription textuelle sans bloquer le thread principal du serveur (éviter les coupures de connexion / timeouts).',
    solution:
      'Création d’un backend asynchrone avec FastAPI. Implémentation d’un système de file d’attente (Background Tasks) permettant de libérer l’utilisateur dès le téléversement de la vidéo. Intégration de l’API Whisper d’OpenAI pour la transcription multilingue, avec un algorithme de re-calcul et de lissage des sous-titres (timestamps SRT/VTT) directement géré en JavaScript côté Vue.js.',
    impact: 'Génération et synchronisation des sous-titres en moins de 30 secondes pour une vidéo de 5 minutes.',
  },
  {
    index: '03',
    shot: {
      src: moduliveImg,
      alt: 'Page d’accueil de Modulive : chiffres clés, filtres par catégorie et catalogue de meubles.',
      device: 'browser',
      label: 'Modulive — catalogue',
      width: 1705,
      height: 884,
    },
    name: 'Modulive',
    role: 'Développeuse Frontend unique',
    stack: ['Vue.js', 'Pinia', 'Tailwind CSS'],
    problem:
      'Garantir une expérience d’achat instantanée sur une plateforme e-commerce d’appareils ménagers, même avec des connexions mobiles instables.',
    solution:
      'Conception d’un catalogue ultra-réactif basé sur une gestion d’état centralisée stricte. Implémentation d’un système de filtrage multicritère (prix, catégorie, puissance) exécuté entièrement côté client pour éliminer les temps de latence réseau. Optimisation des images (lazy-loading) pour un affichage instantané des produits.',
    impact: 'Transition d’ajout au panier en moins de 16 ms.',
  },
  {
    index: '04',
    shot: {
      src: codeduelImg,
      alt: 'Page d’accueil de CodeDuel : quiz de programmation en temps réel, 20 joueurs, mise de 300 F, 5000 F à gagner.',
      device: 'browser',
      label: 'CodeDuel — accueil',
      width: 982,
      height: 738,
    },
    name: 'CodeDuel',
    role: 'Développeuse Logiciel',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript Vanilla'],
    problem:
      'Créer une application web de compétition de code en temps réel sans la lourdeur d’un framework, pour maximiser la vitesse d’exécution sur n’importe quel navigateur.',
    solution:
      'Focus absolu sur la performance brute. Utilisation exclusive de JavaScript moderne (ES6+) pour manipuler le DOM de manière chirurgicale. Gestion des animations d’interaction de manière native avec le moteur CSS de Tailwind, pour un poids total de bundle réduit à quelques kilo-octets.',
    impact: 'Score de performance Google Lighthouse de 100/100.',
  },
]
