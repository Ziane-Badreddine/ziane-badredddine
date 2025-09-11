"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "motion/react";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { faustina } from "@/lib/fonts";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Ziane-Badreddine",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ziane-badr-eddine-baa394337/?trk=public-profile-join-page",
    icon: FiLinkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/EddineZian27143",
    icon: FaXTwitter,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer className="w-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(from_var(--primary-foreground)_r_g_b_/_0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--primary-foreground)_r_g_b_/_0.075)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute -z-10 -top-24 -left-24 w-64 h-64 bg-foreground/15 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -z-10 -bottom-24 -right-24 w-64 h-64 bg-foreground/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className=" max-w-md space-y-4 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start  font-bold text-lg "
            >
              <>
                <Image
                  src={"/icons/favicon-white.svg"}
                  alt="logo"
                  width={24}
                  height={24}
                  className=" dark:hidden block"
                />
                <Image
                  src={`/icons/favicon-black.svg`}
                  alt="logo"
                  width={24}
                  height={24}
                  className="hidden dark:block"
                />
              </>
              <span className={`${faustina.className} ml-2`}>
                Ziane_badreddine__
              </span>
            </Link>
            <p className="text-sm ">
              This portfolio was built with{" "}
              <span className="font-bold">Next.js</span> and{" "}
              <span className="font-bold">Tailwind CSS</span>, inspired by the{" "}
              <span className="font-bold">TweakCN</span> design system, and
              styled using <span className="font-bold">ShadCN UI</span>.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-5"
          >
            {socialLinks.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  key={i}
                >
                  <Link href={r.href} target="_blank">
                    <Button
                      variant="ghost"
                      size={isMobile ? "icon" : "lg"}
                      className="group bg-background text-foreground transition-colors"
                    >
                      <Icon className="text-xl group-hover:animate-pulse transition-transform duration-300" />
                      {!isMobile && <span>{r.name}</span>}
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="border-border/40 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Ziane_badreddine__. All rights
            reserved.
          </p>
          <p className="text-xs ">
            <Link href="/privacy-policy" className=" hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
