import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PHONE = '06 33 46 37 69'
const PHONE_HREF = 'tel:+33633463769'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-vert-900 shadow-xl' : 'bg-vert-900/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="MAZEAS Paysages — Accueil">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M32 6C32 6 12 18 12 36C12 47 21 56 32 56C43 56 52 47 52 36C52 18 32 6 32 6Z" fill="#52b788" />
              <path d="M32 56L32 24" stroke="#1a3a2a" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M32 40L20 28" stroke="#1a3a2a" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M32 40L44 28" stroke="#1a3a2a" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <div className="leading-tight">
              <div className="text-white font-heading font-bold text-xl tracking-tight">MAZEAS</div>
              <div className="text-vert-400 font-heading font-semibold text-xs tracking-[0.2em] uppercase">Paysages</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium font-body transition-colors duration-200 ${
                    isActive
                      ? 'bg-vert-700 text-white'
                      : 'text-vert-200 hover:text-white hover:bg-vert-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href={PHONE_HREF}
            className="hidden md:inline-flex items-center gap-2 bg-vert-600 hover:bg-vert-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-200 shadow-md"
          >
            <PhoneIcon />
            {PHONE}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-vert-800 transition-colors"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden border-t border-vert-800 py-4 space-y-1" aria-label="Navigation mobile">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium font-body transition-colors ${
                    isActive ? 'bg-vert-700 text-white' : 'text-vert-200 hover:bg-vert-800 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 flex items-center gap-2 bg-vert-600 text-white font-semibold px-4 py-3 rounded-xl"
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
