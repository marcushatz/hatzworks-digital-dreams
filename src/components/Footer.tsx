import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import logo from "@/assets/hatzworks-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-16 border-t border-teal/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Hatzworks" className="h-14 w-auto mb-4" />
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Premium web development studio crafting stunning digital experiences 
              that drive business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/60 hover:text-teal-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@hatzworks.com"
                className="flex items-center gap-2 text-primary-foreground/60 hover:text-teal-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@hatzworks.com
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-primary-foreground/60 hover:bg-teal/20 hover:text-teal-light transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-teal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Hatzworks Digital Design. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/50 hover:text-teal-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-teal-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
