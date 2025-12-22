import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight, Heart } from "lucide-react";
import logo from "@/assets/hatzworks-logo.png";

const footerLinks = {
  services: [
    { name: "Web Design", href: "#" },
    { name: "Development", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "SEO", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl" />
      </div>

      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
            {/* Brand column */}
            <div className="col-span-2">
              <motion.a
                href="#"
                className="inline-block mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <img src={logo} alt="Hatzworks" className="h-14 w-auto" />
              </motion.a>
              
              <p className="text-primary-foreground/60 leading-relaxed mb-6 max-w-sm">
                Premium web development studio crafting stunning digital experiences 
                that drive business growth and captivate audiences worldwide.
              </p>

              {/* Newsletter signup */}
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-primary-foreground placeholder-primary-foreground/30 focus:outline-none focus:border-teal/50 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-teal flex items-center justify-center"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-6">
                Services
              </h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-teal-light transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-6">
                Company
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-teal-light transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-6">
                Resources
              </h4>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-teal-light transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-6">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:hello@hatzworks.com"
                  className="flex items-center gap-3 text-primary-foreground/60 hover:text-teal-light transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                    <Mail className="w-5 h-5 text-teal-light" />
                  </div>
                  <span className="text-sm">hello@hatzworks.com</span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-foreground/60 hover:bg-teal/20 hover:text-teal-light hover:border-teal/30 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/40 text-sm flex items-center gap-1">
              © {currentYear} Hatzworks. Made with{" "}
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> 
              for the web.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/40 hover:text-teal-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/40 hover:text-teal-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/40 hover:text-teal-light transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="font-heading text-[20vw] font-bold text-primary-foreground/[0.02] leading-none tracking-tighter text-center">
          HATZWORKS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
