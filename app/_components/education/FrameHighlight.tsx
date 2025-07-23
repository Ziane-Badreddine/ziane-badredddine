"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ComponentProps } from "react";

export function FrameHighlight({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative h-fit w-full  p-5"
      >
        <div className={cn("w-full", className)} {...props}>
          {children}
        </div>
        <div className="border-primary/60! bg-primary/15 group-hover:bg-primary/20 z dark:border-primary/40! absolute inset-0 h-full border border-dashed px-1.5">
          <Corner className="fill-primary dark:fill-primary/70 absolute top-[-2px] left-[-2px]" />
          <Corner className="fill-primary dark:fill-primary/70 absolute top-[-2px] right-[-2px]" />
          <Corner className="fill-primary dark:fill-primary/70 absolute bottom-[-2px] left-[-2px]" />
          <Corner className="fill-primary dark:fill-primary/70 absolute right-[-2px] bottom-[-2px]" />
        </div>
      </motion.div>{" "}
    </>
  );
}

function Corner({ className }: ComponentProps<"svg">) {
  return (
    <svg
      width="5"
      height="5"
      viewBox="0 0 5 5"
      className={cn("absolute", className)}
    >
      <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </svg>
  );
}
