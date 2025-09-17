"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { inter, jetBrainsMono, lora } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle,
  Info,
  Terminal,
  XCircle,
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
  SiReact,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { JSX } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageZoom } from "../ui/kibo-ui/image-zoom";
import { cn } from "@/lib/utils";
import Placeholder from "../Placeholder";
import { toast } from "sonner";

const languageIcons: Record<string, JSX.Element> = {
  javascript: <SiJavascript className="size-4 text-current" />,
  typescript: <SiTypescript className="size-4 text-current" />,
  jsx: <SiReact className="size-4 text-current" />,
  tsx: <SiReact className="size-4 text-current" />,
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
    divider: ({ value }) => {
      const style = value?.style || "solid";
      return (
        <hr
          className={`my-10 border-t border-muted-foreground h-[2px]  ${
            style === "dashed"
              ? "border-dashed "
              : style === "dotted"
                ? "border-dotted "
                : ""
          }`}
        />
      );
    },
    image: ({ value }) => {
      return (
        <div className="my-6 w-full flex flex-col justify-center">
          <ImageZoom
            backdropClassName={cn(
              '[&_[data-rmiz-modal-overlay="visible"]]:from-background w-full [&_[data-rmiz-modal-overlay="visible"]]:via-background [&_[data-rmiz-modal-overlay="visible"]]:to-muted/20'
            )}
          >
            {value ? (
              <Image
                src={urlFor(value).width(1200).url()}
                alt={value.alt || "Blog image"}
                width={1200}
                height={700}
                className="shadow-lg object-cover w-full max-w-[800px] mx-auto 
      [data-rmiz-modal-img]:!w-auto [data-rmiz-modal-img]:!max-w-[90vw] [data-rmiz-modal-img]:!max-h-[90vh]"
                priority
                quality={100}
              />
            ) : (
              <Placeholder
                alt={value.alt || "Blog image"}
                width={1200}
                height={700}
                className="shadow-lg object-cover w-full max-w-[800px] mx-auto"
              />
            )}
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
        <CodeBlock
          data={code}
          defaultValue={code[0].language}
          className="shadow-md dark:shadow-none "
        >
          {value.filename ? (
            <CodeBlockHeader className="bg-muted-foreground/10 dark:bg-background">
              <CodeBlockFiles>
                {(item) => (
                  <CodeBlockFilename key={item.language} value={item.language}>
                    <div
                      className={`flex items-center gap-2 ${inter.className}`}
                    >
                      {languageIcons[item.language?.toLowerCase()] || null}
                      <span>
                        {item.language === "bash" ? "terminal" : item.filename}
                      </span>
                    </div>
                  </CodeBlockFilename>
                )}
              </CodeBlockFiles>
              <CodeBlockCopyButton
                className="hover:bg-primary/50 cursor-pointer"
                onCopy={() => toast.success("Copied code to clipboard!")}
                onError={() => toast.error("Failed to copy code to clipboard")}
              />
            </CodeBlockHeader>
          ) : null}

          <CodeBlockBody className="relative">
            {(item) => (
              <CodeBlockItem
                className="dark:bg-muted/25 bg-background group"
                key={item.language}
                lineNumbers={!["bash"].includes(value.language)}
                value={item.language}
              >
                {/* Ajout bouton copy si pas de filename */}
                {!value.filename && (
                  <CodeBlockCopyButton
                    className="absolute top-2 right-2 z-10 hover:bg-primary/50 cursor-pointer hidden group-hover:flex"
                    variant={"outline"}
                    onCopy={() => toast.success("Copied code to clipboard!")}
                    onError={() =>
                      toast.error("Failed to copy code to clipboard")
                    }
                  />
                )}
                <CodeBlockContent language={item.language as BundledLanguage}>
                  {item.code}
                </CodeBlockContent>
              </CodeBlockItem>
            )}
          </CodeBlockBody>
        </CodeBlock>
      );
    },
  },

  block: {
    h1: ({ children }) => (
      <h1
        className={`text-4xl md:text-5xl font-bold tracking-tight mb-8 mt-10 ${lora.className}`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-medium mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl md:text-2xl font-medium mb-3 mt-5">{children}</h4>
    ),
    normal: ({ children }) => (
      <div className="my-5">
        <p className="leading-7 text-muted-foreground">{children}</p>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative rounded-lg border-l-7 my-6 border border-l-primary bg-card text-card-foreground p-6 sm:p-8 shadow-xs dark:shadow-none">
        {/* SVG quote icon */}
        <svg
          className="absolute top-0 left-0 w-16 h-16 text-muted-foreground/50"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
            fill="currentColor"
          />
        </svg>

        {/* Texte */}
        <div className="relative z-10">
          <p className="text-gray-800 sm:text-xl dark:text-white italic leading-relaxed">
            {children}
          </p>
        </div>
      </blockquote>
    ),
    info: ({ children }) => (
      <Alert
        variant="default"
        className="border-l-2 border-dashed border-l-blue-600 rounded-none shadow-md my-6  dark:shadow-none  "
      >
        <Info className="w-5 h-5 text-blue-600 mr-2" color="#155dfc" />
        <AlertDescription className="block ">{children}</AlertDescription>
      </Alert>
    ),
    warning: ({ children }) => (
      <Alert
        variant="default"
        className="border-l-2 border-dashed border-l-yellow-400 rounded-none my-6  shadow-md  dark:shadow-none "
      >
        <AlertTriangle
          className="size-10  mr-2 text-yellow-400"
          color="oklch(85.2% 0.199 91.936)"
        />
        <AlertDescription className="block ">{children}</AlertDescription>
      </Alert>
    ),
    error: ({ children }) => (
      <Alert
        variant="destructive"
        className="border-l-2 border-dashed border-l-red-600 rounded-none shadow-md my-6  dark:shadow-none "
      >
        <XCircle
          className="w-10 h-10 mr-2  text-foreground"
          color="oklch(57.7% 0.245 27.325)"
        />
        <AlertDescription className="block ">{children}</AlertDescription>
      </Alert>
    ),
    success: ({ children }) => (
      <Alert
        variant="default"
        className="border-l-2 border-dashed border-l-green-600 my-6 rounded-none shadow-md dark:shadow-none"
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
    highlight: ({ children }) => (
      <span className="bg-primary/30  text-primary px-1  rounded-md">
        {children}
      </span>
    ),
  },
};

export default function BlogBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
