import React from 'react';
import { Code2, Gamepad2, Users, Calendar, MapPin, DollarSign, Clock, Target, Mail } from 'lucide-react';

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering learners of all ages with hands-on technology education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {/* Code for Kids - Python Track */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 lg:col-span-1 xl:col-span-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <div className="flex items-center mb-4">
                <Code2 className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Code for Kids – Python Track</h3>
              </div>
              <p className="text-blue-100 text-lg">
                Our flagship 8-week coding program for middle school and early high school students
              </p>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Students learn Python fundamentals through hands-on projects that foster problem-solving, 
                creativity, and collaboration. Taught by trained teen volunteers in a supportive, peer-led environment.
              </p>

              {/* Fall 2025 Program Details */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Fall 2025 Alive ATI Program</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <span><strong>Dates:</strong> September 2 – October 21, 2025 (Tuesdays)</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span><strong>Location:</strong> Alive Center, 500 W 5th Ave, Naperville</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-5 h-5 text-blue-600 mr-3" />
                    <span><strong>Cost:</strong> $25 registration fee (scholarships available)</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span><strong>Duration:</strong> 8 weeks</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://alivecenter.recdesk.com/Community/Program/Detail?programId=947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                >
                  Register Through Alive Center
                </a>
                <a
                  href="./TechTogether Naperville Flyer.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Code for Kids - Scratch Track */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
              <div className="flex items-center mb-4">
                <Gamepad2 className="w-8 h-8 text-white mr-3" />
                <h3 className="text-xl font-bold text-white">Code for Kids – Scratch Track</h3>
              </div>
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                In Development
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Designed for elementary students to introduce coding through Scratch and 
                drag-and-drop projects, making programming accessible and fun.
              </p>
              
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="flex items-center text-green-800 mb-2">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Target Audience</span>
                </div>
                <p className="text-green-700">Elementary school students</p>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                This program will launch after pilot testing and may be offered at local schools or the YMCA.
              </p>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScNZy8Y_pnk4loZ0yzoRby36UyXUKAoikJnaqcrGXrTkV6cVw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 hover:bg-green-200 text-green-700 px-6 py-3 rounded-lg font-semibold text-center block transition-colors duration-200"
              >
                Join Interest List
              </a>
            </div>
          </div>
        </div>

        {/* TechHelp Teens */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">TechHelp Teens</h3>
              </div>
              <div className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                In Outreach Stage
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A future program where teen volunteers will help seniors build digital confidence, 
                  teaching smartphone basics, email, Zoom, internet safety, and more.
                </p>

                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-purple-900 mb-3">Program Focus Areas:</h4>
                  <ul className="text-purple-800 space-y-2">
                    <li>• Smartphone basics and apps</li>
                    <li>• Email setup and management</li>
                    <li>• Video calling (Zoom, FaceTime)</li>
                    <li>• Internet safety and security</li>
                    <li>• Social media basics</li>
                    <li>• Online shopping and banking safety</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Current Outreach Efforts:</h4>
                  <p className="text-gray-700 mb-3">
                    We're actively contacting assisted living communities and senior centers 
                    to host pilot sessions, including:
                  </p>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Arbor Terrace</li>
                    <li>• Independence Village</li>
                    <li>• Local senior centers</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfZkrPVzH_uvbEkOiKAegIZfKpRA1QHQ_uuSQH850ZP4A_K3w/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200"
                  >
                    Partner With Us
                  </a>
                  <a
                    href="mailto:techtogethernaperville@gmail.com?subject=TechHelp%20Teens%20Partnership"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;