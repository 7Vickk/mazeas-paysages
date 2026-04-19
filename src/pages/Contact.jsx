import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'

const EMAIL      = 'mazeaspaysage@orange.fr'
const PHONE      = '06 33 46 37 69'
const PHONE_HREF = 'tel:+33633463769'

const serviceOptions = [
  'Entretien de jardin',
  'Création / aménagement paysager',
  'Taille de haies / arbustes',
  'Élagage / abattage d\'arbres',
  'Engazonnement / soin des pelouses',
  'Terrassement',
  'Pose de clôtures / portails',
  'Autre prestation',
]

const initialForm = { nom: '', email: '', telephone: '', service: '', message: '' }

const infoItems = [
  {
    href: PHONE_HREF,
    label: 'Téléphone',
    value: PHONE,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: `mailto:${EMAIL}`,
    label: 'E-mail',
    value: EMAIL,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Adresse',
    value: 'Saint-Philbert-de-Grand-Lieu\n44310 Loire-Atlantique',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Horaires',
    value: 'Lun – Ven : 8h00 – 18h00',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm]           = useState(initialForm)
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.nom.trim())                                    e.nom     = 'Votre nom est requis.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Adresse e-mail invalide.'
    if (!form.message.trim())                                e.message = 'Merci d\'indiquer votre message.'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    const subject = `Demande de devis — ${form.service || 'Paysagisme'}`
    const body = [
      `Nom : ${form.nom}`,
      `E-mail : ${form.email}`,
      form.telephone ? `Téléphone : ${form.telephone}` : '',
      form.service   ? `Service souhaité : ${form.service}` : '',
      '',
      'Message :',
      form.message,
      '',
      '---',
      'Envoyé depuis le site mazeas-paysages.fr',
    ].filter(Boolean).join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setForm(initialForm)
  }

  const inputCls = name =>
    errors[name]
      ? 'w-full px-4 py-3 border border-red-400 focus:border-red-500 font-dm text-sm text-charcoal placeholder:text-charcoal/30 bg-cream outline-none transition-colors duration-200'
      : 'w-full px-4 py-3 border border-cream-darker focus:border-gold hover:border-forest-600/30 font-dm text-sm text-charcoal placeholder:text-charcoal/30 bg-cream outline-none transition-colors duration-200'

  return (
    <>
      <Helmet>
        <title>Contact | MAZEAS Paysages — Devis Gratuit Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Contactez MAZEAS Paysages pour un devis gratuit. Paysagiste à Saint-Philbert-de-Grand-Lieu, intervention en Loire-Atlantique et Vendée. Tél : 06 33 46 37 69 — mazeaspaysage@orange.fr" />
      </Helmet>

      <PageHeader
        tag="Devis gratuit"
        title={<>Contactez<br /><em className="text-gold font-normal">nous.</em></>}
        subtitle="Décrivez-nous votre projet, nous vous répondons rapidement pour établir un devis personnalisé et sans engagement."
      />

      <section className="py-24 md:py-32 bg-cream" aria-label="Formulaire de contact">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Infos contact */}
            <Reveal className="lg:col-span-2">
              <aside>
                {/* Carte sombre */}
                <div className="bg-forest-900 p-8 mb-4">
                  <h2 className="font-display text-xl font-semibold text-cream mb-8">
                    Informations de contact
                  </h2>
                  <div className="flex flex-col gap-6">
                    {infoItems.map(item => (
                      <div key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="flex items-start gap-4 group"
                            aria-label={`${item.label} : ${item.value}`}
                          >
                            <span className="text-gold/70 mt-0.5 shrink-0">{item.icon}</span>
                            <div>
                              <div className="font-dm text-[0.65rem] uppercase tracking-widest text-cream/30 mb-1">
                                {item.label}
                              </div>
                              <div className="font-dm text-sm text-cream/70 group-hover:text-gold transition-colors duration-200 break-all">
                                {item.value}
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-4">
                            <span className="text-gold/70 mt-0.5 shrink-0">{item.icon}</span>
                            <div>
                              <div className="font-dm text-[0.65rem] uppercase tracking-widest text-cream/30 mb-1">
                                {item.label}
                              </div>
                              <div className="font-dm text-sm text-cream/70 whitespace-pre-line">
                                {item.value}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badge réponse */}
                <div className="border border-cream-darker bg-cream p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <h3 className="font-display text-lg font-semibold text-forest-900">Réponse rapide</h3>
                  </div>
                  <p className="font-dm text-sm text-charcoal/60 leading-relaxed">
                    Nous vous répondons en général dans les{' '}
                    <strong className="text-forest-900 font-medium">24 à 48h ouvrées</strong>.
                    Pour un besoin urgent, appelez-nous directement.
                  </p>
                </div>
              </aside>
            </Reveal>

            {/* Formulaire */}
            <Reveal delay={150} className="lg:col-span-3">
              {submitted ? (
                <div className="border border-cream-darker bg-cream p-12 text-center">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gold" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-forest-900 mb-3">
                    Votre client mail va s'ouvrir !
                  </h2>
                  <p className="font-dm text-sm text-charcoal/60 mb-6 max-w-sm mx-auto leading-relaxed">
                    Votre message a été préparé. Envoyez-le depuis votre application e-mail.
                    Si rien ne s'est ouvert, contactez-nous directement au{' '}
                    <a href={PHONE_HREF} className="text-gold font-medium">{PHONE}</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-forest"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <div className="border border-cream-darker bg-cream p-8 md:p-10">
                  <h2 className="font-display text-2xl font-semibold text-forest-900 mb-8">
                    Demande de devis gratuit
                  </h2>

                  <div className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="nom" className="block font-dm text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                          Nom complet <span className="text-gold" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="nom" type="text" name="nom"
                          value={form.nom} onChange={handleChange}
                          placeholder="Jean Dupont"
                          className={inputCls('nom')}
                          autoComplete="name"
                        />
                        {errors.nom && <p className="font-dm text-xs text-red-500 mt-1.5">{errors.nom}</p>}
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block font-dm text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                          Téléphone
                        </label>
                        <input
                          id="telephone" type="tel" name="telephone"
                          value={form.telephone} onChange={handleChange}
                          placeholder="06 XX XX XX XX"
                          className={inputCls('telephone')}
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-dm text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                        Adresse e-mail <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email" type="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="jean.dupont@email.fr"
                        className={inputCls('email')}
                        autoComplete="email"
                      />
                      {errors.email && <p className="font-dm text-xs text-red-500 mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="block font-dm text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                        Service souhaité
                      </label>
                      <select
                        id="service" name="service"
                        value={form.service} onChange={handleChange}
                        className={`${inputCls('service')} cursor-pointer`}
                      >
                        <option value="">Sélectionnez un service…</option>
                        {serviceOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-dm text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                        Votre message <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message" name="message"
                        value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez votre projet, la surface approximative, votre localité…"
                        className={`${inputCls('message')} resize-none`}
                      />
                      {errors.message && <p className="font-dm text-xs text-red-500 mt-1.5">{errors.message}</p>}
                    </div>

                    <p className="font-dm text-xs text-charcoal/35">
                      <span className="text-gold" aria-hidden="true">*</span>{' '}
                      Champs obligatoires. Vos données ne sont utilisées que pour répondre à votre demande.
                    </p>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="btn-gold self-start"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Envoyer ma demande
                    </button>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
