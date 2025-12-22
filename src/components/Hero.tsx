import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PixelSquare = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute w-3 h-3 bg-teal/40 rounded-sm ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: [0.4, 0.8, 0.4], scale: 1 }}
    transition={{ 
      duration: 3, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden pt-20">
      {/* Animated pixel decorations */}
      <PixelSquare className="top-32 left-[10%]" delay={0} />
      <PixelSquare className="top-48 left-[15%]" delay={0.5} />
      <PixelSquare className="top-36 left-[25%]" delay={1} />
      <PixelSquare className="top-64 right-[20%]" delay={0.3} />
      <PixelSquare className="top-44 right-[12%]" delay={0.8} />
      <PixelSquare className="bottom-32 left-[30%]" delay={1.2} />
      <PixelSquare className="bottom-48 right-[25%]" delay={0.6} />
      <PixelSquare className="top-1/2 left-[5%]" delay={1.5} />
      <PixelSquare className="top-1/3 right-[8%]" delay={0.9} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-medium">Premium Web Development</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            We Build Websites That{" "}
            <span className="text-teal-light">Work Magic</span> for Your Business
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transform your digital presence with stunning, high-performance websites 
            designed to captivate your audience and drive real results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "150+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "5★", label: "Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl sm:text-4xl font-bold text-teal-light">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210, 25%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
