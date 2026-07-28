import React from 'react';

export function CurrentWorkSection() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            Current Work & Ongoing Research
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h3 className="text-2xl font-bold text-zinc-100">InsightPrep</h3>
            <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full w-fit">
              Active Development
            </span>
          </div>

          <p className="text-base text-zinc-300 leading-relaxed">
            InsightPrep is an ongoing project designed to simplify interview preparation workflows by synthesizing structured domain insights, key concepts, and practical problem patterns into concise, actionable review modules.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            Rather than relying on generic question banks, the platform explores how targeted knowledge extraction can help candidates build deep conceptual clarity and structured problem-solving confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
