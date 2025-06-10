
import React from 'react';
import { MapPin, Plane, Calendar, Star, Users, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TravelHomepage = () => {
  const destinations = [
    {
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      price: "$1,299",
      rating: 4.9,
      description: "Stunning sunsets and white-washed buildings"
    },
    {
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
      price: "$899",
      rating: 4.8,
      description: "Tropical paradise with rich culture"
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      price: "$1,599",
      rating: 4.9,
      description: "Modern metropolis meets ancient traditions"
    }
  ];

  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Flight Booking",
      description: "Find the best deals on flights worldwide with our exclusive partnerships"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Custom Tours",
      description: "Personalized itineraries crafted by local experts for unforgettable experiences"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Trip Planning",
      description: "Complete vacation planning from accommodation to activities"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Group Travel",
      description: "Special packages for families, friends, and corporate groups"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Plane className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-primary">WanderLux</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-foreground hover:text-primary transition-colors">Destinations</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Your Next
            <span className="block text-blue-300">Adventure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
            Create unforgettable memories with our expertly curated travel experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Explore Destinations
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4">
              Plan Your Trip
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground">
              Handpicked locations for your perfect getaway
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{destination.price}</span>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for the perfect journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Journey Starts Here
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience in crafting exceptional travel experiences, 
                WanderLux has helped thousands of travelers discover the world's most beautiful destinations.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of travel experts works tirelessly to ensure every detail of your journey 
                is perfect, from the moment you dream about your destination to the memories you'll cherish forever.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-muted-foreground">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground">Destinations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop" 
                alt="Mountain landscape"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ready to Explore?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with our travel experts today
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-lg">hello@wanderlux.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg">123 Travel Street, Adventure City, AC 12345</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background"
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background"
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  />
                  <textarea 
                    placeholder="Tell us about your dream destination..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  ></textarea>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="w-8 h-8" />
                <span className="text-2xl font-bold">WanderLux</span>
              </div>
              <p className="text-primary-foreground/80">
                Creating extraordinary travel experiences since 2008. Your adventure awaits.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Tours</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Hotels</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Flights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Travel Insurance</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Booking Policy</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-primary-foreground/80 mb-4">
                Get travel tips and exclusive deals delivered to your inbox.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-foreground"
                />
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 WanderLux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelHomepage;
