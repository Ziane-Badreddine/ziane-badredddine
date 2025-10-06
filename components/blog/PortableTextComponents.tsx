/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import Image from "next/image";
import Link from "next/link";
import { inter, jetBrainsMono, lora } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import {
  AlertTriangle,
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
  SiReact,
  SiHtml5,
  SiCss3,
  SiCssmodules,
  SiSass,
  SiLess,
  SiPython,
  SiC,
  SiCplusplus,
  SiCoffeescript,
  SiGo,
  SiGraphql,
  SiRust,
  SiRuby,
  SiPhp,
  SiPerl,
  SiScala,
  SiSwift,
  SiDart,
  SiKotlin,
  SiR,
  SiPrisma,
  SiAstro,
  SiVuedotjs,
  SiSvelte,
  SiPug,
  SiHandlebarsdotjs,
  SiMarkdown,
  SiMdx,
  SiYaml,
  SiToml,
  SiGnubash,
  SiDocker,
  SiWebassembly,
  SiSvg,
  SiMysql,
} from "react-icons/si";
import { JSX } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageZoom } from "../ui/kibo-ui/image-zoom";
import { cn, extractYouTubeId } from "@/lib/utils";
import Placeholder from "../Placeholder";
import { toast } from "sonner";
import { YouTubePlayer } from "../ui/YouTubePlayer";
import { FaJava } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { Step, Steps } from "../steps";

export const languageIcons: Record<string, JSX.Element> = {
  javascript: <SiJavascript className="size-4 text-current" />,
  typescript: <SiTypescript className="size-4 text-current" />,
  jsx: <SiReact className="size-4 text-current" />,
  tsx: <SiReact className="size-4 text-current" />,
  html: <SiHtml5 className="size-4 text-current" />,
  css: <SiCss3 className="size-4 text-current" />,
  cssmodules: <SiCssmodules className="size-4 text-current" />,
  sass: <SiSass className="size-4 text-current" />,
  scss: <SiSass className="size-4 text-current" />,
  less: <SiLess className="size-4 text-current" />,
  python: <SiPython className="size-4 text-current" />,
  java: <FaJava className="size-4 text-current" />,
  c: <SiC className="size-4 text-current" />,
  cpp: <SiCplusplus className="size-4 text-current" />,
  coffeescript: <SiCoffeescript className="size-4 text-current" />,
  go: <SiGo className="size-4 text-current" />,
  graphql: <SiGraphql className="size-4 text-current" />,
  rust: <SiRust className="size-4 text-current" />,
  ruby: <SiRuby className="size-4 text-current" />,
  php: <SiPhp className="size-4 text-current" />,
  perl: <SiPerl className="size-4 text-current" />,
  scala: <SiScala className="size-4 text-current" />,
  swift: <SiSwift className="size-4 text-current" />,
  dart: <SiDart className="size-4 text-current" />,
  kotlin: <SiKotlin className="size-4 text-current" />,
  r: <SiR className="size-4 text-current" />,
  sql: <SiMysql className="size-4 text-current" />,
  prisma: <SiPrisma className="size-4 text-current" />,
  astro: <SiAstro className="size-4 text-current" />,
  vue: <SiVuedotjs className="size-4 text-current" />,
  svelte: <SiSvelte className="size-4 text-current" />,
  pug: <SiPug className="size-4 text-current" />,
  hbs: <SiHandlebarsdotjs className="size-4 text-current" />,
  mustache: <SiHandlebarsdotjs className="size-4 text-current" />,
  markdown: <SiMarkdown className="size-4 text-current" />,
  mdx: <SiMdx className="size-4 text-current" />,
  json: <VscJson className="size-5 text-current" />,
  yaml: <SiYaml className="size-4 text-current" />,
  toml: <SiToml className="size-4 text-current" />,
  bash: <Terminal className="size-4 text-current" />,
  sh: <SiGnubash className="size-4 text-current" />,
  docker: <SiDocker className="size-4 text-current" />,
  wasm: <SiWebassembly className="size-4 text-current" />,
  svg: <SiSvg className="size-4 text-current" />,
};

const components: PortableTextComponents = {
  types: {
    steps: ({ value }) => (
      <Steps>
        {value.items?.map((item: any, i: number) => (
          <Step key={i}>
            {item.title && (
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            )}
            {item.content && (
              <PortableText
                value={item.content}
                components={components} // allows nested rich blocks inside each step
              />
            )}
          </Step>
        ))}
      </Steps>
    ),
    youtube: ({ value }) => {
      const videoId = extractYouTubeId(value?.url);
      if (!videoId) return null;

      return (
        <YouTubePlayer
          videoId={videoId}
          title={value.title || "YouTube Video"}
          customThumbnail={value.thumbnail}
        />
      );
    },
    divider: ({ value }) => {
      const style = value?.style || "solid";
      return (
        <hr
          className={`my-10 border-t border-muted-foreground/50 h-[2px]  ${
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
        <div className="my-5 w-full flex flex-col justify-center">
          <ImageZoom
            backdropClassName={cn(
              '[&_[data-rmiz-modal-overlay="visible"]]:from-primary w-full [&_[data-rmiz-modal-overlay="visible"]]:via-background [&_[data-rmiz-modal-overlay="visible"]]:to-muted '
            )}
          >
            {value ? (
              <Image
                src={urlFor(value).width(1200).url()}
                alt={value.alt || "Blog image"}
                width={1200}
                height={700}
                className={cn(
                  "shadow-lg object-cover w-full mx-auto primary",
                  // Zoomed image size
                  "[data-rmiz-modal-img]:!w-[1200px]",
                  "[data-rmiz-modal-img]:!h-[700px]",
                  "[data-rmiz-modal-img]:!max-w-[90vw]",
                  "[data-rmiz-modal-img]:!max-h-[90vh]"
                )}
                unoptimized
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
            <figcaption
              className={cn(
                "mt-3 text-center text-sm text-muted-foreground",
                lora.className
              )}
            >
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
          className="shadow-md dark:shadow-none my-4 "
        >
          {value.language === "bash" || value.filename ? ( // on vérifie seulement s'il y a un language
            <CodeBlockHeader className="bg-muted-foreground/10 dark:bg-background">
              <CodeBlockFiles className="w-[calc(100%-36px)]">
                {(item) => (
                  <CodeBlockFilename
                    className="w-[calc(100%-36px)]"
                    key={item.language}
                    value={item.language}
                  >
                    <div
                      className={`flex items-center gap-2   ${inter.className}`}
                    >
                      {languageIcons[item.language?.toLowerCase()] || null}
                      <span className="truncate min-w-0">
                        {!item.filename && item.language === "bash"
                          ? "terminal"
                          : item.filename || item.language}
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

          <CodeBlockBody className="relative ">
            {(item) => (
              <CodeBlockItem
                className="dark:bg-muted/25 bg-background group"
                key={item.language}
                lineNumbers={!["bash"].includes(value.language)}
                value={item.language}
              >
                {/* Ajout bouton copy si pas de filename */}
                {!value.filename && value.language !== "bash" && (
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
        className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 mt-10 ${lora.className}`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-medium mb-3 ">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-medium mb-2 mt-6">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="leading-7 text-base text-muted-foreground my-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={cn(
          "relative border  border-l-6 my-6  border-l-primary bg-card text-card-foreground p-6 sm:p-8 shadow-xs dark:shadow-none font-semibold leading-tight",
          lora.className
        )}
      >
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
          <p className=" sm:text-xl  italic leading-relaxed">{children}</p>
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
      <ul className="list-disc list-outside mb-5 pl-6 mx-2 space-y-2 [&>li]:marker:text-primary [&>li]:marker:text-xl">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside pl-6 mb-5 space-y-2 [&>li]:marker:text-primary [&>li]:marker:text-xl">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
      const href = value?.href || "#";
      const isInternal = href.startsWith("/") || href.startsWith(BASE_URL);
      return (
        <Link
          target={isInternal ? "_self" : "_blank"}
          href={href.startsWith(BASE_URL) ? href.replace(BASE_URL, "") : href}
          className={cn(
            "inline break-all underline underline-offset-4 decoration-primary text-primary font-semibold",
            !isInternal
              ? "hover:text-primary/80"
              : "text-foreground hover:text-foreground/80"
          )}
        >
          {children}
        </Link>
      );
    },

    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
    code: ({ children }) => (
      <code
        className={`px-1.5 py-0.5  rounded-md bg-sidebar-border   text-primary ${jetBrainsMono.className}`}
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
      <span className="bg-primary   px-1  text-primary-foreground">
        {children}
      </span>
    ),
  },
};

export default function BlogBody({ body }: { body: PortableTextBlock[] }) {
  return <PortableText value={body} components={components} />;
}
