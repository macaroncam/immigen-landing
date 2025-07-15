export default function CustomersSection() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Unlock the potential
            <br />
            of your immigration with AI
          </h2>
          <p className="font-sans text-lg text-white/60 max-w-lg leading-relaxed">
            Elit patientesque pretium vitae euismod magna non quis nibh faucibus
            egestas quis molestada. Egestas nisl pulvinar maecenas rutrum. Odio
            id interdum sit tristique.
          </p>
        </div>

        {/* Customer Boxes - Ultra Clean Layout */}
        <div className="relative">
          {/* Self-petitioners Box - Top Left */}
          <div className="absolute top-0 left-0 w-[400px] lg:w-[460px] transform -rotate-2">
            <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-lime-accent/10">
              <h3 className="font-sans text-xl font-medium text-white mb-4">
                Self-petitioners
              </h3>
              <p className="font-sans text-white/70 leading-relaxed">
                For researchers, founders, creatives, and builders applying for
                EB1A, O-1, or H-1B on their own.
              </p>
            </div>
          </div>

          {/* Global teams Box - Bottom Right */}
          <div className="absolute top-[180px] lg:top-[160px] right-0 w-[400px] lg:w-[460px] transform rotate-2">
            <div className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 rounded-2xl p-8 backdrop-blur-sm border border-lime-accent/10">
              <h3 className="font-sans text-xl font-medium text-white mb-4">
                Global teams
              </h3>
              <p className="font-sans text-white/70 leading-relaxed">
                For startups, labs, and enterprises hiring across
                borders—without legal bottlenecks.
              </p>
            </div>
          </div>

          {/* Spacer for proper height */}
          <div className="h-[380px]"></div>
        </div>
      </div>
    </div>
  );
}
