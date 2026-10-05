import { PortfolioContent } from './portfolio-content';

export const CONTENT_EN: PortfolioContent = {
  lang: 'en',
  htmlLang: 'en',
  pageTitle: 'Atef Khelifi — Fullstack Engineer',
  metaDescription:
    'Fullstack engineer specialising in Angular, Node.js and Spring Boot. SaaS web applications, microservices, RESTful APIs and CI/CD. Explore my work and get in touch.',
  nav: [
    { label: 'Home', anchor: 'home' },
    { label: 'About', anchor: 'about' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Experience', anchor: 'experience' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Services', anchor: 'services' },
    { label: 'Contact', anchor: 'contact' },
  ],

  profile: {
    name: 'Atef Khelifi',
    firstName: 'Atef',
    role: 'Fullstack Engineer',
    roles: [
      'Fullstack Engineer',
      'Angular Developer',
      'Node.js / Spring Boot Developer',
      'Microservices Architecture',
    ],
    tagline:
      'I design and build complete web applications — from the RESTful API to the Angular interface — made to last and to scale.',
    bio: [
      'Fullstack engineer with 5+ years building SaaS web applications. I specialise in Angular, Node.js and Spring Boot, with solid experience in microservices, RESTful APIs, state management with NgRx and CI/CD pipelines with Docker.',
      'I also work with teams: supervising frontend developers, agile delivery, code reviews and mentoring final-year interns. I care about application performance and the quality of the code that ships.',
    ],
    location: 'Tunisia',
    availability: 'Open to new opportunities',
    email: 'khelifiatef@outlook.fr',
    phone: '(+216) 52 343 232',
    // Relative on purpose: it resolves against <base href>, so the link keeps
    // working when the site is served from a sub-path (e.g. GitHub Pages).
    resumeUrl: 'assets/resume.pdf',
    socials: [
      { label: 'GitHub', url: 'https://github.com/atefkhelifi', icon: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/atef-khelifi', icon: 'linkedin' },
      { label: 'Email', url: 'mailto:khelifiatef@outlook.fr', icon: 'mail' },
    ],
    stats: [
      { value: '5+', label: 'years of experience' },
      { value: '4', label: 'companies' },
      { value: '30+', label: 'technologies used' },
      { value: '2', label: 'languages (FR / EN · B2)' },
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
      skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Spring Security', 'RESTful APIs'],
    },
    {
      title: 'Databases',
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
      skills: ['Microservices', 'RESTful APIs', 'Nx Monorepo', 'Spring Cloud Gateway', 'Spring Cloud Config'],
    },
    {
      title: 'Tools',
      icon: 'plug',
      accent: '#38bdf8',
      skills: ['GitHub', 'GitLab', 'Postman', 'Swagger', 'Socket.IO', 'JUnit', 'Log4j'],
    },
  ],

  experience: [
    {
      role: 'Front End Developer',
      company: 'Smartconseil',
      period: '12.2024 — Present',
      location: 'Tunisia',
      current: true,
      summary:
        'Building a SaaS web application: software that helps schools prevent bullying and cyberbullying among younger students.',
      achievements: [
        'Supervised the frontend development team and built an intuitive, responsive interface with Angular.',
        'Implemented NgRx for global state management, improving performance and making the code easier to maintain.',
        'Integrated and consumed RESTful APIs for communication between the frontend and the backend.',
        'Set up robust monitoring and error handling to keep availability high.',
        'Worked alongside the UX/UI team to keep the user experience smooth and intuitive.',
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
      role: 'Fullstack Developer',
      company: 'EmyeHR',
      period: '10.2021 — 11.2024',
      location: 'Tunisia',
      current: false,
      summary:
        'Designed and built a complete SaaS employee-management web application that measurably improved working life at client companies.',
      achievements: [
        'Built the server side with Node.js and Express, using PostgreSQL as the database.',
        'Led a successful migration of the existing application from Angular 10 to Angular 17.',
        'Developed a real-time chat system using Socket.IO.',
        'Containerised the application with Docker for simpler deployments and consistent environments.',
        'Supervised the frontend team and mentored a final-year intern.',
        'Set up robust monitoring and error handling.',
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
      role: 'Fullstack Developer',
      company: 'HITSolutions',
      period: '12.2020 — 09.2021',
      location: 'Tunisia',
      current: false,
      summary: 'Designed and built an application for managing connected devices.',
      achievements: [
        'Designed and implemented Spring Boot microservices backed by Oracle.',
        'Implemented user authentication and authorisation with Spring Security.',
        'Built responsive user interfaces with Angular 10, cross-browser tested.',
        'Set up CI/CD pipelines.',
        'Wrote complete API documentation with Swagger.',
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
      role: 'Backend Developer (Summer Internship)',
      company: 'infosmile',
      period: '07.2020 — 10.2020',
      location: 'Tunisia',
      current: false,
      summary: 'Built a complete backend platform to make job hunting easier.',
      achievements: [
        'Built the server infrastructure with Spring Boot and MySQL.',
        'Wrote Java web scraping with Jsoup to find job listings matching specific profiles.',
        'Tested the API with Rest Client and Postman.',
      ],
      stack: ['Spring Boot', 'Spring Security', 'Java', 'Jsoup', 'MySQL', 'Postman'],
    },
  ],

  projects: [
    {
      id: 'prevention-harcelement',
      title: 'School Bullying Prevention',
      category: 'SaaS',
      description:
        'A SaaS application that helps schools tackle bullying and cyberbullying among younger students.',
      highlights: [
        'Responsive, accessible Angular 18 interface',
        'Global state management with NgRx',
        'RESTful API integration and application monitoring',
      ],
      stack: ['Angular 18', 'TypeScript', 'RxJS', 'NgRx', 'PrimeNG', 'Angular Material'],
      featured: true,
    },
    {
      id: 'emyerh',
      title: 'EmyeHR — Employee Management',
      category: 'SaaS',
      description:
        'A complete SaaS platform for employee management: HR tracking, internal collaboration and administration.',
      highlights: [
        'Node.js / Express backend with PostgreSQL',
        'Real-time chat with Socket.IO',
        'Migration from Angular 10 to Angular 17',
        'Containerised deployment on AWS',
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
      title: 'Connected Device Management',
      category: 'Microservices',
      description:
        'A platform for monitoring and managing connected devices, built on a secure microservices architecture.',
      highlights: [
        'Spring Boot microservices with Oracle',
        'Authentication and authorisation with Spring Security',
        'Centralised gateway and configuration',
        'API documentation with Swagger',
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
      title: 'Job Search Platform',
      category: 'Backend',
      description:
        'A backend platform aggregating job listings from multiple sites through web scraping.',
      highlights: [
        'Automated listing collection with Jsoup',
        'Matching listings against a target profile',
        'API tested with Postman and Rest Client',
      ],
      stack: ['Spring Boot', 'Spring Security', 'Java', 'Jsoup', 'MySQL'],
      featured: false,
    },
    {
      id: 'microservices-project',
      title: 'Spring Cloud microservices platform',
      category: 'Microservices',
      description:
        'A complete microservices architecture with service discovery, centralised configuration and gateway routing, wrapped around a company-management business service.',
      highlights: [
        'Service discovery with Eureka',
        'Centralised configuration via Spring Cloud Config',
        'Routing gateway and a dedicated config repository',
      ],
      stack: ['Spring Boot', 'Spring Cloud', 'Eureka', 'Spring Cloud Gateway', 'Java', 'Maven'],
      repo: 'https://github.com/atefkhelifi/microservices-project',
      featured: true,
    },
    {
      id: 'blog-platform',
      title: 'Collaborative blogging platform',
      category: 'Fullstack',
      description:
        'A multi-author blogging platform (MEAN stack): authentication, article management and real-time comments.',
      highlights: [
        'Angular 16 frontend with user authentication',
        'Full article and author management',
        'Real-time comments',
      ],
      stack: ['Angular 16', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      repo: 'https://github.com/atefkhelifi/Blog-frontend',
      featured: true,
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce platform in an Nx monorepo',
      category: 'Fullstack',
      description:
        'A complete e-commerce platform: an Angular 18 frontend organised in an Nx monorepo, backed by RESTful store APIs.',
      highlights: [
        'Angular 18 inside an Nx monorepo',
        'RESTful APIs: products, authentication, orders',
        'Clean separation between frontend and backend',
      ],
      stack: ['Angular 18', 'Nx Monorepo', 'TypeScript', 'Node.js', 'RESTful APIs'],
      repo: 'https://github.com/atefkhelifi/E-Commerce-frontend',
      featured: true,
    },
    {
      id: 'messenger-clone',
      title: 'Real-time messenger',
      category: 'Real-time',
      description:
        'A Messenger-style chat application: authentication, chat rooms and real-time message delivery.',
      highlights: [
        'Angular 19 frontend',
        'Node.js backend with a RESTful API',
        'Real-time room and message management',
      ],
      stack: ['Angular 19', 'TypeScript', 'Node.js', 'RESTful APIs'],
      repo: 'https://github.com/atefkhelifi/Messenger-clone-front',
      featured: false,
    },
    {
      id: 'doctor-app',
      title: 'doctor-app — Medical triage',
      category: 'Backend',
      description:
        'A Spring Boot application that works out which type of doctor to consult from a set of symptoms and locates the nearest practitioner in a PostgreSQL database.',
      highlights: [
        'Specialist recommendation from symptoms',
        'Nearest-doctor search',
        'PostgreSQL persistence',
      ],
      stack: ['Spring Boot', 'Java', 'PostgreSQL', 'RESTful APIs'],
      repo: 'https://github.com/atefkhelifi/doctor-app',
      featured: false,
    },
    {
      id: 'medical-ai-api',
      title: 'AI medical-specialist API',
      category: 'AI',
      description:
        'A Flask API that uses Google Gemini to recommend the right medical specialist from a symptom description, in any language.',
      highlights: [
        'Google Gemini integration',
        'Multilingual symptom understanding',
        'Lightweight, deployable Python API',
      ],
      stack: ['Python', 'Flask', 'Google Gemini', 'RESTful APIs'],
      repo: 'https://github.com/atefkhelifi/medical-specialist-detector-api',
      featured: false,
    },
  ],

  services: [
    {
      title: 'Angular frontend development',
      description:
        'Responsive, maintainable interfaces — from a prototype to a reusable design system.',
      icon: 'layout',
      points: ['Angular v10 → v18', 'NgRx & RxJS', 'Reusable design systems'],
    },
    {
      title: 'Backend & API development',
      description: 'Robust, documented services that feed your frontend without friction.',
      icon: 'server',
      points: ['Node.js / Express', 'Spring Boot & Spring Security', 'Documented RESTful APIs'],
    },
    {
      title: 'Microservices architecture & DevOps',
      description:
        'Industrialise deployments and keep environments consistent from laptop to cloud.',
      icon: 'cloud',
      points: ['Docker & CI/CD', 'Spring Cloud Gateway & Config', 'AWS deployment'],
    },
    {
      title: 'Team supervision & software quality',
      description:
        'Levelling up a team and protecting code quality over time.',
      icon: 'users',
      points: ['Frontend team supervision', 'Code review & mentoring', 'Testing, SonarQube, monitoring'],
    },
  ],

  ui: {
    nav: {
      cta: "Let's talk",
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      toggleMenu: 'Toggle navigation menu',
      language: 'Change language',
    },
    hero: {
      greeting: "Hello, I'm",
      secondLine: 'I build fullstack web applications.',
      codeExperience: '5+ years',
      codeWindowFile: 'developer.ts',
      codeWindowComment: '// open to new opportunities',
      viewWork: 'View my work',
      downloadCv: 'Download CV',
    },
    about: {
      eyebrow: 'About me',
      title: 'From the brief to',
      highlight: 'production',
      subtitle:
        'Five-plus years designing and building SaaS applications, from the RESTful API to the interface.',
      locationLabel: 'Location',
      emailLabel: 'Email',
      highlights: [
        {
          icon: 'users',
          title: 'Team-minded',
          text: 'I have supervised frontend teams and mentored final-year interns, with a genuine code-review culture.',
        },
        {
          icon: 'layers',
          title: 'Architecture',
          text: 'Spring Boot microservices, Nx monorepo, NgRx state management: foundations that hold up over time.',
        },
        {
          icon: 'sparkles',
          title: 'Quality & performance',
          text: 'Testing, SonarQube, application monitoring and continuous performance tuning.',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'A',
      highlight: 'fullstack stack',
      subtitle:
        'From the Angular frontend to Node.js and Spring Boot backends, through deployment and monitoring.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'My',
      highlight: 'track record',
      subtitle:
        'Steady progress across SaaS, IoT and backend products — always with a fullstack hat on.',
      currentLabel: 'Current role',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Professional',
      highlight: 'work',
      subtitle:
        'A selection of professional products and personal projects published on GitHub — from the frontend through to the infrastructure.',
      all: 'All',
      liveDemo: 'Live demo',
      source: 'Source',
      featured: 'Featured',
      privateNote: 'Internal product — code not public',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can',
      highlight: 'bring',
      subtitle:
        'From designing an architecture to shipping a polished interface, including levelling up your team.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's build something",
      highlight: 'together',
      subtitle:
        "Tell me about your project, your team or the problem you're stuck on. I reply within a day.",
      emailLabel: 'Email',
      basedInLabel: 'Based in',
      phoneLabel: 'Phone',
      callNote: "Prefer a quick call? Send an email with a couple of time slots and I'll confirm.",
      copyEmail: 'Copy email',
      emailCopied: 'Email copied',
      nameLabel: 'Your name',
      namePlaceholder: 'Jane Doe',
      emailFieldLabel: 'Email',
      emailPlaceholder: 'jane@company.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'New SaaS platform',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about the project, timeline and stack…',
      nameError: 'Please enter at least 2 characters.',
      emailError: 'A valid email address is required.',
      subjectError: 'Please add a short subject.',
      messageError: 'A few more details please (20+ characters).',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Thanks — your message is ready to send.',
      formNote:
        'This demo form validates locally. Connect it to your API or a form service to receive messages.',
    },
    footer: {
      navigate: 'Navigate',
      getInTouch: 'Get in touch',
      startProject: 'Start a project',
      rights: 'All rights reserved.',
      builtWith: 'Built with Angular, Tailwind & GSAP',
    },
    common: {
      backToTop: 'Back to top',
    },
  },
};
