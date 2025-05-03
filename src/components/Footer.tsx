
import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/natyajanrani", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@natyajanrani", label: "YouTube" },
    { icon: Facebook, href: "https://facebook.com/natyajanrani", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/natyajanrani", label: "Twitter" }
  ];
  
  return (
    <footer className="bg-natya-dark text-white py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-natya-gold mb-4">Natya Darshan</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Celebrating the sacred art of Bharatanatyam through performances, workshops, and cultural education. Keeping alive the traditions while embracing contemporary expressions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-natya-gold transition-colors p-2 hover:bg-white/5 rounded-full"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-natya-gold font-medium mb-4">Quick Links</h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                {["Home", "About", "Performances", "Gallery", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-gray-300 hover:text-natya-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="text-natya-gold font-medium mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-natya-gold" aria-hidden="true" />
                <a href="mailto:contact@natyajanrani.com" className="hover:text-natya-gold transition-colors">
                  contact@natyajanrani.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-natya-gold" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-natya-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <p className="mt-4">Chennai, Tamil Nadu, India</p>
            </address>
            <div className="mt-4">
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2 border-natya-gold text-natya-gold hover:bg-natya-gold/10"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/your-resume-file-id" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} Natya Darshan. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <div className="mt-4 md:mt-0 space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-natya-gold transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-natya-gold transition-colors">Terms of Service</a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
