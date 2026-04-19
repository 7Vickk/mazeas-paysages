import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, useInView } from 'motion/react'
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react'

const services = [
  {
    id: 'entretien', num: '01',
    title: 'Entretien de jardins',
    lead: 'Un jardin entretenu régulièrement est un jardin en bonne santé.',
    desc: 'Nous proposons des contrats d\'entretien personnalisés adaptés à vos besoins, qu\'il s\'agisse d\'une intervention ponctuelle ou d\'un suivi saisonnier tout au long de l\'année.',
    details: ['Tonte et ramassage','Désherbage raisonné','Scarification & aération','Ratissage & nettoyage','Arrosage & fertilisation','Taille des arbustes','Ramassage des feuilles'],
  },
  {
    id: 'creation', num: '02',
    title: 'Création & aménagement paysager',
    lead: 'Donnez vie à vos idées avec un projet sur mesure.',
    desc: 'De la conception à la réalisation, nous créons des espaces verts harmonieux qui valorisent votre propriété et s\'inscrivent dans votre mode de vie.',
    details: ['Étude & conception','Massifs fleuris & arbustifs','Plantation d\'arbres','Rocailles & jardins secs','Aménagement de terrasses','Création d\'allées','Bassins & points d\'eau'],
  },
  {
    id: 'taille', num: '03',
    title: 'Taille de haies & arbustes',
    lead: 'La taille est essentielle à la santé de vos végétaux.',
    desc: 'Nous intervenons aux bonnes périodes pour respecter les cycles de croissance de chaque espèce, favorisant une haie dense et bien formée.',
    details: ['Haies vives & persistantes','Arbustes à fleurs','Taille en vert & en sec','Taille de formation','Évacuation des déchets','Buis & ifs en topiaire','Bambous'],
  },
  {
    id: 'elagage', num: '04',
    title: 'Élagage & abattage d\'arbres',
    lead: 'Une intervention délicate qui requiert savoir-faire et sécurité.',
    desc: 'Nous intervenons en toute sécurité pour l\'entretien et, si nécessaire, l\'abattage raisonné de vos arbres, avec démontage en sections pour les cas complexes.',
    details: ['Élagage de sécurisation','Élagage d\'entretien','Abattage raisonné','Démontage en sections','Broyage sur place','Dessouchage','Traitement des plaies'],
  },
  {
    id: 'pelouse', num: '05',
    title: 'Engazonnement & pelouses',
    lead: 'Un gazon dense et verdoyant, créé ou rénové.',
    desc: 'Nous réalisons la préparation du sol, le semis et la pose de gazon en rouleau pour un résultat immédiat, avec les soins d\'entretien qui suivent.',
    details: ['Préparation du sol','Semis de gazon','Gazon en rouleau','Scarification & aération','Regarnissage','Traitement des mousses','Conseils fertilisation'],
  },
  {
    id: 'terrassement', num: '06',
    title: 'Terrassement & VRD',
    lead: 'La base de tout aménagement extérieur réussi.',
    desc: 'Nous réalisons les travaux de préparation du terrain indispensables avant toute création : terrassement, nivellement, voirie et réseaux.',
    details: ['Décaissement & terrassement','Nivellement & planage','Allées en graviers','Pavés & dallages','Drainage des eaux','Empierrement','Escaliers extérieurs'],
  },
  {
    id: 'clotures', num: '07',
    title: 'Pose de clôtures & portails',
    lead: 'Délimitez et sécurisez votre propriété avec style.',
    desc: 'Nous proposons la fourniture et la pose de différents types de clôtures, portails et portillons adaptés à votre style et vos besoins.',
    details: ['Panneaux rigides','Bois & bois composite','Grillage soudé','Portails & portillons','Clôtures occultantes','Murs de soutènement','Bordures & murets'],
  },
  {
    id: 'dechets', num: '08',
    title: 'Évacuation des déchets verts',
    lead: 'Chantier terminé, jardin propre — toujours.',
    desc: 'Après chaque intervention, nous assurons l\'évacuation et le traitement respectueux de vos déchets verts. Broyage sur place ou évacuation selon vos préférences.',
    details: ['Broyage sur place','Évacuation en déchetterie','Valorisation & compostage','Nettoyage du chantier','Mise en balles'],
  },
]

function ServiceBlock({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = i % 2 === 0

  return (
    <motion.article
      ref={ref}
      id={s.id}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      className="grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden"
      style={{ border: '1px solid var(--parchment)' }}
    >
      {/* Number column */}
      <div
        className={`md:col-span-2 flex items-start justify-center md:justify-start pt-8 md:pt-10 px-6 md:px-8 pb-0 md:pb-10 ${isEven ? '' : 'md:order-2'}`}
        style={{ background: isEven ? 'var(--moss)' : 'var(--bark)' }}
      >
        <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: isEven ? 'rgba(184,212,164,0.35)' : 'rgba(184,212,164,0.25)', lineHeight: 1 }}>
          {s.num}
        </span>
      </div>

      {/* Content column */}
      <div className={`md:col-span-10 p-8 md:p-10 ${isEven ? '' : 'md:order-1'}`} style={{ background: 'white' }}>
        <p className="text-xs font-sans uppercase tracking-widest mb-2" style={{ color: 'var(--fern)' }}>{s.lead}</p>
        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
          {s.title}
        </h2>
        <p className="text-sm leading-relaxed mb-6 max-w-lg" style={{ color: '#555' }}>{s.desc}</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {s.details.map(d => (
            <li key={d} className="flex items-center gap-2 text-xs font-sans" style={{ color: '#444' }}>
              <CheckCircle2 size={13} style={{ color: 'var(--fern)', flexShrink: 0 }} />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Nos Services | MAZEAS Paysages — Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Découvrez tous les services de MAZEAS Paysages : entretien de jardins, création paysagère, taille de haies, élagage, terrassement, clôtures en Loire-Atlantique et Vendée. Devis gratuit." />
      </Helmet>

      {/* Header */}
      <div className="grain overflow-hidden" style={{ background: 'var(--ink)', paddingTop: 'calc(var(--header-h) + 4rem)', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ color: '#82AD6C' }}>Expertise paysagère</span>
            <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.0, letterSpacing: '-0.025em', marginTop: '0.25rem' }}>
              Nos services
            </h1>
            <p className="mt-4 max-w-xl text-base" style={{ color: '#82AD6C' }}>
              Une gamme complète de prestations pour entretenir, créer et aménager vos espaces verts en Loire-Atlantique et Vendée.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services list */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container flex flex-col gap-4">
          {services.map((s, i) => <ServiceBlock key={s.id} s={s} i={i} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="grain" style={{ background: 'var(--moss)', padding: 'clamp(4rem, 7vw, 6rem) 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Un projet ? Parlons-en.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-fern" style={{ background: 'var(--fern)' }}>
              Devis gratuit <ArrowRight size={15} />
            </Link>
            <a href="tel:+33633463769" className="btn-ghost-dark">
              <Phone size={15} /> 06 33 46 37 69
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
