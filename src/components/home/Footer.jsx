"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as Icons from 'lucide-react'; // Import all as a namespace to avoid "missing export" errors
import { CONTACT } from '@/data/site';

const FOOTER_LINKS = {
  services: [
    { label: "Website Development", href: "/services/website-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Software Development", href: "/services/software-development" },
    { label: "App Development", href: "/services/app-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud & DevOps Engineering", href: "/services/cloud-solutions" },
    { label: "AI & Intelligent Automation", href: "/services/ai-automation" },
  ],
  company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/coming-soon" },
  ],
  brand: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

// Helper to safely render icons even if they are missing/misspelled.
const Icon = ({ name, size = 16, className = "" }) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return <Icons.Globe size={size} className={className} />; // Fallback to Globe if icon not found
  return <LucideIcon size={size} className={className} />;
};

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com", external: true },
  { name: "Linkedin", href: "https://www.linkedin.com", external: true },
  { name: "Youtube", href: "https://www.youtube.com", external: true },
  { name: "Send", href: CONTACT.whatsapp, external: true },
  { name: "Globe", href: "/", external: false },
  { name: "MessageSquare", href: CONTACT.whatsapp, external: true },
];

function Footer() {
  // Live local time for the Dubai office.
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Dubai",
        }).format(new Date())
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative w-full bg-[#050505] pt-20 pb-10 px-6 overflow-hidden">

      {/* Mesh Gradient Glow */}
      <div className="absolute top-0 left-2 -translate-x-1/2 w-full max-w-[500px] h-[400px] bg-red-900/60 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 -translate-x-1/2 w-full max-w-[500px] h-[400px] bg-red-900/60 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
              <span className="text-white font-bold tracking-widest uppercase">NadirSoft</span>
            </div>
            <nav className="flex flex-col space-y-3">
              {FOOTER_LINKS.brand.map((item) => (
                <Link key={item.label} href={item.href} className="text-white text-3xl font-bold hover:text-purple-400 transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {FOOTER_LINKS.services.map(s => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-purple-400 transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {FOOTER_LINKS.company.map(c => (
                <li key={c.label}>
                  <Link href={c.href} className="hover:text-purple-400 transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Contact</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <a href={CONTACT.emailHref} className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <Icon name="Mail" className="text-purple-500" /> {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 hover:text-purple-400 transition-colors">
                <Icon name="Phone" className="text-purple-500" /> {CONTACT.phone}
              </a>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" className="text-purple-500" /> {CONTACT.location}
              </div>
            </div>

            {/* Social Icons - Using names as strings to prevent import errors */}
            <div className="flex flex-wrap gap-4 pt-4">
              {SOCIAL_LINKS.map(({ name, href, external }) => (
                <a
                  key={name}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all"
                >
                  <Icon name={name} size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Big Text */}
        <div className="py-10 border-t border-white/5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[8vw] md:text-[10vw] font-mono font-black text-white leading-none tracking-tighter select-none"
          >
            NadirSoft
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-white/5 text-[10px] text-slate-600 font-medium uppercase tracking-widest">
          <p>NadirSoft © 2026</p>
          <div className="flex items-center gap-2">
            <span>{CONTACT.city}</span>
            <span className="text-white">{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
