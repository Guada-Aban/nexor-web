'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function SectoresSection() {
  return (
    <section className="bg-nexor-dark py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Izquierda — texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-naranja text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Mercados Verticales
            </p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
              Oil & Gas y Minería
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Entendemos la criticidad del factor tiempo en estas industrias.
              Nuestra capacidad operativa se despliega en los yacimientos y
              proyectos mineros más remotos de la región, asegurando que la
              infraestructura soporte la producción continua.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {[
                'Gestión de campamentos',
                'Obras civiles en yacimiento',
                'Logística de materiales pesados',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-naranja flex-shrink-0" />
                  <span className="text-white/70 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 text-naranja text-sm font-bold tracking-wide hover:gap-4 transition-all">
              Ver Casos de Éxito →
            </button>
          </motion.div>

          {/* Derecha — grid de imágenes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-2"
          >
            {/* Imagen grande */}
            <div className="col-span-2 aspect-[16/7] bg-stone-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-600 to-stone-800 flex items-center justify-center">
                <span className="text-stone-500 text-xs tracking-widest uppercase">Foto yacimiento</span>
              </div>
            </div>

            {/* Dos imágenes chicas */}
            <div className="aspect-square bg-stone-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-700 to-stone-900 flex items-center justify-center">
                <span className="text-stone-600 text-xs tracking-widest uppercase">Oil & Gas</span>
              </div>
            </div>
            <div className="aspect-square bg-naranja/20 relative overflow-hidden flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-naranja text-3xl font-bold">100%</p>
                <p className="text-white/60 text-xs mt-1 uppercase tracking-wider">Trazabilidad GPS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}