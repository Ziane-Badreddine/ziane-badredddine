import { PortableText, PortableTextComponents } from "next-sanity";
import { PortableTextBlock } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { lora } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-6 w-full flex justify-center">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || "Blog image"}
          width={800}
          height={500}
          className=" shadow-lg object-cover"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className={`text-4xl md:text-4xl font-bold my-6 ${lora.className}`}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium my-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-medium my-3">{children}</h4>
    ),
    normal: ({ children }) => (
      <div className="my-6">
        <p className="leading-7 text-muted-foreground">{children}</p>
        <Separator className="my-6 opacity-40" />
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline underline-offset-4 relative"
      >
        {children}
        <ArrowUpRight className=" absolute -right-5 top-0 size-4" />
      </Link>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export default function BlogBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
