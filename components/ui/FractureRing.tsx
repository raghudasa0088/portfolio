'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FractureRingProps {
  className?: string;
  size?: number;
  color?: string;
}

export function FractureRing({
  className = '',
  size = 320,
  color = '#6366f1',
}: FractureRingProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center justify-center cursor-pointer select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Rotating Fractured Ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full text-indigo-500/30"
      >
        {/* Ring Segment 1 */}
        <path
          d="M 100 10 A 90 90 0 0 1 180 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {/* Ring Segment 2 */}
        <path
          d="M 190 100 A 90 90 0 0 1 140 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Ring Segment 3 */}
        <path
          d="M 100 190 A 90 90 0 0 1 20 140"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="8 4"
        />
        {/* Ring Segment 4 */}
        <path
          d="M 10 100 A 90 90 0 0 1 60 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        {/* Orbital Nodes */}
        <circle cx="180" cy="60" r="3" fill="#818cf8" />
        <circle cx="20" cy="140" r="2" fill="#a5b4fc" />
      </motion.svg>

      {/* Inner Counter-Rotating Fractured Ring */}
      <motion.svg
        animate={{
          rotate: -360,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 0.3, ease: 'easeOut' },
        }}
        viewBox="0 0 200 200"
        className="absolute inset-4 w-[85%] h-[85%] text-indigo-400/20"
      >
        <path
          d="M 100 30 A 70 70 0 0 1 160 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M 170 100 A 70 70 0 0 1 130 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 3"
        />
        <path
          d="M 100 170 A 70 70 0 0 1 30 130"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M 30 70 A 70 70 0 0 1 70 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      </motion.svg>

      {/* Core Center Pulse Ring */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.15, 1] : 1,
          opacity: isHovered ? [0.6, 1, 0.6] : 0.4,
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 rounded-full border border-indigo-500/50 bg-indigo-500/10 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-indigo-500/20"
      >
        <div className="w-3 h-3 rounded-full bg-indigo-400 animate-ping" />
      </motion.div>
    </div>
  );
}
