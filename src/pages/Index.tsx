
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PerformanceSection from "@/components/PerformanceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PerformingGroup",
    "name": "Natya Darshan",
    "description": "Classical Bharatanatyam dance performances and cultural education.",
    "url": "https://natyajanrani.com",
    "image": "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
    "founder": {
      "@type": "Person",
      "name": "Janrani"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "email": "contact@natyajanrani.com",
      "contactType": "Customer Service"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Natya Darshan - Bharatanatyam Dance Portfolio</title>
        <meta name="description" content="Experience the divine storytelling and rhythmic precision of traditional Bharatanatyam choreographies by Natya Darshan." />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <AboutSection />
      <PerformanceSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
