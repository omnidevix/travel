import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, MapPin, Calendar, Users, Star, Shield, Clock, HeartHandshake, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sliderData = [
  {
    id: 1,
    title: "Explore Manali",
    desc: "Experience the magic of snow-capped mountains, serene valleys, and thrilling adventures in the heart of Himachal.",
    img: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Paradise Kashmir",
    desc: "Sail on the Dal Lake, witness the grandeur of Gulmarg, and find absolute peace in the valleys of heaven on earth.",
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Vibrant Goa",
    desc: "Sun, sand, and sea. Dive into the vibrant nightlife and relaxing pristine beaches of the party capital.",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Holy Rishikesh",
    desc: "Find your spiritual center while experiencing the ultimate adrenaline thrill of white water rafting.",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Royal Rajasthan",
    desc: "Step into the land of kings, majestic forts, grand palaces, and endless golden desert landscapes.",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Majestic Ladakh",
    desc: "Conquer the high passes and marvel at the crystal clear lakes of Ladakh on the ultimate road trip.",
    img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2071&auto=format&fit=crop"
  }
];

const AnimatedCounter = ({ end, suffix = "", text }) => {
  const counterRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(counterRef.current, 
      { innerHTML: 0 }, 
      { 
        innerHTML: end, 
        duration: 2.5, 
        snap: { innerHTML: 1 }, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%"
        }
      }
    );
  }, [end]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-[40px] md:text-[56px] font-black text-white font-serif mb-2 flex items-center">
        <span ref={counterRef}>0</span><span className="text-[#C5D73F]">{suffix}</span>
      </div>
      <p className="text-[13px] text-gray-400 uppercase tracking-widest font-bold text-center">{text}</p>
    </div>
  );
};

const Home = () => {
  const [items, setItems] = useState(sliderData);
  const cardsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Destination Cards Stagger
    gsap.fromTo(cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 80%'
        }
      }
    );
  }, []);

  const handleNext = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  const handlePrev = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  };

  const destinations = [
    { name: "Manali", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1000&auto=format&fit=crop", desc: "Discover the snow peaks" },
    { name: "Kashmir", image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop", desc: "The heaven on earth" },
    { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop", desc: "Pristine beaches await" },
    { name: "Rishikesh", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1000&auto=format&fit=crop", desc: "Adventure capital of India" }
  ];

  const features = [
    { icon: <HeartHandshake />, title: "Tried and Trusted", desc: "We're trusted worldwide by 20 million travelers just like you." },
    { icon: <Shield />, title: "Reliable Support", desc: "We're here for you. Reach out to us anytime by phone, email, or chat." },
    { icon: <Map />, title: "One-stop Travel Partner", desc: "Your search ends here. We've got your entire trip covered!" }
  ];

  const upcomingBatches = [
    { dest: "Manali Snow Trek", dates: "12 Nov - 16 Nov", price: "₹4,999", seats: "5 Seats Left", status: "Filling Fast", color: "text-[#C5D73F]", bg: "bg-[#C5D73F]/10" },
    { dest: "Kashmir Backpacking", dates: "20 Nov - 25 Nov", price: "₹8,999", seats: "12 Seats Left", status: "Available", color: "text-white", bg: "bg-white/10" },
    { dest: "Goa Party Trip", dates: "01 Dec - 05 Dec", price: "₹6,499", seats: "2 Seats Left", status: "Almost Full", color: "text-[#C5D73F]", bg: "bg-[#C5D73F]/10" },
    { dest: "Rishikesh Rafting", dates: "15 Dec - 17 Dec", price: "₹2,999", seats: "Waitlist", status: "Sold Out", color: "text-red-400", bg: "bg-red-400/10" }
  ];

  const testimonials = [
    { name: "Rahul Sharma", role: "Solo Backpacker", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop", text: "The Manali trek was the best experience of my life. The trip captain was amazing and everything was managed perfectly. Definitely traveling with them again!" },
    { name: "Priya & Friends", role: "College Group", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop", text: "We took the Goa party trip and it exceeded all expectations. No hidden costs, safe environment, and the best DJ nights. A must for college students." },
    { name: "Amit Verma", role: "Adventure Junkie", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop", text: "River rafting in Rishikesh was an adrenaline rush like no other. The campsite was beautiful and the food was surprisingly good for a budget trip." }
  ];

  return (
    <div className="bg-[#111111] min-h-screen font-sans text-white overflow-x-hidden">
      <style>{`
        .hero-slider-container {
          height: 100vh;
          position: relative;
          overflow: hidden;
          width: 100%;
          background: #111;
        }

        .hero-slider {
          margin: 0;
          padding: 0;
        }

        .hero-item {
          width: 200px;
          height: 300px;
          list-style-type: none;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          background-position: center;
          background-size: cover;
          border-radius: 20px;
          box-shadow: 0 20px 30px rgba(0,0,0,0.3) inset;
          transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s, border-radius 0.75s;
        }
        
        .hero-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2);
          border-radius: inherit;
        }

        .hero-item:nth-child(1), .hero-item:nth-child(2) {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform: none;
          border-radius: 0;
          box-shadow: none;
          opacity: 1;
        }
        
        .hero-item:nth-child(1)::after, .hero-item:nth-child(2)::after {
          background: rgba(0,0,0,0.6);
        }

        .hero-item:nth-child(3) { left: 50%; }
        .hero-item:nth-child(4) { left: calc(50% + 220px); }
        .hero-item:nth-child(5) { left: calc(50% + 440px); }
        .hero-item:nth-child(6) { left: calc(50% + 660px); opacity: 0; }

        .hero-content {
          width: min(30vw, 500px);
          position: absolute;
          top: 50%;
          left: 5rem;
          transform: translateY(-50%);
          color: white;
          background: rgba(17, 17, 17, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 30px;
          border: 1px solid rgba(197, 215, 63, 0.3);
          opacity: 0;
          display: none;
          z-index: 10;
        }

        .hero-item:nth-child(2) .hero-content {
          display: block;
          animation: showContent 0.75s ease-in-out 0.3s forwards;
        }

        @keyframes showContent {
          0% {
            filter: blur(5px);
            transform: translateY(calc(-50% + 75px));
            opacity: 0;
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(-50%);
          }
        }

        .hero-nav {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          display: flex;
          gap: 1rem;
        }

        .hero-nav button {
          background-color: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          transition: all 0.3s;
        }

        .hero-nav button:hover {
          background-color: #C5D73F;
          color: #111;
          border-color: #C5D73F;
          transform: scale(1.1);
        }

        @media (max-width: 900px) {
          .hero-item {
            width: 160px;
            height: 270px;
          }
          .hero-item:nth-child(3) { left: 50%; }
          .hero-item:nth-child(4) { left: calc(50% + 170px); }
          .hero-item:nth-child(5) { left: calc(50% + 340px); }
          .hero-item:nth-child(6) { left: calc(50% + 510px); opacity: 0; }
          .hero-content {
            width: min(50vw, 400px);
            left: 2rem;
          }
        }

        @media (max-width: 650px) {
          .hero-item {
            width: 130px;
            height: 200px;
          }
          .hero-item:nth-child(3) { left: 50%; }
          .hero-item:nth-child(4) { left: calc(50% + 140px); }
          .hero-item:nth-child(5) { left: calc(50% + 280px); }
          .hero-item:nth-child(6) { left: calc(50% + 420px); opacity: 0; }
          
          .hero-content {
            left: 1rem;
            width: calc(100% - 2rem);
            top: auto;
            bottom: 8rem;
            transform: none;
            padding: 20px;
          }
          @keyframes showContent {
            0% {
              filter: blur(5px);
              transform: translateY(40px);
              opacity: 0;
            }
            100% {
              opacity: 1;
              filter: blur(0);
              transform: translateY(0);
            }
          }
        }
      `}</style>
      
      {/* Animated Hero Slider Section (INTACT AS REQUESTED) */}
      <div className="hero-slider-container">
        <ul className="hero-slider">
          {items.map((item) => (
            <li 
              key={item.id} 
              className="hero-item" 
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="hero-content">
                <h2 className="text-[32px] md:text-[48px] font-serif font-bold mb-3 text-white drop-shadow-md leading-tight">{item.title}</h2>
                <p className="text-[14px] md:text-[16px] leading-relaxed mb-6 text-white/80">
                  {item.desc}
                </p>
                <Link to="/tours" className="inline-block px-6 py-2.5 bg-[#C5D73F] hover:bg-[#b0c036] text-[#111] rounded-full font-bold text-[14px] transition-colors shadow-lg">
                  Explore Now
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="hero-nav">
          <button onClick={handlePrev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Featured Destinations - Dark Theme & Lime Accents */}
      <div className="py-24 bg-[#111] border-b border-[#222]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-between items-end mb-16">
            <div className="text-center w-full">
              <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-3">The Wonders Of Nature</h2>
              <p className="text-[14px] text-gray-400">We seek to provide the authentic content for traveller around the world.</p>
            </div>
            {/* The right side arrow as per design */}
            <div className="hidden md:block absolute right-8 mt-4">
              <Link to="/tours" className="w-10 h-10 rounded-full bg-[#C5D73F] flex items-center justify-center text-[#111] hover:scale-110 transition-transform">
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div 
                key={index} 
                ref={el => cardsRef.current[index] = el}
                className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Frosted glass block at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-5 bg-[#C5D73F]/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={16} className="text-[#111]" />
                    <h3 className="text-[18px] font-serif font-bold text-[#111]">{dest.name}</h3>
                  </div>
                  <p className="text-[12px] text-[#111]/80 font-medium ml-6">{dest.desc}</p>
                </div>
                
                <div className="absolute bottom-5 left-5 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#C5D73F]" />
                    <h3 className="text-[18px] font-serif font-bold text-white">{dest.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Group Batches Section */}
      <div className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="text-[#C5D73F]" size={24} />
                <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white leading-none">Upcoming Group Batches</h2>
              </div>
              <p className="text-[14px] text-gray-400 max-w-xl">Join like-minded backpackers on our fixed-departure group trips. Everything is managed by our Trip Captains, you just pack your bags.</p>
            </div>
            <Link to="/tours" className="px-6 py-2.5 border border-[#C5D73F] text-[#C5D73F] hover:bg-[#C5D73F] hover:text-[#111] rounded-full font-bold text-[13px] uppercase tracking-wider transition-colors shrink-0">
              View All Trips
            </Link>
          </div>

          <div className="bg-[#111] border border-[#333] rounded-xl overflow-hidden shadow-2xl">
            {/* Table Header (Hidden on mobile) */}
            <div className="hidden md:grid grid-cols-5 gap-4 p-6 border-b border-[#333] text-[12px] font-bold text-gray-500 uppercase tracking-widest bg-[#151515]">
              <div className="col-span-2">Trip Destination</div>
              <div>Dates</div>
              <div>Price</div>
              <div>Availability</div>
            </div>
            
            {/* Table Rows */}
            <div className="flex flex-col">
              {upcomingBatches.map((batch, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 border-b border-[#333] hover:bg-[#151515] transition-colors items-center">
                  <div className="col-span-2 flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-[#C5D73F]" />
                    </div>
                    <span className="text-[18px] font-bold text-white">{batch.dest}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2 md:mb-0">
                    <Clock size={16} className="text-gray-500 md:hidden" />
                    <span className="text-[14px] text-gray-300 font-medium">{batch.dates}</span>
                  </div>
                  
                  <div className="text-[18px] font-bold text-white mb-4 md:mb-0">
                    {batch.price}
                  </div>
                  
                  <div className="flex items-center justify-between md:block">
                    <div className="flex flex-col gap-1">
                      <span className={`text-[12px] font-bold px-3 py-1 rounded-full w-max ${batch.bg} ${batch.color}`}>
                        {batch.status}
                      </span>
                      <span className="text-[12px] text-gray-500 font-medium ml-1">{batch.seats}</span>
                    </div>
                    <Link to="/tours" className="md:hidden px-6 py-2 border border-[#C5D73F] text-[#C5D73F] font-bold rounded-full text-[12px] hover:bg-[#C5D73F] hover:text-[#111]">
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Trust Counters Section */}
      <div className="py-24 bg-[#111] relative overflow-hidden border-b border-[#222]">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5D73F]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <AnimatedCounter end={120} suffix="+" text="Trips Completed" />
            <AnimatedCounter end={5000} suffix="+" text="Happy Backpackers" />
            <AnimatedCounter end={50} suffix="+" text="Offbeat Locations" />
            <AnimatedCounter end={4} suffix=".9" text="Average Rating" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-[#111] relative">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white">Reason For Choosing Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pb-16">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-20 h-20 rounded-full border border-[#C5D73F] flex items-center justify-center mb-6 text-[#C5D73F] group-hover:bg-[#C5D73F] group-hover:text-[#111] transition-all duration-300">
                  {React.cloneElement(feature.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h4 className="text-[18px] font-bold text-[#C5D73F] mb-3">{feature.title}</h4>
                <p className="text-[13px] text-gray-400 leading-relaxed max-w-xs">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Neon Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5D73F]/50 to-transparent"></div>
        </div>
      </div>

      {/* Traveler Diaries / Testimonials */}
      <div className="py-24 bg-[#1A1A1A] border-b border-[#222]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-4">Traveler Diaries</h2>
            <div className="w-16 h-1 bg-[#C5D73F] mx-auto mb-6"></div>
            <p className="text-[14px] text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here is what our backpackers have to say about their adventures with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[#C5D73F] transition-colors relative group shadow-lg flex flex-col h-full hover:-translate-y-2 duration-300">
                {/* Quote Icon */}
                <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="#C5D73F" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#C5D73F] fill-[#C5D73F]" />
                  ))}
                </div>
                
                <p className="text-[14px] text-gray-300 italic mb-8 leading-relaxed relative z-10 flex-grow">"{t.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#333] group-hover:border-[#C5D73F] transition-colors" />
                  <div>
                    <h4 className="text-[15px] font-bold text-white leading-tight">{t.name}</h4>
                    <span className="text-[12px] text-[#C5D73F] uppercase tracking-wider font-bold">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="py-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Masonry/Bento Grid Left */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-[500px]">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-sm group">
                <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Mountain" />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-sm group">
                <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Forest" />
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-sm group">
                <img src="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="River" />
              </div>
            </div>
            
            {/* Text Right */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-white mb-4 leading-tight">
                Here's makes a vacation perfect for you!
              </h2>
              <div className="w-16 h-1 bg-[#C5D73F] mb-8"></div>
              
              <p className="text-[14px] text-gray-400 leading-relaxed mb-10 max-w-md">
                Whether you're planning a family vacation with your pet, a relaxing weekend getaway, or an adventurous excursion, vacation rentals are ideal for trips of all types. You can find everything from charming mountain cabins and lakeside lodges to breathtaking oceanfront homes.
              </p>
              
              <Link to="/tours" className="inline-block px-8 py-3 bg-[#C5D73F] text-[#111] rounded-full font-bold text-[14px] hover:bg-white hover:text-black transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section with Box overlay */}
      <div className="py-24 bg-[#111]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-4">Explore The Nature With Us</h2>
            <div className="w-24 h-[1px] bg-[#C5D73F] mx-auto"></div>
          </div>
          
          <div className="relative h-[400px] w-full rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover opacity-60" alt="Forest Overlay" />
            
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full max-w-4xl h-full border border-[#C5D73F] relative p-8 flex flex-col justify-between">
                {/* Decorative nodes */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#C5D73F]"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#C5D73F]"></div>
                <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#C5D73F]"></div>
                
                <div className="max-w-xs bg-black/60 backdrop-blur-md p-4 rounded text-[12px] text-gray-300 border-l-2 border-[#C5D73F]">
                  Whether you're planning a family vacation with your pet, a relaxing weekend getaway...
                </div>
                
                <div className="max-w-xs bg-black/60 backdrop-blur-md p-4 rounded text-[12px] text-gray-300 border-l-2 border-[#C5D73F] self-end mt-auto">
                  Vacation with your pet, a relaxing weekend getaway, or an adventurous excursion...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
