"use client";

import { Post } from "@/types/sanity";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import BlogBody from "./PortableTextComponents";

interface BlogCardProps {
  blog: Post;
}

export default function BlogCard({ blog }: BlogCardProps) {

  return (
    <Card
      className={cn(
        "group ring-primary/50  from-card to-primary/5 relative border-2 bg-gradient-to-b ring-2 transition-all duration-300",
        blog.mainImage && "pt-0"
      )}
    >
      {blog.mainImage && (
        <Image
          src={urlFor(blog.mainImage).auto("format").url()}
          alt={blog.title}
          width={640}
          height={320}
          className="aspect-video w-full rounded-t-xl "
        />
      )}
      <CardContent className="px-4 flex flex-col gap-4 h-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <Calendar className="size-4" />
            <p className="text-muted-foreground text-sm">
              {format(new Date(blog.publishedAt), "MMMM d, yyyy")}
            </p>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <Avatar className="border-2 border-primary">
                <AvatarImage
                  src={urlFor(blog.author.image).auto("format").url()}
                />
                <AvatarFallback>
                  {blog.author.name.toUpperCase().slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{blog.author.name}</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-wrap gap-2">
          {blog.categories &&
            blog.categories.length > 0 &&
            blog.categories.map((cat) => (
              <Badge className="rounded-xs" variant={"secondary"} key={cat._id}>
                {cat.title}
              </Badge>
            ))}
        </div>
        <h4 className="text-xl">{blog.title}</h4>
       <div>
         {blog.description && <BlogBody body={blog.description} />}
       </div>
      </CardContent>
      <CardFooter className="px-4">
        <Link className="w-full" href={`/blog/${blog.slug.current}`}>
          <Button
            size={"lg"}
            className="w-full border cursor-pointer h-12 text-base font-medium"
          >
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
