export default function PricingSection() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6">
            Get started now,
            <br />
            pick a plan later
          </h2>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Ac vulputate ullamcorper malesuada cursus laoreet proin et augue a
            id scelerisque cursus pharetra quis facilisis vel ullamcorper
            sodales
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="font-sans text-xl font-medium text-white mb-2">
                Basic
              </h3>
              <p className="font-sans text-sm text-white/60 mb-6">
                Ac vulputate ullamcorper malesuada cursus laoreet proin et.
              </p>
              <div className="font-sans text-3xl font-normal text-white mb-6">
                500 AI Credits
              </div>
              <button className="w-full bg-transparent border border-white/20 text-white font-sans font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
                Get started
              </button>
            </div>

            <div>
              <p className="font-sans text-sm font-medium text-white mb-4">
                This plan includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Basic case analysis
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Document review
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Basic recommendations
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Email support
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full bg-transparent border border-white/20 text-white font-sans font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Elite Plan - Featured */}
          <div className="bg-gradient-to-b from-lime-accent/10 to-green-500/10 border border-lime-accent/30 rounded-2xl p-8 relative">
            <div className="mb-8">
              <h3 className="font-sans text-xl font-medium text-white mb-2">
                Elite
              </h3>
              <p className="font-sans text-sm text-white/60 mb-6">
                Ac vulputate ullamcorper malesuada cursus laoreet proin et.
              </p>
              <div className="font-sans text-3xl font-normal text-white mb-6">
                2,500 AI Credits
              </div>
              <button className="w-full bg-white text-black font-sans font-medium py-3 px-4 rounded-lg hover:bg-white/90 transition-colors">
                Get started
              </button>
            </div>

            <div>
              <p className="font-sans text-sm font-medium text-white mb-4">
                This plan includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All in Basic plus
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Advanced case strategy
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Evidence optimization
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Priority support
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full bg-white text-black font-sans font-medium py-3 px-4 rounded-lg hover:bg-white/90 transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="font-sans text-xl font-medium text-white mb-2">
                Pro
              </h3>
              <p className="font-sans text-sm text-white/60 mb-6">
                Ac vulputate ullamcorper malesuada cursus laoreet proin et.
              </p>
              <div className="font-sans text-3xl font-normal text-white mb-6">
                10,000 AI Credits
              </div>
              <button className="w-full bg-transparent border border-white/20 text-white font-sans font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
                Get started
              </button>
            </div>

            <div>
              <p className="font-sans text-sm font-medium text-white mb-4">
                This plan includes:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All in Elite plus
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Complete petition drafts
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Expert review
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <svg
                    className="w-4 h-4 text-lime-accent mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  24/7 chat support
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full bg-transparent border border-white/20 text-white font-sans font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
