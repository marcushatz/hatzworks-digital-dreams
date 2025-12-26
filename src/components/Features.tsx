import { motion } from "framer-motion";
import { Check, Smartphone, Zap, Search, Globe, Shield, UserCog } from "lucide-react";
import GlassCard from "./GlassCard";

const includedItems = [
    "Homepage + up to 15 pages",
    "Basic SEO setup (metadata, sitemap)",
    "Performance optimization",
    "SSL certificate",
    "Documentation & training",
    "Contact / lead capture form",
    "Mobile responsive design",
    "Analytics integration",
    "Launch + hosting handoff",
];

const features = [
    {
        icon: Smartphone,
        title: "Custom Design & UX",
        description: "Brand-matched UI tailored for conversions. No templates, just results.",
    },
    {
        icon: Zap,
        title: "Mobile & Speed Optimized",
        description: "Sub-2 second load times and perfect rendering on every device.",
    },
    {
        icon: Search,
        title: "SEO & Analytics",
        description: "Technical SEO setup plus Google Analytics tracking from day one.",
    },
    {
        icon: Globe,
        title: "Global Cloud Hosting",
        description: "Enterprise-grade hosting on a global CDN for instant delivery.",
    },
    {
        icon: Shield,
        title: "Bank-Grade Security",
        description: "SSL certificates and security hardening to protect against threats.",
    },
    {
        icon: UserCog,
        title: "Fully Managed",
        description: "We handle updates, backups, and monitoring. You just run your business.",
    },
];

const Features = () => {
    // Soft Dark Slate Gradient - Not pitch black
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020617] to-navy">

            {/* Defined Background Shape - No Fade */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* You Receive List - Solid Glass Presence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-32"
                >
                    <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                        <GlassCard className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-navy/40 backdrop-blur-md">
                            {/* Inner sheen */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                            <div className="text-center mb-12 relative z-10">
                                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">You receive:</h3>
                                <p className="text-slate-300 text-lg">Everything you need, built to a premium standard.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 relative z-10">
                                {includedItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0 group"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center border border-teal/20 group-hover:bg-teal group-hover:text-navy transition-colors duration-300">
                                            <Check className="w-3.5 h-3.5 text-teal group-hover:text-navy transition-colors" />
                                        </div>
                                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>
                </motion.div>

                {/* Feature Grid Header */}
                <div className="text-center mb-16 px-4">
                    <span className="text-teal font-bold tracking-wider uppercase text-sm border-b-2 border-teal/20 pb-1">Included Features</span>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mt-6 mb-6 leading-tight text-white">
                        A complete digital foundation.
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group h-full bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-teal/30 transition-all duration-300 hover:-translate-y-1 p-8">

                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-7 h-7 text-teal" />
                                </div>

                                <h3 className="font-heading text-xl font-bold mb-3 text-white group-hover:text-teal-light transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
