'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const NORMAS = [
  { codigo: 'ISO 9001:2015', descripcion: 'Gestión de la Calidad' },
  { codigo: 'ISO 14001:2015', descripcion: 'Gestión Ambiental' },
  { codigo: 'ISO 45001:2018', descripcion: 'Seguridad y Salud Ocupacional' },
]

export default function SIGQuienes() {
  return (
    <section className="bg-nexor-cream py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Descripción SIG */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1"
          >
            <div className="w-10 h-[3px] bg-naranja mb-6" />
            <h2 className="text-nexor-dark text-3xl font-bold leading-tight mb-4">
              Sistema Integrado de Gestión (SIG)
            </h2>
            <p className="text-nexor-dark/60 text-sm leading-relaxed mb-8">
              Nuestra operatividad está blindada por un sistema de trazabilidad
              total que garantiza la calidad, protege el medio ambiente y
              preserva el bienestar de nuestros trabajadores.
            </p>

            <div className="flex flex-col gap-3">
              {NORMAS.map((n) => (
                <div key={n.codigo} className="flex items-center gap-3 bg-white border border-nexor-border px-4 py-3">
                  <div className="w-8 h-8 bg-nexor-dark flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[10px] font-bold">SIG</span>
                  </div>
                  <div>
                    <p className="text-nexor-dark font-bold text-sm">{n.codigo}</p>
                    <p className="text-nexor-dark/50 text-xs">{n.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trazabilidad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-nexor-border p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-naranja flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <h3 className="text-nexor-dark font-bold">Trazabilidad Operativa</h3>
            </div>
            <p className="text-nexor-dark/60 text-sm leading-relaxed">
              Cada proceso, desde la logística de materiales hasta la entrega
              final de obra, es monitorizado bajo riguroso control documental
              que garantiza el cumplimiento normativo en cada etapa.
            </p>
            {[
              'Auditorías internas recurrentes',
              'Control de subcontratistas',
              'Documentación técnica digitalizada',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-naranja flex-shrink-0" />
                <span className="text-nexor-dark/70 text-xs">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Mejora Continua */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-nexor-dark p-8 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-azul flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <h3 className="text-white font-bold">Mejora Continua</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Utilizamos el ciclo PDCA (Planificar-Hacer-Verificar-Actuar)
              integrado en nuestra cultura diaria para minimizar costos
              operativos y maximizar la seguridad.
            </p>
            <div className="flex gap-3 mt-4">
              {['PLAN', 'DO', 'CHECK', 'ACT'].map((step, i) => (
                <div
                  key={step}
                  className="flex-1 bg-white/5 border border-white/10 p-2 text-center"
                >
                  <p className="text-white text-[10px] font-bold">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}