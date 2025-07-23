"use client";
import { Badge } from "@/components/ui/badge";
import { Timeline } from "@/components/ui/timeline";
import { education } from "@/data/data";
import { motion } from "framer-motion";





export default function Education() {
  return (
    <section
      id="education"
      className="from-muted/30 relative isolate w-full overflow-hidden bg-linear-180 from-50% to-transparent py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(from_var(--secondary)_r_g_b_/0.05),transparent_50%)]"></div>
      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" mb-12 flex flex-col items-center justify-center space-y-4 text-center "
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
              variant="secondary"
            >
              <span className="text-primary mr-1">✦</span> Education
            </Badge>
          </div>
          <h2 className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            My Educational Background
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            A summary of my academic achievements and the skills developed
            throughout my studies, laying the groundwork for my professional
            journey.
          </p>
          <Timeline data={education} />
        </motion.div>
      </div>
    </section>
  );
}
