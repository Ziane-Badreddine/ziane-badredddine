import Footer from "@/components/home/footer";
import Header from "@/components/home/Header";

import type { Metadata, Viewport } from "next";
import "../globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import React, { Suspense } from "react";
import { Banner } from "@/components/banner";
import { getBanner } from "@/actions/banner";
import { PortableTextRender } from "@/components/banner/portable-text";
import { merriweather, playfair } from "@/lib/fonts";

import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import {  setRequestLocale } from "next-intl/server";
const siteUrl = "https://ziane-badreddine.vercel.app";

export const metadata: Metadata = {
  title: "Ziane Badreddine | Software Engineer & Full-Stack Developer",
  description:
    "Full-stack software engineer based in Settat, Morocco. Passionate about building modern web applications with Next.js, Tailwind, Node.js, and Java Spring Boot.",
  keywords:
    "full-stack developer, software engineer, Next.js, Tailwind, Node.js, Spring Boot, Ziane Badreddine, Settat, Morocco",
  authors: [{ name: "Ziane Badreddine", url: siteUrl }],
  creator: "Ziane Badreddine",
  publisher: "Ziane Badreddine",
  robots: "index, follow",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Ziane Badreddine | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack software engineer based in Settat, Morocco, specializing in scalable web apps with Next.js, Tailwind, Node.js & Spring Boot.",
    url: siteUrl,
    siteName: "Ziane Badreddine Portfolio",
    images: [
      {
        url: `${siteUrl}/icons/favicon-black.svg`,
        width: 1200,
        height: 630,
        alt: "Ziane Badreddine – Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "profile",
    firstName: "Ziane",
    lastName: "Badreddine",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziane Badreddine | Software Engineer & Full-Stack Developer",
    description:
      "Full-stack developer from Settat, Morocco. Building modern, scalable web apps with cutting-edge technologies.",
    images: [`${siteUrl}/icons/favicon-black.svg`],
    creator: "@EddineZian27143",
  },
  metadataBase: new URL(siteUrl),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const banner = await getBanner();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="darkreader-lock" />
      </head>
      <body
        suppressHydrationWarning
        className={`${merriweather.className} antialiased `}
      >
        <Suspense>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {banner && (
            <Banner
              variant="rainbow"
              className="bg-primary/5 text-foreground container mx-auto"
            >
              <PortableTextRender value={banner.content} />
            </Banner>
          )}
          <NextIntlClientProvider locale={locale} >
            <div className="bg-background text-foreground  flex flex-col items-center justify-center ">
              <Header />
              {children}
              <Suspense>
                <Footer />
              </Suspense>
            </div>
          </NextIntlClientProvider>
          <Analytics />
          <Toaster richColors />
        </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
