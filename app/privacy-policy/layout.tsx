import React, { Suspense } from "react";
import { Metadata } from "next";
import { Header } from "@/components/privacy-policy/Header";
import Footer from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Ziane Badreddine",
  description: "Privacy Policy for Ziane Badreddine.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
