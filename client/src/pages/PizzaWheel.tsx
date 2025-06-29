import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PizzaMoodWheel from '@/components/PizzaMoodWheel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Share2, Gift } from 'lucide-react';

export default function PizzaWheel() {
  useEffect(() => {
    document.title = "Pizza Mood Wheel - Find Your Perfect Pizza | Andrea's Pizza East Village NYC";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover your perfect pizza match with Andrea\'s Pizza interactive mood wheel! Find your pizza personality, share on social media, and get a free slice in East Village NYC.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover your perfect pizza match with Andrea\'s Pizza interactive mood wheel! Find your pizza personality, share on social media, and get a free slice in East Village NYC.';
      document.head.appendChild(meta);
    }

    // Add structured data for interactive feature
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Andrea's Pizza Mood Wheel",
      "description": "Interactive pizza personality quiz to find your perfect pizza match",
      "url": "https://andreaspizza.com/pizza-wheel",
      "applicationCategory": "Entertainment",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "description": "Free slice for sharing social media post",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@type": "Restaurant",
        "name": "Andrea's Pizza",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "50 2nd Ave",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10003"
        }
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

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pizza-green to-pizza-red text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-5xl font-bold">Pizza Mood Wheel</h1>
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-xl max-w-2xl mx-auto mb-6">
              Discover your perfect pizza match based on your current mood! Our interactive wheel will reveal 
              your pizza personality and recommend the ideal slice from our authentic Italian menu.
            </p>
            <Badge className="bg-white text-pizza-red text-lg px-4 py-2">
              <Gift className="w-4 h-4 mr-2" />
              Share for a FREE SLICE!
            </Badge>
          </div>
        </section>

        {/* Main Wheel Section */}
        <section className="py-8">
          <PizzaMoodWheel />
        </section>

        {/* How It Works */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-pizza-green mb-8">How It Works</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Choose Your Mood</h3>
                    <p className="text-gray-600">
                      Click on a mood segment that matches how you're feeling right now, or hit "Surprise Me!" for a random selection.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Get Your Match</h3>
                    <p className="text-gray-600">
                      Discover your pizza personality and the perfect pizza recommendation based on authentic Italian flavors and your mood.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Share2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Share & Save</h3>
                    <p className="text-gray-600">
                      Download your personalized result image and share it on social media. Show your post at our store for a FREE SLICE!
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-pizza-red text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">🍕 FREE SLICE OFFER! 🍕</h3>
                <p className="text-lg mb-4">
                  Share your pizza personality result on Instagram, Facebook, or Twitter and show us your post 
                  at Andrea's Pizza for a complimentary slice!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <span className="font-semibold">📍 50 2nd Ave, East Village</span>
                  <span className="font-semibold">📞 (646) 398-8386</span>
                  <span className="font-semibold">⏰ One per customer per day</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pizza Personalities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-pizza-green text-center mb-12">Pizza Personalities</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Feeling Adventurous</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Truffle & Wild Mushroom</p>
                    <p className="text-xs text-gray-500">"You love to explore new flavors"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Want Comfort</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Classic Pepperoni</p>
                    <p className="text-xs text-gray-500">"You appreciate timeless classics"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Feeling Fancy</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Margherita</p>
                    <p className="text-xs text-gray-500">"You have refined taste"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Want Spicy</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Spicy Salami</p>
                    <p className="text-xs text-gray-500">"You like a little heat in life"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Feeling Healthy</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Mushroom</p>
                    <p className="text-xs text-gray-500">"You make mindful choices"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Want Traditional</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Quattro Formaggi</p>
                    <p className="text-xs text-gray-500">"You respect authentic traditions"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Feeling Indulgent</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Prosciutto di Parma</p>
                    <p className="text-xs text-gray-500">"You enjoy life's luxuries"</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-pizza-green mb-2">Want Hearty</h3>
                    <p className="text-sm text-gray-600 mb-3">→ Sausage & Peppers</p>
                    <p className="text-xs text-gray-500">"You appreciate substantial meals"</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-pizza-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Try Your Perfect Pizza?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Visit Andrea's Pizza in East Village and experience authentic Italian flavors crafted by Chef Andrea Kenuti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu"
                className="bg-white text-pizza-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Full Menu
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pizza-green transition-colors"
              >
                Visit Our Store
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}