import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12" />
        <path d="M2 12C2 6.48 6.48 2 12 2" />
        <path d="M12 6v6l4 2" />
        <path d="M7 17l-2 2" /><path d="M17 7l2-2" />
      </svg>
    ),
    title: 'Entretien de jardins',
    desc: 'Tonte, désherbage, taille et soins réguliers pour maintenir votre jardin en parfait état toute l\'année.',
    href: '/services#entretien',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M8 5.2A6 6 0 0 1 18 8c0 2.7-1.1 5.2-3 7" />
        <path d="M6 8a6 6 0 0 0 8.7 8.5" />
      </svg>
    ),
    title: 'Création paysagère',
    desc: 'Conception et réalisation de jardins sur mesure, espaces verts, massifs, rocailles et plantations.',
    href: '/services#creation',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3l18 18" /><path d="M7 7c0 0 3-3 8-3" /><path d="M17 17c0 0-3 3-8 3" />
        <path d="M3 12c0-2.5 1-4.5 2.5-6" /><path d="M21 12c0 2.5-1 4.5-2.5 6" />
      </svg>
    ),
    title: 'Taille & Élagage',
    desc: 'Taille de haies, arbustes et élagage d\'arbres réalisés avec soin pour la santé et l\'esthétique de vos végétaux.',
    href: '/services#taille',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Terrassement & Clôtures',
    desc: 'Terrassement, nivellement, pose de clôtures, portails et création d\'allées pour aménager votre extérieur.',
    href: '/services#terrassement',
  },
]

const zones = [
  'Saint-Philbert-de-Grand-Lieu',
  'Nantes',
  'Vertou',
  'Rezé',
  'Bouaye',
  'La Chevrolière',
  'Machecoul-Saint-Même',
  'Aigrefeuille-sur-Maine',
  'Clisson',
  'Saint-Colomban',
  'Geneston',
  'Legé',
]

const atouts = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'Devis gratuit & sans engagement',
    desc: 'Nous vous proposons un devis détaillé et personnalisé gratuitement, adapté à votre projet et à votre budget.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Intervention rapide',
    desc: 'Nous intervenons rapidement sur toute la Loire-Atlantique et le nord Vendée, dans des délais adaptés à vos besoins.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Qualité & professionnalisme',
    desc: 'Notre équipe qualifiée utilise un matériel professionnel et applique les meilleures pratiques pour des résultats durables.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MAZEAS Paysages | Paysagiste Saint-Philbert-de-Grand-Lieu — Nantes — Vendée</title>
        <meta name="description" content="Paysagiste professionnel à Saint-Philbert-de-Grand-Lieu. Entretien et création de jardins, taille de haies, élagage, terrassement. Intervention Nantes, Loire-Atlantique et Vendée. Devis gratuit : 06 33 46 37 69." />
      </Helmet>

      {/* Hero */}
      <section
        className="relative flex items-center justify-center min-h-screen bg-hero-gradient overflow-hidden pt-20"
        aria-label="Bienvenue chez MAZEAS Paysages"
      >
        {/* Decorative leaves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <svg className="absolute -top-16 -right-16 w-96 h-96 opacity-10" viewBox="0 0 200 200" fill="#52b788">
            <path d="M100 10C100 10 30 50 30 110C30 150 62 180 100 180C138 180 170 150 170 110C170 50 100 10 100 10Z" />
          </svg>
          <svg className="absolute -bottom-20 -left-20 w-80 h-80 opacity-10" viewBox="0 0 200 200" fill="#74c69d">
            <path d="M100 10C100 10 30 50 30 110C30 150 62 180 100 180C138 180 170 150 170 110C170 50 100 10 100 10Z" />
          </svg>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-vert-600 opacity-5"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                top: `${10 + i * 14}%`,
                left: `${-5 + i * 18}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-vert-700/60 text-vert-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Paysagiste — Loire-Atlantique
          </span>
          <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Votre jardin,<br />
            <span className="text-vert-400">notre passion</span>
          </h1>
          <p className="text-vert-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Paysagiste professionnel basé à <strong className="text-white">Saint-Philbert-de-Grand-Lieu</strong>,
            MAZEAS Paysages réalise l'entretien, la création et l'aménagement de vos espaces verts
            en Loire-Atlantique et Vendée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Demander un devis gratuit
            </Link>
            <Link to="/services" className="btn-secondary text-base">
              Découvrir nos services
            </Link>
          </div>

          {/* Quick contact bar */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-vert-300">
            <a href="tel:+33633463769" className="flex items-center gap-2 hover:text-vert-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              06 33 46 37 69
            </a>
            <span className="hidden sm:block text-vert-700">|</span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Loire-Atlantique & Vendée
            </span>
            <span className="hidden sm:block text-vert-700">|</span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Devis gratuit
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#74c69d" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Services overview */}
      <section className="section bg-white" aria-labelledby="services-heading">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-tag">Ce que nous faisons</span>
            <h2 id="services-heading" className="section-title mb-4">
              Nos services de paysagisme
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              De l'entretien courant à la création complète, nous prenons soin de vos espaces extérieurs
              avec expertise et passion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <Link
                key={s.title}
                to={s.href}
                className="card p-8 group flex flex-col items-start gap-4"
              >
                <div className="p-3 bg-vert-50 rounded-xl text-vert-700 group-hover:bg-vert-100 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-vert-900 text-lg">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{s.desc}</p>
                <span className="text-vert-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  En savoir plus
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section bg-vert-50" aria-labelledby="zone-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">Zone de couverture</span>
              <h2 id="zone-heading" className="section-title mb-4">
                Nous intervenons près de chez vous
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Basés à <strong className="text-vert-800">Saint-Philbert-de-Grand-Lieu</strong>,
                nous couvrons l'ensemble de la Loire-Atlantique et le nord de la Vendée.
                Contactez-nous pour vérifier notre disponibilité dans votre secteur.
              </p>
              <Link to="/contact" className="btn-primary">
                Demander un devis
              </Link>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-3" role="list" aria-label="Communes desservies">
                {zones.map(ville => (
                  <li
                    key={ville}
                    className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 text-sm font-medium text-vert-800 shadow-sm border border-vert-100"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-vert-500 shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {ville}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-400 mt-4 text-center">Et communes environnantes…</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="section bg-white" aria-labelledby="atouts-heading">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-tag">Nos engagements</span>
            <h2 id="atouts-heading" className="section-title">
              Pourquoi choisir MAZEAS Paysages ?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {atouts.map(a => (
              <div key={a.title} className="flex flex-col items-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-vert-100 flex items-center justify-center text-vert-700 mb-5">
                  {a.icon}
                </div>
                <h3 className="font-heading font-bold text-vert-900 text-lg mb-3">{a.title}</h3>
                <p className="text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-vert-800 py-16" aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 id="cta-heading" className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
            Prêt à embellir votre jardin ?
          </h2>
          <p className="text-vert-200 text-lg mb-8 max-w-xl mx-auto">
            Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement.
            Nous vous répondons rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33633463769" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              06 33 46 37 69
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
