const STATS = [
  { value: '1993', label: 'Prestation de serment' },
  { value: 'Case 10', label: 'Barreau de Bordeaux' },
  { value: 'FR / EN', label: 'Consultations bilingues' },
  { value: 'AJ', label: 'Aide juridictionnelle acceptée' },
]

export default function StatsBar() {
  return (
    <div style={{ background: '#e8e4de', borderTop: '1px solid #d4cfc8', borderBottom: '1px solid #d4cfc8' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className={i < STATS.length - 1 ? 'stat-sep' : undefined} style={{
              padding: '1.8rem 1.2rem',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.05rem', fontStyle: 'italic', color: '#2a2d35', marginBottom: '0.3rem' }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.50)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
