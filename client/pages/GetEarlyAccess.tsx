import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import FloatingElements from "../components/landing/FloatingElements";
import PageWrapper from "../components/landing/PageWrapper";
import Button from "../components/landing/ui/Button";
import { COMPANY_NAME, TAGLINE, DEFAULT_BG_IMAGE } from "../constants/landing";

export default function GetEarlyAccess() {
  const [showFloatingElements, setShowFloatingElements] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    citizenship: "",
    cv: null as File | null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleRemoveFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData();
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("companyName", formData.companyName);
    form.append("jobTitle", formData.jobTitle);
    form.append("email", formData.email);
    form.append("citizenship", formData.citizenship);
    if (formData.cv) {
      form.append("cv", formData.cv);
    }

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        body: form,
      });
      if (res.ok) {
        alert("Thank you! Your submission has been received.");
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          jobTitle: "",
          email: "",
          citizenship: "",
          cv: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        const data = await res.json();
        alert(data.error || "There was an error submitting your form. Please try again.");
      }
    } catch (err) {
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={DEFAULT_BG_IMAGE}
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
                        {TAGLINE}
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
                            ref={fileInputRef}
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
                              <div className="mt-2 text-sm text-lime-accent font-sans flex items-center gap-2">
                                Selected: {formData.cv.name}
                                <Button type="button" onClick={handleRemoveFile} className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs">Select another</Button>
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
                      <Button type="submit" disabled={!formData.cv}>Submit</Button>
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
                        Live Petition Sandbox
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-lime-accent to-green-400 mx-auto rounded-full"></div>
                      <p className="font-sans text-lg font-medium text-lime-accent/80 tracking-wide">
                        Test your case. Visualize your immigration journey.
                      </p>
                      <p className="font-sans text-base text-white/70 leading-relaxed max-w-sm mx-auto">
                        Register for early access to see a live preview of your petition
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
