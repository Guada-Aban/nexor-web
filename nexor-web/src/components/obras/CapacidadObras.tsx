'use client'

import { motion } from 'framer-motion'

const STATS = [
  { numero: '17', label: 'Camiones de flota' },
  { numero: '11', label: 'Bateas operativas' },
  { numero: '30+', label: 'Unidades de maquinaria' },
  { numero: '100%', label: 'Trazabilidad GPS', highlight: true },
]

export default function CapacidadObras() {
  return (
    <section className="bg-nexor-cream py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-nexor-dark p-10 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="w-10 h-[3px] bg-naranja mb-6" />
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
                Capacidad de Respuesta Inmediata
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Estructura propia diseñada para movilizarse a cualquier
                punto operativo de la región en tiempos récord.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`p-8 flex flex-col justify-center ${
                  s.highlight ? 'bg-naranja' : 'bg-white border border-nexor-border'
                }`}
              >
                <p className={`text-5xl font-bold mb-2 ${s.highlight ? 'text-white' : 'text-naranja'}`}>
                  {s.numero}
                </p>
                <p className={`text-sm uppercase tracking-wider ${s.highlight ? 'text-white/80' : 'text-nexor-dark/50'}`}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}