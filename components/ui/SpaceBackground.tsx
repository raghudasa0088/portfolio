'use client';

import React, { useEffect, useRef } from 'react';

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create crisp, visible cosmic stars
    const starCount = Math.min(Math.floor((width * height) / 8000), 120);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1.5, // Crisp, clearly visible sizes (1.5px - 3.5px)
      alpha: Math.random() * 0.6 + 0.35, // High contrast opacity
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.3 ? '#e0e7ff' : Math.random() > 0.5 ? '#818cf8' : '#cbd5e1',
    }));

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render cosmic background stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle logic
        star.alpha += star.twinkleSpeed * star.direction;
        if (star.alpha >= 0.95 || star.alpha <= 0.25) {
          star.direction *= -1;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        
        // Add subtle star glow shadow
        ctx.shadowBlur = star.size * 3;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Space Dark Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/30 via-zinc-950 to-zinc-950" />
      
      {/* Cosmic Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
      
      {/* Cosmic Nebula Soft Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
