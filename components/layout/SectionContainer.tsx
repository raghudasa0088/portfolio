import React from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function SectionContainer({ id, className = '', children }: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 max-w-4xl mx-auto ${className}`}>
      {children}
    </section>
  );
}
