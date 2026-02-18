"use client";

import {
  AnimationOptions,
  AnimationPlaybackControls,
  motion,
  TargetAndTransition,
  useAnimate,
} from "motion/react";
import { useEffect, useRef } from "react";
import { technologies } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";

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
      animate: isReverse ? { x: [-totalWidth, 0] } : { x: [0, -totalWidth] },
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
      className="w-full overflow-hidden flex flex-col mt-20 my-8 py-5 "
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
          <div className="flex  gap-4">
            {row.items.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <Card
                  key={`${tech.name}-${i}`}
                  className="relative group flex h-[180px] w-[200px] sm:h-[200px] sm:w-[240px] overflow-hidden     hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-none hover:bg-foreground border-none group"
                >
                  <div
                    className="absolute z-10 inset-0 
             bg-[radial-gradient(theme(colors.foreground)_1px,transparent_1px)] 
             group-hover:bg-[radial-gradient(theme(colors.primary-foreground)_1px,transparent_1px)] 
             [background-size:6px_6px] opacity-40 pointer-events-none transition-colors duration-300"
                  />

                  <CardContent className="flex h-full flex-col items-center justify-center gap-4  p-6">
                    <Icon className="text-7xl text-primary" />
                  </CardContent>
                  <h3 className="text-foreground uppercase backdrop-blur-xl  font-light text-center absolute bg-primary-foreground bottom-0 left-0 py-1 pr-2 z-20">
                    {tech.name}
                  </h3>
                </Card>
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
