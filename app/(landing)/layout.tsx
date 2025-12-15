import React, { Suspense } from "react";
import Footer from "@/components/home/footer";
import Header from "@/components/home/Header";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground  flex flex-col items-center justify-center ">
      <Header />
      {children}
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
