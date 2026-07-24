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
import { setRequestLocale } from "next-intl/server";
import { AIChatModal } from "@/components/chatbot/AIChatModal";
import { personSchema, organizationSchema } from "@/lib/structured-data";
import NextTopLoader from "nextjs-toploader";

const siteUrl = "https://www.zianebadreddine.me";

export const metadata: Metadata = {
  title: "Ziane Badreddine | Full-Stack Developer & Engineering Student",
  description:
    "Full-stack developer and Computer Science engineering student from Settat, Morocco. Specializing in modern web applications with Next.js, React, TypeScript, Tailwind CSS, Node.js, and Prisma. Building scalable, responsive applications with expertise in frontend, backend, and databases.",
  keywords:
    "full-stack developer, software engineer, Next.js, React, TypeScript, Tailwind CSS, Node.js, Prisma, Stripe, PostgreSQL, MongoDB, GraphQL, REST APIs, Ziane Badreddine, Settat, Morocco, web development, computer science",
  applicationName: "Ziane Badreddine | Full-Stack Developer Portfolio",
  authors: [{ name: "Ziane Badreddine", url: siteUrl }],
  creator: "Ziane Badreddine",
  publisher: "Ziane Badreddine",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: "https://www.zianebadreddine.me/en",
      fr: "https://www.zianebadreddine.me/fr",
      "x-default": "https://www.zianebadreddine.me",
    },
  },
  openGraph: {
    title: "Ziane Badreddine | Full-Stack Developer & Engineering Student",
    description:
      "Full-stack developer specializing in Next.js, React, TypeScript, and modern web technologies. Building scalable web applications | Based in Settat, Morocco",
    url: siteUrl,
    siteName: "Ziane Badreddine Portfolio",
    images: [
      {
        url: `${siteUrl}/icons/favicon-black.svg`,
        width: 1200,
        height: 630,
        alt: "Ziane Badreddine – Full-Stack Developer Portfolio",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "profile",
    firstName: "Ziane",
    lastName: "Badreddine",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EddineZian27143",
    creator: "@EddineZian27143",
    title: "Ziane Badreddine | Full-Stack Developer & Engineering Student",
    description:
      "Full-stack developer from Settat, Morocco. Expertise in Next.js, React, TypeScript, Tailwind CSS, Node.js, Prisma, and modern web technologies.",
    images: [`${siteUrl}/icons/favicon-black.svg`],
  },
  category: "technology",
  metadataBase: new URL(siteUrl),
  verification: {
    google: "N96hFj63L0-t_m0y87-eK7sPq1mVyE0IWKvKcYms3-s",
    other: {
      microsoft: "94E242833A0A876AAB7FAEB2554E9AD0",
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          suppressHydrationWarning
        />
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
        <meta name="msvalidate.01" content="94E242833A0A876AAB7FAEB2554E9AD0" />
      </head>
      <body
        suppressHydrationWarning
        className={`${merriweather.className} antialiased `}
      >
        <NextTopLoader
          color="var(--primary)"
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px var(--primary), 0 0 5px var(--primary)"
        />
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
            <NextIntlClientProvider locale={locale}>
              <div className="bg-background text-foreground  flex flex-col items-center justify-center ">
                <Header />
                {children}
                <AIChatModal />
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
