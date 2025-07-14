import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FloatingElements from "../components/FloatingElements";
import PageWrapper from "../components/PageWrapper";

export default function GetEarlyAccess() {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    citizenship: "",
    cv: null as File | null,
  });

  useEffect(() => {
    // Delay FloatingElements rendering to prevent initial lag
    const timer = setTimeout(() => {
      setShowFloatingElements(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

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
        {showFloatingElements && <FloatingElements />}

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-20 pt-48 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
              {/* Form Section */}
              <div className="order-2 xl:order-1">
                <div className="relative bg-transparent rounded-3xl p-8 lg:p-12">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white via-lime-accent to-white opacity-30 p-[1px]">
                    <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-3xl"></div>
                  </div>
                  <div className="relative z-10">
                    {/* Form Header */}
                    <div className="text-center mb-8">
                      <h1 className="font-sans text-3xl lg:text-4xl font-bold text-white mb-4">
                        Let's get you approved.
                      </h1>
                      <p className="font-sans font-medium text-lg text-white/80 leading-relaxed max-w-md mx-auto mb-20">
                        Join self-starters & global firms in pioneering the
                        immigration revolution with Immigen. Reserve your spot
                        on our early access list today.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-sans text-nav-text/50 mb-3">
                            First name*
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-transparent border border-lime-accent/30 rounded-lg text-white placeholder-nav-text/50 focus:border-lime-accent focus:outline-none transition-colors font-sans"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-sans text-nav-text/50 mb-3">
                            Last name*
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-transparent border border-lime-accent/30 rounded-lg text-white placeholder-nav-text/50 focus:border-lime-accent focus:outline-none transition-colors font-sans"
                            required
                          />
                        </div>
                      </div>

                      {/* Company & Job Title */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-sans text-nav-text/50 mb-3">
                            Company name*
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-transparent border border-lime-accent/30 rounded-lg text-white placeholder-nav-text/50 focus:border-lime-accent focus:outline-none transition-colors font-sans"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-sans text-nav-text/50 mb-3">
                            Job title*
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-transparent border border-lime-accent/30 rounded-lg text-white placeholder-nav-text/50 focus:border-lime-accent focus:outline-none transition-colors font-sans"
                            required
                          />
                        </div>
                      </div>

                      {/* Email & Citizenship */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-sans text-nav-text/50 mb-3">
                            Email address*
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-transparent border border-lime-accent/30 rounded-lg text-white placeholder-nav-text/50 focus:border-lime-accent focus:outline-none transition-colors font-sans"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-sans text-nav-text/50 mb-3">
                            Country of Citizenship*
                          </label>
                          <input
                            type="text"
                            name="citizenship"
                            value={formData.citizenship}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-transparent border border-lime-accent/30 rounded-lg text-white placeholder-nav-text/50 focus:border-lime-accent focus:outline-none transition-colors font-sans"
                            required
                          />
                        </div>
                      </div>

                      {/* CV Upload */}
                      <div>
                        <label className="block text-sm font-sans text-nav-text/50 mb-3">
                          Upload your CV (PDF only)
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="border border-lime-accent/30 rounded-lg p-8 text-center hover:border-lime-accent/50 transition-colors">
                            <svg
                              className="w-8 h-8 mx-auto mb-4 text-lime-accent"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <div className="text-white/70 mb-1 font-sans">
                              <span>Drop your CV here or </span>
                              <span className="text-lime-accent">
                                browse files
                              </span>
                            </div>
                            <div className="text-sm text-nav-text/50 font-sans">
                              PDF files only, max 10MB
                            </div>
                            {formData.cv && (
                              <div className="mt-2 text-sm text-lime-accent font-sans">
                                Selected: {formData.cv.name}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Privacy Notice */}
                      <div className="text-sm text-nav-text/70 leading-relaxed font-sans">
                        By submitting this form, your information will be
                        processed in accordance with our Privacy Policy.
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-lime-accent text-black font-sans font-bold text-base px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                      >
                        Submit
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
                  </div>
                </div>
              </div>

              {/* Live Petition Preview Section */}
              <div className="order-1 xl:order-2">
                <div className="relative bg-transparent rounded-3xl p-8 lg:p-12 h-full flex flex-col items-center justify-center text-center">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white via-lime-accent to-white opacity-30 p-[1px]">
                    <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-3xl"></div>
                  </div>
                  <div className="relative z-10 space-y-8">
                    {/* Enhanced Icon with glow effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-lime-accent/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-lime-accent/20 to-green-500/20 p-6 rounded-2xl border border-lime-accent/30">
                        <svg
                          className="w-16 h-16 text-lime-accent mx-auto"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content with improved typography */}
                    <div className="space-y-6">
                      <h2 className="font-sans text-3xl font-bold text-white leading-tight">
                        Live Petition Preview
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-lime-accent to-green-400 mx-auto rounded-full"></div>
                      <p className="font-sans text-lg font-medium text-lime-accent/80 tracking-wide">
                        See your profile transformed in real time
                      </p>
                      <p className="font-sans text-base text-white/70 leading-relaxed max-w-sm mx-auto">
                        Submit your form to see a live preview of your petition
                        optimized by our AI system
                      </p>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-white/50">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="font-sans">
                        Waiting for form submission
                      </span>
                    </div>

                    {/* Preview placeholder */}
                    <div className="mt-8 p-4 border border-dashed border-white/20 rounded-xl bg-white/5">
                      <div className="space-y-2">
                        <div className="h-2 bg-white/10 rounded animate-pulse"></div>
                        <div className="h-2 bg-white/10 rounded animate-pulse w-3/4"></div>
                        <div className="h-2 bg-white/10 rounded animate-pulse w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
