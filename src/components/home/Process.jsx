"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
    {
        title: "Requirement Gathering",
        desc: "We start with a deep-dive meeting to understand your vision, goals, and technical needs to ensure a perfect project alignment.",
    },
    {
        title: "Design & Prototype",
        desc: "Creating high-fidelity UI/UX designs and interactive prototypes to visualize the user journey before writing a single line of code.",
    },
    {
        title: "Development",
        desc: "Our engineers bring the designs to life using clean code and scalable architecture tailored specifically for your business.",
    },
    {
        title: "Testing",
        desc: "Rigorous quality assurance and user testing to eliminate bugs and ensure the product performs flawlessly under any condition.",
    },
    {
        title: "Deployment",
        desc: "Seamlessly launching your product to live servers with optimized configurations for speed, security, and global accessibility.",
    },
    {
        title: "Maintenance",
        desc: "Ongoing support and updates to keep your digital product running smoothly and adapting to your evolving business needs.",
    },
];

function Process() {
    return (
        /* Section Background: Soft Gray for contrast against white cards */
        <section className="w-full py-24 px-6 bg-gray-50 flex justify-center overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col gap-16">

                {/* Header - Centered & Professional */}
                <div className="flex flex-col items-center justify-center text-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-1.5 border border-purple-100 rounded-full bg-white shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                        <p className="text-[13px] font-bold text-purple-600 uppercase tracking-[0.2em]">How We Work</p>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-black font-sans tracking-tighter"
                    >
                        Our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-indigo-600">
                            {" "}Process
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg font-medium font-sans max-w-2xl leading-relaxed"
                    >
                        A systematic approach to transforming your ideas into high-performing digital realities.
                    </motion.p>
                </div>

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROCESS_STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.08)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[32px] border border-gray-200 flex flex-col gap-6 transition-all duration-300 group"
                        >
                            {/* Number Badge */}
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 font-extrabold text-xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500 font-sans">
                                {index + 1}
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-gray-900 font-sans tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-500 font-sans leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Process;