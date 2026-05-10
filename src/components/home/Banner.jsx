'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactPage() {
  const [selectedTag, setSelectedTag] = useState('Web Development');
  const [message, setMessage] = useState('');

  const tags = [
    "Web Development",
    "Custom Software",
    "Mobile Apps",
    "Digital Marketing",
    "Support & Maintenance"
  ];

  return (
    <div className="relative min-h-screen bg-[#0d0d12] text-white selection:bg-purple-500/30 overflow-x-hidden">

      {/* --- SHARED BACKGROUND GLOWS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-700/5 blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 lg:px-32 md:px-12 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-[1350px] mx-auto p-6 md:p-12"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
              <div className="max-w-2xl">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Let's Talk</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] mb-8">
                  Start Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Next Project</span> <br />
                  With Us
                </motion.h1>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                >
                  Start a Project <ArrowRight size={20} />
                </motion.button>
              </div>

              <div className="lg:mt-60 w-full lg:w-auto">
                <motion.p variants={itemVariants} className="text-white/50 font-sans text-[15px] max-w-lg leading-relaxed">
                  Whether you have a clear brief or just an idea, drop us a message.
                  We'll respond within 24 hours and set up a free discovery call.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CONTACT CARDS GRID --- */}
        <section className="pb-20 lg:px-32 px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ContactCard icon={<Mail size={24} />} title="Email Us" value="info@nadirsoft.com" subText="24/7 Support" />
            <ContactCard icon={<MessageSquare size={24} />} title="WhatsApp" value="+92 304 567 8898" subText="Instant Chat" />
            <ContactCard icon={<Phone size={24} />} title="Call Us" value="+92 304 567 8898" subText="Mon - Sat" />
            <ContactCard icon={<MapPin size={24} />} title="Location" value="Lahore, Pakistan" subText="Remote & On-site" />
          </motion.div>
        </section>

        {/* --- PROFESSIONAL CONTACT FORM --- */}
        <section className="pb-32 lg:px-32 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[1300px] mx-auto bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 backdrop-blur-md"
          >
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Side: Pre-defined Questions */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Common Questions</h3>
                  <p className="text-slate-400 mb-8">Click a question to auto-fill the message field.</p>
                </div>
                <div className="space-y-4">
                  {[
                    "How long does a typical web project take?",
                    "Do you provide post-launch support?",
                    "What is your pricing model for startups?",
                    "Can you help with app store optimization?"
                  ].map((q, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      onClick={() => setMessage(q)} // Update state on click
                      className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/50 cursor-pointer transition-all group"
                    >
                      <p className="text-slate-300 text-sm flex items-center justify-between">
                        {q} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side: Professional Form */}
              <form className="space-y-10">
                <div>
                  <label className="text-xs uppercase tracking-widest font-semibold text-purple-400 block mb-6">Select a Service</label>
                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSelectedTag(tag)}
                        className={`cursor-pointer px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${selectedTag === tag
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                          : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10'
                          }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-purple-500 outline-none transition-all placeholder:text-slate-600 text-white" />
                  </div>
                  <div className="relative group">
                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-purple-500 outline-none transition-all placeholder:text-slate-600 text-white" />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} // Allows user to keep typing
                    placeholder="Tell us about your project goals..."
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-purple-500 outline-none transition-all resize-none placeholder:text-slate-600 text-white"
                  ></textarea>
                </div>

                <button className="group w-full bg-white text-black px-12 py-5 rounded-2xl cursor-pointer font-bold flex items-center justify-center gap-3 hover:bg-purple-600 hover:text-white transition-all duration-500 whitespace-nowrap">
                  Send Your Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, value, subText }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600/20 transition-all text-purple-400">
        {icon}
      </div>
      <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-white font-bold text-lg mb-2">{value}</h3>
      <p className="text-slate-600 text-xs">{subText}</p>
    </motion.div>
  );
}