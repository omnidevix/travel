import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Compass size={32} className="text-[#C5D73F] transition-transform group-hover:rotate-45 duration-300" />
              <span className="text-[28px] font-serif font-bold text-white tracking-tight">
                WanderIndia
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-[14px] leading-relaxed">
              Premium experiences at budget prices. Explore Manali, Kashmir, Goa, and Rishikesh without breaking the bank.
            </p>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:border-[#C5D73F] hover:text-[#C5D73F] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:border-[#C5D73F] hover:text-[#C5D73F] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:border-[#C5D73F] hover:text-[#C5D73F] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[18px] font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">About Us</Link></li>
              <li><Link to="/tours" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Destinations</Link></li>
              <li><Link to="/blog" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Travel Blog</Link></li>
              <li><Link to="/contact" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-[18px] font-bold text-white mb-6 uppercase tracking-wider">Top Locations</h4>
            <ul className="space-y-3">
              <li><Link to="/tours" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Manali Packages</Link></li>
              <li><Link to="/tours" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Kashmir Valleys</Link></li>
              <li><Link to="/tours" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Goa Beaches</Link></li>
              <li><Link to="/tours" className="text-[14px] text-gray-400 hover:text-[#C5D73F] transition-colors">Rishikesh Adventure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[18px] font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-[#C5D73F] transition-colors cursor-pointer">
                <MapPin className="shrink-0 mt-0.5" size={18} />
                <span className="text-[14px]">45 Adventure Road, Old Manali, HP 175131</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#C5D73F] transition-colors cursor-pointer">
                <Phone className="shrink-0" size={18} />
                <span className="text-[14px]">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-[#C5D73F] transition-colors cursor-pointer">
                <Mail className="shrink-0" size={18} />
                <span className="text-[14px]">hello@wanderindia.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#222] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-gray-500">
            &copy; {new Date().getFullYear()} WanderIndia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[13px] text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-[13px] text-gray-500 hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
