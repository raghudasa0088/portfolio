import React from 'react';
import Link from 'next/link';
import { CaseStudy } from '@/types/case-study';

interface AdditionalProjectsProps {
  caseStudies: CaseStudy[];
}

export function AdditionalProjects({ caseStudies }: AdditionalProjectsProps) {
  return (
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-4 mb-8">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          Additional Flagship Case Studies
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
          Operational Systems & Pipeline Automation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((project) => (
          <div
            key={project.slug}
            className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between space-y-6 hover:border-zinc-700 transition-colors"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-zinc-100">{project.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{project.tagline}</p>
            </div>

            <div>
              <Link
                href={`/case-study/${project.slug}`}
                className="inline-flex items-center text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
