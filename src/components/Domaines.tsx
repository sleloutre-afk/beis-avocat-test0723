const FEATURED = {
  title: 'Droit de la famille',
  description: 'Divorce, séparation de corps, régimes matrimoniaux, autorité parentale, garde d\'enfants, pension alimentaire, médiation familiale. Maître Beis accompagne les familles depuis plus de trente ans avec engagement et rigueur.',
  icon: '/famille.svg',
}

const DOMAINES = [
  { title: 'Divorce & Séparation', icon: '/divorce.svg' },
  { title: 'Successions', icon: '/succession.svg' },
  { title: 'Droit du travail', icon: '/travail.svg' },
  { title: 'Droit des affaires', icon: '/societes.svg' },
  { title: 'Crédit & Surendettement', icon: '/credit.svg' },
  { title: 'Responsabilité civile', icon: '/corporel.svg' },
]

export default function Domaines() {
  return (
    <section id="domaines" style={{ padding: '7rem 0', background: '#e8e4de' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b87060', marginBottom: '0.8rem' }}>
            Domaines d'intervention
          </p>
          <h2 style={{
            fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
            fontWeight: 400, color: '#2a2d35',
          }}>
            Une pratique ancrée dans le quotidien
          </h2>
        </div>

        {/* Featured */}
        <div style={{
          background: '#3a404d', padding: 'clamp(1.5rem, 4vw, 3.5rem)',
          display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}>
          <img src={FEATURED.icon} alt="" aria-hidden style={{ width: '48px', height: '48px', opacity: 0.75, filter: 'brightness(0) invert(1)', flexShrink: 0 }} />
          <div>
            <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.45rem', fontWeight: 400, color: '#f1f0ee', marginBottom: '1rem' }}>
              {FEATURED.title}
            </h3>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.82, color: 'rgba(241,240,238,0.65)' }}>
              {FEATURED.description}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3" style={{ gap: '1px', background: '#d4cfc8' }}>
          {DOMAINES.map((d) => (
            <div key={d.title} className="card-hover" style={{
              background: '#f1f0ee', padding: '2.2rem 2rem',
              display: 'flex', alignItems: 'flex-start', gap: '1.2rem',
            }}>
              <img src={d.icon} alt="" aria-hidden style={{ width: '32px', height: '32px', opacity: 0.40, flexShrink: 0, marginTop: '2px' }} />
              <p style={{ fontSize: '0.88rem', color: '#2a2d35', lineHeight: 1.55 }}>{d.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
