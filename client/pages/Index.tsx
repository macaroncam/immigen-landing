import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";
import PageWrapper from "../components/PageWrapper";

export default function Index() {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset FloatingElements state on route change
    setShowFloatingElements(false);

    // Delay FloatingElements rendering to prevent initial lag
    const timer = setTimeout(() => {
      setShowFloatingElements(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <PageWrapper>
      <div className="min-h-screen relative overflow-hidden">
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

        {/* Floating Background Elements */}
        {showFloatingElements && (
          <FloatingElements key={`floating-${location.pathname}`} />
        )}

        {/* Navigation */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-20 text-center pt-30 overflow-visible">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center">
            {/* Main Headline */}
            <h1 className="font-sans font-bold leading-relaxed tracking-tighter mb-3 py-4 overflow-visible">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl animate-gradient-shift pb-4">
                The First
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl animate-gradient-shift pb-4">
                End-to-End AI
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl animate-gradient-shift pb-4">
                Immigration Agent
              </span>
            </h1>

            {/* Subheadline */}
            <div className="mb-5 max-w-4xl leading-tight">
              <p className="font-sans font-medium text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-1">
                Immigen makes immigration effortless for bold talent and
                borderless teams.
              </p>
              <p className="font-sans font-medium text-white/90 text-sm sm:text-base md:text-lg lg:text-xl">
                No lawyers, no friction, endless possibilities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link
                to="/get-early-access"
                className="flex items-center gap-2 bg-lime-accent text-black font-sans font-bold text-sm sm:text-base px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity"
              >
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
              </Link>

              <button className="relative flex items-center gap-2 bg-transparent text-white font-sans font-bold text-sm sm:text-base px-6 py-3 rounded-2xl hover:bg-white/5 transition-all duration-300 overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white via-lime-accent to-white opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-[1px] rounded-2xl bg-black/80 backdrop-blur-sm"></div>
                <span className="relative z-10">See How it Works</span>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 relative z-10"
                >
                  <path
                    d="M8 1L15 8L8 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
