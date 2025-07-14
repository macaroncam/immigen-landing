import { useEffect, useRef, useState } from "react";
import FloatingElements from "./FloatingElements";

export default function WhyImmigrationIsBroken() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingElements, setShowFloatingElements] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay FloatingElements to match loading pattern
            setTimeout(() => {
              setShowFloatingElements(true);
            }, 500);
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
    <div ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Same Background as Hero */}
      <div className="absolute inset-0">
        <img
          src="/starry-background.gif"
          alt="Starry space background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tech Gradient Overlay - Same as Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/8 via-emerald-900/4 to-lime-900/6"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/3 to-lime-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-400/3 via-transparent to-green-600/4"></div>

      {/* Floating Background Elements */}
      {showFloatingElements && (
        <FloatingElements key="floating-broken-section" />
      )}

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

          {/* Problem Questions */}
          <div className="space-y-6 mb-12">
            <p
              className={`font-sans text-lg text-white/90 leading-relaxed transition-all duration-1000 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Why does a visa petition cost{" "}
              <span className="text-lime-accent font-medium">$15,000</span> and
              take{" "}
              <span className="text-lime-accent font-medium">60 pages</span>?
            </p>

            <p
              className={`font-sans text-lg text-white/90 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Why does the world's best talent still need gatekeepers?
            </p>

            <p
              className={`font-sans text-lg text-white/90 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Why hasn't this changed?
            </p>
          </div>

          {/* Problem Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Expensive */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-base font-semibold text-white mb-2">
                Expensive
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                $10K–$20K per application
              </p>
            </div>

            {/* Opaque */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-base font-semibold text-white mb-2">
                Opaque
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Which EB1A criteria do you even qualify for?
              </p>
            </div>

            {/* AI-written by lawyers */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="font-sans text-base font-semibold text-white mb-2">
                AI-written by lawyers
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Irony: 96% of your "custom" letter may be AI too.
              </p>
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
