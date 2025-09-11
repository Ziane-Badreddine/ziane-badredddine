import React from "react";
import Footer from "@/components/home/footer";
import Header from "@/components/home/Header";



export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground  flex flex-col items-center justify-center scroll-smooth antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
