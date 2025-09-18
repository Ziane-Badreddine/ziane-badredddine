import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const regExp =
    /^.*(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}