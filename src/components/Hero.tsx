import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText, { AnimatedCounter } from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] flex items-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hero" />
        
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, hsla(195, 45%, 50%, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, hsla(210, 50%, 30%, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, hsla(195, 40%, 45%, 0.1) 0%, transparent 45%)
            `,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal/30 rounded-full blur-xl animate-pulse" />
              <div className="relative flex items-center gap-2 bg-gradient-to-r from-teal/20 to-teal/10 border border-teal/40 rounded-full px-5 py-2.5 backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-teal-light" />
                </motion.div>
                <span className="text-teal-light text-sm font-medium tracking-wide">
                  Premium Web Development Studio
                </span>
                <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Main headline with 3D text effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
              <AnimatedText delay={0.3}>
                We Build Websites
              </AnimatedText>
              <br />
              <span className="relative inline-block mt-2">
                <AnimatedText delay={0.5}>
                  That
                </AnimatedText>
                {" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-teal-light via-teal to-teal-dark bg-clip-text text-transparent">
                    <AnimatedText delay={0.6}>
                      Work Magic
                    </AnimatedText>
                  </span>
                  {/* Glowing underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-light via-teal to-teal-dark rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-light via-teal to-teal-dark rounded-full blur-md"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.5 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Transform your digital presence with{" "}
            <span className="text-teal-light font-medium">stunning</span>,{" "}
            <span className="text-teal-light font-medium">high-performance</span> websites 
            designed to captivate your audience and drive measurable results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          >
            <MagneticButton className="text-lg px-10 py-5">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-teal/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Showreel
            </Button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            {[
              { icon: Zap, text: "Lightning Fast" },
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Rocket, text: "SEO Optimized" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <item.icon className="w-4 h-4 text-teal-light" />
                <span className="text-primary-foreground/80 text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: 150, suffix: "+", label: "Projects Delivered" },
              { value: 98, suffix: "%", label: "Client Satisfaction" },
              { value: 50, suffix: "+", label: "Happy Clients" },
              { value: 5, suffix: "★", label: "Average Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="relative group"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-teal/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-teal/30 transition-colors duration-300">
                  <div className="font-heading text-4xl sm:text-5xl font-bold text-teal-light">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-primary-foreground/50 text-sm mt-2">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-primary-foreground/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-teal-light"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom curve with gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(210, 25%, 97%)" />
              <stop offset="50%" stopColor="hsl(210, 25%, 98%)" />
              <stop offset="100%" stopColor="hsl(210, 25%, 97%)" />
            </linearGradient>
          </defs>
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
