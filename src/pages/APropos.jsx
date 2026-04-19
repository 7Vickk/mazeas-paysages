import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const valeurs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titre: 'Fiabilité',
    desc: 'Nous respectons nos engagements, nos délais et nos devis. Votre satisfaction est notre priorité absolue.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    titre: 'Écoute & conseil',
    desc: 'Nous prenons le temps de comprendre vos besoins et vos envies pour proposer des solutions parfaitement adaptées.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
    titre: 'Qualité de travail',
    desc: 'Chaque intervention est réalisée avec soin, en utilisant du matériel professionnel et des techniques appropriées.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M12 22V12" />
      </svg>
    ),
    titre: 'Ancrage local',
    desc: 'Entreprise basée à Saint-Philbert-de-Grand-Lieu, nous connaissons parfaitement la région et ses spécificités climatiques.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    titre: 'Respect de l\'environnement',
    desc: 'Nous favorisons des pratiques raisonnées : produits phytosanitaires limités, valorisation des déchets verts, choix d\'espèces locales.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    titre: 'Tarifs transparents',
    desc: 'Nos devis sont détaillés et sans surprise. Le prix convenu est le prix final, sans frais cachés.',
  },
]

const chiffres = [
  { valeur: '10+', label: 'années d\'expérience' },
  { valeur: '500+', label: 'chantiers réalisés' },
  { valeur: '44 & 85', label: 'départements couverts' },
  { valeur: '100%', label: 'devis gratuits' },
]

export default function APropos() {
  return (
    <>
      <Helmet>
        <title>À Propos | MAZEAS Paysages — Paysagiste Saint-Philbert-de-Grand-Lieu</title>
        <meta name="description" content="Découvrez MAZEAS Paysages, entreprise paysagiste familiale basée à Saint-Philbert-de-Grand-Lieu. Plus de 10 ans d'expérience en entretien et création de jardins en Loire-Atlantique et Vendée." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-vert-900 pt-32 pb-16">
        <div className="container text-center">
          <span className="section-tag text-vert-400">Notre histoire</span>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-1 mb-4">
            À propos
          </h1>
          <p className="text-vert-300 text-lg max-w-2xl mx-auto">
            Une entreprise familiale passionnée par la nature et dédiée à l'embellissement
            de vos espaces extérieurs depuis de nombreuses années.
          </p>
        </div>
      </div>

      {/* Présentation */}
      <section className="section bg-white" aria-labelledby="presentation-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Placeholder image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-vert-800 to-vert-500 rounded-2xl aspect-[4/3] flex items-center justify-center" aria-hidden="true">
                <div className="text-center text-white/40">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="mx-auto mb-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm">Photo de l'équipe</p>
                </div>
              </div>
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 bg-vert-700 text-white rounded-2xl p-5 shadow-lg text-center">
                <div className="font-heading font-extrabold text-3xl">10+</div>
                <div className="text-vert-300 text-xs mt-1">ans d'expérience</div>
              </div>
            </div>

            <div>
              <span className="section-tag">Qui sommes-nous</span>
              <h2 id="presentation-heading" className="section-title mb-6">
                MAZEAS Paysages,<br />votre paysagiste local
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Basée à <strong className="text-vert-800">Saint-Philbert-de-Grand-Lieu</strong>,
                  au cœur de la Loire-Atlantique, l'entreprise MAZEAS Paysages est spécialisée dans
                  l'entretien et la création d'espaces verts pour les particuliers et professionnels.
                </p>
                <p>
                  Avec plus de 10 ans d'expérience dans le paysagisme, notre équipe qualifiée
                  intervient sur l'ensemble de la Loire-Atlantique et le nord de la Vendée,
                  apportant son savoir-faire pour chaque projet, qu'il soit grand ou petit.
                </p>
                <p>
                  Notre philosophie : <em className="text-vert-700">écouter, conseiller et réaliser.</em>
                  Nous prenons le temps de comprendre vos envies pour créer ou entretenir l'espace
                  extérieur qui vous ressemble, en respectant votre budget et l'environnement.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-vert-50 py-14" aria-label="Chiffres clés">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {chiffres.map(c => (
              <div key={c.label} className="text-center p-6">
                <div className="font-heading font-extrabold text-vert-700 text-4xl mb-2">{c.valeur}</div>
                <div className="text-gray-500 text-sm">{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section bg-white" aria-labelledby="valeurs-heading">
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-tag">Ce qui nous guide</span>
            <h2 id="valeurs-heading" className="section-title">Nos valeurs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valeurs.map(v => (
              <div key={v.titre} className="flex gap-4 p-6 rounded-2xl bg-vert-50 hover:bg-vert-100 transition-colors">
                <div className="text-vert-700 shrink-0 mt-0.5">{v.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-vert-900 mb-2">{v.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section bg-vert-800" aria-labelledby="zone-heading">
        <div className="container text-center">
          <span className="section-tag text-vert-400">Notre territoire</span>
          <h2 id="zone-heading" className="font-heading font-bold text-white text-3xl mb-4">
            Zone d'intervention
          </h2>
          <p className="text-vert-200 mb-8 max-w-xl mx-auto">
            Nous intervenons principalement sur la Loire-Atlantique (44) et le nord de la
            Vendée (85), dans un rayon d'environ 40 km autour de Saint-Philbert-de-Grand-Lieu.
          </p>
          <Link to="/contact" className="btn-primary">
            Vérifier notre disponibilité
          </Link>
        </div>
      </section>
    </>
  )
}
