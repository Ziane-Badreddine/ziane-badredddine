"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { NoiseEffect } from "./NoiseEffect";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, ScreenShare } from "lucide-react";
import { FrameHighlight } from "./FrameHighlight";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/data";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { SplitTextReveal } from "../hero/SplitTextReveal";
import Autoplay from "embla-carousel-autoplay";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  const handlePrevious = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === " ") {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [handleNext, handlePrevious]);

  return (
    <section
      id="projects"
      className="w-full py-20 md:py-32 bg-muted/30 overflow-hidden relative isolate"
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-center justify-center space-y-4 text-center"
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

        <div className="relative isolate">
          <div className="relative z-10 container mx-auto w-full px-4 md:px-6">
            <div className="relative grid items-center gap-4 md:gap-6 lg:gap-12  xl:grid-cols-3">
              <div className="mx-auto max-w-2xl lg:mx-0 xl:order-none order-2 col-span-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex flex-col items-start md:justify-center xl:justify-end"
                  >
                    <div className="justify-left relative flex flex-col items-start gap-2">
                      <FrameHighlight className="text-6xl md:text-8xl leading-none font-mono">
                        {projects[current - 1].id}
                      </FrameHighlight>
                      <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3 } }}
                        className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-transparent"
                      >
                        {projects[current - 1].title}
                      </motion.h2>
                      <SplitTextReveal
                        className="text-muted-foreground text-base leading-relaxed text-pretty md:text-lg"
                        text={projects[current - 1].des}
                        delay={0.02}
                      />
                    </div>

                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      <TooltipProvider>
                        {projects[current - 1].iconLists.map((Icon, index) => (
                          <Tooltip key={index}>
                            <TooltipTrigger asChild>
                              <motion.div
                                variants={item}
                                className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300"
                              >
                                <Icon size={20} />
                              </motion.div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{Icon.name?.split("Si")[1] ?? "Tech"}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </motion.div>

                    <Separator />

                    <motion.div
                      variants={container}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      {projects[current - 1].status === "completed" ? (
                        <>
                          <Link
                            href={projects[current - 1].link}
                            className="group"
                            target="_blank"
                          >
                            <Button
                              size="lg"
                              className="border-primary/20 hover:border-primary/50 h-12 w-full sm:w-auto rounded-full px-8 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="hidden md:inline">
                                View Project
                              </span>
                            </Button>
                          </Link>
                          <Link
                            href={projects[current - 1].link}
                            className="group"
                            target="_blank"
                          >
                            <Button
                              size="lg"
                              variant="outline"
                              className="border-primary/20 hover:border-primary/50 h-12 w-full sm:w-auto rounded-full px-8 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg bg-transparent"
                            >
                              <SiGithub className="h-4 w-4" />
                              <span className="hidden md:inline">
                                Source Code
                              </span>
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <Button
                          size="lg"
                          variant="default"
                          className="border-primary/20 hover:border-primary/50 h-12 w-full sm:w-auto rounded-full px-8 text-base transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg "
                        >
                          <ScreenShare className="h-4 w-4" />
                          {projects[current - 1].status}
                        </Button>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex xl:col-span-2 max-h-[500px] flex-col items-center justify-center space-y-4 lg:flex lg:order-none order-1"
              >
                <div className="relative w-full overflow-hidden border-2 border-border mask-b-from-85% backdrop-blur-xs transition-all delay-150 duration-300">
                  <NoiseEffect />

                  <Carousel
                    opts={{ align: "start", loop: true }}
                    plugins={[
                      Autoplay({
                        delay: 10000,
                      }),
                    ]}
                    setApi={setApi}
                    className="w-full"
                  >
                    <CarouselContent>
                      {projects.map((project, index) => (
                        <CarouselItem key={index}>
                          <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[320px] md:h-[360px] lg:h-[450px] xl:h-[480px] overflow-hidden ">
                            <Image
                              src={project.img}
                              alt={project.title ?? ""}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              priority
                              quality={90}
                              sizes="(min-width: 1280px) 1017px, (min-width: 1040px) 936px, (min-width: 780px) 760px, (min-width: 680px) 676px, calc(110.56vw - 55px)"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <div className="absolute inset-0 z-10 flex items-center justify-between sm:hidden w-full px-4">
                      <Button
                        onClick={() => api?.scrollPrev()}
                        size="icon"
                        className="rounded-full bg-background/80 hover:bg-background text-primary shadow backdrop-blur pointer-events-auto"
                        aria-label="Previous"
                      >
                        <ArrowRight className="rotate-180" />
                      </Button>
                      <Button
                        onClick={() => api?.scrollNext()}
                        size="icon"
                        className="rounded-full bg-background/80 hover:bg-background text-primary shadow backdrop-blur pointer-events-auto"
                        aria-label="Next"
                      >
                        <ArrowRight />
                      </Button>
                    </div>
                  </Carousel>
                </div>

                <div className="items-center justify-between w-full hidden sm:flex">
                  <div className="z-10 w-full items-center gap-2 flex">
                    <Button
                      onClick={() => api?.scrollPrev()}
                      size="icon"
                      className="rounded-full bg-background/70 hover:bg-background text-primary shadow-md backdrop-blur"
                      aria-label="Previous"
                      disabled={!api?.canScrollPrev()}
                    >
                      <ArrowRight className="rotate-180" />
                    </Button>
                    <Button
                      onClick={() => api?.scrollNext()}
                      size="icon"
                      className="rounded-full bg-background/70 hover:bg-background text-primary shadow-md backdrop-blur"
                      aria-label="Next"
                      disabled={!api?.canScrollNext()}
                    >
                      <ArrowRight />
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                          "h-2 w-2 rounded-full transition-all duration-200",
                          current - 1 === index
                            ? "bg-primary w-8"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className={cn(
              "-skew-12 mask-b-from-60% mask-l-from-40% mask-l-to-75%",
              "absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(from_var(--primary)_r_g_b_/_0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--primary)_r_g_b_/_0.25)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"
            )}
          />

          <div
            className={cn(
              "-skew-12 animate-pulse [mask-composite:intersect]",
              "absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(from_var(--primary)_r_g_b_/_0.20)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--primary)_r_g_b_/_0.20)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]",
              "[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_25%,#000_25%,#000_50%,transparent_50%),linear-gradient(to_right,transparent_0%,transparent_50%,#000_50%,#000_100%)]"
            )}
          />

          <div
            className={cn(
              "-skew-12",
              "absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(from_var(--muted)_r_g_b_/_0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--muted)_r_g_b_/_0.25)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]",
              "[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_50%,#000_50%,#000_75%,transparent_75%),linear-gradient(to_right,#000_0%,#000_50%,transparent_50%)]",
              "[mask-composite:intersect]"
            )}
          />
        </div>
      </div>
    </section>
  );
}
