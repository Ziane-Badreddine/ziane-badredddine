import { getBlog } from "@/actions/blog";
import BlogBody from "@/components/blog/PortableTextComponents";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
    description: blog.description,
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
    <div className="w-full h-full flex-1 pt-24 pb-16 md:pt-28 md:pb-32 relative isolate">
      {/* Background with cosmic noise */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, var(--foreground)/8% 0%, transparent 40%),
            radial-gradient(circle at 80% 30%, var(--foreground)/5% 0%, transparent 40%),
            linear-gradient(120deg, var(--background) 0%, var(--card) 100%)
          `,
        }}
      />

      <div className="container mx-auto max-w-5xl px-5 md:px-8 space-y-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="flex max-w-[150px] items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:underline underline-offset-4 mb-8"
        >
          <ArrowLeft className="size-5" />
          Back to Blog
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
