'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroObras() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950/30 to-stone-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg, transparent, transparent 40px,
              rgba(245,120,40,0.05) 40px, rgba(245,120,40,0.05) 41px
            )`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-naranja z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-naranja px-4 py-2 mb-8"
          >
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
              Unidad N Naranja
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
          >
            Donde la industria se construye
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
          >
            La unidad de Obras e Infraestructura de Nexor Group ejecuta obra civil,
            movimiento de suelos, construcción de locaciones y proyectos de
            infraestructura para operadores de Oil & Gas y Minería. Operamos con
            flota propia y más de 10 años de trayectoria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 bg-naranja hover:bg-naranja-deep text-white font-bold px-8 py-4 text-sm tracking-wide transition-all"
            >
              Solicitar Cotización
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold px-8 py-4 text-sm tracking-wide transition-all"
            >
              Nuestros Servicios
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10 z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center gap-8">
          <span className="text-white/40 text-xs tracking-[0.3em] uppercase">Sectores estratégicos</span>
          {['Operadoras de Oil & Gas', 'Empresas Mineras', 'Contratistas Líderes'].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-naranja rounded-full" />
              <span className="text-white/70 text-sm font-medium">{s}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}