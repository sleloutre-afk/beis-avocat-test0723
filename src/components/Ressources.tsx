import Link from 'next/link'

const ARTICLES = [
  {
    slug: 'divorce-amiable-prestation-compensatoire',
    title: 'Divorce amiable et prestation compensatoire',
    excerpt: "Depuis la réforme de 2017, le divorce par consentement mutuel peut se conclure sans audience, par acte d'avocat contresigné. Tour d'horizon de ce qui est négociable et de ce qui ne l'est pas.",
    date: '2024',
  },
  {
    slug: 'autorite-parentale-garde-alternee',
    title: 'Autorité parentale et résidence alternée',
    excerpt: "La résidence alternée n'est pas automatique. Elle suppose une entente minimale entre les parents et une organisation concrète. Ce qu'il faut savoir avant de l'envisager.",
    date: '2024',
  },
  {
    slug: 'succession-dettes-acceptation',
    title: 'Succession et dettes : accepter ou renoncer ?',
    excerpt: "Hériter d'une dette est possible. Avant d'accepter une succession, il est crucial de connaître l'actif et le passif du défunt. Les options offertes par la loi pour vous protéger.",
    date: '2024',
  },
]

export default function Ressources() {
  return (
    <section id="ressources" style={{ padding: '7rem 0', background: '#e8e4de' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b87060', marginBottom: '0.8rem' }}>
              Ressources
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#2a2d35',
            }}>
              Mieux comprendre vos droits
            </h2>
          </div>
          <Link href="/ressources" style={{
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#b87060', textDecoration: 'none', borderBottom: '1px solid rgba(184,112,96,0.35)',
            paddingBottom: '2px',
          }}>
            Tous les articles
          </Link>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {ARTICLES.map((a) => (
            <Link key={a.slug} href={`/ressources/${a.slug}`} style={{ textDecoration: 'none' }}>
              <article className="card-hover" style={{ background: '#f1f0ee', padding: '2.2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.40)', marginBottom: '1rem' }}>
                  {a.date}
                </p>
                <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontWeight: 400, color: '#2a2d35', lineHeight: 1.42, marginBottom: '1rem', flexGrow: 1 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.72, color: '#585d6a', marginBottom: '1.5rem' }}>
                  {a.excerpt}
                </p>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b87060', borderBottom: '1px solid rgba(184,112,96,0.35)', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                  Lire
                </span>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
