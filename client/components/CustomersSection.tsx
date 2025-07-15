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

        {/* Customer Boxes - Straight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Self-petitioners Box */}
          <div className="bg-gradient-to-br from-gray-700/90 via-gray-800/95 to-lime-accent/20 rounded-3xl p-8">
            <h3 className="font-sans text-xl font-medium text-white mb-4">
              Self-petitioners
            </h3>
            <p className="font-sans text-white/80 leading-relaxed">
              For researchers, founders, creatives, and builders applying for
              EB1A, O-1, or H-1B on their own.
            </p>
          </div>

          {/* Global teams Box */}
          <div className="bg-gradient-to-bl from-gray-700/90 via-gray-800/95 to-lime-accent/20 rounded-3xl p-8">
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
