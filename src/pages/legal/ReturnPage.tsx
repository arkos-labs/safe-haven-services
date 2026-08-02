import { LegalLayout, H2, P, UL } from './LegalLayout';

export function ReturnPage() {
  return (
    <LegalLayout title="Politique de Retour" lastUpdated="1er janvier 2026">
      <H2>Satisfait ou remboursé pendant 30 jours</H2>
      <P>
        Votre satisfaction est notre priorité. Si vous n'êtes pas entièrement satisfaite de votre achat, vous
        disposez de 30 jours pour nous retourner votre produit et obtenir un remboursement intégral. Le délai
        légal français est de 14 jours — nous offrons plus pour vous laisser le temps de tester.
      </P>
      <H2>Conditions de retour</H2>
      <UL>
        <li>Le produit doit être retourné dans son emballage d'origine</li>
        <li>Le produit doit être en bon état, propre et complet</li>
        <li>Le retour doit être effectué dans un délai de 30 jours après réception</li>
        <li>Les frais de retour sont entièrement pris en charge par NOVAE</li>
      </UL>
      <H2>Comment retourner un produit ?</H2>
      <P>
        Pour initier un retour, contactez-nous à contact@novae.fr avec les informations suivantes :
      </P>
      <UL>
        <li>Votre numéro de commande</li>
        <li>Le motif du retour</li>
        <li>Votre nom et email</li>
      </UL>
      <P>
        Nous vous enverrons une étiquette de retour prépayée par email. Collez-la sur le colis et déposez-le dans
        un point relais ou un bureau de poste.
      </P>
      <H2>Remboursement</H2>
      <P>
        Dès réception et vérification du produit retourné, nous procédons au remboursement sur votre moyen de
        paiement initial dans un délai de 5 jours ouvrés. Vous recevrez une confirmation par email.
      </P>
      <H2>Échange</H2>
      <P>
        Vous préférez un échange ? Contactez-nous : nous échangeons votre produit sans frais supplémentaire,
        sous réserve de disponibilité.
      </P>
      <H2>Produits non retournables</H2>
      <P>
        Pour des raisons d'hygiène, les patchs yeux collagène et le sérum Vitamine C (une fois ouverts) ne sont
        pas retournables, sauf s'ils sont défectueux à la réception.
      </P>
      <H2>Garantie</H2>
      <P>
        En plus de notre politique de retour, nos produits sont garantis 2 ans contre tout défaut de
        fabrication. En cas de défaut, contactez-nous : nous échangeons le produit gratuitement.
      </P>
    </LegalLayout>
  );
}
