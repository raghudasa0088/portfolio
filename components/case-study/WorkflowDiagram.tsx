'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorkflowStep } from '@/types/case-study';

interface WorkflowDiagramProps {
  description: string;
  steps: WorkflowStep[];
}

export function WorkflowDiagram({ description, steps }: WorkflowDiagramProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="space-y-6 my-8">
      <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>

      <div className="space-y-3 font-mono">
        {steps.map((item) => {
          const isActive = activeStep === item.step;
          return (
            <motion.div
              key={item.step}
              onMouseEnter={() => setActiveStep(item.step)}
              onMouseLeave={() => setActiveStep(null)}
              whileHover={{ scale: 1.01, x: 4 }}
              transition={{ duration: 0.2 }}
              className={`border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4 text-xs cursor-pointer transition-colors duration-200 ${
                isActive
                  ? 'bg-zinc-900 border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                  : 'bg-zinc-900/60 border-zinc-800/80'
              }`}
            >
              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold transition-colors ${
                    isActive ? 'bg-indigo-500 text-zinc-950' : 'bg-zinc-800 text-zinc-300'
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`font-semibold text-sm font-sans transition-colors ${
                    isActive ? 'text-indigo-300' : 'text-zinc-100'
                  }`}
                >
                  {item.label}
                </span>
              </div>

              <div className="hidden sm:block text-zinc-600">→</div>

              <div className="text-zinc-400 font-sans text-xs sm:text-sm">
                {item.detail}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
