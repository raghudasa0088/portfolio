import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/types/case-study';

interface FeaturedProjectProps {
  caseStudy: CaseStudy;
}

export function FeaturedProject({ caseStudy }: FeaturedProjectProps) {
  return (
    <section id="featured-work" className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-4 mb-8">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          Featured Engineering Case Study
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          {caseStudy.title}
        </h2>
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-8 space-y-8">
        <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
          {caseStudy.overview}
        </p>

        {/* Visual Architecture Diagram Container */}
        <div className="bg-zinc-950 border border-zinc-800/80 rounded-lg p-6 font-mono text-xs text-zinc-400 space-y-4">
          <div className="flex items-center justify-between text-zinc-500 border-b border-zinc-800 pb-3">
            <span>Samanvay Operational Architecture</span>
            <span className="text-emerald-400 font-sans font-medium bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/50">
              Live at IIM Bodh Gaya
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded space-y-2">
              <div className="text-zinc-200 font-semibold font-sans">1. Legacy Constraints</div>
              <div className="text-zinc-400 text-[11px] leading-normal">
                Optimization solver output → Database records required direct manual SQL editing for schedule modifications.
              </div>
            </div>

            <div className="bg-zinc-900/90 border border-indigo-500/40 p-4 rounded space-y-2">
              <div className="text-indigo-400 font-semibold font-sans flex items-center justify-between">
                <span>2. Samanvay Layer</span>
                <span className="text-[10px] text-indigo-300 bg-indigo-950 px-1.5 py-0.5 rounded">Core</span>
              </div>
              <div className="text-zinc-300 text-[11px] leading-normal">
                Client-side JS snapshot → Drag-and-drop cell manipulation + real-time constraint validation.
              </div>
            </div>

            <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded space-y-2">
              <div className="text-zinc-200 font-semibold font-sans">3. Deferred Sync</div>
              <div className="text-zinc-400 text-[11px] leading-normal">
                Exploratory batch changes reviewed locally → Approved updates committed cleanly to production DB.
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link
            href={`/case-study/${caseStudy.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-medium text-sm rounded-md hover:bg-white transition-colors"
          >
            Read Full Case Study →
          </Link>
        </div>
      </div>
    </section>
  );
}
