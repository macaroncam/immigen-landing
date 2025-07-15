export default function CustomersSection() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold leading-relaxed tracking-tighter mb-3 py-4 overflow-visible">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl animate-gradient-shift pb-4">
              Who We Serve
            </span>
          </h2>
        </div>

        {/* Customer Boxes - Chat Bubble with Lime Accent */}
        <div className="relative">
          {/* Self-petitioners Box - Top Left */}
          <div className="absolute top-0 left-0 w-[380px] lg:w-[440px] transform -rotate-2">
            <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-lime-accent/10 rounded-3xl p-6">
              <h3 className="font-sans text-lg font-medium text-white mb-3">
                Self-petitioners
              </h3>
              <p className="font-sans text-white/80 leading-relaxed text-sm">
                For researchers, founders, creatives, and builders applying for
                EB1A, O-1, or H-1B on their own.
              </p>
            </div>
          </div>

          {/* Global teams Box - Bottom Right */}
          <div className="absolute top-[160px] lg:top-[140px] right-0 w-[380px] lg:w-[440px] transform rotate-2">
            <div className="bg-gradient-to-bl from-gray-700 via-gray-800 to-lime-accent/10 rounded-3xl p-6">
              <h3 className="font-sans text-lg font-medium text-white mb-3">
                Global teams
              </h3>
              <p className="font-sans text-white/80 leading-relaxed text-sm">
                For startups, labs, and enterprises hiring across
                borders—without legal bottlenecks.
              </p>
            </div>
          </div>

          {/* Spacer for proper height */}
          <div className="h-[320px]"></div>
        </div>
      </div>
    </div>
  );
}
