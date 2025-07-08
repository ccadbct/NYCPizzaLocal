import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import heroImage from "@assets/andreas-pizzeria-nyc-east-village_1752014045875.webp";

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
                onClick={() => window.open('https://www.clover.com/online-ordering/andreas-pizza-new-york', '_blank')}
                className="bg-pizza-red text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 shadow-lg h-auto"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Order Online
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
              src={heroImage}
              alt="Andrea's Pizza storefront at 50 2nd Ave in East Village, NYC showing the authentic pizzeria interior and exterior"
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
