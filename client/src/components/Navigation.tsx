import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AndreasPizzaLogo } from "@/components/ui/logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "Menu", href: "menu" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <AndreasPizzaLogo className="cursor-pointer" onClick={() => scrollToSection("home")} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-gray-600 hover:text-pizza-red transition-colors px-3 py-2 text-sm font-medium ${
                    link.label === "Home" ? "text-gray-900" : ""
                  }`}
                >
                  {link.label}
                </button>
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
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-pizza-red"
              >
                {link.label}
              </button>
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
