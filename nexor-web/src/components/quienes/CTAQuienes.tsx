'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTAQuienes() {
  return (
    <section className="bg-naranja py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent, transparent 30px,
            rgba(0,0,0,0.1) 30px, rgba(0,0,0,0.1) 31px
          )`
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para elevar el estándar de sus operaciones?
          </h2>
          <p className="text-white/70 text-base mb-10">
            Conversemos sobre su próximo desafío. Aportamos solidez técnica
            y agilidad operativa que su proyecto requiere.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center bg-nexor-dark hover:bg-black text-white font-bold px-14 py-5 text-sm tracking-widest uppercase transition-all"
          >
            Conversemos
          </Link>
        </motion.div>
      </div>
    </section>
  )
}