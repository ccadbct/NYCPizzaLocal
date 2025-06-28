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
        personality: personalityDescriptions[targetSegment.mood as keyof typeof personalityDescriptions]
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

  // Canvas-based image generation for social sharing
  const generateShareImage = async (format: 'facebook' | 'instagram'): Promise<Blob | null> => {
    if (!result) return null;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Set canvas dimensions
    const width = format === 'facebook' ? 1200 : 1080;  // Facebook vs Instagram optimal sizes
    const height = format === 'facebook' ? 630 : 1080;  // Facebook landscape vs Instagram square
    canvas.width = width;
    canvas.height = height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#f4e8d0');  // warm cream
    gradient.addColorStop(1, '#e6d7c0');  // slightly darker cream
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add pizza-themed decorative elements
    ctx.fillStyle = '#2d5a3d';  // pizza green
    ctx.fillRect(0, 0, width, 20);  // top border
    ctx.fillRect(0, height - 20, width, 20);  // bottom border

    // Title section
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("Andrea's Pizza", width / 2, 80);
    
    // Subtitle
    ctx.font = 'normal 24px Arial, sans-serif';
    ctx.fillStyle = '#666';
    ctx.fillText("Pizza Personality Match", width / 2, 120);

    // Main content area
    const contentY = 180;
    
    // Mood result
    ctx.fillStyle = '#c4362e';  // pizza red
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.fillText(result.mood, width / 2, contentY);
    
    // Arrow
    ctx.fillStyle = '#333';
    ctx.font = 'normal 32px Arial, sans-serif';
    ctx.fillText('→', width / 2, contentY + 50);
    
    // Pizza recommendation
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 42px Arial, sans-serif';
    ctx.fillText(result.pizza, width / 2, contentY + 100);
    
    // Personality quote
    ctx.fillStyle = '#c4362e';
    ctx.font = 'italic 28px Arial, sans-serif';
    ctx.fillText(`"${result.personality}"`, width / 2, contentY + 160);
    
    // Description
    ctx.fillStyle = '#666';
    ctx.font = 'normal 22px Arial, sans-serif';
    const maxWidth = width - 100;
    const words = result.description.split(' ');
    let line = '';
    let y = contentY + 220;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, width / 2, y);
        line = words[n] + ' ';
        y += 30;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, width / 2, y);

    // Free slice offer
    const offerY = height - 200;
    ctx.fillStyle = '#c4362e';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.fillText('🍕 FREE SLICE OFFER! 🍕', width / 2, offerY);
    
    ctx.fillStyle = '#333';
    ctx.font = 'normal 20px Arial, sans-serif';
    ctx.fillText('Show this post at Andrea\'s Pizza for your FREE SLICE!', width / 2, offerY + 40);
    
    // Restaurant info
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillText('📍 50 2nd Ave, NYC • (646) 398-8386', width / 2, offerY + 80);
    ctx.fillText('One per customer per day', width / 2, offerY + 105);

    // Convert canvas to blob
    return new Promise(resolve => {
      canvas.toBlob(resolve, 'image/png');
    });
  };

  const shareToFacebook = async () => {
    if (!result) return;

    const imageBlob = await generateShareImage('facebook');
    if (!imageBlob) return;

    const postText = `🍕 Just discovered my perfect pizza match at Andrea's Pizza! 

${result.mood} → ${result.pizza}
"${result.personality}"

Show this post for your FREE SLICE!
📍 50 2nd Ave, East Village NYC • One per customer per day

#AndreasPizza #NYCPizza #EastVillage #FreePizza #PizzaMoodWheel #AuthenticItalian`;

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [new File([imageBlob], 'pizza-result.png', { type: 'image/png' })] })) {
      const file = new File([imageBlob], 'pizza-result.png', { type: 'image/png' });
      navigator.share({
        title: 'My Pizza Personality Result',
        text: postText,
        files: [file]
      });
    } else {
      // Fallback to Facebook sharer with text
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(postText)}`;
      window.open(facebookUrl, '_blank', 'width=600,height=400');
      
      // Also download the image for manual upload
      const link = document.createElement('a');
      link.href = URL.createObjectURL(imageBlob);
      link.download = 'pizza-result-facebook.png';
      link.click();
    }
  };

  const shareToInstagram = async () => {
    if (!result) return;

    const imageBlob = await generateShareImage('instagram');
    if (!imageBlob) return;

    const postText = `🍕 Just discovered my perfect pizza match @andreaspizza! 

${result.mood} → ${result.pizza}
"${result.personality}"

Show this post for your FREE SLICE!
📍 50 2nd Ave, East Village NYC • One per customer per day

#AndreasPizza #NYCPizza #EastVillage #FreePizza #PizzaMoodWheel #AuthenticItalian #PizzaLover #NYC #FoodieLife`;

    // Download the image and copy caption
    const link = document.createElement('a');
    link.href = URL.createObjectURL(imageBlob);
    link.download = 'pizza-result-instagram.png';
    link.click();

    // Copy caption to clipboard
    navigator.clipboard.writeText(postText).then(() => {
      alert('📱 Instagram image downloaded and caption copied!\n\n1. Upload the downloaded image to Instagram\n2. Paste the copied caption\n3. Show your post at the restaurant for FREE SLICE!');
    }).catch(() => {
      alert(`📱 Instagram image downloaded!\n\nCopy this caption:\n\n${postText}\n\n1. Upload the image to Instagram\n2. Use this caption\n3. Show your post for FREE SLICE!`);
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

                    {/* Free Slice Offer */}
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-yellow-800 mb-2">🍕 FREE SLICE OFFER! 🍕</div>
                        <div className="text-sm text-yellow-700 mb-1">Show this post at Andrea's Pizza for your FREE SLICE!</div>
                        <div className="text-xs text-yellow-600">📍 50 2nd Ave, NYC • One per customer per day</div>
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