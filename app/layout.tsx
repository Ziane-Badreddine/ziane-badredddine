import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const siteUrl = "https://ziane-badreddine.vercel.app";

export const metadata: Metadata = {
  title: "Ziane Badreddine | Software Engineer & Full-Stack Developer",
  description:
    "Full-stack software engineer based in Settat, Morocco. Passionate about building modern web applications with Next.js and Tailwind on the frontend, and scalable APIs using Node.js and Java Spring Boot on the backend.",
  keywords:
    "full-stack developer, software engineer, Next.js, Tailwind, Node.js, Spring Boot, Ziane Badreddine, Settat, Morocco",
  authors: [
    {
      name: "Ziane Badreddine",
      url: siteUrl,
    },
  ],
  creator: "Ziane Badreddine",
  publisher: "Ziane Badreddine",
  openGraph: {
    title: "Ziane Badreddine | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack software engineer based in Settat, Morocco, specializing in building scalable web apps using Next.js, Tailwind, Node.js, and Java Spring Boot.",
    url: siteUrl,
    siteName: "Ziane Badreddine Portfolio",
    images: [
      {
        url: `${siteUrl}/icons/code.svg`,
        width: 1200,
        height: 630,
        alt: "Ziane Badreddine – Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziane Badreddine | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack developer based in Settat, Morocco, building modern, scalable web apps with cutting-edge technologies.",
    images: [`${siteUrl}/icons/code.svg`],
    creator: "@EddineZian27143",
  },
  robots: "index, follow",
  icons: [
    {
      rel: "icon",
      url: "/icons/favicon-black.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/icons/favicon-white.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
