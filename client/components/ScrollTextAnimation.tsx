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
      // Extended range to allow typewriter to complete
      // When text is at bottom of screen (rect.top = windowHeight), progress = 0
      // When text is well past top of screen (rect.top = -windowHeight), progress = 2
      const progress = 1 - rect.top / windowHeight;

      // Allow progress to go beyond 1 for typewriter completion
      const clampedProgress = Math.max(0, Math.min(2, progress));
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
          <div className="mt-16 w-full pr-4 sm:pr-6 lg:pr-20">
            {(() => {
              const fullText =
                "Immigen isn't a ChatGPT wrapper.\n\nIt's built on a custom Logical-Semantic Integration Model (LSIM) designed to replicate expert-level petition strategy.\n\nThe result? No hallucinations. No generic advice. But filings you can trust.";

              // Calculate reveal progress for character-by-character effect
              const revealProgress = Math.max(
                0,
                Math.min(1, scrollProgress * 1.2),
              );
              const charactersToReveal = Math.floor(
                fullText.length * revealProgress,
              );

              // Always show full text, just change opacity per character
              const displayText = fullText;

              return (
                <div
                  className="font-sans text-white/90 leading-relaxed"
                  style={{
                    letterSpacing: "0.02em",
                  }}
                >
                  {displayText.split("\n\n").map((paragraph, index) => {
                    const fullParagraphs = fullText.split("\n\n");
                    const currentParagraphStart =
                      fullParagraphs.slice(0, index).join("\n\n").length +
                      (index > 0 ? 2 : 0);
                    const highlightPercentage = Math.min(
                      100,
                      Math.max(
                        0,
                        ((charactersToReveal - currentParagraphStart) /
                          paragraph.length) *
                          100,
                      ),
                    );

                    return (
                      <p
                        key={index}
                        className="mb-12 last:mb-0 relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                        style={{
                          fontSize: "clamp(2rem, 6vw, 4.5rem)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {paragraph.split("").map((char, charIndex) => {
                          const globalCharIndex =
                            currentParagraphStart + charIndex;
                          const distanceFromReveal =
                            globalCharIndex - charactersToReveal;

                          // Calculate opacity based on distance from current reveal position
                          let opacity;
                          if (distanceFromReveal <= 0) {
                            opacity = 1; // Already revealed
                          } else if (distanceFromReveal <= 8) {
                            opacity = Math.max(
                              0.05,
                              1 - distanceFromReveal * 0.12,
                            ); // More dramatic gradient fade
                          } else {
                            opacity = 0.05; // Very faint for unrevealed text
                          }

                          const shouldHighlight =
                            globalCharIndex <= charactersToReveal;

                          return (
                            <span
                              key={charIndex}
                              className="relative z-10"
                              style={{
                                opacity,
                                backgroundColor: shouldHighlight
                                  ? "rgba(201, 243, 29, 0.3)"
                                  : "transparent",
                                transition:
                                  "opacity 0.3s ease-out, background-color 0.3s ease-out",
                              }}
                            >
                              {char}
                            </span>
                          );
                        })}
                      </p>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
