'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HeroServicios() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">

      <div className="absolute inset-0">
  <img
    src="/images/servicios-industriales.jpg"
    alt="Servicios Industriales"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
</div>

      {/* Línea verde lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-700 z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="bg-green-700 px-4 py-2">
              <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">N Verde</span>
            </div>
            <div className="border border-green-700/50 px-4 py-2">
              <span className="text-green-500 text-xs font-bold tracking-[0.2em] uppercase">Próximamente</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-5xl md:text-7xl font-bold leading-[1.02] mb-4"
          >
            Servicios{' '}
            <span className="text-green-500">Industriales</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Operación operativa de activos — Elevando la integridad estructural
            y funcional en los sectores más exigentes de la industria.
          </motion.p>

          <motion.a
            href="#registrar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 text-sm tracking-wide transition-all"
          >
            Solicitar información
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}