import React from 'react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
      <div className="space-y-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 md:p-12">
        <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          Initiate Conversation
        </span>

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          If you&apos;re solving operational problems and believe software should simplify work rather than complicate it, I&apos;d be happy to continue the conversation.
        </h2>

        <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <div className="text-zinc-500 mb-1">Email</div>
            <a
              href="mailto:raghudasa00@gmail.com"
              className="text-zinc-200 hover:text-white transition-colors underline underline-offset-4 break-all sm:break-normal"
            >
              raghudasa00@gmail.com
            </a>
          </div>

          <div>
            <div className="text-zinc-500 mb-1">Resume</div>
            <a
              href="https://drive.google.com/file/d/1YFij0rxbQHm-G2rr4jBbIjNprOnJuorY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-white transition-colors underline underline-offset-4 break-all sm:break-normal"
            >
              Google Drive PDF ↗
            </a>
          </div>

          <div>
            <div className="text-zinc-500 mb-1">GitHub</div>
            <a
              href="https://github.com/raghudasa0088"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-white transition-colors underline underline-offset-4 break-all sm:break-normal"
            >
              github.com/raghudasa0088
            </a>
          </div>

          <div>
            <div className="text-zinc-500 mb-1">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/raghunandan-dasa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-white transition-colors underline underline-offset-4 break-all sm:break-normal"
            >
              linkedin.com/in/raghunandan-dasa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
