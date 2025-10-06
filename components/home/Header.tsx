"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { motion } from "motion/react";
import { faustina } from "@/lib/fonts";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        " sticky top-0 z-50 w-full backdrop-blur-md transition-colors",
        isScrolled && "bg-background/90 shadow-xs border-b border-border"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href={"/"}>
          <motion.div
            className="flex items-center gap-2 font-bold text-sm md:text-base "
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Logo />
            <span className={`${faustina.className}`}>ZIANE_BADREDDINE__</span>
          </motion.div>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
