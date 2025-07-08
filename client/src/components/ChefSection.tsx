import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import margheritaImage from "@assets/margherita-pizza_1752014412052.webp";

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
            "Every pizza tells a story. Ours begins with authentic New York-style craftsmanship,
            premium ingredients, and genuine care. We use hand-tossed dough, house-made sauce, and artisanal cheeses
            to create the perfect balance of flavors and textures that defines true NYC pizza."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={margheritaImage}
              alt="Authentic Margherita pizza from Andrea's Pizza with fresh basil, mozzarella, and organic tomatoes"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-pizza-green mb-6">MARGHERITA PIZZA</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">Our signature Margherita represents the essence of authentic NYC pizza-making. Fresh mozzarella, organic tomatoes, and aromatic basil create a harmony of flavors on our perfectly charred crust.</p>
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
