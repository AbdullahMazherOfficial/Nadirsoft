"use client";
import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ tech = [], backgroundImage, subtitle, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full w-full rounded-[30px] overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-[#0b0f14]"
    >
      {/* Image Header — 16:10 to match the screenshots so nothing is over-cropped */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent opacity-80" />

        {/* Top: Tech Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-grow p-7">
        <p className="text-purple-300 font-bold text-[11px] uppercase tracking-[0.2em]">
          {subtitle}
        </p>
        <h3 className="text-2xl font-extrabold text-white font-sans tracking-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-sm font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
