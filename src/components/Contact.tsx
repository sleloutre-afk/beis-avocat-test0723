import { Monogram } from './Navbar'

const RDV_URL = 'https://prendreunrendezvous.fr/rendez-vous/56/avocat/me-laurence-beis'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '7rem 0', background: '#f1f0ee' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

          {/* Coordonnées */}
          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b87060', marginBottom: '0.8rem' }}>
              Contact
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#2a2d35', marginBottom: '3rem', lineHeight: 1.22,
            }}>
              Prendre rendez-vous
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid rgba(42,45,53,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <img src="/office.svg" alt="" aria-hidden style={{ width: '16px', height: '16px', opacity: 0.45 }} />
                </div>
                <div>
                  <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.40)', marginBottom: '0.4rem' }}>Adresse</p>
                  <p style={{ fontSize: '0.92rem', color: '#2a2d35', lineHeight: 1.6 }}>
                    8 rue du Maréchal de Lattre de Tassigny<br />33430 Bazas
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid rgba(42,45,53,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(42,45,53,0.45)" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.11 19.79 19.79 0 01.78 .5 2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.84a16 16 0 006.29 6.29l1.1-1.1a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.40)', marginBottom: '0.4rem' }}>Téléphone</p>
                  <a href="tel:+33556651817" style={{ fontSize: '0.92rem', color: '#2a2d35', textDecoration: 'none' }}>05 56 65 18 17</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', border: '1px solid rgba(42,45,53,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(42,45,53,0.45)" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.40)', marginBottom: '0.4rem' }}>Email</p>
                  <a href="mailto:beis.avocat@gmail.com" style={{ fontSize: '0.92rem', color: '#2a2d35', textDecoration: 'none' }}>beis.avocat@gmail.com</a>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={RDV_URL} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center',
                background: '#b87060', color: '#f1f0ee',
                padding: '0.9rem 2.2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Prendre rendez-vous
              </a>
              <a href="tel:+33556651817" style={{
                display: 'inline-flex', alignItems: 'center',
                border: '1px solid rgba(42,45,53,0.25)', color: '#2a2d35',
                padding: '0.9rem 2.2rem', textDecoration: 'none',
                fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
              }}>
                Appeler
              </a>
            </div>
          </div>

          {/* Bureau photo */}
          <div style={{ position: 'relative', minHeight: '420px', background: '#3a404d', overflow: 'hidden' }}>
            <img
              src="/office.png"
              alt="Bureau de Maître Beis à Bazas"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, opacity: 0.75 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(44,49,64,0.55)' }} />
            {/* Monogram overlay */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Monogram size={120} color="rgba(241,240,238,0.18)" strokeWidth={0.8} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
