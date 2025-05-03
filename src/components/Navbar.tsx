
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
        ? "bg-background/95 backdrop-blur-sm shadow-md py-2" 
        : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className={`font-playfair text-2xl md:text-3xl font-bold ${
            scrolled ? "text-natya-burgundy" : "text-natya-gold"
          } transition-colors duration-300`}
          aria-label="Natya Darshan - Home"
        >
          <span className="sr-only">Natya Darshan</span>
          <span className="flex items-center">
            <span className="relative">
              N<span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-natya-gold"></span>
            </span>
            <span className="ml-1">Darshan</span>
          </span>
        </a>
        
        {/* Desktop Navigation with underline indicators */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-8">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "group relative font-medium transition-colors hover:text-natya-red",
                    activeSection === link.href.substring(1) ? "text-natya-red" : scrolled ? "text-foreground" : "text-white",
                  )}
                >
                  <a href={link.href}>
                    {link.name}
                    <span 
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-natya-gold transform origin-left transition-all duration-300",
                        activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    ></span>
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
          )}
        </Button>
      </div>

      {/* Mobile Menu with animation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? "text-natya-red" 
                    : "text-foreground hover:text-natya-red"
                } py-2 border-b border-natya-gold/10`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-natya-burgundy hover:bg-natya-red text-white w-full mt-2">
              Contact Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
