const RDV_URL = 'https://prendreunrendezvous.fr/rendez-vous/56/avocat/me-laurence-beis'

const MODES = [
  {
    title: 'Temps passé',
    description: 'Pour les dossiers de contentieux et les missions de durée incertaine, les honoraires sont calculés au temps passé. Un devis estimatif est fourni en début de mission.',
  },
  {
    title: 'Forfait',
    description: "Pour certaines prestations délimitées — divorce par consentement mutuel, rédaction d'actes, consultation ponctuelle — un forfait est convenu à l'avance, en toute transparence.",
  },
  {
    title: 'Aide juridictionnelle',
    description: "Maître Beis accepte l'aide juridictionnelle totale et partielle. Les personnes dont les ressources sont modestes peuvent bénéficier d'une prise en charge par l'État.",
  },
]

export default function Honoraires() {
  return (
    <section id="honoraires" style={{ padding: '7rem 0', background: '#f1f0ee' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid-2col" style={{ gap: '5rem', alignItems: 'start' }}>

          <div>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b87060', marginBottom: '0.8rem' }}>
              Honoraires
            </p>
            <h2 style={{
              fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
              fontWeight: 400, color: '#2a2d35', marginBottom: '1.8rem', lineHeight: 1.22,
            }}>
              Une transparence sur les coûts
            </h2>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.85, color: '#585d6a', marginBottom: '2.2rem' }}>
              Avant tout engagement, Maître Beis vous remet une convention d'honoraires précisant les modalités de calcul et un montant prévisionnel. Aucune surprise en cours de dossier : toute évolution significative vous est signalée en amont.
            </p>
            <a href={RDV_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#b87060', color: '#f1f0ee',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Prendre rendez-vous
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {MODES.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ width: '2px', background: '#b87060', flexShrink: 0, marginTop: '4px', height: '100%', minHeight: '3rem', opacity: 0.5 }} />
                <div>
                  <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', fontWeight: 400, color: '#2a2d35', marginBottom: '0.6rem' }}>
                    {m.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.78, color: '#585d6a' }}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
