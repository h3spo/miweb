import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    
   
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jesus-fabiel-partida-camacho-406218299/",
    },
   
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "IT Help Desk  Service",
        subtitle: "Air-Life",
        description: "Administración y optimización de los recursos tecnológicos de la organización, asegurando el correcto funcionamiento de la infraestructura IT. Gestioné el ciclo de vida de los usuarios, desde su incorporación hasta la desvinculación, incluyendo la asignación de permisos, accesos y políticas de seguridad. ",
        date: "Sep 2024 ",
    },
    {
        id: 2,
        title: "Intern Developer",
        subtitle: "Continental",
        description: "Desarrollo de soluciones de software enfocadas en las necesidades de ingeniería, automatizando procesos y mejorando la eficiencia en la toma de decisiones. Implementación de herramientas y aplicaciones que facilitaron el análisis de datos, monitoreo de sistemas y gestión de proyectos técnicos",
        date: "Ene 2024",
    },
   
   
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
   
    {
        id: 2,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "Formacion",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Backend developer",
        description: "Desarrollo de Apis en ASP.Net  y diseño de base de datos",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Help Desk",
        description: "Soporte técnico de nivel 1 y 2 ",
    },
    {
        icon: <Book />,
        title: "IT",
        description: "Administración de recursos de infraestructura IT así como gestión de usuarios",
    },
  
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Comando basicos en Linux",
        image: "/linux.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Mi ruta de aprendizaje",
        image: "/ruta.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Sistema de inventario",
        image: "/foto.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ruta de aprendizaje Hacking",
        image: "/savi.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Entorno de trabajo",
        description:
            "Personalización de entorno de trabajo en Linux para pruebas de pentesting y desarrollo web ",
        imageUrl: "/proyecto.jpg",
    },
    
];