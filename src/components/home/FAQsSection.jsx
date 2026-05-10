'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Mail } from 'lucide-react';

const faqs = [
  {
    question: "What specific technologies do you specialize in?",
    answer: "We specialize in modern full-stack development using React, Next.js, and Node.js. Our AI engineering team focuses on LLM integration, custom automation workflows, and scalable cloud architectures on AWS and Vercel.",
  },
  {
    question: "How do you handle project pricing and timelines?",
    answer: "Every project is unique. We provide a detailed scope of work with transparent milestones. Typically, MVP developments take 4–8 weeks, while enterprise-grade systems are scoped based on specific modular requirements.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we believe in long-term partnerships. We offer various support tiers including 24/7 monitoring, security updates, and iterative feature development to ensure your product scales effectively.",
  },
  {
    question: "Can you integrate AI into my existing business workflow?",
    answer: "Absolutely. We specialize in 'AI-first' refactoring. We audit your current processes to identify bottlenecks and implement custom automations using tools like OpenAI, LangChain, or n8n to boost efficiency.",
  },
  {
    question: "How do we get started with a new project?",
    answer: "The process starts with a discovery call to understand your vision. Following that, we provide a technical roadmap and a baseline quote. Once approved, we move straight into the design and prototyping phase.",
  },
];

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 w-full px-6 bg-[#00080f]">
      <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full max-w-[500px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-[900px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            <p className="text-[10px] font-bold text-purple-300 uppercase tracking-[0.2em]">Support</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white font-sans tracking-tighter">
            Common
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
              {" "}Queries
            </span>
          </h2>
          <p className="text-slate-400 text-lg font-medium flex items-center gap-2">
            <Mail size={18} className="text-purple-500" />
            Reach us at <span className="text-white hover:text-purple-400 cursor-pointer transition-colors">info@nadirsoft.com</span>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[24px] bg-[#000a13] border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-bold text-white font-sans tracking-tight">
                  {faq.question}
                </span>
                <span
                  className={`cursor-pointer flex items-center justify-center size-8 rounded-full transition-all duration-300 ${openIndex === index ? "bg-purple-600 text-white rotate-180" : "bg-white/5 text-slate-400"
                    }`}
                >
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-white/50 text-base leading-relaxed font-medium mb-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;