import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mail, MessageCircle, Phone, MapPin, Send, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(195, 45%, 50%, 0.15) 0%, transparent 60%)",
        }}
        animate={{
          x: ["-20%", "10%", "-20%"],
          y: ["-20%", "10%", "-20%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(210, 50%, 40%, 0.2) 0%, transparent 60%)",
        }}
        animate={{
          x: ["20%", "-10%", "20%"],
          y: ["20%", "-10%", "20%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsla(195, 45%, 55%, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsla(195, 45%, 55%, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 rounded-full px-5 py-2.5 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-teal-light" />
              </motion.div>
              <span className="text-teal-light text-sm font-medium">Let's Build Something Amazing</span>
            </motion.span>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-teal-light via-teal to-teal-dark bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h2>

            <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
              Let's discuss your project and discover how we can help bring your vision to life.
              Get in touch for a free consultation and let's start building something extraordinary together.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, label: "Email Us", value: "hello@hatwebs.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Visit Us", value: "San Francisco, CA" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal/5 flex items-center justify-center group-hover:from-teal/30 group-hover:to-teal/10 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-light" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/50 text-sm">{item.label}</div>
                    <div className="text-primary-foreground font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal/30 via-teal/10 to-teal/30 rounded-3xl blur-xl opacity-50" />

              <form
                onSubmit={handleSubmit}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
              >
                <h3 className="font-heading text-2xl font-semibold text-primary-foreground mb-6">
                  Send us a message
                </h3>

                <div className="space-y-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-primary-foreground/70 text-sm mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-primary-foreground placeholder-primary-foreground/30 focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-primary-foreground/70 text-sm mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-primary-foreground placeholder-primary-foreground/30 focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-primary-foreground/70 text-sm mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-primary-foreground placeholder-primary-foreground/30 focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/20 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-teal to-teal-dark text-primary-foreground font-semibold py-4 px-8 rounded-xl shadow-lg shadow-teal/25 transition-all hover:shadow-xl hover:shadow-teal/30"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-teal-light via-teal to-teal-dark"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-primary-foreground/40 text-sm">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-light" />
                    Free Consultation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-light" />
                    24hr Response
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
