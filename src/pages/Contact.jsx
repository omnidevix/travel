import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const InputField = ({ label, type = "text", id, placeholder }) => (
    <div className="mb-6">
      <label htmlFor={id} className="block text-[14px] font-bold text-gray-300 mb-2">
        {label}
      </label>
      <input 
        type={type} 
        id={id}
        className="w-full bg-[#111111] border border-[#333] rounded-md px-4 py-3 text-[15px] text-white focus:outline-none focus:bg-[#1A1A1A] focus:border-[#C5D73F] focus:ring-1 focus:ring-[#C5D73F] transition-all duration-300 placeholder-gray-600"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="bg-[#111111] min-h-screen pt-20 font-sans text-white">
      
      {/* Header */}
      <div className="py-16 text-center px-4">
        <h1 className="text-[36px] md:text-[48px] font-serif font-bold text-white mb-6">Get In Touch</h1>
        <div className="w-16 h-1 bg-[#C5D73F] mx-auto mb-6"></div>
        <p className="text-[16px] text-gray-400 max-w-2xl mx-auto">Have a question about a trip? Looking for a custom itinerary? We're here to help.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div>
            <h2 className="text-[28px] font-serif font-bold text-white mb-10">Reach Out To Us</h2>
            
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-[#C5D73F] rounded-full flex items-center justify-center shrink-0 group hover:bg-[#C5D73F] transition-colors">
                  <MapPin className="text-[#C5D73F] group-hover:text-[#111] transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">Our Basecamp</h4>
                  <p className="text-gray-400 text-[15px] leading-relaxed">45 Adventure Road, Old Manali<br/>Himachal Pradesh, India 175131</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-[#C5D73F] rounded-full flex items-center justify-center shrink-0 group hover:bg-[#C5D73F] transition-colors">
                  <Phone className="text-[#C5D73F] group-hover:text-[#111] transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">Call Us</h4>
                  <p className="text-gray-400 text-[15px] font-medium">+91 98765 43210</p>
                  <p className="text-gray-400 text-[15px] font-medium">+91 11 2345 6789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-[#C5D73F] rounded-full flex items-center justify-center shrink-0 group hover:bg-[#C5D73F] transition-colors">
                  <Mail className="text-[#C5D73F] group-hover:text-[#111] transition-colors" size={20} />
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-white mb-2">Email</h4>
                  <p className="text-gray-400 text-[15px] font-medium">hello@wanderindia.in</p>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] bg-[#1A1A1A] rounded-md overflow-hidden border border-[#333] relative grayscale hover:grayscale-0 transition-all duration-700">
              {/* Map Placeholder */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108342.36862590747!2d77.1066046162386!3d32.23963250106268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="WanderIndia Map"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-md border border-[#333]">
            <h2 className="text-[28px] font-serif font-bold text-white mb-2">Send a Message</h2>
            <p className="text-[15px] text-gray-400 mb-10">We usually reply within 2-4 hours during business days.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <InputField label="First Name" id="fname" placeholder="John" />
                <InputField label="Last Name" id="lname" placeholder="Doe" />
              </div>
              
              <InputField label="Email Address" type="email" id="email" placeholder="john@example.com" />
              <InputField label="Phone Number" type="tel" id="phone" placeholder="+91 98765 43210" />
              
              <div className="mb-10">
                <label htmlFor="message" className="block text-[14px] font-bold text-gray-300 mb-2">
                  How can we help?
                </label>
                <textarea 
                  id="message"
                  rows="5"
                  className="w-full bg-[#111111] border border-[#333] rounded-md px-4 py-3 text-[15px] text-white focus:outline-none focus:bg-[#1A1A1A] focus:border-[#C5D73F] focus:ring-1 focus:ring-[#C5D73F] transition-all duration-300 resize-y placeholder-gray-600"
                  placeholder="Tell us about the trip you're planning..."
                ></textarea>
              </div>
              
              <button className="w-full bg-transparent border border-[#C5D73F] hover:bg-[#C5D73F] text-[#C5D73F] hover:text-[#111] px-8 py-4 rounded-full font-bold text-[14px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
              
            <div className="mt-10 pt-8 border-t border-[#333] text-center">
              <p className="text-[14px] text-gray-400 mb-4">Prefer instant chat?</p>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[#C5D73F] font-bold hover:text-white transition-colors"
              >
                <MessageCircle size={20} /> Chat with us on WhatsApp
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
