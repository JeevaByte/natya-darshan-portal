
import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-natya-cream/30">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-natya-burgundy">
              About the Artist
            </h2>
            <p className="text-lg mb-4 text-natya-dark">
              With over 15 years of rigorous training under renowned gurus, I bring to life the ancient storytelling tradition of Bharatanatyam through authentic expression and technical precision.
            </p>
            <p className="text-lg mb-6 text-natya-dark">
              My journey in this sacred art form began at the tender age of seven, learning the intricate footwork, hand gestures, and facial expressions that form the foundation of this classical dance style from South India.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/80 p-4 rounded-lg shadow-md flex-1 min-w-[140px]">
                <h3 className="font-playfair text-xl text-natya-red font-bold">15+</h3>
                <p className="text-natya-dark">Years of Experience</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-md flex-1 min-w-[140px]">
                <h3 className="font-playfair text-xl text-natya-red font-bold">200+</h3>
                <p className="text-natya-dark">Performances</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg shadow-md flex-1 min-w-[140px]">
                <h3 className="font-playfair text-xl text-natya-red font-bold">20+</h3>
                <p className="text-natya-dark">Countries Visited</p>
              </div>
            </div>
            <Button 
              className="bg-natya-red hover:bg-natya-burgundy text-white"
            >
              My Dance Journey
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-natya-gold rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
                alt="Bharatanatyam Dancer" 
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-natya-red rounded-lg -z-10"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-natya-burgundy/90 text-white p-3 rounded-full w-20 h-20 flex items-center justify-center shadow-lg animate-mudra">
              <span className="font-playfair text-xs text-center">Natya<br/>Darshan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
