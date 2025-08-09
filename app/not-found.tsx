"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="mt-20 overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto w-full flex flex-col items-center justify-center text-center space-y-6"
      >

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
        >
          <Image
            src="/not-found.svg" 
            alt="404 Not Found"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <div>
          <h1 className="text-4xl font-bold tracking-tight">Page Not Found</h1>
          <p className="text-muted-foreground mt-2">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        <Link href="/">
          <Button variant="secondary" className="text-base px-6 py-2">
            Go back home
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
