import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/80 py-12 px-6 text-xs text-zinc-500 font-mono">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-zinc-300 font-medium">Raghunandan Dasa</span> | AI-Powered Product & Operational Builder
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/13Gl9-0ylAe_27nytQY0e6o_hbcNdDgh8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            Resume ↗
          </a>
          <a
            href="https://github.com/raghudasa0088"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raghunandan-dasa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:raghudasa00@gmail.com"
            className="hover:text-zinc-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
