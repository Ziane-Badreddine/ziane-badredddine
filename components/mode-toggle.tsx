"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useHotkey } from "@tanstack/react-hotkeys";
import { TooltipWrapper } from "./tooltip-wrapper";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e?: KeyboardEvent | React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Position de l'onde (clic souris ou centre par défaut)
    const x = "clientX" in (e || {}) ? (e as any).clientX : window.innerWidth / 2;
    const y = "clientY" in (e || {}) ? (e as any).clientY : window.innerHeight / 2;
    root.style.setProperty("--x", `${x}px`);
    root.style.setProperty("--y", `${y}px`);

    if (!document.startViewTransition || prefersReducedMotion) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  // Hotkey 'D' pour basculer le thème
  useHotkey("D", (e) => {
    e.preventDefault(); // empêcher le comportement par défaut
    toggleTheme(e as KeyboardEvent);
  });

  return (
    <TooltipWrapper label="Toggle theme" asChild>
      <Button
        variant={"ghost"}
        size="icon"
        onClick={toggleTheme}
        className="rounded-full cursor-pointer relative overflow-hidden transition-transform hover:scale-105"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </TooltipWrapper>
  );
}