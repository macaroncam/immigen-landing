import { useEffect, useState, useRef } from "react";

export default function ScrollTextAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on text position in viewport
      // When text is at bottom of screen (rect.top = windowHeight), progress = 0
      // When text is at top of screen (rect.top = 0), progress = 1
      const progress = 1 - rect.top / windowHeight;

      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text morphing logic - slower transition
  const getMorphingState = () => {
    if (scrollProgress < 0.3) {
      return { phase: "start" }; // "Trust in ImmiGen.AI"
    } else if (scrollProgress < 0.5) {
      return {
        phase: "phase1",
        progress: (scrollProgress - 0.3) / 0.2, // "Immi" disappears, "Gen.AI" stays
      };
    } else if (scrollProgress < 0.7) {
      return {
        phase: "phase2",
        progress: (scrollProgress - 0.5) / 0.2, // " built for Immigration" appears, "Gen.AI" highlights
      };
    } else {
      return { phase: "end" }; // "Trust in Gen.AI built for Immigration"
    }
  };

  const morphState = getMorphingState();

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen flex items-start justify-start overflow-hidden pt-32"
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
      <div className="relative z-10 px-2 sm:px-4 text-left w-full min-w-0">
        <div className="font-sans font-bold leading-relaxed tracking-tighter overflow-visible w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-4 whitespace-nowrap w-full"
            style={{
              minWidth: "max-content",
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              letterSpacing: "0.02em",
            }}
          >
            <span className="text-white">Trust in </span>
            {morphState.phase === "start" && (
              <span className="text-white">Immigen</span>
            )}

            {morphState.phase === "morphing" && (
              <span
                className="relative inline-block"
                style={{ minWidth: "max-content" }}
              >
                <span
                  className="text-white transition-all duration-700 ease-out invisible"
                  style={{
                    opacity: 1 - morphState.progress,
                    transform: `translateY(${morphState.progress * 5}px) scale(${1 - morphState.progress * 0.05})`,
                  }}
                >
                  Gen.AI built for Immigration
                </span>
                <span
                  className="text-white absolute top-0 left-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: 1 - morphState.progress,
                    transform: `translateY(${morphState.progress * 5}px) scale(${1 - morphState.progress * 0.05})`,
                  }}
                >
                  Immigen
                </span>
                <span
                  className="animate-gradient-shift absolute top-0 left-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: morphState.progress,
                    transform: `translateY(${(1 - morphState.progress) * -5}px) scale(${0.95 + morphState.progress * 0.05})`,
                  }}
                >
                  Gen.AI built for Immigration
                </span>
              </span>
            )}

            {morphState.phase === "end" && (
              <span
                className="relative inline-block"
                style={{ minWidth: "max-content" }}
              >
                <span className="animate-gradient-shift">
                  Gen.AI built for Immigration
                </span>
              </span>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}
