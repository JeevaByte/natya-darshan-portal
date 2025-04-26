
import React from "react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80')`,
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-natya-dark/80 via-natya-dark/40 to-transparent z-10" />
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-playfair tracking-wide">
            Natya Darshan
          </h1>
          <p className="text-xl md:text-2xl text-natya-cream font-light mb-8 max-w-2xl mx-auto">
            Preserving the timeless art of Bharatanatyam through passion, precision, and devotion
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-natya-red hover:bg-natya-burgundy text-white font-medium px-6 py-2.5"
              size="lg"
            >
              Upcoming Performances
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-natya-gold text-natya-gold hover:bg-natya-gold/10"
              size="lg"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white hover:text-natya-gold transition-colors"
        >
          <span className="text-sm mb-2">Discover More</span>
          <div className="w-8 h-8 border-2 border-white hover:border-natya-gold rounded-full flex items-center justify-center animate-bounce">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
