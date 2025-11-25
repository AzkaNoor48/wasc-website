'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Vision() {
  const { t } = useLanguage();

  const coreValues = [
    {
      title: 'Excellence',
      description: 'Committed to delivering world-class training programs that exceed expectations and drive professional growth.',
      icon: '🎯',
    },
    {
      title: 'Innovation',
      description: 'Continuously evolving our curriculum and methodologies to stay at the forefront of administrative education.',
      icon: '💡',
    },
    {
      title: 'Integrity',
      description: 'Upholding the highest standards of ethics, transparency, and professionalism in all our endeavors.',
      icon: '🤝',
    },
    {
      title: 'Impact',
      description: 'Empowering professionals to make meaningful contributions to their organizations and communities.',
      icon: '🚀',
    },
  ];

  const timeline = [
    {
      year: '1980',
      title: 'Foundation',
      description: 'WASC was established to provide specialized training for WAPDA administrative staff.',
    },
    {
      year: '1995',
      title: 'Expansion',
      description: 'Extended programs to include affiliated organizations and introduced long-term courses.',
    },
    {
      year: '2010',
      title: 'Modernization',
      description: 'Upgraded facilities and introduced digital learning platforms and modern training methodologies.',
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Recognized as a premier training institution with over 50,000 professionals trained.',
    },
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
              <span>Vision & Mission</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Vision & Mission
            </h1>
            <p className="text-xl md:text-2xl text-[#93AEB9] leading-relaxed">
              Our guiding principles and commitment to excellence in administrative training
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-20 bg-[#FBFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg border-t-4 border-[#0E8ACA]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#e8f4fa] rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">👁️</span>
                </div>
                <h2 className="text-3xl font-bold text-[#062D5C]">{t('about.vision')}</h2>
              </div>
              <p className="text-lg text-[#5D6A62] leading-relaxed">
                To be the premier institution for administrative excellence, empowering WAPDA and its affiliated organizations with world-class training and development programs that foster leadership, innovation, and operational efficiency.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 lg:p-10 shadow-lg border-t-4 border-[#0E8ACA]">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#e8f4fa] rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-[#062D5C]">{t('about.mission')}</h2>
              </div>
              <p className="text-lg text-[#5D6A62] leading-relaxed mb-4">
                Our mission is to provide comprehensive, transformative training programs that enhance the professional capabilities of administrative staff through:
              </p>
              <ul className="space-y-3">
                {[
                  'Cutting-edge curriculum designed for real-world application',
                  'Experienced faculty with industry expertise',
                  'State-of-the-art facilities and learning environments',
                  'Continuous improvement and adaptation to evolving needs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#0E8ACA] mr-3 mt-1 font-bold">✓</span>
                    <span className="text-[#5D6A62]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#062D5C] mb-4">Our Core Values</h2>
            <p className="text-lg text-[#5D6A62] max-w-2xl mx-auto">
              The principles that guide our commitment to excellence and shape our approach to training and development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#e8f4fa] to-[#FBFAF7] rounded-xl p-6 lg:p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-[#93AEB9]"
              >
                <div className="w-16 h-16 bg-[#e8f4fa] rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#062D5C] mb-3">{value.title}</h3>
                <p className="text-[#5D6A62] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-20 bg-[#062D5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-[#93AEB9] max-w-2xl mx-auto">
              A timeline of milestones that have shaped WASC into the premier training institution it is today
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0E8ACA] to-[#E6B950]"></div>

            <div className="space-y-12 lg:space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  <div className="lg:w-1/2 lg:px-8 mb-6 lg:mb-0">
                    <div className="bg-gradient-to-br from-[#e8f4fa] to-[#FBFAF7] rounded-xl p-6 lg:p-8 border-l-4 border-[#0E8ACA] hover:shadow-lg transition-all transform hover:-translate-y-1">
                      <div className="w-16 h-16 bg-[#f4d99a] rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-[#062D5C] font-bold text-lg">{item.year}</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#062D5C] mb-3">{item.title}</h3>
                      <p className="text-[#5D6A62] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <div className="w-4 h-4 bg-[#E6B950] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

