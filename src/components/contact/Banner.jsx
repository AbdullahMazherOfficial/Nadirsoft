"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ArrowRight, Play } from 'lucide-react';


function Banner() {

    // Animation variants for the "one by one" entry
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="relative w-full min-h-screen bg-[#00080f] flex items-center justify-center px-6 pt-20 overflow-hidden">

            {/* Background Decorative Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

                {/* Left Column: Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-8"
                >
                    {/* Status Badge */}
                    <motion.div variants={itemVariants} className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 self-start">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <p className="text-[10px] font-bold text-purple-300 uppercase tracking-[0.2em]">Available for new projects</p>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white font-sans tracking-tighter leading-[1.1]">
                        Start Your <br />
                        Next Project <br />
                        <span className="relative inline-block min-w-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
                                >
                                    With Us
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                        We design, build, and grow digital products — from custom websites and
                        mobile apps to AI-powered automation — for businesses that want to lead.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="font-sans cursor-pointer px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full flex items-center gap-2 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                        >
                            Start a Project
                            <ArrowRight size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="cursor-pointer px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-2 backdrop-blur-sm transition-all"
                        >
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <Play size={14} fill="white" />
                            </div>
                            Our Process
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Lottie Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex justify-center items-center"
                >
                    {/* Subtle Rotating Ring */}
                    <div className="absolute w-[110%] h-[110%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />

                    <div className="w-full max-w-[600px] aspect-square relative">
                        <DotLottieReact
                            src="/Videos/purple.lottie"
                            loop
                            autoplay
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}

export default Banner;