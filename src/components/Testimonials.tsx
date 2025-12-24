import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Inc.",
    company: "TechFlow",
    content: "Hatwebs transformed our online presence completely. Our new website has increased leads by 300% and our customers love the modern design. The team's attention to detail and creative vision exceeded all expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    metric: { value: "+300%", label: "Lead Increase" },
  },
  {
    name: "James Rodriguez",
    role: "Founder, Urban Eats",
    company: "Urban Eats",
    content: "Professional, creative, and incredibly responsive. They delivered a stunning e-commerce site that exceeded all our expectations. Our online sales have tripled since launch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    metric: { value: "3x", label: "Sales Growth" },
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, Bloom Co.",
    company: "Bloom Co.",
    content: "The team at Hatwebs truly understands design. They created a website that perfectly captures our brand essence and converts visitors into customers. A game-changer for our business.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    metric: { value: "85%", label: "Conversion Rate" },
  },
  {
    name: "Michael Foster",
    role: "CTO, InnovateTech",
    company: "InnovateTech",
    content: "Working with Hatwebs was a seamless experience. Their technical expertise and creative solutions helped us launch a product that our users absolutely love. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    metric: { value: "50K+", label: "Active Users" },
  },
];

const TestimonialCard = ({
  testimonial,
  isActive,
  direction
}: {
  testimonial: typeof testimonials[0];
  isActive: boolean;
  direction: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction * 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative"
    >
      <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal/5 to-transparent rounded-full blur-3xl" />

        {/* Quote icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center"
        >
          <Quote className="w-10 h-10 text-teal/40" />
        </motion.div>

        <div className="relative z-10 grid md:grid-cols-[1fr,auto] gap-8 items-center">
          {/* Content */}
          <div>
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 font-light"
            >
              "{testimonial.content}"
            </motion.p>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-teal/20"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-teal flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-heading font-semibold text-lg text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          </div>

          {/* Metric card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="hidden md:flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-teal/10 to-transparent border border-teal/20"
          >
            <div className="font-heading text-5xl font-bold text-teal mb-2">
              {testimonial.metric.value}
            </div>
            <div className="text-muted-foreground text-sm text-center">
              {testimonial.metric.label}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % testimonials.length;
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-teal/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-4 px-4 py-2 rounded-full bg-teal/10 border border-teal/20"
          >
            Client Love
          </motion.span>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about
            their experience working with Hatwebs.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentIndex}
              testimonial={testimonials[currentIndex]}
              isActive={true}
              direction={direction}
            />
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-teal/10 hover:border-teal/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="group p-1"
                >
                  <motion.div
                    className={`h-2 rounded-full transition-all ${index === currentIndex
                        ? "w-8 bg-teal"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    layoutId="testimonialDot"
                  />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-teal/10 hover:border-teal/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-center text-muted-foreground text-sm mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {["TechFlow", "Urban Eats", "Bloom Co.", "InnovateTech", "StartupX", "DigitalFirst"].map((company) => (
              <div key={company} className="font-heading text-xl md:text-2xl font-bold text-foreground/50">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
