import { useState } from 'react';
import { Mail, MessageCircle, Instagram, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { useSEO } from '@/hooks/useSEO';

const inputClass = 'w-full bg-white border border-creme-3 rounded-xl px-4 py-3 text-brun placeholder:text-brun-leger/50 focus:border-or focus:outline-none focus:ring-2 focus:ring-or/20 transition-all text-sm';
const labelClass = 'block text-xs font-semibold text-brun-clair uppercase tracking-wide mb-1.5';

export function ContactPage() {
  useSEO({
    title: "Contactez-nous | NOVAE",
    description: "Une question sur le Masque LED NOVAE ? Besoin d'assistance ? Notre service client est disponible 24/7 pour vous aider.",
  });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="bg-creme min-h-screen">

      {/* Header */}
      <div className="bg-white border-b border-creme-3 py-16 sm:py-20">
        <div className="container-luxe section-padding text-center max-w-2xl">
          <Reveal>
            <p className="text-or text-sm font-semibold uppercase tracking-widest mb-3">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-brun">
              Nous sommes là pour vous
            </h1>
            <p className="text-brun-clair">
              Une question sur votre commande, le produit, ou la Red Light Therapy ? Nous répondons sous 24h ouvrées.
            </p>
            <div className="divider-gold mx-auto mt-6" />
          </Reveal>
        </div>
      </div>

      <div className="container-luxe section-padding py-16">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-or/10 border border-or/30 flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-or" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold mb-2 text-brun">Message envoyé !</h2>
                  <p className="text-brun-clair">Nous vous répondrons sous 24h ouvrées.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nom complet *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Camille Durand" />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="camille@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Sujet *</label>
                    <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className={inputClass}>
                      <option value="">Choisir un sujet...</option>
                      <option value="commande">Question sur ma commande</option>
                      <option value="produit">Question sur le produit</option>
                      <option value="retour">Retour ou remboursement</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Message *</label>
                    <textarea required rows={6} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Comment pouvons-nous vous aider ?" />
                  </div>
                  <button type="submit" className="btn-gold">
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Infos contact */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6">
              <h3 className="font-display text-base font-semibold mb-4 text-brun">Coordonnées</h3>
              <div className="space-y-4">
                <a href="mailto:contact@novae.fr" className="flex items-center gap-3 text-brun-clair hover:text-brun transition-colors">
                  <Mail size={18} className="text-or shrink-0" />
                  <span className="text-sm">contact@novae.fr</span>
                </a>
                <div className="flex items-center gap-3 text-brun-clair">
                  <MessageCircle size={18} className="text-or shrink-0" />
                  <span className="text-sm">Réponse sous 24h ouvrées</span>
                </div>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brun-clair hover:text-brun transition-colors">
                  <Instagram size={18} className="text-or shrink-0" />
                  <span className="text-sm">@novae.skincare</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-creme-3 shadow-sm p-6">
              <h3 className="font-display text-base font-semibold mb-3 text-brun">Horaires</h3>
              <div className="space-y-2 text-sm text-brun-clair">
                <div className="flex justify-between">
                  <span>Lun – Ven</span>
                  <span className="font-medium text-brun">9h – 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sam</span>
                  <span className="font-medium text-brun">10h – 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dim</span>
                  <span className="text-brun-leger">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
