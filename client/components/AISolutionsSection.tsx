export default function AISolutionsSection() {
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
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          {/* AI for the Enterprise Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-lime-accent/10 backdrop-blur-sm mb-5 border border-lime-accent/20">
            <span className="text-xs font-normal text-lime-accent uppercase tracking-[3px]">
              The Problem
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight">
            <span className="animate-gradient-shift">
              The System Wasn't Built for You.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">
            Immigration was built for bureaucracy—not for people.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Feature List */}
          <div className="space-y-0">
            {/* It's Overpriced. */}
            <div className="border-b border-lime-accent/20 pb-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 leading-tight">
                <span className="animate-gradient-shift">
                  It’s Overpriced.
                </span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Petitions routinely cost $10,000 to $20,000 for what is often a templated, recycled process. You’re paying premium prices for work that hasn’t evolved in decades.
              </p>
            </div>

            {/* It Takes Forever */}
            <div className="border-b border-lime-accent/20 pb-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 leading-tight">
                <span className="animate-gradient-shift">
                  It takes forever
                </span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Lawyers are overloaded and slow. Your case waits in a queue while firms juggle dozens of clients, leaving you in the dark for weeks, sometimes even months.
              </p>
            </div>

            {/* It's Already Written by AI */}
            <div className="border-b border-lime-accent/20 pb-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 leading-tight">
                <span className="animate-gradient-shift">
                  It's Already Written by AI
                </span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Most legal teams use using ChatGPT, Claude, and other general-purpose AI to ghostwrite petitions behind the scenes. You never see it, but you still pay as if every sentence was custom and hand-crafted.
              </p>
            </div>
          </div>

          {/* Right Side - 3D Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
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
