import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) => {
  const words = children.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.4, 
            delay: delay + index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="inline-block"
        >
          {word}{index < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
};

export const AnimatedCounter = ({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(to * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [to, isInView]);

  return <span ref={ref}>{value}{suffix}</span>;
};

export default AnimatedText;
