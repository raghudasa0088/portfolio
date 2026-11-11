'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CommandKModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const items = [
    {
      title: 'Samanvay — Timetable Operations Platform',
      category: 'Featured Case Study',
      url: '/case-study/samanvay',
    },
    {
      title: 'Faculty Feedback Report Automation',
      category: 'Case Study',
      url: '/case-study/faculty-feedback-automation',
    },
    {
      title: 'AI-Powered Library News Digest',
      category: 'Case Study',
      url: '/case-study/library-news-digest',
    },
    {
      title: 'Engineering Approach & Philosophy',
      category: 'Homepage Section',
      url: '#approach',
    },
    {
      title: 'InsightPrep (Current Work)',
      category: 'Current Work',
      url: '#about',
    },
    {
      title: 'Download Resume (Google Drive PDF)',
      category: 'External Link',
      url: 'https://drive.google.com/file/d/13Gl9-0ylAe_27nytQY0e6o_hbcNdDgh8/view?usp=sharing',
      isExternal: true,
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating ⌘K Trigger Button on Navigation */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 rounded-full text-xs font-mono transition-colors shadow-inner"
      >
        <span>Search</span>
        <kbd className="bg-zinc-800 border border-zinc-700 px-1.5 py-0.5 rounded text-[10px]">
          ⌘K
        </kbd>
      </button>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-zinc-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
                <span className="text-zinc-500 font-mono text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Search case studies, approach, resume..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none w-full font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-300 px-2 py-1 bg-zinc-800 rounded"
                >
                  ESC
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto p-2 space-y-1 font-mono text-xs">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                      {item.isExternal ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/80 transition-colors text-zinc-300 hover:text-white"
                        >
                          <span>{item.title}</span>
                          <span className="text-[10px] text-indigo-400 bg-indigo-950 px-2 py-0.5 rounded">
                            {item.category} ↗
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={item.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/80 transition-colors text-zinc-300 hover:text-white"
                        >
                          <span>{item.title}</span>
                          <span className="text-[10px] text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
                            {item.category}
                          </span>
                        </Link>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <div className="p-4 text-center text-zinc-500 font-sans text-xs">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
