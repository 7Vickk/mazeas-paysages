import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const categories = ['Tous', 'Création', 'Entretien', 'Élagage', 'Terrassement', 'Clôtures']

const projets = [
  { id: 1, titre: 'Jardin contemporain — Vertou',           categorie: 'Création',     localite: 'Vertou (44)',                   desc: 'Création d\'un jardin contemporain avec terrasse en bois composite, massifs structurés et gazon.' },
  { id: 2, titre: 'Entretien annuel — Nantes Sud',          categorie: 'Entretien',    localite: 'Nantes (44)',                   desc: 'Contrat d\'entretien annuel : tonte hebdomadaire, taille saisonnière des haies et massifs.' },
  { id: 3, titre: 'Élagage de chênes — Bouaye',             categorie: 'Élagage',      localite: 'Bouaye (44)',                   desc: 'Élagage de plusieurs chênes centenaires, sécurisation et démontage en sections.' },
  { id: 4, titre: 'Terrassement et allées — Machecoul',     categorie: 'Terrassement', localite: 'Machecoul-Saint-Même (44)',     desc: 'Terrassement complet, création d\'allées en graviers stabilisés et bordures béton.' },
  { id: 5, titre: 'Clôture panneau rigide — Saint-Philbert',categorie: 'Clôtures',     localite: 'Saint-Philbert-de-Grand-Lieu', desc: 'Pose de 80 ml de clôture en panneau rigide avec portail double battant.' },
  { id: 6, titre: 'Jardin naturel — Clisson',               categorie: 'Création',     localite: 'Clisson (44)',                  desc: 'Transformation en jardin naturel : prairie fleurie, haie bocagère et bassin de rétention.' },
  { id: 7, titre: 'Entretien résidence — Rezé',             categorie: 'Entretien',    localite: 'Rezé (44)',                     desc: 'Entretien des espaces verts d\'une résidence : tonte, soufflage, taille de 120 ml de haies.' },
  { id: 8, titre: 'Abattage et dessouchage — Legé',         categorie: 'Élagage',      localite: 'Legé (44)',                     desc: 'Abattage de pins parasols en limite de propriété, dessouchage et remise en état.' },
  { id: 9, titre: 'Aménagement paysager — Aigrefeuille',    categorie: 'Création',     localite: 'Aigrefeuille-sur-Maine (44)',   desc: 'Aménagement complet d\'un jardin neuf : gazon en rouleau, massifs, clôture et éclairage.' },
]

function GrainOverlay() {
  return <div className="absolute inset-0 grain-bg pointer-events-none mix-blend-overlay opacity-25" aria-hidden="true" />
}

export default function Realisations() {
  const [filtre, setFiltre] = useState('Tous')

  const projetsAffiches = filtre === 'Tous' ? projets : projets.filter(p => p.categorie === filtre)

  return (
    <>
      <Helmet>
        <title>Nos Réalisations | MAZEAS Paysages — Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Découvrez les réalisations de MAZEAS Paysages : jardins créés, entretiens, élagages et terrassements en Loire-Atlantique et Vendée. Photos et descriptions de nos chantiers." />
      </Helmet>

      <PageHeader
        tag="Nos travaux"
        title={<>Réalisations<br /><em className="text-gold font-normal">& chantiers.</em></>}
        subtitle="Quelques-unes de nos interventions en Loire-Atlantique et Vendée. Chaque projet est unique, réalisé avec soin et professionnalisme."
      />

      <section className="py-24 md:py-32 bg-cream" aria-label="Portfolio des réalisations">
        <div className="container">

          {/* Filtres */}
          <Reveal className="flex flex-wrap gap-2 justify-center mb-14">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFiltre(cat)}
                aria-pressed={filtre === cat}
                className={`font-dm text-xs font-medium uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                  filtre === cat
                    ? 'bg-forest-900 text-cream border-forest-900'
                    : 'bg-transparent text-charcoal/50 border-cream-darker hover:border-forest-700 hover:text-forest-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Grille */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-darker">
            {projetsAffiches.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <article className="bg-cream flex flex-col group">

                  {/* Placeholder visuel */}
                  <div className="h-52 bg-forest-900 relative overflow-hidden" aria-hidden="true">
                    <div className="absolute inset-0 grain-bg mix-blend-overlay opacity-20" />

                    {/* Categorie en watermark */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-display font-bold text-forest-800 leading-none select-none"
                        style={{ fontSize: '4.5rem' }}
                      >
                        {p.categorie}
                      </span>
                    </div>

                    {/* Photo placeholder icon */}
                    <div className="absolute bottom-4 right-4 text-forest-700">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>

                    {/* Category badge */}
                    <span className="absolute top-4 left-4 font-dm text-[0.65rem] uppercase tracking-widest text-gold border border-gold/40 px-2.5 py-1">
                      {p.categorie}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <h2 className="font-display text-xl font-semibold text-forest-900 leading-snug">
                      {p.titre}
                    </h2>
                    <div className="flex items-center gap-2 font-dm text-xs text-gold">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {p.localite}
                    </div>
                    <p className="font-dm text-sm text-charcoal/55 leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-center font-dm text-xs text-charcoal/35 mt-10 tracking-wide">
              D'autres réalisations à venir — contactez-nous pour voir plus de photos de nos chantiers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28 bg-forest-950 overflow-hidden" aria-label="Votre projet">
        <GrainOverlay />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
        <Reveal className="container relative z-10 text-center">
          <div className="tag mb-5">Votre projet</div>
          <h2
            className="font-display font-bold text-cream mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Sera notre prochaine<br />
            <em className="text-gold">réalisation.</em>
          </h2>
          <p className="font-dm text-cream/50 mb-8 max-w-md mx-auto leading-relaxed">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <Link to="/contact" className="btn-gold">Demander un devis gratuit</Link>
        </Reveal>
      </section>
    </>
  )
}
