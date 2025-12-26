import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import CursorGlow from "@/components/CursorGlow";
import FloatingElements from "@/components/FloatingElements";

import Guarantee from "@/components/Guarantee";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Global effects */}

      <CursorGlow />
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />

        <Guarantee />
        <Features />
        <Portfolio />
        <Pricing />
        <FAQ />
        <FinalCTA />

        <Footer />
      </div>
    </main>
  );
};

export default Index;
