import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4fa] to-[#FBFAF7]">
      <Navbar />

      {/* Page Header */}
      <div className="bg-[#062D5C] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-6">
            <a href="/" className="text-[#93AEB9] hover:text-white">Home</a>
            <span className="mx-2 text-[#93AEB9]">/</span>
            <span className="text-white font-medium">Contact</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-[#93AEB9] max-w-2xl">
            Get in touch with us for inquiries, course information, or any assistance you may need.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#062D5C] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0E8ACA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#062D5C] mb-1">Address</h3>
                  <p className="text-[#5D6A62]">WAPDA Administrative Staff College</p>
                  <p className="text-[#5D6A62]">Sunnyabad</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0E8ACA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#062D5C] mb-1">Phone</h3>
                  <p className="text-[#5D6A62]">+92-42-1234567</p>
                  <p className="text-[#5D6A62]">+92-42-1234568</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0E8ACA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#062D5C] mb-1">Email</h3>
                  <p className="text-[#5D6A62]">info@wasc.gov.pk</p>
                  <p className="text-[#5D6A62]">admissions@wasc.gov.pk</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <div className="bg-[#e8f4fa] rounded-lg h-64 flex items-center justify-center">
                <span className="text-[#93AEB9]">Map Location</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#062D5C] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#5D6A62] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5D6A62] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#5D6A62] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder="Enter subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#5D6A62] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-[#93AEB9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E8ACA]"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0E8ACA] text-white rounded-md hover:bg-[#062D5C] font-medium transition shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

