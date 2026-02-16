"use client";

import { motion } from "motion/react";
import React from "react";
import BlogCard from "./blog-card";
import { Post } from "@/types/sanity";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Banner,BannerClose, BannerIcon, BannerTitle } from "../kibo-ui/banner";
import { CircleAlert } from "lucide-react";

interface BlogListProps {
  blogs: Post[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delay: 0.2 },
  },
};

const item = { hidden: { opacity: 0, y: 5 }, show: { opacity: 1, y: 0 } };

export default function BlogList({ blogs }: BlogListProps) {
  const t = useTranslations("Blog");
  const locale = useLocale();



  return (
    <>
     {locale != "en" &&  <Banner>
        <BannerIcon icon={CircleAlert} />
        <BannerTitle className="text-base font-semibold">{t("banner")}</BannerTitle>
        <BannerClose />
      </Banner>}

      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="relative container mx-auto px-4 pt-20 pb-10 md:px-6 space-y-2 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn("text-5xl font-semibold mb-4 md:text-6xl")}
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variants={item}
          className="text-muted-foreground mx-auto max-w-5xl text-base text-balance md:text-lg"
        >
          {t("description")}
        </motion.p>
      </motion.section>

      {/* Blog cards */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 px-4 md:px-6"
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
