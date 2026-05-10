"use client";
import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ tech = [], backgroundImage, subtitle, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[550px] w-full rounded-[30px] overflow-hidden cursor-pointer border border-white/10 shadow-2xl"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content Container */}
      <div className="relative h-full w-full p-8 flex flex-col justify-between z-10">
        
        {/* Top: Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom: Text Info */}
        <div className="space-y-3">
          <p className="text-white font-bold text-xs uppercase tracking-[0.2em]">
            {subtitle}
          </p>
          <h3 className="text-2xl font-extrabold text-white font-sans tracking-tight">
            {title}
          </h3>
          <p className="text-slate-300 text-sm font-medium leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;