import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, Heart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Pay $1 to start",
        description: "A small commitment to begin your project.",
        icon: DollarSign,
    },
    {
        number: "02",
        title: "We design a first version",
        description: "You see your custom design before any commitment.",
        icon: Heart,
    },
    {
        number: "03",
        title: "Love it or get refunded",
        description: "Don't like it? We refund your $1. No questions.",
        icon: ShieldCheck,
    },
];

const Guarantee = () => {
    return (
        <section className="py-24 md:py-36 relative overflow-hidden bg-background">
            {/* Soft Navy Gradient - Clean & Balanced */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/5 to-navy/10 pointer-events-none" />

            {/* Decorative gradient orb - lighter and more subtle */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/5 border border-teal/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
                    >
                        <ShieldCheck className="w-4 h-4 text-teal" />
                        <span className="text-teal text-sm font-semibold tracking-wide uppercase">Zero-Risk Build Guarantee</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                    >
                        Your satisfaction is our{" "}
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal-dark">
                            only metric.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground leading-relaxed mb-8"
                    >
                        If you don't love the first version, you don't pay. <br className="hidden md:block" />
                        We refund your $1 — no awkward calls. <br />
                        <span className="text-foreground font-medium">You only continue if you're excited.</span>
                    </motion.p>
                </div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8 relative px-4">
                    {/* Connector Line - Subtle */}
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-teal/20 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className="w-24 h-24 mb-8 relative flex items-center justify-center">
                                {/* Soft Glow */}
                                <div className="absolute inset-0 bg-teal/5 rounded-full blur-xl group-hover:bg-teal/10 transition-all duration-500" />

                                <div className="relative w-full h-full rounded-2xl rotate-45 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 dark:bg-navy-light dark:border-white/5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                                    <motion.div
                                        className="-rotate-45 group-hover:-rotate-12 transition-transform duration-300"
                                    >
                                        <step.icon className="w-10 h-10 text-teal relative z-10" />
                                    </motion.div>
                                </div>

                                {/* High Contrast Badge */}
                                <div className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-navy text-white font-bold flex items-center justify-center text-sm z-20 shadow-lg border border-white/10">
                                    {step.number}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold font-heading mb-3 text-foreground group-hover:text-teal transition-colors duration-300">{step.title}</h3>
                            <p className="text-muted-foreground max-w-xs leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
