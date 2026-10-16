import type { ImageMetadata } from 'astro';
import foto from '../assets/foto-perfil.jpg';
import exilion from '../assets/exilion.png';
import hostEft from '../assets/proyecto1p.png';
import odisea from '../assets/proyecto1.png';
import anteocion from '../assets/proyecto2.png';
import pirate from '../assets/proyecto3.png';

export const site = {
  name: 'Ignacio Esteban Diaz Diaz',
  role: 'Desarrollador de software junior',
  title: 'Ignacio Diaz — Desarrollador de software junior (backend)',
  description: 'Portfolio de Ignacio Esteban Diaz Diaz, desarrollador de software junior orientado a backend. Proyectos con C#, Node.js, Java y MySQL.',
  photo: foto as ImageMetadata,
  email: 'ignaciodiazdiaz27@gmail.com',
  github: 'https://github.com/Totoo27',
  linkedin: 'https://www.linkedin.com/in/ignacio-esteban-diaz-diaz-414062402/',
  cv: 'https://drive.google.com/file/d/1EyWIZXokjbQpfUXcfLpVHMSy-EcjdiYa/view?usp=sharing',
};

export const nav = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
];

export type Link = { label: string; href: string; icon?: 'github' | 'external' };

export const featured = [
  {
    title: 'EXILION',
    kicker: 'Videojuego · En desarrollo',
    summary:
      'Juego de supervivencia 2D con vista cenital y pixel art: astronautas varados en un planeta sin atmósfera respirable. Está diseñado como cooperativo (hasta 4 jugadores, cliente-servidor TCP/UDP); hoy el repositorio cubre la base del juego en C# con MonoGame y programación orientada a objetos.',
    highlights: [
      'Persistencia de datos para el guardado y cargado de mundos con JSON',
      'Mapa generado de forma procedural con ruido Simplex y dividido en chunks.',
      'Inventario, recolección de objetos, consumibles y ataque del jugador.',
      'Gestión de escenas (menú, carga, juego, pausa), ciclo día/noche y audio.',
    ],
    stack: ['C#', 'MonoGame', 'POO'],
    links: [
      { label: 'Repositorio', href: 'https://github.com/Totoo27/EXILION', icon: 'github' },
      { label: 'Video del prototipo', href: 'https://youtu.be/A6OlYRtCE_Q', icon: 'external' },
    ] as Link[],
    image: exilion as ImageMetadata,
    imageAlt: 'Pantalla de menú principal de EXILION',
  },
  {
    title: 'Host-EFT - Haxball',
    kicker: 'Backend · Proyecto personal',
    summary:
      'Servidor y API para gestionar un host de fútbol sobre HaxBall Headless. Un servicio Express con MySQL guarda jugadores, clubes y estadísticas, y el host headless lo consume para agregar comandos y automatizar la gestión del servidor.',
    highlights: [
      'API REST con Express y mysql2, separada en servicios (jugadores, clubes, estadísticas, remeras, frases).',
      'Esquema y datos de ejemplo en SQL versionados en el repositorio.',
      'Integración con HaxBall Headless Host en JavaScript.',
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'MySQL'],
    links: [{ label: 'Repositorio', href: 'https://github.com/Totoo27/Host-EFT', icon: 'github' }] as Link[],
    image: hostEft as ImageMetadata,
    imageAlt: 'Captura del proyecto Host-EFT',
  },
];

export const project = [
  {
    title: 'Odisea de Moya',
    type: 'Videojuego',
    description:
      'Juego en Java con polimorfismo, lógica condicional, múltiples finales e interacciones tipo RPG, más un modo de puntuación por ritmo al estilo StepMania.',
    stack: ['Java'],
    href: 'https://github.com/tomy08/juego-final-lpoo',
    image: odisea as ImageMetadata,
    imageAlt: 'Captura de Odisea de Moya',
  },
  {
    title: 'Anteoción',
    type: 'Web',
    description:
      'E-commerce responsive para una empresa ficticia, con diseño futurista, interacciones en JavaScript y datos guardados en localStorage.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/Totoo27/Pagina-Anteocion',
    image: anteocion as ImageMetadata,
    imageAlt: 'Captura de la web Anteoción',
  },
  {
    title: 'The Pirate Oddysey',
    type: 'Videojuego',
    description:
      'Plataformero shooter en Java con vida, enemigos y jefes, sistema de niveles y puntuación final pensada para la rejugabilidad.',
    stack: ['Java'],
    href: 'https://github.com/Totoo27/Arcade',
    image: pirate as ImageMetadata,
    imageAlt: 'Captura de The Pirate Oddysey',
  },
];

export const about = {
  paragraphs: [
    'Soy estudiante del último año de una escuela técnica con orientación en Computación y quiero desarrollarme como desarrollador de software junior. Mi perfil está orientado al backend: lo que más disfruto es diseñar la lógica, modelar datos y resolver problemas.',
    'También desarrollo interfaces web y conecto bases de datos, así que puedo participar en una aplicación de punta a punta. Aprendo rápido, me gusta entender cómo funcionan las cosas y busco mi primera experiencia profesional para seguir creciendo.',
  ],
  facts: [
    { label: 'Busco', value: 'Primer rol como desarrollador de software junior (backend)' },
    { label: 'Ubicación', value: 'CABA, Buenos Aires' },
    { label: 'Idiomas', value: 'Español nativo, Inglés B2' },
  ],
};

export const experience = [
  {
    period: 'Agosto 2026 - Noviembre 2026',
    title: 'Desarrollo Fullstack - Stark Solution',
    org: 'Pasantía',
    points: [
      'Trabajo en aplicaciones empresariales con ASP.NET MVC, C#, SQL y tecnologías web.',
      'Análisis de problemas, busqueda de soluciones y desarrollos de las mismas.',
      'Los detalles se omiten por confidencialidad.',
    ],
  },
];

export const education = [
  {
    period: '2021 - Actualidad',
    title: 'Técnico en Computación',
    org: 'ET N°35 Ingeniero E. Latzina',
    points: ['Último año de la escuela técnica.', 'Proyectos escolares en Java, C#, JavaScript y bases de datos.'],
  },
];

export type Level = 'solid' | 'basic';
export const levelLabel: Record<Level, string> = { solid: 'Stack principal',  basic: 'Conocimiento general' };

export const skills: { group: string; items: { name: string; level: Level }[] }[] = [
  {
    group: 'Lenguajes',
    items: [
      { name: 'C#', level: 'solid' },
      { name: 'Java', level: 'solid' },
      { name: 'JavaScript', level: 'solid' },
      { name: 'C++', level: 'basic' },
      { name: 'C', level: 'basic' },
      { name: 'PHP', level: 'basic' },
    ],
  },
  {
    group: 'Backend y datos',
    items: [
      { name: 'Node.js y Express', level: 'solid' },
      { name: 'MySQL y SQL', level: 'solid' },
      { name: 'ASP.NET MVC', level: 'solid' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'HTML', level: 'solid' },
      { name: 'CSS', level: 'solid' },
      { name: 'Astro', level: 'basic' },
    ],
  },
  {
    group: 'Herramientas',
    items: [{ name: 'Git y GitHub', level: 'solid' }],
  },
];
