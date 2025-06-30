import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, Utensils, Car, ShoppingCart } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact & Location - Andrea's Pizza | 50 2nd Ave East Village NYC";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Visit Andrea\'s Pizza at 50 2nd Ave in East Village NYC. Hours, directions, contact info for authentic Italian pizza. Call (646) 398-8386 for takeout and delivery.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Visit Andrea\'s Pizza at 50 2nd Ave in East Village NYC. Hours, directions, contact info for authentic Italian pizza. Call (646) 398-8386 for takeout and delivery.';
      document.head.appendChild(meta);
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Andrea's Pizza",
      "image": "https://example.com/andreas-pizza-storefront.jpg",
      "description": "Authentic Italian pizzeria in East Village NYC serving traditional Neapolitan-style pizza",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 2nd Ave",
        "addressLocality": "New York",
        "addressRegion": "NY", 
        "postalCode": "10003",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.7267",
        "longitude": "-73.9897"
      },
      "telephone": "+1-646-398-8386",
      "url": "https://andreaspizza.com",
      "servesCuisine": ["Italian", "Pizza"],
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "12:00",
          "closes": "24:00"
        },
        {
          "@type": "OpeningHoursSpecification", 
          "dayOfWeek": ["Friday", "Saturday"],
          "opens": "12:00",
          "closes": "02:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "12:00",
          "closes": "23:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const hours = [
    { day: 'Monday - Thursday', time: '12:00 PM - 12:00 AM' },
    { day: 'Friday - Saturday', time: '12:00 PM - 2:00 AM' },
    { day: 'Sunday', time: '12:00 PM - 11:00 PM' }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-pizza-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Visit Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Located in the heart of East Village, we're easy to find and ready to serve you authentic Italian pizza.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-pizza-green mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  {/* Address */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-pizza-green rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-pizza-green mb-2">Address</h3>
                          <p className="text-gray-700">
                            50 2nd Avenue<br />
                            New York, NY 10003<br />
                            East Village
                          </p>
                          <Button 
                            variant="outline" 
                            className="mt-3"
                            onClick={() => window.open('https://maps.google.com/?q=50+2nd+Ave,+New+York,+NY+10003', '_blank')}
                          >
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-pizza-red rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-pizza-green mb-2">Phone</h3>
                          <p className="text-gray-700 mb-2">(646) 398-8386</p>
                          <p className="text-sm text-gray-600 mb-3">
                            Call for takeout orders, reservations, or questions
                          </p>
                          <Button 
                            variant="outline"
                            onClick={() => window.open('tel:+16463988386')}
                          >
                            Call Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Hours */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-pizza-green rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-pizza-green mb-3">Hours</h3>
                          <div className="space-y-2">
                            {hours.map((item, index) => (
                              <div key={index} className="flex justify-between">
                                <span className="text-gray-700">{item.day}</span>
                                <span className="text-gray-900 font-medium">{item.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-2xl font-bold text-pizza-green mb-6">Services</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Utensils className="w-8 h-8 text-pizza-red mx-auto mb-2" />
                      <h4 className="font-semibold text-pizza-green">Dine In</h4>
                      <p className="text-sm text-gray-600">Cozy atmosphere for family dining</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Car className="w-8 h-8 text-pizza-red mx-auto mb-2" />
                      <h4 className="font-semibold text-pizza-green">Takeout</h4>
                      <p className="text-sm text-gray-600">Quick pickup orders ready fast</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-3xl font-bold text-pizza-green mb-8">Find Us</h2>
              
              {/* Google Maps Embed */}
              <Card className="overflow-hidden">
                <div className="h-96 bg-gray-100 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0234567890123!2d-73.9897!3d40.7267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25987e7653c4b%3A0x1234567890abcdef!2s50%202nd%20Ave%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Andrea's Pizza Location"
                  ></iframe>
                </div>
              </Card>
              
              {/* Neighborhood Info */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-pizza-green">East Village Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We're proud to be part of the vibrant East Village community, surrounded by 
                    art galleries, boutiques, and historic landmarks. Our location on 2nd Avenue 
                    puts us right in the heart of this cultural neighborhood.
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Nearby Subway:</strong> 6 train at Bleecker St (3 min walk)</p>
                    <p><strong>Parking:</strong> Street parking available, several paid lots nearby</p>
                    <p><strong>Neighborhood:</strong> East Village, Manhattan</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="bg-pizza-red text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for Authentic Italian Pizza?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Stop by today or call ahead to place your order. We can't wait to serve you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://www.clover.com/online-ordering/andreas-pizza-new-york', '_blank')}
                className="bg-white text-pizza-red hover:bg-gray-100"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Online
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://maps.google.com/?q=50+2nd+Ave,+New+York,+NY+10003', '_blank')}
                className="border-white text-white hover:bg-white hover:text-pizza-green bg-transparent"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}