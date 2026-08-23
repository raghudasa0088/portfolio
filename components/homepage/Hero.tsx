import React from 'react';

export function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-36 md:pb-28 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-8">
        <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono text-xs rounded-md">
          AI-Powered Product & Operational Builder
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.15]">
          Every organization has work that exists because of process, not because it has to.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
          I build AI-driven software and automated workflows that eliminate operational friction, reduce manual effort, and support better decision-making.
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-4 text-sm">
          <a
            href="#working-with-me"
            className="px-6 py-3 bg-zinc-100 text-zinc-950 font-medium rounded-md hover:bg-white transition-colors duration-200 shadow-sm"
          >
            Working With Me ↓
          </a>
          <a
            href="#featured-work"
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium rounded-md hover:bg-zinc-800 hover:text-white transition-colors duration-200"
          >
            Explore Case Studies
          </a>
          <a
            href="https://drive.google.com/file/d/1YFij0rxbQHm-G2rr4jBbIjNprOnJuorY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium rounded-md hover:bg-zinc-800 hover:text-white transition-colors duration-200"
          >
            Download Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
