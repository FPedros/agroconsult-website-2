import { useEffect, useRef, useState } from "react";

interface LazyIframeProps {
  title: string;
  src: string;
  className?: string;
  fallbackText?: string;
}

export default function LazyIframe({
  title,
  src,
  className = "absolute inset-0 h-full w-full border-0",
  fallbackText = "Carregando..."
}: LazyIframeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Começa a carregar 50px antes de ficar visível
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-slate-100">
      {isLoaded ? (
        <iframe
          title={title}
          src={src}
          className={className}
          loading="lazy"
          scrolling="no"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          {fallbackText}
        </div>
      )}
    </div>
  );
}
