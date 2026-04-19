import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'motion/react'
import { ArrowRight, ShieldCheck, Clock, Smile, Leaf, MapPin, BadgeEuro } from 'lucide-react'

const valeurs = [
  { icon: ShieldCheck, titre: 'Fiabilité', desc: 'Délais tenus, devis respectés. Votre confiance est notre engagement le plus précieux.' },
  { icon: Smile,       titre: 'Écoute & conseil', desc: 'Nous prenons le temps de comprendre votre jardin, vos envies et votre budget.' },
  { icon: Leaf,        titre: 'Respect de la nature', desc: 'Pratiques raisonnées, espèces locales, valorisation des déchets verts — le vivant avant tout.' },
  { icon: Clock,       titre: 'Réactivité', desc: 'Intervention rapide sur l\'ensemble de la Loire-Atlantique et nord Vendée.' },
  { icon: MapPin,      titre: 'Ancrage local', desc: 'Basés à Saint-Philbert, nous connaissons les spécificités climatiques et végétales de notre territoire.' },
  { icon: BadgeEuro,   titre: 'Transparence tarifaire', desc: 'Devis détaillés et sans surprise. Le prix convenu est le prix final, sans frais cachés.' },
]

function ValueCard({ v, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className="flex gap-4 p-6 rounded-2xl"
      style={{ background: 'white', border: '1px solid var(--parchment)' }}
    >
      <div className="shrink-0 mt-0.5 p-2.5 rounded-xl" style={{ background: 'var(--mist)' }}>
        <v.icon size={18} style={{ color: 'var(--fern)' }} />
      </div>
      <div>
        <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.35rem' }}>
          {v.titre}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#555' }}>{v.desc}</p>
      </div>
    </motion.div>
  )
}

export default function APropos() {
  return (
    <>
      <Helmet>
        <title>À Propos | MAZEAS Paysages — Paysagiste Saint-Philbert-de-Grand-Lieu</title>
        <meta name="description" content="Découvrez MAZEAS Paysages, entreprise paysagiste familiale basée à Saint-Philbert-de-Grand-Lieu. Plus de 10 ans d'expérience en entretien et création de jardins en Loire-Atlantique et Vendée." />
      </Helmet>

      {/* Header */}
      <div className="grain" style={{ background: 'var(--ink)', paddingTop: 'calc(var(--header-h) + 4rem)', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ color: '#82AD6C' }}>Notre histoire</span>
            <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.0, letterSpacing: '-0.025em', marginTop: '0.25rem' }}>
              À propos
            </h1>
            <p className="mt-4 max-w-xl text-base" style={{ color: '#82AD6C' }}>
              Une entreprise familiale passionnée par la nature, dédiée à l'embellissement de vos espaces extérieurs depuis plus de dix ans.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Présentation */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="rounded-3xl aspect-[4/3] flex items-center justify-center relative overflow-hidden grain"
                style={{ background: 'linear-gradient(135deg, var(--moss) 0%, var(--fern) 100%)' }}
                aria-hidden="true"
              >
                {/* Decorative circles */}
                {[...Array(5)].map((_, k) => (
                  <div key={k} className="absolute rounded-full" style={{ background: 'rgba(255,255,255,0.06)', width: `${60 + k * 50}px`, height: `${60 + k * 50}px`, top: `${10 + k * 9}%`, left: `${-5 + k * 12}%` }} />
                ))}
                <div className="relative text-center" style={{ color: 'rgba(242,237,226,0.4)' }}>
                  <svg width="72" height="72" viewBox="0 0 64 64" fill="none" className="mx-auto mb-3">
                    <path d="M32 4C32 4 10 20 10 38C10 50 20 58 32 58C44 58 54 50 54 38C54 20 32 4 32 4Z" fill="currentColor" opacity="0.6"/>
                    <path d="M32 58L32 26M32 40L20 28M32 40L44 28" stroke="rgba(27,58,24,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  <p className="text-sm">Photo de l'équipe à venir</p>
                </div>
              </div>

              {/* Badge expérience */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-5 text-center shadow-xl"
                style={{ background: 'var(--ink)', minWidth: '120px' }}
              >
                <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '2.8rem', fontWeight: 700, color: '#F2EDE2', lineHeight: 1 }}>10+</div>
                <div className="text-xs font-sans mt-1" style={{ color: '#82AD6C' }}>ans d'expérience</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <span className="section-tag">Qui sommes-nous</span>
              <h2 className="section-title mt-2 mb-6">
                MAZEAS Paysages,<br />
                <em style={{ fontStyle: 'italic', color: 'var(--fern)' }}>votre paysagiste local</em>
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#4a4a3a' }}>
                <p>
                  Basée à <strong style={{ color: 'var(--moss)' }}>Saint-Philbert-de-Grand-Lieu</strong>, au cœur de la Loire-Atlantique, l'entreprise MAZEAS Paysages est spécialisée dans l'entretien et la création d'espaces verts pour les particuliers et professionnels.
                </p>
                <p>
                  Avec plus de dix ans d'expérience, notre équipe qualifiée intervient sur l'ensemble de la Loire-Atlantique et le nord de la Vendée, apportant son savoir-faire à chaque projet — grand ou petit.
                </p>
                <p>
                  Notre philosophie : <em style={{ color: 'var(--fern)', fontStyle: 'italic' }}>écouter, conseiller, réaliser.</em> Nous prenons le temps de comprendre vos envies pour créer ou entretenir l'espace extérieur qui vous ressemble.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-fern">
                  Nous contacter <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grain" style={{ background: 'var(--bark)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '10+',  l: "années d'expérience" },
              { n: '500+', l: 'chantiers réalisés'  },
              { n: '2',    l: 'départements couverts' },
              { n: '100%', l: 'devis gratuits'      },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1 }}>{s.n}</div>
                <div className="text-xs font-sans mt-2 uppercase tracking-widest" style={{ color: '#82AD6C' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-tag">Ce qui nous guide</span>
            <h2 className="section-title mt-1">Nos valeurs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {valeurs.map((v, i) => <ValueCard key={v.titre} v={v} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain" style={{ background: 'var(--moss)', padding: 'clamp(4rem, 7vw, 6rem) 0' }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Travaillons ensemble.
          </h2>
          <Link to="/contact" className="btn-fern">
            Demander un devis gratuit <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
