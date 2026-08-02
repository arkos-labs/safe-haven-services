import { X, Plus, Minus, Trash2, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { useCart, getProductById } from '@/context/CartContext';
import { Link, useRouter } from '@/context/RouterContext';

const FREE_SHIPPING_THRESHOLD = 50;

export function CartDrawer() {
  const { isCartOpen, closeCart, items, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const { navigate } = useRouter();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fade-in"
        onClick={closeCart}
      />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-noir-2 z-50 flex flex-col animate-slide-right">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-or" />
            <h2 className="font-display text-xl font-semibold">Panier ({itemCount})</h2>
          </div>
          <button onClick={closeCart} className="text-gris-clair hover:text-blanc transition-colors" aria-label="Fermer">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-gris-fonce mb-4" />
            <p className="text-gris-clair mb-2">Votre panier est vide</p>
            <p className="text-sm text-gris-fonce mb-6">Découvrez nos produits et commencez votre rituel.</p>
            <button
              onClick={() => {
                closeCart();
                navigate('/');
              }}
              className="btn-gold"
            >
              Découvrir la boutique
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => {
                const product = getProductById(item.productId);
                if (!product) return null;
                const price = item.upsellPrice ?? product.price;
                return (
                  <div key={item.productId} className="flex gap-4 items-center">
                    <Link to={`/produit/${product.slug}`} onClick={closeCart} className="shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.shortName}
                        className="w-20 h-20 rounded-xl object-cover border border-white/10"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/produit/${product.slug}`}
                        onClick={closeCart}
                        className="text-sm font-medium text-blanc hover:text-or transition-colors line-clamp-2"
                      >
                        {product.shortName}
                      </Link>
                      <p className="text-or font-semibold mt-1">{price.toFixed(2)}€</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-white/10 rounded-full">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-gris-clair hover:text-or transition-colors"
                            aria-label="Diminuer"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-7 text-center text-sm tabular-nums">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-gris-clair hover:text-or transition-colors"
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
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-white/5 px-6 py-5 space-y-4">
              {/* Free shipping progress */}
              {subtotal < FREE_SHIPPING_THRESHOLD ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-gris-clair">
                      <Truck size={13} className="text-or" />
                      Plus que <span className="text-blanc font-semibold">{(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)}€</span> pour la livraison gratuite
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-or-dark to-or rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-green-400 bg-green-400/5 border border-green-400/20 rounded-xl px-3 py-2">
                  <Truck size={14} />
                  <span className="font-medium">Livraison gratuite débloquée !</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-gris-clair">Sous-total</span>
                <span className="text-lg font-display font-semibold">{subtotal.toFixed(2)}€</span>
              </div>
              <button
                onClick={() => {
                  closeCart();
                  navigate('/panier');
                }}
                className="btn-gold w-full"
              >
                Voir le panier
              </button>
              <button
                onClick={() => {
                  closeCart();
                  navigate('/checkout');
                }}
                className="btn-outline w-full"
              >
                Commander
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-gris-fonce">
                <ShieldCheck size={12} className="text-or/60" />
                <span>Paiement 100% sécurisé · Satisfaite ou remboursée 30 j.</span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
