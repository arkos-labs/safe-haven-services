import { LegalLayout, H2, P, UL } from './LegalLayout';

export function ShippingPage() {
  return (
    <LegalLayout title="Politique de Livraison" lastUpdated="1er janvier 2026">
      <H2>Zones de livraison</H2>
      <P>
        NOVAE livre en France métropolitaine, Corse, DOM-TOM et Belgique. Pour les autres pays, contactez-nous
        à contact@novae.fr pour vérifier la disponibilité.
      </P>
      <H2>Délais et tarifs</H2>
      <UL>
        <li>Standard (France métropolitaine) : 6 à 12 jours ouvrés — Gratuite dès 50€, sinon 4,99€</li>
        <li>Express (France métropolitaine) : 2 à 3 jours ouvrés — 4,99€</li>
        <li>Corse et DOM-TOM : 10 à 15 jours ouvrés — Gratuite dès 50€, sinon 9,99€</li>
        <li>Belgique : 6 à 12 jours ouvrés — Gratuite dès 60€, sinon 6,99€</li>
      </UL>
      <H2>Expédition</H2>
      <P>
        Toute commande validée avant 14h (jours ouvrés) est expédiée le jour même. Les commandes passées le
        week-end ou les jours fériés sont expédiées le jour ouvré suivant.
      </P>
      <H2>Suivi de commande</H2>
      <P>
        Dès l'expédition, vous recevez un email contenant votre numéro de suivi. Vous pouvez suivre votre colis
        sur le site du transporteur. Si vous n'avez pas reçu d'email de suivi sous 48h, vérifiez vos spams ou
        contactez-nous.
      </P>
      <H2>Non-réception</H2>
      <P>
        Si votre colis n'est pas arrivé à la fin du délai estimé, contactez-nous sous 7 jours. Nous ouvrirons une
        enquête auprès du transporteur et vous renverrons votre commande ou vous rembourserons.
      </P>
      <H2>Colis endommagé</H2>
      <P>
        À la réception, vérifiez l'état de votre colis. En cas de dommage, refusez le colis ou émettez des
        réserves sur le bon de livraison, puis contactez-nous sous 48h avec des photos. Nous vous renverrons
        un produit neuf.
      </P>
      <H2>TVA</H2>
      <P>
        Tous nos prix incluent la TVA française applicable. Le détail de la TVA est indiqué sur votre facture,
        envoyée par email avec la confirmation de commande.
      </P>
    </LegalLayout>
  );
}
