'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function FormularioServicios() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section id="registrar" className="bg-nexor-cream py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-nexor-dark p-10 flex flex-col gap-6"
          >
            <div className="w-10 h-[3px] bg-green-600" />
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              Sé el primero en conocer nuestra propuesta
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Estamos construyendo la infraestructura de servicios más robusta
              de la región. Registrá tu interés para recibir el dossier técnico
              y las fechas de lanzamiento.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              {[
                'Certificaciones ISO 9001 en proceso',
                'Operación 24/7 con trazabilidad GPS',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-white/70 text-sm uppercase tracking-wide">{item}</span>
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
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-green-600" />
                <h3 className="text-nexor-dark text-2xl font-bold">¡Registrado!</h3>
                <p className="text-nexor-dark/60 text-sm">
                  Te contactamos cuando la unidad esté operativa.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {[
                  { label: 'Nombre Completo', key: 'nombre', placeholder: 'Ej. Ing. Carlos Méndez', type: 'text' },
                  { label: 'Empresa / Operadora', key: 'empresa', placeholder: 'Nombre de la corporación', type: 'text' },
                  { label: 'Correo Electrónico Corporativo', key: 'email', placeholder: 'carlos.m@empresa.com', type: 'email' },
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
                      className="border-b-2 border-nexor-border focus:border-green-600 outline-none py-3 text-nexor-dark placeholder:text-nexor-dark/30 text-sm bg-transparent transition-colors"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="mt-4 bg-nexor-dark hover:bg-green-800 text-white font-bold py-4 text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
                >
                  Registrar Interés →
                </button>

                <p className="text-nexor-dark/30 text-[10px] text-center">
                  Al enviar este formulario, aceptás nuestro aviso de privacidad industrial.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}