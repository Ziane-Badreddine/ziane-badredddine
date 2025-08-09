"use client";

import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const themes = [
  {
    key: "system",
    icon: Monitor,
    label: "System theme",
  },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export type ThemeSwitcherProps = {
  value?: "light" | "dark" | "system"| string;
  onChange?: (theme: string) => void;
  defaultValue?: "light" | "dark" | "system" | string;
  className?: string;
};

export const ThemeSwitcher = ({
  value,
  onChange,
  defaultValue = "system",
  className,
}: ThemeSwitcherProps) => {
  const [theme, setTheme] = useControllableState({
    defaultProp: defaultValue,
    prop: value,
    onChange,
  });
  const [mounted, setMounted] = useState(false);

  // Eviter mismatch SSR/CSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Clique avec animation transition + position onde
  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system", e: React.MouseEvent<HTMLButtonElement>) => {
      if (!mounted) return;

      const root = document.documentElement;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Position du clic ou centre
      const x = e.clientX || window.innerWidth / 2;
      const y = e.clientY || window.innerHeight / 2;
      root.style.setProperty("--x", `${x}px`);
      root.style.setProperty("--y", `${y}px`);

      if (!document.startViewTransition || prefersReducedMotion) {
        setTheme(themeKey);
        return;
      }

      document.startViewTransition(() => {
        setTheme(themeKey);
      });
    },
    [setTheme, mounted]
  );

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "relative isolate flex h-8 rounded-full bg-background p-1 ring-1 ring-border",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <button
            key={key}
            type="button"
            aria-label={label}
            className="relative h-6 w-6 rounded-full"
            onClick={(e) => handleThemeClick(key as "light" | "dark" | "system", e)}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full bg-secondary"
                layoutId="activeTheme"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto h-4 w-4",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
