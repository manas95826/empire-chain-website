"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pepyTechUrl = "https://pepy.tech/projects/empire-chain";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/empire-chain-logo.png"
              alt="Empire Chain Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                target.src = '/empire-chain-logo.png'
              }}
            />
            <span className="ml-2 text-xl font-semibold text-[#111827]">Empire Chain</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              <Link 
                href="http://manas95826.github.io/empire-chain" 
                className="text-[#4B5563] hover:text-[#111827] transition font-medium"
                target="_blank"
              >
                Docs
              </Link>
              <Link 
                href="https://github.com/manas95826/empire-chain#features" 
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link 
                href={pepyTechUrl}
                className="flex items-center text-gray-600 hover:text-gray-900 gap-2"
                target="_blank"
              >
                <Image
                  src="/github.png"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Downloads</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded-full text-sm">14k</span>
              </Link>
            </div>
          </div>

          {/* Get Started Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Link
              href="https://github.com/manas95826/empire-chain"
              target="_blank"
              className="get-started-btn px-6 py-2 rounded-full bg-gradient-to-r from-[#111827] to-[#1f2937] text-white font-medium 
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1f2937] before:to-[#111827] 
              before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 
              relative overflow-hidden"
            >
              <span className="relative z-10">🚀 Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 mobile-menu">
                <Link
                  href="http://manas95826.github.io/empire-chain"
                  className="mobile-menu-item block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-300 border-l-4 border-transparent hover:border-[#111827] hover:pl-6"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    Docs
                  </span>
                </Link>
                <Link 
                  href="https://github.com/manas95826/empire-chain#features" 
                  className="mobile-menu-item block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-300 border-l-4 border-transparent hover:border-[#111827] hover:pl-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">✨</span>
                    Features
                  </span>
                </Link>
                <Link 
                  href={pepyTechUrl}
                  className="mobile-menu-item block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-all duration-300 border-l-4 border-transparent hover:border-[#111827] hover:pl-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <Image
                      src="/github.png"
                      alt="GitHub"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span>Downloads</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs ml-auto">14k</span>
                  </span>
                </Link>
                
                {/* Get Started Button in mobile menu */}
                <Link
                  href="https://github.com/manas95826/empire-chain"
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-menu-item block mx-2 mt-2 px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#111827] to-[#1f2937] rounded-md hover:from-[#1f2937] hover:to-[#111827] transition-all duration-300 transform hover:scale-[0.98] hover:shadow-inner"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-lg">🚀</span>
                    Get Started
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 