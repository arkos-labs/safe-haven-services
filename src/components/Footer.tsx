import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { Link } from '@/context/RouterContext';

const footerLinks = {
  Aide: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Suivi de commande', to: '/contact' },
    { label: 'Livraison', to: '/politique-livraison' },
  ],
  Légal: [
    { label: 'CGV', to: '/cgv' },
    { label: 'Confidentialité (RGPD)', to: '/politique-confidentialite' },
    { label: 'Mentions légales', to: '/mentions-legales' },
    { label: 'Politique de retour', to: '/politique-retour' },
  ],
  Marque: [
    { label: 'À propos', to: '/a-propos' },
    { label: 'Contact', to: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-noir-2 border-t border-white/5 mt-20">
      <div className="container-luxe section-padding py-8 lg:py-16">

        {/* Mobile : compact / Desktop : réparti */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12">

          {/* Brand */}
          <div className="shrink-0 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0">
            <Link to="/" className="inline-block">
              <img src="/images/logo-novae.png" alt="NOVAE Paris" className="h-10 lg:h-16 w-auto object-contain" />
            </Link>
            <p className="text-gris-clair text-xs lg:text-sm lg:mt-3 italic font-display">La renaissance de ta peau</p>
            <div className="flex items-center gap-2 lg:gap-3 lg:mt-6 ml-auto lg:ml-0">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center text-gris-clair hover:text-or hover:border-or/40 transition-all" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center text-gris-clair hover:text-or hover:border-or/40 transition-all" aria-label="TikTok">
                <MessageCircle size={15} />
              </a>
              <a href="mailto:contact@novae.fr"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center text-gris-clair hover:text-or hover:border-or/40 transition-all" aria-label="Email">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Colonnes liens — grille 3 cols sur mobile, séparées sur desktop */}
          <div className="grid grid-cols-3 lg:contents gap-4 lg:gap-0">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs lg:text-sm font-semibold text-blanc uppercase tracking-widest mb-2 lg:mb-4">{title}</h4>
                <ul className="space-y-1.5 lg:space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-xs lg:text-sm text-gris-clair hover:text-or transition-colors duration-300">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-6 lg:mt-12 pt-4 lg:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
          <p className="text-xs text-gris-fonce">© NOVAE 2026 — Tous droits réservés.</p>
          <div className="flex items-center gap-2 sm:ml-auto">
            <span className="text-xs text-gris-fonce uppercase tracking-wider">Paiement sécurisé</span>
            <img src="/images/visa.svg" alt="Visa" className="h-6 lg:h-9 w-auto" />
            <img src="/images/mastercard.svg" alt="Mastercard" className="h-6 lg:h-9 w-auto" />
            <img src="/images/apple-pay.svg" alt="Apple Pay" className="h-6 lg:h-9 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}
