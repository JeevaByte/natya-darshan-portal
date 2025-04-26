
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const performances = [
  {
    id: 1,
    title: "Shiva Tandava",
    description: "A powerful portrayal of Lord Shiva's cosmic dance that represents the cycles of creation and destruction.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    venue: "National Theatre, Delhi"
  },
  {
    id: 2,
    title: "Krishna Leela",
    description: "Depicting the playful and divine stories of Lord Krishna through expressive Abhinaya and rhythmic footwork.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    date: "January 22, 2024",
    venue: "Cultural Center, Chennai"
  },
  {
    id: 3,
    title: "Devi Stuti",
    description: "An ode to the divine feminine energy through intricate expressions and dynamic movements.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    date: "November 10, 2023",
    venue: "International Arts Festival, Mumbai"
  }
];

const PerformanceSection: React.FC = () => {
  return (
    <section id="performances" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-natya-burgundy">
            Featured Performances
          </h2>
          <p className="text-lg text-natya-dark max-w-2xl mx-auto">
            Experience the divine storytelling and rhythmic precision of traditional Bharatanatyam choreographies brought to life on stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performances.map((performance) => (
            <Card 
              key={performance.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl border-natya-gold/20 hover:border-natya-gold"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={performance.image} 
                  alt={performance.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-natya-dark to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{performance.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-natya-dark mb-4">{performance.description}</p>
                <div className="flex justify-between text-sm text-natya-burgundy">
                  <span>{performance.date}</span>
                  <span>{performance.venue}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-natya-red text-natya-red hover:bg-natya-red hover:text-white"
                >
                  Watch Highlights
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-natya-burgundy hover:bg-natya-red text-white"
          >
            View All Performances
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
