import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Rich but Balanced Gradient - Starts Navy, ends Brighter Navy */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#1a2c4e] z-0" />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-lg backdrop-blur-sm">
                        <Star className="w-3 h-3 fill-white text-white" />
                        Premium Quality
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                        You're one good website away from<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-light to-white">
                            looking like the obvious choice.
                        </span>
                    </h2>

                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        Stop losing customers to competitors with better websites. Get a premium site that builds trust and converts visitors into clients.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 rounded-2xl bg-teal hover:bg-teal-light text-navy font-bold text-xl shadow-xl shadow-teal/20 transition-all flex items-center gap-2 group"
                        >
                            Start for $1
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <div className="flex items-center gap-2 text-slate-300">
                            <ShieldCheck className="w-5 h-5 text-teal" />
                            <span className="font-medium">Love it or pay nothing</span>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 text-sm text-slate-400 uppercase tracking-widest font-bold">
                        100% Money-back guarantee • No Long-term contracts
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
