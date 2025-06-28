import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ChefSection() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            WORDS FROM THE CHEF
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            "Every pizza tells a story. Ours begins with time-honored recipes passed down through generations,
            authentic ingredients, and genuine care. We use hand-tossed dough, house-made sauce, and artisanal cheeses
            to create the perfect balance of flavors and textures."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Chef hands expertly stretching fresh pizza dough"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-pizza-green mb-6">MARGHERITA PIZZA</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our signature Margherita represents the essence of authentic Italian pizza-making.
              Fresh mozzarella, San Marzano tomatoes, and aromatic basil create a symphony of
              flavors on our perfectly charred, wood-fired crust.
            </p>
            <Button
              onClick={scrollToMenu}
              className="bg-pizza-red text-white px-6 py-3 font-semibold hover:bg-red-700"
            >
              View Full Menu
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
