import { Monogram } from './Navbar'

const RDV_URL = 'https://prendreunrendezvous.fr/rendez-vous/56/avocat/me-laurence-beis'

export default function Footer() {
  return (
    <footer style={{ background: '#2c3140', color: 'rgba(241,240,238,0.65)', padding: '4rem 0 2.5rem' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-footer" style={{ gap: '2.5rem', marginBottom: '3.5rem' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem' }}>
              <Monogram size={36} color="rgba(241,240,238,0.50)" strokeWidth={1.0} />
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', color: 'rgba(241,240,238,0.80)', margin: 0 }}>Laurence Beis</p>
                <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(184,112,96,0.65)', margin: 0 }}>Avocate · Bazas</p>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.78, color: 'rgba(241,240,238,0.42)', maxWidth: '280px' }}>
              Avocate au Barreau de Bordeaux depuis 1993. Droit de la famille, des successions et du travail.
            </p>
          </div>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(241,240,238,0.30)', marginBottom: '1.2rem' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {['#cabinet', '#domaines', '#honoraires', '#ressources', '#contact'].map((href) => (
                <a key={href} href={href} style={{ fontSize: '0.82rem', color: 'rgba(241,240,238,0.55)', textDecoration: 'none' }}>
                  {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(241,240,238,0.30)', marginBottom: '1.2rem' }}>
              Cabinet
            </p>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.78, color: 'rgba(241,240,238,0.42)', marginBottom: '1rem' }}>
              8 rue du Maréchal de Lattre de Tassigny<br />33430 Bazas
            </p>
            <a href="tel:+33556651817" style={{ fontSize: '0.82rem', color: 'rgba(241,240,238,0.55)', textDecoration: 'none', display: 'block', marginBottom: '0.4rem' }}>05 56 65 18 17</a>
            <a href="mailto:beis.avocat@gmail.com" style={{ fontSize: '0.82rem', color: 'rgba(241,240,238,0.55)', textDecoration: 'none', display: 'block', marginBottom: '1.5rem' }}>beis.avocat@gmail.com</a>
            <a href={RDV_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(241,240,238,0.20)', color: 'rgba(241,240,238,0.65)',
              padding: '0.55rem 1.2rem', textDecoration: 'none',
              fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Prendre rendez-vous
            </a>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(241,240,238,0.10)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.68rem', color: 'rgba(241,240,238,0.28)' }}>
            &copy; {new Date().getFullYear()} Maître Laurence Beis — Avocate au Barreau de Bordeaux
          </p>
          <p style={{ fontSize: '0.68rem', color: 'rgba(241,240,238,0.20)' }}>
            Membre du Barreau de Bordeaux — Case 10
          </p>
        </div>

      </div>
    </footer>
  )
}
