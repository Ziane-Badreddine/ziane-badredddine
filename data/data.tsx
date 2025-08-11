import { SiConvex } from "@/components/icons/SiConvex";
import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiClerk,
  SiFramer,
  SiShadcnui,
  SiSupabase,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNestjs,
  SiSpringboot,
  SiPostgresql,
  SiDrizzle,
  SiAuth0,
  SiNodedotjs,
} from "react-icons/si";

import { FaUserAlt, FaLightbulb, FaUsers, FaLanguage } from "react-icons/fa";
import { FaStripe, FaJava, FaXTwitter } from "react-icons/fa6";
import { FaFigma, FaGitAlt, FaGithub } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { FrameHighlight } from "@/app/_components/education/FrameHighlight";

import {
  IconWorld,
  IconPalette,
  IconDatabase,
  IconDeviceDesktopCode,
  IconPuzzle,
} from "@tabler/icons-react";

export const services = [
  {
    id: 0,
    title: "Website Development",
    description:
      "Modern, responsive websites tailored to your needs—whether it's a portfolio, blog, or e-commerce platform—with custom design and optimized performance.",
    image: "/images/website.svg",
    icon: <IconDeviceDesktopCode className="size-5" />,
  },
  {
    id: 1,
    title: "Flexible Communication",
    description:
      "Adaptable across time zones to ensure smooth and consistent collaboration with clients worldwide.",
    image: "/services/edge-functions-dark.svg",
    icon: <IconWorld className="size-5" />,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Designing creative visuals that match your brand identity and enhance user experience.",
    image: "",
    icon: <IconPalette className="size-5" />,
  },
  {
    id: 3,
    title: "SQL/NoSQL Databases",
    description:
      "Building and managing secure, high-performance databases tailored to your application needs.",
    image: "",
    icon: <IconDatabase className="size-5" />,
  },
  {
    id: 4,
    title: "Java Development",
    description:
      "Creating scalable and maintainable Java applications for backend, desktop, or enterprise solutions.",
    icon: <FaJava className="size-5" />,
  },
  {
    id: 5,
    title: "Problem Solving ",
    description:
      "Solving complex algorithmic challenges with clean, optimized, and efficient code.",
    icon: <IconPuzzle className="size-5" />,
  }
];

export const projects = [
  {
    id: "01",
    title: "E-commerce Application",
    des: "A modern e-commerce platform with product listing, shopping cart, and payment system.",
    img: "/images/E-commerce.png",
    iconLists: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiShadcnui],
    link: "https://store-phi-self.vercel.app",
    github: "https://github.com/Ziane-Badreddine/store",
    status: "completed",
  },
  {
    id: "02",
    title: "StoryCareer | Share your stories.",
    des: "A creative platform where users can share and explore inspiring personal stories within a supportive community.",
    img: "/images/StoryCareer.png",
    iconLists: [
      SiNextdotjs,
      SiReact,
      SiClerk,
      SiTailwindcss,
      SiTypescript,
      SiPrisma,
      SiSupabase,
      SiShadcnui,
    ],
    link: "https://story-career.vercel.app",
    github: "https://github.com/Ziane-Badreddine/store",
    status: "completed",
  },
  {
    id: "03",
    title: "XO Game – Multiplayer Experience",
    des: "A real-time Tic-Tac-Toe game built with Convex, Next.js and Shadcn UI, featuring multiplayer logic and in-game chat.",
    img: "/images/xo.png",
    iconLists: [
      SiNextdotjs,
      SiReact,
      SiConvex,
      SiTailwindcss,
      SiShadcnui,
      SiTypescript,
      SiFramer,
    ],
    link: "https://xo-game.vercel.app",
    status: "coming soon",
  },
  {
    id: "04",
    title: "Chat Application",
    des: "A real-time messaging app with group chats, file sharing, and notifications support.",
    img: "/images/chat.svg",
    iconLists: [
      SiNextdotjs,
      SiReact,
      SiSupabase,
      SiTailwindcss,
      SiFramer,
      SiDrizzle,
      SiTypescript,
      SiShadcnui,
    ],
    link: "https://uiChat.com",
    status: "planned",
  },
];

const paragraphStyle =
  "from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-base md:text-lg  font-bold tracking-tight text-transparent    font-normal mb-6";
const listStyle =
  "list-disc pl-4 text-sm md:text-base   font-bold tracking-tight text-muted-foreground     font-normal space-y-2 mb-6";

export const education = [
  {
    title: "2022–2024",
    content: (
      <FrameHighlight>
        <p className={paragraphStyle}>
          Diploma in Mathematics, Physics and Computer Science at the Faculty of
          Sciences and Technology with Honors.
        </p>
        <p className={paragraphStyle}>
          In-depth study of applied mathematics, physics and computer science
          fundamentals.
        </p>
        <p className={paragraphStyle}>
          Development of skills in algorithms and programming.
        </p>
        <p className={paragraphStyle}>
          Languages studied: C (procedural programming basics) and SQL
          (relational database management).
        </p>
        <p className={paragraphStyle}>
          Completion of academic projects, including the design and management
          of simple databases.
        </p>

        <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-blue-500/15 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-tl from-purple-500/20 via-accent/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/25 via-transparent to-primary/15 rounded-full blur-xl animate-pulse delay-1500"></div>

        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-500/3 to-purple-500/3 pointer-events-none"></div>
      </FrameHighlight>
    ),
  },
  {
    title: "2024–2025",
    content: (
      <FrameHighlight>
        <p className={paragraphStyle}>
          Specialization in Front-End Development.
        </p>
        <p className={paragraphStyle}>
          Technologies mastered: HTML, CSS, JavaScript, React, Next.js and
          Tailwind CSS.
        </p>
        <h2 className="text-primary text-base md:text-lg  font-normal tracking-tight   mb-4">
          Skills acquired:
        </h2>
        <ul className={listStyle}>
          <li>Creation of modern and responsive user interfaces.</li>
          <li>
            Integration of UI libraries like Shadcn UI and usage of Framer
            Motion for interactive animations.
          </li>
          <li>
            Team project management and development of complete web
            applications.
          </li>
        </ul>

        <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-blue-500/15 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-tl from-purple-500/20 via-accent/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/25 via-transparent to-primary/15 rounded-full blur-xl animate-pulse delay-1500"></div>

        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-500/3 to-purple-500/3 pointer-events-none"></div>
      </FrameHighlight>
    ),
  },
  {
    title: "2025–2026",
    content: (
      <FrameHighlight>
        <p className={paragraphStyle}>
          Specialization in Back-End Development.
        </p>
        <p className={paragraphStyle}>
          Technologies and tools studied: Java, Node.js, Prisma, MongoDB.
        </p>
        <h2 className="text-primary text-base md:text-lg  font-normal tracking-tight   mb-4">
          Skills in developing robust and performant systems:
        </h2>
        <ul className={listStyle}>
          <li>Design and management of NoSQL databases.</li>
          <li>
            Implementation of server architecture and data persistence
            management.
          </li>
          <li>Collaboration with Front-End teams for seamless integrations.</li>
        </ul>

        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-bl from-blue-500/15 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-purple-500/20 via-accent/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-b from-cyan-500/25 via-transparent to-primary/15 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-18 bg-gradient-to-r from-blue-500/20 via-primary/10 to-transparent rounded-full blur-lg"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/3 to-purple-500/3 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/2 via-transparent to-blue-500/3 pointer-events-none"></div>
      </FrameHighlight>
    ),
  },
];

export const skills = [
  {
    icon: <FaUserAlt />,
    title: "Personal Growth",
    description:
      "I constantly strive to improve my mindset and behavior to foster strong relationships and handle challenges better.",
  },
  {
    icon: <FaLightbulb />,
    title: "Adaptability and Learning",
    description:
      "I’m open-minded and quick to learn new technologies to meet evolving needs and contexts.",
  },
  {
    icon: <FaUsers />,
    title: "Time Management & Teamwork",
    description:
      "I meet deadlines consistently and excel in collaborative, team-oriented environments.",
  },
  {
    icon: <FaLanguage />,
    title: "Multilingual Communication",
    description:
      "Fluent in English and Arabic, I communicate effectively across multicultural teams and environments.",
  },
];

export const technologies = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "NestJS", icon: SiNestjs },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Drizzle ORM", icon: SiDrizzle },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Auth.js", icon: SiAuth0 },
  { name: "Clerk", icon: SiClerk },
  { name: "Convex", icon: SiConvex },
  { name: "Stripe", icon: FaStripe },
  { name: "Java", icon: FaJava },
  { name: "Github", icon: FaGithub },
  { name: "Figma", icon: FaFigma },
  { name: "Git", icon: FaGitAlt },
];

export const socialLinks = [
  {
    href: "https://github.com/Ziane-Badreddine",
    label: "GitHub",
    icon: <FiGithub />,
  },
  {
    href: "https://www.linkedin.com/in/ziane-badr-eddine-baa394337/?trk=public-profile-join-page",
    label: "LinkedIn",
    icon: <FiLinkedin />,
  },
  {
    href: "https://x.com/EddineZian27143",
    label: "Twitter",
    icon: <FaXTwitter />,
  },
];
