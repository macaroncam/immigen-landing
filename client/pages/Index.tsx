import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fdc9bec237a7c4c8db3eebedfa5bf8146%2Faad0f23363294e01a1f8e09bee89d4e3?format=webp&width=800"
          alt="Starry space background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-30">
        {/* Main Headline */}
        <h1 className="font-inter-tight font-semibold text-white leading-none tracking-tighter mb-6">
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            The first
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            end-to-end AI
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
            immigration platform
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans font-normal text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-8 max-w-4xl">
          Immigen makes immigration effortless—for bold talent and borderless teams. No lawyers, no friction, just possibility.
        </p>

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
