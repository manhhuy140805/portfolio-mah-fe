import React from 'react';

type PageHeaderProps = {
  label: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export default function PageHeader({ label, title, description, children, rightContent }: PageHeaderProps) {
  return (
    <section className="overflow-hidden border-b border-white/10 bg-[var(--background)]">
      <div className={`mx-auto max-w-6xl px-6 py-16 ${rightContent ? 'grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center' : ''}`}>
        <div>
          <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
            {label}
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
        {rightContent && <div>{rightContent}</div>}
      </div>
    </section>
  );
}
