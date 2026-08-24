'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const STATS = [
  { numero: '+10', label: 'Años de trayectoria' },
  { numero: '60+', label: 'Unidades de flota' },
  { numero: '100%', label: 'Trazabilidad GPS' },
]

export default function BajadaMarca() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Izquierda — texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-1 bg-naranja mb-6" />
            <h2 className="text-nexor-dark text-4xl md:text-5xl font-bold leading-tight mb-6">
              Integridad industrial en cada proyecto
            </h2>
            <p className="text-nexor-dark/60 text-base leading-relaxed mb-10">
              Somos un grupo de servicios industriales de capitales nacionales,
              especializado en dar soporte a las industrias más exigentes: Oil & Gas
              y Minería. Nuestra estructura está diseñada para soportar los rigores
              de la operación en campo con la precisión de la ingeniería moderna.
            </p>

            {/* Stats */}
            <div className="flex gap-10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-naranja text-4xl font-bold">{s.numero}</p>
                  <p className="text-nexor-dark/50 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Derecha — imagen placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Placeholder imagen industrial */}
            <div className="relative w-full aspect-[4/3] bg-stone-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                <span className="text-stone-500 text-sm tracking-widest uppercase">
                  Foto industrial
                </span>
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-4 -left-4 bg-naranja text-white px-6 py-4">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">Años de experiencia operativa</p>
            </div>

            {/* Badge certificado */}
            <div className="absolute top-4 right-4 bg-nexor-dark/90 backdrop-blur-sm text-white px-4 py-3 flex items-center gap-2">
              <div className="w-6 h-6 bg-naranja rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span className="text-xs font-semibold tracking-wide">Compromiso Certificado</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}