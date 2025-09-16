import { getBlogs } from "@/actions/blog";
import BlogCard from "@/components/blog/blog-card";
import { lora } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Blog | Ziane Badreddine",
  description: "blog for Ziane Badreddine.",
};

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div className="from-background w-full via-background to-muted/20 relative isolate min-h-screen bg-gradient-to-br pb-10 md:pb-10 lg:pb-20 container">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 absolute top-0 right-0 size-80 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute bottom-0 left-0 size-80 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>
      <div className="relative container mx-auto space-y-28 px-4 pt-20 pb-10 md:px-6">
        <section className="space-y-2 text-center">
          <h1 className={cn("from-foreground  to-foreground/50 bg-gradient-to-r bg-clip-text text-5xl font-bold tracking-tight text-pretty text-transparent md:text-6xl",lora.className)}>
            Latest Updates
          </h1>
          <p className="text-muted-foreground mx-auto max-w-5xl text-base text-balance md:text-lg">
            Tutorials and insights on JavaScript, React, Next.js, Tailwind CSS,
            Node.js, and Spring — from full-stack software engineer{" "}
            <span className="text-primary">Ziane Badreddine</span>.
          </p>
        </section>
      </div>
      <section className="mx-auto grid  gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 px-4 md:px-6">
        {blogs.length > 0 &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </section>
    </div>
  );
}
