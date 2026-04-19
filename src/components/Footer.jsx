import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
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
    <footer className="bg-vert-950 text-white" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-2xl mb-1">
              MAZEAS <span className="text-vert-400">Paysages</span>
            </div>
            <p className="text-vert-400 text-sm mb-6 leading-relaxed">
              Votre paysagiste de confiance en Loire-Atlantique et Vendée depuis plusieurs années.
            </p>
            <address className="not-italic flex flex-col gap-3 text-sm text-vert-300">
              <span className="flex items-start gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Saint-Philbert-de-Grand-Lieu, 44310 Loire-Atlantique
              </span>
              <a href="tel:+33633463769" className="flex items-center gap-2.5 hover:text-vert-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                06 33 46 37 69
              </a>
              <a href="mailto:mazeaspaysage@orange.fr" className="flex items-center gap-2.5 hover:text-vert-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                mazeaspaysage@orange.fr
              </a>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-5 text-white">Navigation</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-vert-300">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-vert-400 transition-colors flex items-center gap-1.5">
                    <span className="text-vert-600">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-5 text-white">Nos services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-vert-300">
              {services.map(s => (
                <li key={s} className="flex items-start gap-1.5">
                  <span className="text-vert-600 mt-px">›</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-vert-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-vert-500">
          <p>© {year} MAZEAS Paysages. Tous droits réservés.</p>
          <p>Paysagiste à Saint-Philbert-de-Grand-Lieu — Loire-Atlantique (44)</p>
        </div>
      </div>
    </footer>
  )
}
