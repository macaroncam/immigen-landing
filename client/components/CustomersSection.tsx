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
          <div className="absolute top-0 left-0 w-[400px] lg:w-[480px] transform -rotate-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-2xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-accent/30 to-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-lime-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-sans text-2xl font-bold text-white mb-4">
                  Self-petitioners
                </h3>
                <p className="font-sans text-white/70 leading-relaxed text-base mb-6">
                  For researchers, founders, creatives, and builders applying
                  for EB1A, O-1, or H-1B on their own.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-lime-accent rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Automated petition drafting
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Evidence optimization
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Smart recommendations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Global teams Box - Bottom Right */}
          <div className="absolute top-[200px] lg:top-[180px] right-0 w-[400px] lg:w-[480px] transform rotate-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-2xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-sans text-2xl font-bold text-white mb-4">
                  Global teams
                </h3>
                <p className="font-sans text-white/70 leading-relaxed text-base mb-6">
                  For startups, labs, and enterprises hiring across
                  borders—without legal bottlenecks.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Bulk processing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Team management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Compliance tracking
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer for proper height */}
          <div className="h-[500px] lg:h-[450px]"></div>
        </div>

        {/* Bottom Toolbar */}
        <div className="mt-16 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
              <div className="w-8 h-8 bg-white/20 rounded-lg border border-white/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
