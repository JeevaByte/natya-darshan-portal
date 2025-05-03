
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube, Download, ExternalLink } from "lucide-react";

const performances = [
  {
    id: 1,
    title: "Shiva Tandava",
    description: "A powerful portrayal of Lord Shiva's cosmic dance that represents the cycles of creation and destruction.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    venue: "National Theatre, Delhi",
    youtubeId: "dQw4w9WgXcQ" // Replace with actual YouTube video ID
  },
  {
    id: 2,
    title: "Krishna Leela",
    description: "Depicting the playful and divine stories of Lord Krishna through expressive Abhinaya and rhythmic footwork.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    date: "January 22, 2024",
    venue: "Cultural Center, Chennai",
    youtubeId: "dQw4w9WgXcQ" // Replace with actual YouTube video ID
  },
  {
    id: 3,
    title: "Devi Stuti",
    description: "An ode to the divine feminine energy through intricate expressions and dynamic movements.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    date: "November 10, 2023",
    venue: "International Arts Festival, Mumbai",
    youtubeId: "dQw4w9WgXcQ" // Replace with actual YouTube video ID
  }
];

const PerformanceSection: React.FC = () => {
  return (
    <section id="performances" className="section-padding bg-white relative overflow-hidden" aria-labelledby="performances-heading">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 border-t-2 border-l-2 border-natya-gold/20 -translate-x-12 -translate-y-12 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-natya-burgundy/20 translate-x-16 translate-y-16 rounded-br-3xl"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <span className="text-natya-gold text-sm uppercase tracking-wider font-medium mb-2 inline-block">Divine Expressions</span>
          <h2 id="performances-heading" className="text-3xl md:text-5xl font-bold mb-6 text-natya-burgundy font-playfair">
            Featured Performances
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-natya-gold/30 via-natya-gold to-natya-gold/30 mx-auto mb-6"></div>
          <p className="text-lg text-natya-dark max-w-3xl mx-auto leading-relaxed">
            Experience the divine storytelling and rhythmic precision of traditional Bharatanatyam choreographies brought to life on stage.
            Each performance embodies centuries of cultural heritage and spiritual connection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Video Section with improved styling */}
          <div className="lg:col-span-2 mb-12">
            <h3 className="text-2xl font-bold text-natya-burgundy mb-6 font-playfair flex items-center">
              <span className="w-8 h-1 bg-natya-gold mr-4"></span>
              Latest Performance
            </h3>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-natya-burgundy/20 via-natya-gold/20 to-natya-burgundy/20 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-natya-dark/5 backdrop-blur-sm">
                <iframe 
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${performances[0].youtubeId}`}
                  title={performances[0].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  aria-label={`Watch ${performances[0].title} performance video`}
                ></iframe>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600 italic">
                {performances[0].title} - {performances[0].venue}, {performances[0].date}
              </p>
              <Button 
                variant="link" 
                className="text-natya-burgundy hover:text-natya-red flex items-center gap-1"
                onClick={() => window.open(`https://youtube.com/watch?v=${performances[0].youtubeId}`, '_blank', 'noopener')}
              >
                <ExternalLink size={14} />
                Watch on YouTube
              </Button>
            </div>
          </div>
          
          {/* Performance Cards with improved styling */}
          {performances.map((performance) => (
            <Card 
              key={performance.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl border-natya-gold/20 hover:border-natya-gold group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={performance.image} 
                  alt={`Performance: ${performance.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-natya-dark to-transparent p-4">
                  <h3 className="text-white text-xl font-bold font-playfair">{performance.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-natya-dark mb-4 line-clamp-3">{performance.description}</p>
                <div className="flex justify-between text-sm text-natya-burgundy">
                  <time dateTime={performance.date.replace(/(\w+) (\d+), (\d+)/, "$3-$1-$2")} className="font-medium">
                    {performance.date}
                  </time>
                  <span>{performance.venue}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-natya-red text-natya-red hover:bg-natya-red hover:text-white gap-2 transition-colors"
                  onClick={() => window.open(`https://youtube.com/watch?v=${performance.youtubeId}`, '_blank', 'noopener')}
                  aria-label={`Watch ${performance.title} on YouTube`}
                >
                  <Youtube className="w-4 h-4" aria-hidden="true" />
                  Watch Performance
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16 space-y-4">
          <Button 
            className="bg-natya-burgundy hover:bg-natya-red text-white transition-colors shadow-lg hover:shadow-xl shadow-natya-burgundy/10 hover:shadow-natya-red/20"
            size="lg"
            aria-label="View all performances"
          >
            View All Performances
          </Button>
          <div>
            <a 
              href="https://drive.google.com/file/d/your-cv-file-id" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-natya-burgundy hover:text-natya-red transition-colors inline-flex items-center gap-2 mt-4 group"
              aria-label="Download performance resume"
            >
              <span className="border-b border-natya-burgundy/30 group-hover:border-natya-red pb-1">
                <Download className="w-4 h-4 inline-block mr-2" aria-hidden="true" />
                Download Performance Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
