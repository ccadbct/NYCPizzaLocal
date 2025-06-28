import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, RotateCw, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
  personality: string;
  shareCode: string;
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

  const personalityDescriptions = {
    "Feeling Classic": "You appreciate timeless perfection",
    "Need Comfort": "You know what makes you happy",
    "Want Fresh": "You crave authentic simplicity",
    "Craving Tradition": "You respect the old ways",
    "Feeling Fancy": "You have sophisticated taste",
    "Want Adventure": "You live life boldly",
    "Keep It Simple": "You find beauty in basics",
    "Go Big": "You don't do anything halfway"
  };

  // Generate unique share code for verification
  const generateShareCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'AP-'; // Andrea's Pizza prefix
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const spinToSegment = (targetSegmentId: number) => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);
    setShowCelebration(false);

    const targetSegment = segments.find(s => s.id === targetSegmentId);
    if (!targetSegment) return;

    // Calculate target angle - we want the segment to align with the pointer (top)
    const segmentAngle = 360 / segments.length; // 45 degrees per segment
    const targetSegmentAngle = (targetSegmentId - 1) * segmentAngle; // 0-based index
    const centerOfSegment = targetSegmentAngle + (segmentAngle / 2);
    
    // Calculate rotation needed to align segment with pointer (top = 0 degrees)
    // We need to rotate so the segment center is at 0 degrees (top)
    const targetRotation = 360 - centerOfSegment;
    
    // Add multiple full rotations for effect (3-4 spins)
    const spins = 3 + Math.random(); // 3-4 full rotations
    const totalRotation = rotation + (spins * 360) + targetRotation;
    
    setRotation(totalRotation);

    // Show result after animation completes
    setTimeout(() => {
      setIsSpinning(false);
      setResult({
        mood: targetSegment.mood,
        pizza: targetSegment.pizza,
        description: targetSegment.description,
        personality: personalityDescriptions[targetSegment.mood as keyof typeof personalityDescriptions],
        shareCode: generateShareCode()
      });
      setShowCelebration(true);
      
      // Hide celebration after 2 seconds
      setTimeout(() => setShowCelebration(false), 2000);
    }, 4000);
  };

  const surpriseMe = () => {
    if (isSpinning) return;

    // Random segment selection for "Surprise Me!"
    const randomSegmentId = Math.floor(Math.random() * segments.length) + 1;
    spinToSegment(randomSegmentId);
  };

  // Social sharing functions
  const shareToFacebook = () => {
    if (!result) return;

    const postText = `🍕 Just discovered my perfect pizza match at Andrea's Pizza! 

${result.mood} → ${result.pizza}
"${result.personality}"

${result.description}

📍 50 2nd Ave, East Village NYC
💯 Show this post + code ${result.shareCode} for a FREE SLICE!

#AndreasPizza #NYCPizza #EastVillage #FreePizza #PizzaMoodWheel #AuthenticItalian`;

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(postText)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToInstagram = () => {
    if (!result) return;

    const postText = `🍕 Just discovered my perfect pizza match @andreaspizza! 

${result.mood} → ${result.pizza}
"${result.personality}"

${result.description}

📍 50 2nd Ave, East Village NYC
💯 Show this post + code ${result.shareCode} for a FREE SLICE!

#AndreasPizza #NYCPizza #EastVillage #FreePizza #PizzaMoodWheel #AuthenticItalian #PizzaLover #NYC`;

    // Copy to clipboard for Instagram
    navigator.clipboard.writeText(postText).then(() => {
      alert('📱 Instagram caption copied to clipboard!\n\n1. Take a screenshot of your result\n2. Open Instagram\n3. Create a new post with your screenshot\n4. Paste this caption\n5. Show your post + code at the restaurant for FREE SLICE!');
    }).catch(() => {
      // Fallback if clipboard API fails
      alert(`📱 Copy this text for Instagram:\n\n${postText}\n\n1. Take a screenshot of your result\n2. Create Instagram post with screenshot\n3. Use this caption\n4. Show post + code ${result.shareCode} for FREE SLICE!`);
    });
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
                {/* Clickable Segment Areas */}
                {segments.map((segment, index) => {
                  const angle = (index * 45); // Start angle of segment
                  const segmentAngle = 45; // Each segment is 45 degrees
                  
                  return (
                    <div
                      key={segment.id}
                      className="absolute inset-0 cursor-pointer group"
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 45 * Math.cos((angle - 90) * Math.PI / 180)}% ${50 + 45 * Math.sin((angle - 90) * Math.PI / 180)}%, ${50 + 45 * Math.cos((angle + segmentAngle - 90) * Math.PI / 180)}% ${50 + 45 * Math.sin((angle + segmentAngle - 90) * Math.PI / 180)}%)`
                      }}
                      onClick={() => spinToSegment(segment.id)}
                      title={`Click for ${segment.mood}`}
                    >
                      <div className="w-full h-full group-hover:opacity-80 transition-opacity" />
                    </div>
                  );
                })}

                {/* Segment Labels */}
                {segments.map((segment, index) => {
                  const angle = (index * 45) + 22.5; // Center of each segment
                  const radius = 120;
                  const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={`label-${segment.id}`}
                      className="absolute text-white font-bold text-xs sm:text-sm text-center pointer-events-none"
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
                    onClick={surpriseMe}
                    disabled={isSpinning}
                    className="w-full h-full rounded-full bg-pizza-red hover:bg-red-700 text-white font-bold text-xs disabled:opacity-70"
                  >
                    {isSpinning ? (
                      <RotateCw className="w-4 h-4 animate-spin" />
                    ) : (
                      'Surprise Me!'
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
                    <div className="text-lg text-pizza-green font-semibold mb-3 italic">
                      "{result.personality}"
                    </div>
                    <div className="text-2xl font-bold text-pizza-red mb-4">
                      {result.pizza}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {result.description}
                    </p>

                    {/* Share Code Display */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-yellow-800 mb-1">FREE SLICE CODE</div>
                        <div className="text-2xl font-bold text-yellow-900 tracking-wider">{result.shareCode}</div>
                        <div className="text-xs text-yellow-700 mt-1">Show this code + social post at the restaurant</div>
                      </div>
                    </div>

                    {/* Social Sharing Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      {/* Facebook Share Button */}
                      <Button
                        onClick={shareToFacebook}
                        className="bg-[#1877F2] text-white hover:bg-[#166FE5] px-6 py-2 flex-1"
                      >
                        <FaFacebookF className="w-4 h-4 mr-2" />
                        Share on Facebook
                      </Button>

                      {/* Instagram Share Button */}
                      <Button
                        onClick={shareToInstagram}
                        className="bg-gradient-to-r from-[#E4405F] via-[#F56040] to-[#F77737] text-white hover:from-[#D73A56] hover:via-[#E55A3C] hover:to-[#E66D33] px-6 py-2 flex-1"
                      >
                        <FaInstagram className="w-4 h-4 mr-2" />
                        Share on Instagram
                      </Button>
                    </div>
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
                      Click any mood segment on the wheel to find your perfect pizza match, or hit "Surprise Me!" for a random choice!
                    </p>
                  </div>
                  
                  <Button
                    onClick={surpriseMe}
                    disabled={isSpinning}
                    className="bg-pizza-green text-white hover:bg-green-700 px-8 py-3 text-lg font-semibold"
                  >
                    Surprise Me!
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>


      </div>
    </section>
  );
}