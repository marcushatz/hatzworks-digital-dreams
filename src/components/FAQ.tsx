import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        question: "Is $1 real?",
        answer: "Yes. You pay $1 to start the project. If you don't love what we create, we refund it. No tricks.",
    },
    {
        question: "What if I hate the first version?",
        answer: "You get your $1 back immediately. No questions, no awkward calls. We part ways as friends.",
    },
    {
        question: "Do I own the website?",
        answer: "100%. Once paid in full, you own all design files, code, and content. It's yours forever.",
    },
    {
        question: "How fast is delivery?",
        answer: "Most projects launch in 2-3 weeks. Complex sites may take 4-6 weeks. We'll give you a timeline upfront.",
    },
    {
        question: "Can you work with my current site?",
        answer: "Yes. We can rebuild, redesign, or migrate your existing site. We'll assess what makes sense for you.",
    },
    {
        question: "What's included vs. add-ons?",
        answer: "Core build includes up to 5 pages, mobile design, SEO basics, and performance optimization. More pages, e-commerce, or custom features are quoted separately.",
    },
    {
        question: "What if I need changes after launch?",
        answer: "Hosting plans include content updates. Major redesigns are a separate project, but we offer existing client discounts.",
    },
    {
        question: "Who do I talk to?",
        answer: "You work directly with our design and development leads. No account managers or middlemen.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden bg-slate-900/50">
            {/* Soft Slate Background - Not Pitch Black */}

            {/* Geometric accent */}
            <div className="absolute top-20 left-10 w-64 h-64 border-2 border-white/5 rounded-full pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Header */}
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-teal/10 border border-teal/20"
                        >
                            <MessageCircleQuestion className="w-5 h-5 text-teal" />
                            <span className="text-teal font-bold tracking-wider uppercase text-sm">FAQ</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white"
                        >
                            Common answers<br />to common<br />questions.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg max-w-md mb-8 leading-relaxed"
                        >
                            Don't see what you're looking for? Reach out and we'll clear things up instantly.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <a href="mailto:hello@hatwebs.com" className="text-teal hover:text-white transition-colors font-bold text-lg flex items-center gap-2">
                                hello@hatwebs.com
                            </a>
                        </motion.div>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-navy/80 backdrop-blur-sm border transition-all duration-300 rounded-xl overflow-hidden ${openIndex === index ? 'border-teal shadow-lg shadow-teal/5' : 'border-white/5 hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-heading font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-teal' : 'text-slate-200'}`}>
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-teal text-navy rotate-180' : 'bg-white/5 text-slate-400'}`}>
                                        {openIndex === index ? <Minus className="w-4 h-4 font-bold" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                        >
                                            <div className="px-6 pb-6 text-slate-400 leading-relaxed font-medium">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
