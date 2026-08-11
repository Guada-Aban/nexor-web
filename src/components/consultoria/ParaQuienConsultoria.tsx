'use client'

import { motion } from 'framer-motion'
import { Building2, Flame, Mountain } from 'lucide-react'

const PERFILES = [
  {
    icono: Building2,
    titulo: 'Empresas en Crecimiento',
    descripcion: 'PyMEs y corporaciones medianas que necesitan profesionalizar sus procesos para escalar en el mercado industrial.',
  },
  {
    icono: Flame,
    titulo: 'Operadores Oil & Gas',
    descripcion: 'Compañías de servicios petroleros que requieren cumplimiento estricto de normativas y certificaciones.',
  },
  {
    icono: Mountain,
    titulo: 'Proyectos Mineros',
    descripcion: 'Proveedores de minería que buscan optimizar su estructura de costos y gestión documental contractual.',
  },
]

export default function ParaQuienConsultoria() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-1 bg-azul mb-6" />
            <h2 className="text-nexor-dark text-4xl md:text-5xl font-bold leading-tight mb-10">
              Para quién es esta unidad
            </h2>

            <div className="flex flex-col gap-6">
              {PERFILES.map((p, i) => {
                const Icono = p.icono
                return (
                  <motion.div
                    key={p.titulo}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex gap-4 items-start border-b border-nexor-border pb-6 last:border-0"
                  >
                    <div className="w-10 h-10 bg-azul/10 flex items-center justify-center flex-shrink-0">
                      <Icono size={18} className="text-azul" />
                    </div>
                    <div>
                      <h3 className="text-nexor-dark font-bold mb-1">{p.titulo}</h3>
                      <p className="text-nexor-dark/60 text-sm leading-relaxed">{p.descripcion}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Imagen placeholder + badge */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] bg-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                <span className="text-slate-500 text-sm tracking-widest uppercase">Foto consultoría</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-azul text-white px-6 py-4">
              <p className="text-2xl font-bold">+10</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">Años de experiencia sectorial</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}