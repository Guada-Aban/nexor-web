'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroConsultoria() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">

      <div className="absolute inset-0">
  <img
    src='/api/images/consultoria-empresarial.jpg'
    alt="Consultoría Empresarial"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
</div>

      {/* Línea azul lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-azul z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-azul px-4 py-2 mb-8"
          >
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
              Consultoría Empresarial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
          >
            Estructura profesional para crecer en la industria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
          >
            Transformamos la complejidad operativa en eficiencia administrativa.
            Soluciones integrales de asesoría legal, contable y estratégica diseñadas
            específicamente para los sectores de Oil & Gas y Minería.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 bg-azul hover:bg-blue-700 text-white font-bold px-8 py-4 text-sm tracking-wide transition-all"
            >
              Agenda una reunión sin compromiso
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}