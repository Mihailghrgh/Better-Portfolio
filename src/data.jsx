import { nanoid } from "nanoid";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiWebrtc } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { SiDrizzle } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";


export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Typescript & JSX",
    icon: <SiTypescript className="h-16 w-16 text-sky-600" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "Next JS",
    icon: <RiNextjsFill className="h-16 w-16 text-sky-600" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-sky-400" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Express JS",
    icon: <SiExpress className="h-16 w-16 text-sky-600" />,
    text: "Express is a fast and minimalist web framework for Node.js used to build robust APIs and web servers. It simplifies routing, middleware integration, and request handling in backend applications.",
  },
  {
    id: nanoid(),
    title: "Github",
    icon: <FaGithub className="h-16 w-16 text-sky-600" />,
    text: "GitHub is a cloud-based platform for version control and collaboration using Git. It allows developers to host code, manage repositories, track issues, and collaborate through pull requests.",
  },
  {
    id: nanoid(),
    title: "Node JS",
    icon: <FaNodeJs className="h-16 w-16 text-sky-600" />,
    text: "Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling JavaScript to run on the server side. It's ideal for building scalable network applications and real-time services.",
  },
  {
    id: nanoid(),
    title: "WebRTC",
    icon: <SiWebrtc className="h-16 w-16 text-sky-600" />,
    text: "WebRTC is a real-time communication protocol that allows browsers and mobile apps to share audio, video, and data directly without needing an intermediary server. It's commonly used in peer-to-peer video calls and real-time chat applications.",
  },
  {
    id: nanoid(),
    title: "Socket IO",
    icon: <SiSocketdotio className="h-16 w-16 text-sky-600" />,
    text: "Socket.IO enables real-time, bidirectional communication between web clients and servers over WebSockets. It's widely used in chat apps, live notifications, and collaborative tools.",
  },
  {
    id: nanoid(),
    title: "Drizzle ORM",
    icon: <SiDrizzle className="h-16 w-16 text-sky-600" />,
    text: "Drizzle ORM is a lightweight, fully type-safe ORM for SQL databases in TypeScript projects. It offers fine-grained control over queries while maintaining strict typing and performance.",
  },
  {
    id: nanoid(),
    title: "Prisma ORM",
    icon: <SiPrisma className="h-16 w-16 text-sky-600" />,
    text: "Prisma is a next-generation ORM for Node.js and TypeScript that simplifies database access with an auto-generated, type-safe query builder. It improves developer productivity and reduces runtime errors.",
  },
  {
    id: nanoid(),
    title: "Supabase",
    icon: <RiSupabaseFill className="h-16 w-16 text-sky-600" />,
    text: "Supabase is an open-source backend-as-a-service that provides authentication, real-time databases, and file storage built on PostgreSQL. It allows developers to quickly build and scale full-stack applications.",
  },
  {
    id: nanoid(),
    title: "ShadCN/UI",
    icon: <SiShadcnui className="h-16 w-16 text-sky-300" />,
    text: "shadcn/ui is a collection of accessible and beautifully styled React components built with Radix UI and Tailwind CSS. It offers full customization and is ideal for building modern, consistent UIs.",
  },

  {
    id: nanoid(),
    title: "HTML & Tailwind CSS",
    icon: <RiTailwindCssFill className="h-16 w-16 text-sky-300" />,
    text: "Highly skilled in HTML & Tailwind CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
