"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Star, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const FEATURES = [
  {
    title: "High-Performance Tech",
    desc: "From scalable backends to fluid interfaces, we build using modern stacks optimized for speed and reliability.",
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Bespoke Architecture",
    desc: "We don't do generic. Every line of code is engineered to solve your specific business challenges and goals.",
    icon: Star,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Rapid Deployment",
    desc: "Our agile workflow ensures constant updates and quick turnaround times without compromising on code quality.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "Security by Design",
    desc: "We integrate enterprise-grade security from day one, protecting your data and your users' privacy.",
    icon: ShieldCheck,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Life-Cycle Support",
    desc: "We are more than developers; we are partners. We stay with you from the first wireframe to post-launch growth.",
    icon: CheckCircle2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

function Business() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to adjust carousel logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % FEATURES.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-6 flex justify-center overflow-hidden bg-[#00080f]">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 -translate-x-1/2 w-full max-w-[600px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-full max-w-[600px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl w-full flex flex-col gap-12 md:gap-16 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 w-fit">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <p className="text-[12px] font-bold text-purple-300 uppercase tracking-[0.2em]">Why NadirSoft</p>
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tighter leading-none text-left">
              Impact-Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Solutions.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <p className="text-slate-400 text-base md:text-lg max-w-md text-left md:text-right leading-relaxed">
              We help companies modernize, innovate, and stay ahead with custom platforms built for the next decade.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={prevStep} 
                className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextStep} 
                className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Carousel Area */}
        <div className="relative min-h-[380px] md:min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 32 },
                opacity: { duration: 0.3 },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Card 1 (Always Visible) */}
              <FeatureCardItem feature={FEATURES[index]} />
              
              {/* Card 2 (Hidden on Mobile) */}
              {!isMobile && (
                <FeatureCardItem feature={FEATURES[(index + 1) % FEATURES.length]} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-start md:justify-center gap-2 mt-4">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`sm:-mt-12 -mt-16 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-10 bg-purple-500' : 'w-3 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual cards
// Fixed: Destructured { feature } from props
function FeatureCardItem({ feature }) {
  const Icon = feature.icon;
  
  return (
    <div className="group relative p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl flex flex-col gap-6 md:gap-8 h-full hover:border-purple-500/40 transition-all duration-500 text-left">
      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} border border-white/5 shadow-inner transition-transform group-hover:scale-110 duration-500`}>
        <Icon size={28} className="md:w-8 md:h-8" />
      </div>

      <div className="space-y-3 md:space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
            {feature.title}
        </h3>
        <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
          {feature.desc}
        </p>
      </div>

      {/* Decorative Glow Dot */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <div className={`w-1.5 h-1.5 rounded-full ${feature.color.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]`} />
      </div>
    </div>
  );
}

export default Business;