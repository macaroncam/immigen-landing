import { useEffect, useState, useRef } from "react";

export default function ScrollTextAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress based on section visibility
      const scrollStart = windowHeight;
      const scrollEnd = -sectionHeight;
      const scrollRange = scrollStart - scrollEnd;
      const currentProgress = (scrollStart - sectionTop) / scrollRange;

      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, currentProgress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text morphing logic - only "Immigen" changes
  const getMorphingState = () => {
    if (scrollProgress < 0.1) {
      return { phase: "start" };
    } else if (scrollProgress > 0.4) {
      return { phase: "end" };
    } else {
      return { phase: "morphing", progress: (scrollProgress - 0.1) / 0.3 };
    }
  };

  const morphState = getMorphingState();

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/starry-background.gif"
          alt="Starry space background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tech Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/8 via-emerald-900/4 to-lime-900/6"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/3 to-lime-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-400/3 via-transparent to-green-600/4"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-left">
        <div className="font-sans font-bold leading-relaxed tracking-tighter overflow-visible">
          {morphState.phase === "start" && (
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white pb-4">
              Trust in Immigen
            </h2>
          )}

          {morphState.phase === "morphing" && (
            <div className="relative">
              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white pb-4 absolute inset-0 transition-opacity duration-200"
                style={{
                  opacity: 1 - morphState.progress,
                  transform: `translateY(${morphState.progress * 20}px)`,
                }}
              >
                Trust in Immigen
              </h2>
              <h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl animate-gradient-shift pb-4 transition-opacity duration-200"
                style={{
                  opacity: morphState.progress,
                  transform: `translateY(${(1 - morphState.progress) * -20}px)`,
                }}
              >
                AI built for Immigration
              </h2>
            </div>
          )}

          {morphState.phase === "end" && (
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl animate-gradient-shift pb-4">
              AI built for Immigration
            </h2>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 flex items-center justify-center">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-lime-accent rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-8 flex flex-col items-center transition-opacity duration-500"
          style={{ opacity: 1 - scrollProgress }}
        >
          <p className="text-white/60 text-sm mb-4">Scroll to reveal</p>
          <svg
            className="w-6 h-6 text-lime-accent animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-lime-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateY(${scrollProgress * 100}px) scale(${scrollProgress})`,
              opacity: scrollProgress * 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
}
