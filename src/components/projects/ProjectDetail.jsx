'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
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

function serviceSlug(title) {
    return SERVICES.find((s) => s.title === title)?.slug;
}

function ProjectDetail({ project }) {
    return (
        <div className="relative min-h-screen bg-[#0d0d12] text-white selection:bg-purple-500/30 overflow-x-hidden">

            {/* --- SHARED BACKGROUND GLOWS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-700/5 blur-[140px]" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* --- HERO --- */}
                <section className="pt-32 pb-12 lg:px-32 md:px-12 px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-[1300px] mx-auto"
                    >
                        <motion.div variants={itemVariants}>
                            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-10">
                                <ArrowLeft size={16} /> Back to all work
                            </Link>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                                <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-purple-200">
                                    {t}
                                </span>
                            ))}
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
                            {project.title}
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-white/50 font-sans text-lg max-w-2xl leading-relaxed">
                            {project.summary}
                        </motion.p>
                    </motion.div>
                </section>

                {/* --- HERO IMAGE --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-[1300px] mx-auto rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </section>

                {/* --- META BAR --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/5 py-10">
                        <Meta label="Client" value={project.client} />
                        <Meta label="Year" value={project.year} />
                        <Meta label="Category" value={project.subtitle} />
                        <Meta label="Scope" value={`${project.services.length} services`} />
                    </div>
                </section>

                {/* --- CHALLENGE & SOLUTION --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-8">
                        <div className="p-8 md:p-10 rounded-[32px] bg-white/5 border border-white/10">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-purple-400 mb-4">The Challenge</h3>
                            <p className="text-white/60 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div className="p-8 md:p-10 rounded-[32px] bg-white/5 border border-white/10">
                            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-purple-400 mb-4">What We Did</h3>
                            <p className="text-white/60 leading-relaxed">{project.solution}</p>
                        </div>
                    </div>
                </section>

                {/* --- RESULTS --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {project.results.map((r) => (
                            <div key={r.label} className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-center">
                                <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-2">{r.value}</p>
                                <p className="text-sm text-white/50 font-medium">{r.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SERVICES USED --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto">
                        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-6">Services Involved</h3>
                        <div className="flex flex-wrap gap-4">
                            {project.services.map((name) => {
                                const slug = serviceSlug(name);
                                const Chip = (
                                    <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:border-purple-500/40 hover:bg-white/10 transition-all">
                                        {name} {slug && <ArrowUpRight size={16} className="text-purple-400" />}
                                    </span>
                                );
                                return slug ? (
                                    <Link key={name} href={`/services/${slug}`}>{Chip}</Link>
                                ) : (
                                    <span key={name}>{Chip}</span>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="pb-32 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto rounded-[40px] bg-gradient-to-br from-purple-600/20 to-indigo-600/10 border border-white/10 p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Have a project like this?</h2>
                        <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
                            Tell us what you are building and we will show you how we can help. The first call is free and always useful.
                        </p>
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                            >
                                Start a Project <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

function Meta({ label, value }) {
    return (
        <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">{label}</p>
            <p className="text-white font-semibold">{value}</p>
        </div>
    );
}

export default ProjectDetail;
