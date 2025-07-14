import { useEffect, useRef, useState } from "react";

export default function WhyImmigrationIsBroken() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Stagger card animations
            setTimeout(
              () => setCardVisibility((prev) => [true, prev[1], prev[2]]),
              200,
            );
            setTimeout(
              () => setCardVisibility((prev) => [prev[0], true, prev[2]]),
              400,
            );
            setTimeout(
              () => setCardVisibility((prev) => [prev[0], prev[1], true]),
              600,
            );
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Starry Background */}
      <div className="absolute inset-0">
        <img
          src="/starry-background.gif"
          alt="Starry space background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-lime-accent mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            🧱 Why Immigration Is Broken
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <p
              className={`font-sans text-xl md:text-2xl text-white leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              Why does a visa petition cost{" "}
              <span className="text-lime-accent font-bold">$15,000</span> and
              take <span className="text-lime-accent font-bold">60 pages</span>?
            </p>

            <p
              className={`font-sans text-xl md:text-2xl text-white leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 -translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              Why does the world's{" "}
              <span className="text-lime-accent font-bold">best talent</span>{" "}
              still need{" "}
              <span className="text-red-400 font-bold">gatekeepers</span>?
            </p>

            <p
              className={`font-sans text-xl md:text-2xl text-white leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              Why hasn't this{" "}
              <span className="text-lime-accent font-bold">changed</span>?
            </p>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Expensive */}
          <div
            className={`bg-gray-900/50 backdrop-blur-sm border border-lime-accent/30 rounded-2xl p-8 transition-all duration-1000 ${
              cardVisibility[0]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="font-sans text-2xl font-bold text-lime-accent mb-4">
                Expensive
              </h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                <span className="text-red-400 font-bold">$10K–$20K</span> per
                application
              </p>
            </div>
          </div>

          {/* Card 2: Opaque */}
          <div
            className={`bg-gray-900/50 backdrop-blur-sm border border-lime-accent/30 rounded-2xl p-8 transition-all duration-1000 delay-200 ${
              cardVisibility[1]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🧱</div>
              <h3 className="font-sans text-2xl font-bold text-lime-accent mb-4">
                Opaque
              </h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                Which{" "}
                <span className="text-lime-accent font-bold">
                  EB1A criteria
                </span>{" "}
                do you even qualify for?
              </p>
            </div>
          </div>

          {/* Card 3: AI-written by lawyers */}
          <div
            className={`bg-gray-900/50 backdrop-blur-sm border border-lime-accent/30 rounded-2xl p-8 transition-all duration-1000 delay-400 ${
              cardVisibility[2]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="font-sans text-2xl font-bold text-lime-accent mb-4">
                AI-written by lawyers
              </h3>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                <span className="text-orange-400 font-bold">Irony:</span>{" "}
                <span className="text-red-400 font-bold">96%</span> of your
                "custom" letter may be AI too.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <div
            className={`inline-block bg-gradient-to-r from-lime-accent/10 to-green-500/10 border border-lime-accent/30 rounded-2xl p-8 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <p className="font-sans text-2xl md:text-3xl text-white leading-relaxed max-w-3xl">
              <span className="text-lime-accent font-bold">Immigen</span> was
              built to{" "}
              <span className="text-red-400 font-bold">break that cycle</span>
              —by{" "}
              <span className="text-lime-accent font-bold">
                rethinking the system
              </span>{" "}
              from the ground up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
