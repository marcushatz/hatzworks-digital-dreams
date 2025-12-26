import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Clock, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Big Tex Pressure Pros",
    category: "Custom Build",
    description: "Pressure Washing Service in Houston, TX",
    image: "https://images.unsplash.com/photo-1581578731117-104f2a8d467e?w=800&auto=format&fit=crop&q=80",
    link: "https://bigtexpressure.com",
    status: "Live",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Project Coming Soon",
    category: "In Progress",
    description: "High-quality website currently in development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80", // generic coding
    link: "#",
    status: "Coming Soon",
    tags: ["Development", "Design"],
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
  const isComingSoon = project.status === "Coming Soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="group relative overflow-hidden rounded-[2rem] cursor-pointer aspect-[4/3] bg-navy-light/40 border border-white/5 hover:border-teal/30 transition-all duration-500 shadow-xl"
    >
      {/* Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${isComingSoon ? "grayscale opacity-40 scale-105" : "opacity-80 group-hover:opacity-60"}`}
          />
        </motion.div>

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/90 via-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Top Tags */}
        <div className="flex justify-between items-start translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-[#3b82f6] text-xs font-semibold border border-blue-100">
            {project.category}
          </span>
          {isComingSoon && (
            <span className="px-3 py-1 rounded-full bg-slate-100 text-[#64748b] text-xs font-medium flex items-center gap-1.5 border border-slate-200">
              <Clock className="w-3 h-3" /> Pending
            </span>
          )}
        </div>

        {/* Bottom Info */}
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0f172a] mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-[#64748b] text-sm mb-6 line-clamp-2 max-w-[90%] group-hover:opacity-100 transition-opacity">
            {project.description}
          </p>

          <div className="flex items-center gap-2 text-[#3b82f6] font-medium text-sm overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
            {isComingSoon ? (
              <span className="text-[#94a3b8]">Coming Soon</span>
            ) : (
              <>
                <span>Visit Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-32 relative bg-[#F8FAFC]" id="portfolio">
      {/* Soft Spotlights */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#3b82f6] font-medium text-xs uppercase tracking-[0.2em] mb-6 px-4 py-2 rounded-full bg-[#eff6ff]"
          >
            <Sparkles className="w-3 h-3" />
            Our Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0f172a] mb-6 tracking-tight"
          >
            Built for performance.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A selection of projects where design meets function.
          </motion.p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default Portfolio;
