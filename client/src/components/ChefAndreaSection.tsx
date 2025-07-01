import chefAndreaImage from "@assets/Chef Andrea Kenuti_1751146534812.webp";

export default function ChefAndreaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            Meet Chef Andrea Kenuti
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                From Scarr's to L'Industrie to Second Avenue — Andrea Kenuti brings a decade 
                of experience from NYC's most acclaimed pizzerias to the East Village. After 
                seven years perfecting his craft at the legendary Scarr's Pizza on Orchard Street 
                and time at L'Industrie in the West Village, Andrea is ready for his first solo venture.
              </p>
              
              <blockquote className="border-l-4 border-pizza-red pl-6 py-4 bg-warm-cream">
                <p className="text-lg text-gray-700 italic mb-2">
                  "I'm going for a classic vibe,"
                </p>
                <p className="text-gray-600">
                  says Andrea, who envisions retro booths, Tiffany-style lamps, and a menu 
                  centered on traditional NY-style pizza made with organic, carefully sourced ingredients. 
                  Every slice reflects the passion and expertise gained from years at the city's most celebrated spots.
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-pizza-green pl-6 py-4 bg-gray-50">
                <p className="text-lg text-pizza-green font-semibold italic">
                  "I just want to get the place open as soon as possible, and I'm going to be here every day"
                </p>
                <p className="text-gray-600 mt-2">
                  — that's the dedication you can expect at Andrea's Pizza.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden">
              <img
                src={chefAndreaImage}
                alt="Chef Andrea Kenuti sitting at a table in his restaurant"
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 right-4 lg:-bottom-6 lg:-right-6 bg-pizza-red text-white px-4 py-3 lg:px-6 lg:py-4 rounded-xl shadow-lg">
                <p className="font-bold text-base lg:text-lg">10+ Years</p>
                <p className="text-xs lg:text-sm">NYC Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}