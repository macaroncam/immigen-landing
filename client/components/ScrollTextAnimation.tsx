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
    if (scrollProgress < 0.5) {
      return { phase: "start" }; // "Trust in ImmiGen.AI" (stays longer)
    } else if (scrollProgress > 0.8) {
      return { phase: "end" }; // "Trust in our Gen.AI"
    } else {
      return {
        phase: "morphing",
        progress: (scrollProgress - 0.5) / 0.3, // "Immi" → "our", "Gen.AI" stays
      };
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-20 text-left w-full min-w-0">
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
              <span className="text-white">ImmiGen.AI</span>
            )}

            {morphState.phase === "morphing" && (
              <span
                className="relative inline-block"
                style={{ minWidth: "max-content" }}
              >
                <span className="text-white invisible">our Gen.AI</span>
                <span
                  className="text-white absolute top-0 left-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: 1 - morphState.progress,
                    transform: `translateY(${morphState.progress * 8}px)`,
                  }}
                >
                  Immi
                </span>
                <span
                  className="text-white absolute top-0 left-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: morphState.progress,
                    transform: `translateY(${(1 - morphState.progress) * -8}px)`,
                  }}
                >
                  our
                </span>
                <span
                  className="animate-gradient-shift absolute top-0 left-0"
                  style={{ left: "2.5em" }}
                >
                  Gen.AI
                </span>
              </span>
            )}

            {morphState.phase === "phase2" && (
              <span
                className="relative inline-block"
                style={{ minWidth: "max-content" }}
              >
                <span className="text-white invisible">
                  Gen.AI built for Immigration
                </span>
                <span
                  className={`absolute top-0 left-0 transition-all duration-500 ease-out ${
                    morphState.progress > 0.5
                      ? "animate-gradient-shift"
                      : "text-white"
                  }`}
                  style={{ left: "3.2em" }}
                >
                  Gen.AI
                </span>
                <span
                  className="text-white absolute top-0 left-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: morphState.progress,
                    transform: `translateY(${(1 - morphState.progress) * -8}px)`,
                    left: "8.5em",
                  }}
                >
                  built for Immigration
                </span>
              </span>
            )}

            {morphState.phase === "end" && (
              <span
                className="relative inline-block"
                style={{ minWidth: "max-content" }}
              >
                <span className="animate-gradient-shift">our Gen.AI</span>
              </span>
            )}
          </h2>

          {/* Paragraphs below with typewriter effect */}
          <div className="mt-16 max-w-6xl">
            {(() => {
              const fullText =
                "Immigen isn't a wrapper on a general-purpose model.\n\nIt's built on a custom Logical-Semantic Integration Model (LSIM) that blends structured fact-rule chains, semantic search, and in-context learning to replicate expert-level petition strategy.\n\nThe result? No hallucinations. No generic advice. But filings you can trust.";

              // Calculate how much text to reveal based on scroll progress
              const revealProgress = Math.max(
                0,
                Math.min(1, (scrollProgress - 0.6) * 1.5),
              );
              const charactersToShow = Math.floor(
                fullText.length * revealProgress,
              );
              const visibleText = fullText.substring(0, charactersToShow);

              return (
                <div
                  className="font-sans text-white/90 leading-relaxed"
                  style={{
                    letterSpacing: "0.02em",
                  }}
                >
                  {visibleText.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className={`mb-8 last:mb-0 ${
                        index === 1
                          ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                          : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                      }`}
                      style={{
                        fontSize:
                          index === 1
                            ? "clamp(1.25rem, 4vw, 2.5rem)"
                            : "clamp(1.5rem, 5vw, 3rem)",
                      }}
                    >
                      {paragraph}
                      {index === visibleText.split("\n\n").length - 1 &&
                        charactersToShow < fullText.length && (
                          <span className="animate-pulse">|</span>
                        )}
                    </p>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
