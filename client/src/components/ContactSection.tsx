import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Laptop, Navigation } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            VISIT US IN EAST VILLAGE
          </h2>
          <p className="text-lg text-gray-600">
            Experience authentic New York pizza in the heart of the village
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Location Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-pizza-green mb-4">EAST VILLAGE</h3>
              <p className="text-gray-600 mb-4">
                50 2nd Ave<br />
                New York, NY 10003
              </p>
              <p className="text-sm text-gray-500 mb-6">Mon-Sun: 11:00 AM - 11:00 PM</p>
              <Button
                onClick={() => window.open("https://maps.google.com/?q=50+2nd+Ave,+New+York,+NY+10003", "_blank")}
                className="bg-pizza-green text-white hover:bg-green-700 text-sm"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-pizza-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-pizza-green mb-4">ORDER BY PHONE</h3>
              <p className="text-gray-600 mb-4">
                Call us directly for<br />
                quick pickup or delivery
              </p>
              <p className="text-2xl font-bold text-pizza-red mb-6">(646) 398-8386</p>
              <Button
                onClick={() => window.open("tel:6463988386")}
                className="bg-pizza-red text-white hover:bg-red-700 text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </CardContent>
          </Card>

          {/* Online Ordering Card */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-pizza-green mb-4">ORDER ONLINE</h3>
              <p className="text-gray-600 mb-4">
                Quick and easy<br />
                online ordering
              </p>
              <p className="text-sm text-gray-500 mb-6">Free delivery over $25</p>
              <Button className="bg-pizza-green text-white hover:bg-green-700 text-sm">
                <Laptop className="w-4 h-4 mr-2" />
                Order Online
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Google Maps Integration */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0234567890123!2d-73.9942!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s50+2nd+Ave%2C+New+York%2C+NY+10003!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
