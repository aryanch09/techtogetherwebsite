import React from 'react';
import { Building, Users, Heart, ExternalLink, Mail } from 'lucide-react';

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building strong community connections to expand access to technology education
          </p>
        </div>

        {/* Current Partner - Alive Center */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Current Partnership</h3>
                  <p className="text-blue-100">Our established community collaboration</p>
                </div>
                <Building className="w-12 h-12 text-blue-200" />
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <Building className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">Alive Center</h4>
                      <p className="text-gray-600">Alive Teen Initiative Program</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We're proud to partner with the Alive Center through their Teen Initiative program. 
                    Our Fall 2025 Python workshop runs through this excellent facility, providing 
                    students with a professional learning environment.
                  </p>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h5 className="font-semibold text-blue-900 mb-3">Partnership Benefits:</h5>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Professional learning environment</li>
                      <li>• Accessible registration through established system</li>
                      <li>• Scholarship opportunities for families in need</li>
                      <li>• Central Naperville location</li>
                      <li>• Ongoing support for program expansion</li>
                    </ul>
                  </div>

                  <a
                    href="https://www.alivecenter.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
                  >
                    <span>Visit Alive Center</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Program Details</h5>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Program:</span>
                      <span className="font-medium">Code for Kids - Python</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">8 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Schedule:</span>
                      <span className="font-medium">Tuesdays</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dates:</span>
                      <span className="font-medium">Sept 2 - Oct 21, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">500 W 5th Ave</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-medium">$25 (scholarships available)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Potential Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Exploring Future Partnerships</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* YMCA */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Fry Family YMCA</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Exploring opportunities to offer our Scratch Track program for younger students 
                in their youth development programs.
              </p>
              <div className="text-sm text-gray-500">
                Status: In Discussion
              </div>
            </div>

            {/* Local Schools */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Local Schools</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Working to integrate our programs into after-school activities and 
                summer enrichment programs at area schools.
              </p>
              <div className="text-sm text-gray-500">
                Status: Outreach Phase
              </div>
            </div>

            {/* Senior Communities */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Senior Communities</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Connecting with Arbor Terrace, Independence Village, and other senior 
                living communities for our TechHelp Teens program.
              </p>
              <div className="text-sm text-gray-500">
                Status: Active Outreach
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Partners Say</h3>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "We're excited to support TechTogether Naperville through our Teen Initiative program. 
              Their student-led approach and commitment to accessible education aligns perfectly 
              with our mission to serve the Naperville community."
            </blockquote>
            <cite className="text-gray-600 font-medium">— Alive Center Team</cite>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Partnering?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            We're always looking for new partnerships to expand our impact in the Naperville community. 
            If your organization shares our commitment to digital equity and education, let's connect!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZkrPVzH_uvbEkOiKAegIZfKpRA1QHQ_uuSQH850ZP4A_K3w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Partner With Us</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="mailto:techtogethernaperville@gmail.com?subject=Partnership%20Inquiry"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 border border-white/20"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;