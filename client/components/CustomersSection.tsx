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

        {/* Customer Boxes - Diagonal Layout */}
        <div className="relative">
          {/* Self-petitioners Box - Top Left */}
          <div className="absolute top-0 left-0 w-[420px] lg:w-[500px] transform -rotate-3">
            <div className="relative overflow-hidden rounded-3xl border border-lime-accent/20 bg-gradient-to-br from-black via-lime-accent/5 to-black backdrop-blur-sm hover:scale-105 transition-all duration-500">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-accent/30 via-transparent to-lime-accent/10 rounded-3xl"></div>
              <div className="absolute inset-[1px] bg-black/80 rounded-3xl"></div>

              <div className="relative p-8">
                <h3 className="font-sans text-3xl font-bold text-white mb-3 tracking-tight">
                  Self-petitioners
                </h3>
                <p className="font-sans text-white/60 leading-relaxed text-lg mb-8">
                  For researchers, founders, creatives, and builders applying
                  for EB1A, O-1, or H-1B on their own.
                </p>

                {/* Tech indicators */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lime-accent rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-lime-accent/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-lime-accent/20 rounded-full"></div>
                  <span className="ml-3 font-mono text-xs text-lime-accent/80">
                    AI_PROCESSING
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Global teams Box - Bottom Right */}
          <div className="absolute top-[200px] lg:top-[180px] right-0 w-[420px] lg:w-[500px] transform rotate-3">
            <div className="relative overflow-hidden rounded-3xl border border-lime-accent/20 bg-gradient-to-br from-black via-lime-accent/5 to-black backdrop-blur-sm hover:scale-105 transition-all duration-500">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-tl from-lime-accent/30 via-transparent to-lime-accent/10 rounded-3xl"></div>
              <div className="absolute inset-[1px] bg-black/80 rounded-3xl"></div>

              <div className="relative p-8">
                <h3 className="font-sans text-3xl font-bold text-white mb-3 tracking-tight">
                  Global teams
                </h3>
                <p className="font-sans text-white/60 leading-relaxed text-lg mb-8">
                  For startups, labs, and enterprises hiring across
                  borders—without legal bottlenecks.
                </p>

                {/* Tech indicators */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-lime-accent rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-lime-accent/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-lime-accent/20 rounded-full"></div>
                  <span className="ml-3 font-mono text-xs text-lime-accent/80">
                    TEAM_SYNC
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for proper height */}
          <div className="h-[500px] lg:h-[450px]"></div>
        </div>
      </div>
    </div>
  );
}
