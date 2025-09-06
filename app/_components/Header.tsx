"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true); // scroll down → hide
      } else {
        setHidden(false); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }} // cubic-bezier smooth
        className={cn(
          "fixed top-0 z-50 w-full backdrop-blur-lg transition-colors",
          "bg-background/90 shadow-xs border-b border-border/20"
        )}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <Link href={"/"}>
            <motion.div
              className="flex items-center gap-2 font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Logo />
              <span>
                <span className="text-primary">Badr</span>eddine
              </span>
            </motion.div>
          </Link>
          <Nav hidden={hidden} />
        </div>
      </motion.header>
    </AnimatePresence>
  );
}
