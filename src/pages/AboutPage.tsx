import { Sparkles, Heart, Shield, Check, ArrowRight } from 'lucide-react';
import { Link } from '@/context/RouterContext';
import { Reveal } from '@/components/Reveal';

export function AboutPage() {
  return (
    <div className="bg-creme min-h-screen">

      {/* Hero — sobre, clair */}
      <section className="py-24 sm:py-32 bg-white border-b border-creme-3">
        <div className="container-luxe section-padding text-center max-w-3xl">
          <Reveal>
            <p className="text-or text-sm font-semibold uppercase tracking-widest mb-4">Notre histoire</p>
            <h1 className="font-display text-4xl sm:text-6xl font-bold mb-6 text-balance text-brun">
              La renaissance de <span className="text-gradient-gold">votre peau</span>
            </h1>
            <p className="text-lg text-brun-clair leading-relaxed max-w-2xl mx-auto">
              NOVAE est née d'une frustration partagée par des millions de femmes : dépenser des centaines d'euros en crèmes sans résultats visibles. Nous avons changé ça.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 sm:py-28 bg-creme">
        <div className="container-luxe section-padding max-w-3xl">
          <Reveal>
            <div className="space-y-6 text-brun-clair leading-relaxed text-base">
              <p>
                Tout a commencé par un constat simple. Après des centaines d'euros dépensés en crèmes anti-âge, sérums miracles et routines toujours plus complexes, les résultats restaient décevants. Les ridules s'installaient, le teint s'assourdissait, et rien ne semblait inverser le mouvement.
              </p>
              <p>
                Puis, la découverte : la thérapie par lumière rouge. Une technologie scientifiquement prouvée, utilisée dans les instituts de beauté les plus prestigieux, à 150 € la séance. Une technologie qui stimule la production naturelle de collagène, atténue les rides et redonne de l'éclat — sans aiguille, sans douleur, sans chimie.
              </p>
              <p className="font-semibold text-brun">
                Rendre la Red Light Therapy accessible à toutes, chez soi, pour un investissement unique — c'est là qu'est née l'idée de NOVAE.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28 bg-white border-y border-creme-3">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Notre mission</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-brun">
                La beauté tech, accessible à toutes
              </h2>
              <p className="text-brun-clair">
                Plus besoin de choisir entre efficacité et budget. NOVAE apporte la technologie des dermatologues directement dans votre salle de bain.
              </p>
              <div className="divider-gold mx-auto mt-6" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: 'Efficacité prouvée',
                text: 'Des technologies validées par la science clinique, pas des promesses marketing. Résultats visibles dès 14 jours.',
              },
              {
                icon: Heart,
                title: 'Accessible à toutes',
                text: "La technologie des instituts à domicile, pour un investissement unique — pas un abonnement à vie.",
              },
              {
                icon: Shield,
                title: 'Sécurité & confiance',
                text: 'Matériaux hypoallergéniques testés, satisfaction garantie 30 jours.',
              },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="bg-creme rounded-2xl border border-creme-3 p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-or/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon size={26} className="text-or" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 text-brun">{value.title}</h3>
                  <p className="text-sm text-brun-clair leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 sm:py-28 bg-creme">
        <div className="container-luxe section-padding max-w-2xl">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-brun text-center">Nos engagements</h2>
          </Reveal>
          <div className="space-y-4">
            {[
              'Produits testés et contrôlés individuellement',
              'Matériaux hypoallergéniques, sans irritants',
              'Satisfaite ou remboursée pendant 30 jours — sans justification',
              'Service client basé en France, réponse sous 24h',
              'Livraison gratuite et retours sans frais',
              'Packaging recyclable et engagements environnementaux',
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 bg-white rounded-xl border border-creme-3 px-5 py-4">
                  <div className="w-6 h-6 rounded-full bg-or/10 border border-or/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={13} className="text-or" />
                  </div>
                  <p className="text-brun-clair text-sm leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-white border-t border-creme-3">
        <div className="container-luxe section-padding text-center max-w-xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4 text-brun">
              Prête à transformer votre peau ?
            </h2>
            <p className="text-brun-clair mb-8">
              Rejoignez plus de 5 000 clientes qui ont découvert le pouvoir de la lumière rouge.
            </p>
            <Link to="/produit/masque-led-red-light-therapy" className="btn-gold-lg">
              Découvrir le masque <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
