import { useState } from "react";

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<
    "free" | "individual" | "enterprise"
  >("individual");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <div id="pricing" className="relative min-h-screen overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="font-sans text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
            Get started for Free. Upgrade to increase limits.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`font-sans text-sm ${billingCycle === "monthly" ? "text-white" : "text-white/60"}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly",
                )
              }
              className="relative w-12 h-6 bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-lime-accent focus:ring-offset-2 focus:ring-offset-black"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  billingCycle === "yearly" ? "transform translate-x-6" : ""
                }`}
              />
            </button>
            <span
              className={`font-sans text-sm ${billingCycle === "yearly" ? "text-white" : "text-white/60"}`}
            >
              Yearly
              <span className="ml-1 px-2 py-0.5 bg-lime-accent/20 text-lime-accent text-xs rounded">
                -25%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Free Plan */}
          <div
            className={`cursor-pointer transition-all duration-300 rounded-xl p-8 ${
              selectedPlan === "free"
                ? "bg-white/10 border-2 border-white/30 scale-105"
                : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
            onClick={() => setSelectedPlan("free")}
          >
            <div className="mb-8">
              <h3 className="font-sans text-2xl font-bold text-white mb-2">
                Free
              </h3>
              <div className="font-sans text-5xl font-bold text-white mb-2">
                $0
              </div>
              <p className="font-sans text-sm text-white/60 mb-6">
                per month, no credit card required
              </p>
              <button
                className={`w-full font-sans font-medium py-3 px-4 rounded-lg transition-all ${
                  selectedPlan === "free"
                    ? "bg-lime-accent text-black hover:bg-lime-accent/90"
                    : "bg-transparent border border-white/30 text-white hover:bg-white/5"
                }`}
              >
                Download True IDE
              </button>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-sans text-sm font-medium text-white/60 mb-4 text-center">
                what you will get
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>10 Fast requests</strong> and{" "}
                    <strong>50 Slow requests</strong> of Premium models / month
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>1000 Requests</strong> of Advanced models / month
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  Unlimited Standard requests
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  True IDE: Smart code completion and contextual assistance
                </li>
              </ul>
            </div>
          </div>

          {/* Individual Plan - Featured */}
          <div
            className={`cursor-pointer transition-all duration-300 rounded-xl p-8 relative ${
              selectedPlan === "individual"
                ? "bg-gradient-to-br from-red-600/20 to-orange-600/20 border-2 border-red-500/50 scale-105"
                : "bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/30 hover:bg-gradient-to-br hover:from-red-600/20 hover:to-orange-600/20 hover:border-red-500/50"
            }`}
            onClick={() => setSelectedPlan("individual")}
          >
            <div className="mb-8">
              <h3 className="font-sans text-2xl font-bold text-white mb-2">
                Individual
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="font-sans text-5xl font-bold text-white">
                  ${billingCycle === "monthly" ? "3" : "2"}
                </span>
                {billingCycle === "monthly" && (
                  <span className="ml-2 px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded">
                    1st-Month Discount
                  </span>
                )}
              </div>
              <p className="font-sans text-sm text-white/60 mb-6">
                ${billingCycle === "monthly" ? "10" : "8"} from the second
                month, billed {billingCycle}.
              </p>
              <button
                className={`w-full font-sans font-medium py-3 px-4 rounded-lg transition-all ${
                  selectedPlan === "individual"
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600"
                    : "bg-transparent border border-white/30 text-white hover:bg-white/5"
                }`}
              >
                Get started
              </button>
            </div>

            {/* Payment icons */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <div className="w-8 h-5 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div className="w-8 h-5 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AE</span>
              </div>
              <div className="w-8 h-5 bg-yellow-400 rounded flex items-center justify-center">
                <span className="text-black text-xs font-bold">D</span>
              </div>
              <div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">U</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-sans text-sm font-medium text-white/60 mb-4 text-center">
                what you will get
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>600 Fast requests</strong> and unlimited Slow
                    requests of Premium models / month
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>Unlimited Requests</strong> of Advanced models
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  Unlimited Standard requests
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  True IDE: Smart code completion and contextual assistance
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  Priority support and early access to new features
                </li>
              </ul>
            </div>
          </div>
          {/* Enterprise Plan */}
          <div
            className={`cursor-pointer transition-all duration-300 rounded-xl p-8 ${
              selectedPlan === "enterprise"
                ? "bg-white/10 border-2 border-white/30 scale-105"
                : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
            onClick={() => setSelectedPlan("enterprise")}
          >
            <div className="mb-8">
              <h3 className="font-sans text-2xl font-bold text-white mb-2">
                Enterprise
              </h3>
              <div className="font-sans text-5xl font-bold text-white mb-2">
                Custom
              </div>
              <p className="font-sans text-sm text-white/60 mb-6">
                Custom solutions for teams and organizations
              </p>
              <button
                className={`w-full font-sans font-medium py-3 px-4 rounded-lg transition-all ${
                  selectedPlan === "enterprise"
                    ? "bg-lime-accent text-black hover:bg-lime-accent/90"
                    : "bg-transparent border border-white/30 text-white hover:bg-white/5"
                }`}
              >
                Contact Sales
              </button>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="font-sans text-sm font-medium text-white/60 mb-4 text-center">
                what you will get
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>Unlimited Usage</strong> across all model tiers
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>Dedicated Support</strong> with account manager
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  <span>
                    <strong>Custom Integration</strong> and API access
                  </span>
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  Advanced security and compliance features
                </li>
                <li className="flex items-center text-sm text-white/80">
                  <span className="text-lime-accent mr-3">•</span>
                  Priority processing and dedicated infrastructure
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
