import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Paintbrush, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Wrench 
} from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Web Design",
    description: "Unique, stunning designs tailored to your brand identity that captivate visitors and convert them into customers.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Robust, scalable websites built with cutting-edge technology for optimal performance and reliability.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Powerful online stores with seamless checkout experiences designed to maximize your sales potential.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Flawless experiences across all devices, ensuring your site looks perfect on mobile, tablet, and desktop.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to boost your search rankings and drive organic traffic to your website.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing care and updates to keep your website secure, fast, and performing at its best.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50"
    >
      <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors">
        <service.icon className="w-7 h-7 text-teal" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 bg-background">
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
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Services That Drive Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch and beyond, we provide everything you need 
            to establish a powerful online presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
