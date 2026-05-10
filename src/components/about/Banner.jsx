'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Briefcase,
    Code2,
    Globe,
    ArrowRight,
    Cpu,
    ShieldCheck,
    Zap,
    Users,
    Lightbulb,
    PenTool,
    Code,
    SearchCheck,
    Rocket,
    RefreshCcw
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};


function Banner() {

    const workflowSteps = [
        { name: "Discovery", icon: <Lightbulb size={24} />, color: "from-yellow-400" },
        { name: "Design", icon: <PenTool size={24} />, color: "from-blue-400" },
        { name: "Build", icon: <Code size={24} />, color: "from-purple-400" },
        { name: "Test", icon: <SearchCheck size={24} />, color: "from-emerald-400" },
        { name: "Launch", icon: <Rocket size={24} />, color: "from-pink-400" },
        { name: "Iterate", icon: <RefreshCcw size={24} />, color: "from-indigo-400" },
    ];

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
                                    <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">About NadirSoft</span>
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] mb-8">
                                    Architecting <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 tracking-tight to-indigo-400">Digital</span> <br />
                                    Innovation
                                </motion.h1>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                                >
                                    Start a Project <ArrowRight size={20} />
                                </motion.button>
                            </div>

                            <div className="lg:mt-60 w-full lg:w-auto">
                                <motion.p variants={itemVariants} className="text-white/50 font-sans text-[15px] max-w-lg leading-relaxed">
                                    Headquartered in the global tech hub of Dubai, Nadir Soft is a premier software services provider with a truly international mindset. We don't believe in geographic boundaries. Whether you are a startup in New York, an enterprise in London, or a scaling business in Riyadh, our team delivers high-performance solutions designed to compete on a global stage.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* --- ABOUT CARDS GRID --- */}
                <section className="pb-20 lg:px-32 px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <AboutCard
                            icon={<User size={24} />}
                            title="Who I Am"
                            value="Creative Developer"
                            subText="Building modern web experiences with performance, design, and scalability in mind."
                        />

                        <AboutCard
                            icon={<Briefcase size={24} />}
                            title="Experience"
                            value="3+ Years"
                            subText="Specialized in React, Next.js, React Native, and full-stack application development."
                        />

                        <AboutCard
                            icon={<Code2 size={24} />}
                            title="What I Do"
                            value="Web & Mobile"
                            subText="Developing responsive websites, mobile apps, dashboards, and secure digital platforms."
                        />

                        <AboutCard
                            icon={<Globe size={24} />}
                            title="Work Style"
                            value="Remote Friendly"
                            subText="Focused on communication, clean code, timely delivery, and long-term collaboration."
                        />
                    </motion.div>
                </section>

                {/* --- CORE VALUES SECTION --- */}
                <section className="py-24 lg:px-32 px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Left Side: Content */}
                        <motion.div variants={itemVariants} className="space-y-8">
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Our Core <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Philosophy</span></h2>
                            <div className="w-full lg:w-auto">
                                <p className="text-white/50 font-sans text-[15px] max-w-lg leading-relaxed">
                                    At NadirSoft, we don't just write code; we solve business problems. Our approach is rooted in the belief that great software is a blend of flawless logic and human-centric design. We don't just deliver projects — we build long-term partnerships grounded in transparency, performance, and real business outcomes.
                                </p>
                            </div>
                            {/* <div className="h-1 w-20 bg-purple-600 rounded-full" /> */}
                        </motion.div>

                        {/* Right Side: 4 Value Cards Grid */}
                        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
                                <Zap className="text-yellow-400 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">High Speed</h4>
                                <p className="text-white/40 text-sm">Optimized performance ensuring ultra-fast load times and smooth interactions.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
                                <ShieldCheck className="text-indigo-400 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">Secure by Design</h4>
                                <p className="text-white/40 text-sm">Implementing enterprise-level security protocols from the first line of code.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
                                <Cpu className="text-purple-400 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">Scalable Tech</h4>
                                <p className="text-white/40 text-sm">Architecture built to grow alongside your business without technical debt.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors">
                                <Users className="text-emerald-400 mb-4" size={32} />
                                <h4 className="text-xl font-bold mb-2">Client Centric</h4>
                                <p className="text-white/40 text-sm">Transparent communication and focused partnership on your specific goals.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
                <section className="py-16 px-6 relative overflow-hidden">
                    <div className="max-w-[1300px] mx-auto flex flex-col items-center">

                        {/* Text Header */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Simple
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Process</span>
                            </h2>
                            <p className="text-white/50 max-w-lg mx-auto">
                                We’ve distilled the complex tech talk into a simple,
                                repeating cycle focused on your growth.
                            </p>
                        </div>

                        {/* The Revolving Circle Container */}
                        <div className="mt-12 mb-24 relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">

                            {/* Central Hub */}
                            <div className="absolute z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                                <span className="text-purple-400 font-bold text-sm uppercase tracking-tighter">Growth</span>
                            </div>

                            {/* Background Orbit Line - Matches the rotation speed of the items for visual consistency */}
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
                                                // translate(-50%, -50%) ensures the item starts exactly in the center of the orbit
                                                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(clamp(150px, 20vw, 250px)) rotate(-${angle}deg)`
                                            }}
                                        >
                                            {/* Counter-Rotation to keep icons and text upright */}
                                            <motion.div
                                                animate={{ rotate: -360 }}
                                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                                className="flex flex-col items-center gap-3 group"
                                            >
                                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${step.color} to-transparent p-[1px]`}>
                                                    <div className="w-full h-full rounded-2xl bg-[#0d0d12] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                                <span className="text-xs md:text-sm font-semibold tracking-wide text-white/80 whitespace-nowrap">
                                                    {step.name}
                                                </span>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

function AboutCard({ icon, title, value, subText }) {
    return (
        <motion.div
            variants={itemVariants}
            className="cursor-pointer group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all duration-300"
        >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600/20 transition-all text-purple-400">
                {icon}
            </div>

            <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                {title}
            </p>

            <h3 className="text-white font-bold text-2xl leading-tight mb-3">
                {value}
            </h3>

            <p className="text-slate-500 text-sm leading-relaxed font-light">
                {subText}
            </p>
        </motion.div>
    );
}

export default Banner