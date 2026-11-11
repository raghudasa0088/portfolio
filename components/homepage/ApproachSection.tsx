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
          {[
            {
              num: '01',
              title: 'Systems Before Software',
              desc: 'The workflow is the real product.',
            },
            {
              num: '02',
              title: 'Simplicity Scales',
              desc: 'Complexity belongs inside the system.',
            },
            {
              num: '03',
              title: 'Automation Means',
              desc: 'Goal is better decisions & reduced effort.',
            },
            {
              num: '04',
              title: 'Design for Adoption',
              desc: 'Elegance without adoption has no value.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <div className="text-xs font-mono text-indigo-400 mb-1">{item.num}</div>
              <div className="text-sm font-semibold text-zinc-200">{item.title}</div>
              <div className="text-xs text-zinc-400 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
