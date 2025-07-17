"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-lg",
        isScrolled
          ? "bg-background/90 shadow-xs border-b  border-border/20"
          : "bg-transparent"
      )}
    >
      <div className=" container mx-auto flex items-center justify-between h-16 px-4 md:px-6 ">
        <Link href={"/"}>
          <div className="flex items-center gap-2 font-bold ">
            <Logo />
            <span>
              <span className="text-primary">Badr</span>eddine
            </span>
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
