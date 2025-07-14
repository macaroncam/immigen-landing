import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-all duration-1500 ease-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fdc9bec237a7c4c8db3eebedfa5bf8146%2Faad0f23363294e01a1f8e09bee89d4e3?format=webp&width=800"
          alt="Starry space background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Background Elements */}
      <div
        className={`transition-all duration-2000 delay-1000 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <FloatingElements />
      </div>

      {/* Navigation */}
      <div
        className={`transition-all duration-1000 delay-300 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-30">
        {/* Main Headline */}
        <h1 className="font-inter-tight font-semibold text-white leading-none tracking-tighter mb-6">
          <span
            className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl transition-all duration-1000 delay-500 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            The First
          </span>
          <span
            className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl transition-all duration-1000 delay-700 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            End-to-End AI
          </span>
          <span
            className={`block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl transition-all duration-1000 delay-900 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Immigration Platform
          </span>
        </h1>

        {/* Subheadline */}
        <div
          className={`mb-5 max-w-4xl leading-tight transition-all duration-1000 delay-1100 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-sans font-normal text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-1">
            Immigen makes immigration effortless for bold talent and borderless
            teams.
          </p>
          <p className="font-sans font-normal text-white/90 text-sm sm:text-base md:text-lg lg:text-xl">
            No lawyers, no friction, endless possibilities.
          </p>
        </div>

        {/* CTA Button */}
        <button
          className={`flex items-center gap-2 bg-lime-accent text-black font-sans font-bold text-sm sm:text-base px-6 py-3 rounded-2xl hover:opacity-90 hover:scale-105 transition-all duration-300 ${
            isLoaded
              ? "opacity-100 translate-y-0 delay-1300"
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDuration: "1000ms",
            transitionDelay: isLoaded ? "1300ms" : "0ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          Get Early Access
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
