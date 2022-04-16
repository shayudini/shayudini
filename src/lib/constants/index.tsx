import generateKey from 'lib/utils/generateKey';
import {
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiUser,
} from 'react-icons/fi';

export const menu = [
  {
    title: 'Home',
    path: '/',
    key: generateKey(),
    icon: <FiUser />,
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
    key: generateKey(),
    icon: <FiCode />,
  },
];
export const social = [
  {
    title: 'Github',
    icon: <FiGithub />,
    path: 'https://www.github.com/shayudini',
    key: generateKey(),
  },
  {
    title: "LinkedIn",
    icon: <FiLinkedin />,
    path: 'https://www.linkedin.com/in/shayudini',
    key: generateKey(),
  },
  {
    title: 'Resume',
    icon: <FiDownload />,
    path: 'https://docs.google.com/document/d/1oeaq7zzWRJ6vmWh5EaiQab31Qp7JihqV3K097x5Y-IY/edit?usp=sharing',
    key: generateKey(),
  },
];

export const PROJECTS = [
  {
    title: 'React-Redux-Firebase-Todo-App',
    tags: [
      'React',
      'Redux',
      'Firebase',
      'CSS',
      'SCSS',
      'Javascript',
      'Typescript',
    ],
    description:
      'A simple todo app with react-redux, firebase and react-router-dom.',
    demo: '/',
    code: '/',
    image: 'https://source.unsplash.com/random?coding',
    key: generateKey(),
  },
  {
    title: 'React-Redux-Firebase-Todo-App',
    tags: [
      'React',
      'Redux',
      'Firebase',
      'CSS',
      'SCSS',
      'Javascript',
      'Typescript',
    ],
    description:
      'A simple todo app with react-redux, firebase and react-router-dom.',
    demo: '/',
    code: '/',
    image: 'https://source.unsplash.com/random?coding',
    key: generateKey(),
  },
  {
    title: 'React-Redux-Firebase-Todo-App',
    tags: [
      'React',
      'Redux',
      'Firebase',
      'CSS',
      'SCSS',
      'Javascript',
      'Typescript',
    ],
    description:
      'A simple todo app with react-redux, firebase and react-router-dom.',
    demo: '/',
    code: '/',
    image: 'https://source.unsplash.com/random?coding',
    key: generateKey(),
  },
  {
    title: 'React-Redux-Firebase-Todo-App',
    tags: [
      'React',
      'Redux',
      'Firebase',
      'CSS',
      'SCSS',
      'Javascript',
      'Typescript',
    ],
    description:
      'A simple todo app with react-redux, firebase and react-router-dom.',
    demo: '/',
    code: '/',
    image: 'https://source.unsplash.com/random?coding',
    key: generateKey(),
  },
];