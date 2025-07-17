"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { socialLinks } from "@/data/data";
import { Spotlight } from "./Spotlight";

export default function Hero() {
  return (
    <section className="relative isolate container mx-auto w-full py-10 md:py-32 ">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="var(--primary)"
        />
      <div className=" relative z-10 px-4 md:px-6">
        <div className=" grid grid-cols-1 items-center gap-12 lg:grid-cols-2  ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-left lg:mx-0 order-2 lg:order-none"
          >
            <div>
              <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-none"
                variant="secondary"
              >
                <span className="text-primary mr-1">✦</span> Software Engineer
              </Badge>
            </div>
            <h1 className="from-foreground via-foreground/90 to-foreground/70 mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl ">
              Hi there,{" "}
              <span className="font-serif font-light italic">I&apos;m </span>
              <span className="text-primary inline-flex items-baseline gap-1  ">
                <Cover>Ziane Badreddine</Cover>
              </span>
            </h1>
            <TextGenerateEffect
              words="Fullstack software engineer passionate about building modern web apps with Next.js and Tailwind on the frontend, and scalable APIs using Node.js or Java Spring Boot on the backend."
              className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl"
              filter={true}
              duration={0.01}
            />

            <div className="flex flex-col gap-4 md:flex-row">
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
                href="/path-to-cv.pdf"
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
                      type: "spring", stiffness: 300 
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
          <div className=" w-full h-full relative order-1 lg:order-none mx-auto  flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.9, duration: 0.4, ease: "easeInOut" },
                }}
                className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute"
              >
                <Image
                  src={"/avatar2.svg"}
                  priority
                  alt=""
                  quality={100}
                  fill
                  className=" object-contain rounded-full"
                />
              </motion.div>

              <motion.svg
                className="w-[300px] h-[300px] lg:w-[506px] lg:h-[506px]  "
                fill="transparent"
                viewBox={"0 0 506 506"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <motion.circle
                  cx={"253"}
                  cy={"253"}
                  r="250"
                  stroke={"oklch(0.5854 0.2041 277.1173)"}
                  strokeWidth={4}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [120, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_30%,var(--muted),transparent_35%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,var(--muted),transparent_10%)] blur-3xl"></div>
    </section>
  );
}
