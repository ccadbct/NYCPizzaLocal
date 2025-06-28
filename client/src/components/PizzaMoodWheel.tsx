import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, RotateCw, Sparkles } from "lucide-react";

interface MoodSegment {
  id: number;
  mood: string;
  pizza: string;
  description: string;
  color: string;
}

interface SpinResult {
  mood: string;
  pizza: string;
  description: string;
}

export default function PizzaMoodWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<SpinResult | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);

  const segments: MoodSegment[] = [
    {
      id: 1,
      mood: "Feeling Classic",
      pizza: "Classic Cheese Pizza",
      description: "Simple perfection with organic tomatoes and mozzarella",
      color: "#f59e0b" // amber
    },
    {
      id: 2,
      mood: "Need Comfort",
      pizza: "Pepperoni Pizza",
      description: "Hearty beef pepperoni on our signature base",
      color: "#ef4444" // red
    },
    {
      id: 3,
      mood: "Want Fresh",
      pizza: "Margherita Pizza",
      description: "Fresh mozzarella, basil, and organic tomatoes",
      color: "#22c55e" // green
    },
    {
      id: 4,
      mood: "Craving Tradition",
      pizza: "Sicilian Classic",
      description: "Thick crust square pie with classic toppings",
      color: "#8b5cf6" // purple
    },
    {
      id: 5,
      mood: "Feeling Fancy",
      pizza: "Grandma Pie",
      description: "Thin crust with garlic, olive oil, and fresh herbs",
      color: "#06b6d4" // cyan
    },
    {
      id: 6,
      mood: "Want Adventure",
      pizza: "Daily Special",
      description: "Chef's creative combination of seasonal ingredients",
      color: "#f97316" // orange
    },
    {
      id: 7,
      mood: "Keep It Simple",
      pizza: "Plain Slice",
      description: "Pure, unadulterated pizza perfection",
      color: "#64748b" // slate
    },
    {
      id: 8,
      mood: "Go Big",
      pizza: "Calzone",
      description: "Folded pizza pocket stuffed with cheese and sauce",
      color: "#dc2626" // red-600
    }
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);
    setShowCelebration(false);

    // Generate random rotation (minimum 3 full rotations + random angle for smoother spin)
    const randomAngle = Math.random() * 360;
    const spins = 3 + Math.random() * 2; // 3-5 full rotations (reduced for smoother feel)
    const totalRotation = rotation + (spins * 360) + randomAngle;
    
    setRotation(totalRotation);

    // Calculate which segment we landed on
    const segmentAngle = 360 / segments.length; // 45 degrees per segment
    const normalizedAngle = (360 - (totalRotation % 360)) % 360;
    const segmentIndex = Math.floor(normalizedAngle / segmentAngle);
    const selectedSegment = segments[segmentIndex];

    // Show result after animation completes (4 seconds to match CSS)
    setTimeout(() => {
      setIsSpinning(false);
      setResult({
        mood: selectedSegment.mood,
        pizza: selectedSegment.pizza,
        description: selectedSegment.description
      });
      setShowCelebration(true);
      
      // Hide celebration after 2 seconds
      setTimeout(() => setShowCelebration(false), 2000);
    }, 4000);
  };

  const resetWheel = () => {
    setResult(null);
    setShowCelebration(false);
  };

  return (
    <section className="py-16 bg-warm-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            What's Your Pizza Personality?
          </h2>
          <p className="text-lg text-gray-600">
            Spin the wheel and let your mood decide your perfect pizza!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Wheel Container */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-pizza-red"></div>
              </div>

              {/* Wheel */}
              <div
                ref={wheelRef}
                className="relative w-full h-full rounded-full border-8 border-pizza-green shadow-2xl"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 4s cubic-bezier(0.23, 1, 0.320, 1)' : 'none',
                  background: `conic-gradient(${segments.map((segment, index) => {
                    const startAngle = (index * 45);
                    const endAngle = ((index + 1) * 45);
                    return `${segment.color} ${startAngle}deg ${endAngle}deg`;
                  }).join(', ')})`
                }}
              >
                {/* Segment Labels */}
                {segments.map((segment, index) => {
                  const angle = (index * 45) + 22.5; // Center of each segment
                  const radius = 120;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={segment.id}
                      className="absolute text-white font-bold text-xs sm:text-sm text-center"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                        left: `50%`,
                        top: `50%`,
                        marginLeft: `${x}px`,
                        marginTop: `${y}px`,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                        width: '80px'
                      }}
                    >
                      <div style={{ transform: `rotate(-${angle}deg)` }}>
                        {segment.mood}
                      </div>
                    </div>
                  );
                })}

                {/* Center Hub */}
                <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-pizza-green rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className="w-full h-full rounded-full bg-pizza-red hover:bg-red-700 text-white font-bold text-sm disabled:opacity-70"
                  >
                    {isSpinning ? (
                      <RotateCw className="w-5 h-5 animate-spin" />
                    ) : (
                      'SPIN'
                    )}
                  </Button>
                </div>
              </div>

              {/* Celebration Animation */}
              {showCelebration && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="animate-bounce">
                    <Sparkles className="w-16 h-16 text-yellow-400" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Result Display */}
          <div className="text-center lg:text-left">
            {result ? (
              <Card className="bg-white shadow-xl border-2 border-pizza-green">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-pizza-green mb-2">
                      Perfect Match!
                    </h3>
                    <div className="text-lg text-gray-600 mb-2">
                      You're {result.mood.toLowerCase()}
                    </div>
                    <div className="text-2xl font-bold text-pizza-red mb-4">
                      {result.pizza}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {result.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => window.open("tel:6463988386")}
                      className="w-full bg-pizza-red text-white hover:bg-red-700 py-3 text-lg font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Order Now - (646) 398-8386
                    </Button>
                    
                    <Button
                      onClick={resetWheel}
                      variant="outline"
                      className="w-full border-2 border-pizza-green text-pizza-green hover:bg-pizza-green hover:text-white py-3"
                    >
                      <RotateCw className="w-4 h-4 mr-2" />
                      Spin Again
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white shadow-lg border border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <RotateCw className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      Ready to Discover Your Pizza?
                    </h3>
                    <p className="text-gray-500">
                      Click the wheel to spin and find your perfect match based on your current mood!
                    </p>
                  </div>
                  
                  <Button
                    onClick={spinWheel}
                    disabled={isSpinning}
                    className="bg-pizza-green text-white hover:bg-green-700 px-8 py-3 text-lg font-semibold"
                  >
                    Start Spinning!
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Share Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Share your pizza personality with friends!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share && result) {
                  navigator.share({
                    title: "My Pizza Personality",
                    text: `I'm ${result.mood.toLowerCase()} and my perfect pizza is ${result.pizza}! Find yours at Andrea's Pizza.`,
                    url: window.location.href
                  });
                }
              }}
              className="border-pizza-green text-pizza-green hover:bg-pizza-green hover:text-white"
            >
              Share Result
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}