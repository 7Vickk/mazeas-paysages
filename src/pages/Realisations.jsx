import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const categories = ['Tous', 'Création', 'Entretien', 'Élagage', 'Terrassement', 'Clôtures']

const projets = [
  {
    id: 1,
    titre: 'Jardin contemporain — Vertou',
    categorie: 'Création',
    localite: 'Vertou (44)',
    desc: 'Création d\'un jardin contemporain avec terrasse en bois composite, massifs structurés et gazon.',
    color: 'from-vert-800 to-vert-600',
  },
  {
    id: 2,
    titre: 'Entretien annuel — Nantes Sud',
    categorie: 'Entretien',
    localite: 'Nantes (44)',
    desc: 'Contrat d\'entretien annuel : tonte hebdomadaire, taille saisonnière des haies et massifs.',
    color: 'from-vert-700 to-vert-500',
  },
  {
    id: 3,
    titre: 'Élagage de chênes — Bouaye',
    categorie: 'Élagage',
    localite: 'Bouaye (44)',
    desc: 'Élagage de plusieurs chênes centenaires, sécurisation et démontage en sections.',
    color: 'from-vert-900 to-vert-700',
  },
  {
    id: 4,
    titre: 'Terrassement et allées — Machecoul',
    categorie: 'Terrassement',
    localite: 'Machecoul-Saint-Même (44)',
    desc: 'Terrassement complet, création d\'allées en graviers stabilisés et bordures béton.',
    color: 'from-vert-600 to-vert-400',
  },
  {
    id: 5,
    titre: 'Clôture panneau rigide — Saint-Philbert',
    categorie: 'Clôtures',
    localite: 'Saint-Philbert-de-Grand-Lieu (44)',
    desc: 'Pose de 80 ml de clôture en panneau rigide avec portail double battant.',
    color: 'from-vert-800 to-vert-500',
  },
  {
    id: 6,
    titre: 'Jardin naturel — Clisson',
    categorie: 'Création',
    localite: 'Clisson (44)',
    desc: 'Transformation en jardin naturel : prairie fleurie, haie bocagère et bassin de rétention.',
    color: 'from-vert-700 to-vert-400',
  },
  {
    id: 7,
    titre: 'Entretien résidence — Rezé',
    categorie: 'Entretien',
    localite: 'Rezé (44)',
    desc: 'Entretien des espaces verts d\'une résidence : tonte, soufflage, taille de 120 ml de haies.',
    color: 'from-vert-600 to-vert-300',
  },
  {
    id: 8,
    titre: 'Abattage et dessouchage — Legé',
    categorie: 'Élagage',
    localite: 'Legé (44)',
    desc: 'Abattage de pins parasols en limite de propriété, dessouchage et remise en état du terrain.',
    color: 'from-vert-900 to-vert-600',
  },
  {
    id: 9,
    titre: 'Aménagement paysager — Aigrefeuille',
    categorie: 'Création',
    localite: 'Aigrefeuille-sur-Maine (44)',
    desc: 'Aménagement complet d\'un jardin neuf : gazon en rouleau, massifs, clôture et éclairage.',
    color: 'from-vert-700 to-vert-300',
  },
]

export default function Realisations() {
  const [filtre, setFiltre] = useState('Tous')

  const filtres = filtre === 'Tous' ? projets : projets.filter(p => p.categorie === filtre)

  return (
    <>
      <Helmet>
        <title>Nos Réalisations | MAZEAS Paysages — Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Découvrez les réalisations de MAZEAS Paysages : jardins créés, entretiens, élagages et terrassements en Loire-Atlantique et Vendée. Photos et descriptions de nos chantiers." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-vert-900 pt-32 pb-16">
        <div className="container text-center">
          <span className="section-tag text-vert-400">Nos travaux</span>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-1 mb-4">
            Nos réalisations
          </h1>
          <p className="text-vert-300 text-lg max-w-2xl mx-auto">
            Découvrez quelques-unes de nos interventions en Loire-Atlantique et Vendée.
            Chaque projet est unique, réalisé avec soin et professionnalisme.
          </p>
        </div>
      </div>

      {/* Filtres */}
      <section className="section bg-gray-50" aria-label="Portfolio des réalisations">
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-12" role="group" aria-label="Filtrer par catégorie">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filtre === cat
                    ? 'bg-vert-700 text-white shadow-md'
                    : 'bg-white text-vert-700 border border-vert-200 hover:border-vert-400 hover:bg-vert-50'
                }`}
                aria-pressed={filtre === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtres.map(p => (
              <article
                key={p.id}
                className="card overflow-hidden group"
              >
                {/* Placeholder image — à remplacer par une vraie photo */}
                <div className={`h-52 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`} aria-hidden="true">
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${20 + i * 15}px`,
                          height: `${20 + i * 15}px`,
                          top: `${Math.sin(i) * 40 + 30}%`,
                          left: `${(i * 13) % 90}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative text-center text-white/60 text-xs font-medium px-4">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-2 opacity-50">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                    Photo à venir
                  </div>
                  <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.categorie}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-heading font-bold text-vert-900 text-base leading-snug">
                      {p.titre}
                    </h2>
                  </div>
                  <p className="text-xs text-vert-600 font-semibold flex items-center gap-1 mb-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {p.localite}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-10">
            D'autres réalisations à venir. Contactez-nous pour voir plus de photos de nos chantiers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-vert-800" aria-label="Votre projet">
        <div className="container text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-vert-200 mb-8 max-w-xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <Link to="/contact" className="btn-primary">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  )
}
