import { getBlogs } from "@/actions/blog";
import BlogList from "@/components/blog/blog-list";
import { Metadata } from "next";

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
      <BlogList blogs={blogs} />
    </div>
  );
}
