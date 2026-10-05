import { PortfolioContent } from './portfolio-content';

export const CONTENT_FR: PortfolioContent = {
  lang: 'fr',
  htmlLang: 'fr',
  pageTitle: 'Atef Khelifi — Ingénieur Fullstack',
  metaDescription:
    'Ingénieur Fullstack spécialisé en Angular, Node.js et Spring Boot. Applications web SaaS, microservices, API RESTful et CI/CD. Découvrez mes projets et prenons contact.',
  nav: [
    { label: 'Accueil', anchor: 'home' },
    { label: 'À propos', anchor: 'about' },
    { label: 'Compétences', anchor: 'skills' },
    { label: 'Expérience', anchor: 'experience' },
    { label: 'Projets', anchor: 'projects' },
    { label: 'Services', anchor: 'services' },
    { label: 'Contact', anchor: 'contact' },
  ],

  profile: {
    name: 'Atef Khelifi',
    firstName: 'Atef',
    role: 'Ingénieur Fullstack',
    roles: [
      'Ingénieur Fullstack',
      'Développeur Angular',
      'Développeur Node.js / Spring Boot',
      'Architecture microservices',
    ],
    tagline:
      "Je conçois et développe des applications web complètes — de l'API RESTful à l'interface Angular — pensées pour durer et pour évoluer.",
    bio: [
      "Ingénieur Fullstack avec plus de 5 ans d'expérience dans le développement d'applications web SaaS. Spécialisé en Angular, Node.js et Spring Boot, avec une solide maîtrise des microservices, des API RESTful, de la gestion d'état avec NgRx et de l'intégration CI/CD avec Docker.",
      "J'accompagne aussi les équipes : supervision de développeurs frontend, développement agile, revue de code et suivi de stagiaires de fin d'études. Je porte une attention particulière à la performance applicative et à la qualité du code livré.",
    ],
    location: 'Tunisie',
    availability: 'Ouvert aux nouvelles opportunités',
    email: 'khelifiatef@outlook.fr',
    phone: '(+216) 52 343 232',
    resumeUrl: '/assets/resume.pdf',
    socials: [
      { label: 'GitHub', url: 'https://github.com/atefkhelifi', icon: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/atef-khelifi', icon: 'linkedin' },
      { label: 'Email', url: 'mailto:khelifiatef@outlook.fr', icon: 'mail' },
    ],
    stats: [
      { value: '5+', label: "années d'expérience" },
      { value: '4', label: 'entreprises' },
      { value: '30+', label: 'technologies maîtrisées' },
      { value: '2', label: 'langues (FR / EN · B2)' },
    ],
  },

  tools: [
    'Angular',
    'TypeScript',
    'RxJS',
    'NgRx',
    'Node.js',
    'Express',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Docker',
    'Jenkins',
    'AWS',
    'Swagger',
    'Socket.IO',
    'Nginx',
    'Postman',
  ],

  skills: [
    {
      title: 'Frontend',
      icon: 'layout',
      accent: '#7c5cff',
      skills: [
        'Angular (v10 → v18)',
        'TypeScript',
        'RxJS',
        'NgRx',
        'Angular Material',
        'PrimeNG',
        'Bootstrap',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: 'Backend',
      icon: 'server',
      accent: '#22d3ee',
      skills: [
        'Node.js',
        'Express.js',
        'Java',
        'Spring Boot',
        'Spring Security',
        'API RESTful',
      ],
    },
    {
      title: 'Bases de données',
      icon: 'database',
      accent: '#f472b6',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle'],
    },
    {
      title: 'DevOps',
      icon: 'cloud',
      accent: '#a3e635',
      skills: ['Docker', 'Jenkins', 'Git', 'GitLab', 'CI/CD', 'SonarQube', 'Nginx'],
    },
    {
      title: 'Architecture',
      icon: 'layers',
      accent: '#fbbf24',
      skills: ['Microservices', 'API RESTful', 'Nx Monorepo', 'Spring Cloud Gateway', 'Spring Cloud Config'],
    },
    {
      title: 'Outils',
      icon: 'plug',
      accent: '#38bdf8',
      skills: ['GitHub', 'GitLab', 'Postman', 'Swagger', 'Socket.IO', 'JUnit', 'Log4j'],
    },
  ],

  experience: [
    {
      role: 'Développeur Front End',
      company: 'Smartconseil',
      period: '12.2024 — Aujourd’hui',
      location: 'Tunisie',
      current: true,
      summary:
        "Développement d'une application web SaaS : un logiciel de lutte contre le harcèlement scolaire et le cyberharcèlement chez les plus jeunes.",
      achievements: [
        "Supervision de l'équipe de développement frontend et création d'une interface utilisateur intuitive et réactive avec Angular.",
        "Implémentation de NgRx pour la gestion de l'état global, optimisant les performances et facilitant la maintenance du code.",
        "Intégration et consommation d'API RESTful pour la communication entre le frontend et le backend.",
        "Mise en place de systèmes de surveillance robustes et de gestion des erreurs garantissant une disponibilité élevée.",
        'Collaboration avec les équipes UX/UI pour garantir une expérience utilisateur fluide et intuitive.',
      ],
      stack: [
        'Angular 18',
        'TypeScript',
        'RxJS',
        'NgRx',
        'PrimeNG',
        'Angular Material',
        'Bootstrap',
        'GitLab',
      ],
    },
    {
      role: 'Développeur Fullstack',
      company: 'EmyeHR',
      period: '10.2021 — 11.2024',
      location: 'Tunisie',
      current: false,
      summary:
        "Conception et développement d'une application web SaaS complète de gestion des employés, améliorant la qualité de vie au travail des entreprises clientes.",
      achievements: [
        'Développement côté serveur avec Node.js et Express, et PostgreSQL comme base de données.',
        "Migration réussie de l'application existante d'Angular 10 vers Angular 17.",
        "Développement d'un système de chat en temps réel avec Socket.IO.",
        "Conteneurisation de l'application avec Docker pour un déploiement simplifié et des environnements cohérents.",
        "Supervision de l'équipe frontend et accompagnement d'un stagiaire de fin d'études.",
        'Mise en place de systèmes de surveillance robustes et de gestion des erreurs.',
      ],
      stack: [
        'Node.js',
        'Express',
        'Angular',
        'PostgreSQL',
        'Socket.IO',
        'Docker',
        'AWS (S3, CloudFront)',
        'Git',
      ],
    },
    {
      role: 'Développeur Fullstack',
      company: 'HITSolutions',
      period: '12.2020 — 09.2021',
      location: 'Tunisie',
      current: false,
      summary: "Conception et développement d'une application de gestion d'appareils connectés.",
      achievements: [
        "Conception et mise en œuvre de microservices Spring Boot avec Oracle comme base de données.",
        "Mise en place de l'authentification et de l'autorisation des utilisateurs avec Spring Security.",
        'Développement d’interfaces réactives avec Angular 10, compatibles multi-navigateurs.',
        'Mise en place de pipelines CI/CD.',
        "Création d'une documentation complète de l'API avec Swagger.",
      ],
      stack: [
        'Spring Boot',
        'Angular 10',
        'Oracle',
        'Spring Security',
        'Spring Cloud Gateway',
        'Spring Cloud Config',
        'Swagger',
        'Jenkins',
        'SonarQube',
        'JUnit',
      ],
    },
    {
      role: 'Développeur Backend (Stage d’été)',
      company: 'infosmile',
      period: '07.2020 — 10.2020',
      location: 'Tunisie',
      current: false,
      summary: "Développement d'une plateforme backend complète pour faciliter la recherche d'emploi.",
      achievements: [
        'Mise en place de l’infrastructure serveur avec Spring Boot et MySQL.',
        "Web scraping en Java avec Jsoup pour identifier des offres d'emploi compatibles avec des profils spécifiques.",
        "Réalisation de tests d'API avec Rest Client et Postman.",
      ],
      stack: ['Spring Boot', 'Spring Security', 'Java', 'Jsoup', 'MySQL', 'Postman'],
    },
  ],

  projects: [
    {
      id: 'prevention-harcelement',
      title: 'Prévention du harcèlement scolaire',
      category: 'SaaS',
      description:
        'Application SaaS de lutte contre le harcèlement et le cyberharcèlement chez les plus jeunes, utilisée par des établissements scolaires.',
      highlights: [
        'Interface Angular 18 réactive et accessible',
        'Gestion d’état globale avec NgRx',
        'Consommation d’API RESTful et supervision applicative',
      ],
      stack: ['Angular 18', 'TypeScript', 'RxJS', 'NgRx', 'PrimeNG', 'Angular Material'],
      featured: true,
    },
    {
      id: 'emyerh',
      title: 'EmyeHR — Gestion des employés',
      category: 'SaaS',
      description:
        'Plateforme SaaS complète de gestion des employés : suivi RH, collaboration interne et administration.',
      highlights: [
        'Backend Node.js / Express avec PostgreSQL',
        'Chat temps réel avec Socket.IO',
        'Migration d’Angular 10 vers Angular 17',
        'Déploiement conteneurisé sur AWS',
      ],
      stack: [
        'Node.js',
        'Express',
        'Angular',
        'PostgreSQL',
        'Socket.IO',
        'Docker',
        'AWS S3',
        'CloudFront',
      ],
      featured: false,
    },
    {
      id: 'appareils-connectes',
      title: 'Gestion d’appareils connectés',
      category: 'Microservices',
      description:
        'Plateforme de supervision et de gestion d’appareils connectés, bâtie sur une architecture microservices sécurisée.',
      highlights: [
        'Microservices Spring Boot avec Oracle',
        'Authentification et autorisation Spring Security',
        'Passerelle et configuration centralisées',
        'Documentation d’API avec Swagger',
      ],
      stack: [
        'Spring Boot',
        'Angular 10',
        'Oracle',
        'Spring Security',
        'Spring Cloud Gateway',
        'Swagger',
        'Jenkins',
      ],
      featured: false,
    },
    {
      id: 'recherche-emploi',
      title: 'Plateforme de recherche d’emploi',
      category: 'Backend',
      description:
        'Plateforme backend agrégeant des offres d’emploi issues de plusieurs sites grâce au web scraping.',
      highlights: [
        'Collecte automatisée des offres avec Jsoup',
        'Matching des offres par profil recherché',
        'API testée avec Postman et Rest Client',
      ],
      stack: ['Spring Boot', 'Spring Security', 'Java', 'Jsoup', 'MySQL'],
      featured: false,
    },
    {
      id: 'microservices-project',
      title: 'Plateforme microservices Spring Cloud',
      category: 'Microservices',
      description:
        'Architecture microservices complète : découverte de services, configuration centralisée et routage via une passerelle, autour d’un service métier de gestion d’entreprises.',
      highlights: [
        'Découverte de services avec Eureka',
        'Configuration centralisée via Spring Cloud Config',
        'Passerelle de routage et dépôt de configuration dédié',
      ],
      stack: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Spring Cloud Gateway', 'Java', 'Maven'],
      repo: 'https://github.com/atefkhelifi/microservices-project',
      featured: true,
    },
    {
      id: 'blog-platform',
      title: 'Plateforme de blog collaborative',
      category: 'Fullstack',
      description:
        'Plateforme de blog multi-auteurs (stack MEAN) : authentification, gestion des articles et commentaires en temps réel.',
      highlights: [
        'Frontend Angular 16 et authentification des utilisateurs',
        'Gestion complète des articles et de l’espace auteur',
        'Commentaires en temps réel',
      ],
      stack: ['Angular 16', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      repo: 'https://github.com/atefkhelifi/Blog-frontend',
      featured: true,
    },
    {
      id: 'ecommerce-platform',
      title: 'Plateforme e-commerce en monorepo Nx',
      category: 'Fullstack',
      description:
        'Plateforme e-commerce complète : frontend Angular 18 organisé dans un monorepo Nx et backend exposant les API RESTful de la boutique.',
      highlights: [
        'Angular 18 dans un monorepo Nx',
        'API RESTful : produits, authentification, commandes',
        'Séparation nette entre frontend et backend',
      ],
      stack: ['Angular 18', 'Nx Monorepo', 'TypeScript', 'Node.js', 'API RESTful'],
      repo: 'https://github.com/atefkhelifi/E-Commerce-frontend',
      featured: true,
    },
    {
      id: 'messenger-clone',
      title: 'Messagerie temps réel',
      category: 'Temps réel',
      description:
        'Application de messagerie inspirée de Messenger : authentification, salons de discussion et échange de messages en temps réel.',
      highlights: [
        'Frontend Angular 19',
        'Backend Node.js avec API RESTful',
        'Gestion des salons et des messages en temps réel',
      ],
      stack: ['Angular 19', 'TypeScript', 'Node.js', 'API RESTful'],
      repo: 'https://github.com/atefkhelifi/Messenger-clone-front',
      featured: false,
    },
    {
      id: 'doctor-app',
      title: 'doctor-app — Orientation médicale',
      category: 'Backend',
      description:
        'Application Spring Boot qui détermine le type de médecin à consulter à partir des symptômes et localise le praticien le plus proche dans une base PostgreSQL.',
      highlights: [
        'Détermination du spécialiste selon les symptômes',
        'Recherche du médecin le plus proche',
        'Persistance des données dans PostgreSQL',
      ],
      stack: ['Spring Boot', 'Java', 'PostgreSQL', 'API RESTful'],
      repo: 'https://github.com/atefkhelifi/doctor-app',
      featured: false,
    },
    {
      id: 'medical-ai-api',
      title: 'API IA de détection de spécialiste',
      category: 'IA',
      description:
        'API Flask qui s’appuie sur Google Gemini pour recommander le bon spécialiste médical à partir d’une description de symptômes, quelle que soit la langue.',
      highlights: [
        'Intégration de Google Gemini',
        'Compréhension multilingue des symptômes',
        'API Python légère et facile à déployer',
      ],
      stack: ['Python', 'Flask', 'Google Gemini', 'API RESTful'],
      repo: 'https://github.com/atefkhelifi/medical-specialist-detector-api',
      featured: false,
    },
  ],

  services: [
    {
      title: 'Développement frontend Angular',
      description:
        'Des interfaces réactives et maintenables, du prototype au design system réutilisable.',
      icon: 'layout',
      points: ['Angular v10 → v18', 'NgRx & RxJS', 'Design systems réutilisables'],
    },
    {
      title: 'Développement backend & API',
      description:
        'Des services robustes et documentés qui alimentent votre frontend sans friction.',
      icon: 'server',
      points: ['Node.js / Express', 'Spring Boot & Spring Security', 'API RESTful documentées'],
    },
    {
      title: 'Architecture microservices & DevOps',
      description:
        'Industrialiser le déploiement et garder des environnements cohérents du poste au cloud.',
      icon: 'cloud',
      points: ['Docker & CI/CD', 'Spring Cloud Gateway & Config', 'Déploiement AWS'],
    },
    {
      title: 'Encadrement & qualité logicielle',
      description:
        'Faire monter une équipe en compétence et protéger la qualité du code dans le temps.',
      icon: 'users',
      points: ['Supervision d’équipe frontend', 'Revue de code & mentorat', 'Tests, SonarQube, monitoring'],
    },
  ],

  ui: {
    nav: {
      cta: 'Discutons',
      themeToLight: 'Passer en mode clair',
      themeToDark: 'Passer en mode sombre',
      toggleMenu: 'Ouvrir le menu de navigation',
      language: 'Changer de langue',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      secondLine: 'Je construis des applications web fullstack.',
      codeExperience: '5+ ans',
      codeWindowFile: 'developpeur.ts',
      codeWindowComment: '// ouvert aux nouvelles opportunités',
      viewWork: 'Voir mes réalisations',
      downloadCv: 'Télécharger le CV',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Du besoin à la',
      highlight: 'mise en production',
      subtitle:
        "Plus de cinq ans à concevoir et développer des applications SaaS, de l'API RESTful à l'interface.",
      locationLabel: 'Localisation',
      emailLabel: 'Email',
      highlights: [
        {
          icon: 'users',
          title: 'Esprit d’équipe',
          text: 'J’ai supervisé des équipes frontend et accompagné des stagiaires de fin d’études, avec une vraie culture de la revue de code.',
        },
        {
          icon: 'layers',
          title: 'Architecture',
          text: 'Microservices Spring Boot, Nx monorepo, gestion d’état NgRx : des fondations qui tiennent dans le temps.',
        },
        {
          icon: 'sparkles',
          title: 'Qualité & performance',
          text: 'Tests, SonarQube, supervision applicative et optimisation continue des performances.',
        },
      ],
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Une stack',
      highlight: 'fullstack',
      subtitle:
        "Du frontend Angular au backend Node.js et Spring Boot, jusqu'au déploiement et à la supervision.",
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Mon',
      highlight: 'parcours',
      subtitle:
        'Une progression continue sur des produits SaaS, de l’IoT et du backend, toujours avec une casquette fullstack.',
      currentLabel: 'Poste actuel',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Réalisations',
      highlight: 'professionnelles',
      subtitle:
        'Une sélection de produits professionnels et de projets personnels publiés sur GitHub — du frontend à l’infrastructure.',
      all: 'Tous',
      liveDemo: 'Voir la démo',
      source: 'Code source',
      featured: 'Mis en avant',
      privateNote: 'Produit interne — code non public',
    },
    services: {
      eyebrow: 'Services',
      title: 'Ce que je peux',
      highlight: 'apporter',
      subtitle:
        "De la conception d'une architecture à la livraison d'une interface soignée, en passant par l'accompagnement de votre équipe.",
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Travaillons',
      highlight: 'ensemble',
      subtitle:
        'Décrivez-moi votre projet, votre équipe ou le problème sur lequel vous êtes bloqué. Je réponds sous 24 heures.',
      emailLabel: 'Email',
      basedInLabel: 'Localisation',
      phoneLabel: 'Téléphone',
      callNote:
        'Vous préférez un appel ? Envoyez-moi un email avec quelques créneaux et je confirme.',
      copyEmail: 'Copier l’email',
      emailCopied: 'Email copié',
      nameLabel: 'Votre nom',
      namePlaceholder: 'Amina Ben Salah',
      emailFieldLabel: 'Email',
      emailPlaceholder: 'vous@entreprise.com',
      subjectLabel: 'Sujet',
      subjectPlaceholder: 'Nouvelle application SaaS',
      messageLabel: 'Message',
      messagePlaceholder: 'Parlez-moi du projet, du délai et de la stack technique…',
      nameError: 'Merci d’indiquer au moins 2 caractères.',
      emailError: 'Une adresse email valide est requise.',
      subjectError: 'Merci d’ajouter un sujet.',
      messageError: 'Quelques détails supplémentaires (20 caractères minimum).',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      sent: 'Merci — votre message est prêt à être envoyé.',
      formNote:
        'Ce formulaire valide la saisie en local. Connectez-le à votre API ou à un service de formulaires pour recevoir les messages.',
    },
    footer: {
      navigate: 'Navigation',
      getInTouch: 'Me contacter',
      startProject: 'Démarrer un projet',
      rights: 'Tous droits réservés.',
      builtWith: 'Développé avec Angular, Tailwind & GSAP',
    },
    common: {
      backToTop: 'Revenir en haut',
    },
  },
};
