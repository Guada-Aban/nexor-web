'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function PoliticaHSE() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <p className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Compromiso Oficial
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-nexor-dark text-4xl font-bold">
              Política HSE, Calidad y Ambiente
            </h2>
            <div className="text-nexor-dark/30 text-xs font-mono">
              CÓDIGO: POL-NEX-001 · REVISIÓN: 01 / 2024
            </div>
          </div>
          <div className="w-full h-px bg-nexor-border mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

          {/* Declaración */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-nexor-dark/70 text-sm leading-relaxed mb-8">
              Nexor Group establece como prioridad absoluta la protección de la
              salud y la seguridad de sus trabajadores, la preservación del
              medio ambiente y el cumplimiento de los más altos estándares
              de calidad.
            </p>

            <h3 className="text-nexor-dark font-bold text-sm uppercase tracking-widest mb-4">
              Nuestros Pilares
            </h3>

            <div className="flex flex-col gap-3">
              {[
                'Cero Accidentes: La seguridad es no negociable — identificamos y mitigamos riesgos antes de iniciar cualquier tarea.',
                'Impacto Mínimo: Operamos reduciendo la huella ambiental en cada frente de trabajo.',
                'Excelencia en el Servicio: Cumplimos los requisitos de nuestros clientes superando sus expectativas técnicas.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-naranja flex-shrink-0 mt-0.5" />
                  <p className="text-nexor-dark/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Declaración Directiva */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-nexor-cream border border-nexor-border p-8"
          >
            <h3 className="text-nexor-dark font-bold text-sm uppercase tracking-widest mb-6">
              Declaración Directiva
            </h3>
            <blockquote className="text-nexor-dark/70 text-sm leading-relaxed italic mb-8">
              "Esta política es de cumplimiento obligatorio para todo el personal
              propio y contratado. La Gerencia General se compromete a proveer
              todos los recursos necesarios para asegurar que los objetivos de
              HSE y Calidad sean alcanzados, fomentando una cultura de reporte
              y responsabilidad individual."
            </blockquote>
            <div className="border-t border-nexor-border pt-4 flex items-center justify-between">
              <div>
                <p className="text-nexor-dark text-xs font-bold uppercase tracking-widest">
                  Gerencia General
                </p>
                <p className="text-nexor-dark/40 text-xs mt-1">Nexor Group · ALIAN S.A.S.</p>
              </div>
              <div className="w-16 h-px bg-nexor-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}