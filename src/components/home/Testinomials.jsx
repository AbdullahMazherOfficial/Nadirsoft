"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
                            Blockchain & Web3
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
                        Built for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
                            {" "}Web3
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
                        From self-custody wallets to swaps, on-ramps, and smart contracts,
                        we build secure blockchain products. Meet NexVault, our crypto wallet.
                    </motion.p>

                    {/* Feature chips */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-wrap gap-2 max-w-md"
                    >
                        {["Send", "Receive", "Swap", "Buy Crypto", "History"].map((chip) => (
                            <span key={chip} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                                {chip}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTA Area */}
                    <Link href="/projects/crypto-wallet">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 flex items-center gap-3 group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                            <span className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">Explore NexVault Wallet</span>
                        </motion.div>
                    </Link>
                </div>

                {/* Right Column: Reviews Grid Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative min-h-[600px] w-full"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:-mt-32 lg:mt-0">
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