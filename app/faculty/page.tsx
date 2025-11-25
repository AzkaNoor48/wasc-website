import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Faculty() {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Muhammad Ali Khan',
      position: 'Director',
      department: 'Administration',
      email: 'm.ali@wasc.gov.pk',
      qualifications: 'PhD in Public Administration'
    },
    {
      id: 2,
      name: 'Prof. Fatima Hassan',
      position: 'Senior Faculty',
      department: 'HR',
      email: 'f.hassan@wasc.gov.pk',
      qualifications: 'MSc in Human Resource Management'
    },
    {
      id: 3,
      name: 'Dr. Ahmed Malik',
      position: 'Associate Professor',
      department: 'IT',
      email: 'a.malik@wasc.gov.pk',
      qualifications: 'PhD in Information Technology'
    },
    {
      id: 4,
      name: 'Ms. Sara Ahmed',
      position: 'Assistant Professor',
      department: 'Finance',
      email: 's.ahmed@wasc.gov.pk',
      qualifications: 'MBA in Finance'
    },
    {
      id: 5,
      name: 'Dr. Usman Sheikh',
      position: 'Senior Faculty',
      department: 'Administration',
      email: 'u.sheikh@wasc.gov.pk',
      qualifications: 'PhD in Business Administration'
    },
    {
      id: 6,
      name: 'Mr. Zain Ali',
      position: 'Lecturer',
      department: 'Media',
      email: 'z.ali@wasc.gov.pk',
      qualifications: 'MA in Media Studies'
    },
    {
      id: 7,
      name: 'Dr. Ayesha Khan',
      position: 'Associate Professor',
      department: 'Accounts',
      email: 'a.khan@wasc.gov.pk',
      qualifications: 'PhD in Accounting'
    },
    {
      id: 8,
      name: 'Prof. Hassan Raza',
      position: 'Senior Faculty',
      department: 'IT',
      email: 'h.raza@wasc.gov.pk',
      qualifications: 'MSc in Computer Science'
    }
  ];

  const departments = [
    {
      name: 'Administration & HR',
      description: 'Comprehensive training in administrative management, human resources, organizational behavior, and leadership development.',
      icon: '👥',
      courses: ['Administrative Leadership', 'HR Strategic Planning', 'Organizational Development'],
      facultyCount: 3
    },
    {
      name: 'IT',
      description: 'Modern IT infrastructure management, digital transformation, cybersecurity, and technology integration programs.',
      icon: '💻',
      courses: ['IT Infrastructure Management', 'Digital Transformation', 'Cybersecurity'],
      facultyCount: 2
    },
    {
      name: 'Media',
      description: 'Media management, communication strategies, public relations, and digital media training.',
      icon: '📺',
      courses: ['Media Management', 'Public Relations', 'Digital Communication'],
      facultyCount: 1
    },
    {
      name: 'Accounts',
      description: 'Financial management, accounting principles, budgeting, and financial analysis training.',
      icon: '💰',
      courses: ['Financial Management', 'Accounting Principles', 'Budget Analysis'],
      facultyCount: 1
    },
    {
      name: 'Finance',
      description: 'Advanced financial analysis, investment management, and financial planning programs.',
      icon: '📊',
      courses: ['Financial Analysis', 'Investment Management', 'Financial Planning'],
      facultyCount: 1
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumbs */}
      <div className="bg-[#FBFAF7] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-lg">
            <a href="/" className="text-[#5D6A62] hover:text-[#0E8ACA]">Home</a>
            <span className="mx-2 text-[#93AEB9]">/</span>
            <span className="text-[#062D5C] font-medium">Faculty</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-[#062D5C] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-4">Our Faculty</h1>
          <p className="text-3xl text-[#93AEB9]">Experienced professionals dedicated to your professional development</p>
        </div>
      </div>

      {/* Departments Section */}
      <section className="py-16 bg-[#FBFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-[#062D5C] mb-12 text-center">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all border-l-4 border-[#0E8ACA]"
              >
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{dept.icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#062D5C]">{dept.name}</h3>
                    <p className="text-lg text-[#5D6A62]">{dept.facultyCount} Faculty Members</p>
                  </div>
                </div>
                <p className="text-[#5D6A62] mb-4">{dept.description}</p>
                <div className="border-t border-[#93AEB9] pt-4">
                  <p className="text-lg font-semibold text-[#062D5C] mb-2">Key Courses:</p>
                  <ul className="space-y-1">
                    {dept.courses.map((course, idx) => (
                      <li key={idx} className="text-lg text-[#5D6A62] flex items-center">
                        <span className="w-2 h-2 bg-[#0E8ACA] rounded-full mr-2"></span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-[#062D5C] mb-12 text-center">Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-[#93AEB9] rounded-lg p-6 text-center hover:shadow-lg transition-all hover:border-[#0E8ACA]"
              >
                <div className="w-24 h-24 bg-[#e8f4fa] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-[#0E8ACA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#062D5C] mb-1">{member.name}</h3>
                <p className="text-lg text-[#0E8ACA] font-semibold mb-2">{member.position}</p>
                <p className="text-lg text-[#5D6A62] mb-2">{member.department}</p>
                <p className="text-base text-[#93AEB9] mb-3">{member.qualifications}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-lg text-[#0E8ACA] hover:text-[#062D5C] font-medium"
                >
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#062D5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Join Our Faculty</h2>
          <p className="text-3xl text-[#93AEB9] mb-8">
            We're always looking for experienced professionals to join our team
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#E6B950] text-white rounded-md hover:bg-[#d4a844] font-semibold transition shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

