import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-20 border-b border-white/30">
      <div className="flex items-center justify-between h-[90px] max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full -mt-5">
          <div className="font-zen-tokyo text-5xl sm:text-6xl lg:text-6xl leading-none">
            <span className="text-white">immi</span>
            <span className="text-lime-accent">gen.ai</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className="text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
          >
            Product
          </a>
          <a
            href="#"
            className="text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="flex items-center gap-2 bg-lime-accent text-black font-instrument font-bold text-sm px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity">
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
          <a
            href="#"
            className="text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
          >
            Log In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-nav-text/20">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#"
              className="block text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
            >
              Customers
            </a>
            <a
              href="#"
              className="block text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="block text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="block text-nav-text font-instrument font-bold text-sm hover:text-white transition-colors"
            >
              Log In
            </a>
            <button className="flex items-center gap-2 bg-lime-accent text-black font-instrument font-bold text-sm px-6 py-3 rounded-2xl hover:opacity-90 transition-opacity mt-4">
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
      )}
    </nav>
  );
}
