import React from 'react';
import { User, Target, Calendar, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our mission to bridge the digital divide in Naperville
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Founder Section */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Our Founder</h3>
                <p className="text-gray-600">Aryan Chhabra</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2025 by Aryan Chhabra, a passionate student at Neuqua Valley High School, 
              TechTogether Naperville emerged from a vision to make technology accessible to everyone 
              in our community.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a student-led initiative, we understand the unique challenges and opportunities 
              that come with learning technology in today's rapidly evolving digital landscape.
            </p>
          </div>

          {/* Mission Section */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-700">
                To bridge the digital divide and empower both youth and seniors through technology 
                education, fostering an inclusive community where everyone can thrive in the digital world.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Established 2025</h4>
              <p className="text-gray-700">
                Officially incorporated in Illinois as TechTogether Naperville, NFP, with an EIN 
                and custom domain, building partnerships across the Naperville community.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-green-600 mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Student-Run Excellence</h4>
              <p className="text-gray-700">
                Proudly youth-driven, with high school students developing curricula, leading sessions, 
                and managing operations while working toward 501(c)(3) tax-exempt status.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Equity</h4>
              <p className="text-blue-100">Making technology education accessible to all, regardless of background or experience level.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Community</h4>
              <p className="text-blue-100">Building connections between generations through collaborative learning experiences.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-blue-100">Delivering high-quality programs that inspire confidence and foster real-world skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;