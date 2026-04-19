import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const valeurs = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titre: 'Fiabilité',
    desc: 'Nous respectons nos engagements, nos délais et nos devis. Votre satisfaction est notre priorité absolue.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    titre: 'Écoute & conseil',
    desc: 'Nous prenons le temps de comprendre vos besoins et vos envies pour proposer des solutions parfaitement adaptées.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M7 13l3 3 7-7" />
      </svg>
    ),
    titre: 'Qualité de travail',
    desc: 'Chaque intervention est réalisée avec soin, en utilisant du matériel professionnel et des techniques appropriées.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M12 22V12" />
      </svg>
    ),
    titre: 'Ancrage local',
    desc: 'Entreprise basée à Saint-Philbert-de-Grand-Lieu, nous connaissons parfaitement la région et ses spécificités climatiques.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    titre: 'Respect de l\'environnement',
    desc: 'Nous favorisons des pratiques raisonnées : produits phytosanitaires limités, valorisation des déchets verts, choix d\'espèces locales.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    titre: 'Tarifs transparents',
    desc: 'Nos devis sont détaillés et sans surprise. Le prix convenu est le prix final, sans frais cachés.',
  },
]

const chiffres = [
  { valeur: '10+',    label: "années d'expérience"  },
  { valeur: '500+',   label: 'chantiers réalisés'   },
  { valeur: '44 & 85',label: 'départements couverts'},
  { valeur: '100%',   label: 'devis gratuits'       },
]

function GrainOverlay() {
  return <div className="absolute inset-0 grain-bg pointer-events-none mix-blend-overlay opacity-25" aria-hidden="true" />
}

export default function APropos() {
  return (
    <>
      <Helmet>
        <title>À Propos | MAZEAS Paysages — Paysagiste Saint-Philbert-de-Grand-Lieu</title>
        <meta name="description" content="Découvrez MAZEAS Paysages, entreprise paysagiste familiale basée à Saint-Philbert-de-Grand-Lieu. Plus de 10 ans d'expérience en entretien et création de jardins en Loire-Atlantique et Vendée." />
      </Helmet>

      <PageHeader
        tag="Notre histoire"
        title={<>À propos de<br /><em className="text-gold font-normal">MAZEAS Paysages.</em></>}
        subtitle="Une entreprise familiale passionnée par la nature et dédiée à l'embellissement de vos espaces extérieurs depuis de nombreuses années."
      />

      {/* Présentation */}
      <section className="py-24 md:py-32 bg-cream" aria-labelledby="presentation-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Visual placeholder */}
            <Reveal>
              <div className="relative bg-forest-900 aspect-[4/3] overflow-hidden">
                <GrainOverlay />
                {/* Decorative watermark */}
                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span
                    className="font-display font-bold text-forest-800 leading-none select-none"
                    style={{ fontSize: '12rem' }}
                  >
                    M
                  </span>
                </div>
                {/* Quote */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                  <p className="font-display italic text-cream/70 text-xl md:text-2xl text-center leading-relaxed">
                    "Façonner la nature,<br />embellir votre quotidien."
                  </p>
                </div>
                {/* Badge */}
                <div className="absolute bottom-0 right-0 bg-gold px-6 py-4 text-forest-900">
                  <div className="font-display font-bold text-4xl leading-none">10+</div>
                  <div className="font-dm text-xs uppercase tracking-widest mt-1">ans d'expérience</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="tag mb-5">Qui sommes-nous</div>
              <h2
                id="presentation-heading"
                className="font-display font-bold text-forest-900 leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                MAZEAS Paysages,<br />
                <em className="text-sage-500 font-normal">votre paysagiste local</em>
              </h2>
              <div className="flex flex-col gap-4 font-dm text-sm text-charcoal/65 leading-relaxed">
                <p>
                  Basée à{' '}
                  <strong className="text-forest-900 font-medium">Saint-Philbert-de-Grand-Lieu</strong>,
                  au cœur de la Loire-Atlantique, l'entreprise MAZEAS Paysages est spécialisée dans
                  l'entretien et la création d'espaces verts pour les particuliers et professionnels.
                </p>
                <p>
                  Avec plus de 10 ans d'expérience dans le paysagisme, notre équipe qualifiée
                  intervient sur l'ensemble de la Loire-Atlantique et le nord de la Vendée,
                  apportant son savoir-faire pour chaque projet, qu'il soit grand ou petit.
                </p>
                <p>
                  Notre philosophie :{' '}
                  <em className="text-forest-700 not-italic font-medium">écouter, conseiller et réaliser.</em>{' '}
                  Nous prenons le temps de comprendre vos envies pour créer ou entretenir l'espace
                  extérieur qui vous ressemble, en respectant votre budget et l'environnement.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-outline-forest">
                  Nous contacter →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="relative py-20 md:py-24 bg-forest-900 overflow-hidden" aria-label="Chiffres clés">
        <GrainOverlay />
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 gap-x-px bg-forest-800">
            {chiffres.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <div className="bg-forest-900 text-center p-10 md:p-12">
                  <div
                    className="font-display font-bold text-gold leading-none mb-3"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                  >
                    {c.valeur}
                  </div>
                  <div className="font-dm text-xs text-cream/40 uppercase tracking-widest">{c.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 md:py-32 bg-cream-dark" aria-labelledby="valeurs-heading">
        <div className="container">
          <Reveal className="text-center mb-16">
            <div className="tag mb-5">Ce qui nous guide</div>
            <h2
              id="valeurs-heading"
              className="font-display font-bold text-forest-900"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Nos valeurs
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-darker">
            {valeurs.map((v, i) => (
              <Reveal key={v.titre} delay={i * 70}>
                <div className="group bg-cream-dark hover:bg-forest-900 p-8 md:p-10 flex flex-col gap-4 min-h-[220px] transition-colors duration-500">
                  <div className="text-forest-600 group-hover:text-gold transition-colors duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-forest-900 group-hover:text-cream transition-colors duration-300">
                    {v.titre}
                  </h3>
                  <p className="font-dm text-sm text-charcoal/55 group-hover:text-cream/55 leading-relaxed transition-colors duration-300">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone & CTA */}
      <section className="relative py-24 md:py-28 bg-forest-950 overflow-hidden" aria-labelledby="zone-heading">
        <GrainOverlay />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
        <Reveal className="container relative z-10 text-center">
          <div className="tag mb-5">Notre territoire</div>
          <h2
            id="zone-heading"
            className="font-display font-bold text-cream mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Zone d'intervention
          </h2>
          <p className="font-dm text-cream/50 mb-8 max-w-xl mx-auto leading-relaxed">
            Nous intervenons principalement sur la Loire-Atlantique (44) et le nord de la
            Vendée (85), dans un rayon d'environ 40 km autour de Saint-Philbert-de-Grand-Lieu.
          </p>
          <Link to="/contact" className="btn-gold">
            Vérifier notre disponibilité
          </Link>
        </Reveal>
      </section>
    </>
  )
}
