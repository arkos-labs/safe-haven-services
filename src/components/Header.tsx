import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useRouter } from '@/context/RouterContext';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { label: 'Le Masque', to: '/produit/masque-led-red-light-therapy' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const linkClass = (active: boolean) =>
  `text-sm font-medium transition-colors duration-300 relative group ${
    active ? 'text-or' : 'text-gris-clair hover:text-blanc'
  }`;

export function Header() {
  const { itemCount, openCart } = useCart();
  const { path } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [path]);

  const isActive = (to: string) =>
    to === '/' ? path === '/' || path === '' : path.startsWith(to);

  return (
    <>
      <header className="sticky top-0 z-40 bg-noir/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30">
        <div className="container-luxe section-padding relative flex items-center h-24 sm:h-28">

          {/* Gauche : Accueil + Le Masque */}
          <div className="flex-1 hidden lg:flex items-center justify-end gap-10 pr-24">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.to} to={link.to} className={linkClass(isActive(link.to))}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-or transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden text-blanc p-2 -ml-2 z-10" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Centre : Logo — toujours centré */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center shrink-0">
            <img src="/images/logo-novae.png" alt="NOVAE Paris" className="h-20 sm:h-24 w-auto object-contain py-1" />
          </Link>

          {/* Droite : À propos + FAQ + Contact + panier */}
          <div className="flex-1 flex items-center justify-start gap-10 pl-24">
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.slice(2).map((link) => (
                <Link key={link.to} to={link.to} className={linkClass(isActive(link.to))}>
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-or transition-all duration-300 ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              ))}
            </div>
            <button onClick={openCart} className="relative text-blanc hover:text-or transition-colors p-2 ml-auto" aria-label="Panier">
              <ShoppingBag size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-or text-noir text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-scale-in">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-noir-2/98 backdrop-blur-xl border-t border-white/5 animate-slide-down">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className={`px-8 py-3 text-base font-medium transition-colors ${isActive(link.to) ? 'text-or bg-or/5' : 'text-gris-clair hover:text-blanc'}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
