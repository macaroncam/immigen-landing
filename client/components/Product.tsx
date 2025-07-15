import { useEffect, useState, useRef } from "react";

export default function Product() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on text position in viewport
      const progress = 1 - rect.top / windowHeight;
      const clampedProgress = Math.max(0, Math.min(2, progress));
      setScrollProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text morphing logic
  const getMorphingState = () => {
    if (scrollProgress < 0.5) {
      return { phase: "start" };
    } else if (scrollProgress > 0.8) {
      return { phase: "end" };
    } else {
      return {
        phase: "morphing",
        progress: (scrollProgress - 0.5) / 0.3,
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
        <div className="font-sans leading-relaxed tracking-tighter overflow-visible w-full">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pb-4 w-full font-bold"
            style={{
              minWidth: "max-content",
              fontSize: "clamp(1.5rem, 5vw, 4rem)",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <span className="animate-gradient-shift">Trust in </span>
            <span
              className="relative inline-block"
              style={{ width: "3.8ch", minWidth: "3.8ch", marginLeft: "0.2em" }}
            >
              {morphState.phase === "start" && (
                <span className="animate-gradient-shift">Immi</span>
              )}
              {morphState.phase === "morphing" && (
                <>
                  <span className="animate-gradient-shift invisible">Immi</span>
                  <span
                    className="animate-gradient-shift absolute top-0 left-0 transition-all duration-700 ease-out"
                    style={{
                      opacity: 1 - morphState.progress,
                      transform: `translateY(${morphState.progress * 8}px)`,
                    }}
                  >
                    Immi
                  </span>
                  <span
                    className="animate-gradient-shift absolute top-0 left-0 transition-all duration-700 ease-out"
                    style={{
                      opacity: morphState.progress,
                      transform: `translateY(${(1 - morphState.progress) * -8}px)`,
                    }}
                  >
                    Our
                  </span>
                </>
              )}
              {morphState.phase === "end" && (
                <span className="animate-gradient-shift">Our</span>
              )}
            </span>
            <span className="animate-gradient-shift">Gen.AI</span>
          </h2>

          {/* Paragraphs below with typewriter effect */}
          <div className="mt-16 w-full pr-4 sm:pr-6 lg:pr-20">
            {(() => {
              const fullText =
                "Immigen isn't a ChatGPT wrapper.\n\nIt's built on a custom Logical-Semantic Integration Model (LSIM) designed to replicate expert-level petition strategy.\n\nThe result? No hallucinations. No generic advice. But filings you can trust.";

              const revealProgress = Math.max(
                0,
                Math.min(1, scrollProgress * 1.2),
              );
              const charactersToReveal = Math.floor(
                fullText.length * revealProgress,
              );

              const displayText = fullText;

              return (
                <div
                  className="font-sans text-white/90"
                  style={{
                    letterSpacing: "0.2em",
                  }}
                >
                  {displayText.split("\n\n").map((paragraph, index) => {
                    const fullParagraphs = fullText.split("\n\n");
                    const currentParagraphStart =
                      fullParagraphs.slice(0, index).join("\n\n").length +
                      (index > 0 ? 2 : 0);

                    return (
                      <p
                        key={index}
                        className="mb-12 last:mb-0 relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium"
                        style={{
                          fontSize: "clamp(1.5rem, 4vw, 3rem)",
                          letterSpacing: "0.02em",
                          lineHeight: "1.6",
                        }}
                      >
                        {paragraph.split("").map((char, charIndex) => {
                          const globalCharIndex =
                            currentParagraphStart + charIndex;
                          const distanceFromReveal =
                            globalCharIndex - charactersToReveal;

                          let opacity, scale, transform;
                          if (distanceFromReveal <= 0) {
                            // Fully revealed
                            opacity = 1;
                            scale = 1;
                            transform = "translateY(0px)";
                          } else if (distanceFromReveal <= 6) {
                            // About to be revealed - dramatic gradient
                            opacity = Math.max(
                              0.1,
                              1 - distanceFromReveal * 0.25,
                            );
                            scale = 0.8 + (1 - distanceFromReveal * 0.05);
                            transform = `translateY(${distanceFromReveal * 3}px)`;
                          } else {
                            // Far from reveal - almost invisible
                            opacity = 0.02;
                            scale = 0.8;
                            transform = "translateY(10px)";
                          }

                          const shouldHighlight =
                            globalCharIndex <= charactersToReveal;

                          // Enhanced highlighting for more drama
                          const isJustRevealed =
                            distanceFromReveal <= 0 && distanceFromReveal >= -3;

                          return (
                            <span
                              key={charIndex}
                              className="relative z-10 inline-block"
                              style={{
                                opacity,
                                transform: `scale(${scale}) ${transform}`,
                                backgroundColor: shouldHighlight
                                  ? isJustRevealed
                                    ? "rgba(201, 243, 29, 0.6)"
                                    : "rgba(201, 243, 29, 0.2)"
                                  : "transparent",
                                boxShadow: isJustRevealed
                                  ? "0 0 10px rgba(201, 243, 29, 0.4)"
                                  : "none",
                                borderRadius: "2px",
                                transition:
                                  "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
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
