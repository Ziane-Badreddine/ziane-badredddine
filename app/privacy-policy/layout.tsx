import React from "react";
import Footer from "../_components/footer";
import { Header } from "./_components/Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy | tweakcn",
  description: "Privacy Policy for tweakcn.",
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