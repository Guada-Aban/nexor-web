'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">

      <div className="absolute inset-0">
  <img
    src="/api/images/inicio-web.jpg"
    alt="Inicio Nexor Group"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
</div>

      {/* Línea naranja lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-naranja z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32 pt-40 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="w-2 h-2 bg-naranja rounded-full" />
            <span className="text-naranja text-xs font-bold tracking-[0.3em] uppercase">
              Especialistas en Infraestructura
            </span>
          </motion.div>

          {/* Claim */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
          >
            Construimos, operamos y gestionamos para la industria
          </motion.h1>

          {/* Unidades badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-0 mb-8"
          >
            {[
              { label: 'Obras e Infraestructura', color: 'bg-naranja' },
              { label: 'Servicios Industriales', color: 'bg-green-700' },
              { label: 'Consultoría Empresarial', color: 'bg-azul' },
            ].map((u, i) => (
              <div key={u.label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${u.color}`} />
                <span className="text-white/60 text-xs font-medium">{u.label}</span>
                {i < 2 && <span className="text-white/20 mx-2">·</span>}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 bg-naranja hover:bg-naranja-deep text-white font-bold px-8 py-4 text-sm tracking-wide transition-all"
            >
              Contactanos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/obras-e-infraestructura"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold px-8 py-4 text-sm tracking-wide transition-all"
            >
              Ver servicios
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase rotate-90 mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  )
}