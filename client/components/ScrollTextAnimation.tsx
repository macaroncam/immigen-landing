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

  // Text morphing logic - slower transition
  const getMorphingState = () => {
    if (scrollProgress < 0.2) {
      return { phase: "start" };
    } else if (scrollProgress > 0.8) {
      return { phase: "end" };
    } else {
      return { phase: "morphing", progress: (scrollProgress - 0.2) / 0.6 };
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
      <div className="relative z-10 px-2 sm:px-4 text-left w-full">
        <div className="font-sans font-bold leading-relaxed tracking-tighter overflow-visible">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-4">
            <span className="text-white">Trust in </span>
            {morphState.phase === "start" && (
              <span className="text-white">Immigen</span>
            )}

            {morphState.phase === "morphing" && (
              <span className="relative inline-block min-w-[280px] sm:min-w-[350px] md:min-w-[420px] lg:min-w-[500px] xl:min-w-[600px]">
                <span
                  className="text-white absolute top-0 left-0 transition-opacity duration-200"
                  style={{
                    opacity: 1 - morphState.progress,
                    transform: `translateY(${morphState.progress * 10}px)`,
                  }}
                >
                  Immigen
                </span>
                <span
                  className="animate-gradient-shift absolute top-0 left-0 transition-opacity duration-200"
                  style={{
                    opacity: morphState.progress,
                    transform: `translateY(${(1 - morphState.progress) * -10}px)`,
                  }}
                >
                  AI built for Immigration
                </span>
              </span>
            )}

            {morphState.phase === "end" && (
              <span className="animate-gradient-shift">
                AI built for Immigration
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
