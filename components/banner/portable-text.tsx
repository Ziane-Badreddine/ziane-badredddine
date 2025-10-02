"use client";

import { PortableText, PortableTextBlock } from "@portabletext/react";

export function PortableTextRender({ value }: { value: PortableTextBlock[] }) {
  return (
    <PortableText
      value={value}
      components={{
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          underline: ({ children }) => (
            <span className="underline underline-offset-2">{children}</span>
          ),
          link: ({ value, children }) => (
            <a
              href={value?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-secondary"
            >
              {children}
            </a>
          ),
          primary: ({ children }) => (
            <span className="text-primary">{children}</span>
          ),
          secondary: ({ children }) => (
            <span className="text-secondary">{children}</span>
          ),
          accent: ({ children }) => (
            <span className="text-accent">{children}</span>
          ),
          muted: ({ children }) => (
            <span className="text-muted-foreground">{children}</span>
          ),
          destructive: ({ children }) => (
            <span className="text-destructive">{children}</span>
          ),
        },
        block: {
          normal: ({ children }) => <p className="m-0">{children}</p>,
        },
      }}
    />
  );
}
