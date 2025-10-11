"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SplitTextRevealProps = {
  text: string;
  delay?: number;
  className?: string;
};

const container = {
  hidden: { opacity: 0 },
  show: (delay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: delay,
    },
  }),
};

const word = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
};



const filterWorld = ["backend.","APIs","Java", "Spring" ,"Boot", "Node.js", "Tailwind", "Next.js","Fullstack","software","engineer","frontend,","modern","web","apps"];

export const SplitTextReveal = ({
  text,
  delay = 0.05,
  className = "",
}: SplitTextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.h1
      className={cn("flex flex-wrap gap-x-1 items-center justify-start ", className)}
      variants={container}
      initial="hidden"
      animate="show"
      custom={delay}
    >
      {words.map((wordText, index) => (
        <motion.span
          key={index}
          variants={word}
          className={cn(
            "text-muted-foreground text-lg leading-relaxed md:text-xl",
            filterWorld.includes(wordText) &&
              "text-primary "
          )}
        >
          {wordText}
        </motion.span>
      ))}
    </motion.h1>
  );
};
