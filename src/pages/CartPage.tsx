import { useState } from 'react';
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Lock,
  Truck,
  Tag,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
} from 'lucide-react';
import { useCart, getProductById } from '@/context/CartContext';
import { useRouter } from '@/context/RouterContext';
import { Reveal } from '@/components/Reveal';
import { products } from '@/data/products';

export function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    addItem,
    subtotal,
    total,
    shipping,
    remainingForFreeShipping,
    hasFreeShipping,
    promoCode,
    promoDiscount,
    applyPromo,
    removePromo,
    lastAddedItem,
  } = useCart();
  const { navigate } = useRouter();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const serumProduct = products.find((p) => p.id === 'serum-vitamine-c');
  const hasSerum = items.some((i) => i.productId === 'serum-vitamine-c');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyPromo(promoInput)) {
      setPromoError('');
      setPromoInput('');
    } else {
      setPromoError('Code promo invalide');
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-luxe section-padding py-32 text-center">
        <ShoppingBag size={64} className="text-gris-fonce mx-auto mb-6" />
        <h1 className="font-display text-3xl font-bold mb-4">Votre panier est vide</h1>
        <p className="text-gris-clair mb-8">Découvrez nos produits et commencez votre rituel beauté.</p>
        <button onClick={() => navigate('/')} className="btn-gold-lg">
          Découvrir la boutique
        </button>
      </div>
    );
  }

  return (
    <div className="container-luxe section-padding py-12">
      <h1 className="font-display text-3xl sm:text-4xl font-bold mb-8">Mon panier</h1>

      {/* Free shipping progress */}
      <div className="glass-card p-4 mb-8">
        {hasFreeShipping ? (
          <div className="flex items-center gap-3 text-green-400">
            <Truck size={20} />
            <span className="text-sm font-medium">Livraison gratuite débloquée !</span>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Truck size={20} className="text-or" />
              <span className="text-sm text-gris-clair">
                Plus que <strong className="text-or">{remainingForFreeShipping.toFixed(2)}€</strong> pour la livraison gratuite
              </span>
            </div>
            <div className="h-2 bg-noir-3 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-or-dark to-or rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / 50) * 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const product = getProductById(item.productId);
            if (!product) return null;
            const price = item.upsellPrice ?? product.price;
            return (
              <Reveal key={item.productId}>
                <div className="glass-card p-4 sm:p-6 flex gap-4 sm:gap-6">
                  <img
                    src={product.images[0]}
                    alt={product.shortName}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border border-white/10 cursor-pointer"
                    onClick={() => navigate(`/produit/${product.slug}`)}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold mb-1">{product.shortName}</h3>
                    {item.upsellPrice && (
                      <span className="inline-block text-xs bg-or/10 text-or px-2 py-0.5 rounded-full mb-2">Offre spéciale</span>
                    )}
                    <p className="text-or font-bold text-lg mb-3">{price.toFixed(2)}€</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-white/10 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gris-clair hover:text-or transition-colors"
                          aria-label="Diminuer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gris-clair hover:text-or transition-colors"
                          aria-label="Augmenter"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="text-gris-fonce hover:text-red-400 transition-colors"
                        aria-label="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-sm text-gris-fonce mb-1">Total</p>
                    <p className="font-display text-xl font-bold">{(price * item.quantity).toFixed(2)}€</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 sticky top-24">
            <h2 className="font-display text-xl font-semibold mb-6">Récapitulatif</h2>

            {/* Promo code */}
            <div className="mb-6">
              {promoCode ? (
                <div className="flex items-center justify-between glass-card p-3 border-green-500/20">
                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-green-400" />
                    <span className="text-sm font-medium text-green-400">{promoCode}</span>
                    <span className="text-xs text-gris-clair">-{(promoDiscount / subtotal * 100).toFixed(0)}%</span>
                  </div>
                  <button onClick={removePromo} className="text-gris-fonce hover:text-red-400 transition-colors">
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Code promo"
                    className="input-luxe flex-1 text-sm py-2.5"
                  />
                  <button type="submit" className="btn-outline px-4 py-2.5 text-sm">Appliquer</button>
                </form>
              )}
              {promoError && <p className="text-xs text-red-400 mt-2">{promoError}</p>}
              {!promoCode && (
                <p className="text-xs text-gris-fonce mt-2">Essayez : NOVAE10, NOVAE15 ou BIENVENUE</p>
              )}
            </div>

            <div className="space-y-3 mb-6 pb-6 border-b border-white/5">
              <div className="flex justify-between text-sm">
                <span className="text-gris-clair">Sous-total</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-sm text-green-400">
                  <span>Réduction</span>
                  <span>-{promoDiscount.toFixed(2)}€</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gris-clair">Livraison</span>
                <span>{shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)}€`}</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline mb-6">
              <span className="font-display text-lg font-semibold">Total</span>
              <span className="font-display text-2xl font-bold text-or">{total.toFixed(2)}€</span>
            </div>

            <button onClick={() => navigate('/checkout')} className="btn-gold w-full mb-4">
              <Lock size={18} /> Commander en sécurité
            </button>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-xs text-gris-clair">
                <ShieldCheck size={14} className="text-or" /> Paiement sécurisé SSL 256 bits
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-gris-clair">
                <ArrowRight size={14} className="text-or" /> Satisfaite ou remboursée 30 jours
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upsell inline — Sérum */}
      {serumProduct && !hasSerum && (
        <Reveal>
          <div className="mt-8 glass-card p-5 sm:p-6 flex items-center gap-4 border-or/20">
            <img src={serumProduct.images[0]} alt={serumProduct.shortName} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-or font-semibold uppercase tracking-wider mb-0.5">Ajoutez à votre commande</p>
              <h4 className="font-display font-semibold text-sm sm:text-base">{serumProduct.shortName}</h4>
              <p className="text-xs text-gris-clair mt-0.5 mb-2">Absorb. 3× plus rapide après séance</p>
              <div className="flex items-baseline gap-2">
                <span className="text-or font-bold">{(serumProduct.price * 0.7).toFixed(2)}€</span>
                <span className="text-xs text-gris-fonce line-through">{serumProduct.price}€</span>
                <span className="text-xs text-green-400 font-medium">-30%</span>
              </div>
            </div>
            <button
              onClick={() => addItem(serumProduct.id, 1, serumProduct.price * 0.7)}
              className="shrink-0 flex items-center gap-1.5 bg-or text-noir text-xs font-bold px-4 py-2.5 rounded-full hover:bg-or-light transition-colors"
            >
              <Plus size={14} /> Ajouter
            </button>
          </div>
        </Reveal>
      )}

    </div>
  );
}
