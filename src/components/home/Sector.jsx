"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingBag,
    Stethoscope,
    GraduationCap,
    Wallet,
    Building2,
    UtensilsCrossed,
    Truck,
    PlaneTakeoff
} from 'lucide-react';

const SECTOR_DATA = [
    {
        title: "Digital Commerce",
        desc: "Scale your retail footprint with high-conversion marketplaces and automated inventory systems.",
        icon: ShoppingBag,
    },
    {
        title: "Health Tech",
        desc: "Secure, HIPAA-compliant platforms for patient management and remote clinical consultations.",
        icon: Stethoscope,
    },
    {
        title: "EdTech Systems",
        desc: "Interactive learning management environments designed for modern institutional growth.",
        icon: GraduationCap,
    },
    {
        title: "FinTech & Banking",
        desc: "Next-gen payment gateways and analytical dashboards with enterprise-grade encryption.",
        icon: Wallet,
    },
    {
        title: "Real Estate Tech",
        desc: "Advanced property ecosystems featuring virtual tours and integrated CRM automation.",
        icon: Building2,
    },
    {
        title: "Hospitality Management",
        desc: "Unified reservation engines and guest-experience platforms for the modern service industry.",
        icon: UtensilsCrossed,
    },
    {
        title: "Supply Chain & Logistics",
        desc: "Real-time fleet intelligence and predictive analytics for global distribution networks.",
        icon: Truck,
    },
    {
        title: "Travel & Leisure",
        desc: "End-to-end booking architectures and immersive travel planning interfaces.",
        icon: PlaneTakeoff,
    },
];

function Sector() {
    return (
        <section className="w-full py-24 px-6 bg-gray-50/30 flex justify-center overflow-hidden">
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
                        <p className="text-[13px] font-bold text-slate-500 uppercase tracking-[0.2em]">Industries We Empower</p>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-slate-950 font-sans tracking-tighter"
                    >
                        Solutions for Every
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-600">
                            {" "}Industry
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg font-medium font-sans max-w-2xl leading-relaxed"
                    >
                        We bridge the gap between complex business challenges and intuitive digital solutions across global market sectors.
                    </motion.p>
                </div>

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SECTOR_DATA.map((sector, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-8 rounded-[32px] border border-gray-100 flex flex-col gap-6 transition-all duration-300 group"
                        >
                            {/* Icon with Hover Animation */}
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                                <sector.icon size={24} strokeWidth={2} />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-slate-900 font-sans tracking-tight">
                                    {sector.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-500 font-sans leading-relaxed">
                                    {sector.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sector;