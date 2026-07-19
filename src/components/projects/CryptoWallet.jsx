'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Send,
    ArrowDownToLine,
    Repeat,
    History,
    CreditCard,
    ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FEATURES = [
    {
        icon: Send,
        title: "Send",
        desc: "Send any supported token to any address in seconds, with clear fees and a confirmation you can actually read before you approve it.",
    },
    {
        icon: ArrowDownToLine,
        title: "Receive",
        desc: "Share a QR code or address to get paid. Incoming transfers appear the moment they are confirmed on-chain, with no manual refresh.",
    },
    {
        icon: Repeat,
        title: "Swap",
        desc: "Trade one token for another right inside the wallet. Live rates and the best available route are picked for you automatically.",
    },
    {
        icon: History,
        title: "Transaction History",
        desc: "Every send, receive, and swap sits in one clear timeline, complete with status, fees, and a direct link to the block explorer.",
    },
    {
        icon: CreditCard,
        title: "Buy Crypto",
        desc: "Top up with a card or bank transfer through the built-in fiat on-ramp, so new users can start without opening an exchange account.",
    },
    {
        icon: ShieldCheck,
        title: "Self-Custody Security",
        desc: "Keys stay on the device, protected by biometrics and a recovery phrase. We never touch, hold, or move your funds for you.",
    },
];

const CHAINS = ["Ethereum", "Polygon", "BNB Chain", "Arbitrum", "Base", "Solana"];

const STATS = [
    { value: "Non-custodial", label: "You hold the keys" },
    { value: "6+", label: "Networks supported" },
    { value: "1-tap", label: "Swaps & on-ramp" },
    { value: "24/7", label: "Always available" },
];

function CryptoWallet() {
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
                <section className="pt-32 pb-16 lg:px-32 md:px-12 px-6">
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

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left: text */}
                            <div>
                                <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                    <span className="text-xs font-medium text-purple-200 uppercase tracking-wider">Blockchain / Web3</span>
                                </motion.div>

                                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
                                    NexVault <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Crypto Wallet</span>
                                </motion.h1>

                                <motion.p variants={itemVariants} className="text-white/50 font-sans text-lg max-w-xl leading-relaxed mb-10">
                                    A self-custody crypto wallet to send, receive, swap, and buy digital
                                    assets — all in one clean, secure app that anyone can pick up and use.
                                </motion.p>

                                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            className="cursor-pointer px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-full inline-flex items-center gap-2 transition-all shadow-xl shadow-purple-500/20"
                                        >
                                            Build Something Like This <ArrowRight size={18} />
                                        </motion.button>
                                    </Link>
                                    <Link href="/services/software-development">
                                        <motion.button
                                            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                                            className="cursor-pointer px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full inline-flex items-center gap-2 backdrop-blur-sm transition-all"
                                        >
                                            Our Blockchain Work
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>

                            {/* Right: image */}
                            <motion.div variants={itemVariants} className="relative">
                                <div className="absolute -inset-6 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
                                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                                    <img
                                        src="/Images/crypto-finance-dashboard.jpeg"
                                        alt="NexVault crypto wallet dashboard"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/20 to-transparent" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* --- STATS BAR --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-white/5 py-10">
                        {STATS.map((s) => (
                            <div key={s.label} className="text-center md:text-left">
                                <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">{s.value}</p>
                                <p className="text-sm text-white/50 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- FEATURES --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto">
                        <div className="flex flex-col items-center text-center gap-4 mb-14">
                            <div className="flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                                <p className="text-[10px] font-bold text-purple-300 uppercase tracking-[0.2em]">Everything On-Chain</p>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
                                One wallet,
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> every essential</span>
                            </h2>
                            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
                                We built NexVault around the handful of things people actually do with crypto — and made each one fast, clear, and safe.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {FEATURES.map((f) => {
                                const FeatureIcon = f.icon;
                                return (
                                    <motion.div
                                        key={f.title}
                                        variants={itemVariants}
                                        whileHover={{ y: -6 }}
                                        className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                                            <FeatureIcon size={26} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 tracking-tight">{f.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* --- SUPPORTED NETWORKS --- */}
                <section className="pb-16 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto rounded-[32px] bg-white/[0.03] border border-white/10 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="max-w-md">
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Multi-chain by design</h3>
                                <p className="text-white/50 leading-relaxed">
                                    NexVault works across the networks people use most, so balances and swaps stay in one place instead of scattered across apps.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {CHAINS.map((c) => (
                                    <span key={c} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">
                                        {c}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="pb-32 lg:px-32 md:px-12 px-6">
                    <div className="max-w-[1300px] mx-auto rounded-[40px] bg-gradient-to-br from-purple-600/20 to-indigo-600/10 border border-white/10 p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Planning a wallet or dApp?</h2>
                        <p className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
                            We design and build secure blockchain products — wallets, swaps, on-ramps, and smart contracts. Tell us what you have in mind.
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

export default CryptoWallet;
