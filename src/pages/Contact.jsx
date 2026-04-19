import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const EMAIL = 'mazeaspaysage@orange.fr'
const PHONE = '06 33 46 37 69'
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

const initialForm = {
  nom: '',
  email: '',
  telephone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.nom.trim()) e.nom = 'Votre nom est requis.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Adresse e-mail invalide.'
    if (!form.message.trim()) e.message = 'Merci d\'indiquer votre message.'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const subject = `Demande de devis — ${form.service || 'Paysagisme'}`
    const body = [
      `Nom : ${form.nom}`,
      `E-mail : ${form.email}`,
      form.telephone ? `Téléphone : ${form.telephone}` : '',
      form.service ? `Service souhaité : ${form.service}` : '',
      '',
      `Message :`,
      form.message,
      '',
      '---',
      'Envoyé depuis le site mazeas-paysages.fr',
    ].filter(l => l !== undefined).join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setForm(initialForm)
  }

  const inputClass = name =>
    `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors font-body ${
      errors[name]
        ? 'border-red-400 focus:border-red-500 bg-red-50'
        : 'border-gray-200 focus:border-vert-500 bg-white hover:border-gray-300'
    }`

  return (
    <>
      <Helmet>
        <title>Contact | MAZEAS Paysages — Devis Gratuit Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Contactez MAZEAS Paysages pour un devis gratuit. Paysagiste à Saint-Philbert-de-Grand-Lieu, intervention en Loire-Atlantique et Vendée. Tél : 06 33 46 37 69 — mazeaspaysage@orange.fr" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-vert-900 pt-32 pb-16">
        <div className="container text-center">
          <span className="section-tag text-vert-400">Devis gratuit</span>
          <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl mt-1 mb-4">
            Contactez-nous
          </h1>
          <p className="text-vert-300 text-lg max-w-2xl mx-auto">
            Décrivez-nous votre projet, nous vous répondons rapidement pour établir
            un devis personnalisé et sans engagement.
          </p>
        </div>
      </div>

      <section className="section bg-gray-50" aria-label="Formulaire de contact">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Contact info */}
            <aside className="lg:col-span-2 flex flex-col gap-5">
              <div className="card p-7">
                <h2 className="font-heading font-bold text-vert-900 text-xl mb-6">
                  Informations de contact
                </h2>
                <div className="flex flex-col gap-5 text-sm">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-4 group"
                    aria-label={`Appeler le ${PHONE}`}
                  >
                    <div className="w-11 h-11 rounded-full bg-vert-100 flex items-center justify-center text-vert-700 group-hover:bg-vert-200 transition-colors shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">Téléphone</div>
                      <div className="font-semibold text-vert-800 group-hover:text-vert-600 transition-colors text-base">{PHONE}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 group"
                    aria-label={`Envoyer un e-mail à ${EMAIL}`}
                  >
                    <div className="w-11 h-11 rounded-full bg-vert-100 flex items-center justify-center text-vert-700 group-hover:bg-vert-200 transition-colors shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">E-mail</div>
                      <div className="font-semibold text-vert-800 group-hover:text-vert-600 transition-colors break-all">{EMAIL}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-vert-100 flex items-center justify-center text-vert-700 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">Adresse</div>
                      <div className="font-semibold text-vert-800">Saint-Philbert-de-Grand-Lieu</div>
                      <div className="text-gray-500 text-xs">44310 Loire-Atlantique</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-vert-100 flex items-center justify-center text-vert-700 shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs mb-0.5">Horaires</div>
                      <div className="font-semibold text-vert-800">Lun – Ven</div>
                      <div className="text-gray-500 text-xs">8h00 – 18h00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-7 bg-vert-50 border-vert-100">
                <h3 className="font-heading font-bold text-vert-900 mb-2">Réponse rapide</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous vous répondons en général dans les <strong className="text-vert-700">24 à 48h ouvrées</strong>.
                  Pour un besoin urgent, appelez-nous directement.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-vert-100 flex items-center justify-center text-vert-700 mx-auto mb-5">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="font-heading font-bold text-vert-900 text-2xl mb-3">
                      Votre client mail va s'ouvrir !
                    </h2>
                    <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                      Votre message a été préparé. Envoyez-le depuis votre application e-mail.
                      Si rien ne s'est ouvert, contactez-nous directement au{' '}
                      <a href={PHONE_HREF} className="text-vert-700 font-semibold">{PHONE}</a>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading font-bold text-vert-900 text-xl mb-7">
                      Demande de devis gratuit
                    </h2>
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Nom complet <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="nom"
                            type="text"
                            name="nom"
                            value={form.nom}
                            onChange={handleChange}
                            placeholder="Jean Dupont"
                            className={inputClass('nom')}
                            autoComplete="name"
                          />
                          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                        </div>
                        <div>
                          <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Téléphone
                          </label>
                          <input
                            id="telephone"
                            type="tel"
                            name="telephone"
                            value={form.telephone}
                            onChange={handleChange}
                            placeholder="06 XX XX XX XX"
                            className={inputClass('telephone')}
                            autoComplete="tel"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Adresse e-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jean.dupont@email.fr"
                          className={inputClass('email')}
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Service souhaité
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`${inputClass('service')} cursor-pointer`}
                        >
                          <option value="">Sélectionnez un service…</option>
                          {serviceOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Votre message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Décrivez votre projet, la surface approximative, votre localité…"
                          className={`${inputClass('message')} resize-none`}
                        />
                        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                      </div>

                      <p className="text-xs text-gray-400">
                        <span className="text-red-500">*</span> Champs obligatoires. Vos données ne sont utilisées que pour répondre à votre demande.
                      </p>

                      <button type="submit" className="btn-primary self-start text-base">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                        Envoyer ma demande
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
