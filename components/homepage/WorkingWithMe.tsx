import React from 'react';

export function WorkingWithMe() {
  return (
    <section id="working-with-me" className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            Services & Build Engagements
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
            Working With Me
          </h2>
        </div>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-3xl">
          I take on a small number of build projects for teams that have a specific operational bottleneck—not a full product roadmap. If a process is being held together by spreadsheets, WhatsApp, or someone&apos;s manual effort every week, that&apos;s usually solvable in days, not months.
        </p>

        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-mono tracking-wider text-zinc-400 uppercase font-semibold">
            How it typically works:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl space-y-2">
              <div className="text-xs font-mono text-indigo-400">01. Problem Call</div>
              <div className="text-sm font-semibold text-zinc-100">20-Minute Discovery</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Understand what&apos;s actually broken and who it affects.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl space-y-2">
              <div className="text-xs font-mono text-indigo-400">02. Scoped Build</div>
              <div className="text-sm font-semibold text-zinc-100">3–7 Day Delivery</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Deliver a working version of the fix focused on immediate operational impact.
              </p>
            </div>

            <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-xl space-y-2">
              <div className="text-xs font-mono text-indigo-400">03. Iterate & Expand</div>
              <div className="text-sm font-semibold text-zinc-100">Evaluation</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Once proven, we talk about whether it&apos;s worth building further.
              </p>
            </div>
          </div>
        </div>

        <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
          I&apos;ve done this for academic operations (Samanvay), feedback pipelines, and information workflows—all now running in production. If something in your operation feels like it exists because of process rather than necessity, I&apos;d like to hear about it.
        </p>

        <div>
          <a
            href="mailto:raghudasa00@gmail.com?subject=Operational%20Bottleneck%20Query"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-950 font-medium text-sm rounded-md hover:bg-white transition-colors"
          >
            Tell me what&apos;s broken →
          </a>
        </div>
      </div>
    </section>
  );
}
