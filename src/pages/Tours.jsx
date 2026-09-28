import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Check, ArrowRight, Users, Compass } from 'lucide-react';
import gsap from 'gsap';

const Tours = () => {
  const [destFilter, setDestFilter] = useState('All');
  const [budgetFilter, setBudgetFilter] = useState('All');
  const [durationFilter, setDurationFilter] = useState('All');
  const cardsContainerRef = useRef(null);
  
  const destinations = ['All', 'Manali', 'Kashmir', 'Goa', 'Rishikesh'];
  const budgets = ['All', 'Under ₹5,000', '₹5,000 - ₹10,000', 'Over ₹10,000'];
  const durations = ['All', 'Short (1-3 Days)', 'Medium (4-6 Days)', 'Long (7+ Days)'];

  const tours = [
    { id: 1, name: "Ultimate Manali Backpacking", location: "Manali", duration: 4, durationText: "4 Days / 3 Nights", price: 4999, image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1000&auto=format&fit=crop", highlights: ["Solang Valley", "Kasol Trek", "DJ Night"], badge: "🔥 Best Seller", groupSize: "20-25" },
    { id: 2, name: "Goa Beach Bash", location: "Goa", duration: 4, durationText: "4 Days / 3 Nights", price: 5499, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop", highlights: ["Baga Beach", "Cruise Party", "Fort Aguada"], badge: "🎒 College Fav", groupSize: "30-40" },
    { id: 3, name: "Kashmir Paradise", location: "Kashmir", duration: 5, durationText: "5 Days / 4 Nights", price: 8999, image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop", highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Houseboat Stay"], badge: "✨ Premium", groupSize: "12-15" },
    { id: 4, name: "Rishikesh Adrenaline", location: "Rishikesh", duration: 3, durationText: "3 Days / 2 Nights", price: 2999, image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1000&auto=format&fit=crop", highlights: ["River Rafting", "Jungle Camping", "Bungee Jumping"], badge: "⚡ Fast Filling", groupSize: "15-20" },
    { id: 5, name: "Manali Snow Trek", location: "Manali", duration: 6, durationText: "6 Days / 5 Nights", price: 7999, image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop", highlights: ["Rohtang Pass", "Hampta Trek", "Snow Camping"], badge: "🏔️ Extreme", groupSize: "10-15" },
    { id: 6, name: "South Goa Retreat", location: "Goa", duration: 5, durationText: "5 Days / 4 Nights", price: 6999, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop", highlights: ["Palolem Beach", "Dudhsagar Falls", "Secret Beaches"], badge: null, groupSize: "20-25" },
    { id: 7, name: "Kashmir Grandeur", location: "Kashmir", duration: 8, durationText: "8 Days / 7 Nights", price: 14999, image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop", highlights: ["Sonamarg", "Pahalgam", "Local Cuisine"], badge: null, groupSize: "12-15" },
    { id: 8, name: "Rishikesh Yoga Retreat", location: "Rishikesh", duration: 7, durationText: "7 Days / 6 Nights", price: 8499, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop", highlights: ["Daily Yoga", "Meditation", "Ganga Aarti"], badge: "🧘 Relax", groupSize: "15-20" },
  ];

  const getFilteredTours = () => {
    return tours.filter(tour => {
      // Dest Match
      if (destFilter !== 'All' && tour.location !== destFilter) return false;
      
      // Budget Match
      if (budgetFilter === 'Under ₹5,000' && tour.price >= 5000) return false;
      if (budgetFilter === '₹5,000 - ₹10,000' && (tour.price < 5000 || tour.price > 10000)) return false;
      if (budgetFilter === 'Over ₹10,000' && tour.price <= 10000) return false;
      
      // Duration Match
      if (durationFilter === 'Short (1-3 Days)' && tour.duration > 3) return false;
      if (durationFilter === 'Medium (4-6 Days)' && (tour.duration < 4 || tour.duration > 6)) return false;
      if (durationFilter === 'Long (7+ Days)' && tour.duration < 7) return false;
      
      return true;
    });
  };

  const filteredTours = getFilteredTours();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (cardsContainerRef.current && filteredTours.length > 0) {
      // Kill previous animations to prevent glitches on fast filter clicks
      gsap.killTweensOf(cardsContainerRef.current.children);
      
      gsap.fromTo(cardsContainerRef.current.children,
        { opacity: 0, y: 100, scale: 0.85 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2, // Smooth cascade effect
          ease: 'power3.out'
        }
      );
    }
  }, [destFilter, budgetFilter, durationFilter]);

  return (
    <div className="bg-[#111111] min-h-screen font-sans text-white">
      
      {/* 1. Hero Section for Tours */}
      <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden bg-[#111]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
            alt="Group Backpacking"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#111111]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 w-full mt-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5D73F]/10 border border-[#C5D73F]/30 text-[#C5D73F] text-[12px] font-bold uppercase tracking-widest mb-6">
            <Compass size={14} /> Group Departures
          </div>
          <h1 className="text-[40px] md:text-[60px] font-serif font-bold text-white mb-4 drop-shadow-xl leading-tight">
            Find Your Next <span className="text-[#C5D73F] italic">Adventure</span>
          </h1>
          <p className="text-[14px] md:text-[16px] text-gray-300 max-w-2xl mx-auto font-medium">
            Browse our hand-picked group trips designed for thrill-seekers and budget travelers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pb-24 relative z-20 -mt-20">
        
        {/* Advanced Filters (Glassmorphism) */}
        <div className="bg-[#1A1A1A]/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-[#333] mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Destination */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Destination</label>
              <div className="flex flex-wrap gap-2">
                {destinations.map(d => (
                  <button
                    key={d}
                    onClick={() => setDestFilter(d)}
                    className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all border ${destFilter === d ? 'bg-[#C5D73F] text-[#111] border-[#C5D73F] shadow-[0_0_15px_rgba(197,215,63,0.3)]' : 'bg-[#111] text-gray-400 border-[#333] hover:border-[#C5D73F] hover:text-[#C5D73F]'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Budget */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Budget Range</label>
              <div className="flex flex-wrap gap-2">
                {budgets.map(b => (
                  <button
                    key={b}
                    onClick={() => setBudgetFilter(b)}
                    className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all border ${budgetFilter === b ? 'bg-[#C5D73F] text-[#111] border-[#C5D73F] shadow-[0_0_15px_rgba(197,215,63,0.3)]' : 'bg-[#111] text-gray-400 border-[#333] hover:border-[#C5D73F] hover:text-[#C5D73F]'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Duration */}
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Duration</label>
              <div className="flex flex-wrap gap-2">
                {durations.map(d => (
                  <button
                    key={d}
                    onClick={() => setDurationFilter(d)}
                    className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all border ${durationFilter === d ? 'bg-[#C5D73F] text-[#111] border-[#C5D73F] shadow-[0_0_15px_rgba(197,215,63,0.3)]' : 'bg-[#111] text-gray-400 border-[#333] hover:border-[#C5D73F] hover:text-[#C5D73F]'}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Tour Cards */}
        {filteredTours.length > 0 ? (
          <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="opacity-0 bg-[#151515] rounded-2xl border border-[#222] overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(197,215,63,0.1)] transition-all duration-300 flex flex-col group hover:-translate-y-2 hover:border-[#C5D73F]/40">
                
                {/* Image & Badges */}
                <div className="relative h-[260px] overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/30"></div>
                  
                  {tour.badge && (
                    <div className="absolute top-4 right-4 bg-[#111]/80 backdrop-blur-sm border border-[#C5D73F]/50 px-3 py-1.5 rounded-full text-[11px] font-bold text-[#C5D73F] shadow-sm uppercase tracking-wider z-10">
                      {tour.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                    <div className="bg-[#C5D73F] px-3 py-1.5 rounded-full text-[12px] font-bold text-[#111] flex items-center gap-1 shadow-lg">
                      <MapPin size={14} className="text-[#111]" />
                      {tour.location}
                    </div>
                    <div className="bg-[#111]/80 backdrop-blur-sm border border-[#333] px-3 py-1.5 rounded-full text-[12px] font-bold text-white flex items-center gap-1 shadow-lg">
                      <Users size={14} className="text-[#C5D73F]" />
                      {tour.groupSize} Pax
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10 bg-[#151515]">
                  <h3 className="text-[22px] font-serif font-bold text-white leading-tight mb-3 group-hover:text-[#C5D73F] transition-colors">{tour.name}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium mb-6 bg-[#111] w-fit px-3 py-1.5 rounded-full border border-[#222]">
                    <Clock size={14} className="text-[#C5D73F]" />
                    <span>{tour.durationText}</span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Trip Highlights</p>
                    <ul className="space-y-2">
                      {tour.highlights.map((high, i) => (
                        <li key={i} className="flex items-center gap-3 text-[14px] text-gray-300 font-medium">
                          <div className="w-5 h-5 rounded-full bg-[#111] border border-[#333] flex items-center justify-center shrink-0 group-hover:border-[#C5D73F]/50 transition-colors">
                            <Check size={12} className="text-[#C5D73F]" />
                          </div>
                          {high}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="mt-auto pt-6 border-t border-[#222] flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Per Person</p>
                      <p className="text-[26px] font-bold text-white group-hover:text-[#C5D73F] transition-colors">₹{tour.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-[#111] border border-[#333] text-white group-hover:bg-[#C5D73F] group-hover:text-[#111] group-hover:border-[#C5D73F] flex items-center justify-center transition-all duration-300 shadow-md">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-[#1A1A1A] rounded-2xl border border-[#333] shadow-lg">
            <div className="w-20 h-20 bg-[#111] rounded-full mx-auto flex items-center justify-center mb-6 border border-[#C5D73F]/30 text-[#C5D73F]">
              <Compass size={32} />
            </div>
            <h3 className="text-[28px] font-serif font-bold text-white mb-3">No matching trips found</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Looks like we don't have exactly what you're looking for right now. Try adjusting your filters.</p>
            <button 
              onClick={() => { setDestFilter('All'); setBudgetFilter('All'); setDurationFilter('All'); }}
              className="px-8 py-3.5 bg-[#C5D73F] text-[#111] rounded-full font-bold tracking-[0.15em] uppercase text-[12px] hover:bg-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(197,215,63,0.3)]"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tours;
