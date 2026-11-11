'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WindBlownTextProps {
  text: string;
  className?: string;
}

export function WindBlownText({ text, className = '' }: WindBlownTextProps) {
  const [isBreezing, setIsBreezing] = useState(false);
  const words = text.split(' ');

  return (
    <div
      onMouseEnter={() => setIsBreezing(true)}
      onMouseLeave={() => setIsBreezing(false)}
      className={`relative inline-block cursor-default select-none ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split('').map((char, charIdx) => (
            <motion.span
              key={charIdx}
              animate={
                isBreezing
                  ? {
                      x: [0, Math.random() * 8 + 2, 0],
                      y: [0, (Math.random() - 0.5) * 6, 0],
                      opacity: [1, 0.7, 1],
                      filter: [
                        'blur(0px)',
                        'blur(1px)',
                        'blur(0px)',
                      ],
                    }
                  : { x: 0, y: 0, opacity: 1, filter: 'blur(0px)' }
              }
              transition={{
                duration: 0.8,
                delay: (wordIdx * 4 + charIdx) * 0.02,
                ease: 'easeInOut',
              }}
              className="inline-block transition-colors hover:text-indigo-300"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
}
