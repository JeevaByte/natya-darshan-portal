
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PerformanceSection from "@/components/PerformanceSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
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
