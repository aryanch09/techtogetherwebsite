import React from 'react';
import { Instagram, Code, Heart, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="./TechTogether Logo.png" 
                alt="TechTogether Naperville Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">TechTogether Naperville</h3>
                <p className="text-gray-400 text-sm">NFP</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              A student-led nonprofit connecting generations through technology education. 
              Bridging the digital divide in Naperville, one program at a time.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <Heart className="w-4 h-4 mr-2 text-pink-500" />
              <span>Made with passion by students, for the community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#programs')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#get-involved')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Get Involved
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#partners')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:techtogethernaperville@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">techtogethernaperville@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/techtogethernaperville/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-4 h-4 mr-2" />
                <span className="text-sm">@techtogethernaperville</span>
              </a>
              <div className="text-gray-300 text-sm">
                <p>Alive Center</p>
                <p>500 W 5th Ave, Naperville, IL 60563</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Summary */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h5 className="text-lg font-semibold text-blue-400 mb-2">Code for Kids - Python</h5>
              <p className="text-gray-400 text-sm">8-week program for middle & high school students</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-green-400 mb-2">Code for Kids - Scratch</h5>
              <p className="text-gray-400 text-sm">Elementary program in development</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-purple-400 mb-2">TechHelp Teens</h5>
              <p className="text-gray-400 text-sm">Seniors program in outreach stage</p>
            </div>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="mb-1">© 2025 TechTogether Naperville, NFP</p>
              <p>Legally incorporated in the State of Illinois</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/techtogethernaperville/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:techtogethernaperville@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Email us"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Working toward 501(c)(3) tax-exempt status • Committed to digital equity and community empowerment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;