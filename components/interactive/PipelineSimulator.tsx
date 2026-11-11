'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function PipelineSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [stats, setStats] = useState({
    rawLinks: 68,
    scrapedArticles: 68,
    filteredArticles: 7,
    statusText: 'Pipeline Idle. Click to run real-time simulation.',
  });

  const pipelineSteps = [
    { name: 'Gmail Trigger', detail: 'Received daily library news email' },
    { name: 'Python Link Extractor', detail: 'Extracted 68 article URLs' },
    { name: 'Async Web Scraper', detail: 'Scraped DOM content & headlines' },
    { name: 'LLM Relevance Filter', detail: 'Scored 1-5 → Retained 7 articles' },
    { name: 'LLM Summarizer', detail: 'Generated concise executive briefs' },
    { name: 'Google Docs API', detail: 'Published to Google Docs' },
  ];

  const handleRunPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);
    setStats({
      rawLinks: 68,
      scrapedArticles: 0,
      filteredArticles: 0,
      statusText: 'Stage 1: Ingesting library email links...',
    });

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStep(step);

      if (step === 1) {
        setStats((prev) => ({ ...prev, statusText: 'Stage 2: Parsing 68 article URLs...' }));
      } else if (step === 2) {
        setStats((prev) => ({
          ...prev,
          scrapedArticles: 68,
          statusText: 'Stage 3: Web scraping content asynchronously...',
        }));
      } else if (step === 3) {
        setStats((prev) => ({
          ...prev,
          filteredArticles: 7,
          statusText: 'Stage 4: LLM Relevance Scoring (Filtered from 68 down to 7 top articles)...',
        }));
      } else if (step === 4) {
        setStats((prev) => ({
          ...prev,
          statusText: 'Stage 5: Summarizing selected 7 articles...',
        }));
      } else if (step >= 5) {
        setStats((prev) => ({
          ...prev,
          statusText: 'Complete! Executive briefing published to Google Docs in 4.2 seconds.',
        }));
        setIsRunning(false);
        clearInterval(interval);
      }
    }, 900);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 font-mono text-xs space-y-6 shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <h4 className="text-sm font-bold text-zinc-100 font-sans">
            AI News Digest Pipeline Simulator
          </h4>
          <p className="text-zinc-400 font-sans text-xs mt-1">
            Test the automated 2-stage LLM filtering workflow.
          </p>
        </div>

        <button
          onClick={handleRunPipeline}
          disabled={isRunning}
          className={`px-4 py-2 rounded font-sans text-xs font-semibold transition-all ${
            isRunning
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
          }`}
        >
          {isRunning ? 'Running Simulation...' : 'Run Live Simulation ▶'}
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg">
          <div className="text-zinc-500 text-[10px]">RAW EMAIL LINKS</div>
          <div className="text-lg font-bold text-zinc-100 mt-1">{stats.rawLinks}</div>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg">
          <div className="text-zinc-500 text-[10px]">PAGES SCRAPED</div>
          <div className="text-lg font-bold text-indigo-400 mt-1">{stats.scrapedArticles}</div>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg">
          <div className="text-zinc-500 text-[10px]">LLM FILTERED BRIEF</div>
          <div className="text-lg font-bold text-emerald-400 mt-1">{stats.filteredArticles}</div>
        </div>
      </div>

      {/* Pipeline Steps Tracker */}
      <div className="space-y-2">
        {pipelineSteps.map((stepItem, idx) => {
          const isPast = idx < currentStep;
          const isCurrent = idx === currentStep && isRunning;

          return (
            <motion.div
              key={idx}
              className={`p-3 rounded border flex items-center justify-between transition-colors ${
                isCurrent
                  ? 'bg-indigo-950/60 border-indigo-500 text-indigo-200'
                  : isPast
                  ? 'bg-zinc-900/80 border-emerald-800/60 text-emerald-300'
                  : 'bg-zinc-900/40 border-zinc-800/80 text-zinc-500'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-bold">0{idx + 1}.</span>
                <span className="font-sans font-medium text-xs">{stepItem.name}</span>
              </div>

              <span className="text-[11px] font-sans text-zinc-400">
                {isPast ? '✓ Complete' : isCurrent ? 'Processing...' : stepItem.detail}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Live Status Bar */}
      <div className="bg-zinc-900 border border-zinc-800/80 p-3 rounded text-zinc-300 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
        <span>{stats.statusText}</span>
      </div>
    </div>
  );
}
