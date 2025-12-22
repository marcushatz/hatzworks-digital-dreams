import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  glowOnHover?: boolean;
  delay?: number;
}

const GlassCard = ({ 
  children, 
  className = "", 
  hover3D = true,
  glowOnHover = true,
  delay = 0 
}: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover3D ? { 
        rotateX: -5, 
        rotateY: 5, 
        scale: 1.02,
        z: 50 
      } : {}}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-card/80 to-card/40
        backdrop-blur-xl
        border border-border/50
        shadow-lg
        transition-all duration-500
        group
        ${glowOnHover ? "hover:shadow-[0_0_40px_hsla(195,45%,55%,0.15)]" : ""}
        ${className}
      `}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(105deg, transparent 40%, hsla(195, 45%, 70%, 0.1) 45%, hsla(195, 45%, 70%, 0.2) 50%, hsla(195, 45%, 70%, 0.1) 55%, transparent 60%)",
        }}
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
