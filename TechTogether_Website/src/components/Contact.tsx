import React from 'react';
import { Mail, Instagram, MapPin, Building, ExternalLink, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <a 
                      href="mailto:techtogethernaperville@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      techtogethernaperville@gmail.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      For general inquiries, partnerships, and volunteer opportunities
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Instagram</h4>
                    <a 
                      href="https://www.instagram.com/techtogethernaperville/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>@techtogethernaperville</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Follow us for updates, behind-the-scenes content, and community highlights
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Program Location</h4>
                    <p className="text-gray-700 mb-1">
                      Alive Center<br />
                      500 W 5th Ave<br />
                      Naperville, IL 60563
                    </p>
                    <p className="text-gray-600 text-sm">
                      Primary location for our Code for Kids - Python Track program
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-gray-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Legal Information</h4>
              </div>
              <p className="text-gray-700 mb-2">
                <strong>TechTogether Naperville, NFP</strong>
              </p>
              <p className="text-gray-600 text-sm">
                Legally incorporated in the State of Illinois as a nonprofit organization. 
                We are currently working toward 501(c)(3) tax-exempt status.
              </p>
            </div>
          </div>

          {/* Quick Links and Programs */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd5chpDkptuUxN6Y4C3rHAZGlpkxDLmEbkAe-m-r3xpNUTSvA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Volunteer Form</h4>
                      <p className="text-gray-600 text-sm">Join our team as a volunteer</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                </a>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfZkrPVzH_uvbEkOiKAegIZfKpRA1QHQ_uuSQH850ZP4A_K3w/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Partner Form</h4>
                      <p className="text-gray-600 text-sm">Become a community partner</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-purple-600" />
                  </div>
                </a>

                <a
                  href="https://alivecenter.recdesk.com/Community/Program/Detail?programId=947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white hover:bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Register for Python Track</h4>
                      <p className="text-gray-600 text-sm">Sign up through the Alive Center</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-green-600" />
                  </div>
                </a>

                <a
                  href="mailto:techtogethernaperville@gmail.com?subject=Executive%20Board%20Interest"
                  className="block bg-white hover:bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Executive Board Inquiry</h4>
                      <p className="text-gray-600 text-sm">Learn about leadership opportunities</p>
                    </div>
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                </a>
              </div>
            </div>

            {/* Program Schedule */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold text-gray-900">Current Program Schedule</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900">Code for Kids - Python Track</h5>
                  <p className="text-blue-700 text-sm">
                    Tuesdays, September 2 – October 21, 2025<br />
                    Alive Center, 500 W 5th Ave, Naperville
                  </p>
                </div>
                <div className="pt-3 border-t border-blue-200">
                  <h5 className="font-medium text-gray-700">Coming Soon:</h5>
                  <p className="text-gray-600 text-sm">
                    • Scratch Track for elementary students<br />
                    • TechHelp Teens for senior community
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Response Times</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">General Inquiries:</span>
                  <span className="text-green-700 font-medium">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Partnership Requests:</span>
                  <span className="text-green-700 font-medium">3-5 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Volunteer Applications:</span>
                  <span className="text-green-700 font-medium">1 week</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Connect?</h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
              Whether you're interested in volunteering, partnering with us, or just want to learn more 
              about our programs, we're here to help. Let's work together to bridge the digital divide!
            </p>
            <a
              href="mailto:techtogethernaperville@gmail.com"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send us an Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;