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
        return (
            <div className="flex items-center justify-center">
                
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {allGifs.length > 1 ? (
                <GifCarousel gifs={allGifs} />
            ) : (
                <img className="rounded-lg w-[450px]" src={firstGif} alt="GIF" />
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
                startTime = Date.now(); // Reseta o tempo
                setCurrentIndex((prev) => (prev + 1) % gifs.length);
            }

            requestAnimationFrame(updateProgress); // Suaviza a animação
        };

        const animationFrame = requestAnimationFrame(updateProgress);
        return () => cancelAnimationFrame(animationFrame);
    }, [gifs.length]);

    return (
        <div className="relative w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-lg border border-gray-300">
                <img src={gifs[currentIndex]} alt={`GIF ${currentIndex + 1}`} className="w-full h-auto" />
            </div>


            <div className="flex justify-center mt-2 space-x-2">        
                {gifs.map((_, index) => (
                    <>
                        
                        {index === currentIndex ?
                            (<div
                                key={index}
                                className="h-1 w-8 rounded-full bg-gray-300 overflow-hidden">
                                <div
                                    className="h-full bg-[#acacac] transition-[width] duration-[9.8s] ease-linear"
                                    style={{
                                        width: index === currentIndex ? `${progress}%` : "0%",
                                    }}
                                />
                            </div>) :
                            (<div
                                key={index}
                                className="h-1 w-2 rounded-full bg-gray-300 overflow-hidden">
                                <div
                                    className="h-full bg-[#d1d5db] transition-[width] duration-[9.8s] ease-linear"
                                    
                                />
                            </div>)
                        }
                    </>
                ))}
            </div>
        </div>
    );
}
