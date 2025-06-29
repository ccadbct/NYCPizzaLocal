import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  slicePrice?: string;
  price12?: string;
  price18?: string;
  price?: string;
  category: 'classic' | 'sicilian' | 'favorites' | 'drinks';
  isSpecial?: boolean;
}

const menuData: MenuItem[] = [
  // Classic New York Pizza - Whole Pies & Slices
  {
    id: 1,
    name: "Classic Cheese",
    description: "Organic tomatoes, mozzarella",
    slicePrice: "$4.00",
    price12: "$21.00",
    price18: "$27.00",
    category: "classic"
  },
  {
    id: 2,
    name: "Margherita",
    description: "Organic tomatoes, fresh mozzarella, basil",
    slicePrice: "$4.75",
    price12: "$23.00",
    price18: "$31.00",
    category: "classic"
  },
  {
    id: 3,
    name: "Pepperoni",
    description: "Organic tomatoes, mozzarella, beef pepperoni",
    slicePrice: "$5.00",
    price12: "$24.00",
    price18: "$33.00",
    category: "classic"
  },
  {
    id: 4,
    name: "Daily Special",
    description: "Ask for today's creation",
    slicePrice: "$6.00",
    price12: "$26.00",
    price18: "$35.00",
    category: "classic",
    isSpecial: true
  },

  // Sicilian Square Pies
  {
    id: 5,
    name: "Sicilian Classic",
    description: "Organic tomatoes, mozzarella, basil",
    price: "$33.00",
    category: "sicilian"
  },
  {
    id: 6,
    name: "Sicilian Pepperoni",
    description: "Organic tomatoes, mozzarella, beef pepperoni, basil",
    price: "$38.00",
    category: "sicilian"
  },
  {
    id: 7,
    name: "Grandma",
    description: "Organic tomatoes, fresh mozzarella, fresh garlic, basil",
    price: "$38.00",
    category: "sicilian"
  },

  // Favorites
  {
    id: 8,
    name: "Calzone",
    description: "Mozzarella, ricotta",
    price: "$18.00",
    category: "favorites"
  },
  {
    id: 9,
    name: "Garlic Knots",
    description: "(6 pieces)",
    price: "$5.00",
    category: "favorites"
  },

  // Drinks
  {
    id: 10,
    name: "Coca-Cola",
    description: "",
    price: "$2.50",
    category: "drinks"
  },
  {
    id: 11,
    name: "Diet Coke",
    description: "",
    price: "$2.50",
    category: "drinks"
  },
  {
    id: 12,
    name: "Ginger Ale",
    description: "",
    price: "$2.50",
    category: "drinks"
  },
  {
    id: 13,
    name: "Seltzer",
    description: "",
    price: "$2.00",
    category: "drinks"
  },
  {
    id: 14,
    name: "Bottled Water",
    description: "",
    price: "$2.00",
    category: "drinks"
  }
];

export default function Menu() {
  useEffect(() => {
    document.title = "Menu - Andrea's Pizza | Authentic Italian Pizza in East Village NYC";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Andrea\'s Pizza authentic menu featuring Classic Cheese, Margherita, Pepperoni pizzas, Sicilian pies, Calzone, and Garlic Knots. Located in East Village NYC at 50 2nd Ave.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Explore Andrea\'s Pizza authentic menu featuring Classic Cheese, Margherita, Pepperoni pizzas, Sicilian pies, Calzone, and Garlic Knots. Located in East Village NYC at 50 2nd Ave.';
      document.head.appendChild(meta);
    }

    // Add structured data for menu
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Menu",
      "name": "Andrea's Pizza Menu",
      "description": "Authentic Italian pizza menu featuring classic New York pizza, Sicilian pies, and favorites",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Classic New York Pizza",
          "description": "Traditional New York style pizzas made with organic ingredients"
        },
        {
          "@type": "MenuSection",
          "name": "Sicilian Square Pies", 
          "description": "Thick crust square pizzas in traditional Sicilian style"
        },
        {
          "@type": "MenuSection",
          "name": "Favorites",
          "description": "House specialties including calzone and garlic knots"
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

  const classicPizzas = menuData.filter(item => item.category === 'classic');
  const sicilianPizzas = menuData.filter(item => item.category === 'sicilian');
  const favorites = menuData.filter(item => item.category === 'favorites');
  const drinks = menuData.filter(item => item.category === 'drinks');

  // Toppings data
  const toppingsData = {
    vegetables: { price: '$4.00', items: ['Mushroom', 'Olives', 'Basil', 'Fresh garlic', 'Red onion', 'Green peppers', 'Banana peppers', 'Jalapeños'] },
    cheese: { price: '$4.00', items: ['Extra cheese', 'Ricotta'] },
    meat: { price: '$6.00', items: ['Beef pepperoni', 'Sausage'] }
  };

  const MenuItemCard = ({ item }: { item: MenuItem }) => (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-pizza-green">{item.name}</span>
          {item.isSpecial && (
            <Badge variant="secondary" className="bg-pizza-red text-white">
              Special
            </Badge>
          )}
        </CardTitle>
        {item.description && (
          <p className="text-gray-600 text-sm">{item.description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-between items-center">
          {item.slicePrice && (
            <span className="text-pizza-red font-semibold">
              Slice: {item.slicePrice}
            </span>
          )}
          {item.price12 && item.price18 ? (
            <div className="flex gap-3">
              <span className="text-pizza-green font-semibold">
                12": {item.price12}
              </span>
              <span className="text-pizza-green font-semibold">
                18": {item.price18}
              </span>
            </div>
          ) : item.price && (
            <span className="text-pizza-green font-semibold text-lg">
              {item.price}
            </span>
          )}
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
              Authentic Italian pizzas crafted with organic tomatoes and traditional techniques at Andrea's Pizza in East Village.
            </p>
          </div>
        </section>

        {/* Menu Content */}
        <div className="container mx-auto px-4 py-16">
          
          {/* Classic New York Pizza */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Classic New York Pizza</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whole pies & slices made with organic tomatoes and authentic Italian techniques.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {classicPizzas.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Sicilian Square Pies */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Sicilian Square Pies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Thick crust, square-cut pizzas in the traditional Sicilian style.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sicilianPizzas.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Favorites */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Favorites</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {favorites.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Add Toppings */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Add Toppings</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-pizza-green">Vegetable ({toppingsData.vegetables.price})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {toppingsData.vegetables.items.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-pizza-green">Cheese ({toppingsData.cheese.price})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {toppingsData.cheese.items.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-pizza-green">Meat ({toppingsData.meat.price})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {toppingsData.meat.items.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Drinks */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pizza-green mb-4">Drinks</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {drinks.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}