import { useState } from 'react';
import {
  Lock,
  Truck,
  Zap,
  Check,
  ChevronLeft,
  ShieldCheck,
  RefreshCw,
  CreditCard,
} from 'lucide-react';
import { useCart, getProductById } from '@/context/CartContext';
import { useRouter } from '@/context/RouterContext';

type ShippingMethod = 'standard' | 'express';

export function CheckoutPage() {
  const { items, subtotal, promoCode, promoDiscount, clearCart } = useCart();
  const { navigate } = useRouter();
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('standard');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    country: 'France',
  });

  const expressCost = 4.99;
  const shippingCost = shippingMethod === 'express' ? expressCost : 0;
  const finalTotal = subtotal - promoDiscount + shippingCost;

  if (items.length === 0) {
    return (
      <div className="bg-creme min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-brun mb-4">Votre panier est vide</h1>
          <button onClick={() => navigate('/')} className="btn-gold">Retour à la boutique</button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = 'NOVAE-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const orderData = {
      orderNumber,
      items: items.map((item) => {
        const product = getProductById(item.productId);
        return {
          name: product?.shortName || '',
          quantity: item.quantity,
          price: item.upsellPrice ?? product?.price ?? 0,
        };
      }),
      total: finalTotal.toFixed(2),
      customer: form,
      shippingMethod,
    };
    sessionStorage.setItem('novae-last-order', JSON.stringify(orderData));
    clearCart();
    navigate('/confirmation');
  };

  const shippingMethods = [
    { id: 'standard' as const, name: 'Livraison Standard', description: '6–12 jours ouvrés', price: 0, icon: Truck },
    { id: 'express' as const, name: 'Livraison Express', description: '2–3 jours ouvrés', price: expressCost, icon: Zap },
  ];

  const inputClass = 'w-full bg-white border border-creme-3 rounded-xl px-4 py-3 text-brun placeholder:text-brun-leger/50 focus:border-or focus:outline-none focus:ring-2 focus:ring-or/20 transition-all text-sm';
  const labelClass = 'block text-xs font-semibold text-brun-clair uppercase tracking-wide mb-1.5';

  return (
    <div className="bg-creme min-h-screen">

      {/* Header minimal */}
      <div className="bg-white border-b border-creme-3 py-4">
        <div className="container-luxe section-padding flex items-center justify-between">
          <button
            onClick={() => navigate('/panier')}
            className="flex items-center gap-1.5 text-sm text-brun-leger hover:text-brun transition-colors"
          >
            <ChevronLeft size={16} /> Retour au panier
          </button>
          <span className="font-display text-lg font-bold text-brun tracking-widest">NOVAE PARIS</span>
          <div className="flex items-center gap-1.5 text-xs text-brun-leger">
            <Lock size={13} className="text-or" />
            <span>Paiement sécurisé</span>
          </div>
        </div>
      </div>

      <div className="container-luxe section-padding py-10">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Formulaire (3/5) ── */}
          <div className="lg:col-span-3 space-y-6">

            {/* Étape 1 — Coordonnées */}
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6">
              <h2 className="font-display text-lg font-bold text-brun mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-or text-noir text-sm font-bold flex items-center justify-center shadow-sm">1</span>
                Vos coordonnées
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Prénom *</label>
                  <input required type="text" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className={inputClass} placeholder="Camille" />
                </div>
                <div>
                  <label className={labelClass}>Nom *</label>
                  <input required type="text" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className={inputClass} placeholder="Durand" />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="camille@email.com" />
                </div>
                <div>
                  <label className={labelClass}>Téléphone *</label>
                  <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="06 12 34 56 78" />
                </div>
              </div>
            </div>

            {/* Étape 2 — Adresse */}
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6">
              <h2 className="font-display text-lg font-bold text-brun mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-or text-noir text-sm font-bold flex items-center justify-center shadow-sm">2</span>
                Adresse de livraison
              </h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Adresse *</label>
                  <input required type="text" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className={inputClass} placeholder="12 rue de la Paix" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Code postal *</label>
                    <input required type="text" value={form.postalCode} onChange={e => setForm({ ...form, postalCode: e.target.value })} className={inputClass} placeholder="75001" />
                  </div>
                  <div>
                    <label className={labelClass}>Ville *</label>
                    <input required type="text" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className={inputClass} placeholder="Paris" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Pays</label>
                    <input type="text" value={form.country} className={`${inputClass} opacity-60 cursor-not-allowed`} disabled />
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 3 — Livraison */}
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6">
              <h2 className="font-display text-lg font-bold text-brun mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-or text-noir text-sm font-bold flex items-center justify-center shadow-sm">3</span>
                Mode de livraison
              </h2>
              <div className="space-y-3">
                {shippingMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      shippingMethod === method.id
                        ? 'border-or bg-or/5'
                        : 'border-creme-3 hover:border-brun-leger/40 bg-creme'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                      shippingMethod === method.id ? 'border-or' : 'border-brun-leger/40'
                    }`}>
                      {shippingMethod === method.id && <div className="w-2.5 h-2.5 rounded-full bg-or" />}
                    </div>
                    <method.icon size={18} className="text-or shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-brun">{method.name}</p>
                      <p className="text-xs text-brun-clair">{method.description}</p>
                    </div>
                    <span className="font-bold text-brun text-sm">
                      {method.price === 0 ? <span className="text-green-700">Gratuit</span> : `${method.price.toFixed(2)}€`}
                    </span>
                    <input type="radio" name="shipping" value={method.id} checked={shippingMethod === method.id} onChange={() => setShippingMethod(method.id)} className="sr-only" />
                  </label>
                ))}
              </div>
            </div>

            {/* Étape 4 — Paiement */}
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6">
              <h2 className="font-display text-lg font-bold text-brun mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-or text-noir text-sm font-bold flex items-center justify-center shadow-sm">4</span>
                Paiement
              </h2>

              {/* Bandeaux moyens de paiement */}
              <div className="flex items-center gap-3 p-4 bg-creme rounded-xl border border-creme-3 mb-4">
                <CreditCard size={18} className="text-or shrink-0" />
                <span className="text-xs text-brun-clair flex-1">Vos données sont chiffrées SSL — jamais stockées</span>
                <div className="flex items-center gap-2">
                  {[
                    { name: 'Visa', slug: 'visa' },
                    { name: 'Mastercard', slug: 'mastercard' },
                    { name: 'PayPal', slug: 'paypal' },
                    { name: 'Apple Pay', slug: 'applepay' },
                  ].map((p) => (
                    <div key={p.slug} className="h-7 w-11 rounded-lg bg-white border border-creme-3 shadow-sm flex items-center justify-center" title={p.name}>
                      <img src={`https://cdn.simpleicons.org/${p.slug}/888888`} alt={p.name} className="h-4 w-auto" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-brun-leger flex items-center gap-2">
                <RefreshCw size={12} className="text-or shrink-0" />
                Satisfaite ou remboursée 30 jours — sans justification ni démarche compliquée.
              </p>
            </div>
          </div>

          {/* ── Récapitulatif (2/5) ── */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6 sticky top-24">
              <h2 className="font-display text-lg font-bold text-brun mb-5">Récapitulatif</h2>

              {/* Articles */}
              <div className="space-y-4 mb-5 pb-5 border-b border-creme-3">
                {items.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;
                  const price = item.upsellPrice ?? product.price;
                  return (
                    <div key={item.productId} className="flex gap-3 items-center">
                      <div className="relative shrink-0">
                        <img src={product.images[0]} alt={product.shortName} className="w-14 h-14 rounded-xl object-cover border border-creme-3" />
                        <span className="absolute -top-2 -right-2 bg-or text-noir text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-brun line-clamp-1">{product.shortName}</p>
                        <p className="text-xs text-brun-clair">{price.toFixed(2)}€ / unité</p>
                      </div>
                      <span className="text-sm font-bold text-brun">{(price * item.quantity).toFixed(2)}€</span>
                    </div>
                  );
                })}
              </div>

              {/* Totaux */}
              <div className="space-y-2.5 mb-5 pb-5 border-b border-creme-3">
                <div className="flex justify-between text-sm">
                  <span className="text-brun-clair">Sous-total</span>
                  <span className="text-brun font-medium">{subtotal.toFixed(2)}€</span>
                </div>
                {promoDiscount > 0 && (
                  <div className="flex justify-between text-sm text-green-700 font-medium">
                    <span>Réduction ({promoCode})</span>
                    <span>-{promoDiscount.toFixed(2)}€</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-brun-clair">Livraison</span>
                  <span className={shippingCost === 0 ? 'text-green-700 font-medium' : 'text-brun font-medium'}>
                    {shippingCost === 0 ? 'Gratuite' : `${shippingCost.toFixed(2)}€`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-6">
                <span className="font-display text-base font-bold text-brun">Total TTC</span>
                <span className="font-display text-2xl font-bold text-brun">{finalTotal.toFixed(2)}€</span>
              </div>

              {/* CTA */}
              <button type="submit" className="btn-gold w-full justify-center py-4 mb-4">
                <Lock size={16} /> Payer {finalTotal.toFixed(2)}€ en sécurité
              </button>

              {/* Réassurance */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-brun-leger">
                  <ShieldCheck size={13} className="text-or shrink-0" />
                  <span>Transaction chiffrée SSL 256 bits</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brun-leger">
                  <Check size={13} className="text-or shrink-0" />
                  <span>Satisfaite ou remboursée 30 jours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-brun-leger">
                  <Truck size={13} className="text-or shrink-0" />
                  <span>Livraison standard gratuite incluse</span>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
