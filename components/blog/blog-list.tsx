"use client";

import { motion } from "motion/react";
import React from "react";
import BlogCard from "./blog-card";
import { Post } from "@/types/sanity";
import { cn } from "@/lib/utils";
import { lora } from "@/lib/fonts";
interface BlogListProps {
  blogs: Post[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delay: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 5 },
  show: { opacity: 1, y: 0 },
};

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="relative container mx-auto  px-4 pt-20 pb-10 md:px-6 space-y-2 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "from-foreground  to-foreground/50 bg-gradient-to-r bg-clip-text text-5xl font-bold tracking-tight text-pretty text-transparent md:text-6xl",
            lora.className
          )}
        >
          Latest Updates
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variants={item}
          className="text-muted-foreground mx-auto max-w-5xl text-base text-balance md:text-lg"
        >
          Tutorials and insights on JavaScript, React, Next.js, Tailwind CSS,
          Node.js, and Spring — from full-stack software engineer{" "}
          <span className="text-primary">Ziane Badreddine</span>.
        </motion.p>
      </motion.section>
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid  gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 px-4 md:px-6"
      >
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <motion.div key={blog._id} variants={item}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
      </motion.section>
    </>
  );
}
