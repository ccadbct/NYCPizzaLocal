import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AndreasPizzaLogo } from "@/components/ui/logo";
import { Link, useLocation } from "wouter";

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

  // Special styling for Pizza Wheel page
  const isPizzaWheelPage = location === "/pizza-wheel";
  const navClass = isPizzaWheelPage 
    ? "bg-black/20 backdrop-blur-md border-b border-white/20 sticky top-0 z-50" 
    : "bg-white shadow-sm sticky top-0 z-50";
  
  const linkTextClass = isPizzaWheelPage 
    ? "text-white/90 hover:text-white" 
    : "text-gray-600 hover:text-pizza-red";
  
  const activeLinkClass = isPizzaWheelPage 
    ? "text-white font-semibold" 
    : "text-pizza-red font-semibold";

  return (
    <nav className={navClass}>
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
                  className={`${linkTextClass} transition-colors px-3 py-2 text-sm font-medium flex items-center gap-1 ${
                    location === link.href ? activeLinkClass : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label === "Pizza Wheel" && <PizzaWheelIcon className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={() => window.open('https://www.clover.com/online-ordering/andreas-pizza-new-york', '_blank')}
                className={isPizzaWheelPage 
                  ? "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30" 
                  : "bg-pizza-red text-white hover:bg-red-700"
                }
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Online
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isPizzaWheelPage ? "text-white hover:text-white/80" : "text-gray-600 hover:text-pizza-red"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden ${isPizzaWheelPage ? "bg-black/30 backdrop-blur-md border-t border-white/20" : "bg-white border-t"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 ${linkTextClass} flex items-center gap-2 ${
                  location === link.href ? activeLinkClass : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label === "Pizza Wheel" && <PizzaWheelIcon className="w-4 h-4" />}
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => window.open('https://www.clover.com/online-ordering/andreas-pizza-new-york', '_blank')}
              className={`w-full mt-4 ${isPizzaWheelPage 
                ? "bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30" 
                : "bg-pizza-red text-white hover:bg-red-700"
              }`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order Online
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
