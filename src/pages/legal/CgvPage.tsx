import { LegalLayout, H2, P, UL } from './LegalLayout';

export function CgvPage() {
  return (
    <LegalLayout title="Conditions Générales de Vente" lastUpdated="1er janvier 2026">
      <H2>1. Préambule</H2>
      <P>
        Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des ventes de produits réalisées
        par NOVAE, immatriculée au RCS sous le numéro en cours d'attribution, dont le siège social est situé à
        Paris, France. Elles s'appliquent à toutes les commandes passées sur le site novae.fr.
      </P>
      <H2>2. Produits et prix</H2>
      <P>
        Les produits proposés à la vente sont décrits avec la plus grande précision. Toutefois, des erreurs ou
        omissions peuvent exister. Les prix sont indiqués en euros (€), toutes taxes comprises (TVA française
        incluse). NOVAE se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le
        prix figurant au catalogue le jour de la commande sera le seul applicable à l'acheteur.
      </P>
      <H2>3. Commande</H2>
      <P>
        La commande se fait directement sur le site novae.fr. La validation de la commande implique l'acceptation
        des présentes CGV. Toute commande suppose l'acceptation préalable du formulaire de commande en ligne.
        NOVAE confirmera la commande par email.
      </P>
      <H2>4. Paiement</H2>
      <P>
        Le paiement est exigible à la commande. Il s'effectue par carte bancaire (Visa, Mastercard), PayPal ou
        Apple Pay via une connexion sécurisée SSL. Les données bancaires ne sont jamais stockées sur nos serveurs.
      </P>
      <H2>5. Livraison</H2>
      <P>
        Les commandes sont expédiées sous 24h ouvrées. Les délais de livraison sont les suivants :
      </P>
      <UL>
        <li>Standard : 6 à 12 jours ouvrés (gratuit dès 50€ d'achat)</li>
        <li>Express : 2 à 3 jours ouvrés (+4,99€)</li>
      </UL>
      <P>
        NOVAE ne peut être tenue responsable des retards de livraison imputables au transporteur ou à des cas
        de force majeure.
      </P>
      <H2>6. Droit de rétractation</H2>
      <P>
        Conformément aux dispositions légales en vigueur, vous disposez d'un délai de 14 jours pour exercer
        votre droit de rétractation. NOVAE étend ce délai à 30 jours pour vous offrir une garantie satisfait
        ou remboursé. Les frais de retour sont pris en charge par NOVAE.
      </P>
      <H2>7. Garantie</H2>
      <P>
        Tous nos produits sont garantis 2 ans contre tout défaut de fabrication. La batterie est garantie 1 an.
        En cas de défaut, contactez-nous à contact@novae.fr : nous échangeons le produit gratuitement.
      </P>
      <H2>8. Propriété intellectuelle</H2>
      <P>
        Tous les éléments du site novae.fr (textes, images, logos, vidéos) sont la propriété exclusive de NOVAE
        et sont protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.
      </P>
      <H2>9. Responsabilité</H2>
      <P>
        NOVAE ne pourra être tenue responsable des dommages résultant d'une utilisation non conforme du produit
        ou du non-respect des précautions d'usage. Le masque LED est déconseillé en cas d'épilepsie photosensible
        ou de prise de médicaments photosensibilisants.
      </P>
      <H2>10. Droit applicable</H2>
      <P>
        Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront
        seuls compétents.
      </P>
    </LegalLayout>
  );
}
