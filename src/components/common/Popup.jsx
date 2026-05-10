"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Lightbulb,
    PenTool,
    Code,
    SearchCheck,
    Rocket,
    RefreshCcw,
    X
} from 'lucide-react';

const workflowSteps = [
    { name: "Discovery", icon: <Lightbulb />, color: "from-yellow-400" },
    { name: "Design", icon: <PenTool />, color: "from-blue-400" },
    { name: "Build", icon: <Code />, color: "from-purple-400" },
    { name: "Test", icon: <SearchCheck />, color: "from-emerald-400" },
    { name: "Launch", icon: <Rocket />, color: "from-pink-400" },
    { name: "Iterate", icon: <RefreshCcw />, color: "from-indigo-400" },
];

const ProcessPopup = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive check for icon sizing
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">

                    {/* Backdrop Blur Layer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Popup Content (The Glass Container) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-[1000px] overflow-hidden 
                       bg-white/[0.03] backdrop-blur-2xl border border-white/10 
                       rounded-[40px] md:rounded-[56px] shadow-2xl p-8 md:p-16"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            // top-4 right-4 for mobile, md:top-6 md:right-6 for tablet+, lg:top-8 lg:right-8 for large screens
                            className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 
             p-1 rounded-full bg-white/10 border border-white/20 text-white 
             hover:bg-white/20 backdrop-blur-md transition-all z-[60] active:scale-90"
                        >
                            {/* Size 18 is perfect for mobile touch targets while remaining sleek */}
                            <X size={18} className="md:size-6" />
                        </button>

                        {/* Inner Design Glows */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center">

                            {/* Text Header */}
                            <div className="text-center mb-12 mt-4 md:mb-16">
                                <h2 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tighter text-white">
                                    Our Simple
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Process</span>
                                </h2>
                                <p className="text-white/50 text-sm md:text-lg max-w-md mx-auto leading-relaxed">
                                    We’ve distilled the complex tech talk into a simple,
                                    repeating cycle focused on your growth.
                                </p>
                            </div>

                            {/* The Revolving Circle Container */}
                            <div className="relative w-[260px] h-[260px] md:w-[450px] md:h-[450px] flex items-center justify-center">

                                {/* Central Hub */}
                                <div className="absolute z-20 w-20 h-20 md:w-28 md:h-28 rounded-full 
                                bg-white/5 border border-white/10 flex flex-col 
                                items-center justify-center backdrop-blur-xl 
                                shadow-[0_0_40px_rgba(139,92,246,0.2)]">
                                    <span className="text-purple-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">Growth</span>
                                </div>

                                {/* Orbit Line */}
                                <div className="absolute w-full h-full rounded-full border border-dashed border-white/10 animate-[spin_40s_linear_infinite]" />

                                {/* Rotating Wrapper */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                    className="relative w-full h-full"
                                >
                                    {workflowSteps.map((step, index) => {
                                        const angle = (index / workflowSteps.length) * 360;
                                        return (
                                            <div
                                                key={index}
                                                className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center"
                                                style={{
                                                    transform: `translate(-50%, -50%) rotate(${angle}deg) translate(clamp(110px, 18vw, 220px)) rotate(-${angle}deg)`
                                                }}
                                            >
                                                <motion.div
                                                    animate={{ rotate: -360 }}
                                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                                    className="flex flex-col items-center gap-2 md:gap-3 group"
                                                >
                                                    <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} to-transparent p-[1px]`}>
                                                        <div className="w-full h-full rounded-xl md:rounded-2xl bg-[#0d0d12] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                            {/* Cloned icon to handle dynamic sizing */}
                                                            {React.cloneElement(step.icon, { size: isMobile ? 18 : 24 })}
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] md:text-sm font-bold text-white/60 whitespace-nowrap">
                                                        {step.name}
                                                    </span>
                                                </motion.div>
                                            </div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProcessPopup;