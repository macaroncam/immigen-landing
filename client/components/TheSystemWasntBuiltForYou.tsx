import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function TheSystemWasntBuiltForYou() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Animation hooks for different sections
  const headerAnimation = useScrollAnimation({ delay: 100 });
  const contentAnimation = useScrollAnimation({ delay: 300 });
  const imageAnimation = useScrollAnimation({ delay: 500 });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32">
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

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-20">
        {/* Header Section */}
        <div
          ref={headerAnimation.ref}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
          style={headerAnimation.animationStyle}
        >
          {/* AI for the Enterprise Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-lime-accent/10 backdrop-blur-sm mb-5 border border-lime-accent/20">
            <span className="text-xs font-sans font-medium text-lime-accent uppercase tracking-[3px]">
              The Problem
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white mb-4 leading-tight">
            <span className="animate-gradient-shift">
              The System Wasn't Built for You.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-sans font-medium text-white/80 max-w-2xl mb-8">
            Immigration was built for bureaucracy—not for people.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Side - Feature List */}
          <div className="space-y-8">
            {/* It's Overpriced. */}
            <div
              className={`border-b border-lime-accent/20 pb-8 cursor-pointer transition-all duration-500 ease-out ${
                hoveredSection === "overpriced"
                  ? "opacity-100 scale-[1.02]"
                  : "opacity-60 scale-100"
              } hover:opacity-100`}
              onMouseEnter={() => setHoveredSection("overpriced")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-2xl sm:text-3xl font-sans font-bold mb-4 leading-tight">
                <span
                  className={`transition-all duration-500 ${
                    hoveredSection === "overpriced"
                      ? "animate-gradient-shift"
                      : "text-white/70"
                  }`}
                >
                  It's Overpriced.
                </span>
              </h3>
              <p
                className={`text-lg font-sans font-medium leading-relaxed transition-all duration-500 ${
                  hoveredSection === "overpriced"
                    ? "text-white"
                    : "text-white/50"
                }`}
              >
                Petitions routinely cost $10,000 to $20,000 for what is often a
                templated, recycled process. You're paying premium prices for
                work that hasn't evolved in decades.
              </p>
            </div>

            {/* It Takes Forever */}
            <div
              className={`border-b border-lime-accent/20 pb-8 cursor-pointer transition-all duration-500 ease-out ${
                hoveredSection === "forever"
                  ? "opacity-100 scale-[1.02]"
                  : "opacity-60 scale-100"
              } hover:opacity-100`}
              onMouseEnter={() => setHoveredSection("forever")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-2xl sm:text-3xl font-sans font-bold mb-4 leading-tight">
                <span
                  className={`transition-all duration-500 ${
                    hoveredSection === "forever"
                      ? "animate-gradient-shift"
                      : "text-white/70"
                  }`}
                >
                  It takes forever
                </span>
              </h3>
              <p
                className={`text-lg font-sans font-medium leading-relaxed transition-all duration-500 ${
                  hoveredSection === "forever" ? "text-white" : "text-white/50"
                }`}
              >
                Lawyers are overloaded and slow. Your case waits in a queue
                while firms juggle dozens of clients, leaving you in the dark
                for weeks, sometimes even months.
              </p>
            </div>

            {/* It's Already Written by AI */}
            <div
              className={`pb-8 cursor-pointer transition-all duration-500 ease-out ${
                hoveredSection === "ai"
                  ? "opacity-100 scale-[1.02]"
                  : "opacity-60 scale-100"
              } hover:opacity-100`}
              onMouseEnter={() => setHoveredSection("ai")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <h3 className="text-2xl sm:text-3xl font-sans font-bold mb-4 leading-tight">
                <span
                  className={`transition-all duration-500 ${
                    hoveredSection === "ai"
                      ? "animate-gradient-shift"
                      : "text-white/70"
                  }`}
                >
                  It's Already Written by AI
                </span>
              </h3>
              <p
                className={`text-lg font-sans font-medium leading-relaxed transition-all duration-500 ${
                  hoveredSection === "ai" ? "text-white" : "text-white/50"
                }`}
              >
                Most legal teams are using ChatGPT, Claude, and other
                general-purpose AI to ghostwrite petitions behind the scenes.
                You never see it, but you still pay as if every sentence was
                custom and hand-crafted.
              </p>
            </div>
          </div>

          {/* Right Side - 3D Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <div
                className={`transition-all duration-500 ${
                  hoveredSection === "overpriced"
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdc9bec237a7c4c8db3eebedfa5bf8146%2Fb2991e6080e84298ae60359551a28a4e?format=webp&width=800"
                  alt="3D AI Data Visualization"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
