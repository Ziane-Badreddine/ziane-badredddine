"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ServicesGrid } from "./Grid";

export default function Services() {
  return (
    <section
      id="services"
       className="from-muted/30 relative isolate w-full overflow-hidden bg-linear-180 from-50% to-transparent py-20 md:py-32"
    >
       <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(from_var(--secondary)_r_g_b_/0.05),transparent_50%)]"></div>

      <div className=" container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
              variant="secondary"
            >
              <span className="text-primary mr-1">✦</span> Services
            </Badge>
          </div>
          <h2 className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Custom Web Solutions That Fit Your Needs
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            I offer tailored digital services—from full-stack web development to
            graphic design and database engineering— designed to help you
            launch, scale, or improve your online presence.
          </p>
        </motion.div>
        <ServicesGrid />
      </div>
    </section>
  );
}
