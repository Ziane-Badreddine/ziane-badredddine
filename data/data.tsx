
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
import { SiConvex } from "@/components/icons/SiConvex";
export const services = [
  {
    id: 0,
    titleKey: "websiteDevelopment.title",
    descriptionKey: "websiteDevelopment.description",
    image: "/images/website.svg",
    icon: <IconDeviceDesktopCode className="size-5" />,
  },
  {
    id: 1,
    titleKey: "flexibleCommunication.title",
    descriptionKey: "flexibleCommunication.description",
    image: "/services/edge-functions-dark.svg",
    icon: <IconWorld className="size-5" />,
  },
  {
    id: 2,
    titleKey: "graphicDesign.title",
    descriptionKey: "graphicDesign.description",
    image: "",
    icon: <IconPalette className="size-5" />,
  },
  {
    id: 3,
    titleKey: "databases.title",
    descriptionKey: "databases.description",
    image: "",
    icon: <IconDatabase className="size-5" />,
  },
  {
    id: 4,
    titleKey: "javaDevelopment.title",
    descriptionKey: "javaDevelopment.description",
    icon: <FaJava className="size-5" />,
  },
  {
    id: 5,
    titleKey: "problemSolving.title",
    descriptionKey: "problemSolving.description",
    icon: <IconPuzzle className="size-5" />,
  },
];


export const projects = [
  {
    id: "01",
    titleKey: "ecommerce.title",
    descriptionKey: "ecommerce.description",
    img: "/images/E-commerce.png",
    iconLists: [SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiShadcnui],
    link: "https://store-phi-self.vercel.app",
    github: "https://github.com/Ziane-Badreddine/store",
    status: "completed",
  },
  {
    id: "02",
    titleKey: "storyCareer.title",
    descriptionKey: "storyCareer.description",
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
    titleKey: "xoGame.title",
    descriptionKey: "xoGame.description",
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
    status: "comingSoon",
  },
  {
    id: "04",
    titleKey: "chatApp.title",
    descriptionKey: "chatApp.description",
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
    year: "2022–2024",
    badgeKey: "degree.badge",
    titleKey: "degree.title",
    descriptionKey: "degree.description",
    image: "/education/mathematics.svg",
  },
  {
    year: "2024–2025",
    badgeKey: "frontend.badge",
    titleKey: "frontend.title",
    descriptionKey: "frontend.description",
    image: "/education/front-end.svg",
  },
  {
    year: "2025–2026",
    badgeKey: "backend.badge",
    titleKey: "backend.title",
    descriptionKey: "backend.description",
    image: "/education/back-end.svg",
  },
];





export const skills = [
  { key: "growth", icon: "user" },
  { key: "adaptability", icon: "idea" },
  { key: "teamwork", icon: "team" },
  { key: "communication", icon: "language" },
];

export const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Drizzle ORM", icon: SiDrizzle, color: "#FFCC33" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Auth.js", icon: SiAuth0, color: "#EB5424" },
  { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
  { name: "Convex", icon: SiConvex, color: "#FF6F61" }, // pas officiel, placeholder
  { name: "Stripe", icon: FaStripe, color: "#635BFF" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Github", icon: FaGithub, color: "#181717" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
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
