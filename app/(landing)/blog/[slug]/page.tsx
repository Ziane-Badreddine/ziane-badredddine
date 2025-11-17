import { getBlog } from "@/actions/blog";
import BlogBody from "@/components/blog/PortableTextComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge"; // ✅ import Badge
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { inter, lora } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: `Article Not Found - My Blog`,
      description: `The article you are looking for does not exist or has been moved.`,
    };
  }

  return {
    title: `${blog.title} - My Blog`,
    description: blog.description.toString(),
  };
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="from-background w-full via-background to-muted/20 py-10 md:py-10 lg:py-20 relative isolate min-h-screen bg-gradient-to-br pb-10 md:pb-10 lg:pb-20 container ">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/10 absolute top-0 right-0 size-80 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute bottom-0 left-0 size-80 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>
      <div className=" mx-auto max-w-5xl px-5 md:px-8 space-y-8 lg:max-w-4xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1  font-medium text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md mb-8 hover:underline underline-offset-2 group"
        >
          <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1 " />
          <span>Back to Blog</span>
        </Link>

        {/* Published date */}
        <p className="text-muted-foreground text-sm">
          {format(new Date(blog.publishedAt), "EEEE, MMMM d yyyy")}
        </p>

        {/* Title */}
        <h1
          className={`text-3xl md:text-5xl font-semibold leading-tight ${lora.className}`}
        >
          {blog.title}
        </h1>

        {/* Categories */}
        {blog.categories?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.categories.map((cat) => (
              <Badge className="rounded-xs" key={cat._id}>
                {cat.title}
              </Badge>
            ))}
          </div>
        )}

        {/* Author info */}
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground">Posted by</p>
          <Link href={blog.author.twitter ?? "/"}>
            <Button
              size="lg"
              variant="ghost"
              className="pl-0 py-2 cursor-pointer flex items-center gap-3"
            >
              <Avatar className="border-2 border-primary size-10">
                <AvatarImage
                  src={urlFor(blog.author.image).auto("format").url()}
                  width={40}
                  height={40}
                />
                <AvatarFallback>
                  {blog.author.name.toUpperCase().slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className={`capitalize ${lora.className}`}>
                  {blog.author.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  {blog.author.email}
                </span>
              </div>
            </Button>
          </Link>
          <Separator />
        </div>

        {/* Blog body */}
        <div className={inter.className}>
          <BlogBody body={blog.body} />
        </div>
      </div>
    </div>
  );
}
