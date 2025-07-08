import { Facebook, Instagram } from "lucide-react";
import { FaYelp } from "react-icons/fa";
import { Link } from "wouter";

// Custom Pizza Wheel Icon
const PizzaWheelIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
    <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="1"/>
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export default function Footer() {
  const handleNavigation = (href: string) => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pizza-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Andrea's</h3>
            <p className="text-green-200 mb-4">Authentic New York-style pizza in the heart of East Village.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Andreaspizzanyc/" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/andreaspizzanyc" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.yelp.com/biz/andreas-pizza-new-york" target="_blank" rel="noopener noreferrer" className="text-green-200 hover:text-white transition-colors">
                <FaYelp className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-200 hover:text-white transition-colors block" onClick={() => handleNavigation('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-green-200 hover:text-white transition-colors block" onClick={() => handleNavigation('/menu')}>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors block" onClick={() => handleNavigation('/about')}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors block" onClick={() => handleNavigation('/contact')}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/pizza-wheel" className="text-green-200 hover:text-white transition-colors flex items-center gap-2" onClick={() => handleNavigation('/pizza-wheel')}>
                  <PizzaWheelIcon className="w-4 h-4" />
                  Pizza Wheel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-green-200">
              <li>Monday - Thursday</li>
              <li>12:00 PM - 12:00 AM</li>
              <li>Friday - Saturday</li>
              <li>12:00 PM - 2:00 AM</li>
              <li>Sunday</li>
              <li>12:00 PM - 11:00 PM</li>
              <li className="mt-4">
                <span className="text-white font-medium">Phone:</span>
                <br />
                <a
                  href="tel:6463988386"
                  className="hover:text-white transition-colors"
                >
                  (646) 398-8386
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <address className="text-green-200 not-italic">
              50 2nd Ave<br />
              New York, NY 10003<br />
              East Village
            </address>
            <a
              href="https://maps.google.com/?q=50+2nd+Ave,+New+York,+NY+10003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-green-200 hover:text-white transition-colors"
            >
              <i className="fas fa-map-marker-alt mr-2"></i>Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-8 text-center">
          <p className="text-green-200">
            &copy; 2024 Andrea's Pizza. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
