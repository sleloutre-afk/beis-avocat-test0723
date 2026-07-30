export default function Cabinet() {
  return (
    <section id="cabinet" style={{ padding: '7rem 0', background: '#f1f0ee' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'start' }}>

          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '-1.5rem', left: '-1.5rem',
              width: '180px', height: '180px',
              background: 'rgba(184,112,96,0.08)',
            }} />
            <img
              src="/beis.png"
              alt="Maître Laurence Beis, avocate à Bazas"
              style={{
                position: 'relative', width: '100%', maxWidth: '460px',
                display: 'block', objectFit: 'cover',
                aspectRatio: '4/5',
              }}
            />
          </div>

          {/* Bio */}
          <div style={{ paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b87060', marginBottom: '1.2rem' }}>
              Le cabinet
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 400, color: '#2a2d35', lineHeight: 1.2, marginBottom: '2rem',
            }}>
              Maître Laurence Beis
            </h2>

            <div style={{ width: '36px', height: '2px', background: '#b87060', marginBottom: '2rem' }} />

            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#585d6a', marginBottom: '1.5rem' }}>
              Avocate au Barreau de Bordeaux depuis 1993, Maître Beis exerce à Bazas depuis plus de trente ans une pratique centrée sur les personnes et les familles. Sa longévité dans cette communauté lui confère une connaissance fine des réalités locales et une réputation fondée sur la durée.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#585d6a', marginBottom: '1.5rem' }}>
              Son cabinet accompagne les particuliers et les professionnels dans les moments décisifs de leur vie : séparations, héritages, conflits du travail ou difficultés de l'entreprise. Elle est également médiateur familial certifié et s'efforce, quand les circonstances s'y prêtent, de privilégier un règlement amiable des différends.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#585d6a', marginBottom: '2.4rem' }}>
              Maître Beis intervient tant en conseil qu'en contentieux, devant les juridictions du ressort de la Cour d'Appel de Bordeaux. Elle reçoit sur rendez-vous et accepte l'aide juridictionnelle.
            </p>

            <div style={{ display: 'flex', gap: '3rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#2a2d35' }}>+30</p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.45)', marginTop: '0.3rem' }}>Années d'exercice</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.6rem', fontStyle: 'italic', color: '#2a2d35' }}>Bazas</p>
                <p style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(42,45,53,0.45)', marginTop: '0.3rem' }}>Gironde · 33430</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
