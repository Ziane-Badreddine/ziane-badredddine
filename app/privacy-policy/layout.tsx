import React from "react";
import Footer from "../_components/footer";
import { Header } from "./_components/Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy | Ziane Badreddine",
  description: "Privacy Policy for Ziane Badreddine.",
};

export default function LegalLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}