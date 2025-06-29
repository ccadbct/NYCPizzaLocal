import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Pizza {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  slicePrice?: string;
  smallPrice: string;
  largePrice: string;
  category: 'classic' | 'specialty' | 'sicilian';
  isSignature?: boolean;
}

const menuData: Pizza[] = [
  // Classic Pizzas
  {
    id: 1,
    name: "Margherita",
    description: "The perfect balance of simplicity and flavor",
    ingredients: "Fresh mozzarella, San Marzano tomatoes, fresh basil, extra virgin olive oil",
    slicePrice: "$4.50",
    smallPrice: "$18.00",
    largePrice: "$24.00",
    category: "classic",
    isSignature: true
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Classic New York style with premium pepperoni",
    ingredients: "Mozzarella, tomato sauce, pepperoni",
    slicePrice: "$5.00",
    smallPrice: "$20.00",
    largePrice: "$26.00",
    category: "classic"
  },
  {
    id: 3,
    name: "Mushroom",
    description: "Earthy mushrooms with garlic and herbs",
    ingredients: "Mozzarella, tomato sauce, fresh mushrooms, garlic, oregano",
    slicePrice: "$4.75",
    smallPrice: "$19.00",
    largePrice: "$25.00",
    category: "classic"
  },
  {
    id: 4,
    name: "Sausage & Peppers",
    description: "Italian sausage with roasted bell peppers",
    ingredients: "Mozzarella, tomato sauce, Italian sausage, roasted peppers, onions",
    slicePrice: "$5.25",
    smallPrice: "$21.00",
    largePrice: "$27.00",
    category: "classic"
  },
  // Specialty Pizzas
  {
    id: 5,
    name: "Prosciutto di Parma",
    description: "Imported prosciutto with arugula and burrata",
    ingredients: "Burrata, cherry tomatoes, prosciutto di Parma, arugula, balsamic glaze",
    smallPrice: "$26.00",
    largePrice: "$32.00",
    category: "specialty",
    isSignature: true
  },
  {
    id: 6,
    name: "Quattro Formaggi",
    description: "Four cheese blend for the ultimate indulgence",
    ingredients: "Mozzarella, gorgonzola, parmigiano-reggiano, fontina, white sauce",
    smallPrice: "$24.00",
    largePrice: "$30.00",
    category: "specialty"
  },
  {
    id: 7,
    name: "Truffle & Wild Mushroom",
    description: "Luxury pizza with truffle oil and mixed mushrooms",
    ingredients: "Mozzarella, wild mushrooms, truffle oil, garlic, fresh thyme",
    smallPrice: "$28.00",
    largePrice: "$34.00",
    category: "specialty",
    isSignature: true
  },
  {
    id: 8,
    name: "Spicy Salami",
    description: "House-made spicy salami with hot honey drizzle",
    ingredients: "Mozzarella, tomato sauce, spicy salami, hot honey, red pepper flakes",
    smallPrice: "$23.00",
    largePrice: "$29.00",
    category: "specialty"
  },
  // Sicilian Pizzas
  {
    id: 9,
    name: "Classic Sicilian",
    description: "Thick crust square pizza with robust flavors",
    ingredients: "Mozzarella, San Marzano tomatoes, basil, oregano, olive oil",
    smallPrice: "$22.00",
    largePrice: "$28.00",
    category: "sicilian"
  },
  {
    id: 10,
    name: "Sicilian Pepperoni",
    description: "Traditional square cut with premium pepperoni",
    ingredients: "Mozzarella, tomato sauce, pepperoni, oregano",
    smallPrice: "$24.00",
    largePrice: "$30.00",
    category: "sicilian"
  }
];

export default function Menu() {
  useEffect(() => {
    document.title = "Menu - Andrea's Pizza | Authentic Italian Pizza in East Village NYC";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Andrea\'s Pizza menu featuring authentic Italian pizzas, from classic Margherita to specialty truffles. Located in East Village NYC at 50 2nd Ave.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore Andrea\'s Pizza menu featuring authentic Italian pizzas, from classic Margherita to specialty truffles. Located in East Village NYC at 50 2nd Ave.';
      document.head.appendChild(meta);
    }

    // Add structured data for menu
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Andrea's Pizza Menu",
      "description": "Authentic Italian pizza menu featuring classic and specialty pizzas",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Classic Pizzas",
          "description": "Traditional Italian pizzas made with authentic ingredients"
        },
        {
          "@type": "MenuSection", 
          "name": "Specialty Pizzas",
          "description": "Gourmet pizzas featuring premium imported ingredients"
        },
        {
          "@type": "MenuSection",
          "name": "Sicilian Pizzas", 
          "description": "Thick crust square pizzas in traditional Sicilian style"
        }
      ]
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

  const classicPizzas = menuData.filter(pizza => pizza.category === 'classic');
  const specialtyPizzas = menuData.filter(pizza => pizza.category === 'specialty');
  const sicilianPizzas = menuData.filter(pizza => pizza.category === 'sicilian');

  const PizzaCard = ({ pizza }: { pizza: Pizza }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-pizza-green">{pizza.name}</span>
          {pizza.isSignature && (
            <Badge variant="secondary" className="bg-pizza-red text-white">
              Signature
            </Badge>
          )}
        </CardTitle>
        <p className="text-gray-600 text-sm">{pizza.description}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4 italic">{pizza.ingredients}</p>
        <div className="flex flex-wrap gap-2 justify-between items-center">
          {pizza.slicePrice && (
            <span className="text-pizza-red font-semibold">
              Slice: {pizza.slicePrice}
            </span>
          )}
          <div className="flex gap-3">
            <span className="text-pizza-green font-semibold">
              12": {pizza.smallPrice}
            </span>
            <span className="text-pizza-green font-semibold">
              18": {pizza.largePrice}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-pizza-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Authentic Italian pizzas crafted with the finest imported ingredients and traditional techniques passed down through generations.
            </p>
          </div>
        </section>

        {/* Menu Content */}
        <div className="container mx-auto px-4 py-16">
          
          {/* Classic Pizzas */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Classic Pizzas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Traditional Italian favorites made with San Marzano tomatoes, fresh mozzarella, and time-honored recipes.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classicPizzas.map(pizza => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </section>

          {/* Specialty Pizzas */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Specialty Pizzas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Gourmet creations featuring premium ingredients like imported prosciutto, truffle oil, and artisanal cheeses.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialtyPizzas.map(pizza => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </section>

          {/* Sicilian Pizzas */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Sicilian Style</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Thick crust, square-cut pizzas in the traditional Sicilian style with robust flavors and hearty portions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sicilianPizzas.map(pizza => (
                <PizzaCard key={pizza.id} pizza={pizza} />
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-pizza-red text-white p-12 rounded-lg">
            <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl mb-6">
              Call us at (646) 398-8386 or visit us at 50 2nd Ave in East Village
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+16463988386"
                className="bg-white text-pizza-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="https://maps.google.com/?q=50+2nd+Ave,+New+York,+NY+10003"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pizza-red transition-colors"
              >
                Get Directions
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}