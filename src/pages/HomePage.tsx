import {
  Truck,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Star,
  RefreshCw,
  Layers,
  Sun,
  Wind,
  Check,
  Sparkles,
} from 'lucide-react';
import { useRouter } from '@/context/RouterContext';
import { useCart } from '@/context/CartContext';
import { Reveal } from '@/components/Reveal';
import { Stars } from '@/components/Stars';
import { products, reviews } from '@/data/products';

const trustItems = [
  { icon: Truck, text: 'Livraison gratuite dès 50€' },
  { icon: ShieldCheck, text: 'Testé dermatologiquement — sans irritants' },
  { icon: RefreshCw, text: 'Satisfaite ou remboursée 30 j.' },
  { icon: Star, text: '4.8/5 · 5 234 avis vérifiés' },
];

const problemItems = [
  { icon: Layers, title: 'Rides & ridules', text: 'Le collagène diminue de 1% par an après 25 ans. Les crèmes n\'y ont pas accès.' },
  { icon: Sun, title: 'Teint sans éclat', text: 'Peau fatiguée, terne, stressée — aucune crème de surface ne réactive les cellules en profondeur.' },
  { icon: Wind, title: 'Pores dilatés', text: 'Texture irrégulière, manque de fermeté. Le collagène qui maintient la peau a disparu.' },
];

const steps = [
  {
    num: '01',
    title: '10 minutes, pas une de plus',
    text: 'Posez le masque, détendez-vous. Lisez, écoutez de la musique, profitez. La technologie fait le travail.',
  },
  {
    num: '02',
    title: '660nm : votre collagène se réveille',
    text: 'La lumière rouge pénètre à 4-5mm dans le derme et active les fibroblastes — les cellules qui fabriquent le collagène.',
  },
  {
    num: '03',
    title: 'Dès 14 jours, vos proches remarquent',
    text: 'Peau plus lisse, teint plus lumineux, ridules atténuées. Nos clientes voient souvent les résultats avant elles.',
  },
];

export function HomePage() {
  const { addItem, openCart } = useCart();
  const { navigate } = useRouter();

  const maskProduct = products[0];
  const serumProduct = products[1];
  const jadeProduct = products[3];
  const eyePatches = products[4];
  const bundle = products[5];

  const bestsellers = [
    {
      product: maskProduct,
      tagline: 'Collagène + fermeté en 10 min/jour',
      highlight: true,
    },
    // Produits cachés temporairement — à réactiver quand sourcing prêt
    // { product: serumProduct, tagline: 'Absorption 3× plus rapide après séance', highlight: false },
    // { product: jadeProduct, tagline: 'Drainage & dépuffing avant le masque', highlight: false },
    // { product: eyePatches, tagline: 'Zones yeux : peau 4× plus réactive', highlight: false },
  ];

  return (
    <div className="overflow-hidden">

      {/* A. HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-home.jpg"
            alt="Masque LED NOVAE en utilisation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir" />
          <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-transparent to-noir/80" />
        </div>

        <div className="relative z-10 container-luxe section-padding text-center max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-or/10 border border-or/30 backdrop-blur-sm mb-6">
              <Star size={14} className="text-or fill-or" />
              <span className="text-sm font-medium text-or">4.8/5 · 5 234 avis vérifiés</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance mb-6">
              La routine skincare qui <span className="text-gradient-gold">transforme</span> votre peau en 10 minutes
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg sm:text-xl text-gris-clair max-w-2xl mx-auto mb-10 leading-relaxed">
              La technologie Red Light Therapy des dermatologues. Masque, sérum, rouleau — tout ce qu'il faut pour une peau de 20 ans.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold-lg group"
              >
                Voir la gamme
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  document.getElementById('comment-ca-marche')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-ghost"
              >
                Comment ça marche
              </button>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <ChevronDown size={28} className="text-or/60" />
        </div>
      </section>

      {/* B. TRUST BAR */}
      <section className="bg-noir-2 border-y border-white/5 py-6">
        <div className="container-luxe section-padding">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-center justify-center gap-3 text-center sm:text-left">
                  <item.icon size={24} className="text-or shrink-0" />
                  <span className="text-sm font-medium text-gris-clair">{item.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* C. 4 BESTSELLERS */}
      <section id="bestsellers" className="py-20 sm:py-28 bg-creme scroll-mt-20">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Notre gamme</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-balance text-brun">
                Choisissez votre rituel
              </h2>
              <p className="text-brun-clair leading-relaxed">
                Chaque produit est conçu pour un effet précis. Commencez avec un seul, ou adoptez la routine complète.
              </p>
              <div className="divider-gold mx-auto mt-6" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map(({ product, tagline, highlight }, i) => (
              <Reveal key={product.id} delay={i * 80}>
                <div
                  className={`group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                    highlight
                      ? 'bg-white border-2 border-or/40 shadow-lg'
                      : 'bg-white border border-creme-3/80 shadow-sm hover:border-or/30'
                  }`}
                  onClick={() => navigate(`/produit/${product.slug}`)}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-3 left-3 z-10 text-xs font-bold px-2.5 py-1 rounded-full ${
                      highlight ? 'bg-or text-noir' : 'bg-noir/70 text-blanc backdrop-blur-sm'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  {highlight && (
                    <div className="absolute top-3 right-3 z-10 bg-red-500 text-blanc text-xs font-bold px-2.5 py-1 rounded-full">
                      -34%
                    </div>
                  )}

                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-creme-2">
                    <img
                      src={product.images[0]}
                      alt={product.shortName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Infos */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs text-brun-leger mb-1">{tagline}</p>
                    <h3 className="font-display font-semibold text-brun text-base leading-snug mb-2">
                      {product.shortName}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Stars rating={product.rating} size={13} />
                      <span className="text-xs text-brun-leger">{product.rating} ({product.reviewCount.toLocaleString('fr-FR')})</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-auto mb-4">
                      <span className="text-xl font-display font-bold text-brun">{product.price}€</span>
                      {product.originalPrice && (
                        <span className="text-sm text-brun-leger line-through">{product.originalPrice}€</span>
                      )}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/produit/${product.slug}`); }}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                        highlight
                          ? 'bg-or text-noir hover:bg-or-light'
                          : 'bg-brun/5 text-brun border border-brun/15 hover:bg-or hover:text-noir hover:border-or'
                      }`}
                    >
                      Voir le produit <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* D. PACK ROUTINE COMPLÈTE — caché temporairement */}
      {false && <></> /* à réactiver quand sourcing prêt */}
      {false && ( // PACK CACHÉ
      <section className="py-20 sm:py-28 bg-noir relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.5) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,60,40,0.3) 0%, transparent 70%)' }} />
        </div>

        <div className="container-luxe section-padding relative z-10">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Image bundle */}
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 0 60px rgba(201,169,110,0.2)' }}>
                <img src="/images/pack-bundle.jpg" alt="Pack Rituel Complet NOVAE" className="w-full h-full object-cover" />
              </div>

              {/* Copy */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-or/10 border border-or/30">
                  <Sparkles size={14} className="text-or" />
                  <span className="text-sm font-semibold text-or">Choix N°1 · 68% de nos commandes</span>
                </div>

                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-blanc mb-3">
                    {bundle.name}
                  </h2>
                  <p className="text-gris-clair leading-relaxed">{bundle.description}</p>
                </div>

                <div className="space-y-3">
                  {[
                    'Masque LED 7 couleurs — Red Light Therapy professionnelle',
                    'Sérum Vitamine C — absorption 3× post-séance',
                    'Rouleau Jade — drainage et préparation de la peau',
                    'Patchs Collagène Yeux — zone la plus réactive',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={16} className="text-or shrink-0" />
                      <span className="text-sm text-gris-clair">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-3 py-4 border-y border-white/10">
                  <span className="text-4xl font-display font-bold text-or">{bundle.price}€</span>
                  {bundle.originalPrice && (
                    <>
                      <span className="text-xl text-gris-fonce line-through">{bundle.originalPrice}€</span>
                      <span className="text-sm text-green-400 font-semibold">
                        Économisez {bundle.originalPrice - bundle.price}€
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate(`/produit/${bundle.slug}`)}
                    className="btn-gold-lg"
                  >
                    Voir le pack complet <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => { addItem(bundle.id, 1); openCart(); }}
                    className="btn-outline"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      )} {/* FIN PACK CACHÉ */}

      {/* E. PROBLEM */}
      <section className="py-20 sm:py-28 bg-creme">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Le problème</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-balance text-brun">
                Vous dépensez des centaines d'euros en crèmes qui n'atteignent pas le derme.
              </h2>
              <div className="divider-gold mx-auto" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problemItems.map((item, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="glass-card-light p-8 text-center h-full hover:shadow-md transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-full bg-or/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-or/20 transition-colors">
                    <item.icon size={28} className="text-or" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-brun">{item.title}</h3>
                  <p className="text-brun-clair text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="text-center">
              <p className="font-display text-2xl sm:text-3xl text-brun max-w-2xl mx-auto">
                La solution : aller directement là où les crèmes n'arrivent pas.{' '}
                <span className="text-gradient-gold">La lumière.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* F. HOW IT WORKS */}
      <section id="comment-ca-marche" className="py-20 sm:py-28 bg-noir-2 scroll-mt-20">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-balance">
                10 minutes chez vous = 1 séance d'institut
              </h2>
              <p className="text-gris-clair leading-relaxed">
                La lumière rouge à 660nm pénètre à 4–5mm dans le derme et active les fibroblastes —
                les cellules qui fabriquent votre collagène. Cliniquement prouvé, 0 effet indésirable.
              </p>
              <div className="divider-gold mx-auto mt-6" />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 150}>
                <div className="relative">
                  <div className="text-6xl font-display font-bold text-or/10 mb-4">{step.num}</div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gris-clair text-sm leading-relaxed">{step.text}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-or/30">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
              <p className="text-center text-sm text-gris-clair mb-8">Les 5 longueurs d'onde du masque NOVAE et leur action sur la peau</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  { color: '#FF4444', label: '660nm', name: 'Rouge', benefit: 'Collagène & fermeté' },
                  { color: '#8B0000', label: '850nm', name: 'Infrarouge', benefit: 'Récupération profonde' },
                  { color: '#4444FF', label: '415nm', name: 'Bleu', benefit: 'Anti-acné & pores' },
                  { color: '#44FF44', label: '520nm', name: 'Vert', benefit: 'Teint & taches' },
                  { color: '#FFDD44', label: '590nm', name: 'Jaune', benefit: 'Éclat & rougeurs' },
                ].map((wl, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div
                      className="w-12 h-12 rounded-full animate-pulse-glow"
                      style={{ backgroundColor: wl.color, animationDelay: `${i * 0.3}s` }}
                    />
                    <span className="text-xs font-semibold text-blanc">{wl.name}</span>
                    <span className="text-xs text-gris-fonce">{wl.label}</span>
                    <span className="text-xs text-gris-clair leading-tight">{wl.benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/produit/masque-led-red-light-therapy')}
                className="btn-gold"
              >
                Découvrir le masque <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>


      {/* H. REVIEWS */}
      <section className="py-20 sm:py-28 bg-creme">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Avis clients</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4 text-balance text-brun">
                5 234 femmes. Une seule conclusion.
              </h2>
              <div className="divider-gold mx-auto mt-6" />
            </div>
          </Reveal>

          {/* Rating summary */}
          <Reveal>
            <div className="glass-card-light p-6 sm:p-8 max-w-2xl mx-auto mb-12 grid sm:grid-cols-2 gap-6 items-center shadow-sm">
              <div className="text-center">
                <p className="font-display text-7xl font-bold text-or">4.8</p>
                <Stars rating={4.8} size={22} className="justify-center mt-2" />
                <p className="text-sm text-brun-clair mt-2">sur 5 234 avis vérifiés</p>
              </div>
              <div className="space-y-2">
                {[
                  { stars: 5, pct: 76 },
                  { stars: 4, pct: 14 },
                  { stars: 3, pct: 6 },
                  { stars: 2, pct: 2 },
                  { stars: 1, pct: 2 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    <span className="text-xs text-brun-clair w-4 text-right shrink-0">{row.stars}★</span>
                    <div className="flex-1 h-2 bg-creme-3 rounded-full overflow-hidden">
                      <div className="h-full bg-or rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="text-xs text-brun-leger w-8 shrink-0">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3 reviews seulement — le reste sur la page produit */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {reviews.slice(0, 3).map((review, i) => (
              <Reveal key={review.id} delay={i * 100}>
                <div className="glass-card-light p-6 h-full flex flex-col shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-creme-3" />
                    <div>
                      <p className="font-medium text-sm text-brun">{review.name}</p>
                      <p className="text-xs text-brun-leger">{review.city} · {review.date}</p>
                    </div>
                  </div>
                  <Stars rating={review.rating} className="mb-3" />
                  <h4 className="font-display font-semibold mb-2 text-brun">{review.title}</h4>
                  <p className="text-sm text-brun-clair leading-relaxed flex-1">{review.text}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1.5 mt-4 text-xs text-green-700">
                      <Check size={14} /> Achat vérifié
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center">
              <button
                onClick={() => navigate('/produit/masque-led-red-light-therapy#avis')}
                className="btn-gold"
              >
                Lire les 5 234 avis <ArrowRight size={18} />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
