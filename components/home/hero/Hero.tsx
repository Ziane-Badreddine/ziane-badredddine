"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { socialLinks } from "@/data/data";
import { Spotlight } from "./Spotlight";
import { SplitTextReveal } from "./SplitTextReveal";
import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorPointer,
} from "@/components/ui/kibo-ui/cursor";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { lora } from "@/lib/fonts";
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

    // تحديث مستمر أثناء السحب أو resize
    const interval = setInterval(updateLine, 16);
    return () => clearInterval(interval);
  }, []);

  const isMobile = useIsMobile();

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

  return (
    <section className="relative isolate container mx-auto w-full pt-26 pb-10 md:pb-32 md:pt-48  overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 2px, color-mix(in srgb, var(--muted-foreground) 18%, transparent) 2px, color-mix(in srgb, var(--muted-foreground) 18%, transparent) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(67.5deg, transparent, transparent 2px, color-mix(in srgb, var(--muted-foreground) 10%, transparent) 2px, color-mix(in srgb, var(--muted-foreground) 10%, transparent) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(112.5deg, transparent, transparent 2px, color-mix(in srgb, var(--muted-foreground) 8%, transparent) 2px, color-mix(in srgb, var(--muted-foreground) 8%, transparent) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(157.5deg, transparent, transparent 2px, color-mix(in srgb, var(--muted-foreground) 6%, transparent) 2px, color-mix(in srgb, var(--muted-foreground) 6%, transparent) 3px, transparent 3px, transparent 8px)
    `,
        }}
      />

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

      <div className="relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-left lg:mx-0 order-2 lg:order-none"
          >
            <div>
              <Badge
                className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"
                variant="secondary"
              >
                <span className="text-primary mr-1">✦</span> Software Engineer
              </Badge>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="from-foreground via-foreground/90 to-foreground/70 mb-6 
             bg-gradient-to-r bg-clip-text text-4xl font-bold 
             tracking-tight text-transparent md:text-5xl lg:text-6xl max-w-5xl"
            >
              Hi, I’m{" "}
              <span className="font-serif text-primary font-light italic inline-flex items-center gap-2">
                <span className={`${lora.className}`}>Ziane</span>
                <Link
                  href={socialLinks[0].href}
                  target="_blank"
                  className="ml-2 inline-flex items-center justify-center gap-2 align-bottom 
                     bg-primary/10 rounded-full p-1 bg-gradient-to-br 
                     from-primary to-primary/10 text-primary-foreground 
                     text-xl font-bold shadow-lg relative"
                >
                  <Image
                    alt="Profile"
                    className="size-8 overflow-hidden rounded-full sm:size-10 md:size-12 lg:size-14"
                    height={56}
                    src={`/avatar.jpeg`}
                    width={56}
                  />
                  <div
                    className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
                    style={{
                      animationDuration: "3s",
                      animationDelay: `${1 * 0.5}s`,
                    }}
                  ></div>
                </Link>{" "}
              </span>{" "}
              — building modern web apps with{" "}
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

            <SplitTextReveal text="Fullstack software engineer passionate about building modern web apps with Next.js and Tailwind on the frontend, and scalable APIs using Node.js or Java Spring Boot on the backend." />

            <div className="flex flex-col gap-4 md:flex-row mt-8">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                href="#projects"
              >
                <Button
                  size="lg"
                  className="h-12 w-full cursor-pointer rounded-full px-8 text-base shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View My Work
                  <ArrowRight className="size-4 ml-2" />
                </Button>
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
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 w-full hover:border-primary/50 h-12 cursor-pointer rounded-full px-8 text-base transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Download CV
                  <Download className="ml-2" />
                </Button>
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

          <div className="w-full h-full relative order-1 lg:order-none mx-auto flex items-center justify-center   ">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
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

            {/* Premier cercle */}
            <motion.div
              ref={circle1Ref}
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 0.9 }}
              dragMomentum={false}
              dragConstraints={{ top: -100, bottom: 100, left: -200, right: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 2 } }}
              className="absolute top-0 left-0 md:left-10 -z-10 md:z-50"
            >
              <div className="relative flex items-center justify-center">
                {/* Cercle rotatif */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="w-24 h-24 text-primary/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle cx="100" cy="100" r="80" fill="currentColor" />
                </motion.svg>

                {/* Badge centré */}
                <Badge
                  variant="secondary"
                  className="absolute px-2 py-1 text-xs font-medium shadow-md"
                >
                  <span className="text-primary">✦</span> Web Developer
                </Badge>

                {/* Effet ping */}
                <div
                  className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
                  style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                ></div>
              </div>
            </motion.div>

            {/* Deuxième cercle */}
            <motion.div
              ref={circle2Ref}
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 0.9 }}
              dragMomentum={false}
              dragConstraints={{ top: -100, bottom: 100, left: -200, right: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.2, duration: 2 } }}
              className={cn(
                "absolute  -z-10 md:z-50",
                isMobile ? " bottom-0 right-0" : "-left-[10%] bottom-0"
              )}
            >
              <div className="relative flex items-center justify-center">
                {/* Cercle rotatif */}
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="w-24 h-24 text-primary/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <circle cx="100" cy="100" r="80" fill="currentColor" />
                </motion.svg>

                <Badge
                  variant="secondary"
                  className="absolute px-2 py-1 text-xs font-medium shadow-md"
                >
                  <span className="text-primary">✦</span> UI/UX Designer
                </Badge>

                <div
                  className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
                  style={{ animationDuration: "3s", animationDelay: "0.5s" }}
                ></div>
              </div>
            </motion.div>

            <motion.div
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 0.9 }}
              dragMomentum={false} // optional, disables inertia
              dragConstraints={{ top: -100, bottom: 100, left: -200, right: 0 }} // optional
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.4, duration: 2 } }}
              className="absolute top-10 right-15 md:top-20 md:right-20 z-50  "
            >
              {" "}
              <div className="absolute inset-0  flex items-center justify-center z-50 ">
                <Cursor className=" " color="#000000">
                  <CursorPointer />
                  <CursorBody>
                    <CursorMessage>
                      <span className="text-primary mr-1">✦</span> That looks
                      great!
                    </CursorMessage>
                  </CursorBody>
                </Cursor>
              </div>
              <div
                className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
                style={{
                  animationDuration: "3s",
                  animationDelay: `${1 * 0.5}s`,
                }}
              ></div>
            </motion.div>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className={cn(
                "absolute    w-32 h-32 -z-10 cursor-grab md:z-500",
                isMobile ? " bottom-0 -left-[10%] " : " right-0 bottom-0"
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
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
                transition: {
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
              transition={{ duration: 0.7, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotate: 3,
                transition: { type: "spring", stiffness: 250 },
              }}
              whileTap={{ scale: 0.97 }}
              className="w-[298px] h-[298px] md:w-[398px] md:h-[398px] lg:w-[498px] lg:h-[498px] mix-blend-lighten"
            >
              <Image
                src={"/avatar4.svg"}
                priority
                alt=""
                quality={100}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

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
