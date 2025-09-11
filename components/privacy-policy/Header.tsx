"use client";
import { motion } from "motion/react";

import Logo from "@/components/home/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { formatCompactNumber } from "@/utils/format";
import Link from "next/link";
import { useGithubProfileStars } from "@/hooks/useGithubProfileStars";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { faustina } from "@/lib/fonts";

export function Header() {
  const { totalStars } = useGithubProfileStars("Ziane-Badreddine");

  return (
    <header className="border-b ">
      <div className="flex items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-1">
          <Link href={"/"}>
            <motion.div
              className="flex items-center gap-2 font-bold text-sm md:text-base "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Logo />
              <span className={`${faustina.className}`}>Ziane_badreddine__</span>
            </motion.div>
          </Link>
        </div>
        <motion.div className=" flex gap-2 items-center">
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
                <FaGithub className="size-5" />
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
      </div>
    </header>
  );
}
