import React from 'react';
import Link from 'next/link';

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  role: string;
  institution: string;
  productionUrl?: string;
}

export function CaseStudyHeader({
  title,
  subtitle,
  role,
  institution,
  productionUrl,
}: CaseStudyHeaderProps) {
  return (
    <header className="space-y-6 border-b border-zinc-900 pb-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors mb-6"
        >
          ← Back to Portfolio Homepage
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mt-3 font-normal">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-xl">
        <div>
          <span className="text-zinc-500 block mb-1">Engineering Role</span>
          <span className="text-zinc-200">{role}</span>
        </div>

        <div>
          <span className="text-zinc-500 block mb-1">Organization / Context</span>
          <span className="text-zinc-200">{institution}</span>
        </div>

        <div>
          <span className="text-zinc-500 block mb-1">Status / Deployment</span>
          {productionUrl ? (
            <a
              href={productionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1"
            >
              Live Production ↗
            </a>
          ) : (
            <span className="text-zinc-300">Operational Automation</span>
          )}
        </div>
      </div>
    </header>
  );
}
