import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const Pricing = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-background" id="pricing">
            {/* Background decoration - defined but subtle */}
            <div className="absolute inset-0 bg-navy/5 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        Simple, honest pricing.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Start risk-free with just a dollar.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto"
                >
                    <div className="relative group">
                        {/* Clean Glow on Hover */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-teal/30 to-teal/10 rounded-[2rem] opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                        <div className="relative rounded-[1.9rem] bg-navy border border-white/10 overflow-hidden shadow-2xl">
                            <div className="p-8 md:p-12">
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal text-navy text-xs font-bold uppercase tracking-wide mb-6 shadow-lg shadow-teal/20">
                                        <Sparkles className="w-3 h-3" /> Risk-Free Start
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold mb-2 text-white">Custom Website Build</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl text-teal font-bold">$</span>
                                        <span className="text-7xl font-bold text-white tracking-tighter">1</span>
                                        <span className="text-slate-400 font-medium ml-3">to start</span>
                                    </div>
                                    <p className="mt-4 text-sm text-slate-400 font-medium">
                                        Full refund if you're not satisfied with the first draft.
                                    </p>
                                </div>

                                <div className="space-y-4 mb-10 pb-8 border-b border-white/5">
                                    {[
                                        "No payment updates until you approve",
                                        "Money-back guarantee",
                                        "Design preview included",
                                        "Zero risk commitment",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                                                <Check className="w-3.5 h-3.5 text-teal" />
                                            </div>
                                            <span className="text-slate-300 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-4 rounded-xl bg-teal hover:bg-teal-light text-navy font-bold text-lg shadow-lg shadow-teal/10 hover:shadow-teal/20 transition-all flex items-center justify-center gap-2 group/btn">
                                    Start for $1
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
