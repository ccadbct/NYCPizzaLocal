import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AndreasPizzaLogo } from "@/components/ui/logo";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Pizza Wheel", href: "/pizza-wheel" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <AndreasPizzaLogo className="cursor-pointer" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-600 hover:text-pizza-red transition-colors px-3 py-2 text-sm font-medium ${
                    location === link.href ? "text-pizza-red font-semibold" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => window.open("tel:6463988386")}
                className="bg-pizza-red text-white hover:bg-red-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-pizza-red"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-gray-600 hover:text-pizza-red ${
                  location === link.href ? "text-pizza-red font-semibold" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open("tel:6463988386")}
              className="w-full mt-4 bg-pizza-red text-white hover:bg-red-700"
            >
              <Phone className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
