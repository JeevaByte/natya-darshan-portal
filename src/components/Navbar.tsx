
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Performances", href: "#performances" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-background/95 shadow-md py-2" 
        : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className={`font-playfair text-2xl md:text-3xl font-bold ${
            scrolled ? "text-natya-burgundy" : "text-natya-gold"
          }`}
        >
          Natya Darshan
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-natya-red transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground hover:text-natya-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
