import { useEffect, useState, useRef } from "react";

export default function Product() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [hasExited, setHasExited] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isScrollLocked = false;

    const handleWheel = (e: WheelEvent) => {
      if (!sectionRef.current || hasExited) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we're in the section area
      const inSection = rect.top <= 0 && rect.bottom > windowHeight;

      if (inSection && !hasExited) {
        e.preventDefault();
        e.stopPropagation();

        setIsInSection(true);
        isScrollLocked = true;

        // Update progress based on wheel direction
        setScrollProgress((prev) => {
          const delta = e.deltaY > 0 ? 0.08 : -0.08;
          const newProgress = Math.max(0, Math.min(2.2, prev + delta));

          // Once we reach the end, allow exit
          if (newProgress >= 2.0 && e.deltaY > 0) {
            setHasExited(true);
            setIsInSection(false);
            isScrollLocked = false;

            // Re-enable scrolling and scroll past the section
            setTimeout(() => {
              document.body.style.overflow = "auto";
              window.scrollBy({ top: windowHeight, behavior: "smooth" });
            }, 100);
          }

          return newProgress;
        });
      } else if (!inSection) {
        setIsInSection(false);
        isScrollLocked = false;
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current || hasExited) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only set initial state, don't interfere with wheel handling
      const inSection = rect.top <= 0 && rect.bottom > windowHeight;

      if (inSection && !isInSection && scrollProgress === 0) {
        setIsInSection(true);
      } else if (!inSection && rect.top > windowHeight) {
        // Reset if we scroll back up above the section
        setScrollProgress(0);
        setHasExited(false);
        setIsInSection(false);
      }
    };

    // Use wheel for main interaction, scroll for initial detection
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [scrollProgress, isInSection, hasExited]);

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

  // Calculate exit animation for the trust section
  const exitProgress = Math.max(0, Math.min(1, (scrollProgress - 1) * 2));

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
              transform: `translateX(${-exitProgress * 100}%)`,
              transition: "transform 0.6s ease-out",
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
          <div
            className="mt-16 w-full pr-4 sm:pr-6 lg:pr-20"
            style={{
              transform: `translateX(${-exitProgress * 100}%)`,
              transition: "transform 0.6s ease-out",
            }}
          >
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
                  className="font-sans text-white/90 leading-relaxed"
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
                        }}
                      >
                        {paragraph.split("").map((char, charIndex) => {
                          const globalCharIndex =
                            currentParagraphStart + charIndex;
                          const distanceFromReveal =
                            globalCharIndex - charactersToReveal;

                          let opacity;
                          if (distanceFromReveal <= 0) {
                            opacity = 1;
                          } else if (distanceFromReveal <= 8) {
                            opacity = Math.max(
                              0.05,
                              1 - distanceFromReveal * 0.12,
                            );
                          } else {
                            opacity = 0.05;
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
