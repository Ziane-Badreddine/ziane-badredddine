"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Send } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/data/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className=" w-full py-20 md:py-32 bg-muted/30 overflow-hidden relative isolate"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className=" container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
              variant="secondary"
            >
              <span className="text-primary mr-1">✦</span> Projects
            </Badge>
          </div>
          <h2 className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Projects That Showcase My Stack
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
            These projects demonstrate my experience with technologies like
            Next.js, Java, SQL/NoSQL, and UI libraries. Each one tackles real
            use cases—chat apps, dashboards, API integrations, and more.
          </p>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={cn(
                "bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm overflow-hidden group transition"
              )}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full "
              >
                <div className="w-full h-[200px] lg:h-[250px] relative bg-background overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    quality={100}
                    priority
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge
                      variant={
                        project.status === "completed"
                          ? "default"
                          : project.status === "coming soon"
                          ? "secondary"
                          : "outline"
                      }
                      className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm capitalize"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground max-w-lg mb-4 flex-grow">{project.des}</p>

                  <div className="flex w-full items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2 ">
                      {project.iconLists.map((Icon, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                              <Icon size={20} />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{Icon.name?.split("Si")[1] ?? "Tech"}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-2 capitalize group ">
                      <span className=" hidden lg:flex group-hover:text-primary">
                        check live site
                      </span>
                      <Send className=" group-hover:rotate-45 duration-300 transition-all group-hover:text-primary" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}