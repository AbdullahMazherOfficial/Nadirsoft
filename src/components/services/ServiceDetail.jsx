'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ServiceDetail({ service }) {
    const Icon = Icons[service.icon] || Icons.Sparkles;
    const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

    return (
        <div className="relative min-h-screen bg-[#0d0d12] text-white selection:bg-purple-500/30 overflow-x-hidden">

            {/* --- SHARED BACKGROUND GLOWS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-700/5 blur-[140px]" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* --- HERO (split: content + image) --- */}
                <section className="pt-32 pb-16 lg:px-32 md:px-12 px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[1300px] mx-auto"
                    >
                        <motion.div variants={itemVariants}>
                            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-10">
                                <ArrowLeft size={16} /> All services
                            </Link>
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left: text */}
                            <div>
                                <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8">
                                    <span className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400">
                                        <Icon size={28} />
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">Service</span>
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
                                    {service.title}
                                </motion.h1>

                                <motion.p variants={itemVariants} className="text-white/50 font-sans text-lg max-w-xl leading-relaxed mb-10">
                                    {service.tagline}
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            className="cursor-pointer px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full inline-flex items-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                                        >
                                            Get in Touch <ArrowRight size={18} />
                                        </motion.button>
                                    </Link>
                                    <Link href="/projects">
                                        <motion.button
                                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                                            className="cursor-pointer px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full inline-flex items-center gap-2 backdrop-blur-sm transition-all"
                                        >
                                            See Our Work
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Right: image */}
                            <motion.div variants={itemVariants} className="relative">
                                <div className="absolute -inset-6 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
                                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/20 to-transparent" />
                                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-white font-bold tracking-tight">{service.title}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* --- OVERVIEW --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto border-y border-white/5 py-12">
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-purple-400 mb-6">Overview</h3>
                        <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-4xl font-light">{service.overview}</p>
                    </div>
                </section>

                {/* --- FEATURES --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">What is included</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {service.features.map((f) => (
                                <div key={f.title} className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300">
                                    <div className="w-11 h-11 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                                        <Check size={20} />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- TOOLS & TECH --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto rounded-[32px] bg-white/[0.03] border border-white/10 p-8 md:p-10">
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-6">Tools & Tech</h3>
                        <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag) => (
                                <span key={tag} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- OTHER SERVICES --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto">
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-6">Explore other services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {others.map((s) => {
                                const OtherIcon = Icons[s.icon] || Icons.Sparkles;
                                return (
                                    <Link
                                        key={s.slug}
                                        href={`/services/${s.slug}`}
                                        className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-400 shrink-0">
                                            <OtherIcon size={18} />
                                        </div>
                                        <span className="text-sm font-semibold group-hover:text-purple-300 transition-colors">{s.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="pb-32 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto rounded-[40px] bg-gradient-to-br from-purple-600/20 to-indigo-600/10 border border-white/10 p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to get started?</h2>
                        <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
                            Book a free discovery call and we will map out how {service.title.toLowerCase()} can work for your business.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                            >
                                Get in Touch <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceDetail;
