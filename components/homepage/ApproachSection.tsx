import React from 'react';

export function ApproachSection() {
  return (
    <section id="approach" className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-6">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          Engineering Approach & Philosophy
        </span>

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Good software begins long before the first line of code.
        </h2>

        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl">
          Every system starts with understanding how people work, identifying unnecessary complexity, and choosing the simplest solution that genuinely improves the process.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-lg">
            <div className="text-xs font-mono text-zinc-500 mb-1">01</div>
            <div className="text-sm font-semibold text-zinc-200">Systems Before Software</div>
            <div className="text-xs text-zinc-400 mt-1">The workflow is the real product.</div>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-lg">
            <div className="text-xs font-mono text-zinc-500 mb-1">02</div>
            <div className="text-sm font-semibold text-zinc-200">Simplicity Scales</div>
            <div className="text-xs text-zinc-400 mt-1">Complexity belongs inside the system.</div>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-lg">
            <div className="text-xs font-mono text-zinc-500 mb-1">03</div>
            <div className="text-sm font-semibold text-zinc-200">Automation Means</div>
            <div className="text-xs text-zinc-400 mt-1">Goal is better decisions & reduced effort.</div>
          </div>

          <div className="bg-zinc-900/60 border border-zinc-800/80 p-4 rounded-lg">
            <div className="text-xs font-mono text-zinc-500 mb-1">04</div>
            <div className="text-sm font-semibold text-zinc-200">Design for Adoption</div>
            <div className="text-xs text-zinc-400 mt-1">Elegance without adoption has no value.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
