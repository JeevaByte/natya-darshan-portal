
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80')`,
          filter: 'brightness(0.5)'
        }}
      />
      
      {/* Overlay with texture */}
      <div 
        className="absolute inset-0 bg-natya-dark/30 z-5 mix-blend-multiply"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23D4AF37' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-natya-dark/90 via-natya-dark/40 to-transparent z-10" />
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="opacity-0 animate-[fade-in_1.5s_ease-out_forwards]">
          {/* Decorative element */}
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-2 border-natya-gold/30 animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border-2 border-natya-gold/50 animate-[spin_8s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-natya-gold/70"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-playfair tracking-wide">
            <span className="block opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">Natya</span>
            <span className="block text-natya-gold opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">Darshan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-natya-cream font-light mb-10 max-w-2xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
            Preserving the timeless art of Bharatanatyam through passion, precision, and devotion
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-[fade-in_1s_ease-out_2s_forwards]">
            <Button 
              className="bg-natya-red hover:bg-natya-burgundy text-white font-medium px-8 py-3"
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
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-[fade-in_1s_ease-out_2.5s_forwards]">
        <a 
          href="#about" 
          className="flex flex-col items-center text-white hover:text-natya-gold transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Discover More</span>
          <div className="w-10 h-10 border-2 border-white/50 hover:border-natya-gold rounded-full flex items-center justify-center animate-bounce">
            <ChevronDown className="h-5 w-5" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
