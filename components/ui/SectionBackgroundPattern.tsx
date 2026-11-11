'use client';

import React from 'react';

interface SectionBackgroundPatternProps {
  variant?: 'grid' | 'dots' | 'radial';
  glowColor?: 'indigo' | 'emerald' | 'purple' | 'slate';
}

export function SectionBackgroundPattern({
  variant = 'grid',
  glowColor = 'indigo',
}: SectionBackgroundPatternProps) {
  const glowColors = {
    indigo: 'from-indigo-950/20 via-indigo-900/5 to-transparent',
    emerald: 'from-emerald-950/20 via-emerald-900/5 to-transparent',
    purple: 'from-purple-950/20 via-purple-900/5 to-transparent',
    slate: 'from-zinc-800/20 via-zinc-900/5 to-transparent',
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Soft Ambient Radial Glow */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] ${glowColors[glowColor]}`}
      />

      {/* Geometric Sub-Grid Overlay */}
      {variant === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      )}

      {/* Dots Pattern */}
      {variant === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      )}
    </div>
  );
}
