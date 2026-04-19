import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const PHONE      = '06 33 46 37 69'
const PHONE_HREF = 'tel:+33633463769'

const navLinks = [
  { to: '/',            label: 'Accueil'      },
  { to: '/services',    label: 'Services'     },
  { to: '/realisations',label: 'Réalisations' },
  { to: '/a-propos',    label: 'À propos'     },
  { to: '/contact',     label: 'Contact'      },
]

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-900 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Logo */}
          <Link
            to="/"
            className="group flex flex-col leading-none"
            aria-label="MAZEAS Paysages — Accueil"
          >
            <span className="font-display font-bold text-[1.6rem] text-cream tracking-tight group-hover:text-gold transition-colors duration-300">
              MAZEAS
            </span>
            <span className="font-dm text-[8px] uppercase tracking-[0.38em] text-cream/35 group-hover:text-gold/55 transition-colors duration-300 -mt-0.5">
              Paysages
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Navigation principale">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative font-dm text-[0.8rem] tracking-wide pb-px transition-colors duration-200
                   after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold
                   after:transition-[width] after:duration-300
                   ${isActive
                    ? 'text-gold after:w-full'
                    : 'text-cream/65 hover:text-cream after:w-0 hover:after:w-full'
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
            aria-label={`Appeler MAZEAS Paysages au ${PHONE}`}
            className="hidden md:inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light
                       text-forest-900 font-dm font-medium text-sm px-5 py-2.5
                       transition-colors duration-200"
          >
            <PhoneIcon />
            {PHONE}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-cream p-2 -mr-2"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-forest-900 border-t border-forest-800">
          <nav className="container py-6 flex flex-col" aria-label="Navigation mobile">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-dm py-3.5 text-sm border-b border-forest-800/60 transition-colors ${
                    isActive ? 'text-gold' : 'text-cream/65 hover:text-cream'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-5 inline-flex items-center gap-2.5 bg-gold text-forest-900 font-dm font-medium text-sm px-5 py-3 self-start"
            >
              <PhoneIcon />
              {PHONE}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
