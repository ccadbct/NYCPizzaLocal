import Navigation from "@/components/Navigation";
import TickerBanner from "@/components/TickerBanner";
import Hero from "@/components/Hero";
import ChefSection from "@/components/ChefSection";
import MenuPreview from "@/components/MenuPreview";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <Navigation />
      <TickerBanner />
      <Hero />
      <ChefSection />
      <MenuPreview />
      <JourneySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
