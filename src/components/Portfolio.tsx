import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Online Store",
    color: "from-teal to-teal-dark",
    description: "Modern shopping experience with 200% conversion increase",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    color: "from-navy-light to-navy",
    description: "Intuitive analytics platform for enterprise clients",
  },
  {
    title: "Restaurant Website",
    category: "Business Website",
    color: "from-teal-dark to-navy-light",
    description: "Elegant design with integrated reservation system",
  },
  {
    title: "Portfolio Site",
    category: "Personal Brand",
    color: "from-navy to-teal",
    description: "Award-winning creative showcase website",
  },
];

const PortfolioCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-lg" />
        <div className="absolute bottom-8 left-8 w-8 h-8 border-2 border-white/20 rounded-sm" />
        <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white/20 rounded-sm" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
          <span className="text-white/70 text-sm font-medium">{project.category}</span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1 mb-2">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.description}
          </p>
        </div>
      </div>

      {/* Arrow icon */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <ArrowUpRight className="w-5 h-5 text-white" />
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
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
            Our Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our best work, crafted with precision and designed for success.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
