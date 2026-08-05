import { useEffect, useState } from 'react';
import { Check, Package, Instagram, ArrowRight, Mail, Sparkles, Clock, Calendar, Plus } from 'lucide-react';
import { useRouter } from '@/context/RouterContext';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

type OrderData = {
  orderNumber: string;
  items: { name: string; quantity: number; price: number }[];
  total: string;
  customer: { firstName: string; lastName: string; email: string; city: string };
  shippingMethod: string;
};

export function ConfirmationPage() {
  const { navigate } = useRouter();
  const { addItem } = useCart();
  const [order, setOrder] = useState<OrderData | null>(null);
  const neckProduct = products.find((p) => p.id === 'masque-cou-decollete');

  useEffect(() => {
    const stored = sessionStorage.getItem('novae-last-order');
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return (
      <div className="container-luxe section-padding py-32 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Aucune commande récente</h1>
        <button onClick={() => navigate('/')} className="btn-gold">Retour à la boutique</button>
      </div>
    );
  }

  return (
    <div className="container-luxe section-padding py-16 max-w-2xl">
      {/* Thank you */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 rounded-full bg-or/10 border border-or/30 flex items-center justify-center mx-auto mb-6 animate-scale-in">
          <Check size={40} className="text-or" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Merci {order.customer.firstName} !
        </h1>
        <p className="text-gris-clair text-lg">
          Votre commande est confirmée. Un email de confirmation a été envoyé à{' '}
          <strong className="text-or">{order.customer.email}</strong>
        </p>
      </div>

      {/* Order recap */}
      <div className="glass-card p-6 sm:p-8 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Package size={20} className="text-or" />
          <h2 className="font-display text-xl font-semibold">Commande {order.orderNumber}</h2>
        </div>
        <div className="space-y-3 mb-6 pb-6 border-b border-white/5">
          {order.items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-gris-clair">
                {item.quantity}× {item.name}
              </span>
              <span className="font-medium">{(item.price * item.quantity).toFixed(2)}€</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-gris-clair">Mode de livraison</span>
          <span className="text-sm">{order.shippingMethod === 'express' ? 'Express (2–3 jours)' : 'Standard (6–12 jours)'}</span>
        </div>
        <div className="flex justify-between items-baseline pt-4 border-t border-white/5">
          <span className="font-display text-lg font-semibold">Total payé</span>
          <span className="font-display text-2xl font-bold text-or">{order.total}€</span>
        </div>
      </div>


      {/* Upsell inline — Masque Cou */}
      {neckProduct && (
        <div className="glass-card p-5 sm:p-6 mb-8 flex items-center gap-4 border-or/20">
          <img src={neckProduct.images[0]} alt={neckProduct.shortName} className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-or font-semibold uppercase tracking-wider mb-0.5">Offre exclusive — 50% de réduction</p>
            <h4 className="font-display font-semibold text-sm sm:text-base">{neckProduct.shortName}</h4>
            <p className="text-xs text-gris-clair mt-0.5 mb-2">Le cou trahit votre âge — traitez-le aussi.</p>
            <div className="flex items-baseline gap-2">
              <span className="text-or font-bold">{(neckProduct.price * 0.5).toFixed(2)}€</span>
              <span className="text-xs text-gris-fonce line-through">{neckProduct.price}€</span>
              <span className="text-xs text-green-400 font-medium">-50%</span>
            </div>
          </div>
          <button
            onClick={() => { addItem(neckProduct.id, 1, neckProduct.price * 0.5); navigate('/panier'); }}
            className="shrink-0 flex items-center gap-1.5 bg-or text-noir text-xs font-bold px-4 py-2.5 rounded-full hover:bg-or-light transition-colors"
          >
            <Plus size={14} /> Ajouter
          </button>
        </div>
      )}

      {/* Onboarding — first ritual tips */}
      <div className="glass-card p-6 sm:p-8 mb-8 border-or/10">
        <h3 className="font-display text-lg font-semibold mb-1">Préparez votre premier rituel</h3>
        <p className="text-sm text-gris-clair mb-6">Pour des résultats dès la 2e semaine, commencez comme nos meilleures clientes.</p>
        <div className="space-y-4">
          {[
            {
              icon: Clock,
              title: 'Semaine 1 — Commencez doucement',
              text: '10 minutes, 3 fois par semaine. Lumière rouge (660nm) ou programme automatique. Peau propre, sans maquillage.',
            },
            {
              icon: Sparkles,
              title: 'Semaine 2 — Boostez avec le sérum',
              text: 'Juste après la séance, votre peau absorbe les actifs 3x mieux. C\'est le moment idéal pour votre sérum Vitamine C.',
            },
            {
              icon: Calendar,
              title: 'Semaine 3 et au-delà — La constance fait tout',
              text: 'Passez à 5 séances par semaine. La production de collagène est cumulative — chaque séance compte.',
            },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-or/10 border border-or/20 flex items-center justify-center shrink-0">
                <step.icon size={18} className="text-or" />
              </div>
              <div>
                <p className="font-medium text-sm">{step.title}</p>
                <p className="text-sm text-gris-clair mt-0.5">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gris-fonce mt-6 italic">
          La plupart de nos clientes constatent un premier changement entre le 10e et le 14e jour. Soyez patiente — votre collagène se reconstruit.
        </p>
      </div>

      {/* Follow us */}
      <div className="glass-card p-6 sm:p-8 mb-8 text-center">
        <h3 className="font-display text-lg font-semibold mb-2">Rejoignez la communauté NOVAE</h3>
        <p className="text-sm text-gris-clair mb-4">
          +12 000 clientes partagent leurs résultats chaque semaine. Montrez le vôtre, vous pourriez être repostée.
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-outline text-sm px-5 py-2.5"
        >
          <Instagram size={18} /> Suivre @novae.skincare
        </a>
      </div>

      {/* What's next */}
      <div className="space-y-4 mb-8">
        <h3 className="font-display text-lg font-semibold mb-4">Et maintenant ?</h3>
        {[
          { icon: Mail, title: 'Email de confirmation', text: 'Votre numéro de commande et votre reçu arrivent dans quelques minutes.' },
          { icon: Package, title: 'Expédition sous 24h', text: 'Nous préparons votre colis dès aujourd\'hui. Vous recevrez un numéro de suivi par email.' },
          { icon: Check, title: 'Livraison estimée', text: order.shippingMethod === 'express' ? '2 à 3 jours ouvrés — vous serez livrée rapidement.' : '6 à 12 jours ouvrés — comptez environ 1 à 2 semaines.' },
        ].map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-or/10 border border-or/30 flex items-center justify-center shrink-0">
              <step.icon size={18} className="text-or" />
            </div>
            <div>
              <p className="font-medium text-sm">{step.title}</p>
              <p className="text-sm text-gris-clair">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={() => navigate('/')} className="btn-outline">
          Retour à la boutique <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
