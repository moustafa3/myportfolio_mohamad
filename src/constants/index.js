import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  caashpay,
  aci,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  c,
  cc,
  java,
  angular,
  robot,
  film,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ingénieur en Développement logiciel",
    icon: web,
  },
  {
    title: "ingénieur en Développement Fullstack",
    icon: mobile,
  },
  {
    title: "ingénieur en électronique",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "c++",
    icon:  cc,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "angular",
    icon: angular,
  },
];

const experiences = [
  
  {
    title: "Stage en Développement de Solutions de Paiement-DEV JAVA-Fullstack",
    company_name: "CAASHPAY(Paris - France)",
    icon: caashpay,
    iconBg: "#E6DEDD",
    date: "Septembre  2023 - Décembre  2023",
    points: [
      " Apprentissage du métier de la monétique.",
      "Développement d'une API de paiement CB2A en utilisant Java Kotlin, API RESTful, JSON, Ktor.",
      "Garantie de la sécurité des données selon les normes ISO8583 et PCI DSS.",
      "Création d'un serveur Python pour simulation bancaire.",
      "Utilisation de MongoDB pour le stockage des données.",
      "Conception d'une interface web avec Node.js/React pour la gestion sécurisée des données.",

    ],
  },
  {
    title: "Stage en Développement d'Applications Mobiles",
    company_name: " ACI International (Beirut-Liban)",
    icon: aci,
    iconBg: "#383E56",
    date: "Mai 2022 - Août 2022",
    points: [
      "Conception et développement d'applications utilisant Flutter  pour faciliter la gestion administrative et des ressources humaines d'une entreprise sur les plateformes iOS et Android. ",
      "Développement d'une application en Java permettant d'enregistrer les heures d'arrivée et de départ des employés au sein de l'entreprise.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: " Projet pluridisciplinaire (Enib)",
    description:
      "Projet vise à creer un robot controlable via une interface homme-machine (STM32 , Python).",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "stm32",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Projet web (Fullstack)",
    description:
      "Développement d'une application de révision de film.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Java et Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: film,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
