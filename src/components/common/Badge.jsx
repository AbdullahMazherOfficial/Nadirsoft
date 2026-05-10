import React from 'react'
import { motion } from 'framer-motion'

function Badge({ title, itemVariants }) {
    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-2 px-4 py-2 border border-purple-100 rounded-full bg-purple-50 self-start"
        >
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <p className="text-[16px] font-bold text-purple-500 font-sans tracking-tight">
                {title}
            </p>
        </motion.div>
    )
}

export default Badge
