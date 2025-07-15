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

        {/* Customer Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Self-petitioners */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-lime-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-lime-accent"
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
                <h3 className="font-sans text-2xl font-bold text-white mb-3">
                  Self-petitioners
                </h3>
                <p className="font-sans text-white/70 leading-relaxed">
                  For researchers, founders, creatives, and builders applying
                  for EB1A, O-1, or H-1B on their own.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-lime-accent rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Automated petition drafting
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Evidence optimization
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans text-xl font-semibold text-white">
                Petition classification
              </h4>
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                Tincidunt urna praesent iaculis aliquet scelerisque proin
                nascetur nulla ultricies. Habitasse eget mi leo platea orci
                dolor elementum faucibus erat fermentum dignissim tristique
                libero in.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-lime-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-sans text-sm text-white/80">
                    Automated analysis
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-sans text-sm text-white/80">
                    Smart recommendations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Global teams */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
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
                <h3 className="font-sans text-2xl font-bold text-white mb-3">
                  Global teams
                </h3>
                <p className="font-sans text-white/70 leading-relaxed">
                  For startups, labs, and enterprises hiring across
                  borders—without legal bottlenecks.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Bulk processing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="font-sans text-sm text-white/80">
                    Team management
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans text-xl font-semibold text-white">
                Talent acquisition
              </h4>
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                Molestuda nec nibh aliquam tempus. Purus sed orci elementum quis
                purus viverra turpis molestesque. Nulla duis vel ut vel orci
                commodo. Ac nibh tellus semper sit pellentesque feugiat amet.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-sans text-sm text-white/80">
                    Talent pipeline
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-sans text-sm text-white/80">
                    Compliance tracking
                  </span>
                </div>
              </div>
            </div>
          </div>
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
