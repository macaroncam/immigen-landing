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
              AI for the Enterprise
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight">
            <span className="animate-gradient-shift">
              Full-Stack AI Solutions
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-8">
            Outcomes delivered with world-class data, models, agents, and
            deployment.
          </p>

          {/* Book a Demo Button */}
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-lime-accent text-black font-sans font-bold text-sm rounded-2xl hover:opacity-90 transition-opacity">
            Book a Demo
            <span className="text-black">→</span>
          </button>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Feature List */}
          <div className="space-y-0">
            {/* Fine-Tuning and RLHF */}
            <div className="border-b border-lime-accent/20 pb-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 leading-tight">
                <span className="animate-gradient-shift">
                  Fine-Tuning and RLHF
                </span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Adapt best-in-class foundation models to your business and your
                specific data to build sustainable, successful AI programs and
                data from your enterprise.
              </p>
            </div>

            {/* Foundation Models */}
            <div className="border-b border-lime-accent/20 pb-6 mb-6">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 leading-tight">
                <span className="animate-gradient-shift">
                  Foundation Models
                </span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Scale partners or integrates with all of the leading AI models,
                from open-source to closed-source, including OpenAI, Google,
                Meta, Cohere, and more.
              </p>
            </div>

            {/* Enterprise Data */}
            <div className="pb-6">
              <h3 className="text-xl sm:text-2xl font-normal mb-3 leading-tight">
                <span className="animate-gradient-shift">Enterprise Data</span>
              </h3>
              <p className="text-white/90 text-base leading-relaxed">
                Scale's Data Engine enables you to integrate your enterprise
                data into the fold of these models, providing the base for
                long-term strategic differentiation.
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

        {/* AI Providers Section */}
        <div className="mt-20 lg:mt-32">
          <div className="text-center mb-8">
            <p className="text-sm font-normal text-white uppercase tracking-[4px]">
              GENERATIVE AI PROVIDERS WE PARTNER WITH:
            </p>
          </div>

          {/* Provider Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* OpenAI */}
            <div className="flex items-center justify-center w-56 h-28 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-sm">
              <div className="text-white font-semibold text-lg">OpenAI</div>
            </div>

            {/* Adept */}
            <div className="flex items-center justify-center w-56 h-28 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-sm">
              <div className="text-white font-semibold text-lg">Adept</div>
            </div>

            {/* Meta */}
            <div className="flex items-center justify-center w-56 h-28 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-sm">
              <div className="text-white font-semibold text-lg">Meta</div>
            </div>

            {/* Cohere */}
            <div className="flex items-center justify-center w-56 h-28 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-sm">
              <div className="text-white font-semibold text-lg">Cohere</div>
            </div>

            {/* Anthropic */}
            <div className="flex items-center justify-center w-56 h-28 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-sm">
              <div className="text-white font-semibold text-lg">Anthropic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
