import { getBlogs } from "@/actions/blog";
import BlogCard from "@/components/blog/blog-card";
import { lora } from "@/lib/fonts";
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
    <main className="w-full h-full flex-1 py-10 md:py-10 lg:py-20 px-4 md:px-6 container mx-auto relative isolate">

      <h1
        className={`text-4xl md:text-5xl font-bold tracking-tight mb-4 ${lora.className}`}
      >
        Latest Updates
      </h1>
      <p className="text-muted-foreground mb-8">
        Tutorials and insights on JavaScript, React, Next.js, Tailwind CSS,
        Node.js, and Spring — from full-stack software engineer <span className="text-primary">Ziane
        Badreddine</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {blogs.length > 0 &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </main>
  );
}
