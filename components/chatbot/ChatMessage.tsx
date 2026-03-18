import {
  BundledLanguage,
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockData,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from "@/components/ui/kibo-ui/code-block";
import { inter, jetBrainsMono } from "@/lib/fonts";
import { toast } from "sonner";
import { Components } from "react-markdown";
import { cn } from "@/lib/utils";
import { languageIcons } from "../blog/PortableTextComponents";
import Link from "next/link";

export const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="leading-7 text-sm text-foreground my-2 first:mt-0 last:mb-0">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-muted-foreground">{children}</em>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className={cn(
            "px-1.5 py-0.5 rounded-md bg-sidebar-border text-primary text-sm",
            jetBrainsMono.className,
          )}
          {...props}
        >
          {children}
        </code>
      );
    }

    const language = className?.replace("language-", "") ?? "javascript";
    const codeString = String(children).trimEnd();

    const data = [
      {
        language,
        filename: "",
        code: codeString,
      },
    ]

    return (
      <CodeBlock
        data={data}
        defaultValue={language}
        className="shadow-md dark:shadow-none my-4 last:mb-0"
      >
        {language === "bash" ? (
          <CodeBlockHeader className="bg-muted-foreground/10 dark:bg-background">
            <CodeBlockFiles className="w-[calc(100%-36px)]">
              {(item) => (
                <CodeBlockFilename
                  className="w-[calc(100%-36px)]"
                  key={item.language}
                  value={item.language}
                >
                  <div className={`flex items-center gap-2 ${inter.className}`}>
                    {languageIcons[item.language?.toLowerCase()] || null}
                    <span className="truncate min-w-0">terminal</span>
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
              lineNumbers={language !== "bash"}
              value={item.language}
            >
              {language !== "bash" && (
                <CodeBlockCopyButton
                  className="absolute top-2 right-2 z-10 hover:bg-primary/50 cursor-pointer hidden group-hover:flex"
                  variant="outline"
                  onCopy={() => toast.success("Copied code to clipboard!")}
                  onError={() => toast.error("Failed to copy code to clipboard")}
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
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 my-3 space-y-1 [&>li]:text-sm [&>li]:leading-7 [&>li]:marker:text-primary">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 my-3 space-y-1 [&>li]:text-sm [&>li]:leading-7 [&>li]:marker:text-primary">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 my-3 italic text-muted-foreground text-sm">
      {children}
    </blockquote>
  ),
  h1: ({ children }) => (
    <h1 className="text-xl font-bold mt-4 mb-2">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-lg font-semibold mt-4 mb-2">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold mt-3 mb-1">{children}</h3>
  ),
  a: ({ children, href }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const resolvedHref = href || "#";
    const isInternal =
      resolvedHref.startsWith("/") || resolvedHref.startsWith(BASE_URL);
    return (
      <Link
        href={
          isInternal
            ? resolvedHref.startsWith(BASE_URL)
              ? resolvedHref.replace(BASE_URL, "")
              : resolvedHref
            : resolvedHref
        }
        target={isInternal ? "_self" : "_blank"}
        rel={isInternal ? undefined : "noopener noreferrer"}
        className={cn(
          "inline break-all underline underline-offset-4 decoration-primary text-primary font-semibold",
          !isInternal
            ? "hover:text-primary/80"
            : "text-foreground hover:text-foreground/80",
        )}
      >
        {children}
      </Link>
    );
  },
};
