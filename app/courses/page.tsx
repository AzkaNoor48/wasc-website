'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedMode, setSelectedMode] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<{
    id: number;
    name: string;
    category: string;
    duration: string;
    mode: string;
    image: string;
  } | null>(null);

  const courses = [
    {
      id: 1,
      name: 'Financial Management & Accounting',
      category: 'Finance',
      duration: '3 Months',
      mode: 'On-site',
      image: '💰'
    },
    {
      id: 2,
      name: 'Advanced Financial Analysis',
      category: 'Finance',
      duration: '2 Months',
      mode: 'Online',
      image: '📊'
    },
    {
      id: 3,
      name: 'Administrative Leadership',
      category: 'Administration',
      duration: '4 Months',
      mode: 'On-site',
      image: '👔'
    },
    {
      id: 4,
      name: 'Office Management Excellence',
      category: 'Administration',
      duration: '2 Months',
      mode: 'Hybrid',
      image: '📋'
    },
    {
      id: 5,
      name: 'HR Strategic Planning',
      category: 'HR',
      duration: '3 Months',
      mode: 'On-site',
      image: '👥'
    },
    {
      id: 6,
      name: 'Talent Management',
      category: 'HR',
      duration: '2 Months',
      mode: 'Online',
      image: '🎯'
    },
    {
      id: 7,
      name: 'IT Infrastructure Management',
      category: 'IT',
      duration: '3 Months',
      mode: 'Hybrid',
      image: '💻'
    },
    {
      id: 8,
      name: 'Digital Transformation',
      category: 'IT',
      duration: '4 Months',
      mode: 'On-site',
      image: '🚀'
    }
  ];

  const categories = ['all', 'Finance', 'Administration', 'HR', 'IT'];
  const durations = ['all', '2 Months', '3 Months', '4 Months'];
  const modes = ['all', 'On-site', 'Online', 'Hybrid'];

  const filteredCourses = courses.filter(course => {
    return (
      (selectedCategory === 'all' || course.category === selectedCategory) &&
      (selectedDuration === 'all' || course.duration === selectedDuration) &&
      (selectedMode === 'all' || course.mode === selectedMode)
    );
  });

  const groupedCourses = filteredCourses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-[#FBFAF7] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-lg">
            <a href="/" className="text-[#5D6A62] hover:text-[#0E8ACA]">Home</a>
            <span className="mx-2 text-[#93AEB9]">/</span>
            <span className="text-[#062D5C] font-medium">Courses</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold text-[#062D5C] mb-2">Courses</h1>
          <p className="text-2xl text-[#5D6A62]">Programmes for Administrative Staff</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left and Center - Course Listings */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="bg-[#FBFAF7] rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-lg font-medium text-[#5D6A62] mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-medium text-[#5D6A62] mb-2">Duration</label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  >
                    {durations.map(dur => (
                      <option key={dur} value={dur}>{dur === 'all' ? 'All Durations' : dur}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-medium text-[#5D6A62] mb-2">Mode</label>
                  <select
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                    className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  >
                    {modes.map(mode => (
                      <option key={mode} value={mode}>{mode === 'all' ? 'All Modes' : mode}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full px-4 py-2 bg-[#0E8ACA] text-white rounded-md hover:bg-[#062D5C] transition shadow-md font-medium">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Course Listings by Category */}
            <div className="space-y-8">
              {Object.entries(groupedCourses).map(([category, categoryCourses]) => (
                <div key={category}>
                  <h2 className="text-4xl font-bold text-[#062D5C] mb-4">{category}</h2>
                  <div className="space-y-4">
                    {categoryCourses.map(course => (
                      <div
                        key={course.id}
                        className="bg-white border border-[#93AEB9] rounded-lg p-6 hover:shadow-md transition grid grid-cols-1 md:grid-cols-4 gap-4"
                      >
                        <div className="md:col-span-3">
                          <h3 className="text-3xl font-semibold text-[#062D5C] mb-2">{course.name}</h3>
                          <div className="flex flex-wrap gap-4 text-lg text-[#5D6A62]">
                            <span>Duration: {course.duration}</span>
                            <span>Mode: {course.mode}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center gap-2">
                          <div className="text-4xl">{course.image}</div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setSelectedCourse(course)}
                              className="px-4 py-2 bg-[#0E8ACA] text-white rounded-md hover:bg-[#062D5C] text-lg transition"
                            >
                              Details
                            </button>
                            <button className="px-4 py-2 bg-[#e8f4fa] text-[#062D5C] rounded-md hover:bg-[#93AEB9] hover:text-white text-lg transition">
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-[#0E8ACA] text-white rounded-md hover:bg-[#062D5C] font-semibold transition shadow-md">
                Load More Courses
              </button>
            </div>
          </div>

          {/* Right Panel - Course Details */}
          <div className="space-y-6">
            {/* Course Details Panel */}
            <div className="bg-[#FBFAF7] rounded-lg p-6 border border-[#93AEB9] sticky top-24">
              {selectedCourse ? (
                <div>
                  <div className="w-full h-48 bg-[#e8f4fa] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-6xl">{selectedCourse.image}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#062D5C] mb-2">{selectedCourse.name}</h3>
                  <div className="space-y-2 text-lg text-[#5D6A62] mb-4">
                    <p><strong>Category:</strong> {selectedCourse.category}</p>
                    <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                    <p><strong>Mode:</strong> {selectedCourse.mode}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-full h-48 bg-[#e8f4fa] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-[#93AEB9]">Select course to view details</span>
                  </div>
                  <p className="text-[#5D6A62]">Select a course from the list to view its details</p>
                </div>
              )}
            </div>

            {/* Important Notices */}
            <div className="bg-[#FBFAF7] rounded-lg p-6 border border-[#E6B950]">
              <h3 className="text-2xl font-bold text-[#062D5C] mb-4">Important Notices</h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[#5D6A62]">Eligibility</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[#5D6A62]">Required Documents</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-[#5D6A62]">Fee Structure</span>
                </label>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-[#0E8ACA] text-white rounded-md hover:bg-[#062D5C] transition shadow-md font-medium">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

