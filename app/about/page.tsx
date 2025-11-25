'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const { t } = useLanguage();

  const achievements = [
    { number: '50,000+', label: t('about.staffTrained'), icon: '👥' },
    { number: '150+', label: t('about.activeCourses'), icon: '📚' },
    { number: '25', label: t('about.campusArea'), icon: '🏛️' },
    { number: '40+', label: 'Years of Excellence', icon: '⭐' },
  ];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#062D5C] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V4h4V2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <nav className="text-sm mb-6 text-[#93AEB9]">
              <a href="/" className="hover:text-white transition">{t('nav.home')}</a>
              <span className="mx-2">/</span>
              <span>{t('about.title')}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-[#93AEB9] leading-relaxed mb-8">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-[#93AEB9] leading-relaxed">
              WAPDA Administrative Staff College (WASC) is a premier training institution dedicated to building leadership and operational excellence. We provide comprehensive, transformative training programs that enhance the professional capabilities of administrative staff from WAPDA and its affiliated organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#e8f4fa] to-[#FBFAF7] rounded-xl p-6 lg:p-8 text-center border-l-4 border-[#0E8ACA] hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="w-20 h-20 bg-[#e8f4fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl lg:text-5xl">{achievement.icon}</span>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#062D5C] mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm lg:text-base text-[#5D6A62] font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Image Gallery Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#062D5C] mb-4">Our Campus</h2>
            <p className="text-lg text-[#5D6A62] max-w-2xl mx-auto">
              Explore our state-of-the-art facilities and beautiful campus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/p1.jpg', '/p2.jpg', '/p3.jpg', '/p4.jpg', '/p5.jpg', '/p6.jpg'].map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
              >
                <Image
                  src={image}
                  alt={`WASC Campus ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 lg:py-20 bg-[#FBFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#062D5C] mb-4">{t('about.departments')}</h2>
              <p className="text-lg text-[#5D6A62] max-w-2xl">
                Comprehensive training programs across multiple departments to meet diverse professional development needs
              </p>
            </div>
            <Link
              href="/faculty"
              className="mt-4 lg:mt-0 px-6 py-3 bg-[#0E8ACA] text-white rounded-lg hover:bg-[#062D5C] font-semibold transition shadow-md hover:shadow-lg"
            >
              {t('about.viewAll')}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: 'Administration & HR', icon: '👥', color: 'from-[#0E8ACA] to-[#062D5C]' },
              { name: 'IT', icon: '💻', color: 'from-[#0E8ACA] to-[#062D5C]' },
              { name: 'Media', icon: '📺', color: 'from-[#0E8ACA] to-[#062D5C]' },
              { name: 'Accounts', icon: '💰', color: 'from-[#0E8ACA] to-[#062D5C]' },
            ].map((dept, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-[#93AEB9]"
              >
                <div className={`w-16 h-16 bg-[#e8f4fa] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl">{dept.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#062D5C] mb-2">{dept.name}</h3>
                <p className="text-[#5D6A62]">
                  Comprehensive training programs in {dept.name.toLowerCase()} management and operations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <FeedbackForm />

      <Footer />
    </div>
  );
}
