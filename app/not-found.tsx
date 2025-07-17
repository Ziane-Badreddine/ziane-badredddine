"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <section className="min-h-screen  overflow-hidden flex  items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" container mx-auto w-full flex flex-col items-center justify-center text-center space-y-6"
      >
        <Ghost className="w-16 h-16 text-primary animate-pulse" />
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
