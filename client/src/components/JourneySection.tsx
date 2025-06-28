import { Flame, Wheat } from "lucide-react";

export default function JourneySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            OUR JOURNEY: FROM SICILY TO YOUR TABLE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-pizza-red rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Flame className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-pizza-green mb-4">Traditional Methods</h3>
            <p className="text-gray-600 leading-relaxed">Our ovens reach temperatures of 900°F, creating the perfect char and authentic smoky flavor that defines true Neapolitan pizza. Each pie is crafted with techniques passed down through generations.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-pizza-green rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Wheat className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-pizza-green mb-4">Premium Ingredients</h3>
            <p className="text-gray-600 leading-relaxed">
              We source our ingredients directly from Italy - San Marzano tomatoes,
              authentic Parmigiano-Reggiano, and extra virgin olive oil. Every ingredient
              is selected for its exceptional quality and authentic flavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
