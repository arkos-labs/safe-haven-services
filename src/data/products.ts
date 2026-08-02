export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
  colors?: { name: string; wavelength: string; benefit: string; hex: string }[];
  rating: number;
  reviewCount: number;
  badge?: string;
  category: 'mask' | 'serum' | 'tool' | 'patch' | 'bundle';
};

export type Review = {
  id: string;
  name: string;
  age: number;
  city: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  avatar: string;
  verified: boolean;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const products: Product[] = [
  {
    id: 'masque-led-pro',
    slug: 'masque-led-red-light-therapy',
    name: 'Masque LED NOVAE Pro — 7 Lumières Thérapeutiques',
    shortName: 'Masque LED NOVAE Pro',
    price: 59,
    originalPrice: 89,
    description:
      "Ta peau mérite une explosion d'éclat. NOVAE utilise la même technologie que les instituts à 150€ la séance — en 10 minutes chez toi, 7 lumières thérapeutiques redéfinissent ta peau.",
    longDescription:
      "Le Masque LED NOVAE Pro combine 7 longueurs d'onde thérapeutiques pour cibler chaque préoccupation cutanée. La lumière rouge à 660nm pénètre le derme pour stimuler la production de collagène et d'élastine, tandis que l'infrarouge à 850nm accélère la régénération cellulaire en profondeur. Conçu en silicone médical hypoallergénique, le masque épouse les contours de votre visage pour un confort absolu. Rechargeable via USB, sans fil, il vous accompagne partout dans votre rituel beauté quotidien.",
    images: [
      '/images/masque-hero.jpg',
    ],
    features: [
      '7 couleurs thérapeutiques dont rouge 660nm + infrarouge 850nm',
      'Rechargeable USB, sans fil — usage partout',
      'Silicone médical hypoallergénique',
      'Résultats visibles en 14 jours',
      'Certifié CE',
      'Autonomie : 5–6 séances par charge',
    ],
    specs: [
      { label: 'Couleurs', value: '7 (Rouge 660nm, Infrarouge 850nm, Bleu, Vert, Jaune, Violet, Cyan)' },
      { label: 'Batterie', value: '400mAh rechargeable USB-C' },
      { label: 'Matériau', value: 'Silicone médical hypoallergénique' },
      { label: 'Certification', value: 'CE' },
      { label: 'Session recommandée', value: '10–20 minutes' },
      { label: 'Fréquence', value: '3–5x par semaine' },
      { label: 'Compatibilité', value: 'Tous types de peau' },
      { label: 'Poids', value: '230 g' },
    ],
    colors: [
      { name: 'Rouge', wavelength: '660nm', benefit: 'Anti-âge, collagène', hex: '#FF4444' },
      { name: 'Infrarouge', wavelength: '850nm', benefit: 'Récupération profonde', hex: '#8B0000' },
      { name: 'Bleu', wavelength: '415nm', benefit: 'Anti-acné', hex: '#4444FF' },
      { name: 'Vert', wavelength: '520nm', benefit: 'Taches pigmentaires', hex: '#44FF44' },
      { name: 'Jaune', wavelength: '590nm', benefit: 'Éclat, sensibilité', hex: '#FFDD44' },
      { name: 'Violet', wavelength: '380nm', benefit: 'Acné marquée', hex: '#9944FF' },
      { name: 'Cyan', wavelength: '490nm', benefit: 'Apaisant, anti-inflammatoire', hex: '#44DDFF' },
    ],
    rating: 4.8,
    reviewCount: 5234,
    badge: 'Best-seller',
    category: 'mask',
  },
  {
    id: 'serum-vitamine-c',
    slug: 'serum-vitamine-c-eclat',
    name: 'Sérum Vitamine C Éclat',
    shortName: 'Sérum Vitamine C',
    price: 24,
    description:
      "Boostez vos résultats x3. La lumière rouge booste l'absorption des actifs skincare. Le sérum Vitamine C utilisé juste après le masque décuple les résultats.",
    longDescription:
      "Notre Sérum Vitamine C Éclat contient 15% de vitamine C stabilisée associée à l'acide hyaluronique. Appliqué juste après votre séance de lumière rouge, il pénètre en profondeur grâce à la microcirculation activée. Résultat : un teint visiblement plus lumineux, des taches atténuées et une peau intensément hydratée.",
    images: [
      'https://images.pexels.com/photos/4119559/pexels-photo-4119559.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/4119553/pexels-photo-4119553.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/13573728/pexels-photo-13573728.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    ],
    features: [
      '15% Vitamine C stabilisée',
      'Acide hyaluronique + E',
      'Texture légère, non grasse',
      'Convient à tous types de peau',
      'Flacon 30ml avec compte-gouttes',
    ],
    specs: [
      { label: 'Volume', value: '30 ml' },
      { label: 'Actif principal', value: 'Vitamine C 15%' },
      { label: 'Texture', value: 'Sérum léger' },
      { label: 'Application', value: 'Matin et/ou soir' },
    ],
    rating: 4.7,
    reviewCount: 1289,
    badge: 'Le plus vendu',
    category: 'serum',
  },
  {
    id: 'masque-cou-decollete',
    slug: 'masque-cou-decollete-led',
    name: 'Masque Cou & Décolleté LED',
    shortName: 'Masque Cou & Décolleté',
    price: 39,
    description:
      "Le cou trahit votre âge — traitez-le aussi. Les clientes qui achètent le masque visage veulent traiter aussi le cou.",
    longDescription:
      "Spécialement conçu pour la zone du cou et du décolleté, ce masque LED cible les rides horizontales, la perte de fermeté et le teint irrégulier. Mêmes technologies rouge 660nm et infrarouge 850nm que le masque visage, dans un format ergonomique qui épouse les contours du cou.",
    images: [
      'https://images.pexels.com/photos/7321310/pexels-photo-7321310.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/7321504/pexels-photo-7321504.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/6724509/pexels-photo-6724509.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    ],
    features: [
      'Rouge 660nm + Infrarouge 850nm',
      'Format ergonomique cou & décolleté',
      'Rechargeable USB-C',
      'Silicone médical',
      'Certifié CE',
    ],
    specs: [
      { label: 'Couleurs', value: 'Rouge 660nm + Infrarouge 850nm' },
      { label: 'Batterie', value: '400mAh rechargeable' },
      { label: 'Matériau', value: 'Silicone médical' },
      { label: 'Certification', value: 'CE' },
    ],
    rating: 4.6,
    reviewCount: 642,
    category: 'mask',
  },
  {
    id: 'rouleau-jade',
    slug: 'rouleau-jade-refrigerant',
    name: 'Rouleau Jade Réfrigérant',
    shortName: 'Rouleau Jade',
    price: 19,
    description:
      "Dégonflé et drainé après chaque séance. Complète parfaitement le rituel post-masque, prix d'appel bas.",
    longDescription:
      "En jade naturel, ce rouleau réfrigérant décongestionne, draine et raffermit la peau. Conservez-le au réfrigérateur et utilisez-le après votre séance de lumière rouge pour maximiser l'absorption du sérum et dégonfler les traits. La fraîcheur du jade resserre les pores et tonifie instantanément.",
    images: [
      'https://images.pexels.com/photos/7608049/pexels-photo-7608049.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/3737594/pexels-photo-3737594.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/6963151/pexels-photo-6963151.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    ],
    features: [
      'Jade naturel authentique',
      'Double rouleau (grand + petit)',
      'Manche ergonomique',
      'À conserver au réfrigérateur',
    ],
    specs: [
      { label: 'Matériau', value: 'Jade naturel' },
      { label: 'Dimensions', value: '15 × 8 cm' },
      { label: 'Entretien', value: 'Nettoyer à l\'eau tiède' },
    ],
    rating: 4.5,
    reviewCount: 893,
    category: 'tool',
  },
  {
    id: 'patch-yeux-collagene',
    slug: 'patch-yeux-collagene',
    name: 'Patch Yeux Collagène — Pack 10 paires',
    shortName: 'Patch Yeux Collagène',
    price: 16,
    description:
      "Pour des yeux reposés pendant votre séance masque. Produit consommable = réachat mensuel garanti.",
    longDescription:
      "Ces patchs hydrogel imbibés de collagène et d'acide hyaluronique s'appliquent pendant votre séance de masque LED. La lumière rouge accélère la pénétration des actifs pour un regard immédiatement reposé, défatigué et lissé. Pack de 10 paires pour un mois d'utilisation.",
    images: [
      'https://images.pexels.com/photos/6763790/pexels-photo-6763790.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/6977639/pexels-photo-6977639.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/7161699/pexels-photo-7161699.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    ],
    features: [
      '10 paires (1 mois)',
      'Collagène + acide hyaluronique',
      'Hydrogel adhésif confort',
      'À utiliser pendant le masque LED',
    ],
    specs: [
      { label: 'Quantité', value: '10 paires' },
      { label: 'Actifs', value: 'Collagène, acide hyaluronique, caféine' },
      { label: 'Durée de pose', value: '10–15 minutes' },
    ],
    rating: 4.4,
    reviewCount: 412,
    category: 'patch',
  },
  {
    id: 'pack-rituel-complet',
    slug: 'pack-rituel-complet',
    name: 'Pack Rituel Complet — Masque + Sérum + Rouleau',
    shortName: 'Pack Rituel Complet',
    price: 89,
    originalPrice: 102,
    description:
      "L'offre la plus populaire. Le masque LED, le sérum Vitamine C et le rouleau jade réunis pour un rituel beauté complet et des résultats décuplés.",
    longDescription:
      "Le Pack Rituel Complet NOVAE réunit nos trois best-sellers pour un rituel beauté complet et des résultats décuplés. Le masque LED stimule le collagène, le sérum Vitamine C nourrit et illumine, et le rouleau jade décongestionne et draine. Ensemble, ils forment un rituel synergique qui transforme votre peau en 14 jours.",
    images: [
      'https://images.pexels.com/photos/7216285/pexels-photo-7216285.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/4119559/pexels-photo-4119559.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
      'https://images.pexels.com/photos/7608049/pexels-photo-7608049.jpeg?auto=compress&cs=tinysrgb&h=900&w=900',
    ],
    features: [
      'Masque LED NOVAE Pro 7 couleurs',
      'Sérum Vitamine C Éclat 30ml',
      'Rouleau Jade Réfrigérant',
      'Économisez 13€ vs achats séparés',
      'Guide rituel inclus',
    ],
    specs: [
      { label: 'Contenu', value: 'Masque LED + Sérum + Rouleau' },
      { label: 'Économie', value: '13€ vs achats séparés' },
    ],
    rating: 4.9,
    reviewCount: 1856,
    badge: 'Offre la plus populaire',
    category: 'bundle',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Camille D.',
    age: 38,
    city: 'Paris',
    rating: 5,
    date: '12 juillet 2026',
    title: 'Bluffée en 2 semaines',
    text: "Je n'y croyais pas. Après 14 jours à 10 minutes par jour, mes ridules autour des yeux ont visiblement diminué. Ma peau est plus lisse et plus lumineuse. Meilleur investissement beauté de l'année.",
    avatar: 'https://images.pexels.com/photos/3764479/pexels-photo-3764479.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Sophie M.',
    age: 45,
    city: 'Lyon',
    rating: 5,
    date: '8 juillet 2026',
    title: 'Plus besoin des instituts',
    text: "Je dépensais 150€ par mois en séances d'institut. Ce masque m'a tout fait économiser. Même technologie, même résultat, à la maison. Mon esthéticienne a remarqué la différence sans que je lui dise.",
    avatar: 'https://images.pexels.com/photos/3762100/pexels-photo-3762100.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Julie R.',
    age: 31,
    city: 'Bordeaux',
    rating: 5,
    date: '5 juillet 2026',
    title: 'Mon acné a disparu',
    text: "La lumière bleue a transformé ma peau acnéique. En 3 semaines, mes boutons ont disparu et mes pores sont resserrés. J'utilise le mode bleu 3 fois par semaine et c'est radical.",
    avatar: 'https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Nathalie B.',
    age: 52,
    city: 'Marseille',
    rating: 4,
    date: '2 juillet 2026',
    title: 'Très satisfaite',
    text: "À 52 ans, j'ai essayé beaucoup de choses. Ce masque est le seul qui m'a donné des résultats visibles sur les rides profondes. Il faut être régulière mais ça vaut le coup. -1 étoile car le câble USB est un peu court.",
    avatar: 'https://images.pexels.com/photos/16869444/pexels-photo-16869444.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Émilie T.',
    age: 27,
    city: 'Lille',
    rating: 5,
    date: '28 juin 2026',
    title: 'Le rituel parfait',
    text: "J'adore mon moment NOVAE le soir. 10 minutes de lumière rouge, c'est ma bulle. Et ma peau n'a jamais été aussi belle. Le sérum Vitamine C en complément est top aussi.",
    avatar: 'https://images.pexels.com/photos/16105478/pexels-photo-16105478.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Karim A.',
    age: 41,
    city: 'Toulouse',
    rating: 5,
    date: '25 juin 2026',
    title: 'Convincing results',
    text: "Je l'ai offert à ma femme, elle est ravie. Et je l'utilise aussi pour mes cernes et la barbe. Le mode infrarouge aide pour la récupération après le sport. Produit vraiment polyvalent.",
    avatar: 'https://images.pexels.com/photos/14566062/pexels-photo-14566062.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    verified: true,
  },
];

export const beforeAfter = [
  {
    name: 'Camille, 38 ans',
    before: 'https://images.pexels.com/photos/8406612/pexels-photo-8406612.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    after: 'https://images.pexels.com/photos/3764479/pexels-photo-3764479.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    duration: '4 semaines',
  },
  {
    name: 'Sophie, 45 ans',
    before: 'https://images.pexels.com/photos/5468632/pexels-photo-5468632.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    after: 'https://images.pexels.com/photos/3762100/pexels-photo-3762100.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    duration: '6 semaines',
  },
  {
    name: 'Julie, 31 ans',
    before: 'https://images.pexels.com/photos/4672631/pexels-photo-4672631.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    after: 'https://images.pexels.com/photos/1820575/pexels-photo-1820575.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    duration: '3 semaines',
  },
];

export const faqItems = [
  {
    q: 'En combien de temps vais-je voir des résultats ?',
    a: "La plupart de nos clientes constatent un teint plus lumineux dès la 1ère semaine. Pour les rides et l'élasticité, comptez 3–4 semaines d'utilisation régulière (3 à 5 fois par semaine). La régularité est plus importante que la durée.",
  },
  {
    q: 'Est-ce sûr pour tous les types de peau ?',
    a: "Oui. La lumière rouge est non-invasive, indolore et non-UV. Le silicone médical hypoallergénique convient aux peaux sèches, grasses, mixtes, sensibles et matures. Contre-indications : épilepsie photosensible, médicaments photosensibilisants, grossesse (par précaution).",
  },
  {
    q: 'Puis-je l\'utiliser avec ma routine skincare ?',
    a: "Absolument. Appliquez vos soins après la séance — la microcirculation activée par la lumière rouge décuple l'absorption des actifs. C'est le moment idéal pour votre sérum.",
  },
  {
    q: 'Quelle est la politique de retour ?',
    a: "Vous disposez de 30 jours satisfaite ou remboursée, sans justification (le délai légal est de 14 jours, nous offrons le double). Contactez-nous à contact@novae.fr avec votre numéro de commande, nous vous envoyons une étiquette de retour gratuite. Remboursement sous 5 jours ouvrés après réception.",
  },
  {
    q: 'Y a-t-il une garantie sur le masque ?',
    a: "Oui. Le masque est garanti 2 ans contre tout défaut de fabrication, batterie garantie 1 an. En cas de problème, contactez-nous : nous échangeons gratuitement, sans tracas.",
  },
];

// Alias pour FaqPage — même contenu
export const fullFaqItems = faqItems;

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'red-light-therapy-science',
    title: 'Red Light Therapy : ce que la science dit vraiment',
    excerpt: "La thérapie par lumière rouge n'est pas un gadget beauté. Découvrez ce que les études cliniques révèlent sur ses effets anti-âge et de réparation cutanée.",
    date: '15 juillet 2026',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      "La Red Light Therapy (RLT), ou thérapie par lumière rouge, repose sur un principe simple : certaines longueurs d'onde lumineuses pénètrent la peau et stimulent des processus biologiques précis. Mais derrière cette simplicité apparente se cache des décennies de recherche clinique.",
      "La lumière rouge à 660 nanomètres pénètre le derme jusqu'à environ 8–10 mm de profondeur. Une fois absorbée par les mitochondries cellulaires — les « centrales énergétiques » de nos cellules — elle stimule la production d'ATP, la molécule qui alimente toutes les fonctions cellulaires. Résultat : les fibroblastes, cellules responsables du collagène et de l'élastine, sont activés et produisent davantage de protéines structurantes.",
      "Une méta-analyse publiée en 2020 dans le Journal of Cosmetic and Laser Therapy a examiné 18 études cliniques portant sur la RLT. Résultat : réduction significative des ridules en 4 à 12 semaines, amélioration du tonus cutané et de l'élasticité, diminution des rougeurs et de l'inflammation. La lumière rouge s'est aussi révélée efficace contre l'acné, en réduisant la production de sébum et l'inflammation des glandes sébacées.",
      "La lumière infrarouge à 850nm va encore plus profond, jusqu'au tissu sous-cutané. Elle accélère la réparation cellulaire, réduit l'inflammation et stimule la microcirculation. C'est pourquoi les athlètes l'utilisent pour la récupération musculaire et les dermatologues pour la cicatrisation.",
      "Contrairement aux UV, la lumière rouge et infrarouge est non-ionisante : elle n'endommage pas l'ADN. C'est une technologie sûre, non-invasive et indolore. Les instituts de beauté l'utilisent depuis plus de 20 ans, à 80–150€ la séance. Le masque LED NOVAE Pro rend cette technologie accessible chez vous, pour quelques centimes par séance.",
      "La clé du succès ? La régularité. 10 minutes par jour, 3 à 5 fois par semaine. C'est la dose optimale identifiée par les études. Pas plus, pas moins. Votre peau a besoin de repos entre les séances pour synthétiser le collagène.",
    ],
  },
  {
    id: 'b2',
    slug: 'integrer-masque-led-routine-soir',
    title: "Comment intégrer le masque LED dans votre routine du soir",
    excerpt: "Le soir est le moment idéal pour votre séance de lumière rouge. Voici comment l'intégrer dans votre routine pour des résultats maximaux.",
    date: '10 juillet 2026',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/7622575/pexels-photo-7622575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      "Le soir, votre peau entre en mode réparation. C'est le moment idéal pour une séance de lumière rouge : les cellules sont déjà programmées pour se régénérer, et la RLT amplifie ce processus naturel.",
      "Étape 1 — Démaquillage. Commencez par un nettoyage complet. La lumière rouge pénètre mieux sur une peau propre, sans barrière de sébum ou de maquillage. Utilisez un nettoyant doux, de préférence sans alcool.",
      "Étape 2 — Séance de masque. Posez votre Masque LED NOVAE Pro pendant 10 à 20 minutes. Choisissez votre couleur selon le besoin du jour : rouge pour l'anti-âge, bleu pour l'acné, vert pour les taches. Profitez de ce moment pour méditer, lire ou écouter un podcast.",
      "Étape 3 — Application du sérum. Juste après la séance, votre peau est prête à absorber les actifs. C'est le moment d'appliquer votre Sérum Vitamine C NOVAE — la microcirculation activée par la lumière décuple la pénétration. Massez doucement jusqu'à absorption complète.",
      "Étape 4 — Hydratation. Scellez l'hydratation avec votre crème de nuit habituelle. Le rouleau jade réfrigéré peut être utilisé ici pour décongestionner et drainer, tout en aidant la crème à pénétrer.",
      "Étape 5 — Patchs yeux (optionnel). Pendant la séance de masque, vous pouvez poser des patchs yeux collagène. La lumière rouge accélère leur efficacité pour un regard reposé au réveil.",
      "Fréquence idéale : 3 à 5 soirs par semaine. Laissez votre peau se reposer les autres jours. En 14 jours, vous verrez les premiers résultats. En 4 semaines, la transformation est visible.",
    ],
  },
  {
    id: 'b3',
    slug: '5-erreurs-a-eviter-masque-led',
    title: '5 erreurs à éviter avec votre masque LED',
    excerpt: "Vous avez investi dans un masque LED ? Assurez-vous de ne pas commettre ces 5 erreurs qui pourraient limiter vos résultats.",
    date: '5 juillet 2026',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/4491158/pexels-photo-4491158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      "Le masque LED est un investissement pour votre peau. Mais mal utilisé, il peut ne donner qu'une fraction des résultats escomptés. Voici les 5 erreurs les plus courantes — et comment les éviter.",
      "Erreur 1 — Trop l'utiliser. Plus n'est pas mieux. Des séances de 40 minutes tous les jours n'accélèrent pas les résultats : elles fatiguent la peau. La dose optimale est de 10 à 20 minutes, 3 à 5 fois par semaine. Au-delà, vous perdez votre temps.",
      "Erreur 2 — Ne pas nettoyer sa peau avant. La lumière rouge pénètre moins bien à travers une couche de sébum, de maquillage ou de pollution. Démaquillez et nettoyez toujours votre visage avant la séance. C'est non négociable.",
      "Erreur 3 — Oublier la régularité. Une séance par semaine ne suffit pas. Les études cliniques montrent que 3 à 5 séances hebdomadaires sont nécessaires pour stimuler la production de collagène. Faites-en un rituel, pas une occasion.",
      "Erreur 4 — Ne pas appliquer de soin après. La lumière rouge active la microcirculation et ouvre les pores : c'est le moment idéal pour appliquer un sérum. Ne gaspillez pas cette fenêtre d'absorption. Le Sérum Vitamine C NOVAE est conçu pour cet instant précis.",
      "Erreur 5 — Ne pas protéger ses yeux. Même si le masque NOVAE est conçu avec une protection oculaire, il est recommandé de garder les yeux fermés pendant la séance. La lumière, même rouge, peut fatiguer les yeux sur la durée. Profitez-en pour méditer ou vous reposer.",
      "En évitant ces 5 erreurs, vous maximisez vos résultats. La Red Light Therapy fonctionne — à condition de la respecter.",
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
