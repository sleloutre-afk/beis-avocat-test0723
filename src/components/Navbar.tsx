'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const RDV_URL = 'https://prendreunrendezvous.fr/rendez-vous/56/avocat/me-laurence-beis'

const LINKS = [
  { href: '#cabinet', label: 'Cabinet' },
  { href: '#domaines', label: 'Domaines' },
  { href: '#honoraires', label: 'Honoraires' },
  { href: '#ressources', label: 'Ressources' },
  { href: '#contact', label: 'Contact' },
]

export function Monogram({ size = 48, color = '#b87060', strokeWidth = 1.2 }: { size?: number; color?: string; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="27" stroke={color} strokeWidth={strokeWidth} />
      <circle cx="30" cy="30" r="23" stroke={color} strokeWidth="0.4" opacity="0.4" />
      <text
        x="30" y="34"
        textAnchor="middle"
        fill={color}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11"
        letterSpacing="2"
        fontStyle="italic"
      >
        LBA
      </text>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const textDark = '#2a2d35'
  const textLight = '#f1f0ee'
  const accent = '#b87060'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.3s, box-shadow 0.3s',
      background: scrolled ? 'rgba(241,240,238,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 24px rgba(42,45,53,0.08)' : 'none',
    }}>
      <div className="max-w-6xl mx-auto px-6" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', textDecoration: 'none' }}>
          <Monogram size={40} color={scrolled ? accent : 'rgba(241,240,238,0.85)'} strokeWidth={1.2} />
          <div>
            <p style={{ fontFamily: 'var(--font-playfair)', fontSize: '0.88rem', fontWeight: 400, color: scrolled ? textDark : textLight, margin: 0, lineHeight: 1.2, transition: 'color 0.3s' }}>Laurence Beis</p>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: scrolled ? 'rgba(184,112,96,0.85)' : 'rgba(241,240,238,0.60)', margin: 0, textTransform: 'uppercase', transition: 'color 0.3s' }}>Avocate · Bazas</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="nav-desktop" style={{ gap: '2.4rem' }}>
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: scrolled ? textDark : 'rgba(241,240,238,0.85)', textDecoration: 'none', transition: 'color 0.3s' }}>
              {label}
            </Link>
          ))}
          <a href={RDV_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', background: accent, color: textLight, padding: '0.55rem 1.3rem', textDecoration: 'none', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Prendre rendez-vous
          </a>
        </div>

        {/* Burger */}
        <button className="nav-burger" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu">
          {[0, 1, 2].map(i => (
            <span key={i} style={{ display: 'block', width: '22px', height: '1.5px', background: scrolled ? textDark : textLight, transition: 'transform 0.2s, opacity 0.2s',
              transform: i === 0 && open ? 'rotate(45deg) translate(4px,4px)' : i === 2 && open ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              opacity: i === 1 && open ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(241,240,238,0.97)', padding: '8px 24px 24px', borderTop: '1px solid rgba(42,45,53,0.08)' }}>
          {LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: textDark, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid rgba(42,45,53,0.07)', textDecoration: 'none' }}>
              {label}
            </Link>
          ))}
          <a href={RDV_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            style={{ display: 'block', marginTop: '1rem', padding: '0.8rem 1.2rem', background: accent, color: textLight, fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center' }}>
            Prendre rendez-vous
          </a>
        </div>
      )}
    </nav>
  )
}
