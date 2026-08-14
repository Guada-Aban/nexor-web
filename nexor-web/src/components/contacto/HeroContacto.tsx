'use client'

import { motion } from 'framer-motion'

export default function HeroContacto() {
  return (
    <section className="relative bg-nexor-dark pt-40 pb-24 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-naranja via-azul to-green-700" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Contacto
          </p>
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
            Conversemos sobre<br />tu próximo proyecto.
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            Oil & Gas · Minería · Infraestructura · Consultoría
          </p>
        </motion.div>
      </div>
    </section>
  )
}