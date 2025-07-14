import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";
import PageWrapper from "../components/PageWrapper";

export default function Login() {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect(() => {
    // Reset FloatingElements state on route change
    setShowFloatingElements(false);

    // Delay FloatingElements rendering to prevent initial lag
    const timer = setTimeout(() => {
      setShowFloatingElements(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password login
    console.log("Login submitted:", formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google OAuth login
    console.log("Google login clicked");
    // In a real app, you'd integrate with Google OAuth
  };

  const handleLinkedInLogin = () => {
    // Handle LinkedIn OAuth login
    console.log("LinkedIn login clicked");
    // In a real app, you'd integrate with LinkedIn OAuth
  };

  return (
    <PageWrapper>
      <div className="min-h-screen relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 via-blue-500/5 to-cyan-400/5"></div>

        {/* Floating Background Elements */}
        {showFloatingElements && (
          <FloatingElements key={`floating-${location.pathname}`} />
        )}

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-20 pt-48 pb-16">
          <div className="max-w-xl mx-auto">
            {/* Login Form */}
            <div className="relative bg-transparent rounded-3xl p-12 lg:p-16">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white via-lime-accent to-white opacity-30 p-[1px]">
                <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-3xl"></div>
              </div>
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                  <h1 className="font-sans text-4xl lg:text-5xl font-bold text-white mb-6">
                    Welcome back
                  </h1>
                  <p className="font-sans font-medium text-xl text-white/80 leading-relaxed max-w-lg mx-auto">
                    Sign in to your account to continue your immigration journey
                  </p>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-6 mb-12">
                  {/* Google Login */}
                  <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl px-8 py-5 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="font-sans font-medium text-white group-hover:text-white/90">
                      Continue with Google
                    </span>
                  </button>

                  {/* LinkedIn Login */}
                  <button
                    onClick={handleLinkedInLogin}
                    className="w-full flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl px-8 py-5 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="font-sans font-medium text-white group-hover:text-white/90">
                      Continue with LinkedIn
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-12">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-base">
                    <span className="bg-black/80 px-6 text-white/60 font-sans">
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Email Field */}
                  <div>
                    <label className="block text-base font-sans text-white/70 mb-4">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-transparent border border-lime-accent/30 rounded-xl text-white placeholder-white/50 focus:border-lime-accent focus:outline-none transition-colors font-sans text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-base font-sans text-white/70 mb-4">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-transparent border border-lime-accent/30 rounded-xl text-white placeholder-white/50 focus:border-lime-accent focus:outline-none transition-colors font-sans text-base"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between py-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-lime-accent bg-transparent border border-white/30 rounded focus:ring-lime-accent focus:ring-2"
                      />
                      <span className="ml-3 text-base font-sans text-white/70">
                        Remember me
                      </span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-base font-sans text-lime-accent hover:text-lime-accent/80 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Sign In Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-lime-accent text-black font-sans font-bold text-lg px-8 py-5 rounded-xl hover:opacity-90 transition-opacity mt-8"
                  >
                    Sign In
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
                </form>

                {/* Sign Up Link */}
                <div className="text-center mt-12">
                  <p className="text-base font-sans text-white/60">
                    Don't have an account?{" "}
                    <Link
                      to="/get-early-access"
                      className="text-lime-accent hover:text-lime-accent/80 transition-colors font-medium"
                    >
                      Sign up for early access
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
