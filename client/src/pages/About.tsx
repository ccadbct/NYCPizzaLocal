import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Award, Heart } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = "About Chef Andrea Kenuti - Andrea's Pizza | Authentic Italian Pizza East Village NYC";
    
    // Add canonical URL
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = 'https://andreaspizzanyc.com/about';
    document.head.appendChild(canonical);
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Chef Andrea Kenuti, former chef at Scarr\'s and L\'Industrie, bringing authentic Italian pizza traditions to East Village NYC. Learn our story and passion for artisanal pizza.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Meet Chef Andrea Kenuti, former chef at Scarr\'s and L\'Industrie, bringing authentic Italian pizza traditions to East Village NYC. Learn our story and passion for artisanal pizza.';
      document.head.appendChild(meta);
    }

    // Add structured data for chef and restaurant
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Andrea Kenuti",
      "jobTitle": "Executive Chef",
      "description": "Authentic Italian pizza chef with experience at renowned NYC pizzerias Scarr's and L'Industrie",
      "worksFor": {
        "@type": "Restaurant",
        "name": "Andrea's Pizza",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "50 2nd Ave",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10003",
          "addressCountry": "US"
        },
        "telephone": "+1-646-398-8386",
        "servesCuisine": "Italian",
        "priceRange": "$$"
      },
      "knowsAbout": ["Italian Cuisine", "Pizza Making", "Traditional Cooking Techniques"],
      "alumniOf": ["Scarr's Pizza", "L'Industrie Pizzeria"]
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
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-pizza-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Born and raised in the heart of East Village, discover the passion and New York craftsmanship behind every pizza we create.
            </p>
          </div>
        </section>

        {/* Chef Andrea Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <Badge className="bg-pizza-red text-white mb-4">Executive Chef</Badge>
                    <h2 className="text-4xl font-bold text-pizza-green mb-4">Chef Andrea Kenuti</h2>
                    <p className="text-xl text-gray-600">
                      Scarr's & L'Industrie Veteran | East Village's Newest Pizzaiolo
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Chef Andrea Kenuti brings proven expertise from two of NYC's most celebrated pizzerias to East Village. 
                      After seven years perfecting his craft at the legendary <strong>Scarr's Pizza</strong> on Orchard Street 
                      and gaining valuable experience at <strong>L'Industrie</strong> in the West Village, Andrea is ready for his first solo venture.
                    </p>
                    
                    <p>
                      At these renowned establishments, Andrea mastered both classic New York techniques and the city's 
                      distinctive pizza culture. His commitment to organic, carefully sourced ingredients and authentic 
                      methods sets the foundation for Andrea's Pizza's classic East Village vibe.
                    </p>
                    
                    <p>
                      "I just want to get the place open as soon as possible, and I'm going to be here every day," 
                      says Chef Andrea. "We're focused on creating authentic pizza with the highest quality ingredients 
                      while maintaining that classic neighborhood pizzeria feeling that East Village deserves."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-6 h-6 text-pizza-red" />
                        <h3 className="font-semibold text-pizza-green">Experience</h3>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• 7 years perfecting craft at Scarr's Pizza (Orchard Street)</li>
                        <li>• Valuable experience at L'Industrie (West Village)</li>
                        <li>• Expert in classic New York pizza techniques</li>
                        <li>• First solo venture in East Village</li>
                        <li>• Committed to organic, carefully sourced ingredients</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-6 h-6 text-pizza-red" />
                        <h3 className="font-semibold text-pizza-green">Philosophy</h3>
                      </div>
                      <p className="text-gray-700">
                        "Great pizza comes from quality ingredients and proven techniques. We focus on 
                        organic tomatoes, fresh mozzarella, and authentic methods learned from NYC's 
                        best pizzerias. Every day we're here working to serve authentic pizza that 
                        honors New York's distinctive pizza culture and East Village's vibrant community."
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Story */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-pizza-green mb-8">The Andrea's Pizza Story</h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">East Village Roots</h3>
                    <p className="text-gray-600">
                      Located in the heart of East Village, we're proud to serve our vibrant community 
                      with authentic New York pizza flavors.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Authentic Techniques</h3>
                    <p className="text-gray-600">
                      Using authentic New York methods learned at NYC's most respected pizzerias, 
                      we create classic pizza with organic ingredients and proven techniques.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Community Focus</h3>
                    <p className="text-gray-600">
                      Every pizza is made with dedication and care, using organic ingredients and 
                      traditional techniques to serve our East Village neighbors.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-left max-w-3xl mx-auto space-y-6 text-gray-700">
                <p className="text-lg">
                  After seven years at Scarr's Pizza and valuable experience at L'Industrie, Chef Andrea knew 
                  exactly what he wanted to create for his first solo venture: an authentic neighborhood pizzeria 
                  that honors New York's distinctive pizza culture and East Village's unique character. He found the perfect location 
                  at 50 2nd Avenue in East Village.
                </p>
                
                <p className="text-lg">
                  Andrea's Pizza opened with a focused mission: serve authentic pizza using organic, carefully 
                  sourced ingredients and traditional techniques learned from NYC's most respected pizzerias. 
                  The classic vibe reflects Andrea's commitment to quality without pretension—just great pizza 
                  made the right way.
                </p>
                
                <p className="text-lg">
                  Today, Andrea's Pizza serves the East Village community with dedication and consistency. 
                  Whether you're a longtime neighborhood resident or discovering our slice for the first time, 
                  we're here every day working to provide authentic New York pizza that respects both the city's pizza heritage and 
                  our local East Village community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-pizza-red text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Experience Authentic New York Pizza</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Visit us today and taste the difference that passion, NYC craftsmanship, and quality ingredients make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu"
                className="bg-white text-pizza-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Menu
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pizza-red transition-colors"
              >
                Visit Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}