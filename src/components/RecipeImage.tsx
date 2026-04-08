"use client";

import { useState } from "react";

interface RecipeImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function RecipeImage({ src, fallbackSrc, alt, className }: RecipeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}
