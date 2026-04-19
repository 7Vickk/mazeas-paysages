import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, MapPin } from 'lucide-react'

const CATS = ['Tout', 'Création', 'Entretien', 'Élagage', 'Terrassement', 'Clôtures']

const projets = [
  { id: 1, cat: 'Création',     titre: 'Jardin contemporain',              lieu: 'Vertou (44)',              desc: 'Création avec terrasse composite, massifs structurés et gazon en rouleau.', hue: '130,58,24', l: '22%' },
  { id: 2, cat: 'Entretien',    titre: 'Entretien annuel résidence',       lieu: 'Nantes Sud (44)',          desc: 'Contrat annuel : tonte hebdomadaire, taille des haies et massifs.', hue: '120,50,28', l: '30%' },
  { id: 3, cat: 'Élagage',      titre: 'Élagage de chênes centenaires',   lieu: 'Bouaye (44)',              desc: 'Sécurisation et démontage en sections de plusieurs chênes.', hue: '130,30,14', l: '18%' },
  { id: 4, cat: 'Terrassement', titre: 'Allées en graviers stabilisés',   lieu: 'Machecoul (44)',           desc: 'Décaissement, création d\'allées et bordures béton sur 400 m².', hue: '130,52,32', l: '26%' },
  { id: 5, cat: 'Clôtures',     titre: 'Clôture panneaux rigides 80 ml', lieu: 'Saint-Philbert (44)',      desc: 'Fourniture et pose avec portail double battant motorisé.', hue: '120,40,20', l: '24%' },
  { id: 6, cat: 'Création',     titre: 'Jardin naturel & prairie fleurie',lieu: 'Clisson (44)',             desc: 'Haie bocagère, prairie fleurie et bassin de rétention des eaux.', hue: '130,60,30', l: '28%' },
  { id: 7, cat: 'Entretien',    titre: 'Espaces verts entreprise',        lieu: 'Rezé (44)',                desc: 'Tonte, soufflage et taille de 120 ml de haies persistantes.', hue: '120,46,26', l: '22%' },
  { id: 8, cat: 'Élagage',      titre: 'Abattage pins & dessouchage',     lieu: 'Legé (44)',               desc: 'Abattage sécurisé, dessouchage et remise en état du terrain.', hue: '130,28,12', l: '16%' },
  { id: 9, cat: 'Création',     titre: 'Aménagement jardin neuf',         lieu: 'Aigrefeuille (44)',        desc: 'Gazon rouleau, massifs arbustifs, clôture et éclairage extérieur.', hue: '130,56,28', l: '24%' },
]

function ProjectCard({ p, i }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, delay: i * 0.055 }}
      className="group relative overflow-hidden rounded-2xl cursor-default"
      style={{ border: '1px solid var(--parchment)' }}
    >
      {/* Placeholder image */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ background: `hsl(${p.hue}, ${p.l})` }}
        aria-hidden="true"
      >
        {/* Botanical deco */}
        <svg
          className="absolute -bottom-4 -right-4 w-36 h-36 opacity-15"
          viewBox="0 0 64 64" fill="none"
        >
          <path d="M32 4C32 4 10 20 10 38C10 50 20 58 32 58C44 58 54 50 54 38C54 20 32 4 32 4Z" fill="#82AD6C"/>
          <path d="M32 58L32 26" stroke="#1B3A18" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M32 40L20 28M32 40L44 28" stroke="#1B3A18" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(17,16,8,0.85) 0%, transparent 60%)' }}>
          <p className="text-sm text-white/90 leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.desc}</p>
        </div>

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-xs font-sans font-medium px-3 py-1 rounded-full"
          style={{ background: 'rgba(17,16,8,0.6)', color: '#B8D4A4', backdropFilter: 'blur(8px)' }}
        >
          {p.cat}
        </span>
      </div>

      <div className="p-5" style={{ background: 'white' }}>
        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2, marginBottom: '0.4rem' }}>
          {p.titre}
        </h2>
        <span className="flex items-center gap-1.5 text-xs font-sans" style={{ color: 'var(--fern)' }}>
          <MapPin size={11} />
          {p.lieu}
        </span>
      </div>
    </motion.article>
  )
}

export default function Realisations() {
  const [cat, setCat] = useState('Tout')
  const filtered = cat === 'Tout' ? projets : projets.filter(p => p.cat === cat)

  return (
    <>
      <Helmet>
        <title>Nos Réalisations | MAZEAS Paysages — Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Découvrez les réalisations de MAZEAS Paysages : jardins créés, entretiens, élagages et terrassements en Loire-Atlantique et Vendée." />
      </Helmet>

      {/* Header */}
      <div className="grain" style={{ background: 'var(--ink)', paddingTop: 'calc(var(--header-h) + 4rem)', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ color: '#82AD6C' }}>Nos travaux</span>
            <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.0, letterSpacing: '-0.025em', marginTop: '0.25rem' }}>
              Réalisations
            </h1>
            <p className="mt-4 max-w-xl text-base" style={{ color: '#82AD6C' }}>
              Quelques-unes de nos interventions en Loire-Atlantique. Chaque projet, unique.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filtrer par catégorie">
            {CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className="px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-200"
                style={cat === c
                  ? { background: 'var(--ink)', color: 'var(--cream)' }
                  : { background: 'white', color: 'var(--ink)', border: '1px solid var(--parchment)' }
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
            </AnimatePresence>
          </motion.div>

          <p className="text-center text-sm mt-10 font-sans" style={{ color: '#999' }}>
            D'autres réalisations à venir. Contactez-nous pour voir plus de photos.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="grain" style={{ background: 'var(--bark)', padding: 'clamp(4rem, 7vw, 6rem) 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Votre projet sera<br />notre prochaine réalisation.
          </h2>
          <Link to="/contact" className="btn-fern">
            Demander un devis gratuit <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
