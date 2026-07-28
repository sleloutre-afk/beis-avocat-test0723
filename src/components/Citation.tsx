export default function Citation() {
  return (
    <section style={{ padding: '7rem 0', background: '#3a404d' }}>
      <div className="max-w-6xl mx-auto px-6" style={{ textAlign: 'center' }}>

        <div style={{ fontSize: '4rem', color: 'rgba(184,112,96,0.40)', lineHeight: 1, marginBottom: '1.5rem', fontFamily: 'Georgia, serif' }}>
          &ldquo;
        </div>
        <p style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'rgba(241,240,238,0.88)',
          lineHeight: 1.72,
          maxWidth: '680px',
          margin: '0 auto 2rem',
        }}>
          Trente années au service des familles et des justiciables de ce territoire m'ont appris que chaque situation est unique. Mon rôle est d'être à votre écoute, de vous expliquer clairement vos droits et de défendre vos intérêts avec rigueur.
        </p>
        <p style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(184,112,96,0.70)' }}>
          Maître Laurence Beis
        </p>

      </div>
    </section>
  )
}
