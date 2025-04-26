import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/natyajanrani", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@natyajanrani", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com/natyajanrani", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/natyajanrani", label: "Twitter" }
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-natya-burgundy">
            Get in Touch
          </h2>
          <p className="text-lg text-natya-dark max-w-2xl mx-auto">
            Reach out for performances, collaborations, workshops, or any inquiries about Bharatanatyam.
          </p>
        </div>
        
        <Card className="border-natya-gold/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div 
              className="bg-cover bg-center relative py-12 px-6 md:py-16 md:px-8" 
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80')`,
              }}
            >
              <div className="absolute inset-0 bg-natya-burgundy/80"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="space-y-6 text-natya-cream">
                  <div className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mr-4 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-white mb-1">Phone</p>
                      <p>+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mr-4 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-white mb-1">Email</p>
                      <p>contact@natyajanrani.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 mr-4 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-white mb-1">Location</p>
                      <p>Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-medium text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <a 
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                        aria-label={label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-natya-burgundy mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-sm font-medium text-natya-dark mb-1"
                    >
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-natya-dark mb-1"
                    >
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="Your email" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-sm font-medium text-natya-dark mb-1"
                  >
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="Message subject" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-natya-dark mb-1"
                  >
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Write your message here..." 
                    className="w-full h-32"
                  />
                </div>
                
                <Button 
                  className="w-full bg-natya-burgundy hover:bg-natya-red text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
