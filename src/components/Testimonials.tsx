import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Inc.",
    content: "Hatzworks transformed our online presence completely. Our new website has increased leads by 300% and our customers love the modern design.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder, Urban Eats",
    content: "Professional, creative, and incredibly responsive. They delivered a stunning e-commerce site that exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, Bloom Co.",
    content: "The team at Hatzworks truly understands design. They created a website that perfectly captures our brand essence and converts visitors into customers.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 relative"
    >
      {/* Quote icon */}
      <Quote className="absolute top-6 right-6 w-10 h-10 text-teal/20" />

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-teal text-teal" />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-6 text-lg">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-heading font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-muted-foreground text-sm">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Hatzworks.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
