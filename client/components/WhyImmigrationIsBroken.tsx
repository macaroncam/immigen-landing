import { useEffect, useRef, useState } from "react";

export default function WhyImmigrationIsBroken() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [costCounter, setCostCounter] = useState(0);
  const [pageCounter, setPageCounter] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Animate cost counter
            setTimeout(() => {
              let current = 0;
              const target = 15000;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  setCostCounter(target);
                  clearInterval(timer);
                } else {
                  setCostCounter(Math.floor(current));
                }
              }, 30);
            }, 500);

            // Animate page counter
            setTimeout(() => {
              let current = 0;
              const target = 60;
              const increment = target / 30;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  setPageCounter(target);
                  clearInterval(timer);
                } else {
                  setPageCounter(Math.floor(current));
                }
              }, 50);
            }, 700);
          }
        });
      },
      {
        threshold: 0.2,
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
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-sans text-2xl md:text-3xl font-semibold text-lime-accent mb-3">
              Why Immigration Is Broken
            </h2>
            <div className="w-16 h-0.5 bg-lime-accent/60 mb-8"></div>
          </div>

          {/* Problem Questions with Interactive Counters */}
          <div className="space-y-6 mb-12">
            <p
              className={`font-sans text-lg text-white/90 leading-relaxed transition-all duration-1000 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Why does a visa petition cost{" "}
              <span className="text-lime-accent font-medium font-mono">
                ${costCounter.toLocaleString()}
              </span>{" "}
              and take{" "}
              <span className="text-lime-accent font-medium font-mono">
                {pageCounter} pages
              </span>
              ?
            </p>

            <div
              className={`group cursor-pointer transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-sans text-lg text-white/90 leading-relaxed group-hover:text-white transition-colors">
                Why does the world's{" "}
                <span className="text-lime-accent font-medium group-hover:text-lime-accent/80 transition-colors">
                  best talent
                </span>{" "}
                still need{" "}
                <span className="text-red-400 font-medium group-hover:text-red-300 transition-colors">
                  gatekeepers
                </span>
                ?
              </p>
            </div>

            <div
              className={`group cursor-pointer transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-sans text-lg text-white/90 leading-relaxed group-hover:text-white transition-colors">
                Why hasn't this{" "}
                <span className="text-lime-accent font-medium group-hover:text-lime-accent/80 transition-colors">
                  changed
                </span>
                ?
              </p>
            </div>
          </div>

          {/* Interactive Problem Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Expensive */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-lime-accent/30 hover:scale-105 ${
                hoveredCard === 0 ? "bg-white/10 border-lime-accent/30" : ""
              }`}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-sans text-base font-semibold text-white mb-2 transition-colors">
                Expensive
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed hover:text-white/90 transition-colors">
                <span className="text-red-400 font-medium">$10K–$20K</span> per
                application
              </p>
              {hoveredCard === 0 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="font-sans text-xs text-white/50">
                    Legal fees, filing costs, and administrative overhead
                  </p>
                </div>
              )}
            </div>

            {/* Opaque */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-lime-accent/30 hover:scale-105 ${
                hoveredCard === 1 ? "bg-white/10 border-lime-accent/30" : ""
              }`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-sans text-base font-semibold text-white mb-2 transition-colors">
                Opaque
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed hover:text-white/90 transition-colors">
                Which{" "}
                <span className="text-lime-accent font-medium">
                  EB1A criteria
                </span>{" "}
                do you even qualify for?
              </p>
              {hoveredCard === 1 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="font-sans text-xs text-white/50">
                    Complex eligibility requirements without clear guidance
                  </p>
                </div>
              )}
            </div>

            {/* AI-written by lawyers */}
            <div
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-lime-accent/30 hover:scale-105 ${
                hoveredCard === 2 ? "bg-white/10 border-lime-accent/30" : ""
              }`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="font-sans text-base font-semibold text-white mb-2 transition-colors">
                AI-written by lawyers
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed hover:text-white/90 transition-colors">
                Irony: <span className="text-orange-400 font-medium">96%</span>{" "}
                of your "custom" letter may be AI too.
              </p>
              {hoveredCard === 2 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="font-sans text-xs text-white/50">
                    Template-based solutions disguised as personalized service
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Conclusion */}
          <div
            className={`bg-lime-accent/5 border border-lime-accent/20 rounded-lg p-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-sans text-base text-white/90 leading-relaxed">
              <span className="text-lime-accent font-medium">Immigen</span> was
              built to break that cycle—by rethinking the system from the ground
              up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
