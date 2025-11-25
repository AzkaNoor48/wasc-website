'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

// Logo component with fallback
function LogoImage() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Fallback logo
    return (
      <div className="w-full h-full bg-[#062D5C] rounded-full flex items-center justify-center border-2 border-[#E6B950]">
        <span className="text-white font-bold text-3xl lg:text-4xl">W</span>
      </div>
    );
  }

  return (
    <Image
      src="/logo.jpg"
      alt="WASC Logo"
      width={96}
      height={96}
      className="object-contain w-full h-full"
      onError={() => setImgError(true)}
      priority
    />
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Check if logo exists, fallback to placeholder
  const logoExists = (path: string) => {
    // This will be handled by Next.js Image component
    return true;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-[#93AEB9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 hover:opacity-90 transition">
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center flex-shrink-0">
              {/* Try to load logo, fallback to placeholder */}
              <LogoImage />
            </div>
            <div className="hidden sm:block">
              <p className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                WAPDA Administrative Staff College
              </p>
              <p className="text-xl lg:text-2xl text-gray-700 font-medium">(WASC)</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              href="/"
              className="px-5 py-3 text-2xl font-semibold text-gray-800 hover:text-[#0E8ACA] hover:bg-[#e8f4fa] rounded-md transition-colors duration-200"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/about"
              className="px-5 py-3 text-2xl font-semibold text-gray-800 hover:text-[#0E8ACA] hover:bg-[#e8f4fa] rounded-md transition-colors duration-200"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/courses"
              className="px-5 py-3 text-2xl font-semibold text-gray-800 hover:text-[#0E8ACA] hover:bg-[#e8f4fa] rounded-md transition-colors duration-200"
            >
              {t('nav.courses')}
            </Link>
            <Link
              href="/faculty"
              className="px-5 py-3 text-2xl font-semibold text-gray-800 hover:text-[#0E8ACA] hover:bg-[#e8f4fa] rounded-md transition-colors duration-200"
            >
              {t('nav.faculty')}
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 text-2xl font-semibold text-gray-800 hover:text-[#0E8ACA] hover:bg-[#e8f4fa] rounded-md transition-colors duration-200"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Search and Language Switcher */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="p-2.5 text-gray-700 hover:text-[#0E8ACA] hover:bg-[#e8f4fa] transition rounded-md"
              aria-label="Search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <LanguageSwitcher />
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <Link
              href="/"
              className="px-4 py-2 text-xl font-semibold text-gray-800 hover:text-[#0E8ACA] transition"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-xl font-semibold text-gray-800 hover:text-[#0E8ACA] transition"
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/courses"
              className="px-4 py-2 text-xl font-semibold text-gray-800 hover:text-[#0E8ACA] transition"
            >
              {t('nav.courses')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-md transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden lg:hidden pb-6 pt-4 space-y-1 border-t border-gray-200">
            <Link
              href="/"
              className="block px-4 py-3.5 text-2xl font-semibold text-gray-800 hover:bg-[#e8f4fa] hover:text-[#0E8ACA] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3.5 text-2xl font-semibold text-gray-800 hover:bg-[#e8f4fa] hover:text-[#0E8ACA] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-3.5 text-2xl font-semibold text-gray-800 hover:bg-[#e8f4fa] hover:text-[#0E8ACA] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.courses')}
            </Link>
            <Link
              href="/faculty"
              className="block px-4 py-3.5 text-2xl font-semibold text-gray-800 hover:bg-[#e8f4fa] hover:text-[#0E8ACA] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.faculty')}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3.5 text-2xl font-semibold text-gray-800 hover:bg-[#e8f4fa] hover:text-[#0E8ACA] rounded-md transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 mt-2">
              <span className="text-2xl font-semibold text-gray-700">Language:</span>
              <LanguageSwitcher />
            </div>
            <div className="px-4 py-2 flex items-center justify-center">
              <button className="p-2 text-gray-700 hover:bg-[#e8f4fa] rounded-md">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

