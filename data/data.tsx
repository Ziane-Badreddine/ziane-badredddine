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
    description: "Modern, responsive websites with custom design and optimized performance.",
    image: "/images/website.svg",
    icon: <IconDeviceDesktopCode className="size-5" />,
  },
  {
    id: 1,
    title: "Flexible Communication",
    description: "Smooth collaboration across time zones with clients worldwide.",
    image: "/services/edge-functions-dark.svg",
    icon: <IconWorld className="size-5" />,
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creative visuals that match your brand and enhance UX.",
    image: "",
    icon: <IconPalette className="size-5" />,
  },
  {
    id: 3,
    title: "SQL/NoSQL Databases",
    description: "Secure, high-performance databases tailored to your app.",
    image: "",
    icon: <IconDatabase className="size-5" />,
  },
  {
    id: 4,
    title: "Java Development",
    description: "Scalable and maintainable Java applications for various solutions.",
    icon: <FaJava className="size-5" />,
  },
  {
    id: 5,
    title: "Problem Solving",
    description: "Efficiently solving complex algorithmic challenges with clean code.",
    icon: <IconPuzzle className="size-5" />,
  },
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


export const education = [
  {
    title: "2022–2024",
    description: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          <strong>Diploma in Mathematics, Physics and Computer Science</strong>  
          at the Faculty of Sciences and Technology with <em>Honors</em>.
        </p>
        <p className="text-base leading-relaxed">
          In-depth study of applied mathematics, physics, and computer science
          fundamentals, with a strong focus on problem-solving.
        </p>
        <p className="text-base leading-relaxed">
          Gained proficiency in <strong>algorithms</strong> and
          <strong> programming</strong>.
        </p>
        <p className="text-base leading-relaxed">
          Languages studied: <code>C</code> (procedural programming) and
          <code> SQL</code> (relational database management).
        </p>
        <p className="text-base leading-relaxed">
          Completed academic projects including design and management of simple
          databases.
        </p>
      </div>
    ),
    badge: "Mathematics · Physics · CS",
    image:
      "/education/mathematics.svg",
  },
  {
    title: "2024–2025",
    description: (
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Specialization in <strong>Front-End Development</strong>.
        </p>
        <p className="text-base leading-relaxed">
          Mastered technologies: HTML, CSS, JavaScript, React, Next.js, and
          Tailwind CSS.
        </p>
        <h3 className="text-primary font-semibold text-lg">Skills acquired:</h3>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li>Creation of modern, responsive user interfaces.</li>
          <li>
            Integration of UI libraries such as Shadcn UI and use of Framer
            Motion for animations.
          </li>
          <li>
            Team project management and development of complete web
            applications.
          </li>
        </ul>
      </div>
    ),
    badge: "Front-End Development",
    image:
      "/education/front-end.svg",
  },
  {
    title: "2025–2026",
    description: (
      <div className="space-y-4 ">
        <p className="text-base leading-relaxed">
          Specialization in <strong>Back-End Development</strong>.
        </p>
        <p className="text-base leading-relaxed">
          Technologies studied: Java, Node.js, Prisma, and MongoDB.
        </p>
        <h3 className="text-primary font-semibold text-lg">
          Skills in developing robust systems:
        </h3>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          <li>Design and management of NoSQL databases.</li>
          <li>
            Implementation of server architectures and data persistence
            strategies.
          </li>
          <li>
            Collaboration with Front-End teams for seamless integration.
          </li>
        </ul>
      </div>
    ),
    badge: "Back-End Development",
    image:
      "/education/back-end.svg",
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
