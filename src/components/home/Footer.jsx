"use client";
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react'; // Import all as a namespace to avoid "missing export" errors

const FOOTER_LINKS = {
  services: [
    "Website Development", "Digital Marketing", "Software Development",
    "App Development", "UI/UX Design", "AI Automation & Chatbots"
  ],
  company: ["Home", "About", "Work", "Blog", "Contact", "Careers"]
};

function Footer() {
  // Helper to safely render icons even if they are missing/mispelled
  const Icon = ({ name, size = 16, className = "" }) => {
    const LucideIcon = Icons[name];
    if (!LucideIcon) return <Icons.Globe size={size} className={className} />; // Fallback to Globe if icon not found
    return <LucideIcon size={size} className={className} />;
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 pb-10 px-6 overflow-hidden">

      {/* Mesh Gradient Glow */}
      <div className="absolute top-0 left-2 -translate-x-1/2 w-full max-w-[500px] h-[400px] bg-red-900/60 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full max-w-[500px] h-[400px] bg-red-900/60 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
              <span className="text-white font-bold tracking-widest uppercase">Devntom</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {['Home', 'Work', 'About', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-white text-3xl font-bold hover:text-purple-400 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {FOOTER_LINKS.services.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {FOOTER_LINKS.company.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Contact</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="text-purple-500" /> devntomsolutions@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="text-purple-500" /> +92 325 603 6838
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-purple-500" /> Lahore, Pakistan
              </div>
            </div>

            {/* Social Icons - Using names as strings to prevent import errors */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["Instagram", "Github", "Youtube", "Send", "Globe", "MessageSquare"].map((name, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all">
                  <Icon name={name} size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Big Text */}
        <div className="py-10 border-t border-white/5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[8vw] md:text-[10vw] font-mono font-black text-white leading-none tracking-tighter select-none"
          >
            NadirSoft
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-white/5 text-[10px] text-slate-600 font-medium uppercase tracking-widest">
          <p>Devntom Solutions © 2026</p>
          <div className="flex items-center gap-2">
            <span>Lahore</span>
            <span className="text-white">04:48:38 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;