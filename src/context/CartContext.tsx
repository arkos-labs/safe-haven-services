import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { products, type Product } from '@/data/products';

export type CartItem = {
  productId: string;
  quantity: number;
  upsellPrice?: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (productId: string, quantity?: number, upsellPrice?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  total: number;
  shipping: number;
  freeShippingThreshold: number;
  remainingForFreeShipping: number;
  hasFreeShipping: boolean;
  promoCode: string | null;
  promoDiscount: number;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
  openCart: () => void;
  isCartOpen: boolean;
  closeCart: () => void;
  lastAddedItem: string | null;
};

const CartContext = createContext<CartContextValue | null>(null);

const FREE_SHIPPING_THRESHOLD = 50;
const STORAGE_KEY = 'novae-cart';
const PROMO_CODES: Record<string, number> = {
  NOVAE10: 0.1,
  NOVAE15: 0.15,
  BIENVENUE: 0.1,
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setItems(parsed.items || []);
        setPromoCode(parsed.promoCode || null);
      }
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, promoCode }));
  }, [items, promoCode, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1, upsellPrice?: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { productId, quantity, upsellPrice }];
    });
    setLastAddedItem(productId);
    setTimeout(() => setLastAddedItem(null), 3000);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
      return;
    }
    setItems((prev) => prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setPromoCode(null);
  }, []);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const applyPromo = useCallback((code: string) => {
    const upper = code.toUpperCase().trim();
    if (PROMO_CODES[upper]) {
      setPromoCode(upper);
      return true;
    }
    return false;
  }, []);

  const removePromo = useCallback(() => setPromoCode(null), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return sum;
    const price = item.upsellPrice ?? product.price;
    return sum + price * item.quantity;
  }, 0);

  const promoDiscount = promoCode ? subtotal * (PROMO_CODES[promoCode] || 0) : 0;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 4.99;
  const total = Math.max(0, subtotal - promoDiscount) + shipping;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const hasFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        total,
        shipping,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        remainingForFreeShipping,
        hasFreeShipping,
        promoCode,
        promoDiscount,
        applyPromo,
        removePromo,
        openCart,
        isCartOpen,
        closeCart,
        lastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
