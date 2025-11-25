'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FeedbackForm() {
  const { t } = useLanguage();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.feedback) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', feedback: '' });
      setTimeout(() => setShowSuccess(false), 4000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#e8f4fa] relative">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md mx-4 shadow-2xl transform animate-pulse">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#062D5C] mb-2">Thank You!</h3>
              <p className="text-[#5D6A62] mb-6">Your feedback has been submitted successfully. We appreciate your valuable input!</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-2 bg-[#0E8ACA] text-white rounded-md hover:bg-[#062D5C] font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#e8f4fa] to-[#f4d99a] rounded-lg p-8 border-2 border-[#93AEB9]">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t('testimonials.feedback')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('testimonials.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder={t('testimonials.name')}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('testimonials.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder={t('testimonials.email')}
                  required
                />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('testimonials.feedbackText')}
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder={t('testimonials.feedbackText')}
                  required
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
