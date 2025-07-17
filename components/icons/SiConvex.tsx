// components/icons/SiConvex.tsx
import React from "react";

export const SiConvex = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M49.467 48.223c-5.194 5.248-12.55 8.316-20.106 8.316-15.649 0-28.356-12.707-28.356-28.356 0-15.648 12.707-28.355 28.356-28.355 7.556 0 14.912 3.068 20.106 8.316L41.818 16.45a17.502 17.502 0 0 0-12.457-5.186c-9.672 0-17.541 7.869-17.541 17.541s7.869 17.54 17.541 17.54c4.805 0 9.375-1.887 12.757-5.314z" />
    </svg>
  );
};

SiConvex.displayName = "Convex";
