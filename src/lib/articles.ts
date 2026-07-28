export type Article = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'divorce-amiable-prestation-compensatoire',
    title: 'Divorce amiable et prestation compensatoire',
    date: '2024',
    excerpt: 'Depuis la réforme de 2017, le divorce par consentement mutuel peut se conclure sans audience, par acte d\'avocat contresigné. Tour d\'horizon de ce qui est négociable et de ce qui ne l\'est pas.',
    content: `
<p>Depuis la loi du 18 novembre 2016, le divorce par consentement mutuel dit "par acte d'avocats" peut être conclu sans intervention du juge. Chaque époux est assisté de son propre avocat ; ensemble, ils rédigent une convention qui est déposée chez un notaire et acquiert ainsi force exécutoire.</p>

<h2>Ce que couvre la convention</h2>
<p>La convention doit régler l'ensemble des conséquences du divorce : sort du logement conjugal, garde des enfants, pension alimentaire, prestation compensatoire, et partage des biens communs. Aucun aspect patrimonial ne peut être laissé en suspens.</p>

<h2>La prestation compensatoire : un poste central</h2>
<p>Quand les époux ont un niveau de vie différent, l'un peut devoir verser à l'autre une prestation compensatoire destinée à compenser la disparité que la rupture crée dans leurs conditions de vie respectives. Elle est fixée en tenant compte de la durée du mariage, des revenus et patrimoines, des perspectives professionnelles et des sacrifices de carrière consentis.</p>
<p>Cette prestation est librement négociée dans le cadre du divorce amiable. Elle peut prendre la forme d'un capital versé en une ou plusieurs fois, d'une rente, ou d'un abandon de parts dans l'immeuble conjugal.</p>

<h2>Les limites de la procédure amiable</h2>
<p>Cette voie est exclue si l'un des époux est sous mesure de protection (tutelle, curatelle) ou si un enfant mineur demande à être entendu par le juge. Elle suppose également que les deux parties soient pleinement d'accord, non seulement sur le principe du divorce, mais sur l'intégralité de ses conséquences.</p>

<p>Pour en savoir plus sur votre situation, n'hésitez pas à prendre rendez-vous.</p>
`,
  },
  {
    slug: 'autorite-parentale-garde-alternee',
    title: 'Autorité parentale et résidence alternée',
    date: '2024',
    excerpt: 'La résidence alternée n\'est pas automatique. Elle suppose une entente minimale entre les parents et une organisation concrète. Ce qu\'il faut savoir avant de l\'envisager.',
    content: `
<p>L'autorité parentale est exercée conjointement par les deux parents après une séparation, sauf décision contraire du juge. Elle concerne toutes les décisions importantes de la vie de l'enfant : santé, scolarité, orientation religieuse, déplacements à l'étranger.</p>

<h2>La résidence habituelle vs la résidence alternée</h2>
<p>Par défaut, le juge aux affaires familiales fixe la résidence de l'enfant chez l'un des parents, avec un droit de visite et d'hébergement pour l'autre. La résidence alternée, elle, répartit le temps de l'enfant de manière équilibrée entre les deux foyers — une semaine sur deux, ou un autre rythme convenu.</p>

<h2>Conditions et limites</h2>
<p>La résidence alternée n'est pas automatique, même si les deux parents la demandent. Le juge vérifie que l'organisation proposée est concrètement réalisable : proximité des deux domiciles, compatibilité avec la scolarité et l'activité de l'enfant, capacité des parents à communiquer suffisamment pour que les transitions se passent bien.</p>
<p>Elle n'est pas adaptée aux jeunes enfants (moins de 3 ans) ni aux situations de conflit très élevé, car elle implique des échanges réguliers entre les parents.</p>

<h2>La pension alimentaire en cas de résidence alternée</h2>
<p>La résidence alternée n'exclut pas le versement d'une pension alimentaire. Si les revenus des parents sont très déséquilibrés, le parent le mieux loti peut être amené à contribuer à l'entretien de l'enfant malgré l'hébergement égalitaire.</p>

<p>Chaque situation est unique. Prenez rendez-vous pour étudier la vôtre.</p>
`,
  },
  {
    slug: 'succession-dettes-acceptation',
    title: 'Succession et dettes : accepter ou renoncer ?',
    date: '2024',
    excerpt: 'Hériter d\'une dette est possible. Avant d\'accepter une succession, il est crucial de connaître l\'actif et le passif du défunt. Les options offertes par la loi pour vous protéger.',
    content: `
<p>Lorsqu'un proche décède, ses héritiers recueillent son patrimoine, mais aussi ses dettes. La loi leur offre trois options : accepter purement et simplement, accepter à concurrence de l'actif net, ou renoncer.</p>

<h2>L'acceptation pure et simple</h2>
<p>L'héritier qui accepte purement et simplement recueille l'intégralité des droits du défunt, mais s'engage aussi à payer ses dettes, même si elles excèdent la valeur des biens transmis. Cette option est irréversible une fois confirmée explicitement ou tacitement (notamment en cas de cession ou de disposition des biens avant toute décision formelle).</p>

<h2>L'acceptation à concurrence de l'actif net</h2>
<p>Elle permet de limiter le risque. L'héritier recueille les biens mais ne paie les dettes qu'à hauteur de ce qu'il a reçu. Il doit déposer une déclaration au greffe du tribunal judiciaire dans un délai de quatre mois suivant l'ouverture de la succession, après avoir établi un inventaire précis du patrimoine du défunt.</p>

<h2>La renonciation</h2>
<p>L'héritier qui renonce est réputé n'avoir jamais été héritier. Il ne recueille rien, mais ne doit rien non plus. La renonciation doit être formalisée au greffe du tribunal judiciaire compétent et peut être rétractée si aucun autre héritier n'a encore accepté.</p>

<h2>Délai pour se décider</h2>
<p>Un héritier dispose en principe de dix ans pour accepter ou renoncer. Mais tout créancier ou cohéritier peut, passé quatre mois depuis le décès, le sommer de prendre parti dans un délai de deux mois.</p>

<p>En cas de doute sur la situation financière du défunt, consultez un avocat avant toute démarche.</p>
`,
  },
]

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
