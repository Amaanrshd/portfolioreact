export const socials = {
  github: 'https://github.com/Amaanrshd',
  linkedin: 'https://www.linkedin.com/in/amaan-rasheed/',
  email: 'amaanar1110@gmail.com',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export const quickLinks = [
  { to: '/about', icon: 'person', title: 'About', text: "Who I am and what I'm studying." },
  { to: '/skills', icon: 'braces', title: 'Skills', text: 'The languages and tools I use.' },
  { to: '/projects', icon: 'window-stack', title: 'Projects', text: "Websites I've built so far." },
  { to: '/contact', icon: 'envelope', title: 'Contact', text: 'Send me a message.' },
]

export const stats = [
  { icon: 'window-stack', value: '3+', label: 'Websites built' },
  { icon: 'braces', value: '5', label: 'Technologies learned' },
  { icon: 'mortarboard', value: 'MINT', label: 'Degree path' },
  { icon: 'lightning-charge', value: '100%', label: 'Always learning' },
]

export const strengths = ['Clean, responsive layouts', 'Quick to learn new tools', 'Attention to small details']

export const education = [
  {
    current: true,
    period: 'Winter Semester 2025/26 – Now',
    title: 'VSI MINT Probestudium',
    place: 'Saarland University · Saarbrücken',
    text: 'An orientation program in mathematics, informatics, natural sciences, and technology, with real university courses and exams.',
  },
  {
    current: false,
    period: 'Next step',
    title: 'Bachelor Plus MINT',
    place: 'Saarland University · Saarbrücken',
    text: "The degree program I'm working toward after the Probestudium.",
  },
]

export const learning = [
  { icon: 'filetype-jsx', text: 'Building interfaces with React' },
  { icon: 'filetype-js', text: 'JavaScript fundamentals' },
  { icon: 'git', text: 'Version control with Git' },
  { icon: 'universal-access', text: 'Accessible, clean markup' },
]

export const coreSkills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 80 },
  { name: 'Bootstrap 5', level: 75 },
  { name: 'JavaScript', level: 55 },
  { name: 'React', level: 40 },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { icon: 'filetype-html', name: 'HTML' },
      { icon: 'filetype-css', name: 'CSS' },
      { icon: 'filetype-js', name: 'JavaScript' },
      { icon: 'filetype-jsx', name: 'React' },
      { icon: 'bootstrap', name: 'Bootstrap' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { icon: 'code-square', name: 'VS Code' },
      { icon: 'git', name: 'Git' },
      { icon: 'github', name: 'GitHub' },
      { icon: 'lightning', name: 'Vite' },
      { icon: 'browser-chrome', name: 'Browser DevTools' },
    ],
  },
  {
    title: 'Strengths',
    items: [
      { icon: 'phone', name: 'Responsive design' },
      { icon: 'puzzle', name: 'Problem solving' },
      { icon: 'people', name: 'Teamwork' },
    ],
  },
]

export const projects = [
  {
    thumb: 'thumb-1',
    icon: 'window-sidebar',
    title: 'Wind Landing Page',
    text: 'A responsive landing page built with only HTML and CSS: sticky navbar, hero, feature cards, and a contact form.',
    tags: ['HTML5', 'CSS3', 'Flexbox'],
    points: ['Fully responsive layout', 'Hover animations on cards', 'No frameworks or JavaScript'],
    demo: '#',
    code: '#',
  },
  {
    thumb: 'thumb-2',
    icon: 'hospital',
    title: 'Medical Website',
    text: 'A multi-section clinic website built with Bootstrap: two-row navbar, hero carousel, info cards, and a stats band.',
    tags: ['Bootstrap 5', 'Carousel', 'Icons'],
    points: ['Bootstrap grid and utilities', 'Autoplaying hero slider', 'Mobile-first design'],
    demo: '#',
    code: '#',
  },
  {
    thumb: 'thumb-3',
    icon: 'person-badge',
    title: 'This Portfolio',
    text: "The site you're looking at: a dark, multi-page portfolio built in React with React Router and Bootstrap.",
    tags: ['React', 'React Router', 'Bootstrap 5'],
    points: ['Reusable components', 'Client-side routing', 'Content kept in one data file'],
    demo: '/',
    code: '#',
  },
]
