import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export default function MenuPreview() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Margherita",
      description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
      price: "$18",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Classic Margherita pizza with fresh basil and mozzarella"
    },
    {
      id: 2,
      name: "NYC Pepperoni",
      description: "Premium pepperoni, mozzarella, signature tomato sauce",
      price: "$22",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "New York style pepperoni pizza with crispy edges"
    },
    {
      id: 3,
      name: "Garden Fresh",
      description: "Roasted vegetables, goat cheese, arugula, balsamic drizzle",
      price: "$24",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Wood-fired pizza topped with fresh vegetables and herbs"
    }
  ];

  return (
    <section id="menu" className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            OUR POPULAR DISHES
          </h2>
          <p className="text-lg text-gray-600">
            Handcrafted with authentic ingredients and traditional techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item) => (
            <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pizza-green mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-pizza-red">{item.price}</span>
                  <Button className="bg-pizza-green text-white hover:bg-green-700 text-sm">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-pizza-red text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 shadow-lg h-auto">
            View Complete Menu
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
