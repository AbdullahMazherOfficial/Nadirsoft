'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Timer } from 'lucide-react';

function ComingSoonPage() {
    // Animation variants for a professional staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="pt-32 pb-32 relative min-h-screen bg-[#0d0d12] text-white selection:bg-purple-500/30 overflow-hidden flex items-center justify-center">

            {/* --- SHARED BACKGROUND GLOWS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-700/5 blur-[140px]" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full max-w-4xl px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* --- LARGE PROFESSIONAL ICON --- */}
                    <motion.div 
                        variants={itemVariants}
                        animate={{ 
                            y: [0, -20, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="relative mb-12"
                    >
                        {/* Glow effect behind the icon */}
                        <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full" />
                        
                        <div className="relative p-8 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                            <Rocket size={80} className="text-purple-400 md:w-32 md:h-32" strokeWidth={1.5} />
                        </div>
                    </motion.div>

                    {/* --- BADGE --- */}
                    <motion.div 
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8"
                    >
                        <Timer size={14} className="text-purple-400" />
                        <span className="text-[11px] font-bold text-purple-200 uppercase tracking-[0.2em]">Deployment in Progress</span>
                    </motion.div>

                    {/* --- MAIN HEADING --- */}
                    <motion.h1 
                        variants={itemVariants}
                        className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-8"
                    >
                        Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-[length:200%_auto] animate-gradient">
                            Incredible
                        </span> <br />
                        is Coming
                    </motion.h1>

                    {/* --- DESCRIPTION --- */}
                    <motion.p 
                        variants={itemVariants}
                        className="text-white/50 text-lg md:text-xl max-w-lg mx-auto leading-relaxed font-medium mb-12"
                    >
                        We’re busy building a fresh new digital experience for NadirSoft. 
                        Our team is hard at work to bring you something genuinely worth the wait.
                    </motion.p>

                    {/* --- BACK BUTTON / CTA --- */}
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.history.back()}
                        className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-100 transition-all shadow-lg shadow-white/10"
                    >
                        Go Back
                    </motion.button>
                </motion.div>
            </div>

            {/* Custom Styles for the shimmer effect */}
            <style jsx global>{`
                @keyframes gradient {
                    0% { background-position: 0% center; }
                    50% { background-position: 100% center; }
                    100% { background-position: 0% center; }
                }
                .animate-gradient {
                    animation: gradient 5s ease infinite;
                }
            `}</style>
        </div>
    );
}

export default ComingSoonPage;