const GOOGLE_URL = 'https://www.google.com/search?sa=X&sca_esv=5e6c1f1176e333b8&rlz=1C5CHFA_enFR1032FR1035&biw=1440&bih=636&sxsrf=APpeQnvGecI2HV6wR_QL8j3Ba5Mwkg8l4w:1785244298830&q=Beis%20Laurence%20Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2N7UwMzIztjQ0NzQ2MTc0MTQw28DI-IpRyCk1s1jBJ7G0KDUvOVXBsSyzeBErFkEAmTVzfEQAAAA&rldimm=7586263917134714106&tbm=lcl&hl=fr-FR&ved=0CAcQ5foLahcKEwjw78KiufWVAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2t0SVNtOUpjM2syVjA1VE5WTkxjbUpFVUZaTE9YYxAB'

const AVIS = [
  {
    auteur: 'Muriel Etchegoyhen',
    note: 5,
    texte: "Besoin de conseil, j'ai contacté Me Beis, très pro et très à l'écoute — elle a su me conseiller, et de ce fait je l'ai recontactée pour mon dossier, toujours autant à l'écoute, sans jugement. À ce jour elle est devenue mon avocate et j'ai une entière confiance en elle. Merci pour sa présence et son professionnalisme.",
    date: 'Février 2026',
  },
  {
    auteur: 'Cédric Dupiol',
    note: 5,
    texte: "C'est notre avocate de famille depuis longtemps. Elle sait traiter et gagner des affaires différentes avec un travail rigoureux et constant. Conseils, écoute, professionnalisme et discrétion sont les maîtres mots qui la caractérisent. Une avocate à ne pas louper.",
    date: 'Janvier 2022',
  },
  {
    auteur: 'Sherine Achard',
    note: 5,
    texte: "Maître Beis est une femme qui dégage de la prestance, méthodique et rigoureuse dans son travail. Merci pour tout ce que vous aviez fait pour nous. Allez-y les yeux fermés !",
    date: 'Juin 2022',
  },
]

function Stars({ note }: { note: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.8rem' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < note ? '#b87060' : 'none'} stroke="#b87060" strokeWidth="1.5">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  )
}

export default function Avis() {
  return (
    <section style={{ padding: '7rem 0', background: '#f1f0ee' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b87060', marginBottom: '0.8rem' }}>
              Avis clients
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#2a2d35',
            }}>
              Ce que disent nos clients
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', fontStyle: 'italic', color: '#2a2d35', lineHeight: 1 }}>4,6</p>
            <Stars note={5} />
            <p style={{ fontSize: '0.60rem', letterSpacing: '0.12em', color: 'rgba(42,45,53,0.45)', textTransform: 'uppercase' }}>17 avis · Google</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem', marginBottom: '2.5rem' }}>
          {AVIS.map((a) => (
            <div key={a.auteur} style={{ background: '#e8e4de', padding: '2.2rem', display: 'flex', flexDirection: 'column' }}>
              <Stars note={a.note} />
              <p style={{ fontSize: '0.88rem', lineHeight: 1.78, color: '#2a2d35', flexGrow: 1, marginBottom: '1.5rem' }}>
                &ldquo;{a.texte}&rdquo;
              </p>
              <div style={{ borderTop: '1px solid rgba(42,45,53,0.10)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <p style={{ fontSize: '0.75rem', color: '#2a2d35', fontWeight: 400 }}>{a.auteur}</p>
                <p style={{ fontSize: '0.60rem', letterSpacing: '0.10em', color: 'rgba(42,45,53,0.38)', textTransform: 'uppercase' }}>{a.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#b87060', textDecoration: 'none',
            borderBottom: '1px solid rgba(184,112,96,0.35)', paddingBottom: '2px',
          }}>
            Voir tous les avis sur Google
          </a>
        </div>

      </div>
    </section>
  )
}
