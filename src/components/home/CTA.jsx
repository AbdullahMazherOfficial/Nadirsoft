"use client";
import React from 'react';
import { motion } from 'framer-motion';

function CTA({ title, icon: Icon }) {
  return (
    <motion.button
      whileHover="hover"
      className="group cursor-pointer relative px-6 py-2.5 rounded-full text-white flex items-center justify-center gap-2 overflow-hidden bg-[linear-gradient(135deg,#0ea5e9,#7c3aed)] transition-all duration-300 active:scale-95"
    >
      {/* Fallback text if title is missing */}
      <span className="font-semibold text-lg font-sans z-10">
        {title || "Default Title"} 
      </span>

      {Icon ? (
        <motion.div
          variants={{ hover: { x: 5 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center justify-center z-10"
        >
          <Icon size={20} strokeWidth={2.5} />
        </motion.div>
      ) : (
        <span className="text-xs text-white/50">(No Icon)</span>
      )}
    </motion.button>
  );
}

export default CTA;