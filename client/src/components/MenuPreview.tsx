import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  slicePrice: string;
  price12: string;
  price18: string;
  image: string;
  alt: string;
}

export default function MenuPreview() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Classic Cheese",
      slicePrice: "$4.00",
      price12: "$21.00",
      price18: "$27.00",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Classic cheese pizza with melted mozzarella"
    },
    {
      id: 2,
      name: "Margherita",
      slicePrice: "$4.75",
      price12: "$23.00",
      price18: "$31.00",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Margherita pizza with fresh basil and mozzarella"
    },
    {
      id: 3,
      name: "Pepperoni",
      slicePrice: "$5.00",
      price12: "$24.00",
      price18: "$33.00",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Pepperoni pizza with premium pepperoni slices"
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
                <h3 className="text-xl font-bold text-pizza-green mb-4">{item.name}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Slice</span>
                    <span className="text-lg font-bold text-pizza-red">{item.slicePrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">12"</span>
                    <span className="text-lg font-bold text-pizza-red">{item.price12}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">18"</span>
                    <span className="text-lg font-bold text-pizza-red">{item.price18}</span>
                  </div>
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
