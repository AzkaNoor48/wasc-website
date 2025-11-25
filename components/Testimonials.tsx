'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Muhammad Ali",
      position: "Administrative Officer, LESCO",
      content: "The training programs at WASC have been transformative. The practical approach and experienced faculty helped me develop leadership skills that I apply daily in my role.",
      rating: 5,
      image: '/t1.jpg'
    },
    {
      name: "Fatima Khan",
      position: "HR Manager, NTDC",
      content: "Excellent facilities and comprehensive curriculum. The hostel and mess facilities are top-notch, making the learning experience comfortable and productive.",
      rating: 5,
      image: '/t2.jpg'
    },
    {
      name: "Ahmed Hassan",
      position: "IT Specialist, PESCO",
      content: "The IT courses provided cutting-edge knowledge that directly improved my work performance. The hands-on training in the labs was particularly valuable.",
      rating: 5,
      image: '/t3.jpg'
    },
    {
      name: "Sara Malik",
      position: "Finance Officer, GEPCO",
      content: "Professional development at its best. The finance and administration courses are well-structured and taught by industry experts. Highly recommended!",
      rating: 5,
      image: '/t4.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#e8f4fa] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Testimonial Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#E6B950]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 mb-4 italic text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Form Section */}
        <div className="mt-16 bg-gradient-to-br from-[#e8f4fa] to-[#f4d99a] rounded-lg p-8 border-2 border-[#93AEB9]">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t('testimonials.feedback')}
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('testimonials.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder={t('testimonials.name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('testimonials.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder={t('testimonials.email')}
                />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('testimonials.feedbackText')}
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder={t('testimonials.feedbackText')}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#0E8ACA] text-white rounded-md hover:bg-[#0a6fa0] font-semibold transition shadow-md hover:shadow-lg"
                >
                  {t('testimonials.submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

