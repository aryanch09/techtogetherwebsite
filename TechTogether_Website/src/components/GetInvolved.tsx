import React from 'react';
import { Users, UserPlus, Briefcase, ExternalLink, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const executiveRoles = [
    {
      title: 'Outreach Director',
      description: 'Lead community partnerships and program expansion efforts',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Social Media Manager',
      description: 'Manage our online presence and community engagement',
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      title: 'Program Coordinator',
      description: 'Organize and oversee program logistics and scheduling',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Volunteer Coordinator',
      description: 'Recruit, train, and manage volunteer instructors',
      icon: <UserPlus className="w-6 h-6" />
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to make technology accessible to everyone in Naperville
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Volunteer Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Become a Volunteer</h3>
                <p className="text-blue-700">Join our community of educators</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We're looking for passionate individuals who want to make a difference in their community. 
              Whether you're a student, parent, teacher, or community member, there's a place for you 
              in our organization.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Volunteer Instructor</h4>
                  <p className="text-gray-600 text-sm">Help teach coding fundamentals to students</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Outreach Coordinator</h4>
                  <p className="text-gray-600 text-sm">Help us connect with new community partners</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Event Support</h4>
                  <p className="text-gray-600 text-sm">Assist with program logistics and setup</p>
                </div>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd5chpDkptuUxN6Y4C3rHAZGlpkxDLmEbkAe-m-r3xpNUTSvA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Sign Up to Volunteer</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Partnership Section */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Partner With Us</h3>
                <p className="text-purple-700">Expand our community impact</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We're seeking partnerships with schools, community centers, libraries, and other 
              organizations that share our commitment to digital equity and education.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Host a Program</h4>
                  <p className="text-gray-600 text-sm">Provide space for our educational programs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sponsor an Event</h4>
                  <p className="text-gray-600 text-sm">Support our mission through sponsorship</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Collaborative Programs</h4>
                  <p className="text-gray-600 text-sm">Develop joint initiatives for the community</p>
                </div>
              </div>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZkrPVzH_uvbEkOiKAegIZfKpRA1QHQ_uuSQH850ZP4A_K3w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Become a Partner</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Executive Board Openings */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Executive Board Openings</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Ready to take on a leadership role? We're seeking dedicated individuals to join our executive team 
              and help shape the future of TechTogether Naperville.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {executiveRoles.map((role, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    {role.icon}
                  </div>
                  <h4 className="text-xl font-semibold">{role.title}</h4>
                </div>
                <p className="text-gray-300">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdhLUq_82Sg7l27K4yOIOUlSOFaiyAuDnnyzFrhf5RtdiBmqw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Apply for Leadership Role</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;