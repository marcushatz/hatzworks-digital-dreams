import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-teal/30 rounded-sm pixel-float" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-teal/40 rounded-sm pixel-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-teal/20 rounded-sm pixel-float-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-4 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-teal-light" />
            <span className="text-teal-light text-sm font-medium">Let's Work Together</span>
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your{" "}
            <span className="text-teal-light">Digital Presence?</span>
          </h2>

          <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">
            Let's discuss your project and discover how we can help bring your vision to life. 
            Get in touch for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group">
              <Mail className="w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-primary-foreground/50 text-sm">
              or email us at{" "}
              <a href="mailto:hello@hatzworks.com" className="text-teal-light hover:underline">
                hello@hatzworks.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
