"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
//import { useGithubStars } from "@/hooks/use-github-stars";
import { formatCompactNumber } from "@/utils/format";

import {
  Menu,
  X,
  GraduationCap,
  FileCode,
  BriefcaseBusiness,
  BrainCircuit,
  SendHorizonal,
} from "lucide-react";
import { useGithubProfileStars } from "@/hooks/useGithubProfileStars";
import { FaGithub } from "react-icons/fa";
import { ThemeSwitcher } from "@/components/ui/kibo-ui/theme-switcher";
import { useTheme } from "next-themes";

export const navLinks = [
  {
    name: "Services",
    href: "#services",
    icon: BriefcaseBusiness,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FileCode,
  },
  {
    name: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: BrainCircuit,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: SendHorizonal,
  },
];

export default function Nav() {
  //const { stargazersCount } = useGithubStars("jnsahaj", "tweakcn");
  const { totalStars } = useGithubProfileStars("Ziane-Badreddine");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="hidden md:flex items-center  gap-4 lg:gap-8 capitalize">
        {navLinks.map((link, i) => {
          return (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={handleScrollToSection}
              className="text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          );
        })}
      </div>
      <motion.div className=" hidden md:flex gap-4 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <Button variant="ghost" asChild>
            <Link
              href="https://github.com/Ziane-Badreddine"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              <FaGithub className="size-5 animate-pulse" />
              {totalStars > 0 && formatCompactNumber(totalStars)}
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <ThemeSwitcher
            defaultValue={"dark"}
            onChange={setTheme}
            value={theme ?? "dark"}
          />
        </motion.div>
      </motion.div>
      <div className="flex items-center gap-4 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container mx-auto py-4 flex flex-col gap-4 px-4 capitalize">
            {navLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => {
                    handleScrollToSection(e);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-sm font-medium flex items-center gap-2 relative overflow-hidden group border-b box-border/30 pb-5"
                >
                  <Icon className="size-4 text-muted-foreground" />
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="pt-2 mt-2 "
            >
              <div className="flex items-center justify-between">
                <Link
                  href="https://github.com/Ziane-Badreddine"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-full flex items-center justify-center gap-2 text-md rounded-full p-0 ">
                    <FaGithub className="size-6 animate-pulse" />
                    Star on GitHub
                    {totalStars > 0 && (
                      <span className=" text-muted-foreground ml-[0.5px]">
                        ( {formatCompactNumber(totalStars)} )
                      </span>
                    )}
                  </div>
                </Link>
                <ThemeSwitcher
                  defaultValue={"dark"}
                  onChange={setTheme}
                  value={theme ?? "dark"}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
