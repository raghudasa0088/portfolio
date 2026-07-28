import React from 'react';
import { WorkflowStep } from '@/types/case-study';

interface WorkflowDiagramProps {
  description: string;
  steps: WorkflowStep[];
}

export function WorkflowDiagram({ description, steps }: WorkflowDiagramProps) {
  return (
    <div className="space-y-6 my-8">
      <p className="text-zinc-300 text-sm leading-relaxed">{description}</p>

      <div className="space-y-3 font-mono">
        {steps.map((item, idx) => (
          <div
            key={item.step}
            className="bg-zinc-900/70 border border-zinc-800/80 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4 text-xs"
          >
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 text-[11px] font-bold">
                {item.step}
              </span>
              <span className="text-zinc-100 font-semibold text-sm font-sans">{item.label}</span>
            </div>

            <div className="hidden sm:block text-zinc-600">→</div>

            <div className="text-zinc-400 font-sans text-xs sm:text-sm">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
