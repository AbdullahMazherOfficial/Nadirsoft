'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from '../common/ProjectCard';
import { PROJECTS } from '@/data/projects';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ProjectsListing() {
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
                                    <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Our Work</span>
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] mb-8">
                                    Projects <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 tracking-tight to-indigo-400">We Are Proud</span> <br />
                                    Of
                                </motion.h1>
                            </div>

                            <div className="lg:mt-60 w-full lg:w-auto">
                                <motion.p variants={itemVariants} className="text-white/50 font-sans text-[15px] max-w-lg leading-relaxed">
                                    A look at the platforms, websites, and tools we have built for clients across retail, manufacturing, finance, and services. Every project here started as a real problem and ended as something people use every day.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* --- FEATURED: BLOCKCHAIN / CRYPTO WALLET --- */}
                <section className="pb-8 lg:px-32 md:px-12 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-[1350px] mx-auto"
                    >
                        <Link
                            href="/projects/crypto-wallet"
                            className="group relative block rounded-[32px] overflow-hidden border border-white/10 min-h-[360px]"
                        >
                            <img
                                src="/Images/crypto-finance-dashboard.jpeg"
                                alt="NexVault crypto wallet"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d12] via-[#0d0d12]/80 to-[#0d0d12]/20" />
                            <div className="relative z-10 p-8 md:p-14 max-w-xl flex flex-col justify-center min-h-[360px]">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 self-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                    <span className="text-[11px] font-bold text-purple-200 uppercase tracking-wider">Featured · Blockchain</span>
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                                    NexVault <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Crypto Wallet</span>
                                </h2>
                                <p className="text-white/60 leading-relaxed mb-6">
                                    A self-custody wallet to send, receive, swap, buy crypto with fiat, and track every transaction — all in one app.
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-bold text-purple-300 group-hover:gap-3 transition-all">
                                    View the project <ArrowRight size={16} />
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                </section>

                {/* --- PROJECTS GRID --- */}
                <section className="pb-32 lg:px-32 md:px-12 px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {PROJECTS
                            .filter((project) => project.slug !== "aether-nexus-finance")
                            .map((project) => (
                                <motion.div key={project.slug} variants={itemVariants}>
                                    <Link href={`/projects/${project.slug}`}>
                                        <ProjectCard {...project} backgroundImage={project.image} />
                                    </Link>
                                </motion.div>
                            ))}
                    </motion.div>

                    <div className="max-w-[1350px] mx-auto mt-20 flex justify-center">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                            >
                                Start Your Project <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ProjectsListing;
