import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-b border-zinc-900">
      <div className="space-y-6">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          About & Background
        </span>

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Raghunandan Dasa
        </h2>

        <div className="space-y-4 text-base text-zinc-300 leading-relaxed max-w-3xl">
          <p>
            I am an AI-powered product builder who creates software to solve real operational challenges, eliminate unnecessary manual complexity, and support better decisions.
          </p>

          <p>
            My work combines practical workflow analysis with modern AI development, building production operations tools for institutions like IIM Bodh Gaya, automating feedback analysis pipelines, and structuring intelligent information workflows. I focus on understanding operational needs first, leveraging AI to convert manual friction into quiet, reliable user experiences.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-zinc-400">
            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg">
              <span className="text-zinc-500 block mb-1">Focus Areas</span>
              AI-Powered Development, Operational Workflow Design, Pipeline Automation, Product Execution
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg">
              <span className="text-zinc-500 block mb-1">Academic Context</span>
              Management Studies & System Design | Active Builder at IIM Bodh Gaya Operations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
