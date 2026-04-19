import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle2 } from 'lucide-react'

const EMAIL = 'mazeaspaysage@orange.fr'
const SERVICES = ['Entretien de jardin','Création / aménagement paysager','Taille de haies / arbustes','Élagage / abattage d\'arbres','Engazonnement','Terrassement','Pose de clôtures / portails','Autre prestation']

const init = { nom: '', email: '', telephone: '', service: '', message: '' }

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-xs font-sans font-medium uppercase tracking-widest mb-2" style={{ color: '#666' }}>
        {label} {required && <span style={{ color: 'var(--fern)' }}>*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-sans" style={{ color: '#c0392b' }}>{error}</p>}
    </div>
  )
}

const inputStyle = (err) => ({
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  border: `1px solid ${err ? '#e74c3c' : 'var(--parchment)'}`,
  background: err ? 'rgba(231,76,60,0.04)' : 'white',
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.875rem',
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color 0.2s',
})

export default function Contact() {
  const [form, setForm]       = useState(init)
  const [errors, setErrors]   = useState({})
  const [sent, setSent]       = useState(false)

  const set = field => e => {
    setForm(p => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors(p => ({ ...p, [field]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.nom.trim())   e.nom = 'Votre nom est requis.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'E-mail invalide.'
    if (!form.message.trim()) e.message = 'Merci de décrire votre demande.'
    return e
  }

  const handleSend = () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

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
      'Via mazeas-paysages.fr',
    ].filter(Boolean).join('\n')

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setForm(init)
  }

  /* Focus styles via CSS in index.css not available here — use onFocus/onBlur */
  const focusStyle = e => { e.target.style.borderColor = 'var(--fern)' }
  const blurStyle  = e => { e.target.style.borderColor = 'var(--parchment)' }

  return (
    <>
      <Helmet>
        <title>Contact & Devis Gratuit | MAZEAS Paysages — Paysagiste Loire-Atlantique</title>
        <meta name="description" content="Contactez MAZEAS Paysages pour un devis gratuit. Paysagiste à Saint-Philbert-de-Grand-Lieu. Tél : 06 33 46 37 69 — mazeaspaysage@orange.fr. Intervention Loire-Atlantique et Vendée." />
      </Helmet>

      {/* Header */}
      <div className="grain" style={{ background: 'var(--ink)', paddingTop: 'calc(var(--header-h) + 4rem)', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-tag" style={{ color: '#82AD6C' }}>Devis gratuit</span>
            <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 600, color: '#F2EDE2', lineHeight: 1.0, letterSpacing: '-0.025em', marginTop: '0.25rem' }}>
              Contactez-nous
            </h1>
            <p className="mt-4 max-w-xl text-base" style={{ color: '#82AD6C' }}>
              Décrivez votre projet, nous vous répondons sous 24–48h pour établir un devis personnalisé et sans engagement.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Sidebar */}
            <aside className="lg:col-span-4 flex flex-col gap-5">

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="rounded-2xl p-7"
                style={{ background: 'white', border: '1px solid var(--parchment)' }}
              >
                <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '1.5rem' }}>
                  Coordonnées
                </h2>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: Phone, label: 'Téléphone',
                      content: <a href="tel:+33633463769" className="font-sans font-medium link-draw" style={{ color: 'var(--ink)', fontSize: '1.05rem' }}>06 33 46 37 69</a>,
                    },
                    {
                      icon: Mail, label: 'E-mail',
                      content: <a href={`mailto:${EMAIL}`} className="font-sans text-sm link-draw break-all" style={{ color: 'var(--ink)' }}>{EMAIL}</a>,
                    },
                    {
                      icon: MapPin, label: 'Adresse',
                      content: <address className="not-italic font-sans text-sm" style={{ color: 'var(--ink)' }}>Saint-Philbert-de-Grand-Lieu<br/><span style={{ color: '#888' }}>44310 Loire-Atlantique</span></address>,
                    },
                    {
                      icon: Clock, label: 'Horaires',
                      content: <p className="font-sans text-sm" style={{ color: 'var(--ink)' }}>Lun – Ven : 8h – 18h</p>,
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--mist)' }}>
                        <Icon size={16} style={{ color: 'var(--fern)' }} />
                      </div>
                      <div>
                        <p className="text-xs font-sans uppercase tracking-widest mb-0.5" style={{ color: '#aaa' }}>{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Response time note */}
              <div className="rounded-2xl p-5 flex gap-3 items-start" style={{ background: 'var(--mist)', border: '1px solid rgba(78,138,53,0.2)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--fern)', flexShrink: 0, marginTop: '2px' }} />
                <p className="text-sm font-sans leading-relaxed" style={{ color: 'var(--moss)' }}>
                  Réponse en <strong>24 à 48h ouvrées</strong>. Pour un besoin urgent, appelez-nous directement.
                </p>
              </div>
            </aside>

            {/* Form panel */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-2xl p-8 md:p-10" style={{ background: 'white', border: '1px solid var(--parchment)' }}>

                {sent ? (
                  <div className="flex flex-col items-center text-center py-12 gap-5">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'var(--mist)' }}>
                      <CheckCircle2 size={30} style={{ color: 'var(--fern)' }} />
                    </div>
                    <div>
                      <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.5rem' }}>
                        Message prêt à envoyer !
                      </h2>
                      <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#666' }}>
                        Votre client mail s'est ouvert avec le message pré-rempli. Si rien ne s'est passé, appelez-nous directement au{' '}
                        <a href="tel:+33633463769" style={{ color: 'var(--fern)', fontWeight: 500 }}>06 33 46 37 69</a>.
                      </p>
                    </div>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 text-sm font-sans font-medium underline underline-offset-2"
                      style={{ color: 'var(--fern)' }}
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '2rem' }}>
                      Demande de devis gratuit
                    </h2>

                    <div role="form" aria-label="Formulaire de demande de devis" className="flex flex-col gap-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field label="Nom complet" required error={errors.nom}>
                          <input
                            type="text"
                            value={form.nom}
                            onChange={set('nom')}
                            onFocus={focusStyle}
                            onBlur={blurStyle}
                            placeholder="Jean Dupont"
                            autoComplete="name"
                            style={inputStyle(errors.nom)}
                          />
                        </Field>
                        <Field label="Téléphone">
                          <input
                            type="tel"
                            value={form.telephone}
                            onChange={set('telephone')}
                            onFocus={focusStyle}
                            onBlur={blurStyle}
                            placeholder="06 XX XX XX XX"
                            autoComplete="tel"
                            style={inputStyle(false)}
                          />
                        </Field>
                      </div>

                      <Field label="Adresse e-mail" required error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={set('email')}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                          placeholder="jean.dupont@email.fr"
                          autoComplete="email"
                          style={inputStyle(errors.email)}
                        />
                      </Field>

                      <Field label="Service souhaité">
                        <select
                          value={form.service}
                          onChange={set('service')}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                          style={{ ...inputStyle(false), cursor: 'pointer' }}
                        >
                          <option value="">Sélectionnez un service…</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </Field>

                      <Field label="Votre message" required error={errors.message}>
                        <textarea
                          value={form.message}
                          onChange={set('message')}
                          onFocus={focusStyle}
                          onBlur={blurStyle}
                          rows={5}
                          placeholder="Décrivez votre projet : surface approximative, type de travaux, votre commune…"
                          style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: '130px' }}
                        />
                      </Field>

                      <p className="text-xs font-sans" style={{ color: '#bbb' }}>
                        <span style={{ color: 'var(--fern)' }}>*</span> Champs obligatoires. Vos données servent uniquement à répondre à votre demande.
                      </p>

                      <div>
                        <button
                          onClick={handleSend}
                          className="btn-fern"
                          style={{ fontSize: '0.9rem', paddingLeft: '2.25rem', paddingRight: '2.25rem' }}
                        >
                          <Send size={15} />
                          Envoyer ma demande
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
