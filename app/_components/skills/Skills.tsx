"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedTechIcons from "./AnimatedTechIcons";
import { skills } from "@/data/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden isolate"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_2px,transparent_0)] bg-[size:2rem_2rem] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_2px,transparent_0)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
            variant="secondary"
          >
            <span className="mr-1 text-primary">✦</span> Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Clean Code, Real-World Solutions
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            A versatile skill set in Front-End and Back-End development to build
            fast, responsive interfaces and scalable systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-2xl shadow-lg relative">
                {skill.icon}
                <div
                  className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
                  style={{
                    animationDuration: "3s",
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-bold">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatedTechIcons />
      </div>
    </section>
  );
}
