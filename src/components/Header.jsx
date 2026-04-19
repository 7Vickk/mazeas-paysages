import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Menu, X } from 'lucide-react'

const NAV = [
  { to: '/',           label: 'Accueil' },
  { to: '/services',   label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos',   label: 'À propos' },
  { to: '/contact',    label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()
  const isHome                  = pathname === '/'

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pillMode = scrolled
  const alwaysDark = !isHome

  return (
    <>
      <motion.header
        layout
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={[
          'fixed z-50 transition-all duration-500',
          pillMode
            ? 'top-4 left-4 right-4 md:left-8 md:right-8 rounded-2xl shadow-2xl'
            : 'top-0 left-0 right-0',
        ].join(' ')}
        style={{
          background: pillMode
            ? 'rgba(17,16,8,0.92)'
            : alwaysDark ? 'var(--ink)' : 'transparent',
          backdropFilter: pillMode ? 'blur(20px)' : 'none',
          borderBottom: !pillMode && !alwaysDark ? '1px solid transparent' : 'none',
          border: pillMode ? '1px solid rgba(255,255,255,0.07)' : undefined,
        }}
      >
        <div className="container flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <svg width="34" height="34" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <path d="M32 6C32 6 10 20 10 38C10 50 20 58 32 58C44 58 54 50 54 38C54 20 32 6 32 6Z" fill="#4E8A35" opacity="0.9"/>
              <path d="M32 58L32 26" stroke="#1B3A18" strokeWidth="3.5" strokeLinecap="round"/>
              <path d="M32 42L20 30" stroke="#1B3A18" strokeWidth="3.5" strokeLinecap="round"/>
              <path d="M32 42L44 30" stroke="#1B3A18" strokeWidth="3.5" strokeLinecap="round"/>
            </svg>
            <div className="leading-none">
              <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#F2EDE2', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1 }}>
                MAZEAS
              </div>
              <div style={{ fontFamily: '"DM Sans", sans-serif', color: '#82AD6C', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', lineHeight: 1.6 }}>
                Paysages
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {NAV.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) => [
                  'px-4 py-2 text-sm rounded-xl transition-all duration-200',
                  'font-sans',
                  isActive
                    ? 'text-[#4E8A35] bg-white/5 font-medium'
                    : 'text-[#B8D4A4] hover:text-[#F2EDE2] hover:bg-white/5',
                ].join(' ')}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* Phone pill */}
          <a
            href="tel:+33633463769"
            className="hidden md:inline-flex items-center gap-2 text-sm font-sans font-medium rounded-xl px-4 py-2.5 transition-all duration-200"
            style={{ background: 'var(--fern)', color: '#fff' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--leaf)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--fern)'}
          >
            <Phone size={14} />
            06 33 46 37 69
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: '#F2EDE2' }}
            aria-label={open ? 'Fermer' : 'Menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-8"
            style={{ background: 'var(--ink)' }}
          >
            <nav className="flex flex-col gap-1 flex-1">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.05 }}
                >
                  <NavLink
                    to={n.to}
                    end={n.to === '/'}
                    className={({ isActive }) => [
                      'block py-4 border-b font-display text-4xl font-semibold tracking-tight transition-colors duration-200',
                      isActive
                        ? 'text-[#4E8A35] border-[#2E5A1E]'
                        : 'text-[#E6DFD0] border-[#1E1509] hover:text-[#82AD6C]',
                    ].join(' ')}
                  >
                    {n.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <a
                href="tel:+33633463769"
                className="flex items-center gap-3 text-base font-sans mt-8"
                style={{ color: '#82AD6C' }}
              >
                <Phone size={18} />
                06 33 46 37 69
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
