export type Lang = 'fr' | 'en';

export interface NavItem {
  label: string;
  anchor: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  roles: string[];
  tagline: string;
  bio: string[];
  location: string;
  availability: string;
  email: string;
  phone: string;
  resumeUrl: string;
  socials: SocialLink[];
  stats: Stat[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  accent: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  stack: string[];
  current: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** Only set when the work is publicly available. */
  repo?: string;
  demo?: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  points: string[];
}

export interface Highlight {
  icon: string;
  title: string;
  text: string;
}

export interface UiStrings {
  nav: {
    cta: string;
    themeToLight: string;
    themeToDark: string;
    toggleMenu: string;
    language: string;
  };
  hero: {
    greeting: string;
    secondLine: string;
    codeExperience: string;
    codeWindowFile: string;
    codeWindowComment: string;
    viewWork: string;
    downloadCv: string;
  };
  about: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    locationLabel: string;
    emailLabel: string;
    highlights: Highlight[];
  };
  skills: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    currentLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    all: string;
    liveDemo: string;
    source: string;
    featured: string;
    privateNote: string;
  };
  services: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    emailLabel: string;
    basedInLabel: string;
    phoneLabel: string;
    callNote: string;
    copyEmail: string;
    emailCopied: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    nameError: string;
    emailError: string;
    subjectError: string;
    messageError: string;
    send: string;
    sending: string;
    sent: string;
    formNote: string;
  };
  footer: {
    navigate: string;
    getInTouch: string;
    startProject: string;
    rights: string;
    builtWith: string;
  };
  common: {
    backToTop: string;
  };
}

export interface PortfolioContent {
  lang: Lang;
  htmlLang: string;
  pageTitle: string;
  metaDescription: string;
  nav: NavItem[];
  profile: Profile;
  tools: string[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  ui: UiStrings;
}
