import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  Paintbrush,
  ShoppingCart,
  Smartphone,
  Search,
  Wrench,
  ArrowRight,
  Code2,
  Layers,
  Gauge
} from "lucide-react";
import GlassCard from "./GlassCard";

const services = [
  {
    icon: Paintbrush,
    title: "Custom Web Design",
    description: "Unique, stunning designs tailored to your brand identity that captivate visitors and convert them into customers.",
    gradient: "from-pink-500 to-rose-500",
    features: ["Brand Identity", "UI/UX Design", "Prototyping"],
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Robust, scalable websites built with cutting-edge technology for optimal performance and reliability.",
    gradient: "from-teal to-cyan-500",
    features: ["React/Next.js", "TypeScript", "APIs"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Powerful online stores with seamless checkout experiences designed to maximize your sales potential.",
    gradient: "from-violet-500 to-purple-500",
    features: ["Shopify", "Stripe", "Inventory"],
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Flawless experiences across all devices, ensuring your site looks perfect on mobile, tablet, and desktop.",
    gradient: "from-orange-500 to-amber-500",
    features: ["Mobile-First", "Adaptive", "Touch"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Strategic optimization to boost your search rankings and drive organic traffic to your website.",
    gradient: "from-emerald-500 to-green-500",
    features: ["Keywords", "Speed", "Analytics"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing care and updates to keep your website secure, fast, and performing at its best.",
    gradient: "from-blue-500 to-indigo-500",
    features: ["24/7 Support", "Updates", "Backups"],
  },
];

const ServiceCard = ({
  service,
  index,
  isActive,
  onHover
}: {
  service: typeof services[0];
  index: number;
  isActive: boolean;
  onHover: (index: number | null) => void;
}) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative group cursor-pointer"
    >
      <GlassCard className="p-8 h-full" hover3D={true} delay={index * 0.05}>
        {/* Floating icon with gradient background */}
        <motion.div
          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-8 h-8 text-white" />

          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity`} />
        </motion.div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-teal transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-xs px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/20"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Learn more link */}
        <motion.div
          className="flex items-center gap-2 text-teal font-medium"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isActive ? 1 : 0.7, x: isActive ? 0 : -10 }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background via-teal/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-teal font-semibold text-sm uppercase tracking-[0.2em] mb-4 px-4 py-2 rounded-full bg-teal/10 border border-teal/20"
          >
            Our Expertise
          </motion.span>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Services That{" "}
            <span className="bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>

          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            From concept to launch and beyond, we provide everything you need
            to establish a powerful online presence that grows with your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isActive={activeCard === index}
              onHover={setActiveCard}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 p-2 rounded-2xl bg-gradient-to-r from-teal/10 via-transparent to-teal/10 border border-teal/20">
            {[
              { icon: Layers, label: "Full Stack" },
              { icon: Gauge, label: "Performance" },
              { icon: Globe, label: "Global CDN" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-2 px-4 py-2">
                <item.icon className="w-5 h-5 text-teal" />
                <span className="text-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
