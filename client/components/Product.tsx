import { useEffect, useState, useRef } from "react";

export default function Product() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      // If section is in viewport, lock scrolling
      if (sectionTop <= 0 && sectionBottom > windowHeight) {
        setIsScrollLocked(true);

        // Prevent default scrolling
        document.body.style.overflow = "hidden";

        // Calculate progress for animations
        const progress = Math.abs(sectionTop) / (rect.height - windowHeight);
        const clampedProgress = Math.max(0, Math.min(2, progress * 2));
        setScrollProgress(clampedProgress);
      } else {
        setIsScrollLocked(false);
        document.body.style.overflow = "auto";

        // Reset progress when not in section
        if (sectionTop > 0) {
          setScrollProgress(0);
        }
      }
    };

    // Handle wheel events for scroll hijacking
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked && sectionRef.current) {
        e.preventDefault();

        // Simulate scroll progress based on wheel direction
        setScrollProgress((prev) => {
          const delta = e.deltaY > 0 ? 0.04 : -0.04;
          const newProgress = Math.max(0, Math.min(2.5, prev + delta));

          // Allow scrolling past when animation is complete and fully exited
          if (newProgress >= 2.3 && e.deltaY > 0) {
            // Use a timeout to prevent bouncing back
            setTimeout(() => {
              setIsScrollLocked(false);
              document.body.style.overflow = "auto";
              // Force scroll to next section
              const nextElement = sectionRef.current?.nextElementSibling;
              if (nextElement) {
                nextElement.scrollIntoView({ behavior: "smooth" });
              }
            }, 200);
            return newProgress;
          }

          // Allow scrolling back up when at beginning
          if (newProgress <= 0 && e.deltaY < 0) {
            setTimeout(() => {
              setIsScrollLocked(false);
              document.body.style.overflow = "auto";
              // Force scroll to previous section
              const prevElement = sectionRef.current?.previousElementSibling;
              if (prevElement) {
                prevElement.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }
            }, 200);
            return 0;
          }

          return newProgress;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [isScrollLocked]);

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
  const exitProgress = Math.max(0, Math.min(1, (scrollProgress - 1.5) * 3));

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

      {/* AI Lady Hologram - Revealed from right as text exits left */}
      <div
        className="fixed inset-0 flex items-center justify-center pointer-events-none z-5"
        style={{
          transform: `translateX(${100 - exitProgress * 100}%)`,
          transition: "transform 0.8s ease-out",
          opacity: exitProgress > 0.1 ? exitProgress : 0,
        }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ height: "100vh", width: "100vw" }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fdc9bec237a7c4c8db3eebedfa5bf8146%2Fdc671564e8b94567b8ee2a05967f4e81?format=webp&width=800"
            alt="AI Immigration Agent"
            className="w-auto object-contain"
            style={{
              height: "70vh",
              maxHeight: "70vh",
              filter: `brightness(${0.9 + exitProgress * 0.3}) saturate(${1.2 + exitProgress * 0.3})`,
              transform: `scale(${0.85 + exitProgress * 0.15})`,
              transition: "filter 0.8s ease-out, transform 0.8s ease-out",
            }}
          />

          {/* Lime green glow effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, rgba(201, 243, 29, ${exitProgress * 0.2}) 0%, transparent 70%)`,
              mixBlendMode: "screen",
            }}
          />
        </div>
      </div>

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
