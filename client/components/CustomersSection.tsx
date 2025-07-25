import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CustomersSection() {
  const headerAnimation = useScrollAnimation({ delay: 100 });
  const leftBoxAnimation = useScrollAnimation({ delay: 200 });
  const rightBoxAnimation = useScrollAnimation({ delay: 400 });

  return (
    <div id="customers" className="relative min-h-screen overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-20 pb-16">
        {/* Header */}
        <div
          ref={headerAnimation.ref}
          className="text-center mb-16"
          style={headerAnimation.animationStyle}
        >
          <h2 className="font-sans font-bold leading-relaxed tracking-tighter mb-3 py-4 overflow-visible">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl animate-gradient-shift pb-4">
              Who We Serve
            </span>
          </h2>
        </div>

        {/* Customer Boxes - Straight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Self-petitioners Box */}
          <div
            ref={leftBoxAnimation.ref}
            className="bg-gradient-to-br from-gray-700/90 via-gray-800/95 to-lime-accent/20 rounded-3xl p-8"
            style={leftBoxAnimation.animationStyle}
          >
            <h3 className="font-sans text-xl font-medium text-white mb-4">
              Self-petitioners
            </h3>
            <p className="font-sans text-white/80 leading-relaxed">
              For researchers, founders, creatives, and builders applying for
              EB1A, O-1, or H-1B on their own.
            </p>
          </div>

          {/* Global teams Box */}
          <div
            ref={rightBoxAnimation.ref}
            className="bg-gradient-to-bl from-gray-700/90 via-gray-800/95 to-lime-accent/20 rounded-3xl p-8"
            style={rightBoxAnimation.animationStyle}
          >
            <h3 className="font-sans text-xl font-medium text-white mb-4">
              Global teams
            </h3>
            <p className="font-sans text-white/80 leading-relaxed">
              For startups, labs, and enterprises hiring across borders—without
              legal bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
