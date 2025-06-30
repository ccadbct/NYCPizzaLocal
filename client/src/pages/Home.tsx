import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import TickerBanner from "@/components/TickerBanner";
import Hero from "@/components/Hero";
import ChefSection from "@/components/ChefSection";
import ChefAndreaSection from "@/components/ChefAndreaSection";
import MenuPreview from "@/components/MenuPreview";
import PizzaMoodWheel from "@/components/PizzaMoodWheel";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Enhanced page title with Chef Andrea's credentials
    document.title = "Andrea's Pizza | Authentic Italian Pizza by Chef Andrea Kenuti (Scarr's Alumni) | East Village NYC";
    
    // Enhanced meta description with Chef credentials and call-to-action
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Authentic Italian pizza by Chef Andrea Kenuti, alumni of renowned Scarr's Pizza. Classic Cheese, Margherita, Sicilian pies made with organic ingredients. Located at 50 2nd Ave, East Village NYC. Order now (646) 398-8386!";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = window.location.origin;
    document.head.appendChild(canonical);

    // Add geo location meta tags for local SEO
    const geoMetas = [
      { name: 'geo.region', content: 'US-NY' },
      { name: 'geo.placename', content: 'New York, NY' },
      { name: 'geo.position', content: '40.7249,-73.9899' }, // Coordinates for 50 2nd Ave
      { name: 'ICBM', content: '40.7249,-73.9899' },
      { name: 'DC.title', content: "Andrea's Pizza - East Village NYC" }
    ];

    geoMetas.forEach(meta => {
      const element = document.createElement('meta');
      element.name = meta.name;
      element.content = meta.content;
      document.head.appendChild(element);
    });

    // Enhanced Local Business Schema with all improvements
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Andrea's Pizza",
      "description": "Authentic Italian pizzeria in East Village NYC, led by Chef Andrea Kenuti, alumni of the renowned Scarr's Pizza. Specializing in classic New York and Sicilian style pizzas made with organic ingredients and traditional techniques.",
      "founder": {
        "@type": "Person",
        "name": "Andrea Kenuti",
        "description": "Italian chef and Scarr's Pizza alumni, bringing authentic Italian pizza techniques to East Village"
      },
      "url": window.location.origin,
      "menu": `${window.location.origin}/menu`,
      "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "telephone": "+16463988386",
      "email": "info@andreaspizza.com",
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
        "latitude": 40.7249,
        "longitude": -73.9899
      },
      "openingHours": [
        "Mo-Th 12:00-24:00",
        "Fr-Sa 12:00-02:00", 
        "Su 12:00-23:00"
      ],
      "servesCuisine": ["Italian", "Pizza", "Sicilian"],
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card"],
      "currenciesAccepted": "USD",
      "hasMenu": {
        "@type": "Menu",
        "name": "Andrea's Pizza Menu",
        "url": `${window.location.origin}/menu`,
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Classic New York Pizza",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Classic Cheese",
                "description": "Organic tomatoes, mozzarella",
                "offers": {
                  "@type": "Offer",
                  "price": "4.00",
                  "priceCurrency": "USD"
                }
              },
              {
                "@type": "MenuItem", 
                "name": "Margherita",
                "description": "Organic tomatoes, fresh mozzarella, basil",
                "offers": {
                  "@type": "Offer",
                  "price": "4.75",
                  "priceCurrency": "USD"
                }
              }
            ]
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "156"
      },
      "sameAs": [
        "https://www.instagram.com/andreaspizzanyc",
        "https://www.facebook.com/andreaspizzanyc"
      ]
    };

    // Breadcrumb Schema for navigation
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Menu",
          "item": `${window.location.origin}/menu`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About",
          "item": `${window.location.origin}/about`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": `${window.location.origin}/contact`
        }
      ]
    };

    // Insert schemas
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localBusinessScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
      
      const metas = document.querySelectorAll('meta[name^="geo"], meta[name="ICBM"], meta[name="DC.title"]');
      metas.forEach(meta => meta.remove());
      
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-warm-cream">
      <Navigation />
      <TickerBanner />
      <Hero />
      <ChefSection />
      <ChefAndreaSection />
      <MenuPreview />
      <PizzaMoodWheel />
      <JourneySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
