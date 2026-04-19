import { Link } from 'react-router-dom'

const navLinks = [
  { to: '/',             label: 'Accueil'      },
  { to: '/services',     label: 'Services'     },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos',     label: 'À propos'     },
  { to: '/contact',      label: 'Contact'      },
]

const services = [
  'Entretien de jardins',
  'Création paysagère',
  'Taille de haies',
  "Élagage d'arbres",
  'Tonte de pelouses',
  'Terrassement',
  'Pose de clôtures',
  'Engazonnement',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-950" aria-label="Pied de page">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" aria-hidden="true" />

      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" aria-label="MAZEAS Paysages — Accueil" className="inline-block mb-6 group">
              <span className="font-display font-bold text-[2rem] text-cream tracking-tight block group-hover:text-gold transition-colors duration-300">
                MAZEAS
              </span>
              <span className="font-dm text-[8px] uppercase tracking-[0.38em] text-cream/28 block -mt-1 group-hover:text-gold/50 transition-colors duration-300">
                Paysages
              </span>
            </Link>

            <p className="font-dm text-sm text-cream/42 mb-8 leading-relaxed max-w-xs">
              Votre paysagiste de confiance en Loire-Atlantique et Vendée.
              Création, entretien et aménagement de vos espaces verts.
            </p>

            <address className="not-italic flex flex-col gap-4 font-dm text-sm text-cream/42">
              <span className="flex items-start gap-3">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-gold/55" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Saint-Philbert-de-Grand-Lieu, 44310 Loire-Atlantique
              </span>
              <a href="tel:+33633463769" className="flex items-center gap-3 hover:text-gold transition-colors duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold/55" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                06 33 46 37 69
              </a>
              <a href="mailto:mazeaspaysage@orange.fr" className="flex items-center gap-3 hover:text-gold transition-colors duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold/55" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                mazeaspaysage@orange.fr
              </a>
              <span className="flex items-center gap-3">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-gold/55" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                Lun–Ven, 8h–18h
              </span>
            </address>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-dm font-medium text-[0.65rem] uppercase tracking-[0.22em] text-cream/28 mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-dm text-sm text-cream/45 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h3 className="font-dm font-medium text-[0.65rem] uppercase tracking-[0.22em] text-cream/28 mb-6">
              Nos services
            </h3>
            <ul className="flex flex-col gap-3.5">
              {services.map(s => (
                <li key={s} className="font-dm text-sm text-cream/45">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-forest-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-dm text-xs text-cream/22">
            © {year} MAZEAS Paysages. Tous droits réservés.
          </p>
          <p className="font-dm text-xs text-cream/22">
            Paysagiste à Saint-Philbert-de-Grand-Lieu — Loire-Atlantique (44)
          </p>
        </div>
      </div>
    </footer>
  )
}
