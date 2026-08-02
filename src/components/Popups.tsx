import { useState, useEffect, useCallback } from 'react';
import { X, Gift, Mail } from 'lucide-react';

const EMAIL_POPUP_KEY = 'novae-email-popup-seen';
const EXIT_POPUP_KEY = 'novae-exit-popup-seen';

export function Popups() {
  const [emailPopup, setEmailPopup] = useState(false);
  const [exitPopup, setExitPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const hasSeenEmail = useCallback(() => {
    try {
      return localStorage.getItem(EMAIL_POPUP_KEY) === '1';
    } catch {
      return false;
    }
  }, []);

  const hasSeenExit = useCallback(() => {
    try {
      return localStorage.getItem(EXIT_POPUP_KEY) === '1';
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    // Email popup after 35 seconds — enough time to read the page
    const timer = setTimeout(() => {
      if (!hasSeenEmail()) {
        setEmailPopup(true);
      }
    }, 35000);

    // Or after 60% scroll depth (engaged reader)
    const onScroll = () => {
      if (!hasSeenEmail() && window.scrollY > document.body.scrollHeight * 0.6) {
        setEmailPopup(true);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasSeenEmail]);

  useEffect(() => {
    if (hasSeenExit()) return;
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, [hasSeenExit]);

  const closeEmailPopup = () => {
    setEmailPopup(false);
    try {
      localStorage.setItem(EMAIL_POPUP_KEY, '1');
    } catch {
      // ignore
    }
  };

  const closeExitPopup = () => {
    setExitPopup(false);
    try {
      localStorage.setItem(EXIT_POPUP_KEY, '1');
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(closeEmailPopup, 2500);
    }
  };

  return (
    <>
      {/* Email capture popup */}
      {emailPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg glass-card p-8 sm:p-10 animate-scale-in">
            <button
              onClick={closeEmailPopup}
              className="absolute top-4 right-4 text-gris-clair hover:text-blanc transition-colors"
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-or/20 flex items-center justify-center mx-auto mb-4">
                  <Gift size={28} className="text-or" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">Bienvenue chez NOVAE !</h3>
                <p className="text-gris-clair">Votre code <strong className="text-or">NOVAE10</strong> a été envoyé par email.</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-or/20 flex items-center justify-center mx-auto mb-6">
                  <Mail size={28} className="text-or" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3">
                  10 minutes par jour pour une peau de 20 ans.<br />
                  <span className="text-gradient-gold">Commencez à -10%.</span>
                </h3>
                <p className="text-gris-clair mb-6 text-sm">
                  5 234 clientes ont déjà transformé leur peau avec NOVAE. Rejoignez-les avec un code découverte.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="input-luxe text-center"
                  />
                  <button type="submit" className="btn-gold w-full">
                    Recevoir mon code -10%
                  </button>
                </form>
                <button onClick={closeEmailPopup} className="text-xs text-gris-fonce hover:text-gris-clair mt-4 transition-colors">
                  Non merci, je préfère payer le prix fort
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Exit intent popup */}
      {exitPopup && !emailPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg glass-card p-8 sm:p-10 animate-scale-in">
            <button
              onClick={closeExitPopup}
              className="absolute top-4 right-4 text-gris-clair hover:text-blanc transition-colors"
              aria-label="Fermer"
            >
              <X size={22} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-or/20 flex items-center justify-center mx-auto mb-6">
                <Gift size={28} className="text-or" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3">
                Votre peau mérite mieux qu'une crème à 50€.<br />
                <span className="text-gradient-gold">Partez avec -15%.</span>
              </h3>
              <p className="text-gris-clair mb-2 text-sm">
                Code <strong className="text-or font-bold">NOVAE15</strong> valable 24h — uniquement pour vous.
              </p>
              <p className="text-xs text-gris-fonce mb-6">Économisez jusqu'à 30€ sur le Masque LED.</p>
              <button
                onClick={() => {
                  closeExitPopup();
                  window.location.hash = 'produit';
                }}
                className="btn-gold w-full"
              >
                Utiliser mon code NOVAE15
              </button>
              <button onClick={closeExitPopup} className="text-xs text-gris-fonce hover:text-gris-clair mt-4 transition-colors">
                Non merci, je repars sans économiser
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
