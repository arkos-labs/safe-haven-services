import { LegalLayout, H2, P, UL } from './LegalLayout';

export function PrivacyPage() {
  return (
    <LegalLayout title="Politique de Confidentialité (RGPD)" lastUpdated="1er janvier 2026">
      <H2>1. Responsable du traitement</H2>
      <P>
        Le responsable du traitement des données personnelles est NOVAE, dont le siège social est situé à Paris,
        France. Pour toute question relative à la protection de vos données, vous pouvez nous contacter à
        contact@novae.fr.
      </P>
      <H2>2. Données collectées</H2>
      <P>Nous collectons les données suivantes :</P>
      <UL>
        <li>Données d'identification : nom, prénom, email, téléphone</li>
        <li>Données de livraison : adresse postale, code postal, ville</li>
        <li>Données de commande : produits commandés, montant, historique</li>
        <li>Données techniques : adresse IP, type de navigateur, cookies</li>
      </UL>
      <H2>3. Finalités du traitement</H2>
      <P>Vos données sont traitées pour les finalités suivantes :</P>
      <UL>
        <li>Traitement et expédition de vos commandes</li>
        <li>Communication relative à votre commande (confirmation, suivi)</li>
        <li>Service client et gestion des retours</li>
        <li>Envoi d'offres promotionnelles (avec votre consentement)</li>
        <li>Analyse statistique et amélioration du site</li>
      </UL>
      <H2>4. Base légale</H2>
      <P>
        Le traitement de vos données repose sur l'exécution du contrat de vente, votre consentement (pour les
        communications marketing) et notre intérêt légitime (pour l'amélioration du service).
      </P>
      <H2>5. Durée de conservation</H2>
      <P>
        Vos données sont conservées pendant la durée nécessaire à l'exécution de la commande et des garanties
        associées (2 ans), puis archivées pour les obligations comptables (10 ans). Les données marketing sont
        conservées jusqu'au retrait de votre consentement.
      </P>
      <H2>6. Destinataires</H2>
      <P>
        Vos données sont destinées à NOVAE et à ses prestataires de service (transporteur, prestataire de
        paiement, hébergeur). Elles ne sont jamais vendues à des tiers. Les prestataires sont soumis à des
        accords de confidentialité.
      </P>
      <H2>7. Vos droits</H2>
      <P>Conformément au RGPD, vous disposez des droits suivants :</P>
      <UL>
        <li>Droit d'accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement (« droit à l'oubli »)</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit à la portabilité</li>
        <li>Droit d'opposition</li>
        <li>Droit de retirer votre consentement à tout moment</li>
      </UL>
      <P>
        Pour exercer ces droits, contactez-nous à contact@novae.fr. Vous pouvez également déposer une réclamation
        auprès de la CNIL (www.cnil.fr).
      </P>
      <H2>8. Cookies</H2>
      <P>
        Notre site utilise des cookies de fonctionnement (panier, session) et, avec votre consentement, des
        cookies analytiques (Google Analytics) et publicitaires (Meta Pixel, TikTok Pixel). Vous pouvez gérer
        vos préférences via la bannière de consentement affichée à votre arrivée.
      </P>
      <H2>9. Sécurité</H2>
      <P>
        Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
        contre les accès non autorisés, les altérations ou les fuites. Les paiements sont sécurisés par cryptage SSL.
      </P>
    </LegalLayout>
  );
}
