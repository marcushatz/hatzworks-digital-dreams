import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Luxe Fashion",
    category: "E-Commerce",
    description: "Premium fashion e-commerce platform with 200% conversion increase",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    gradient: "from-rose-500 to-pink-500",
    stats: { visitors: "50K+", conversion: "+200%" },
    tags: ["Shopify", "React", "Stripe"],
  },
  {
    title: "FinanceFlow",
    category: "SaaS Dashboard",
    description: "Intuitive analytics platform serving enterprise clients worldwide",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    gradient: "from-teal to-cyan-500",
    stats: { users: "10K+", uptime: "99.9%" },
    tags: ["Next.js", "TypeScript", "D3.js"],
  },
  {
    title: "Artisan Bistro",
    category: "Restaurant",
    description: "Elegant restaurant website with integrated reservation system",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
    gradient: "from-amber-500 to-orange-500",
    stats: { bookings: "500+", reviews: "4.9★" },
    tags: ["WordPress", "OpenTable", "SEO"],
  },
  {
    title: "TechVenture",
    category: "Startup",
    description: "Award-winning startup showcase that secured $2M in funding",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    gradient: "from-violet-500 to-purple-500",
    stats: { funding: "$2M", growth: "+340%" },
    tags: ["React", "Three.js", "GSAP"],
  },
  {
    title: "EcoTech Solutions",
    category: "Corporate",
    description: "Sustainable technology company with global reach and impact",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=80",
    gradient: "from-emerald-500 to-green-500",
    stats: { countries: "30+", impact: "Carbon-" },
    tags: ["Next.js", "Sanity", "Vercel"],
  },
  {
    title: "Wellness App",
    category: "Health Tech",
    description: "Mental wellness platform helping thousands find balance",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=80",
    gradient: "from-blue-500 to-indigo-500",
    stats: { users: "25K+", rating: "4.8★" },
    tags: ["React Native", "Node.js", "AI"],
  },
];

const PortfolioCard = ({
  project,
  index,
  isHovered,
  onHover
}: {
  project: typeof projects[0];
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ${index === 0 || index === 3 ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
        }`}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          width={index === 0 || index === 3 ? 1600 : 800}
          height={index === 0 || index === 3 ? 800 : 800}
          loading={index < 2 ? "eager" : "lazy"}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-multiply`} />

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-navy/60"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: isHovered ? 0.8 : 0.4 }}
        transition={{ duration: 0.3 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Top - Category and tags */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
              {project.category}
            </span>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              aria-label="View Project Details"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20">
              <Eye className="w-5 h-5" />
            </button>
            <button
              aria-label="Visit Project Site"
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20">
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom - Title and info */}
        <div>
          {/* Stats */}
          <motion.div
            className="flex gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-white font-bold text-lg">{value}</div>
                <div className="text-white/60 text-xs uppercase tracking-wide">{key}</div>
              </div>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2"
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-white/80 mb-4 line-clamp-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.15 }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-20 h-20"
        animate={{ scale: isHovered ? 1.5 : 1, opacity: isHovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
          <ArrowUpRight className="w-6 h-6 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-navy relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(195, 45%, 50%, 0.08) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
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
            className="inline-block text-teal-light font-semibold text-sm uppercase tracking-[0.2em] mb-4 px-4 py-2 rounded-full bg-teal/10 border border-teal/20"
          >
            Our Portfolio
          </motion.span>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-light to-teal bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-white/60 text-lg lg:text-xl max-w-2xl mx-auto">
            A curated showcase of our finest work, where creativity meets functionality
            to deliver exceptional digital experiences.
          </p>
        </motion.div>

        {/* Masonry-style Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={index}
              isHovered={hoveredProject === index}
              onHover={setHoveredProject}
            />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
