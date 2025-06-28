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

  // Food images mapping for each pizza type
  const getFoodImageUrl = (pizzaName: string): string => {
    const imageMap: { [key: string]: string } = {
      'Classic Cheese Pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center',
      'Pepperoni Pizza': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop&crop=center',
      'Margherita Pizza': 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=400&fit=crop&crop=center',
      'Sicilian Pizza': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop&crop=center',
      'White Pizza': 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=400&h=400&fit=crop&crop=center',
      'BBQ Chicken Pizza': 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop&crop=center',
      'Veggie Supreme': 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=400&fit=crop&crop=center',
      'Meat Lovers': 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=400&fit=crop&crop=center',
      'Hawaiian Pizza': 'https://images.unsplash.com/photo-1565299585323-38174c13c7f4?w=400&h=400&fit=crop&crop=center',
      'Buffalo Chicken': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=400&fit=crop&crop=center',
      'Calzone': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center',
      'Stromboli': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop&crop=center'
    };
    
    return imageMap[pizzaName] || imageMap['Classic Cheese Pizza'];
  };

  // Enhanced Canvas-based image generation for social sharing
  const generateShareImage = async (format: 'facebook' | 'instagram'): Promise<Blob | null> => {
    if (!result) return null;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Set canvas dimensions
    const width = format === 'facebook' ? 1200 : 1080;
    const height = format === 'facebook' ? 630 : 1080;
    canvas.width = width;
    canvas.height = height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#f4e8d0');  // warm cream
    gradient.addColorStop(1, '#e6d7c0');  // slightly darker cream
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative top border with pattern
    ctx.fillStyle = '#2d5a3d';
    ctx.fillRect(0, 0, width, 30);
    ctx.fillStyle = '#c4362e';
    ctx.fillRect(0, 30, width, 10);

    // Pizza slice graphics as decorative elements
    const drawPizzaSlice = (x: number, y: number, size: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = '#f4e8d0';
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI / 3);
      ctx.lineTo(0, 0);
      ctx.fill();
      
      // Crust
      ctx.strokeStyle = '#d4a574';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI / 3);
      ctx.stroke();
      
      // Toppings
      ctx.fillStyle = '#c4362e';
      ctx.beginPath();
      ctx.arc(size * 0.3, size * 0.2, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(size * 0.6, size * 0.4, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Add decorative pizza slices
    drawPizzaSlice(80, 80, 30);
    drawPizzaSlice(width - 80, 80, 30);
    if (format === 'instagram') {
      drawPizzaSlice(80, height - 80, 30);
      drawPizzaSlice(width - 80, height - 80, 30);
    }

    // Logo area
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 52px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText("Andrea's Pizza", width / 2, format === 'facebook' ? 90 : 110);
    
    // Subtitle with styling
    ctx.fillStyle = '#666';
    ctx.font = 'italic 22px Georgia, serif';
    ctx.fillText("East Village • Authentic Italian", width / 2, format === 'facebook' ? 120 : 140);

    // Main content positioning
    const startY = format === 'facebook' ? 180 : 220;
    
    // Mood section with styling
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'normal 24px Arial, sans-serif';
    ctx.fillText("My Pizza Personality:", width / 2, startY);
    
    ctx.fillStyle = '#c4362e';
    ctx.font = 'bold 38px Arial, sans-serif';
    ctx.fillText(result.mood, width / 2, startY + 50);
    
    // Stylized arrow
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 36px Arial, sans-serif';
    ctx.fillText('↓', width / 2, startY + 90);
    
    // Pizza recommendation with emoji
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 42px Arial, sans-serif';
    ctx.fillText('🍕 ' + result.pizza, width / 2, startY + 140);
    
    // Personality quote in stylized box
    const quoteY = startY + 200;
    const quoteBox = {
      x: width * 0.1,
      y: quoteY - 30,
      width: width * 0.8,
      height: 60
    };
    
    // Quote background
    ctx.fillStyle = 'rgba(196, 54, 46, 0.1)';
    ctx.fillRect(quoteBox.x, quoteBox.y, quoteBox.width, quoteBox.height);
    ctx.strokeStyle = '#c4362e';
    ctx.lineWidth = 2;
    ctx.strokeRect(quoteBox.x, quoteBox.y, quoteBox.width, quoteBox.height);
    
    // Quote text
    ctx.fillStyle = '#c4362e';
    ctx.font = 'italic bold 26px Georgia, serif';
    ctx.fillText(`"${result.personality}"`, width / 2, quoteY);

    // Description with better formatting
    const descY = quoteY + 80;
    ctx.fillStyle = '#333';
    ctx.font = 'normal 20px Arial, sans-serif';
    const maxWidth = width * 0.8;
    const words = result.description.split(' ');
    let line = '';
    let y = descY;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, width / 2, y);
        line = words[n] + ' ';
        y += 25;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, width / 2, y);

    // Load and draw food image
    try {
      const foodImageUrl = getFoodImageUrl(result.pizza);
      const foodImage = new Image();
      foodImage.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        foodImage.onload = () => {
          // Calculate image position in the empty space
          const imageSize = format === 'facebook' ? 200 : 280;
          const imageX = (width - imageSize) / 2;
          const imageY = y + 40; // Below description text
          
          // Create circular clipping path
          ctx.save();
          ctx.beginPath();
          ctx.arc(imageX + imageSize/2, imageY + imageSize/2, imageSize/2, 0, Math.PI * 2);
          ctx.clip();
          
          // Draw the food image
          ctx.drawImage(foodImage, imageX, imageY, imageSize, imageSize);
          ctx.restore();
          
          // Add circular border around image
          ctx.strokeStyle = '#2d5a3d';
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.arc(imageX + imageSize/2, imageY + imageSize/2, imageSize/2, 0, Math.PI * 2);
          ctx.stroke();
          
          resolve(true);
        };
        foodImage.onerror = () => {
          console.log('Failed to load food image, continuing without it');
          resolve(false);
        };
        foodImage.src = foodImageUrl;
      });
    } catch (error) {
      console.log('Error loading food image:', error);
    }

    // Free slice offer section (adjusted for food image)
    const offerY = height - (format === 'facebook' ? 120 : 140);
    
    // Offer background
    const offerBox = {
      x: width * 0.05,
      y: offerY - 50,
      width: width * 0.9,
      height: format === 'facebook' ? 90 : 120
    };
    
    ctx.fillStyle = 'rgba(244, 232, 208, 0.9)';
    ctx.fillRect(offerBox.x, offerBox.y, offerBox.width, offerBox.height);
    ctx.strokeStyle = '#c4362e';
    ctx.lineWidth = 3;
    ctx.strokeRect(offerBox.x, offerBox.y, offerBox.width, offerBox.height);
    
    // Offer text
    ctx.fillStyle = '#c4362e';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.fillText('🍕 FREE SLICE OFFER! 🍕', width / 2, offerY - 10);
    
    ctx.fillStyle = '#2d5a3d';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.fillText('Show this post at Andrea\'s Pizza', width / 2, offerY + 20);
    
    // Restaurant info
    ctx.fillStyle = '#333';
    ctx.font = 'normal 16px Arial, sans-serif';
    ctx.fillText('📍 50 2nd Ave, NYC • (646) 398-8386', width / 2, offerY + 45);
    if (format === 'instagram') {
      ctx.fillText('One per customer per day', width / 2, offerY + 65);
    }

    // Decorative bottom border
    ctx.fillStyle = '#c4362e';
    ctx.fillRect(0, height - 40, width, 10);
    ctx.fillStyle = '#2d5a3d';
    ctx.fillRect(0, height - 30, width, 30);

    // Convert canvas to blob
    return new Promise(resolve => {
      canvas.toBlob(resolve, 'image/png', 0.9);
    });
  };

  const saveFacebookImage = async () => {
    if (!result) return;

    try {
      const imageBlob = await generateShareImage('facebook');
      if (!imageBlob) {
        alert('Unable to generate image. Please try again.');
        return;
      }

      // Download the image
      const link = document.createElement('a');
      link.href = URL.createObjectURL(imageBlob);
      link.download = 'andrea-pizza-personality-facebook.png';
      link.click();
      
      // Clean up the URL object
      setTimeout(() => {
        URL.revokeObjectURL(link.href);
      }, 100);

      alert('📱 Image downloaded!\n\nTo save to Photos:\n1. Open your Downloads folder\n2. Tap the image file\n3. Tap the Share button\n4. Select "Save to Photos"\n\nThen post to Facebook for your FREE SLICE!\n📍 50 2nd Ave, NYC • One per customer per day');

    } catch (error) {
      console.error('Error generating Facebook image:', error);
      alert('Unable to generate image. Please try again.');
    }
  };

  const saveInstagramImage = async () => {
    if (!result) return;

    try {
      const imageBlob = await generateShareImage('instagram');
      if (!imageBlob) {
        alert('Unable to generate image. Please try again.');
        return;
      }

      // Download the image
      const link = document.createElement('a');
      link.href = URL.createObjectURL(imageBlob);
      link.download = 'andrea-pizza-personality.png';
      link.click();
      
      // Clean up the URL object
      setTimeout(() => {
        URL.revokeObjectURL(link.href);
      }, 100);

      alert('📱 Image downloaded!\n\nTo save to Photos:\n1. Open your Downloads folder\n2. Tap the image file\n3. Tap the Share button\n4. Select "Save to Photos"\n\nThen post to Instagram for your FREE SLICE!\n📍 50 2nd Ave, NYC • One per customer per day');

    } catch (error) {
      console.error('Error generating image:', error);
      alert('Unable to generate image. Please try again.');
    }
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
                    <div className="flex flex-col gap-3 mb-4">
                      {/* Facebook Save Image Button */}
                      <Button
                        onClick={saveFacebookImage}
                        className="bg-[#1877F2] text-white hover:bg-[#166FE5] px-4 py-2 w-full"
                      >
                        <FaFacebookF className="w-4 h-4 mr-2" />
                        Save Facebook Image
                      </Button>

                      {/* Instagram Save Image Button */}
                      <Button
                        onClick={saveInstagramImage}
                        className="bg-gradient-to-r from-[#E4405F] via-[#F56040] to-[#F77737] text-white hover:from-[#D73A56] hover:via-[#E55A3C] hover:to-[#E66D33] px-4 py-2 w-full"
                      >
                        <FaInstagram className="w-4 h-4 mr-2" />
                        Save Instagram Image
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