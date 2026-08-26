'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, CheckCircle } from 'lucide-react'

const UNIDADES = [
  { label: 'Obras e Infraestructura', value: 'obras' },
  { label: 'Consultoría Empresarial', value: 'consultoria' },
  { label: 'Servicios Industriales', value: 'servicios' },
  { label: 'Consulta general', value: 'general' },
]

export default function FormContacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    unidad: '',
    mensaje: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="bg-nexor-cream py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Info izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <div className="w-10 h-[3px] bg-naranja mb-6" />
              <h2 className="text-nexor-dark text-3xl font-bold mb-4">
                Iniciá una consulta técnica
              </h2>
              <p className="text-nexor-dark/60 text-sm leading-relaxed">
                Completá el formulario y un referente de la unidad correspondiente
                te contactará dentro de las 24 horas hábiles.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-naranja/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-naranja" />
                </div>
                <div>
                  <p className="text-nexor-dark font-bold text-sm">Sede Central</p>
                  <p className="text-nexor-dark/60 text-sm mt-1">
                    Malargüe · Mendoza · Argentina
                  </p>
                  <p className="text-nexor-dark/40 text-xs mt-1">
                    ALIAN S.A.S. 
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-naranja/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-naranja" />
                </div>
                <div>
                  <p className="text-nexor-dark font-bold text-sm">Email</p>
                  <p className="text-nexor-dark/60 text-sm mt-1">
                    contacto@nexorgroup.com.ar
                  </p>
                </div>
              </div>
            </div>

            {/* Unidades */}
            <div className="flex flex-col gap-3">
              <p className="text-nexor-dark text-xs font-bold tracking-widest uppercase mb-2">
                Nuestras unidades
              </p>
              {[
                { color: 'bg-naranja', label: 'Obras e Infraestructura' },
                { color: 'bg-azul', label: 'Consultoría Empresarial' },
                { color: 'bg-green-700', label: 'Servicios Industriales' },
              ].map((u) => (
                <div key={u.label} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${u.color}`} />
                  <span className="text-nexor-dark/70 text-sm">{u.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {enviado ? (
              <div className="flex flex-col items-center justify-center gap-6 py-20 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle size={56} className="text-naranja" />
                </motion.div>
                <h3 className="text-nexor-dark text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-nexor-dark/60 text-sm max-w-xs">
                  Un referente de la unidad correspondiente te contactará
                  dentro de las 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { label: 'Nombre Completo', key: 'nombre', type: 'text', placeholder: 'Ej. Ing. Carlos Méndez' },
                  { label: 'Empresa', key: 'empresa', type: 'text', placeholder: 'Nombre de su empresa u operadora' },
                  { label: 'Email Corporativo', key: 'email', type: 'email', placeholder: 'carlos@empresa.com' },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-2">
                    <label className="text-nexor-dark text-xs font-bold tracking-widest uppercase">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      required
                      className="border-b-2 border-nexor-border focus:border-naranja outline-none py-3 text-nexor-dark placeholder:text-nexor-dark/30 text-sm bg-transparent transition-colors"
                    />
                  </div>
                ))}

                {/* Selector de unidad */}
                <div className="flex flex-col gap-2">
                  <label className="text-nexor-dark text-xs font-bold tracking-widest uppercase">
                    ¿Con qué unidad querés contactarte?
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {UNIDADES.map((u) => (
                      <button
                        key={u.value}
                        type="button"
                        onClick={() => setForm({ ...form, unidad: u.value })}
                        className={`px-4 py-3 text-xs font-bold tracking-wide border transition-all text-left ${
                          form.unidad === u.value
                            ? 'bg-naranja border-naranja text-white'
                            : 'border-nexor-border text-nexor-dark/60 hover:border-naranja hover:text-naranja'
                        }`}
                      >
                        {u.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label className="text-nexor-dark text-xs font-bold tracking-widest uppercase">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Contanos brevemente sobre tu proyecto o consulta..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    rows={4}
                    className="border-b-2 border-nexor-border focus:border-naranja outline-none py-3 text-nexor-dark placeholder:text-nexor-dark/30 text-sm bg-transparent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-naranja hover:bg-naranja-deep text-white font-bold py-4 text-sm tracking-widest uppercase transition-colors"
                >
                  Enviar Consulta →
                </button>

                <p className="text-nexor-dark/30 text-[10px] text-center">
                  Al enviar aceptás nuestra política de privacidad.
                  Respondemos dentro de las 24 horas hábiles.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
