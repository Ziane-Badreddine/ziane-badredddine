"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { inter, jetBrainsMono, lora } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import {
  AlertCircle,
  AlertTriangle,
  ArrowUpRight,
  CheckCircle,
  Info,
  Terminal,
} from "lucide-react";
import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/ui/kibo-ui/code-block";

// Icons
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiMysql,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { JSX } from "react";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageZoom } from "../ui/kibo-ui/image-zoom";
import { cn } from "@/lib/utils";

const languageIcons: Record<string, JSX.Element> = {
  javascript: <SiJavascript className="size-4 text-current" />,
  typescript: <SiTypescript className="size-4 text-current" />,
  html: <SiHtml5 className="size-4 text-current" />,
  css: <SiCss3 className="size-4 text-current" />,
  python: <SiPython className="size-4 text-current" />,
  java: <FaJava className="size-4 text-current" />,
  cpp: <SiCplusplus className="size-4 text-current" />,
  json: <VscJson className="size-5 text-current" />,
  bash: <Terminal className="size-4 text-current" />,
  sql: <SiMysql className="size-4 text-current" />,
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-6 w-full flex flex-col justify-center">
          <ImageZoom
            backdropClassName={cn(
              '[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
            )}
          >
            <Image
              src={urlFor(value).width(1200).url() || "/placeholder.svg"}
              alt={value.alt || "Blog image"}
              width={1200}
              height={700}
              className="shadow-lg object-cover w-full max-w-[800px] mx-auto 
                 [data-rmiz-modal-img]:!w-auto [data-rmiz-modal-img]:!max-w-[90vw] [data-rmiz-modal-img]:!max-h-[90vh]"
              priority
              quality={100}
            />
          </ImageZoom>

          {value.alt && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
              {value.alt}
            </figcaption>
          )}
        </div>
      );
    },
    code: ({ value }) => {
      const code = [
        {
          language: value.language ?? "javascript",
          filename: value.filename,
          code: value.code,
        },
      ];
      return (
        <div className="my-6">
          <CodeBlock
            data={code}
            defaultValue={code[0].language}
            className="shadow-md dark:shadow-none"
          >
            <CodeBlockHeader className=" bg-muted-foreground/10 dark:bg-background ">
              <CodeBlockFiles>
                {(item) => (
                  <CodeBlockFilename key={item.language} value={item.language}>
                    <div
                      className={`flex items-center gap-2 ${inter.className}`}
                    >
                      {languageIcons[item.language?.toLowerCase()] || null}
                      <span>
                        {item.filename || item.language === "bash"
                          ? "terminal"
                          : "snippet"}
                      </span>
                    </div>
                  </CodeBlockFilename>
                )}
              </CodeBlockFiles>
              <CodeBlockCopyButton
                className="hover:bg-primary/50 cursor-pointer"
                onCopy={() => console.log("Copied code to clipboard")}
                onError={() =>
                  console.error("Failed to copy code to clipboard")
                }
              />
            </CodeBlockHeader>
            <CodeBlockBody>
              {(item) => (
                <CodeBlockItem
                  className="dark:bg-muted/25 bg-background "
                  key={item.language}
                  lineNumbers={!["bash"].includes(value.language)}
                  value={item.language}
                >
                  <CodeBlockContent language={item.language as BundledLanguage}>
                    {item.code}
                  </CodeBlockContent>
                </CodeBlockItem>
              )}
            </CodeBlockBody>
          </CodeBlock>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className={`text-4xl md:text-4xl font-bold my-6 ${lora.className}`}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <div className="pt-8 mb-6">
        <Separator className="h-[2px] w-16  rounded-full mb-10" />
        <h2 className="text-3xl font-semibold ">{children}</h2>
      </div>
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
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6">
        {children}
      </blockquote>
    ),
    info: ({ children }) => (
      <Alert
        variant="default"
        className="border-l-2 border-dashed border-l-blue-600 rounded-none shadow-md  dark:shadow-none  "
      >
        <Info className="w-5 h-5 text-blue-600 mr-2" color="#155dfc" />
        <AlertDescription className="block ">{children}</AlertDescription>
      </Alert>
    ),
    warning: ({ children }) => (
      <Alert
        variant="default"
        className="border-l-2 border-dashed border-l-yellow-400 rounded-none text-primary-foreground shadow-md  dark:shadow-none "
      >
        <AlertTriangle
          className="size-10  mr-2"
          fill="oklch(68.1% 0.162 75.834)"
        />
        <AlertDescription className="block ">{children}</AlertDescription>
      </Alert>
    ),
    error: ({ children }) => (
      <Alert
        variant="destructive"
        className="border-l-2 border-dashed border-l-red-600 rounded-none shadow-md  dark:shadow-none "
      >
        <AlertCircle
          className="w-10 h-10 mr-2  text-foreground"
          color="oklch(57.7% 0.245 27.325)"
        />
        <AlertDescription className="block ">{children}</AlertDescription>
      </Alert>
    ),
    success: ({ children }) => (
      <Alert
        variant="default"
        className="border-l-2 border-dashed border-l-green-600 rounded-none shadow-md dark:shadow-none"
      >
        <CheckCircle
          className="w-10 h-10 mr-2 text-green-600"
          color="oklch(70% 0.17 145)"
        />
        <AlertDescription className="block">{children}</AlertDescription>
      </Alert>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside pl-2 md:pl-4 my-4 space-y-2 marker:text-primary">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside pl-2 md:pl-4 my-4 space-y-2 marker:text-primary">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => (
      <Link
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-primary font-medium hover:underline underline-offset-4 ml-1 mr-5"
      >
        {children}
        <ArrowUpRight className="size-4 shrink-0" />
      </Link>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
    code: ({ children }) => (
      <code
        className={`px-1.5 py-0.5 rounded-md bg-sidebar-border  text-primary ${jetBrainsMono.className}`}
      >
        {children}
      </code>
    ),
    underline: ({ children }) => (
      <span className="underline underline-offset-4">{children}</span>
    ),
    "strike-through": ({ children }) => (
      <span className="line-through text-muted-foreground">{children}</span>
    ),
  },
};

export default function BlogBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
