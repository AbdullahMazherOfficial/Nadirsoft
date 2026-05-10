"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

function Testimonials() {
    return (
        <section className="w-full bg-[#00080f] py-2 md:py-6 px-6 flex justify-center overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-16 items-start">

                {/* Left Column: Content */}
                <div className="flex flex-col gap-8 lg:sticky lg:top-32">
                    <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full max-w-[500px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 self-start"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                        <p className="text-[10px] font-bold text-purple-300 uppercase tracking-[0.2em]">
                            Success Stories
                        </p>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white font-sans tracking-tighter leading-[1.1]"
                    >
                        Trusted by <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
                            {" "}Visionaries
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg font-medium font-sans max-w-md leading-relaxed"
                    >
                        Real results from industry leaders. Explore how our engineering-first
                        approach has transformed businesses across the globe.
                    </motion.p>

                    {/* Decorative Arrow/CTA Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-4"
                    >
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Reviews Grid Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative min-h-[600px] w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Image
                            src='/Videos/cube.gif'
                            alt='gif'
                            fill
                            className="object-contain h-full w-full"
                            unoptimized
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Testimonials;