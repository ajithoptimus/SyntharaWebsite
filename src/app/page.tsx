import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SenseThinkAct from "@/components/SenseThinkAct";
import Deployments from "@/components/Deployments";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden min-h-screen selection:bg-neon-cyan/30 selection:text-white">
      {/* Global Background Grid is handled in globals.css */}
      <Navbar />
      <HeroSection />
      <SenseThinkAct />
      <Deployments />
      <Footer />
    </main>
  );
}
