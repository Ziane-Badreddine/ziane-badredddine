"use client";

import {
  AnimationOptions,
  AnimationPlaybackControls,
  motion,
  TargetAndTransition,
  useAnimate,
} from "motion/react";
import { useEffect, useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { technologies } from "@/data/data";

const buttonWidthPx = 120;
const gapPx = 16;
const baseDurationPerItem = 5;
const numRows = 2;
const duplicationFactor = 3;

export default function TechIconsScroller() {
  const rows: (typeof technologies)[] = Array.from(
    { length: numRows },
    () => []
  );
  technologies.forEach((tech, i) => {
    rows[i % numRows].push(tech);
  });

  const rowsData = rows.map((row, rowIndex) => {
    const duplicated = Array(duplicationFactor).fill(row).flat();
    const totalWidth = row.length * (buttonWidthPx + gapPx);
    const duration = row.length * baseDurationPerItem;
    const isReverse = rowIndex % 2 === 1;

    return {
      key: `tech-row-${rowIndex}`,
      items: duplicated,
       animate: isReverse
      ? { x: [-totalWidth, 0] } 
      : { x: [0, -totalWidth] }, 
      transition: {
        duration,
        ease: "linear" as const,
        repeat: Infinity,
      },
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full overflow-hidden flex flex-col mt-20 my-8 py-5"
      style={{
        gap: `1rem`,
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {rowsData.map((row) => (
        <AnimatedRow
          key={row.key}
          target={row.animate}
          options={row.transition}
        >
          <div className="flex flex-shrink-0" style={{ gap: `${gapPx}px` }}>
            {row.items.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${i}`}
                  whileHover={{ scale: 1.1, y: -4, zIndex: 20 }}
                  transition={{ duration: 0.2 }}
                  className=" bg-card text-card-foreground flex-shrink-0 md:w-[120px] md:h-[120px] w-[100px] h-[100px] shadow-sm flex items-center justify-center group rounded-full border-border/40 from-card to-card/50 hover:border-primary/20 group focus-within:ring-primary  border bg-gradient-to-b backdrop-blur transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-lg"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Icon className="text-5xl text-primary" />
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs">
                      {tech.name}
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              );
            })}
          </div>
        </AnimatedRow>
      ))}

    </motion.div>
  );
}

interface AnimatedRowProps {
  children: React.ReactNode;
  target: TargetAndTransition;
  options: AnimationOptions;
}

function AnimatedRow({ children, target, options }: AnimatedRowProps) {
  const [scope, animate] = useAnimate();
  const controls = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    controls.current = animate(scope.current, target, options);
  }, [target, options, animate, scope]);

  return (
    <motion.div
      ref={scope}
      className="flex"
      onHoverStart={() => controls.current?.pause()}
      onHoverEnd={() => controls.current?.play()}
    >
      {children}
    </motion.div>
  );
}
