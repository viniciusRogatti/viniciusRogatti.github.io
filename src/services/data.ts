import { bashIcon,css3Icon, dockerIcon, emailIcon, expressIcon, gitIcon,
  html5Icon, jestIcon, jsIcon, marketIcon, mySqlIcon, nameIcon, nodeJsIcon,
  npmIcon, paperPlaneIcon, phoneIcon, reactIcon, reactRouteIcon, reduxIcon,
  sequelizeIcon, styledCompIcon, tellIcon, tsIcon, LinkedinIcon, GitHubIcon, tetingLibraryIcon, nextJsIcon, mochaIcon
} from '../styles/icons';

import cardImage1 from '../assets/images/card1.jpg';
import trybeTunesImg from '../assets/images/trybe-tunes.png';
import appRecipesImg from '../assets/images/recipes-app.png';
import solarSystemImg from '../assets/images/solar-system.png';

export const navLinks = ["Inicio", "Sobre", "Skills", "Projetos", "Contato"];

export const arrayOfSocialMidias = [
  {
    id: 'socialMidias-1',
    icon: GitHubIcon,
    link: 'https://github.com/viniciusRogatti',
  },
  {
    id: 'socialMidias-2',
    icon: LinkedinIcon,
    link: 'https://www.linkedin.com/in/viniciusrogatti/',
  },
]

export const arrayOfcontacts = [
  {
    id: 'contact-id-1',
    icon: marketIcon,
    infoText: "Campinas-SP - Brasil"
  },
  {
    id: 'contact-id-2',
    icon: paperPlaneIcon,
    infoText: "vinnyzsouza@gmail.com"
  },
  {
    id: 'contact-id-3',
    icon: phoneIcon,
    infoText: "+55 (19)99973-5383"
  }
];

export const navFilters = [
  {
    key: 'nav-filter-1',
    type: 3,
    id: 'all',
    name: 'ALL',
  },
  {
    key: 'nav-filter-2',
    type: 1,
    id: 'frontend',
    name: 'FRONT-END',
  },
  {
    key: 'nav-filter-3',
    type: 2,
    id: 'backend',
    name: 'BACK-END',
  }
];

export const navFilterCategory = [
  {
    key: 'nav-category-1',
    category: 'all',
  },
  {
    key: 'nav-category-1',
    category: 'web',
  },
  {
    key: 'nav-category-1',
    category: 'app',
  }
]

export const arrayOfProjects = [
  {
    id: 'card-project-1',
    img: appRecipesImg,
    name: "App Recipes",
    url: 'https://viniciusrogatti.github.io/project-recipes-app/',
    repository: 'https://github.com/viniciusRogatti/project-recipes-app',
    category: "app"
  },
  {
    id: 'card-project-2',
    img: cardImage1,
    name: "APP project 2",
    url: '',
    repository: '',
    category: "web"
  },
  {
    id: 'card-project-3',
    img: trybeTunesImg,
    name: "Trybe Tunes",
    url: 'https://viniciusrogatti.github.io/project-trybetunes/',
    repository: 'https://github.com/viniciusRogatti/project-trybetunes',
    category: "web"
  },
  {
    id: 'card-project-4',
    img: solarSystemImg,
    name: "Solar System",
    url: 'https://viniciusrogatti.github.io/project-solar-system/',
    repository: 'https://github.com/viniciusRogatti/project-solar-system',
    category: "web"
  },
  {
    id: 'card-project-5',
    img: cardImage1,
    name: "project 5",
    url: '',
    repository: '',
    category: 'web'
  },
  {
    id: 'card-project-6',
    img: cardImage1,
    name: "project 6",
    url: '',
    repository: '',
    category: "web"
  },
];

export const arrayOfBios = [
  {
    id: 'bio-id-1',
    icon: nameIcon,
    key: 'Nome',
    value: 'Marcos Vinicius De Souza'
  },
  {
    id: 'bio-id-2',
    icon: emailIcon,
    key: 'Email',
    value: 'vinnyzsouza@gmail.com'
  },
  {
    id: 'bio-id-3',
    icon: tellIcon,
    key: 'Telefone',
    value: '+55 (19) 99973-5383'
  }
];

export const arrayOfSkills = [
  {
    id: 'id-skill-1',
    type: 1,
    name: 'Html',
    svg: html5Icon,
  },
  {
    id: 'id-skill-2',
    type: 1,
    name: 'Css',
    svg: css3Icon,
  },
  {
    id: 'id-skill-3',
    type: 1,
    name: 'JavaScript',
    svg: jsIcon,
  },
  {
    id: 'id-skill-4',
    type: 1,
    name: 'React',
    svg: reactIcon,
  },
  {
    id: 'id-skill-5',
    type: 3,
    name: 'TypeScript',
    svg: tsIcon,
  },
  {
    id: 'id-skill-6',
    type: 1,
    name: 'StyledComponents',
    svg: styledCompIcon,
  },
  {
    id: 'id-skill-7',
    type: 1,
    name: 'Redux',
    svg: reduxIcon,
  },
  {
    id: 'id-skill-8',
    type: 1,
    name: 'TestingLibrary',
    svg: tetingLibraryIcon,
  },
  {
    id: 'id-skill-9',
    type: 1,
    name: 'ReactRouter',
    svg: reactRouteIcon,
  },
  {
    id: 'id-skill-10',
    type: 3,
    name: 'Git',
    svg: gitIcon,
  },
  {
    id: 'id-skill-11',
    type: 1,
    name: 'Jest',
    svg: jestIcon,
  },
  {
    id: 'id-skill-12',
    type: 2,
    name: 'NodeJs',
    svg: nodeJsIcon,
  },
  {
    id: 'id-skill-13',
    type: 2,
    name: 'Express',
    svg: expressIcon,
  },
  {
    id: 'id-skill-14',
    type: 2,
    name: 'Docker',
    svg: dockerIcon,
  },
  {
    id: 'id-skill-15',
    type: 2,
    name: 'Mysql',
    svg: mySqlIcon,
  },
  {
    id: 'id-skill-16',
    type: 2,
    name: 'Sequelize',
    svg: sequelizeIcon,
  },
  {
    id: 'id-skill-17',
    type: 3,
    name: 'Bash',
    svg: bashIcon,
  },
  {
    id: 'id-skill-18',
    type: 3,
    name: 'Npm',
    svg: npmIcon,
  },
  {
    id: 'id-skill-19',
    type: 2,
    name: 'NextJs',
    svg: nextJsIcon,
  },
  {
    id: 'id-skill-20',
    type: 2,
    name: 'Mocha',
    svg: mochaIcon,
  },
];
