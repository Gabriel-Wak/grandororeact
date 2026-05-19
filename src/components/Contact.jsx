import { useState } from 'react'
import { images } from '../data/content'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '5515988308477'

function onlyNumbers(value) {
  return String(value || '').replace(/\D/g, '')
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function submit(event) {
    event.preventDefault()

    const message = [
      'Olá! Tenho interesse no Grand’Oro Vila Barth.',
      '',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone}`
    ].join('\n')

    const url = `https://wa.me/${onlyNumbers(WHATSAPP_NUMBER)}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setForm({ name: '', email: '', phone: '' })
  }

  return (
    <section id="contato" className="grid bg-navy text-white lg:grid-cols-[56%_44%] lg:bg-[linear-gradient(90deg,#031120_0_56%,#bdb3a5_56%_100%)]">
      <div className="px-6 py-14 md:px-10 lg:ml-auto lg:mr-28 lg:w-full lg:max-w-xl lg:px-0 lg:py-16">
        <h2 className="mb-8 text-2xl font-semibold leading-snug md:text-3xl">
          Entre em contato para mais informações
        </h2>

        <form onSubmit={submit} className="grid gap-4">
          <Field label="Nome" name="name" value={form.name} onChange={updateField} />
          <Field label="E-mail" name="email" type="email" value={form.email} onChange={updateField} />
          <Field label="Telefone com DDD" name="phone" value={form.phone} onChange={updateField} />

          <button type="submit" className="mt-1 flex h-12 items-center justify-center gap-3 bg-sand px-5 text-sm font-bold uppercase tracking-[0.45em] text-navy">
            Falar com um especialista <span>↗</span>
          </button>
        </form>
      </div>

      <img src={images.contactImage} alt="Imagem conceitual do empreendimento" className="h-[245px] w-full object-cover md:h-[320px] lg:h-[300px]" />
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange }) {
  return (
    <label className="grid gap-2">
      <span className="text-[11px] uppercase tracking-[0.35em] text-white">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="h-11 border border-white/45 bg-transparent px-4 text-white outline-none transition focus:border-goldLight"
      />
    </label>
  )
}
