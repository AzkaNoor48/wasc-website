'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ur' | 'ar';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    'nav.faculty': 'Faculty',
    
    // Homepage
    'hero.title': 'Train to Excel',
    'hero.subtitle': 'Building leadership and operational excellence of staff from WAPDA and its affiliated bodies - through transformative training.',
    'hero.apply': 'Apply/Enroll',
    'hero.download': 'Download Prospectus',
    'hero.carousel': 'Interactive swipe buttons to view images',
    'hero.building': 'Academy Building',
    
    'glance.title': 'WASC at a Glance',
    'glance.hostel': 'Hostel',
    'glance.mess': 'Mess',
    'glance.library': 'Library',
    'glance.seminar': 'Seminar Halls',
    
    'news.title': 'Latest News',
    'news.viewAll': 'View all+',
    'news.courses': 'Courses',
    'news.programs': 'Programs',
    'news.news': 'News',
    
    'upcoming.title': 'Upcoming Courses',
    'upcoming.viewAll': 'View All Courses',
    'notices.title': 'Important Notices',
    'notices.viewAll': 'View ALL',
    
    'affiliated.title': 'Affiliated Organisations',
    
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',
    
    'testimonials.title': 'What Our Participants Say',
    'testimonials.subtitle': 'Hear from professionals who have transformed their careers through our training programs',
    'testimonials.feedback': 'Share Your Feedback',
    'testimonials.name': 'Your Name',
    'testimonials.email': 'Your Email',
    'testimonials.feedbackText': 'Your Feedback',
    'testimonials.submit': 'Submit Feedback',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.siteMap': 'Site Map',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Short term and long term programmes for Administrative Staff',
    'about.vision': 'Vision',
    'about.mission': 'Mission',
    'about.departments': 'Our Departments',
    'about.viewAll': 'View All Departments & Faculty →',
    'about.achievements': 'WASC Achievements',
    'about.staffTrained': 'Staff Trained',
    'about.activeCourses': 'Active Courses',
    'about.campusArea': 'Acres Campus Area',
    'about.feedback': 'Feedback / Comments',
    'about.comment': 'Your Comment',
    'about.submit': 'Submit Comment',
    
    // Courses
    'courses.title': 'Courses',
    'courses.subtitle': 'Programmes for Administrative Staff',
    'courses.category': 'Category',
    'courses.duration': 'Duration',
    'courses.mode': 'Mode',
    'courses.allCategories': 'All Categories',
    'courses.allDurations': 'All Durations',
    'courses.allModes': 'All Modes',
    'courses.search': 'Search',
    'courses.durationLabel': 'Duration',
    'courses.modeLabel': 'Mode',
    'courses.register': 'Register',
    'courses.details': 'Details',
    'courses.loadMore': 'Load More Courses',
    'courses.selectCourse': 'Select course to view its details',
    'courses.notices': 'Important Notices',
    'courses.eligibility': 'Eligibility',
    'courses.documents': 'Required Documents',
    'courses.feeStructure': 'Fee Structure',
    'courses.download': 'Download Brochure',
    
    // Faculty
    'faculty.title': 'Our Faculty',
    'faculty.subtitle': 'Experienced professionals dedicated to your professional development',
    'faculty.departments': 'Our Departments',
    'faculty.members': 'Faculty Members',
    'faculty.keyCourses': 'Key Courses',
    'faculty.join': 'Join Our Faculty',
    'faculty.joinText': "We're always looking for experienced professionals to join our team",
    'faculty.contact': 'Contact Us',
    
    // Contact
    'contact.pageTitle': 'Contact Us',
    'contact.subtitle': 'Get in touch with us for inquiries, course information, or any assistance you may need.',
    'contact.getInTouch': 'Get in Touch',
    'contact.sendMessage': 'Send us a Message',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  ur: {
    // Navigation
    'nav.home': 'ہوم',
    'nav.about': 'ہمارے بارے میں',
    'nav.courses': 'کورسز',
    'nav.contact': 'رابطہ',
    'nav.faculty': 'فیکلٹی',
    
    // Homepage
    'hero.title': 'عمدگی کے لیے تربیت',
    'hero.subtitle': 'WAPDA اور اس سے وابستہ اداروں کے عملے کی قیادت اور عملی عمدگی کی تعمیر - تبدیلی کی تربیت کے ذریعے۔',
    'hero.apply': 'درخواست/انرول',
    'hero.download': 'پروسپیکٹس ڈاؤن لوڈ کریں',
    'hero.carousel': 'تصاویر دیکھنے کے لیے انٹرایکٹو سوائپ بٹن',
    'hero.building': 'اکیڈمی عمارت',
    
    'glance.title': 'WASC ایک نظر میں',
    'glance.hostel': 'ہوسٹل',
    'glance.mess': 'میس',
    'glance.library': 'لائبریری',
    'glance.seminar': 'سیمینار ہال',
    
    'news.title': 'تازہ ترین خبریں',
    'news.viewAll': 'تمام دیکھیں+',
    'news.courses': 'کورسز',
    'news.programs': 'پروگرامز',
    'news.news': 'خبریں',
    
    'upcoming.title': 'آنے والے کورسز',
    'upcoming.viewAll': 'تمام کورسز دیکھیں',
    'notices.title': 'اہم نوٹس',
    'notices.viewAll': 'تمام دیکھیں',
    
    'affiliated.title': 'وابستہ تنظیمیں',
    
    'contact.title': 'رابطہ',
    'contact.address': 'پتہ',
    'contact.phone': 'فون',
    'contact.email': 'ای میل',
    'contact.location': 'مقام',
    
    'testimonials.title': 'ہمارے شرکاء کیا کہتے ہیں',
    'testimonials.subtitle': 'پیشہ ور افراد سے سنیں جنہوں نے ہمارے تربیتی پروگراموں کے ذریعے اپنے کیریئر کو تبدیل کیا ہے',
    'testimonials.feedback': 'اپنی رائے شیئر کریں',
    'testimonials.name': 'آپ کا نام',
    'testimonials.email': 'آپ کی ای میل',
    'testimonials.feedbackText': 'آپ کی رائے',
    'testimonials.submit': 'رائے جمع کروائیں',
    
    // Footer
    'footer.quickLinks': 'فوری لنکس',
    'footer.siteMap': 'سائٹ میپ',
    'footer.contact': 'رابطہ',
    'footer.newsletter': 'نیوز لیٹر',
    'footer.subscribe': 'سبسکرائب',
    'footer.rights': 'جملہ حقوق محفوظ ہیں۔',
    
    // About
    'about.title': 'ہمارے بارے میں',
    'about.subtitle': 'انتظامی عملے کے لیے مختصر مدت اور طویل مدتی پروگرام',
    'about.vision': 'ویژن',
    'about.mission': 'مشن',
    'about.departments': 'ہمارے شعبے',
    'about.viewAll': 'تمام شعبے اور فیکلٹی دیکھیں →',
    'about.achievements': 'WASC کی کامیابیاں',
    'about.staffTrained': 'عملے کی تربیت',
    'about.activeCourses': 'فعال کورسز',
    'about.campusArea': 'ایکڑ کیمپس رقبہ',
    'about.feedback': 'رائے / تبصرے',
    'about.comment': 'آپ کا تبصرہ',
    'about.submit': 'تبصرہ جمع کروائیں',
    
    // Courses
    'courses.title': 'کورسز',
    'courses.subtitle': 'انتظامی عملے کے لیے پروگرام',
    'courses.category': 'زمرہ',
    'courses.duration': 'مدت',
    'courses.mode': 'موڈ',
    'courses.allCategories': 'تمام زمرے',
    'courses.allDurations': 'تمام مدت',
    'courses.allModes': 'تمام موڈ',
    'courses.search': 'تلاش',
    'courses.durationLabel': 'مدت',
    'courses.modeLabel': 'موڈ',
    'courses.register': 'رجسٹر',
    'courses.details': 'تفصیلات',
    'courses.loadMore': 'مزید کورسز لوڈ کریں',
    'courses.selectCourse': 'تفصیلات دیکھنے کے لیے کورس منتخب کریں',
    'courses.notices': 'اہم نوٹس',
    'courses.eligibility': 'اہلیت',
    'courses.documents': 'مطلوبہ دستاویزات',
    'courses.feeStructure': 'فیس کا ڈھانچہ',
    'courses.download': 'بروشر ڈاؤن لوڈ کریں',
    
    // Faculty
    'faculty.title': 'ہماری فیکلٹی',
    'faculty.subtitle': 'تجربہ کار پیشہ ور افراد آپ کی پیشہ ورانہ ترقی کے لیے وقف',
    'faculty.departments': 'ہمارے شعبے',
    'faculty.members': 'فیکلٹی ممبران',
    'faculty.keyCourses': 'اہم کورسز',
    'faculty.join': 'ہماری فیکلٹی میں شامل ہوں',
    'faculty.joinText': 'ہم ہمیشہ تجربہ کار پیشہ ور افراد کی تلاش میں رہتے ہیں',
    'faculty.contact': 'ہم سے رابطہ کریں',
    
    // Contact
    'contact.pageTitle': 'ہم سے رابطہ کریں',
    'contact.subtitle': 'استفسارات، کورس کی معلومات، یا کسی بھی مدد کے لیے ہم سے رابطہ کریں۔',
    'contact.getInTouch': 'رابطہ کریں',
    'contact.sendMessage': 'ہمیں پیغام بھیجیں',
    'contact.subject': 'موضوع',
    'contact.message': 'پیغام',
    'contact.send': 'پیغام بھیجیں',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.courses': 'الدورات',
    'nav.contact': 'اتصل بنا',
    'nav.faculty': 'الكلية',
    
    // Homepage
    'hero.title': 'تدرب للتميز',
    'hero.subtitle': 'بناء القيادة والتميز التشغيلي لموظفي WAPDA والهيئات التابعة لها - من خلال التدريب التحويلي.',
    'hero.apply': 'تقدم/سجل',
    'hero.download': 'تحميل النشرة',
    'hero.carousel': 'أزرار تمرير تفاعلية لعرض الصور',
    'hero.building': 'مبنى الأكاديمية',
    
    'glance.title': 'WASC في لمحة',
    'glance.hostel': 'السكن',
    'glance.mess': 'المطعم',
    'glance.library': 'المكتبة',
    'glance.seminar': 'قاعات الندوات',
    
    'news.title': 'آخر الأخبار',
    'news.viewAll': 'عرض الكل+',
    'news.courses': 'الدورات',
    'news.programs': 'البرامج',
    'news.news': 'الأخبار',
    
    'upcoming.title': 'الدورات القادمة',
    'upcoming.viewAll': 'عرض جميع الدورات',
    'notices.title': 'إشعارات مهمة',
    'notices.viewAll': 'عرض الكل',
    
    'affiliated.title': 'المنظمات التابعة',
    
    'contact.title': 'اتصل بنا',
    'contact.address': 'العنوان',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    
    'testimonials.title': 'ماذا يقول مشاركونا',
    'testimonials.subtitle': 'استمع من المهنيين الذين غيروا حياتهم المهنية من خلال برامجنا التدريبية',
    'testimonials.feedback': 'شارك ملاحظاتك',
    'testimonials.name': 'اسمك',
    'testimonials.email': 'بريدك الإلكتروني',
    'testimonials.feedbackText': 'ملاحظاتك',
    'testimonials.submit': 'إرسال الملاحظات',
    
    // Footer
    'footer.quickLinks': 'روابط سريعة',
    'footer.siteMap': 'خريطة الموقع',
    'footer.contact': 'اتصل بنا',
    'footer.newsletter': 'النشرة الإخبارية',
    'footer.subscribe': 'اشترك',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // About
    'about.title': 'من نحن',
    'about.subtitle': 'برامج قصيرة وطويلة المدى للموظفين الإداريين',
    'about.vision': 'الرؤية',
    'about.mission': 'المهمة',
    'about.departments': 'أقسامنا',
    'about.viewAll': 'عرض جميع الأقسام والكلية →',
    'about.achievements': 'إنجازات WASC',
    'about.staffTrained': 'الموظفين المدربين',
    'about.activeCourses': 'الدورات النشطة',
    'about.campusArea': 'فدان مساحة الحرم الجامعي',
    'about.feedback': 'التعليقات / الملاحظات',
    'about.comment': 'تعليقك',
    'about.submit': 'إرسال التعليق',
    
    // Courses
    'courses.title': 'الدورات',
    'courses.subtitle': 'برامج للموظفين الإداريين',
    'courses.category': 'الفئة',
    'courses.duration': 'المدة',
    'courses.mode': 'الوضع',
    'courses.allCategories': 'جميع الفئات',
    'courses.allDurations': 'جميع المدد',
    'courses.allModes': 'جميع الأوضاع',
    'courses.search': 'بحث',
    'courses.durationLabel': 'المدة',
    'courses.modeLabel': 'الوضع',
    'courses.register': 'سجل',
    'courses.details': 'التفاصيل',
    'courses.loadMore': 'تحميل المزيد من الدورات',
    'courses.selectCourse': 'حدد الدورة لعرض تفاصيلها',
    'courses.notices': 'إشعارات مهمة',
    'courses.eligibility': 'الأهلية',
    'courses.documents': 'المستندات المطلوبة',
    'courses.feeStructure': 'هيكل الرسوم',
    'courses.download': 'تحميل الكتيب',
    
    // Faculty
    'faculty.title': 'كلية',
    'faculty.subtitle': 'المهنيون ذوو الخبرة المكرسون لتطويرك المهني',
    'faculty.departments': 'أقسامنا',
    'faculty.members': 'أعضاء الكلية',
    'faculty.keyCourses': 'الدورات الرئيسية',
    'faculty.join': 'انضم إلى كليتنا',
    'faculty.joinText': 'نبحث دائمًا عن المهنيين ذوي الخبرة للانضمام إلى فريقنا',
    'faculty.contact': 'اتصل بنا',
    
    // Contact
    'contact.pageTitle': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا للاستفسارات أو معلومات الدورة أو أي مساعدة قد تحتاجها.',
    'contact.getInTouch': 'تواصل معنا',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'ur', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      // Update HTML dir attribute for RTL languages
      if (savedLanguage === 'ar' || savedLanguage === 'ur') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', savedLanguage);
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', savedLanguage);
      }
    } else {
      // Default to English
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update HTML dir attribute for RTL languages
    if (lang === 'ar' || lang === 'ur') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', lang);
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

