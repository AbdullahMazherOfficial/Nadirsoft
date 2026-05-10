"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CTA from '../home/CTA';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
/**
 * Modern Stat Card Component
 * Fades in and slides up on scroll.
 */
function StatCard({ label, targetValue }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // A simple counter effect for the targetValue
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        if (isInView) {
            const duration = 2;
            const steps = 60;
            const increment = targetValue / (duration * steps);
            let currentCount = 0;
            const timer = setInterval(() => {
                currentCount += increment;
                if (currentCount >= targetValue) {
                    setCount(targetValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(currentCount));
                }
            }, 1000 / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, targetValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // "Out-quint" ease
            className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col gap-1 min-w-[280px]"
        >
            <p className="text-6xl font-extrabold font-sans text-purple-500 tracking-tight">
                {/* We add the "+" suffix manually for display */}
                {label === "Projects Delivered" ? `${count}+` : count}
            </p>
            <p className="text-sm font-medium text-slate-500 font-sans mt-2">
                {label}
            </p>
        </motion.div>
    );
}

/**
 * Main About Component
 */
function About() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-150px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const STATS_DATA = [
        { label: "Projects Delivered", targetValue: 50 },
        { label: "Happy Clients", targetValue: 30 },
        { label: "Core Services", targetValue: 6 },
        { label: "Support Available", targetValue: 24 }
    ];

    return (
        <section
            ref={ref}
            className="w-full flex justify-center px-6 py-24 md:py-32 bg-slate-50/50"
        >
            <motion.div
                className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 md:gap-24 items-center"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >

                {/* Left Column: Text Content */}
                <motion.div className="flex flex-col gap-8 md:gap-10">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 px-4 py-1.5 border border-purple-100 rounded-full bg-white shadow-sm"
                    >
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                        <p className="text-[13px] font-bold text-slate-500 uppercase tracking-[0.2em]">Who we are</p>
                    </motion.div>

                    {/* Heading with specific text-gradient from global.css */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-extrabold text-slate-950 font-sans leading-[1.1] tracking-tighter"
                    >
                        We Turn Ideas Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
                            Scalable Digital
                        </span>
                        <br></br>
                        Products
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.div
                        variants={itemVariants}
                        className="flex font-sans text-lg flex-col gap-6 text-slate-600 max-w-2xl text-lg font-medium font-sans leading-relaxed"
                    >
                        <p>
                            Nadir Soft is a full-service digital agency helping businesses build powerful online presences. From sleek websites and mobile apps to intelligent AI automations and results-driven marketing — we cover everything your business needs to grow in the digital era.
                        </p>
                        <p>
                            We don't just deliver projects — we build long-term partnerships grounded in transparency, performance, and real business outcomes.
                        </p>
                    </motion.div>

                    {/* New CTA with correct prop handling */}
                    <motion.div variants={itemVariants}>
                        <CTA title="About Us" icon={ArrowRight} />
                    </motion.div>
                </motion.div>

                {/* Right Column: Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <StatCard label="Projects Delivered" targetValue={50} />
                    <StatCard label="Happy Clients" targetValue={30} />
                    <StatCard label="Core Services" targetValue={6} />

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm flex flex-col gap-1"
                    >
                        {/* Responsive text size: smaller on mobile (text-4xl), larger on desktop (md:text-6xl) */}
                        <p className="text-4xl md:text-6xl font-extrabold font-sans text-purple-500 tracking-tight">
                            24/7
                        </p>
                        <p className="text-xs md:text-sm font-medium text-slate-500 font-sans mt-2">
                            Support Available
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default About;