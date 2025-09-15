"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import type React from "react";
import {  useState } from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";
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
  MoveUpRight,
} from "lucide-react";
import { useGithubProfileStars } from "@/hooks/useGithubProfileStars";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

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
  const { totalStars } = useGithubProfileStars("Ziane-Badreddine");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const MotionLink = motion.create(Link);


  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
            <MotionLink
              key={i}
              initial={!hasAnimated ? { opacity: 0, y: -10 } : false}
              animate={!hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={
                !hasAnimated ? { duration: 0.3, delay: 0.1 + i * 0.05 } : {}
              }
              href={`/#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={handleScrollToSection}
              className={cn(
                "text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
              )}
            >
              {link.name}

              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                )}
              ></span>
            </MotionLink>
          );
        })}
        <MotionLink
          href="/blog"
          initial={!hasAnimated ? { opacity: 0, y: -10 } : false}
          animate={!hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={
            !hasAnimated
              ? { duration: 0.3, delay: 0.1 + navLinks.length * 0.05 }
              : {}
          }
          onAnimationComplete={() => {
              setHasAnimated(true);
          }}
          className={cn(
            "text-xs lg:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
          )}
        >
          blog
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
            )}
          />
        </MotionLink>
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
          <ModeToggle />
        </motion.div>
      </motion.div>
      <div className="flex items-center gap-4 md:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <ModeToggle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
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
        </motion.div>
      </div>
      {mobileMenuOpen  && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/90 backdrop-blur-md border-b border-foreground"
        >
          <div className="container mx-auto py-4 flex flex-col gap-4 px-4 capitalize">
            {navLinks.map((item, i) => {
              return (
                <MotionLink
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  href={`/#${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => {
                    handleScrollToSection(e);
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 text-sm font-medium flex items-center gap-2 relative overflow-hidden group "
                >
                  <span className={cn("relative z-10", "hover:text-primary")}>
                    #{item.name}
                  </span>
                </MotionLink>
              );
            })}
            <MotionLink
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
              href={`/blog`}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="py-2 text-sm font-medium flex items-center gap-2 relative overflow-hidden group "
            >
              <span className={cn("relative z-10")}>/blog</span>
            </MotionLink>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="pt-5 border-t "
            >
              <Link
                href="https://github.com/Ziane-Badreddine"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full justify-center gap-2 rounded-full ">
                  <FaGithub className="size-4 animate-pulse" />
                  Star on GitHub
                  {totalStars > 0 && (
                    <span className="text-sm text-foreground ml-1">
                      ({formatCompactNumber(totalStars)})
                    </span>
                  )}
                  <MoveUpRight className=" animate-pulse " />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
