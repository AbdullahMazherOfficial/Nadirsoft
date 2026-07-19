'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServicesListing() {
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
                                    <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">What We Do</span>
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] mb-8">
                                    Services <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 tracking-tight to-indigo-400">Built Around</span> <br />
                                    Your Goals
                                </motion.h1>
                            </div>

                            <div className="lg:mt-60 w-full lg:w-auto">
                                <motion.p variants={itemVariants} className="text-white/50 font-sans text-[15px] max-w-lg leading-relaxed">
                                    From the first website to the software that runs your whole operation, we cover the digital work most businesses need. Pick a service below to see how we approach it and what you can expect working with us.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* --- SERVICES GRID --- */}
                <section className="pb-32 lg:px-32 md:px-12 px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {SERVICES.map((service) => {
                            const Icon = Icons[service.icon] || Icons.Sparkles;
                            return (
                                <motion.div key={service.slug} variants={itemVariants}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="group flex flex-col h-full rounded-[32px] bg-white/5 border border-white/10 overflow-hidden hover:border-purple-500/40 hover:bg-white/[0.08] transition-all duration-300"
                                    >
                                        {/* Image header */}
                                        <div className="relative h-44 w-full overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/30 to-transparent" />
                                            <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-[#0d0d12]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-purple-400">
                                                <Icon size={22} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-grow p-8">
                                            <h3 className="text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                                            <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 group-hover:gap-3 transition-all">
                                                Learn more <ArrowUpRight size={16} />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="max-w-[1350px] mx-auto mt-20 flex justify-center">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                            >
                                Discuss Your Needs <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServicesListing;
