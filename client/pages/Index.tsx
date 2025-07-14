import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/starry-background.gif"
          alt="Starry space background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-30 overflow-visible">
        {/* Main Headline */}
        <h1 className="font-inter-tight font-semibold leading-relaxed tracking-tighter mb-3 py-4 overflow-visible">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl animate-gradient-shift pb-4">
            The First
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl animate-gradient-shift pb-4">
            End-to-End AI
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl animate-gradient-shift pb-4">
            Immigration Platform
          </span>
        </h1>

        {/* Subheadline */}
        <div className="mb-5 max-w-4xl leading-tight">
          <p className="mt-4 mb-6 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:mb-[22px] lg:text-lg md:w-12/13 lg:max-w-xl text-center mx-auto text-balance">
            Immigen makes immigration effortless for bold talent and borderless
            teams. No lawyers, no friction, endless possibilities.
          </p>
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-lime-accent text-black font-sans font-bold text-sm sm:text-base px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity">
          Get Early Access
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM0 8V9H18V8V7H0V8Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
