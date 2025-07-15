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

        {/* Customer Boxes - Chat Interface Style */}
        <div className="relative">
          {/* Self-petitioners Box - Top Left */}
          <div className="absolute top-0 left-0 w-[420px] lg:w-[480px] transform -rotate-2">
            <div className="bg-gray-800 rounded-3xl p-8">
              <h3 className="font-sans text-xl font-medium text-white mb-4">
                Self-petitioners
              </h3>
              <p className="font-sans text-white/80 leading-relaxed">
                For researchers, founders, creatives, and builders applying for
                EB1A, O-1, or H-1B on their own.
              </p>
            </div>
          </div>

          {/* Global teams Box - Bottom Right */}
          <div className="absolute top-[200px] lg:top-[180px] right-0 w-[420px] lg:w-[480px] transform rotate-2">
            <div className="bg-gray-800 rounded-3xl p-8">
              <h3 className="font-sans text-xl font-medium text-white mb-4">
                Global teams
              </h3>
              <p className="font-sans text-white/80 leading-relaxed">
                For startups, labs, and enterprises hiring across
                borders—without legal bottlenecks.
              </p>
            </div>
          </div>

          {/* Spacer for proper height */}
          <div className="h-[420px]"></div>
        </div>
      </div>
    </div>
  );
}
