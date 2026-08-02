import { type ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="container-luxe section-padding py-16 max-w-3xl">
      <Reveal>
        <div className="mb-12">
          <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Légal</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">{title}</h1>
          <p className="text-sm text-gris-fonce">Dernière mise à jour : {lastUpdated}</p>
          <div className="divider-gold mt-6" />
        </div>
      </Reveal>
      <div className="space-y-6 text-gris-clair leading-relaxed">{children}</div>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-xl sm:text-2xl font-semibold text-blanc mt-8 mb-3">{children}</h2>;
}

export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-inside space-y-2 ml-2">{children}</ul>;
}
