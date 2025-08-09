"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { socialLinks } from "@/data/data";
import { Spotlight } from "./Spotlight";
import { SplitTextReveal } from "./SplitTextReveal";
import {  playwriteMxGuides } from "@/lib/fonts";


export default function Hero() {
  return (
    <section className="relative isolate container mx-auto w-full py-10 md:py-32 ">
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
            <h1 className=" pt-2 from-foreground via-foreground/90  to-foreground/70 mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl ">
              <span className={`${playwriteMxGuides.className}`}>Hi there </span>,{" "}
              <span className="font-serif font-light italic">I&apos;m </span>
              <br />
              <span className="text-primary inline-flex items-baseline gap-1  ">
                <Cover>Ziane Badreddine</Cover>
              </span>
            </h1>

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
          <div className=" w-full h-full relative order-1 lg:order-none mx-auto  flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.6, // un peu plus long pour lisser
              }}
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
          duration: 1, // un peu plus long pour lisser
        }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_30%,var(--chart-3),transparent_25%)] blur-3xl"
      ></motion.div>
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_70%,var(--chart-3),transparent_10%)] blur-3xl"></motion.div>
    </section>
  );
}
