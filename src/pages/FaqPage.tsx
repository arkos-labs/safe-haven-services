import { useState } from 'react';
import { Plus, Minus, Mail } from 'lucide-react';
import { Link } from '@/context/RouterContext';
import { Reveal } from '@/components/Reveal';
import { fullFaqItems } from '@/data/products';
import { useSEO } from '@/hooks/useSEO';

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useSEO({
    title: "FAQ — Questions fréquentes | NOVAE",
    description: "Tout ce que vous devez savoir sur le Masque LED NOVAE, son utilisation, la technologie Red Light Therapy, la livraison et les retours.",
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": fullFaqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return (
    <div className="bg-creme min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <div className="bg-white border-b border-creme-3 py-16 sm:py-20">
        <div className="container-luxe section-padding text-center max-w-2xl">
          <Reveal>
            <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-brun">
              Questions fréquentes
            </h1>
            <p className="text-brun-clair">
              Tout ce que vous devez savoir sur le Masque LED NOVAE et la Red Light Therapy.
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </Reveal>
        </div>
      </div>

      <div className="container-luxe section-padding py-16 max-w-3xl">
        <div className="space-y-3">
          {fullFaqItems.map((item, i) => (
            <Reveal key={i} delay={i * 30}>
              <div className="bg-white rounded-2xl border border-creme-3 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-semibold pr-4 text-brun">{item.q}</span>
                  {openIndex === i
                    ? <Minus size={18} className="text-or shrink-0" />
                    : <Plus size={18} className="text-or shrink-0" />}
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-brun-clair leading-relaxed text-sm">{item.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contact CTA */}
        <Reveal>
          <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-8 text-center mt-10">
            <h2 className="font-display text-xl font-semibold mb-2 text-brun">Vous ne trouvez pas votre réponse ?</h2>
            <p className="text-brun-clair text-sm mb-6">Notre équipe vous répond sous 24h ouvrées.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-gold">
                <Mail size={16} /> Nous contacter
              </Link>
              <a href="mailto:contact@novae.fr" className="text-sm text-brun-clair hover:text-brun transition-colors">
                contact@novae.fr
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
