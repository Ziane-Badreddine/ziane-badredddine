"use client";
import { motion } from "motion/react";

import Logo from "@/app/_components/Logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { formatCompactNumber } from "@/utils/format";
import Link from "next/link";
import { useGithubProfileStars } from "@/hooks/useGithubProfileStars";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export function Header() {
  const { totalStars } = useGithubProfileStars("Ziane-Badreddine");

  return (
    <header className="border-b ">
      <div className="flex items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-1">
          <Link href={"/"}>
            <div className="flex items-center gap-2 font-bold ">
              <Logo />
              <span>
                <span className="text-primary">Badr</span>eddine
              </span>
            </div>
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
