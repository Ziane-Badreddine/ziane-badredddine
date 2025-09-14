import { getBlogs } from "@/actions/blog";
import BlogCard from "@/components/blog/blog-card";
import { lora } from "@/lib/fonts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog | Ziane Badreddine",
  description: "blog for Ziane Badreddine.",
};

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <main className="w-full h-full flex-1 pt-26 pb-10 md:pb-32 md:pt-28 px-4 md:px-6 container mx-auto relative isolate">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
        radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%),
        linear-gradient(120deg, var(--background) 0%,var(--popover) 50%, var(--card) 100%)
      `,
        }}
      />
      <h1
        className={`text-3xl md:text-4xl font-bold tracking-tight mb-12 ${lora.className}`}
      >
        The latest <span className="text-primary">Ziane Badreddine</span> blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs.length > 0 &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </main>
  );
}
