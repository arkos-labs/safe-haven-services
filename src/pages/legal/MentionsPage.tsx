import { LegalLayout, H2, P } from './LegalLayout';

export function MentionsPage() {
  return (
    <LegalLayout title="Mentions Légales" lastUpdated="1er janvier 2026">
      <H2>Éditeur du site</H2>
      <P>
        NOVAE<br />
        Société [forme juridique en cours d'immatriculation]<br />
        Siège social : [adresse à renseigner selon statut juridique], Paris, France<br />
        RCS : [numéro en cours d'attribution]<br />
        SIRET : [à renseigner]<br />
        TVA intracommunautaire : [à renseigner]<br />
        Email : contact@novae.fr
      </P>
      <H2>Directeur de la publication</H2>
      <P>Le directeur de la publication est le représentant légal de NOVAE.</P>
      <H2>Hébergement</H2>
      <P>
        Le site novae.fr est hébergé par [nom de l'hébergeur], dont le siège est situé à [adresse de l'hébergeur].
      </P>
      <H2>Propriété intellectuelle</H2>
      <P>
        L'ensemble des éléments du site (textes, images, logos, vidéos, design, code) est la propriété exclusive
        de NOVAE ou de ses partenaires. Toute reproduction, représentation, modification ou exploitation, totale
        ou partielle, sans autorisation écrite préalable, est interdite et constitutive d'une contrefaçon
        sanctionnée par le Code de la propriété intellectuelle.
      </P>
      <H2>Marque</H2>
      <P>
        « NOVAE » et le logo NOVAE sont des marques déposées. Toute utilisation sans autorisation est interdite.
      </P>
      <H2>Responsabilité</H2>
      <P>
        NOVAE s'efforce de fournir des informations exactes et à jour sur son site. Toutefois, NOVAE ne peut
        garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. Les informations
        relatives à la Red Light Therapy sont fournies à titre indicatif et ne constituent pas un avis médical.
      </P>
      <H2>Liens hypertextes</H2>
      <P>
        Le site peut contenir des liens vers d'autres sites. NOVAE n'exerce aucun contrôle sur ces sites et décline
        toute responsabilité quant à leur contenu.
      </P>
      <H2>Droit applicable</H2>
      <P>
        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
        seront seuls compétents.
      </P>
    </LegalLayout>
  );
}
