import { Facebook, Instagram } from "lucide-react";
import { FaYelp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-pizza-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Andrea's</h3>
            <p className="text-green-200 mb-4">
              Authentic New York-style pizza in the heart of East Village since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <FaYelp className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-green-200 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-green-200 hover:text-white transition-colors"
                >
                  Contact
                </button>
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
