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
      className={`flex items-center w-full h-full  ${className}`}
    >
      <ImageIcon className="w-16 h-16" strokeWidth={1.5} />
    </div>
  );
}
