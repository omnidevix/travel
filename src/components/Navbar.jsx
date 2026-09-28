import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      ref={navRef} 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111111]/95 backdrop-blur-md shadow-lg border-b border-[#222] py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 group">
            <Compass size={28} className="text-[#C5D73F] transition-transform group-hover:rotate-45 duration-300" />
            <span className="text-[24px] font-serif font-bold tracking-tight text-white">
              WanderIndia
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`relative font-medium text-[14px] transition-colors ${location.pathname === link.path ? 'text-[#C5D73F]' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#C5D73F] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0'}`}></span>
              </Link>
            ))}
            <Link to="/tours" className="px-6 py-2 rounded-full font-bold text-[13px] uppercase tracking-wide transition-all duration-300 border border-[#C5D73F] text-[#C5D73F] hover:bg-[#C5D73F] hover:text-[#111]">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white hover:text-[#C5D73F] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#111111] shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] border-t border-[#222]' : 'max-h-0'}`}>
        <div className="flex flex-col items-center gap-2 py-6 px-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] font-medium w-full text-center py-3 rounded-md transition-colors ${location.pathname === link.path ? 'text-[#C5D73F] bg-[#222]' : 'text-gray-300 hover:text-white hover:bg-[#222]'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/tours" onClick={() => setIsOpen(false)} className="w-full text-center py-3 bg-[#C5D73F] text-[#111] rounded-md font-bold mt-4 uppercase tracking-wide">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
