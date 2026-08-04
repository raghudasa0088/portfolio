import React from 'react';

export function CurrentWorkSection() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            Current Work & Product Development
          </span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
            Active Development
          </span>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-bold text-zinc-100">InsightPrep</h3>

          <p className="text-base text-zinc-300 leading-relaxed">
            InsightPrep is a B2B analytics platform built for JEE/NEET coaching institutes to turn raw test performance data into actionable insight—for both students and the institute&apos;s teaching staff. Instead of institutes manually compiling scores across spreadsheets, InsightPrep structures test-taking, scoring, and performance analytics into one system, with dashboards built for how coaching institutes actually operate (subject-wise breakdowns, JEE/NEET-specific marking schemes, cohort-level trends).
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed font-mono pt-2">
            Currently at MVP stage, with the core test-taking flow and analytics engine functional; dashboard and reporting layers in active development.
          </p>
        </div>
      </div>
    </section>
  );
}
