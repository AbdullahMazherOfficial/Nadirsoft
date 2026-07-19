"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import CTA from './CTA';
import ServicePopup from '../popups/ServicePopup';

const NAV_LINKS = [
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
];

function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesDropdownHover, setServicesDropdownHover] = useState(false);
    
    const timeoutRef = useRef(null);

    const handleMouseEnter = (isService) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (isService) setServicesDropdownHover(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setServicesDropdownHover(false);
            setHoveredIndex(null);
        }, 150);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-center pt-2 lg:px-44 md:px-12 z-[100] transition-all duration-300">
            {/* Main Navbar Container */}
            <motion.div
                initial={false}
                animate={{
                    width: scrolled ? "90%" : "95%",
                    backgroundColor: scrolled ? "rgba(15, 23, 42, 0.8)" : "transparent",
                    borderColor: scrolled ? "rgba(15, 23, 42, 0.8)" : "transparent",
                }}
                className="max-w-[1400px] flex flex-row justify-between items-center p-2 pl-6 pr-2 border rounded-full backdrop-blur-xl transition-all duration-300 relative z-[1001]"
            >
                {/* Logo Section */}
                <Link href="/" className="cursor-pointer flex flex-row items-center gap-3">
                    <div className="flex justify-center w-9 h-9 border rounded-full border-white/20 items-center bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg">
                        <p className="text-lg font-bold text-white">N</p>
                    </div>
                    <h1 className="text-lg font-extrabold tracking-tighter text-white">
                        NADIRSOFT
                    </h1>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex flex-row items-center gap-1">
                    {NAV_LINKS.map((link, index) => (
                        <div
                            key={link.name}
                            className="relative"
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                                if (link.name === 'Services') handleMouseEnter(true);
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={link.href}
                                className={`px-5 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 rounded-full ${
                                    hoveredIndex === index ? 'text-white' : 'text-white/70'
                                }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <ChevronDown size={14} className={`transition-transform duration-300 ${servicesDropdownHover ? 'rotate-180' : ''}`} />
                                )}
                            </Link>
                            
                            {/* Animated Background Pill */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Desktop CTA */}
                <Link href="/contact">
                <div className="hidden md:block">
                    <CTA title="Start a Project" icon={ArrowRight} />
                </div>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </motion.div>

            {/* Service Popup */}
            <AnimatePresence>
                {servicesDropdownHover && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[-40px]"
                        onMouseEnter={() => handleMouseEnter(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ServicePopup />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-24 left-4 right-4 bg-gray-900 border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden overflow-hidden"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-lg font-medium text-white/80 py-3 border-b border-white/5"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;