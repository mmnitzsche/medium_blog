"use client";

import { useState, useEffect } from "react";
import { extractAllGifs } from "@/utils/ExtractFirstGifTest";
import { extractFirstGif } from "@/utils/ExtractFirstGif";

interface ImageFormaterProps {
  Media: string;
}

export default function ImageFormater({ Media }: ImageFormaterProps) {
  const allGifs = extractAllGifs(Media);
  const firstGif = extractFirstGif(Media);

  if (!allGifs || allGifs.length === 0) {
    return <div className="flex items-center justify-center" />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full aspect-video overflow-hidden rounded-xl border border-gray-100">
      {allGifs.length > 1 ? (
        <GifCarousel gifs={allGifs} />
      ) : (
        <img
          className="w-full h-full object-cover"
          src={firstGif}
          alt="GIF"
        />
      )}
    </div>
  );
}

interface GifCarouselProps {
  gifs: string[];
}

function GifCarousel({ gifs }: GifCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const percentage = (elapsed / 10000) * 100; // 10s para 100%
      setProgress(percentage > 100 ? 100 : percentage);

      if (percentage >= 100) {
        startTime = Date.now();
        setCurrentIndex((prev) => (prev + 1) % gifs.length);
      }

      requestAnimationFrame(updateProgress);
    };

    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [gifs.length]);

  return (
    <div className="relative w-full">
      {/* imagem */}
      <div className="overflow-hidden w-full aspect-video">
        <img
          src={gifs[currentIndex]}
          alt={`GIF ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* indicadores */}
      <div className="flex justify-center mt-2 space-x-2 w-full">
        {gifs.map((_, index) => (
          <div key={index} className="flex">
            {index === currentIndex ? (
              <div className="h-1 w-8 rounded-full bg-gray-300 overflow-hidden">
                <div
                  className="h-full bg-[#acacac] transition-[width] duration-[9.8s] ease-linear"
                  style={{ width: index === currentIndex ? `${progress}%` : "0%" }}
                />
              </div>
            ) : (
              <div className="h-1 w-2 rounded-full bg-gray-300 overflow-hidden">
                <div className="h-full bg-[#d1d5db]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
