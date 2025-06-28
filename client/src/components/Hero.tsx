import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-pizza-green mb-6 leading-tight">
              AUTHENTIC NEW YORK<br />
              <span className="text-pizza-red">STYLE PIZZA</span><br />
              IN EAST VILLAGE
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">From Andrea Kenuti, veteran of acclaimed NYC pizzerias Scarr's Pizza (7 years) and L'Industrie. Now bringing his mastery of traditional New York slices to 50 Second Avenue with organic, carefully sourced ingredients and that classic vibe you've been craving. Every slice is crafted with the expertise that only comes from years at NYC's most celebrated spots.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open("tel:6463988386")}
                className="bg-pizza-red text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 shadow-lg h-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              <Button
                onClick={scrollToMenu}
                variant="outline"
                className="border-2 border-pizza-green text-pizza-green px-8 py-4 text-lg font-semibold hover:bg-pizza-green hover:text-white h-auto"
              >
                <Menu className="w-5 h-5 mr-2" />
                View Menu
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Authentic New York style pizza with perfect cheese and sauce"
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
