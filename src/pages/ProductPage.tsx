import { useState } from 'react';
import {
  Plus,
  Minus,
  Check,
  ChevronRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Lock,
  Eye,
  Zap,
  ArrowRight,
  Star,
  Users,
  ChevronDown,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from '@/context/RouterContext';
import { Reveal } from '@/components/Reveal';
import { Stars } from '@/components/Stars';
import { getProduct, products, reviews } from '@/data/products';

export function ProductPage({ slug }: { slug: string }) {
  const product = getProduct(slug);
  const { addItem, openCart } = useCart();
  const { navigate } = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addSerum, setAddSerum] = useState(false);
  const [openSpecs, setOpenSpecs] = useState(false);
  const [viewers] = useState(() => Math.floor(Math.random() * 40) + 18);

  if (!product) {
    return (
      <div className="container-luxe section-padding py-32 text-center">
        <h1 className="font-display text-3xl mb-4 text-brun">Produit introuvable</h1>
        <button onClick={() => navigate('/')} className="btn-gold">Retour à l'accueil</button>
      </div>
    );
  }

  const serumProduct = products.find((p) => p.id === 'serum-vitamine-c');
  const crossSell = products.filter((p) => p.id !== product.id && p.category !== 'bundle').slice(0, 4);

  const handleAddToCart = () => {
    addItem(product.id, quantity);
    if (addSerum && serumProduct) addItem(serumProduct.id, 1);
    openCart();
  };

  const handleBuyNow = () => {
    addItem(product.id, quantity);
    if (addSerum && serumProduct) addItem(serumProduct.id, 1);
    navigate('/checkout');
  };

  return (
    <div className="bg-creme min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-creme border-b border-creme-3">
        <div className="container-luxe section-padding py-4">
          <div className="flex items-center gap-2 text-sm text-brun-leger">
            <button onClick={() => navigate('/')} className="hover:text-or transition-colors">Accueil</button>
            <ChevronRight size={14} />
            <span className="text-brun-clair">{product.shortName}</span>
          </div>
        </div>
      </div>

      {/* ─── HERO PRODUIT ─── */}
      <section className="bg-white pt-10 pb-16">
        <div className="container-luxe section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Galerie */}
            <div>
              {/* Image principale */}
              <div className="relative rounded-3xl overflow-hidden bg-creme-2 mb-3 aspect-square border border-creme-3/60 shadow-sm">
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 z-10 bg-or text-noir text-sm font-bold px-3 py-1.5 rounded-full shadow-sm">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </div>
                )}
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              {/* Miniatures — seulement si plusieurs images */}
              {product.images.length > 1 && <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                      activeImage === i
                        ? 'border-or shadow-sm'
                        : 'border-creme-3 hover:border-brun-leger/40'
                    }`}
                  >
                    <img src={img} alt={`${product.shortName} ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>}
              {/* Viewers */}
              <div className="flex items-center gap-2 mt-4 text-xs text-brun-leger">
                <Eye size={13} className="text-red-400" />
                <span className="text-red-500 font-medium">{viewers} personnes regardent en ce moment</span>
              </div>
            </div>

            {/* Informations produit */}
            <div>
              {product.badge && (
                <span className="inline-block bg-or/15 text-or text-xs font-semibold px-3 py-1.5 rounded-full border border-or/30 mb-4">
                  {product.badge} · N°1 en France
                </span>
              )}

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-brun mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Étoiles */}
              <button
                onClick={() => document.getElementById('avis')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 mb-5 group"
              >
                <Stars rating={product.rating} size={18} />
                <span className="text-sm text-brun-clair group-hover:text-or transition-colors underline underline-offset-2">
                  {product.rating}/5 · {product.reviewCount.toLocaleString('fr-FR')} avis vérifiés
                </span>
              </button>

              <p className="text-brun-clair leading-relaxed mb-6">{product.description}</p>

              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-6 flex-wrap">
                <span className="text-5xl font-display font-bold text-brun">{product.price}€</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-brun-leger line-through">{product.originalPrice}€</span>
                    <span className="text-sm text-green-700 font-semibold bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                      Économisez {(product.originalPrice - product.price).toFixed(0)}€
                    </span>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6 bg-creme rounded-2xl p-5 border border-creme-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-or/15 border border-or/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-or" />
                    </div>
                    <span className="text-sm text-brun-clair leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Upsell sérum — caché temporairement */}

              {/* Quantité */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-sm text-brun-clair font-medium">Quantité :</span>
                <div className="flex items-center border border-creme-3 rounded-full bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-brun-leger hover:text-brun transition-colors"
                    aria-label="Diminuer"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center tabular-nums text-brun font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-brun-leger hover:text-brun transition-colors"
                    aria-label="Augmenter"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Badge stock */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200">
                  <Zap size={13} className="text-red-500" />
                  <span className="text-xs text-red-600 font-medium">Rupture de stock imminente</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button onClick={handleBuyNow} className="btn-gold-lg flex-1 justify-center">
                  Je commence mon rituel <ArrowRight size={18} />
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-brun/20 text-brun font-semibold px-6 py-4 rounded-full transition-all hover:border-brun/40 hover:bg-brun/5 active:scale-95"
                >
                  Ajouter au panier
                </button>
              </div>

              {/* Preuve sociale — juste sous les boutons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex items-center gap-1.5 text-xs text-brun-clair">
                  <Users size={13} className="text-or" />
                  <span>142 commandes dans les dernières 24h</span>
                </div>
                <span className="text-creme-3">·</span>
                <div className="flex items-center gap-1.5 text-xs text-brun-clair">
                  <ShieldCheck size={13} className="text-or" />
                  <span>Satisfaite ou remboursée 30 jours</span>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-creme-3">
                {[
                  { icon: Truck, label: 'Livraison offerte dès 50€' },
                  { icon: ShieldCheck, label: 'Testé dermatologiquement' },
                  { icon: RefreshCw, label: 'Remboursée 30 jours' },
                  { icon: Lock, label: 'Paiement sécurisé' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                    <item.icon size={20} className="text-or" />
                    <span className="text-xs text-brun-clair leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPTION + UTILISATION ─── */}
      <section className="bg-creme py-16 border-y border-creme-3">
        <div className="container-luxe section-padding">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Description */}
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-bold text-brun mb-6">Ce que fait ce produit</h2>
                <p className="text-brun-clair leading-relaxed mb-6">{product.longDescription}</p>


                {product.specs && (
                  <div className="mt-8">
                    <button
                      onClick={() => setOpenSpecs(!openSpecs)}
                      className="flex items-center justify-between w-full text-left group"
                    >
                      <span className="text-sm font-medium text-brun-leger group-hover:text-brun transition-colors">
                        Caractéristiques techniques
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-brun-leger transition-transform duration-300 ${openSpecs ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openSpecs ? 'max-h-96 mt-3' : 'max-h-0'}`}>
                      <div className="bg-white border border-creme-3 rounded-2xl overflow-hidden">
                        <table className="w-full">
                          <tbody>
                            {product.specs.map((spec, i) => (
                              <tr key={i} className="border-b border-creme-3 last:border-0">
                                <td className="py-3 px-5 text-xs text-brun-clair font-medium w-2/5">{spec.label}</td>
                                <td className="py-3 px-5 text-xs text-brun">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Comment utiliser */}
            <Reveal delay={150}>
              <div>
                <h2 className="font-display text-2xl font-bold text-brun mb-6">Comment l'utiliser</h2>
                <ol className="space-y-4 mb-8">
                  {[
                    'Nettoyez votre visage et séchez-le soigneusement.',
                    'Posez le masque, ajustez la sangle pour un bon maintien.',
                    'Sélectionnez la lumière souhaitée et allumez le masque.',
                    'Détendez-vous 10 à 20 minutes, yeux fermés.',
                    'Retirez le masque et appliquez votre sérum.',
                    'Répétez 3 à 5 fois par semaine pour des résultats optimaux.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-or text-noir flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">
                        {i + 1}
                      </span>
                      <p className="text-brun-clair text-sm leading-relaxed pt-1.5">{step}</p>
                    </li>
                  ))}
                </ol>

                {/* Conseil expert */}
                <div className="bg-white border-l-4 border-or rounded-r-2xl p-5">
                  <p className="text-xs font-bold text-or uppercase tracking-wider mb-2">Conseil NOVAE</p>
                  <p className="text-sm text-brun-clair leading-relaxed">
                    Utilisez le masque <strong className="text-brun">10 minutes par jour</strong>, de préférence le soir sur peau propre et sèche, pour des résultats optimaux dès 14 jours.
                  </p>
                </div>

                {/* Couleurs — juste sous le conseil, dans le contexte "utilisation" */}
                {product.colors && (
                  <div className="mt-8">
                    <h3 className="font-display text-lg font-bold text-brun mb-5">
                      Quelle lumière pour quel objectif ?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {product.colors.map((color, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white rounded-2xl border border-creme-3 px-3 py-3">
                          <div
                            className="w-9 h-9 rounded-full shrink-0"
                            style={{
                              backgroundColor: color.hex,
                              boxShadow: `0 3px 10px ${color.hex}55`,
                            }}
                          />
                          <div className="min-w-0">
                            <p className="font-display font-bold text-brun text-xs leading-tight">{color.name} <span className="font-sans font-normal text-brun-leger">({color.wavelength})</span></p>
                            <p className="text-xs text-brun-clair mt-0.5 leading-tight">{color.benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── AVANT / APRÈS ─── */}
      <section className="bg-white py-16">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brun mb-2">
                Résultats réels de nos clientes
              </h2>
              <p className="text-xs text-brun-leger">Photos non retouchées · Utilisatrices réelles NOVAE</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { weeks: '2 semaines', result: 'Pores resserrés, teint unifié' },
              { weeks: '4 semaines', result: 'Ridules atténuées, peau plus ferme' },
              { weeks: '8 semaines', result: 'Éclat visible, texture lissée' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="bg-creme-2 rounded-3xl overflow-hidden border border-creme-3 shadow-sm">
                  <div className="grid grid-cols-2 divide-x divide-creme-3">
                    <div className="relative aspect-square bg-creme-3">
                      <span className="absolute top-2 left-2 text-xs font-semibold bg-white/90 text-brun px-2 py-1 rounded backdrop-blur-sm">Avant</span>
                      {/* Placeholder visuel */}
                      <div className="w-full h-full flex items-center justify-center text-brun-leger text-xs text-center px-2">Photo avant</div>
                    </div>
                    <div className="relative aspect-square bg-creme">
                      <span className="absolute top-2 right-2 text-xs font-semibold bg-or text-noir px-2 py-1 rounded">Après</span>
                      <div className="w-full h-full flex items-center justify-center text-brun-leger text-xs text-center px-2">Photo après</div>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-display font-semibold text-brun text-sm">{item.weeks}</p>
                    <p className="text-xs text-brun-clair mt-0.5">{item.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AVIS CLIENTS ─── */}
      <section id="avis" className="bg-creme-2 py-16 scroll-mt-24 border-y border-creme-3">
        <div className="container-luxe section-padding">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brun mb-3">
                Ce qu'elles en disent
              </h2>
              <div className="flex items-center justify-center gap-3">
                <Stars rating={product.rating} size={20} />
                <span className="text-xl font-display font-bold text-brun">{product.rating}/5</span>
                <span className="text-brun-clair text-sm">· {product.reviewCount.toLocaleString('fr-FR')} avis vérifiés</span>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <Reveal key={review.id} delay={(i % 3) * 80}>
                <div className="bg-white border border-creme-3 rounded-3xl p-6 shadow-sm h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={review.avatar} alt={review.name} className="w-11 h-11 rounded-full object-cover border border-creme-3" />
                    <div>
                      <p className="font-semibold text-sm text-brun">{review.name}</p>
                      <p className="text-xs text-brun-leger">{review.city} · {review.date}</p>
                    </div>
                  </div>
                  <Stars rating={review.rating} className="mb-3" />
                  <h4 className="font-display font-semibold text-brun mb-2">{review.title}</h4>
                  <p className="text-sm text-brun-clair leading-relaxed flex-1">{review.text}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1.5 mt-4 text-xs text-green-700 font-medium">
                      <Check size={13} /> Achat vérifié
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ─── CROSS-SELL — caché temporairement, à réactiver quand sourcing prêt ─── */}

      {/* ─── PRESSE ─── */}
      <section className="bg-creme-2 py-10 border-y border-creme-3">
        <div className="container-luxe section-padding">
          <p className="text-center text-xs text-brun-leger uppercase tracking-widest mb-6">Vu dans la presse</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {['VOGUE', 'Elle', 'Marie Claire', 'Grazia', 'Beauté'].map((mag) => (
              <span key={mag} className="font-display text-xl sm:text-2xl font-bold text-brun-leger/60">{mag}</span>
            ))}
          </div>
        </div>
      </section>


      {/* ─── STICKY CTA MOBILE ─── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-t border-creme-3 px-4 pt-3 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-1">
            {product.originalPrice && (
              <p className="text-xs text-brun-leger line-through">{product.originalPrice}€</p>
            )}
            <p className="text-xl font-display font-bold text-brun">{product.price}€</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Stars rating={product.rating} size={14} />
            <span className="text-xs text-brun-clair">{product.rating}/5</span>
          </div>
        </div>
        <button onClick={handleBuyNow} className="btn-gold w-full py-3.5">
          Je commence mon rituel <ArrowRight size={16} />
        </button>
        <p className="text-center text-xs text-brun-leger mt-1.5">Satisfaite ou remboursée 30 jours</p>
      </div>

    </div>
  );
}
