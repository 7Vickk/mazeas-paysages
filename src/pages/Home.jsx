import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Phone, MapPin, Scissors, Shovel, TreePine, Fence } from 'lucide-react'

/* ─── Animated counter ────────────────────────────────────────────────────── */
import { useState, useEffect } from 'react'
function useCounter(target, active, duration = 1800) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf
    const start = performance.now()
    const tick = now => {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setV(Math.floor(ease * target))
      if (t < 1) raf = requestAnimationFrame(tick)
      else setV(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])
  return v
}

function Stat({ value, suffix, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const count = useCounter(value, inView)
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-8">
      <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1, letterSpacing: '-0.02em' }}>
        {count}{suffix}
      </div>
      <div className="mt-2 text-xs font-sans uppercase tracking-widest" style={{ color: '#82AD6C' }}>{label}</div>
    </div>
  )
}

/* ─── Service card ──────────────────────────────────────────────────────────── */
function ServiceCard({ num, icon: Icon, title, desc, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className="group relative overflow-hidden rounded-2xl p-8 cursor-default"
      style={{ background: 'var(--cream)', border: '1px solid var(--parchment)' }}
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{ background: 'var(--moss)' }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-xs font-sans font-medium tracking-widest uppercase"
            style={{ color: 'var(--sage)' }}
          >
            0{num}
          </span>
          <Icon
            size={22}
            className="transition-colors duration-300"
            style={{ color: 'var(--fern)' }}
          />
        </div>
        <h3
          className="mb-3 transition-colors duration-300"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.15 }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#B8D4A4]"
          style={{ color: '#555' }}
        >
          {desc}
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-sans font-medium transition-all duration-300" style={{ color: 'var(--fern)' }}>
          En savoir plus
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

/* ─── Zones list ─────────────────────────────────────────────────────────────── */
const zones = ['Saint-Philbert-de-Grand-Lieu','Nantes','Vertou','Rezé','Bouaye','La Chevrolière','Machecoul-Saint-Même','Aigrefeuille-sur-Maine','Clisson','Saint-Colomban','Geneston','Legé']

const services = [
  { icon: TreePine, title: 'Entretien de jardins', desc: 'Tonte, désherbage, taille saisonnière et soins réguliers pour maintenir votre jardin en parfait état tout au long de l\'année.' },
  { icon: Shovel,   title: 'Création paysagère', desc: 'Conception et réalisation de jardins sur mesure, massifs, rocailles et plantations adaptées à votre terrain et votre style de vie.' },
  { icon: Scissors, title: 'Taille & Élagage', desc: 'Taille de haies et arbustes, élagage d\'arbres réalisés aux bonnes périodes pour la santé durable de vos végétaux.' },
  { icon: Fence,    title: 'Terrassement & Clôtures', desc: 'Terrassement, nivellement du terrain, pose de clôtures et portails pour aménager et sécuriser votre extérieur.' },
]

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>MAZEAS Paysages | Paysagiste Saint-Philbert-de-Grand-Lieu — Nantes — Vendée</title>
        <meta name="description" content="Paysagiste professionnel à Saint-Philbert-de-Grand-Lieu. Entretien et création de jardins, taille de haies, élagage, terrassement. Intervention Nantes, Loire-Atlantique et Vendée. Devis gratuit : 06 33 46 37 69." />
      </Helmet>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="grain relative flex items-end min-h-screen overflow-hidden"
        style={{ background: 'var(--ink)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
        aria-label="MAZEAS Paysages — Paysagiste Loire-Atlantique"
      >
        {/* Gradient orb */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: '20%', right: '8%',
            width: 'clamp(300px, 45vw, 640px)',
            height: 'clamp(300px, 45vw, 640px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(46,90,30,0.28) 0%, transparent 68%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            bottom: '-10%', left: '-8%',
            width: '500px', height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(27,58,24,0.35) 0%, transparent 70%)',
          }}
        />

        {/* Rotating badge */}
        <div
          aria-hidden="true"
          className="absolute bottom-12 right-8 md:bottom-16 md:right-16 w-28 h-28 z-20"
        >
          <svg viewBox="0 0 120 120" className="badge-spin w-full h-full">
            <path id="circ" d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" fill="none"/>
            <text fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="500" letterSpacing="3" fill="#82AD6C">
              <textPath href="#circ">DEVIS GRATUIT · SANS ENGAGEMENT · </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center" style={{ color: '#82AD6C' }}>
            <ArrowRight size={20} />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 container w-full">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-sans font-medium uppercase tracking-[0.3em] mb-8 flex items-center gap-3"
            style={{ color: '#82AD6C' }}
          >
            <MapPin size={13} />
            Paysagiste · Saint-Philbert-de-Grand-Lieu
          </motion.p>

          <h1 aria-label="Jardin vivant.">
            <motion.span
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="block"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(4.5rem, 13vw, 12rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 0.9, letterSpacing: '-0.025em' }}
            >
              Jardin
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="block italic"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(4.5rem, 13vw, 12rem)', fontWeight: 500, color: '#4E8A35', lineHeight: 0.9, letterSpacing: '-0.025em' }}
            >
              vivant.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end gap-10 md:gap-20"
          >
            <p className="max-w-sm text-base leading-relaxed" style={{ color: '#82AD6C' }}>
              Entretien et création d'espaces verts en Loire-Atlantique et Vendée. Devis gratuit, intervention rapide.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-fern">
                Demander un devis
                <ArrowRight size={15} />
              </Link>
              <a href="tel:+33633463769" className="btn-ghost-dark">
                <Phone size={15} />
                06 33 46 37 69
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <div className="w-px h-10 animate-pulse" style={{ background: 'linear-gradient(to bottom, transparent, #82AD6C)' }} />
        </motion.div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream)' }} aria-labelledby="services-h2">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="section-tag">Ce que nous faisons</span>
              <h2 id="services-h2" className="section-title mt-1">
                Nos services<br />de paysagisme
              </h2>
            </div>
            <Link to="/services" className="btn-ghost-light self-start md:self-auto whitespace-nowrap">
              Voir tout
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <ServiceCard key={s.title} num={i + 1} icon={s.icon} title={s.title} desc={s.desc} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section
        className="grain overflow-hidden"
        style={{ background: 'var(--moss)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}
        aria-label="Chiffres clés"
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ divideColor: 'rgba(130,173,108,0.2)' }}>
            <Stat value={10}  suffix="+" label="années d'expérience" />
            <Stat value={500} suffix="+" label="chantiers réalisés"  />
            <Stat value={40}  suffix="km" label="rayon d'intervention" />
            <Stat value={100} suffix="%" label="devis gratuit"       />
          </div>
        </div>
      </section>

      {/* ── ZONE ─────────────────────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--parchment)' }} aria-labelledby="zone-h2">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Zone de couverture</span>
              <h2 id="zone-h2" className="section-title mt-1 mb-6">
                Nous intervenons<br />près de chez vous
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#4a4a3a' }}>
                Basés à <strong style={{ color: 'var(--moss)' }}>Saint-Philbert-de-Grand-Lieu</strong>,
                nous couvrons l'ensemble de la Loire-Atlantique et le nord de la Vendée.
                Contactez-nous pour vérifier notre disponibilité.
              </p>
              <Link to="/contact" className="btn-fern">
                Vérifier ma zone
                <ArrowRight size={15} />
              </Link>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2.5" role="list" aria-label="Communes couvertes">
              {zones.map((z, i) => (
                <motion.li
                  key={z}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.04 }}
                  className="text-sm font-sans px-4 py-3 rounded-xl flex items-center gap-2"
                  style={{ background: 'white', color: 'var(--moss)', border: '1px solid rgba(78,138,53,0.15)' }}
                >
                  <span style={{ color: 'var(--fern)', flexShrink: 0 }}>›</span>
                  {z}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section
        className="grain overflow-hidden"
        style={{ background: 'var(--ink)', padding: 'clamp(4rem, 8vw, 7rem) 0' }}
        aria-labelledby="cta-h2"
      >
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-tag" style={{ color: '#82AD6C' }}>Commençons ensemble</span>
            <h2
              id="cta-h2"
              className="mt-2 mb-8"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Votre jardin mérite le meilleur.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-fern">
                Demander un devis gratuit
                <ArrowRight size={15} />
              </Link>
              <a href="tel:+33633463769" className="btn-ghost-dark">
                <Phone size={15} />
                06 33 46 37 69
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
