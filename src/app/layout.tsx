import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maître Laurence Beis — Avocate à Bazas',
  description: 'Avocate au Barreau de Bordeaux depuis 1993, installée à Bazas. Droit de la famille, divorce, successions, droit du travail, droit des affaires.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${lato.variable}`} style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
