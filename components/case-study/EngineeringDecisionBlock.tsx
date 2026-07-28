import React from 'react';
import { EngineeringDecision } from '@/types/case-study';

interface EngineeringDecisionBlockProps {
  decisions: EngineeringDecision[];
}

export function EngineeringDecisionBlock({ decisions }: EngineeringDecisionBlockProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {decisions.map((dec, i) => (
        <div
          key={i}
          className="bg-zinc-900/40 border border-zinc-800/90 rounded-xl p-6 space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
            <span>Decision 0{i + 1}</span>
          </div>
          <h4 className="text-lg font-bold text-zinc-100">{dec.title}</h4>
          <p className="text-sm text-zinc-400 leading-relaxed">{dec.description}</p>
        </div>
      ))}
    </div>
  );
}
