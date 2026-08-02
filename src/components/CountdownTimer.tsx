import { useState, useEffect } from 'react';

export function CountdownTimer({ hours = 24, compact = false }: { hours?: number; compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState(hours * 3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : hours * 3600));
    }, 1000);
    return () => clearInterval(interval);
  }, [hours]);

  const h = Math.floor(timeLeft / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (compact) {
    return (
      <span className="font-mono font-semibold text-or">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { label: 'Heures', value: h },
        { label: 'Minutes', value: m },
        { label: 'Secondes', value: s },
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="glass-card px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[90px]">
            <span className="text-2xl sm:text-4xl font-display font-bold text-gradient-gold tabular-nums">
              {pad(unit.value)}
            </span>
          </div>
          <span className="text-xs text-gris-clair mt-2 uppercase tracking-widest">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
