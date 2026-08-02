import { Star } from 'lucide-react';

export function Stars({
  rating,
  size = 16,
  className = '',
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - (i - 1)));
        return (
          <div key={i} style={{ width: size, height: size }} className="relative">
            <Star size={size} className="absolute inset-0 text-gris-fonce/40" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star size={size} className="text-or fill-or" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
