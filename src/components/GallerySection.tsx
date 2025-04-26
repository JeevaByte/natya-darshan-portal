
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    alt: "Bharatanatyam pose with elaborate costume",
    category: "performance"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    alt: "Close-up of mudra hand gestures",
    category: "practice"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    alt: "Stage performance with dramatic lighting",
    category: "performance"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    alt: "Traditional costume details",
    category: "costume"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    alt: "Dance workshop with students",
    category: "teaching"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    alt: "Festival performance with musicians",
    category: "performance"
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openImage = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-natya-cream/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-natya-burgundy">
            Gallery
          </h2>
          <p className="text-lg text-natya-dark max-w-2xl mx-auto">
            Glimpses of performances, practice sessions, and artistic moments captured through the lens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer aspect-square"
              onClick={() => openImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-natya-dark/70 via-natya-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="inline-flex items-center text-natya-burgundy hover:text-natya-red transition-colors font-medium">
            <span>View Complete Gallery</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
