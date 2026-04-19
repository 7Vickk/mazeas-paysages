import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const NAV = [
  { to: '/',            label: 'Accueil' },
  { to: '/services',    label: 'Services' },
  { to: '/realisations',label: 'Réalisations' },
  { to: '/a-propos',    label: 'À propos' },
  { to: '/contact',     label: 'Contact' },
]

const SERVICES = ['Entretien de jardins','Création paysagère','Taille de haies',"Élagage d'arbres",'Tonte de pelouses','Terrassement','Pose de clôtures','Engazonnement']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bark)' }}>
      <div className="container pt-16 pb-10">
        {/* Top rule */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px" style={{ background: 'rgba(130,173,108,0.18)' }} />
          <svg width="20" height="20" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M32 4C32 4 12 18 12 36C12 47 20 56 32 56C44 56 52 47 52 36C52 18 32 4 32 4Z" fill="#4E8A35" opacity="0.7"/>
          </svg>
          <div className="flex-1 h-px" style={{ background: 'rgba(130,173,108,0.18)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-4">
            <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', color: '#F2EDE2', fontSize: '1.9rem', fontWeight: 600, lineHeight: 1, marginBottom: '0.25rem' }}>
              MAZEAS
              <span style={{ color: '#82AD6C', fontStyle: 'italic', marginLeft: '0.4rem' }}>Paysages</span>
            </div>
            <p className="text-sm mt-4 mb-6 leading-relaxed" style={{ color: '#82AD6C' }}>
              Paysagiste professionnel basé à Saint-Philbert-de-Grand-Lieu, au service des jardins de Loire-Atlantique et Vendée.
            </p>
            <address className="not-italic flex flex-col gap-3 text-sm" style={{ color: '#B8D4A4' }}>
              <span className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: '#4E8A35' }} />
                Saint-Philbert-de-Grand-Lieu, 44310
              </span>
              <a href="tel:+33633463769" className="flex items-center gap-2.5 link-draw" style={{ color: '#B8D4A4' }}>
                <Phone size={14} style={{ color: '#4E8A35' }} />
                06 33 46 37 69
              </a>
              <a href="mailto:mazeaspaysage@orange.fr" className="flex items-center gap-2.5 link-draw" style={{ color: '#B8D4A4' }}>
                <Mail size={14} style={{ color: '#4E8A35' }} />
                mazeaspaysage@orange.fr
              </a>
            </address>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-xs uppercase tracking-widest mb-5 font-sans font-medium" style={{ color: '#4E8A35' }}>Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV.map(n => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm link-draw" style={{ color: '#B8D4A4' }}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-widest mb-5 font-sans font-medium" style={{ color: '#4E8A35' }}>Prestations</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {SERVICES.map(s => (
                <li key={s} className="text-sm" style={{ color: '#82AD6C' }}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-8" style={{ borderTop: '1px solid rgba(130,173,108,0.12)' }}>
          <p className="text-xs font-sans" style={{ color: 'rgba(130,173,108,0.5)' }}>© {year} MAZEAS Paysages. Tous droits réservés.</p>
          <p className="text-xs font-sans" style={{ color: 'rgba(130,173,108,0.5)' }}>Paysagiste en Loire-Atlantique (44) — Saint-Philbert-de-Grand-Lieu</p>
        </div>
      </div>
    </footer>
  )
}
