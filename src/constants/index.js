export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Sbh-Glory',
    desc: 'a website for import and export of various products .',
    subdesc:
      'Built as a unique Software-as-a-Service app with html,  CSS, js,Sbh-Glory is designed for optimal performance and scalability.',
    href: 'https://sbh-glory.com/',
    texture: '/public/textures/project/sbh-glory.mp4',
    logo: '/assets/logoOrigi-removebg-preview.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Html.js',
        path: 'assets/html.png',
      },
      {
        id: 2,
        name: 'Css',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.png',
      },
    ],
  },
  {
    title: 'ubertech',
    desc: 'Application for the client and providers of different services.',
    subdesc:
      'We are committed to providing the best services to our clients. Our team of experts is dedicated to ensuring your satisfaction and delivering quality solutions tailored to your needs.',
    href: 'https://ubertech.xyz',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/angular.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'angular',
        path: '/assets/angular.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'BNA',
    pos: 'FullStack Web Developer',
    duration: 'May2024 - AUG 2024',
    title: "worked with many projects using modern technologie like Angular for frontend and for the backEnd we used Java (spring boot) and secured it with spring security.",
    icon: '/assets/bna.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'HippoMed',
    pos: 'Web Developer',
    duration: 'Aug 2024 - Present',
    title: "Hippomed is a healthcare Erp platform that help the healthcare providers to manage their patients. I worked on the frontend and backend of the platform.",
    icon: '/assets/hippomed.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Sbh-Glory',
    pos: 'FreeLance',
    duration: 'November 2024',
    title: "sbh-glory is a webiste for import and export just for showcasing the products. I worked on the frontend of the project.",
    icon: '/assets/logoOrigi.png',
    animation: 'salute',
  },
];
