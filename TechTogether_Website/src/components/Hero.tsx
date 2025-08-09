import React from 'react';
import { ArrowRight, Users, Code, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="./TechTogether Logo.png" 
              alt="TechTogether Naperville Logo" 
              className="w-24 h-24 mx-auto mb-4 object-contain"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechTogether
            </span>
            <br />
            <span className="text-gray-700">Naperville</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Connecting Generations Through Technology
          </p>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            A student-led nonprofit bringing accessible tech education to youth and seniors in Naperville. 
            Bridging the digital divide through community-driven programs and peer-to-peer learning.
          </p>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">Student-Led</div>
              <div className="text-gray-600">Youth-driven organization</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Code className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">Free Programs</div>
              <div className="text-gray-600">Accessible to all</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">Community Focus</div>
              <div className="text-gray-600">Serving Naperville</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#programs')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZkrPVzH_uvbEkOiKAegIZfKpRA1QHQ_uuSQH850ZP4A_K3w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;