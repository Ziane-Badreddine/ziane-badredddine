"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/data";
import { Check, Mail } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-6 grid-cols-1 md:grid-cols-2  xl:grid-cols-4"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={item}
          className={cn(
            service.id === 0
              ? " md:col-span-2 grid grid-cols-1 md:grid-cols-2 bg-card text-card-foreground border rounded-xl shadow-sm overflow-hidden group relative "
              : "bg-card text-card-foreground flex flex-col   col-span-1   relative  rounded-xl border shadow-sm overflow-hidden group md:min-h-[400px]  ",
            " hover:border-primary transition-all duration-300"
          )}
        >
          <div className="p-6 flex flex-col  justify-between gap-3  ">
            <div className="flex flex-col gap-2 text-center md:text-start items-center md:items-start">
              <div className="flex items-center justify-start gap-2 ">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
            {service.id === 0 && (
              <div className="hidden md:flex flex-col text-sm gap-1 text-foreground">
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Responsive Design
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4 " />
                  Custom Development
                </p>
                <p className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  SEO Optimization
                </p>
              </div>
            )}
          </div>
          {service.image?.startsWith("/images/") && (
            <div className="hidden md:block w-full h-[298px] lg:h-[400px]  relative bg-muted-foreground/10">
              <Image
                src={service.image}
                priority
                alt=""
                quality={100}
                fill
                sizes="(min-width: 1040px) 556px, (min-width: 540px) 463px, 89.55vw"
                className=" object-contain "
              />
            </div>
          )}
          {service.id === 1 && (
            <div className={cn("absolute inset-0 z-20", "")}>
              <Image
                src="/services/edge-functions-dark.svg"
                alt="Supabase Edge Functions globe"
                fill
                sizes="100%"
                quality={100}
                priority
                className="hidden dark:block absolute inset-0 object-cover object-center"
              />
              <Image
                src="/services/edge-functions-light.svg"
                alt="Supabase Edge Functions globe"
                fill
                sizes="100%"
                quality={100}
                priority
                className="dark:hidden absolute inset-0 object-cover object-center"
              />
            </div>
          )}
          {service.id === 2 && (
            <div
              className={cn(
                "absolute inset-0",
                "z-0 flex items-end",
                "top-auto",
                "aspect-[390/430]",
                "w-full md:w-[calc(100%+4rem)] 2xl:w-full",
                "md:-mx-8 2xl:mx-0",
                "-bottom-0 sm:-bottom-28 md:bottom-0 lg:-bottom-28 xl:bottom-0 hidden md:block"
              )}
            >
              <span className="absolute w-full h-full lg:!aspect-[390/430] flex items-end justify-center inset-0 top-16 md:top-20 lg:top-0 bottom-auto mx-auto">
                <Image
                  src={`/services/vector-dark.svg`}
                  alt="Supabase Vector graph"
                  fill
                  sizes="100%"
                  quality={100}
                  className="hidden dark:block absolute inset-0 z-0 object-contain object-center"
                />
                <Image
                  src={`/services/vector-light.svg`}
                  alt="Supabase Vector graph"
                  fill
                  sizes="100%"
                  quality={100}
                  className="dark:hidden absolute inset-0 z-0 object-contain object-center"
                />
                <svg
                  viewBox="0 0 390 430"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-full h-full z-20 m-auto opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {/* Animated ouline */}
                  <path
                    d="m195.918 125.344 80.861 46.685v93.37l-80.861 46.685-80.861-46.685v-93.37l80.861-46.685Z"
                    stroke="url(#paint0_radial_484_53266)"
                    strokeWidth={2}
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_484_53266"
                      cx="0"
                      cy="0"
                      r={"2"}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="hsl(var(--brand-default))" />
                      <stop
                        offset="1"
                        stopColor="hsl(var(--brand-default))"
                        stopOpacity="0"
                      />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </div>
          )}

          {service.id === 3 && (
            <figure
              className={cn("hidden md:block absolute inset-0 overflow-hidden")}
            >
              <div className="absolute z-0 inset-0 flex flex-nowrap">
                {Array(2)
                  .fill(null)
                  .map((_, idx1: number) => (
                    <div
                      key={`row-${idx1}`}
                      className="relative h-full !aspect-[330/430] -right-10 -left-10 items-end pb-2 z-10 flex pause animate-[marquee-reverse_30000ms_linear_both_infinite] motion-safe:group-hover:run will-change-transform"
                    >
                      <Image
                        draggable={false}
                        src="/services/data-apis-lines-dark.svg"
                        alt="Supabase restful DataAPIs"
                        width={330}
                        height={430}
                        quality={100}
                        className="hidden dark:block !h-full object-contain !aspect-[330/430]"
                      />
                      <Image
                        draggable={false}
                        src="/services/data-apis-lines-light.svg"
                        alt="Supabase restful DataAPIs"
                        width={330}
                        height={430}
                        quality={100}
                        className="dark:block !h-full !aspect-[330/430] not-sr-only"
                      />
                    </div>
                  ))}
                <Image
                  draggable={false}
                  src="/services/data-apis-dark.svg"
                  alt="Supabase restful DataAPIs"
                  fill
                  sizes="100%"
                  quality={100}
                  className="hidden dark:block absolute !h-full aspect-[330/430] inset-0 z-10 object-contain -mt-1.5 object-center bottom-0"
                />
                <Image
                  draggable={false}
                  src="/services/data-apis-light.svg"
                  alt="Supabase restful DataAPIs"
                  fill
                  sizes="100%"
                  quality={100}
                  className="dark:hidden absolute h-full aspect-[330/430] inset-0 z-10 object-contain -mt-1.5 object-center bottom-0"
                />
              </div>
            </figure>
          )}

          {service.id === 4 && (
            <>
              <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--muted-foreground)_r_g_b_/_0.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
              <Image
                src="/images/java.svg"
                alt="Java SVG"
                width={300}
                height={300}
                className="h-auto hidden md:block mx-auto my-auto  max-w-md drop-shadow-lg relative z-10"
                draggable={false}
              />
            </>
          )}

          {service.id === 5 && (
            <>
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_2px,transparent_0)] bg-[size:2rem_2rem] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_2px,transparent_0)]"></div>
              <Image
                src="/images/problem-solving.svg"
                alt="Java SVG"
                width={300}
                height={300}
                className="h-auto hidden md:block mx-auto my-auto  max-w-md drop-shadow-lg relative z-10"
                draggable={false}
              />
            </>
          )}
        </motion.div>
      ))}
      <motion.a variants={item} href="/#contact">
        <BackgroundGradientAnimation>
          <div className="absolute border  z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <h3 className="text-xl md:text-3xl  font-bold  mb-4  bg-gradient-to-b  from-foreground via-foreground/90 to-muted-foreground/90 bg-clip-text text-transparent ">
              Do you want to start a project together?
            </h3>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>
        </BackgroundGradientAnimation>
      </motion.a>
    </motion.div>
  );
}
