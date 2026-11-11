'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CommandKModal } from '@/components/interactive/CommandKModal';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between bg-zinc-900/85 backdrop-blur-md border border-zinc-800/80 rounded-full px-6 py-2.5 shadow-2xl shadow-black/50">
          <Link
            href="/"
            className="text-xs font-mono tracking-wider text-zinc-300 hover:text-white transition-colors uppercase font-medium"
          >
            Raghunandan Dasa
          </Link>
          <div className="flex items-center gap-4 sm:gap-6 text-xs text-zinc-400 font-mono">
            <a href="#featured-work" className="hover:text-zinc-100 transition-colors">
              Work
            </a>
            <a href="#approach" className="hover:text-zinc-100 transition-colors">
              Approach
            </a>
            <a href="#about" className="hover:text-zinc-100 transition-colors">
              About
            </a>
            
            <CommandKModal />

            <a
              href="https://drive.google.com/file/d/13Gl9-0ylAe_27nytQY0e6o_hbcNdDgh8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-full transition-colors font-sans text-xs flex items-center gap-1"
            >
              Resume ↗
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
