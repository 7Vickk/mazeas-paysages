import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useInView } from '../hooks/useInView'

/* ─── Data ─── */

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12" />
        <path d="M2 12C2 6.48 6.48 2 12 2" /><path d="M12 6v6l4 2" />
        <path d="M7 17l-2 2" /><path d="M17 7l2-2" />
      </svg>
    ),
    title: 'Entretien de jardins',
    desc: 'Tonte, désherbage, taille et soins réguliers pour maintenir votre jardin en parfait état toute l\'année.',
    href: '/services#entretien',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    title: 'Devis gratuit & sans engagement',
    desc: 'Nous vous proposons un devis détaillé et personnalisé gratuitement, adapté à votre projet et à votre budget.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Intervention rapide',
    desc: 'Nous intervenons rapidement sur toute la Loire-Atlantique et le nord Vendée, dans des délais adaptés à vos besoins.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Qualité & professionnalisme',
    desc: 'Notre équipe qualifiée utilise un matériel professionnel et applique les meilleures pratiques pour des résultats durables.',
  },
]

const stats = [
  { value: '10+',  label: "années d'expérience" },
  { value: '500+', label: 'projets réalisés'     },
  { value: '12',   label: 'communes desservies'  },
  { value: '100%', label: 'devis gratuits'       },
]

/* ─── Local components ─── */

function GrainOverlay({ className = 'opacity-20' }) {
  return (
    <div
      className={`absolute inset-0 grain-bg pointer-events-none mix-blend-overlay ${className}`}
      aria-hidden="true"
    />
  )
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MAZEAS Paysages | Paysagiste Saint-Philbert-de-Grand-Lieu — Nantes — Vendée</title>
        <meta name="description" content="Paysagiste professionnel à Saint-Philbert-de-Grand-Lieu. Entretien et création de jardins, taille de haies, élagage, terrassement. Intervention Nantes, Loire-Atlantique et Vendée. Devis gratuit : 06 33 46 37 69." />
      </Helmet>

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen bg-forest-900 flex flex-col overflow-hidden"
        aria-label="MAZEAS Paysages — paysagiste professionnel en Loire-Atlantique"
      >
        <GrainOverlay className="opacity-25" />

        {/* Large decorative letter */}
        <div
          className="absolute -right-8 md:-right-4 top-1/2 -translate-y-[52%] font-display font-bold leading-none select-none pointer-events-none text-forest-800"
          style={{ fontSize: 'clamp(18rem, 38vw, 42rem)' }}
          aria-hidden="true"
        >
          M
        </div>

        {/* Left gold accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="flex-1 flex items-center relative z-10 pt-32 pb-44">
          <div className="container">
            <div className="max-w-3xl">

              <div className="tag animate-slide-up anim-delay-100 mb-7">
                Paysagiste — Loire-Atlantique &amp; Vendée
              </div>

              <h1
                className="font-display font-bold text-cream leading-[1.05] mb-8 animate-slide-up anim-delay-200"
                style={{ fontSize: 'clamp(3rem, 8.5vw, 7.5rem)' }}
              >
                L'art de<br />
                façonner<br />
                <em className="text-gold not-italic">la nature.</em>
              </h1>

              <p className="font-dm text-cream/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-slide-up anim-delay-300">
                Paysagiste professionnel basé à{' '}
                <strong className="text-cream font-medium">Saint-Philbert-de-Grand-Lieu</strong>,
                nous créons et entretenons vos espaces verts avec passion depuis plus de 10 ans.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up anim-delay-400">
                <Link to="/contact" className="btn-gold">
                  Demander un devis gratuit
                </Link>
                <Link to="/services" className="btn-outline-cream">
                  Découvrir nos services →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-forest-800 bg-forest-950/70 backdrop-blur-sm animate-slide-up anim-delay-500">
          <div className="container py-5">
            <div className="flex flex-wrap items-center gap-8 md:gap-14">
              {stats.map(s => (
                <div key={s.label} className="flex items-baseline gap-2.5">
                  <span className="font-display text-2xl md:text-3xl font-bold text-gold">{s.value}</span>
                  <span className="font-dm text-[0.65rem] text-cream/40 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
              <a
                href="tel:+33633463769"
                className="ml-auto hidden lg:flex items-center gap-2 font-dm text-xs text-cream/30 hover:text-gold transition-colors duration-200"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                06 33 46 37 69
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-[5.5rem] left-10 hidden md:flex flex-col items-center gap-3 animate-fade-in anim-delay-700"
          aria-hidden="true"
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 md:py-36 bg-cream" aria-labelledby="services-title">
        <div className="container">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-8">
            <Reveal>
              <div className="tag mb-5">Ce que nous faisons</div>
              <h2
                id="services-title"
                className="font-display font-bold text-forest-900 leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Nos services<br />
                <em className="text-sage-500 font-normal">de paysagisme</em>
              </h2>
            </Reveal>
            <Reveal delay={150} className="shrink-0">
              <Link to="/services" className="btn-outline-forest">
                Tous nos services →
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-darker">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <Link
                  to={s.href}
                  className="group bg-cream hover:bg-forest-900 p-10 md:p-12 flex flex-col gap-5 min-h-[280px] transition-colors duration-500"
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="font-display font-bold leading-none select-none text-cream-darker group-hover:text-forest-800 transition-colors duration-500"
                      style={{ fontSize: '4.5rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-forest-600 group-hover:text-gold transition-colors duration-300 mt-1">
                      {s.icon}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-forest-900 group-hover:text-cream mb-2 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="font-dm text-sm text-charcoal/55 group-hover:text-cream/55 leading-relaxed transition-colors duration-300">
                      {s.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-gold font-dm text-xs font-medium uppercase tracking-widest group-hover:gap-3 transition-all duration-300 mt-auto">
                    Découvrir
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zones d'intervention ── */}
      <section
        className="relative py-24 md:py-36 bg-forest-900 overflow-hidden"
        aria-labelledby="zones-title"
      >
        <GrainOverlay className="opacity-20" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">

            <Reveal>
              <div className="tag mb-6">Zone de couverture</div>
              <h2
                id="zones-title"
                className="font-display font-bold text-cream leading-tight mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Près de<br />
                <em className="text-sage-400">chez vous</em>
              </h2>
              <p className="font-dm text-cream/55 leading-relaxed mb-8 text-base max-w-md">
                Basés à{' '}
                <strong className="text-cream font-medium">Saint-Philbert-de-Grand-Lieu</strong>,
                nous couvrons l'ensemble de la Loire-Atlantique et le nord de la Vendée.
              </p>
              <Link to="/contact" className="btn-gold">
                Vérifier ma zone →
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <ul className="grid grid-cols-2 gap-0" role="list" aria-label="Communes desservies">
                {zones.map(ville => (
                  <li
                    key={ville}
                    className="flex items-center gap-3 py-3.5 border-b border-forest-800 font-dm text-sm text-cream/50 hover:text-cream transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/60 shrink-0" aria-hidden="true" />
                    {ville}
                  </li>
                ))}
              </ul>
              <p className="font-dm text-xs text-cream/25 mt-4">+ communes environnantes</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Engagements ── */}
      <section className="py-24 md:py-36 bg-cream-dark" aria-labelledby="engagements-title">
        <div className="container">
          <Reveal className="text-center mb-16 md:mb-20">
            <div className="tag mb-5">Nos engagements</div>
            <h2
              id="engagements-title"
              className="font-display font-bold text-forest-900"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Pourquoi nous choisir ?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-cream-darker">
            {atouts.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <div className="group bg-cream-dark hover:bg-forest-900 p-10 md:p-12 flex flex-col gap-5 min-h-[280px] transition-colors duration-500">
                  <div className="text-forest-700 group-hover:text-gold transition-colors duration-300">
                    {a.icon}
                  </div>
                  <h3 className="font-display text-[1.5rem] font-semibold text-forest-900 group-hover:text-cream transition-colors duration-300">
                    {a.title}
                  </h3>
                  <p className="font-dm text-sm text-charcoal/55 group-hover:text-cream/55 leading-relaxed transition-colors duration-300">
                    {a.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA finale ── */}
      <section
        className="relative py-28 md:py-40 bg-forest-950 overflow-hidden"
        aria-labelledby="cta-title"
      >
        <GrainOverlay className="opacity-30" />
        <div
          className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          aria-hidden="true"
        />

        {/* Decorative leaf motif */}
        <div
          className="absolute -left-16 top-1/2 -translate-y-1/2 font-display font-bold text-forest-900 leading-none select-none pointer-events-none"
          style={{ fontSize: '16rem' }}
          aria-hidden="true"
        >
          ✦
        </div>

        <Reveal className="container relative z-10 text-center">
          <div className="tag mb-6 justify-center">On commence ?</div>
          <h2
            id="cta-title"
            className="font-display font-bold text-cream mb-6 leading-none"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
          >
            Votre jardin<br />
            <em className="text-gold">mérite le meilleur.</em>
          </h2>
          <p className="font-dm text-cream/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Contactez-nous pour un devis gratuit et sans engagement. Réponse sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">
              Demander un devis gratuit
            </Link>
            <a href="tel:+33633463769" className="btn-outline-cream">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              06 33 46 37 69
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
