"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/data";
import { Spotlight } from "./Spotlight";
import { SplitTextReveal } from "./SplitTextReveal";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { lora } from "@/lib/fonts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { Download } from "@/components/animate-ui/icons/download";
const icons = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "#000000",
  },
  {
    icon: SiReact,
    name: "React",
    color: "#61dafb",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "#3178c6",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#38bdf8",
  },
  {
    icon: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
  },
  {
    icon: FaJava,
    name: "Java",
    color: "#f89820",
  },
];

export default function Hero() {
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);

  const [linePos, setLinePos] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useEffect(() => {
    const updateLine = () => {
      if (circle1Ref.current && circle2Ref.current) {
        const rect1 = circle1Ref.current.getBoundingClientRect();
        const rect2 = circle2Ref.current.getBoundingClientRect();

        setLinePos({
          x1: rect1.left + rect1.width / 2,
          y1: rect1.top + rect1.height / 2,
          x2: rect2.left + rect2.width / 2,
          y2: rect2.top + rect2.height / 2,
        });
      }
    };

    const interval = setInterval(updateLine, 16);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const isMobile = useIsMobile();

  return (
    <section className="relative isolate container mx-auto w-full py-10 md:py-20 lg:py-20  overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{duration: 2 }}
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--foreground) 49%, var(--foreground) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--foreground) 49%, var(--foreground) 51%, transparent 51%)
      `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, var(--background) 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, var(--background) 50%, transparent 90%)",
        }}
      />

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="absolute  inset-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.line
          x1={linePos.x1}
          y1={linePos.y1}
          x2={linePos.x2}
          y2={linePos.y2}
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/50"
          strokeDasharray="10,5"
        />
      </motion.svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={cn(
          "absolute    w-32 h-32 -z-10 cursor-grab md:z-500",
          isMobile ? " bottom-1/2 -left-[10%] " : " right-10 bottom-10"
        )}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 2, ease: "easeOut", delay: 1.6 },
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
        }}
        drag
        dragSnapToOrigin
        whileDrag={{ scale: 0.9 }}
        dragMomentum={false} // optional, disables inertia
        dragConstraints={{
          top: -100,
          bottom: 100,
          left: -200,
          right: -100,
        }} // optional
      >
        <defs>
          {/* Glow / Blur filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <polygon
          points="100,20 180,180 20,180"
          fill="currentColor"
          filter="url(#glow)"
          className="text-primary/10"
        />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Spotlight
          className="top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-50"
          fill="white"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at center, var(--muted), transparent 70%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          opacity: 1,
          transition: { delay: 0.5, duration: 2 },
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className=" text-left  md:text-center  relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center justify-center  "
      >
        <Avatar className="size-36 mb-6 ring-primary ring-4 relative">
          <AvatarImage src="https://avatars.githubusercontent.com/u/183768832?v=4" />
          <AvatarFallback>CN</AvatarFallback>
          <div
            className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          ></div>
        </Avatar>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="from-foreground via-foreground/90 to-foreground/70 mb-6 
             bg-gradient-to-r bg-clip-text 
             text-balance text-center font-semibold text-4xl tracking-[-0.06em]! sm:text-4xl md:text-xl xl:text-6xl"
        >
          Hi, I’m{" "}
          <span className="font-serif text-primary font-light italic inline-flex items-center gap-2">
            <span className={`${lora.className}`}>Ziane</span>
          </span>{" "}
          — building modern{" "}
          <span className=" underline underline-offset-2 decoration-wavy">
            web
          </span>{" "}
          apps with{" "}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="-space-x-2 -translate-y-1.5 md:-translate-y-2.5 inline-flex items-center justify-center"
          >
            {icons.map((icon, index) => (
              <Tooltip key={icon.name}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={item}
                    className="inline-flex size-8 items-center justify-center rounded-full text-white sm:size-10 md:size-12 lg:size-14"
                    style={{
                      backgroundColor: icon.color,
                      maskImage: index
                        ? "radial-gradient(circle 28px at -17px 50%, transparent 99%, white 100%)"
                        : "none",
                    }}
                  >
                    <icon.icon className="size-3 sm:size-4 md:size-5 lg:size-6" />
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>{icon.name}</TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </motion.h1>

        <SplitTextReveal
          className=" max-w-4xl justify-center  "
          text="Fullstack software engineer passionate about building modern web apps with Next.js and Tailwind on the frontend, and scalable APIs using Node.js or Java Spring Boot on the backend."
        />

        <div className="flex flex-row gap-4 mt-8">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            href="#projects"
          >
            <AnimateIcon animateOnHover="out" completeOnStop asChild>
              <Button
                size="lg"
                className="h-12 w-full cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View My Work
                <ArrowRight className="size-5 " />
              </Button>
            </AnimateIcon>
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            href="/cv.pdf"
            target="_blank"
            download
          >
            <AnimateIcon
              loop={isMobile}
              animateOnHover={!isMobile}
              completeOnStop
              asChild
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 w-full hover:border-primary/50 h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span className=" hidden md:inline">Download CV</span>
                <Download className="size-5 " />
              </Button>
            </AnimateIcon>
          </motion.a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.2,
                  duration: 0.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full border border-dashed border-primary"
                aria-label={link.label}
              >
                {link.icon}
              </Button>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_30%,var(--chart-3),transparent_25%)] blur-3xl"
      />

      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,var(--chart-3),transparent_10%)] blur-3xl" />
    </section>
  );
}
