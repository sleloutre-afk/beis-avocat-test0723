import { ARTICLES, getArticle } from '@/lib/articles'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  return (
    <main style={{ minHeight: '100vh', background: '#f1f0ee' }}>
      <div style={{ background: '#3a404d', padding: '9rem 0 4rem' }}>
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/ressources" style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(241,240,238,0.45)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
            &larr; Ressources
          </Link>
          <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(184,112,96,0.70)', marginBottom: '0.8rem' }}>
            {article.date}
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', fontWeight: 400, color: '#f1f0ee', lineHeight: 1.22 }}>
            {article.title}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6" style={{ padding: '4rem 1.5rem 6rem' }}>
        <div
          style={{ fontSize: '0.95rem', lineHeight: 1.88, color: '#2a2d35' }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div style={{ marginTop: '4rem', padding: '2.5rem', background: '#e8e4de', borderLeft: '3px solid #b87060' }}>
          <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '1rem', color: '#2a2d35', marginBottom: '0.6rem' }}>
            Une question sur votre situation ?
          </p>
          <p style={{ fontSize: '0.85rem', color: '#585d6a', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Maître Beis reçoit sur rendez-vous à Bazas. Prenez contact pour une première consultation.
          </p>
          <a href="https://prendreunrendezvous.fr/rendez-vous/56/avocat/me-laurence-beis" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#b87060', color: '#f1f0ee',
            padding: '0.8rem 2rem', textDecoration: 'none',
            fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase',
          }}>
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </main>
  )
}
