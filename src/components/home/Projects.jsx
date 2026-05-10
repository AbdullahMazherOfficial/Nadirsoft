"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../common/ProjectCard';
import Link from 'next/link';

const PROJECT_DATA = [
    {
        title: "Nexora ERP",
        subtitle: "Software Development",
        description: "Streamlined operational overhead by 40% through custom automated resource planning.",
        backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tech: ["ERP System", "Custom Software"]
    },
    {
        title: "ShopSprint",
        subtitle: "Website Development",
        description: "E-commerce revenue increased by 65% in the first quarter post-launch.",
        backgroundImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2370&auto=format&fit=crop",
        tech: ["E-Commerce", "Next.js", "Stripe"]
    },
    {
        title: "Clarise App",
        subtitle: "App Development",
        description: "Achieved 10k+ downloads in the first 30 days of release on iOS and Android.",
        backgroundImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2370&auto=format&fit=crop",
        tech: ["iOS & Android", "React Native"]
    }
];

function Projects() {
    return (
        <section id="work" className="w-full py-24 px-6 flex justify-center bg-white">
            <div className="max-w-7xl w-full flex flex-col gap-16">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 px-4 py-1.5 border border-purple-100 rounded-full bg-white shadow-sm"
                        >
                            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                            <p className="text-[13px] font-bold text-slate-500 uppercase tracking-[0.2em]">Our Work</p>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 font-sans tracking-tighter">
                            Featured
                            <span className="pr-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
                                {" "}Projects
                            </span>
                        </h2>
                    </div>

                    <Link href="coming-soon">
                    <motion.button
                        whileHover={{ x: 5 }}
                        className="cursor-pointer flex font-sans items-center gap-2 text-purple-600 font-bold text-sm group"
                    >
                        View All Work
                        <ArrowUpRight className="transition-transform group-hover:rotate-45" size={16} />
                    </motion.button>
                    </Link>
                </div>

                {/* Grid Area */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECT_DATA.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;