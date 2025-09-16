"use client";

import { ImageIcon } from "lucide-react";

export default function Placeholder({
  alt = "Placeholder",
  width = 1200,
  height = 700,
  className = "",
}: {
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      style={{ width, height }}
      className={`flex items-center justify-center rounded-md bg-muted/40 
        [background-image:radial-gradient(circle,theme(colors.muted.DEFAULT)_1px,transparent_1px)] 
        [background-size:20px_20px] text-muted-foreground ${className}`}
    >
      <ImageIcon className="w-16 h-16" strokeWidth={1.5} />
    </div>
  );
}
