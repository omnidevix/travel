import React, { useEffect, useRef } from 'react';
import { Mountain, Tent, Compass, ShieldCheck, Heart, Users, CheckCircle2, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fade up animations for sections
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          }
        );
      }
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen font-sans text-white">

      {/* 1. New Adventure Hero Section */}
      <div className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#111]">

        {/* Top Accent Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[#C5D73F] z-20"></div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt="Mountain Peaks"
            className="w-full h-full object-cover object-bottom opacity-70"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Dark gradient at bottom to blend into the dark theme */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#111111] to-transparent z-10"></div>
        </div>

        {/* Main Masked Text Content */}
        <div className="relative z-10 w-full text-center flex flex-col items-center mt-10">
          <h1
            className="text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-sans font-black text-white uppercase tracking-tighter leading-none select-none drop-shadow-xl"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)',
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)'
            }}
          >
            Adventure
          </h1>
          <p className="text-[13px] md:text-[16px] text-white font-medium tracking-wide mt-[-20px] md:mt-[-40px] z-20 drop-shadow-2xl">
            Create Your Outdoor Adventure. Discover With Us.
          </p>
        </div>
      </div>

      {/* 2. Story / Creatives Section */}
      <div className="py-24 md:py-32 container mx-auto px-4 max-w-4xl text-center" ref={addToRefs}>
        <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-8">A Get Away For Creatives</h2>
        <p className="text-[14px] md:text-[15px] text-gray-400 leading-relaxed mb-16 max-w-3xl mx-auto">
          WanderIndia is a weekend getaway for pixel pushers, creatives, photographers, and filmmakers. It is a creative experience that will get you out from behind your computer and surrounded by creativity, inspiration, and relaxation. WanderIndia was created for you to step away from the chaos for a moment in time to refresh and recharge so you can take on the world with creativity!
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-20 h-20 rounded-full border border-[#C5D73F] flex items-center justify-center mb-6 text-[#C5D73F] group-hover:bg-[#C5D73F] group-hover:text-[#111] transition-all duration-300">
              <Mountain size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#C5D73F]">Trekking</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-20 h-20 rounded-full border border-[#C5D73F] flex items-center justify-center mb-6 text-[#C5D73F] group-hover:bg-[#C5D73F] group-hover:text-[#111] transition-all duration-300">
              <Tent size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#C5D73F]">Camping</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-20 h-20 rounded-full border border-[#C5D73F] flex items-center justify-center mb-6 text-[#C5D73F] group-hover:bg-[#C5D73F] group-hover:text-[#111] transition-all duration-300">
              <Compass size={32} strokeWidth={1.5} />
            </div>
            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#C5D73F]">Adventures</span>
          </div>
        </div>
      </div>

      {/* Old Section: Tips for Winter */}
      <div className="py-12 md:py-20 overflow-hidden" ref={addToRefs}>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 md:pr-10 text-center md:text-left z-10">
              <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-6 leading-tight">
                Tips For Travelling In<br />Winter Season
              </h2>
              <div className="w-16 h-1 bg-[#C5D73F] mb-6 mx-auto md:mx-0"></div>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-8">
                It's the holiday season and you are looking forward to your first winter adventure! After all the excitement, you are suddenly at a loss at what to prepare. We know it can be confusing with all that bulky coats and jackets. So here are our 10 tips we have prepared for your maiden winter trip! Finally you nailed down to a dream destination! But there is plenty of homework to be done. Even if you are travelling with a tour, you should also take some of these points into consideration.
              </p>
              <button className="px-8 py-2.5 border border-[#C5D73F] rounded-full text-[#C5D73F] font-bold tracking-[0.1em] text-[12px] uppercase hover:bg-[#C5D73F] hover:text-[#111] transition-all duration-300">
                Read More
              </button>
            </div>
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
              {/* Image with vignette/fade effect */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-80"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=2069&auto=format&fit=crop')`,
                  WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)',
                  maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)',
                  transform: 'scale(1.2)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Old Section: Easy Way */}
      <div className="py-12 md:py-20 overflow-hidden" ref={addToRefs}>
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
              {/* Image with vignette/fade effect */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center grayscale opacity-80"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')`,
                  WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                  maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                  transform: 'scale(1.1)'
                }}
              ></div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left z-10">
              <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-6 leading-tight">
                Easy Way To Make<br />Travel Faster
              </h2>
              <div className="w-16 h-1 bg-[#C5D73F] mb-6 mx-auto md:mx-0"></div>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-8">
                The right to travel should be based on who you are, not where you were born or the colour of your passport. The current system is outdated, it's not just unfair, it's inefficient. Over the past decade, we've seen would-be terrorists travelling with passports from countries long seen as low risk. We are beginning to move to a future where travel is facilitated by your digital identity, built with unique biometrics and "pushed" out to governments and companies with permission, to ease travel.
              </p>
              <button className="px-8 py-2.5 border border-[#C5D73F] rounded-full text-[#C5D73F] font-bold tracking-[0.1em] text-[12px] uppercase hover:bg-[#C5D73F] hover:text-[#111] transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Safety & Our Promise */}
      <div className="py-20 bg-[#1A1A1A] border-y border-[#333]" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-4">Our Backpacking Promise</h2>
            <div className="w-16 h-1 bg-[#C5D73F] mx-auto mb-6"></div>
            <p className="text-[14px] text-gray-400 max-w-2xl mx-auto">We take your experience and safety seriously. Here is why thousands of youth trust us for their first solo or group trip.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: "Verified Campsites", desc: "Every stay is pre-checked by our team for safety, hygiene, and the perfect vibe." },
              { icon: <Users size={32} strokeWidth={1.5} />, title: "Expert Trip Captains", desc: "Our captains are trained in first-aid, crisis management, and keeping the energy high." },
              { icon: <Heart size={32} strokeWidth={1.5} />, title: "Female Traveler Safety", desc: "Zero tolerance policy and dedicated female co-captains on large group departures." },
              { icon: <CheckCircle2 size={32} strokeWidth={1.5} />, title: "No Hidden Costs", desc: "What you see is what you pay. No surprise charges during the trip, ever." }
            ].map((feature, i) => (
              <div key={i} className="bg-[#111] p-8 rounded-xl border border-[#333] hover:border-[#C5D73F] transition-all group hover:-translate-y-2 duration-300">
                <div className="text-[#C5D73F] mb-6 group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h4 className="text-[18px] font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Meet The Team */}
      <div className="py-24" ref={addToRefs}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[28px] md:text-[36px] font-serif font-bold text-white mb-4">Meet The Trip Captains</h2>
              <div className="w-16 h-1 bg-[#C5D73F] mb-6"></div>
              <p className="text-[14px] text-gray-400 max-w-xl">The heart and soul of WanderIndia. These are the crazy energetic people who will make sure your trip is unforgettable.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Kabir Singh", role: "Chief Explorer / Founder", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" },
              { name: "Aisha Sharma", role: "Vibe Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
              { name: "Rohan Das", role: "Mountain Expert", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl h-[400px]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#C5D73F] text-[12px] font-bold tracking-widest uppercase mb-2 block">{member.role}</span>
                  <h4 className="text-[24px] font-bold text-white mb-4">{member.name}</h4>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <button className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-white hover:bg-[#C5D73F] hover:text-[#111] hover:border-[#C5D73F] transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#333] flex items-center justify-center text-white hover:bg-[#C5D73F] hover:text-[#111] hover:border-[#C5D73F] transition-all">
                      <Flame size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Dynamic Marquee CTA Section */}
      <div className="py-24 md:py-32 bg-[#C5D73F] text-[#111111] overflow-hidden" ref={addToRefs}>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}</style>

        <div className="mb-16 -mx-4 md:-mx-8">
          <div className="animate-marquee items-center gap-10">
            {[...Array(6)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-[60px] md:text-[100px] font-serif font-bold uppercase tracking-wider leading-none">
                  WanderIndia
                </span>
                <span className="text-[40px] md:text-[60px] text-[#111] opacity-60">✦</span>
                <span className="text-[60px] md:text-[100px] font-serif font-bold uppercase tracking-wider leading-none text-transparent" style={{ WebkitTextStroke: '2px #111' }}>
                  Explore More
                </span>
                <span className="text-[40px] md:text-[60px] text-[#111] opacity-60">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-[24px] md:text-[36px] font-serif font-bold mb-10 leading-tight">
            Ready to pack your bags and go on the adventure of a lifetime?
          </h2>
          <Link to="/tours" className="inline-block px-12 py-4 bg-[#111111] text-[#C5D73F] rounded-full font-bold text-[14px] uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-2xl">
            Find Your Trip
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;
