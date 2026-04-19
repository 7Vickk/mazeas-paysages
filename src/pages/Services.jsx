import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const services = [
  {
    id: 'entretien',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Entretien de jardins',
    desc: 'Un jardin entretenu régulièrement est un jardin en bonne santé. Nous proposons des contrats d\'entretien personnalisés adaptés à vos besoins, qu\'il s\'agisse d\'une intervention ponctuelle ou d\'un suivi saisonnier.',
    details: ['Tonte et ramassage des tontes', 'Désherbage manuel et chimique raisonné', 'Scarification et aération des pelouses', 'Ratissage et nettoyage', 'Arrosage et fertilisation', 'Taille des arbustes d\'ornement', 'Ramassage des feuilles en automne'],
  },
  {
    id: 'creation',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Création & aménagement paysager',
    desc: 'Donnez vie à vos idées avec un projet paysager sur mesure. De la conception à la réalisation, nous créons des espaces verts harmonieux qui valorisent votre propriété.',
    details: ['Étude et conception du projet', 'Création de massifs fleuris et arbustifs', 'Plantation d\'arbres et arbustes', 'Rocailles et jardins secs', 'Aménagement de terrasses', 'Création d\'allées et chemins', 'Bassins et points d\'eau'],
  },
  {
    id: 'taille',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="20" x2="20" y2="4" />
        <path d="M4.5 9.5L9 9l-.5-4.5" /><path d="M19.5 14.5L15 15l.5 4.5" />
      </svg>
    ),
    title: 'Taille de haies & arbustes',
    desc: 'La taille est essentielle pour la santé et l\'esthétique de vos végétaux. Nous intervenons aux bonnes périodes pour respecter les cycles de croissance de chaque espèce.',
    details: ['Taille de haies vives et persistantes', 'Taille des arbustes à fleurs', 'Taille en vert et en sec', 'Taille de formation et d\'entretien', 'Évacuation des déchets verts', 'Taille de buis et ifs', 'Taille des bambous'],
  },
  {
    id: 'elagage',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
    title: 'Élagage & abattage d\'arbres',
    desc: 'L\'élagage est une intervention délicate qui nécessite savoir-faire et équipement adapté. Nous intervenons en toute sécurité pour l\'entretien et, si nécessaire, l\'abattage de vos arbres.',
    details: ['Élagage de sécurisation', 'Élagage d\'entretien et de formation', 'Abattage raisonné', 'Démontage en sections (arbres à risque)', 'Broyage des branches sur place', 'Dessouchage', 'Traitement des plaies de taille'],
  },
  {
    id: 'pelouse',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22V12" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M8 5.2A6 6 0 0 1 18 8" />
      </svg>
    ),
    title: 'Engazonnement & soin des pelouses',
    desc: 'Création ou rénovation de pelouses pour un gazon dense et verdoyant. Nous réalisons semis et poses de gazon en rouleau pour un résultat immédiat et durable.',
    details: ['Préparation du sol et nivellement', 'Semis de gazon', 'Pose de gazon en rouleau', 'Scarification et aération', 'Regarnissage et surseming', 'Traitement des mousses et mauvaises herbes', 'Conseils fertilisation'],
  },
  {
    id: 'terrassement',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Terrassement & VRD',
    desc: 'Pour préparer votre terrain avant toute création paysagère, nous réalisons les travaux de terrassement, de nivellement et de voirie.',
    details: ['Décaissement et terrassement', 'Nivellement et planage', 'Création d\'allées et voiries', 'Pose de pavés et dallages', 'Drainage et évacuation des eaux', 'Empierrement et graviers', 'Escaliers extérieurs'],
  },
  {
    id: 'clotures',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="3" y1="21" x2="21" y2="21" /><line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="8 21 8 10" /><polyline points="16 21 16 10" />
        <polyline points="5 10 3 5 21 5 19 10" />
      </svg>
    ),
    title: 'Pose de clôtures & portails',
    desc: 'Délimitez et sécurisez votre propriété avec une clôture adaptée à votre style et vos besoins. Nous proposons la fourniture et la pose de différents types de clôtures.',
    details: ['Clôtures en panneau rigide', 'Clôtures en bois et en bois composite', 'Clôtures grillagées et occultées', 'Pose de portails et portillons', 'Clôtures de séparation légères', 'Murs de soutènement', 'Bordures et murets décoratifs'],
  },
  {
    id: 'dechets',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
    title: 'Évacuation des déchets verts',
    desc: 'Après chaque intervention, nous assurons l\'évacuation et le traitement respectueux de vos déchets verts. Broyage sur place ou évacuation selon vos préférences.',
    details: ['Broyage des branchages sur place', 'Évacuation en déchetterie', 'Compostage et valorisation', 'Nettoyage complet du chantier', 'Mise en balles de déchets'],
  },
]

function GrainOverlay() {
  return <div className="absolute inset-0 grain-bg pointer-events-none mix-blend-overlay opacity-25" aria-hidden="true" />
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Nos Services | MAZEAS Paysages — Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Découvrez tous les services de MAZEAS Paysages : entretien de jardins, création paysagère, taille de haies, élagage, terrassement, clôtures en Loire-Atlantique et Vendée. Devis gratuit." />
      </Helmet>

      <PageHeader
        tag="Expertise paysagère"
        title={<>Nos services<br /><em className="text-gold font-normal">de paysagisme.</em></>}
        subtitle="Une gamme complète de prestations pour entretenir, créer et aménager vos espaces verts en Loire-Atlantique et Vendée."
      />

      {/* Services */}
      <section className="py-24 md:py-32 bg-cream" aria-label="Liste des services">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-px bg-cream-darker">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 40}>
                <article id={s.id} className="bg-cream p-10 md:p-12 flex flex-col gap-6 min-h-[360px]">
                  <div className="flex items-start justify-between">
                    <span className="text-forest-600">{s.icon}</span>
                    <span
                      className="font-display font-bold text-cream-darker leading-none select-none"
                      style={{ fontSize: '4.5rem' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-semibold text-forest-900 mb-3">
                      {s.title}
                    </h2>
                    <p className="font-dm text-sm text-charcoal/60 leading-relaxed mb-5">
                      {s.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6" role="list">
                      {s.details.map(d => (
                        <li key={d} className="flex items-start gap-2.5 font-dm text-xs text-charcoal/55">
                          <span className="w-1 h-1 rounded-full bg-gold mt-1.5 shrink-0" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28 bg-forest-950 overflow-hidden" aria-label="Demande de devis">
        <GrainOverlay />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />
        <Reveal className="container relative z-10 text-center">
          <div className="tag mb-5">Un projet ?</div>
          <h2
            className="font-display font-bold text-cream mb-5"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Demandez votre devis gratuit
          </h2>
          <p className="font-dm text-cream/50 mb-8 max-w-lg mx-auto leading-relaxed">
            Décrivez-nous votre projet, nous vous contactons rapidement pour établir un devis personnalisé et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Demander un devis</Link>
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
