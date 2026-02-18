"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import AnimatedTechIcons from "./AnimatedTechIcons";
import { skills } from "@/data/data";

import { FaUserAlt, FaLightbulb, FaUsers, FaLanguage } from "react-icons/fa";
import { useTranslations } from "next-intl";

const iconMap = {
  user: <FaUserAlt />,
  idea: <FaLightbulb />,
  team: <FaUsers />,
  language: <FaLanguage />,
};

export default function Skills() {
  const t = useTranslations();
  return (
    <section
      id="skills"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden isolate"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
      repeating-linear-gradient(45deg, color-mix(in srgb, var(--primary) 15%, transparent) 0, color-mix(in srgb, var(--primary) 15%, transparent) 2px, transparent 2px, transparent 30px),
      repeating-linear-gradient(-45deg, color-mix(in srgb, var(--primary) 10%, transparent) 0, color-mix(in srgb, var(--primary) 10%, transparent) 1px, transparent 1px, transparent 25px)
    `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className=" mx-auto px-4 md:px-6 relative">
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
            <span className="mr-1 text-primary">✦</span>{" "}
            {t("skillsSection.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            {t("skillsSection.title")}
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            {t("skillsSection.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-2xl shadow-lg relative">
                {iconMap[skill.icon as keyof typeof iconMap]}
                <div
                  className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"
                  style={{
                    animationDuration: "3s",
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              </div>
              <h3 className="text-xl font-bold">
                {" "}
                {t(`skills.${skill.key}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {" "}
                {t(`skills.${skill.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
        <AnimatedTechIcons />
      </div>
    </section>
  );
}
