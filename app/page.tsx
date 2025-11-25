'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = ['/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg', '/p5.jpg', '/p6.jpg'];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-off-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#062D5C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl mb-8 text-[#93AEB9]">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#E6B950] text-gray-900 rounded-md hover:bg-[#d4a842] font-semibold transition shadow-lg">
                  {t('hero.apply')}
                </button>
                <button className="px-6 py-3 bg-[#0E8ACA] text-white rounded-md hover:bg-[#0a6fa0] font-semibold transition border-2 border-white/30">
                  {t('hero.download')}
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-white/20">
                  <Image
                    src={heroImages[currentImageIndex]}
                    alt={`WASC Campus ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority={currentImageIndex === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevImage}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <span className="text-sm text-[#93AEB9]">Life at WASC</span>
                  <button
                    onClick={nextImage}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                {/* Image indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all ${index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WASC at a Glance */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">{t('glance.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: t('glance.hostel'), image: '/t9.jpg' },
              { name: t('glance.mess'), image: '/t48.jpg' },
              { name: t('glance.library'), image: '/t5.jpg' },
              { name: t('glance.seminar'), image: '/p4.jpg' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News and Upcoming Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latest News */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{t('news.title')}</h2>
                <a href="#" className="text-[#0E8ACA] hover:text-[#0a6fa0] font-medium">{t('news.viewAll')}</a>
              </div>
              <div className="space-y-6">
                {[t('news.courses'), t('news.programs'), t('news.news')].map((category, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{category}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600">New {category.toLowerCase()} announcement...</p>
                      <span className="text-sm text-gray-500">Dec 15, 2024</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Courses and Notices */}
            <div className="space-y-8">
              {/* Upcoming Courses */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('upcoming.title')}</h2>
                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                  <p className="text-gray-700 mb-2">Advanced Administrative Management</p>
                  <p className="text-sm text-gray-600">Starting: January 2025</p>
                </div>
                <button className="w-full px-4 py-2 bg-[#0E8ACA] text-white rounded-md hover:bg-[#0a6fa0] transition shadow-md font-medium">
                  {t('upcoming.viewAll')}
                </button>
              </div>

              {/* Important Notices */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('notices.title')}</h2>
                <div className="bg-[#f4d99a] rounded-lg p-4 mb-4 border border-[#E6B950]">
                  <p className="text-gray-700">Registration deadline extended for Q1 2025 courses</p>
                </div>
                <button className="w-full px-4 py-2 bg-[#0E8ACA] text-white rounded-md hover:bg-[#0a6fa0] transition shadow-md font-medium">
                  {t('notices.viewAll')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliated Organisations */}
      <section className="py-16 bg-[#062D5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('affiliated.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['NTDC', 'LESCO', 'NESCO', 'PESCO', 'GEPCO'].map((org, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#e8f4fa] to-[#FBFAF7] rounded-xl p-6 lg:p-8 text-center border-l-4 border-[#0E8ACA] hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-[#f4d99a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#062D5C] font-bold text-xl">{org[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-[#062D5C] mb-2">{org}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
