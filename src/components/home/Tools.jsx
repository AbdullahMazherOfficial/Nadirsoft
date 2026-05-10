"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TECH_STACK = [
    { category: "Frontend", skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", skills: ["Node.js", "Python", "Laravel", "Django", "Express"] },
    { category: "Mobile", skills: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { category: "Database", skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"] },
    { category: "Cloud & DevOps", skills: ["AWS", "Vercel", "Docker", "GitHub Actions", "Firebase"] },
    { category: "AI & Automation", skills: ["OpenAI", "LangChain", "n8n", "Make", "Zapier"] },
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Creates the professional "wave" effect
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for smoothness
    },
};

const badgeVariants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        y: -2,
        backgroundColor: "#f8fafc",
        borderColor: "#e2e8f0",
        transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
};

function Tools() {
    return (
        <section className="w-full bg-slate-50/50 py-24 px-6 flex justify-center overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-7xl w-full flex flex-col items-center gap-16"
            >

                {/* Header Section */}
                <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-1.5 border border-purple-100 rounded-full bg-white shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                        <p className="text-[13px] font-bold text-slate-500 tracking-[0.2em]">Our Tech Stack</p>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 font-sans tracking-tight">
                        Built With the Best <span className="px-4 py-1 rounded-2xl bg-[linear-gradient(135deg,#0ea5e9,#7c3aed)] text-white inline-block">Tools</span>
                    </h2>

                    <p className="text-slate-500 text-lg font-medium font-sans max-w-xl leading-relaxed">
                        We use battle-tested, modern technologies to deliver fast, secure, and scalable digital products.
                    </p>
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {TECH_STACK.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }} // Lift the card slightly on hover
                            className="group bg-white p-8 rounded-[32px] border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 relative overflow-hidden"
                        >
                            {/* Subtle accent background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-sm font-black text-purple-600 uppercase tracking-[0.2em] mb-6">
                                    {item.category}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={badgeVariants}
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-sm font-semibold text-slate-600 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
}

export default Tools;