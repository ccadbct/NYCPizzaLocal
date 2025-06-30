import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Award, Heart } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = "About Chef Andrea Kenuti - Andrea's Pizza | Authentic Italian Pizza East Village NYC";
    
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
              From the heart of Italy to the streets of East Village, discover the passion and tradition behind every pizza we create.
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
                      Master of Authentic Italian Pizza Traditions
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Chef Andrea Kenuti brings over 15 years of authentic Italian culinary expertise to East Village. 
                      Born in Naples, the birthplace of pizza, Andrea learned traditional pizza-making techniques from 
                      his nonna in the family kitchen before honing his craft at renowned establishments.
                    </p>
                    
                    <p>
                      After moving to New York City, Andrea distinguished himself at two of the city's most celebrated 
                      pizzerias: <strong>Scarr's Pizza</strong> on the Lower East Side and <strong>L'Industrie Pizzeria </strong> 
                      in Williamsburg. At these iconic establishments, he perfected his understanding of New York's 
                      pizza culture while maintaining his commitment to authentic Italian methods.
                    </p>
                    
                    <p>
                      "Every pizza tells a story," says Chef Andrea. "At Andrea's Pizza, we honor both the traditional 
                      Neapolitan techniques I learned as a child and the bold innovations that make New York pizza special."
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
                        <li>• 15+ years in authentic Italian cuisine</li>
                        <li>• Former chef at Scarr's Pizza (Lower East Side)</li>
                        <li>• Former chef at L'Industrie Pizzeria (Williamsburg)</li>
                        <li>• Trained in traditional Neapolitan techniques</li>
                        <li>• Specialized in sourdough starter cultivation</li>
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
                        "Pizza is not just food—it's culture, family, and love baked into every bite. 
                        We use only the finest San Marzano tomatoes, imported mozzarella di bufala, 
                        and our signature 72-hour fermented dough to create an authentic taste of Italy."
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
                      with authentic Italian flavors.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-red rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Time-Honored Tradition</h3>
                    <p className="text-gray-600">
                      Our dough ferments for 72 hours, creating the perfect texture and flavor that 
                      honors centuries of Italian pizza-making tradition.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-pizza-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-pizza-green mb-2">Family Values</h3>
                    <p className="text-gray-600">
                      Every pizza is made with the same love and care that Andrea learned in his 
                      family kitchen, creating memories one slice at a time.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-left max-w-3xl mx-auto space-y-6 text-gray-700">
                <p className="text-lg">
                  When Chef Andrea decided to open his own pizzeria, he knew exactly what he wanted to create: 
                  a place where authentic Italian tradition meets the energy and diversity of New York City. 
                  After years of perfecting his craft at some of NYC's most beloved pizza spots, he found the 
                  perfect location at 50 2nd Avenue in East Village.
                </p>
                
                <p className="text-lg">
                  Andrea's Pizza opened with a simple mission: to bring the authentic taste of Naples to New York 
                  while honoring the local community that embraces both tradition and innovation. Every ingredient 
                  is carefully sourced, from the San Marzano tomatoes grown in volcanic soil to the mozzarella 
                  di bufala imported weekly from Campania.
                </p>
                
                <p className="text-lg">
                  Today, Andrea's Pizza stands as a testament to the power of authentic craftsmanship in a fast-paced 
                  world. Whether you're a longtime East Village resident or a visitor discovering our neighborhood 
                  for the first time, we invite you to experience the passion and tradition that goes into every 
                  pizza we create.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-pizza-red text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Experience Authentic Italian Pizza</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Visit us today and taste the difference that passion, tradition, and quality ingredients make.
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