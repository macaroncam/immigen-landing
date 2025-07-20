import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import backgroundImage from 'figma:asset/cfba8fcaa043fe0ace4bfca5fff0a702be3e56f0.png';

interface LoginPageProps {
  onBackToLanding: () => void;
  onGetEarlyAccess: () => void;
  onNavigatePricing: () => void;
  onNavigateAbout: () => void;
  onNavigateCustomers: () => void;
}

export const LoginPage = ({ 
  onBackToLanding, 
  onGetEarlyAccess,
  onNavigatePricing,
  onNavigateAbout,
  onNavigateCustomers 
}: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    // Placeholder for Google OAuth integration
    console.log('Google login clicked');
  };

  const handleLinkedInLogin = () => {
    // Placeholder for LinkedIn OAuth integration
    console.log('LinkedIn login clicked');
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email login
    console.log('Email login:', { email, password });
  };

  return (
    <div className="min-h-screen relative bg-white">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={onBackToLanding}
            className="cursor-pointer"
          >
            <span className="text-2xl font-bold tracking-wider font-mono">
              <span className="text-gray-800">IMMI</span>
              <span className="text-lime-500 tech-flash relative">
                GEN.AI
                <span className="absolute -top-1 -right-1 text-sm text-lime-500/80">β</span>
              </span>
            </span>
          </motion.div>
          
          {/* Sign up link */}
          <div className="text-gray-700">
            Don't have an account?{' '}
            <button 
              onClick={onGetEarlyAccess}
              className="text-gray-800 hover:text-lime-500 transition-colors font-semibold"
            >
              Sign up <ArrowRight className="inline w-5 h-5 ml-1" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-16 left-8 w-16 h-16 bg-gradient-to-br from-lime-400/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-32 right-16 w-24 h-24 bg-gradient-to-bl from-cyan-400/15 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-tr from-purple-400/15 to-transparent rounded-full blur-xl"></div>

        {/* Main Content */}
        <div className="flex items-center justify-center px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-md space-y-4"
          >
            {/* Welcome Title */}
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl font-bold text-gray-800 mb-2"
              >
                Welcome back
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-600 text-base"
              >
                Sign in to continue your immigration journey
              </motion.p>
            </div>
            
            {/* Social Login Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-3"
            >
              <Button
                onClick={handleGoogleLogin}
                className="w-full bg-white/95 backdrop-blur-md hover:bg-white text-gray-800 font-semibold py-3 h-12 rounded-xl border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-lime-400/50"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC04" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              <Button
                onClick={handleLinkedInLogin}
                className="w-full bg-gray-900/95 backdrop-blur-md hover:bg-gray-800 text-white font-semibold py-3 h-12 rounded-xl border border-gray-600/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-lime-400/50"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Continue with LinkedIn
              </Button>
            </motion.div>
            
            {/* Divider */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/90 backdrop-blur-md rounded-full text-gray-700 font-medium py-1 shadow-lg border border-gray-200 text-sm">or continue with email</span>
              </div>
            </motion.div>
            
            {/* Email Form */}
            <motion.form 
              onSubmit={handleEmailLogin} 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-800 font-semibold">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 pr-4 py-3 h-12 bg-white/95 backdrop-blur-md border-2 border-white/50 rounded-xl focus:border-lime-400 focus:ring-lime-400/30 text-gray-800 placeholder:text-gray-500 font-medium shadow-lg focus:shadow-xl transition-all duration-300 hover:border-white/70"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-800 font-semibold">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 py-3 h-12 bg-white/95 backdrop-blur-md border-2 border-white/50 rounded-xl focus:border-lime-400 focus:ring-lime-400/30 text-gray-800 placeholder:text-gray-500 font-medium shadow-lg focus:shadow-xl transition-all duration-300 hover:border-white/70"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-800 transition-colors font-medium text-sm"
                >
                  Forgot your password?
                </button>
              </div>
              
              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black font-bold py-3 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-lime-300/50"
              >
                Sign in to your account
              </Button>
            </motion.form>

            {/* Subtle footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center text-gray-500 text-sm"
            >
              Secure login powered by advanced encryption
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};