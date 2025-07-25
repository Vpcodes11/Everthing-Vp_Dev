import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Wifi, 
  Car, 
  Utensils, 
  Waves, 
  Mountain, 
  Calendar,
  Users,
  ChevronRight,
  Menu,
  X,
  Award,
  Shield,
  Crown
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-xl border-b border-gold-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <Crown className={`w-8 h-8 transition-colors duration-300 ${
                  scrollY > 50 ? 'text-gold-400' : 'text-white'
                }`} />
                <h1 className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
                  scrollY > 50 ? 'text-white' : 'text-white'
                }`}>
                  TATVA
                </h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              {['Home', 'About', 'Rooms', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:text-gold-400 relative group ${
                    scrollY > 50 ? 'text-white/80' : 'text-white/90'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors duration-300 p-2 ${
                scrollY > 50 ? 'text-white' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-xl border-b border-gold-500/20`}>
          <div className="px-4 py-2 space-y-2">
            {['Home', 'About', 'Rooms', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-white/80 hover:text-gold-400 transition-colors text-sm tracking-widest uppercase"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, gold 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gold-400 w-16"></div>
              <Crown className="mx-4 text-gold-400" size={32} />
              <div className="h-px bg-gold-400 w-16"></div>
            </div>
            <p className="text-gold-400 text-sm tracking-[0.3em] uppercase font-light">Luxury Redefined</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light mb-8 animate-fade-in-up animation-delay-300 tracking-tight">
            TATVA
            <span className="block text-4xl md:text-5xl text-gold-400 font-extralight tracking-[0.2em] mt-2">
              CLUB & RESORTS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 animate-fade-in-up animation-delay-600 font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
            Where timeless elegance meets contemporary luxury in an extraordinary escape
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-900">
            <button 
              onClick={() => scrollToSection('rooms')}
              className="bg-gold-500 hover:bg-gold-600 text-black px-10 py-4 font-medium tracking-widest uppercase text-sm transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative">
              Explore Rooms
              </span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-10 py-4 font-medium tracking-widest uppercase text-sm transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gold-400 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="relative">
              Book Now
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-gold-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, gold 1px, transparent 1px), linear-gradient(-45deg, gold 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-px bg-gold-400 w-12"></div>
                  <span className="mx-4 text-gold-400 text-sm tracking-[0.3em] uppercase">About Tatva</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                  Redefining
                  <span className="block text-gold-400">Luxury</span>
                </h2>
              </div>
              
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Nestled in nature's most pristine sanctuary, Tatva Club & Resorts represents the pinnacle of 
                contemporary luxury hospitality. Every detail has been meticulously crafted to create an 
                unparalleled experience that transcends the ordinary.
              </p>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Award className="text-gold-400" size={28} />
                  </div>
                  <div className="text-3xl font-light text-gold-400 mb-1">150+</div>
                  <div className="text-white/60 text-sm tracking-wide uppercase">Luxury Suites</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Shield className="text-gold-400" size={28} />
                  </div>
                  <div className="text-3xl font-light text-gold-400 mb-1">25+</div>
                  <div className="text-white/60 text-sm tracking-wide uppercase">Years Legacy</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Star className="text-gold-400 fill-current" size={28} />
                  </div>
                  <div className="text-3xl font-light text-gold-400 mb-1">5★</div>
                  <div className="text-white/60 text-sm tracking-wide uppercase">Platinum Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-none">
                <img
                  src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Resort View"
                  className="w-full h-[600px] object-cover filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-black/90 backdrop-blur-xl p-8 border border-gold-500/20">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-gold-400 fill-current" size={18} />
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-2 font-light">Exceptional Experience</p>
                <p className="text-white/60 text-xs tracking-wide">Rated by 2,500+ distinguished guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, gold 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gold-400 w-16"></div>
              <span className="mx-4 text-gold-500 text-sm tracking-[0.3em] uppercase">Premium Amenities</span>
              <div className="h-px bg-gold-400 w-16"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-black mb-6 leading-tight">
              Curated
              <span className="block text-gold-500">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Immerse yourself in our world-class facilities, each designed to elevate your stay beyond expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Waves, 
                title: 'Infinity Pool', 
                desc: 'Temperature-controlled infinity pool with panoramic views',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Utensils, 
                title: 'Michelin Dining', 
                desc: 'Award-winning culinary experiences by renowned chefs',
                gradient: 'from-orange-500 to-red-500'
              },
              { 
                icon: Mountain, 
                title: 'Wellness Spa', 
                desc: 'Holistic wellness treatments in serene surroundings',
                gradient: 'from-green-500 to-emerald-500'
              },
              { 
                icon: Wifi, 
                title: 'Smart Connectivity', 
                desc: 'Ultra-high-speed fiber optic internet throughout',
                gradient: 'from-purple-500 to-indigo-500'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-gold-200 relative overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <service.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-light text-black mb-4 group-hover:text-gold-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{service.desc}</p>
                  
                  {/* Decorative line */}
                  <div className="w-0 h-0.5 bg-gold-400 mt-6 group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, gold 1deg, transparent 2deg)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gold-400 w-16"></div>
              <span className="mx-4 text-gold-400 text-sm tracking-[0.3em] uppercase">Accommodations</span>
              <div className="h-px bg-gold-400 w-16"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              Signature
              <span className="block text-gold-400">Suites</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Each suite is a masterpiece of design, offering unparalleled comfort and breathtaking views
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Ocean Panorama Suite',
                price: '$899',
                features: ['180° Ocean Views', 'King Suite', 'Private Infinity Pool'],
                badge: 'Most Popular'
              },
              {
                image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Presidential Villa',
                price: '$1,899',
                features: ['Private Beach Access', 'Butler Service', 'Helicopter Pad'],
                badge: 'Exclusive'
              },
              {
                image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Garden Sanctuary',
                price: '$699',
                features: ['Tropical Gardens', 'Outdoor Pavilion', 'Spa Bathroom'],
                badge: 'Serene'
              }
            ].map((room, index) => (
              <div
                key={index}
                className="group bg-black/50 backdrop-blur-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gold-500/20 hover:border-gold-400/40 relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-gold-500 text-black px-4 py-1 text-xs tracking-widest uppercase font-medium">
                    {room.badge}
                  </div>
                  
                  {/* Price */}
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 border border-gold-400/30">
                    <span className="text-gold-400 font-light text-lg">{room.price}</span>
                    <span className="text-white/60 text-sm">/night</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-light text-white mb-6 group-hover:text-gold-400 transition-colors duration-300">{room.title}</h3>
                  <div className="space-y-3 mb-8">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/70">
                        <div className="w-1 h-1 bg-gold-400 rounded-full mr-3"></div>
                        <span className="text-sm tracking-wide">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-transparent border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black py-4 font-medium tracking-widest uppercase text-sm transition-all duration-500 relative overflow-hidden group/btn">
                    <span className="absolute inset-0 bg-gold-400 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></span>
                    <span className="relative">
                    Book Now
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gold-400 w-16"></div>
              <span className="mx-4 text-gold-500 text-sm tracking-[0.3em] uppercase">Gallery</span>
              <div className="h-px bg-gold-400 w-16"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-black mb-6 leading-tight">
              Visual
              <span className="block text-gold-500">Journey</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-square cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 filter brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, gold 0px, gold 1px, transparent 1px, transparent 60px)`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="space-y-6 mb-12">
                <div className="flex items-center">
                  <div className="h-px bg-gold-400 w-12"></div>
                  <span className="mx-4 text-gold-400 text-sm tracking-[0.3em] uppercase">Contact</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
                  Begin Your
                  <span className="block text-gold-400">Journey</span>
                </h2>
              </div>
              
              <p className="text-xl text-white/80 mb-12 font-light leading-relaxed">
                Our concierge team is available 24/7 to craft your perfect escape
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
                    <MapPin className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-wide">LOCATION</h3>
                    <p className="text-white/70 font-light">Paradise Cove, Maldives<br />North Malé Atoll</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Phone className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-wide">RESERVATIONS</h3>
                    <p className="text-white/70 font-light">+960 123 4567<br />Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Mail className="text-gold-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2 tracking-wide">EMAIL</h3>
                    <p className="text-white/70 font-light">concierge@tatva.luxury<br />reservations@tatva.luxury</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-xl p-10 border border-gold-500/20">
              <h3 className="text-3xl font-light text-white mb-8 tracking-wide">Reserve Your Suite</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm tracking-widest uppercase">First Name</label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white placeholder-white/40 transition-colors duration-300"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm tracking-widest uppercase">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white placeholder-white/40 transition-colors duration-300"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/70 text-sm tracking-widest uppercase">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white placeholder-white/40 transition-colors duration-300"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm tracking-widest uppercase">Check-in</label>
                    <input
                      type="date"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm tracking-widest uppercase">Check-out</label>
                    <input
                      type="date"
                      className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/70 text-sm tracking-widest uppercase">Guests</label>
                  <select className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white transition-colors duration-300">
                    <option className="bg-gray-900">1 Guest</option>
                    <option className="bg-gray-900">2 Guests</option>
                    <option className="bg-gray-900">3 Guests</option>
                    <option className="bg-gray-900">4+ Guests</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/70 text-sm tracking-widest uppercase">Special Requests</label>
                  <textarea
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b border-gold-500/30 focus:border-gold-400 focus:ring-0 text-white placeholder-white/40 resize-none transition-colors duration-300"
                    placeholder="Any special requirements or preferences..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black py-4 font-medium tracking-widest uppercase text-sm transition-all duration-500 transform hover:scale-105 relative overflow-hidden group mt-8"
                >
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <span className="relative">
                  Reserve Now
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-3">
              <Crown className="text-gold-400" size={32} />
              <h3 className="text-3xl font-light text-white tracking-widest">TATVA</h3>
            </div>
            <p className="text-white/60 font-light tracking-wide">Crafting extraordinary experiences since 1995</p>
            <div className="flex justify-center space-x-12 text-white/60">
              <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-sm tracking-widest uppercase">Privacy</a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-sm tracking-widest uppercase">Terms</a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-300 text-sm tracking-widest uppercase">Contact</a>
            </div>
            <div className="pt-8 border-t border-gold-500/10">
              <p className="text-white/40 text-sm tracking-wide">&copy; 2024 Tatva Club & Resorts. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;