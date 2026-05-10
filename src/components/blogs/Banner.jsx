'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Search,
    Calendar,
    Clock,
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

// --- DUMMY DATA ---
const BLOG_CATEGORIES = ["All", "Web3", "Development", "UI/UX", "Mobile"];

const DUMMY_BLOGS = [
    {
        id: 1,
        title: "Future of Web3: Stay on Top of Compliance",
        excerpt: "The world of Web3 is no exception to regulatory compliance. Discover how decentralized tech is adapting...",
        category: "Web3",
        date: "Feb 13, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Why Next.js is the Ultimate Solution for SaaS",
        excerpt: "As the terrain of web development changes at lightning speed, scalability and performance are the new gold standard...",
        category: "Development",
        date: "Feb 10, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Powering Secure and Scalable Mobile Apps",
        excerpt: "As the digital economy evolves, one truth becomes clear: trust and security are the foundations of success...",
        category: "Mobile",
        date: "Jan 28, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop"
    }
];

function Blogs() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredBlogs = activeCategory === "All"
        ? DUMMY_BLOGS
        : DUMMY_BLOGS.filter(blog => blog.category === activeCategory);

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
                                    <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Our Blogs</span>
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] mb-8">
                                    Insights <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 tracking-tight to-indigo-400">Perspectives </span> <br />
                                    Ideas
                                </motion.h1>

                                <motion.button
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="cursor-pointer px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                                >
                                    Explore Articles <ArrowRight size={20} />
                                </motion.button>
                            </div>

                            <div className="lg:mt-60 w-full lg:w-auto">
                                <motion.p variants={itemVariants} className="text-white/50 font-sans text-[15px] max-w-lg leading-relaxed">
                                    Explore articles on modern web development, UI/UX trends, scalable applications, mobile experiences, performance optimization, and the evolving world of technology. Discover practical insights, development strategies, and creative solutions crafted from real-world experience.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* --- BLOG GRID SECTION --- */}
                <section className="pb-32 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1350px] mx-auto">

                        {/* Search & Filters */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-b border-white/5 pb-8">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                {BLOG_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
                                                : "bg-white/5 text-white/40 hover:bg-white/10"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode='popLayout'>
                                {filteredBlogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function BlogCard({ blog }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="group flex flex-col bg-white/5 rounded-[16px] overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500"
        >
            {/* Image Container */}
            <div className="cursor-pointer relative h-58 w-full overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] to-transparent opacity-60" />
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-lg bg-purple-600/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest">
                        {blog.category}
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {blog.readTime}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors leading-tight">
                    {blog.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-2">
                    {blog.excerpt}
                </p>

                <div className="mt-auto">
                    <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                        Read More <ArrowRight size={16} className="text-purple-500" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

export default Blogs;